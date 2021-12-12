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
    name: "departmentName",
    message: "Enter the department name",
    validate: verifyResponses,
  },
];

const sectionToUpdate = [
  {
    type: "list",
    name: "updateChoices",
    message: "What would you like to do?",
    choices: [
      { name: "Department", value: "UpdateDepartment" },
      { name: "Role", value: "updateRole" },
      { name: "Employee Details", value: "updateDetails" },
    ],
  },
];

const updateEmployeeName = [
  {
    type: "input",
    name: "firstName",
    message: "Update Employee First Name",
  },
  {
    type: "input",
    name: "secondName",
    message: "Update Employee Second Name",
  },
];

module.exports = {
  menu,
  addDepartment,
  sectionToUpdate,
  updateEmployeeName,
};
