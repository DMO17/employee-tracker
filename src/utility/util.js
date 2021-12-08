const db = require("../connection");

const declareSqlQuery = (sqlQuery) => {
  return db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    console.table(result);
    db.end();
  });
};

const displayChosenMySqlResultsTable = ({
  homeMenu,
  displayDepartments,
  displayRoles,
  displayEmployees,
}) => {
  if (homeMenu === "viewAllDepartments") return displayDepartments();
  if (homeMenu === "viewAllRoles") return displayRoles();
  if (homeMenu === "viewAllEmployees") return displayEmployees();
};

module.exports = { declareSqlQuery, displayChosenMySqlResultsTable };
