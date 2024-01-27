create database if not exists companyDB; 

use companyDB

create table employe(
    id INT(11) not null auto_increment,
    name varchar(100) default null,
    salary int(5) default null,

    primary key (id)
);

insert into employe values 
(1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 2500),
(4, 'Max', 1500);
