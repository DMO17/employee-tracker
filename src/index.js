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
