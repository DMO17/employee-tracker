const db = require("./connection");

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

module.exports = declareSqlQuery;
