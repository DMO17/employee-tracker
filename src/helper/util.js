const verifyResponses = (input) => {
  return input ? true : "Please Enter Something";
};

const verifyNumber = (input) => {
  const reg = /^\d+$/;
  return reg.test(input) || "Please Enter A Valid Number";
};

const generateDepartmentChoices = (departmentsFromDB) => {
  return departmentsFromDB.map((department) => {
    return {
      name: department.name,
      value: department.id,
    };
  });
};

const generateRoleChoices = (rolesFromDB) => {
  return rolesFromDB.map((roles) => {
    return {
      name: roles.title,
      value: roles.id,
    };
  });
};

const generateEmployeeChoices = (employeesFromDB) => {
  return employeesFromDB.map((employee) => {
    return {
      name: `${employee.first_name} ${employee.last_name}: ${employee.name} `,
      value: [employee.id, employee.department_id],
    };
  });
};

module.exports = {
  verifyNumber,
  verifyResponses,
  generateDepartmentChoices,
  generateRoleChoices,
  generateEmployeeChoices,
};
