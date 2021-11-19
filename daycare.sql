DROP DATABASE IF EXISTS DAYCARE;
CREATE DATABASE DAYCARE; 
USE DAYCARE;

CREATE TABLE Account(
	Username varchar(255),
	Password varchar(255) NOT NULL,
	Access varchar(255),
	PRIMARY KEY (Username)
);

