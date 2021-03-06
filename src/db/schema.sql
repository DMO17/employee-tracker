DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db ;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
salary DECIMAL(9 ,2) NOT NULL,
department_id INT,
FOREIGN KEY (department_id)
REFERENCES department(id)
ON DELETE CASCADE,
PRIMARY KEY (id)
);


CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
role_id INT,
department_id INT,
manager_id INT ,
FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
PRIMARY KEY (id),
FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

