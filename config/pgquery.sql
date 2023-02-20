--create user
CREATE USER BATS WITH PASSWORD 'password' CREATEDB;

--create database
CREATE DATABASE bats;

--create table
CREATE TABLE users
(id BIGSERIAL PRIMARY KEY NOT NULL,
fname VARCHAR(150) NOT NULL,
lname VARCHAR(150) NOT NULL,
dob DATE,
phone INTEGER NOT NULL,
email VARCHAR(150) NOT NULL UNIQUE,
country VARCHAR(100) NOT NULL,
state_of_residence VARCHAR(100) NOT NULL,
program VARCHAR(150) NOT NULL,
faculty VARCHAR(150) NOT NULL,
course VARCHAR(150) NOT NULL,
matric INTEGER NOT NULL UNIQUE,
post VARCHAR(50),
gradyear DATE NOT NULL,
mascot VARCHAR(250) NOT NULL,
occupation VARCHAR(250),
job_desc VARCHAR(250) ,
office_phone INTEGER,
office_address VARCHAR(250) ,
password VARCHAR(250) NOT NULL,
date_registered DATE NOT NULL DEFAULT NOW(),
access VARCHAR(250) DEFAULT 'alumni');

--insert into table
INSERT INTO users (fname, lname, phone, email, country, state_of_residence, program, faculty, course, matric, gradyear, mascot, password, access)
VALUES ('king' , 'francis', '07083530423', 'king@king.com', 'naij', 'lagos', 'bach', 'SE', 'SE', '20/0774', '2023-07-01', 'royalty', 'king', 's_admin');

INSERT INTO users (fname, lname, phone, email, country, state_of_residence, program, faculty, course, matric, gradyear, mascot, password)
VALUES ('test2' , 'Gee', '07083530423', 'test2@test.com', 'naij', 'lagos', 'bach', 'SE', 'SE', '20/0726', '2023-07-01', 'royalty', 'test');
