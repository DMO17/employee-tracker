const inquirer = require("inquirer");

const {
  displayDepartments,
  displayEmployees,
  displayRoles,
  userActionAddDepartment,
  getRoles,
  getDepartments,
  userActionAddRole,
  getEmployees,
  userActionAddEmployee,
} = require("./utility/mysql");

const {
  menu,
  exitApplication,
  addDepartment,
  addRole,
} = require("./utility/questions");

const { displayChosenMySqlResultsTable } = require("./utility/util");

/////////////////////////////////////////////////////////////////////

const start = async () => {
  let inProgress = true;

  // while (inProgress) {

  const { homeMenu } = await inquirer.prompt(menu);

  const displayUserViewAction = displayChosenMySqlResultsTable({
    homeMenu,
    displayDepartments,
    displayRoles,
    displayEmployees,
  });

  if (homeMenu === "addDepartment") {
    const { addDepartmentDetails } = await inquirer.prompt(addDepartment);

    userActionAddDepartment(addDepartmentDetails);
  }

  if (homeMenu === "addRole") {
    // getDepartments();
    // getRoles();

    const { roleTitle, roleSalary } = await inquirer.prompt(addRole);

    userActionAddRole(roleTitle, roleSalary);
  }

  if (homeMenu === "addEmployee") {
    getDepartments();
    getRoles();
    getEmployees();

    const { firstName, secondName, departmentId, roleId } =
      await inquirer.prompt(addRole);

    userActionAddEmployee(firstName, secondName, roleId, departmentId);
  }

  const { exitApp } = await inquirer.prompt(exitApplication);

  if (exitApp) return inProgress === false;
  // };
};

start();

// add ROLE
if (homeMenu === "addRole") {
  // present the list of departments to add a role to from the company_db table

  const generateDepartmentChoices = (departmentsFromDB) => {
    return departmentsFromDB.map((department) => {
      return {
        name: department.name,
        value: department.id,
      };
    });
  };

  const departments = await db.query("SELECT * FROM department");

  //create the inquirer questions areray
  const employeeQuestions = [
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
  const { title, salary, departmentId } = await inquirer.prompt(roleQuestions);
  // Add the user answers to the role table
  const addRoleDetailsToTable = await db.query(
    `INSERT INTO role (title, salary, department_id) VALUES("${title}", ${salary}, ${departmentId})`
  );
}
