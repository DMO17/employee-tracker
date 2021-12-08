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
    ],
  },
];

module.exports = { menu };
