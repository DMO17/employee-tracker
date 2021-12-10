INSERT INTO department (name) 
VALUES 
( 'Marketing' ),
(  'Finance'  ),
('Web-development'),
(  'Education');



INSERT INTO role (title ,salary, department_id ) 
VALUES 
(  'Marketing Executive', 134560 ,  1 ),
( 'Marketing Manager' , 53406 , 1  ),
(  'Marketing Analyst',35550 , 1),
(  'Marketing Innovator', 47000 , 1),
(  'Head Of Finance', 97054 , 2), 
(  'Senior Finance Analyst', 84300 ,  2 ),
(  'Junior Finance Analyst', 32300 ,  2 ),
(  'Budgeting and Forecasting' , 48700 , 2),
(  'Accounting and Reporting' , 38700, 2),
(  'Booking Keeping' , 28700 , 2),
(  'Project and Development Manager', 66530 ,  3 ),  
(  'Senior Front-end Developer', 55670 ,  3 ), 
(  'Junior Front-end Developer', 39688 ,  3 ), 
(  'Senior Back-end Developer', 59698 ,  3 ), 
(  'Junior Back-end Developer', 36670 ,  3 ), 
(  'Full-stack Developer', 75000 ,  3 ),
(  'Head Teacher', 49054, 4 ), 
(  'Head of Math Department', 41553, 4 ),  
(  'Math Teacher', 31054, 4 ),
(  'Head of Science Department', 40323, 4 ),
(  'Physics Teacher', 31054, 4 ),
(  'Chemistry Teacher', 31054, 4 ), 
(  'Biology Teacher', 31054, 4 ),
(  'Head of English Department', 39383, 4 ), 
(  'English Language Teacher', 30655, 4 ), 
(  'English Litrture Teacher', 30655, 4 );

INSERT INTO employee (first_name ,last_name , department_id, role_id , manager_id)
VALUES 
( 'Max' , 'Allen', 1 , 1 , NULL) , 
( 'Henry' , 'Thiery', 1 ,2 , 1),
( 'Arron' , 'WB', 1 , 3 , 2),
( 'Zack' , 'N Coady', 1 , 3 , 2),
( 'Goaliee' , 'Tinho', 1 , 3 , 2),
( 'Sadio' , 'Sane', 1 , 4 , 2),
(  'Sepherus' , 'Ale', 1 ,4 , 2),

(  'Nathan,','Ake' ,2 ,5 , NULL),
(  'Clauido ','Zouma ',2 ,6 , 8),
(  ' Howard ','Sparks ',2 ,6, 8),     
(   'Jurgen ','Tuchel ',2 ,7, 8),       
(  'Carlito ','Beumad ',2 ,7, 8),          
(   'Amaya ','Lutz ',2 ,8, 8),             
(   'Reagan ','Jefferson ',2 ,8, 8),         
(  'Alvaro ','Ali ',2 ,9, 8),              
(  'Kyleigh ','Mccarthy ',2 ,9, 8),          
(  'Diya ','Harvey ',2 ,10, 8),                 
(   'Victor ','Bruce ',2 ,10, 8),

(  'Tiffany  ','Erickson ' ,3 ,11 , NULL),
(  'Dominic ','Zhang ' ,3 ,12 , 19),
(  'Justice  ','Walter ' ,3 ,12, 19),
(  'Linda  ','Poole ' ,3 ,13, 19),
(  'Campbell  ','Lucas ' ,3 ,13, 19),
(  'Ayana  ','Briggs ' ,3 ,14, 19),
(  'Moses  ','Farrell ' ,3 ,14, 19),
(  'Adrian  ','Kirby ' ,3 ,15, 19),
(  'Saniya  ','Pineda ' ,3 ,15, 19),
(  'Nola  ','Carson ' ,3 ,16, 19),

(  'Rivera  ','Rivera ' ,4 ,17 , NULL),
(  'Coleman  ','Warner ' ,4 ,18 , 29),
(  'Itzel ','Church ' ,4 ,19, 30),
(  'Diego','Poole ' ,4 ,19, 30),
(  'Braun','Mariyah  ' ,4 ,20, 29),
(  'Cannon ','Lara ' ,4 ,21, 33),
(  'Black  ','Diana  ' ,4 ,22, 33),
(  'Javier   ','Vincent ' ,4 ,23, 33),
(  'Mccann  ','Bria  ' ,4 ,24, 29),
(  'Cristopher   ','Burton ' ,4 ,25, 37),
(  'Blair  ','Jaycee  ' ,4 ,26, 37);

