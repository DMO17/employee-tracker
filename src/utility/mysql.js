const { declareSqlQuery } = require("./util");

const displayDepartments = () => {
  // execute mysql query
  // log/table departments

  const query = "SELECT * FROM department";

  declareSqlQuery(query);
};

const displayRoles = () => {
  // execute mysql query
  // log/table roles

  const query =
    "SELECT role.id, role.title, role.salary, department.name FROM role JOIN department ON role.department_id = department.id ORDER BY department.name;";

  declareSqlQuery(query);
};

const displayEmployees = () => {
  // execute mysql query
  // log/table employees

  const query =
    "SELECT employee_role.first_name, employee_role.last_name, title, salary, name FROM employee employee_role LEFT JOIN role ON employee_role.role_id=role.id LEFT JOIN department ON role.department_id=department.id;";

  declareSqlQuery(query);
};

const getDepartments = () => {
  // execute mysql query
  // return departments

  const query = "SELECT name FROM department";

  declareSqlQuery(query);
};

const getRoles = () => {
  // execute mysql query
  // return roles

  const query = "SELECT title FROM role";

  declareSqlQuery(query);
};

const getEmployees = () => {
  // execute mysql query
  // return employees

  const query = "SELECT first_name , last_name FROM employee";

  declareSqlQuery(query);
};

const constructDepartmentChoices = (departments) => {
  // return an array of department choices
};

const constructRoleChoices = (roles) => {
  // return an array of role choices
};

const constructEmployeeChoices = (roles) => {
  // return an array of employee choices
};

const userActionAddDepartment = (departmentName) => {
  const query = `INSERT INTO department(name) VALUE(${departmentName})`;

  declareSqlQuery(query);
};

const userActionAddRole = (roleName, salary) => {
  const query = `USE company_db ; INSERT INTO role (title , salary) VALUES ( '${roleName}' , ${salary} )`;

  declareSqlQuery(query);
};

const userActionAddEmployee = (employeeName) => {
  const query = `USE company_db ; INSERT INTO department (name) VALUES ( '${departmentName}' )`;

  declareSqlQuery(query);
};

module.exports = {
  displayDepartments,
  displayRoles,
  displayEmployees,
  userActionAddDepartment,
  userActionAddRole,
  getDepartments,
  getRoles,
  getEmployees,
};

//
