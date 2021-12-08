const start = async () => {
  // declare one question with list of actions
  // prompt question and get answer (action)
  // insert if blocks for all actions

  const { homeMenu } = await inquirer.prompt(menu);

  const DisplayUserViewAction = displayChosenMySqlResultsTable({
    homeMenu,
    displayDepartments,
    displayRoles,
    displayEmployees,
  });

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
