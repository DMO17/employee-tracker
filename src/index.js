const { query } = require("./connection");
const declareSqlQuery = require("./utility/util");

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

const start = () => {
  // declare one question with list of actions
  // prompt question and get answer (action)
  // insert if blocks for all actions
  // if displayDepartments()
  // if displayRoles()
  // if displayEmployees()
  if ("addDepartment") {
    // prompt department questions (name) and get answers
    // construct mysql insert query
    // execute mysql query
  }
  if ("addRole") {
    // get departments from DB
    // pass the departments to a choice constructor function
    // prompt question to select department, title, salary and get answers
    // construct mysql insert query for role
    // execute mysql query
  }
  if ("addEmployee") {
    // get roles from DB
    // get employees from DB
    // pass the roles to a choice constructor function
    // pass the employees to a choice constructor function
    // prompt question to select role, select manager, first name, last name and get answers
    // construct mysql insert query for employee
    // execute mysql query
  }
};

start();
