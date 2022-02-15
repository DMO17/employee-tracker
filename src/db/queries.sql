USE company_db;

-- view all departments
SELECT * FROM department;

-- view all roles
SELECT role.id, role.title, role.salary, department.name FROM role JOIN department ON role.department_id = department.id ORDER BY department.name;

-- view all employees
SELECT employee_role.firs_name, employee_role.last_name, title, salary, name
FROM employee employee_role 
LEFT JOIN role 
ON employee_role.role_id=role.id 
LEFT JOIN department
ON role.department_id=department.id;

