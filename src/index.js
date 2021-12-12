const inquirer = require("inquirer");

const Db = require("./connection/connection");

const {
  generateDepartmentChoices,
  generateRoleChoices,
  generateEmployeeChoices,
} = require("./helper/util");

const {
  menu,
  addDepartment,
  sectionToUpdate,
  updateEmployeeName,
} = require("./inquirerQuestions/questions");

//create a new instance of the Db class to use the start , stop and query methods
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

      const addEmployeeDetailsToTable = await db.query(
        `INSERT INTO employee (first_name ,last_name , department_id, role_id , manager_id) VALUES("${firstName}", "${secondName}", ${departmentId}, ${roleId}, NULL)`
      );
    }

    //Update employee details

    if (homeMenu === "updateEmployeeRole") {
      // present a list of names to choose from
      const listOfEmployees = await db.query(
        "SELECT employee_role.id, employee_role.first_name, employee_role.last_name,role.department_id, name FROM employee employee_role LEFT JOIN role ON employee_role.role_id=role.id LEFT JOIN department ON role.department_id=department.id;"
      );

      const updateEmployeeQuestion = [
        {
          type: "list",
          message: "Please select an employee to update:",
          name: "employeeId",
          choices: generateEmployeeChoices(listOfEmployees),
        },
      ];

      //   prompt the Employee names to update info
      const { employeeId } = await inquirer.prompt(updateEmployeeQuestion);

      // provide options on what to update about the employee
      const { updateChoices } = await inquirer.prompt(sectionToUpdate);

      // update employee personal details
      if (updateChoices === "updateDetails") {
        const { firstName, secondName } = await inquirer.prompt(
          updateEmployeeName
        );

        const employeeNamesUpdated = await db.query(
          ` UPDATE employee SET first_name = '${firstName}', last_name = '${secondName}'   WHERE id = ${employeeId[0]};`
        );
      }

      // update employee role in the same department
      if (updateChoices === "updateRole") {
        const roles = await db.query(
          `SELECT id ,title FROM role WHERE department_id = ${employeeId[1]}`
        );

        const roleQuestions = [
          {
            type: "list",
            message: "Please select a role:",
            name: "roleId",
            choices: generateRoleChoices(roles),
          },
        ];

        const { roleId } = await inquirer.prompt(roleQuestions);

        const employeeRoleUpdated = await db.query(
          ` UPDATE employee SET role_id = ${roleId}  WHERE id = ${employeeId[0]};`
        );
      }

      // update employee department

      if (updateChoices === "UpdateDepartment") {
        const departments = await db.query("SELECT * FROM department");

        const departmentQuestions = [
          {
            type: "list",
            message: "Please select a department:",
            name: "departmentId",
            choices: generateDepartmentChoices(departments),
          },
        ];

        const { departmentId } = await inquirer.prompt(departmentQuestions);

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
        ];

        const { roleId } = await inquirer.prompt(roleQuestions);

        const employeeDepartmentUpdated = await db.query(
          ` UPDATE employee SET role_id = ${roleId} , department_id = ${departmentId}  WHERE id = ${employeeId[0]};`
        );
      }
    }

    //exit app
    if (homeMenu === "exitApp") {
      // Exit Application
      // If user wants the leave the app
      db.stop();
      return inProgress === false;
    }
  }
};

start();
