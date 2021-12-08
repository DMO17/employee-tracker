INSERT INTO department (name) 
VALUES 
( 'Marketing' ),
(  'Finance'  ),
('Web-developer');

INSERT INTO role (title ,salary, department_id ) 
VALUES 
( 'Marketing Manager' , 50000 , 1  ),
(  'Marketing Executive', 100000 ,  1 ),
(  'Senior Finance Analyst', 80000 ,  2 ),
(  'Junior Finance Analyst', 30000 ,  2 ),
(  'Front-end Developer', 40000 ,  3 ),
(  'Back-end Developer', 55000 ,  3 ),
(  'Full-stack Developer', 75000 ,  3 );

INSERT INTO employee (first_name ,last_name, department_id , role_id ) 
VALUES 
( 'Max' , 'Allen', 1 , 1 ),
( 'Henry' , 'Thiery', 1 , 2 ),
( 'Arron' , 'WB', 2 , 1 ),
( 'Zack' , 'N Coady', 2 , 2 ),
( 'Goaliee' , 'Tinho', 3 , 1 ),
( 'Sadio' , 'Sane', 3 , 2 ),
(  'Sepherus' , 'Ale', 3 , 3  );
