const inquirer = require("inquirer");

const Db = require("./connection/connection");

const { menu, addDepartment } = require("./helper/questions");

//create a new instance of the Db class to use the start , stop and query methods
const db = new Db({
  host: process.envDB_HOST || "localhost",
  user: process.envDB_USER || "root",
  password: process.envDB_PASSWORD || "Password123!!",
  database: process.envDB_NAME || "company_db",
});

const generateDepartmentChoices = (departmentsFromDB) => {
  return departmentsFromDB.map((department) => {
    return {
      name: department.name,
      value: department.id,
    };
  });
};

const generateRoleChoices = (rolesFromDB) => {
  return rolesFromDB.map((roles) => {
    return {
      name: roles.title,
      value: roles.id,
    };
  });
};

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

    // add DEPARTMENT
    if (homeMenu === "addDepartment") {
      const { departmentName } = await inquirer.prompt(addDepartment);

      const addDepartmentNameToTable = await db.query(
        `INSERT INTO department(name) VALUE("${departmentName}";)`
      );
    }

    // add ROLE
    if (homeMenu === "addRole") {
      // present the list of departments to add a role to from the company_db table

      const departments = await db.query("SELECT * FROM department");

      //create the inquirer questions areray
      const roleQuestions = [
        {
          type: "list",
          message: "Please select a department:",
          name: "departmentId",
          choices: generateDepartmentChoices(departments),
        },
        {
          type: "input",
          message: "Enter the role title:",
          name: "title",
        },
        {
          type: "input",
          message: "Enter the salary for that role:",
          name: "salary",
        },
      ];

      // prompt the questions needed for the details of the role
      const { title, salary, departmentId } = await inquirer.prompt(
        roleQuestions
      );
      // Add the user answers to the role table
      const addRoleDetailsToTable = await db.query(
        `INSERT INTO role (title, salary, department_id) VALUES("${title}", ${salary}, ${departmentId})`
      );
    }

    // add EMPLOYEE
    if (homeMenu === "addEmployee") {
      // present a list of departments to choose from
      const departments = await db.query("SELECT * FROM department");

      //   prompt the questions to for the department of of the employee

      const departmentQuestion = [
        {
          type: "list",
          message: "Please select a department:",
          name: "departmentId",
          choices: generateDepartmentChoices(departments),
        },
      ];

      const { departmentId } = await inquirer.prompt(departmentQuestion);

      // list the roles for that specific department

      const roles = await db.query(
        `SELECT id ,title FROM role WHERE department_id = ${departmentId}`
      );

      const roleQuestions = [
        {
          type: "list",
          message: "Please select a role:",
          name: "roleId",
          choices: generateRoleChoices(roles),
        },
        {
          type: "input",
          message: "Enter First Name:",
          name: "firstName",
        },
        {
          type: "input",
          message: "Enter Second Name:",
          name: "secondName",
        },
      ];

      const { roleId, firstName, secondName } = await inquirer.prompt(
        roleQuestions
      );

      console.log(departmentId, roleId, firstName, secondName);
    }

    // Exit Application
    if (homeMenu === "exitApp") {
      // If user wants the leave the app
      db.stop();
      return inProgress === false;
    }
  }
};

start();
