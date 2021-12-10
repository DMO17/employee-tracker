const inquirer = require("inquirer");

const Db = require("./connection/connection");
const { menu, addDepartment } = require("./helper/questions");

const db = new Db({
  host: process.envDB_HOST || "localhost",
  user: process.envDB_USER || "root",
  password: process.envDB_PASSWORD || "Password123!!",
  database: process.envDB_NAME || "company_db",
});

const start = async () => {
  let inProgress = true;

  while (inProgress) {
    // start the connection to the mysql database
    await db.start();

    // prompt a list of actions the user can perform
    const { homeMenu } = await inquirer.prompt(menu);

    // view list of all DEPARTMENT
    if (homeMenu === "viewAllDepartments") {
      const listOfDepartments = await db.query("SELECT * FROM department");
      console.table(listOfDepartments);
    }

    // view list of all ROLES
    if (homeMenu === "viewAllRoles") {
      const listOfRoles = await db.query(
        "SELECT role.id, role.title, role.salary, department.name FROM role JOIN department ON role.department_id = department.id ORDER BY department.name;"
      );
      console.table(listOfRoles);
    }

    // view list of all Employees
    if (homeMenu === "viewAllEmployees") {
      const listOfEmployees = await db.query(
        "SELECT employee_role.first_name, employee_role.last_name, title, salary, name FROM employee employee_role LEFT JOIN role ON employee_role.role_id=role.id LEFT JOIN department ON role.department_id=department.id;"
      );
      console.table(listOfEmployees);
    }

    // add department
    if (homeMenu === "addDepartment") {
      const { departmentName } = await inquirer.prompt(addDepartment);

      const addDepartmentNameToTable = await db.query(
        `INSERT INTO department(name) VALUE("${departmentName}";)`
      );
    }

    // If user wants the leave the app
    if (homeMenu === "exitApp") {
      db.stop();
      return inProgress === false;
    }
  }
};

start();
