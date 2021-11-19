# CPSC_471_Final_Project
Daycare Management System


## Run the Program:

npm start

If you encounter errors enter the following code to update dependencies:

npm i

Using the Database: You will need to install MySQL on your system and create a new user

The code is:

```
CREATE USER 'daycare'@'localhost'
  IDENTIFIED BY 'cpsc471';
GRANT ALL
  ON *.*
  TO 'daycare'@'localhost'
  WITH GRANT OPTION;
```
Next you can download the schema onto your system using the following command on the MySQL command line client

```
source <path to db.sql>
```