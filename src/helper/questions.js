const { verifyResponses, verifyNumber } = require("./util");

const menu = [
  {
    type: "list",
    name: "homeMenu",
    message: "What would you like to do?",
    choices: [
      { name: "View All Departments", value: "viewAllDepartments" },
      { name: "View All Roles", value: "viewAllRoles" },
      { name: "View All Employees", value: "viewAllEmployees" },
      { name: "Add Department", value: "addDepartment" },
      { name: "Add Role", value: "addRole" },
      { name: "Add Employee", value: "addEmployee" },
      { name: "Update Employee Role", value: "updateEmployeeRole" },
      { name: "Exit Application", value: "exitApp" },
    ],
  },
];

const addDepartment = [
  {
    type: "input",
    name: "addDepartmentDetails",
    message: "Enter the department name",
    validate: verifyResponses,
  },
];

const addRole = [
  {
    type: "input",
    name: "roleTitle",
    message: "Enter the role title",
    validate: verifyResponses,
  },
  {
    type: "input",
    name: "roleSalary",
    message: "Enter the salary for that role",
    validate: verifyNumber,
  },
  {
    type: "input",
    name: "departmentId",
    message: "Which department is this role linked to?",
    validate: verifyNumber,
  },
];

const addEmployee = [
  {
    type: "input",
    name: "firstName",
    message: "Enter the employees first name",
    validate: verifyResponses,
  },
  {
    type: "input",
    name: "secondName",
    message: "Enter the employees second name",
    validate: verifyResponses,
  },
  {
    type: "input",
    name: "departmentId",
    message: "Which department (id) does this employee belong to?",
    validate: verifyNumber,
  },
  {
    type: "input",
    name: "roleId",
    message: "Which role (id) does this employee work as?",
    validate: verifyResponses,
  },
];

const exitApplication = [
  {
    type: "confirm",
    name: "exitApp",
    message: "Would you like to exit the Application ?",
  },
];

module.exports = { menu, exitApplication, addDepartment, addRole, addEmployee };
