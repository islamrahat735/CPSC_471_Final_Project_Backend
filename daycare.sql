DROP DATABASE IF EXISTS DAYCARE;
CREATE DATABASE DAYCARE; 
USE DAYCARE;

CREATE TABLE Emergency_Contact(
	Pno varchar(255),
	Name varchar(255),
	PRIMARY KEY(Pno)
);

CREATE TABLE Account(
	Username varchar(255),
	Password varchar(255) NOT NULL,
	Access varchar(255) NOT NULL,
	PRIMARY KEY (Username)
);

CREATE TABLE Medical_Record(
	MR_Id int AUTO_INCREMENT,
	Covid_Status varchar(255),
	PRIMARY KEY (MR_Id)

);

CREATE TABLE Primary_Parent(
	P_Id int NOT NULL AUTO_INCREMENT,
	Address varchar(255) NOT NULL,
	Fname varchar(255) NOT NULL,
	Lname varchar(255) NOT NULL,
	Phone_num varchar(255) NOT NULL,
	Fees int Default 0,
	Username varchar(255),

	PRIMARY KEY (P_Id),
	FOREIGN KEY (Username) REFERENCES Account(Username) ON UPDATE CASCADE ON DELETE CASCADE

);

CREATE TABLE Child(
	Child_Id int NOT NULL AUTO_INCREMENT,
	P_Id int NOT NULL,
	Prog_name varchar(255),
	Address varchar(255),
	Fname varchar(255),
	Lname varchar(255),
	status varchar(255),
	Dob DATE NOT NULL,
	MR_Id int,

	PRIMARY KEY (Child_Id),
	FOREIGN KEY (P_Id) REFERENCES Primary_Parent(P_Id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (MR_Id) REFERENCES Medical_Record(MR_Id) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE Child_Emergency_Contact(
	Pno varchar(255),
	Ch_Id int,
	Relation varchar(255),
	
	PRIMARY KEY (Pno, Ch_Id),
	FOREIGN KEY (Pno) REFERENCES Emergency_Contact(Pno) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (Ch_Id) REFERENCES Child(Child_Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE MR_Vaccinations(
	MR_Id int,
	Vaccine varchar(255),
	PRIMARY KEY (MR_Id, Vaccine),
	FOREIGN KEY (MR_Id) REFERENCES Medical_Record(MR_Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE MR_Medications(
	MR_Id int,
	Med varchar(255),
	PRIMARY KEY (MR_Id, Med),
	FOREIGN KEY (MR_Id) REFERENCES Medical_Record(MR_Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE MR_Allergies(
	MR_Id int,
	Allergy varchar(255),
	PRIMARY KEY (MR_Id, Allergy),
	FOREIGN KEY (MR_Id) REFERENCES Medical_Record(MR_Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE MR_Health_Conditions(
	MR_Id int,
	Health_Condition varchar(255),
	PRIMARY KEY (MR_Id, Health_Condition),
	FOREIGN KEY (MR_Id) REFERENCES Medical_Record(MR_Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Employee(
	E_Id int AUTO_INCREMENT,
	Address varchar(255),
	Fname varchar(255),
	Lname varchar(255),
	Phone_num varchar(255),
	MR_Id int ,

	PRIMARY KEY (E_Id),
	FOREIGN KEY (MR_Id) REFERENCES Medical_Record(MR_Id) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE Employee_Emergency_Contact(
	Pno varchar(255),
	E_Id int,
	Relation varchar(255),

	PRIMARY KEY (Pno, E_Id),
	FOREIGN KEY (Pno) REFERENCES Emergency_Contact(Pno) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (E_Id) REFERENCES Employee(E_Id) ON UPDATE CASCADE ON DELETE CASCADE

);

CREATE TABLE Nurse(
	E_Id int,

	PRIMARY KEY (E_Id),
	FOREIGN KEY (E_Id) REFERENCES Employee(E_Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Caretaker(
	E_Id int,

	PRIMARY KEY (E_Id),
	FOREIGN KEY (E_Id) REFERENCES Employee(E_Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Admin(
	E_Id int,
	Username varchar(255),

	PRIMARY KEY (E_Id),
	FOREIGN KEY (E_Id) REFERENCES Employee(E_Id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (Username) REFERENCES Account(Username) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Teacher(
	E_Id int,
	Username varchar(255),

	PRIMARY KEY (E_Id),
	FOREIGN KEY (E_Id) REFERENCES Employee(E_Id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (Username) REFERENCES Account(Username) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Program(
	Name varchar(255),
	Fees int,
	Age_Group varchar(255),

	PRIMARY KEY (Name)
);

CREATE TABLE Class(
	C_Id int AUTO_INCREMENT,
	Prog_name varchar(255),
	Class_name varchar(255) NOT NULL,
	startTime varchar(255) NOT NULL,
	endTime varchar(255) NOT NULL,
	T_Id int,

	PRIMARY KEY(C_Id, Prog_name),
	FOREIGN KEY(Prog_name) REFERENCES Program(Name) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(T_Id) REFERENCES Teacher(E_Id)
);

CREATE TABLE Field_Trip(
	Trip_Id int AUTO_INCREMENT,
	Program varchar(255),
	Location varchar(255),
	T_Id int,
	PRIMARY KEY (Trip_Id),
	FOREIGN KEY (Program) REFERENCES Program(Name) ON UPDATE CASCADE ON DELETE SET NULL,
	FOREIGN KEY (T_Id) REFERENCES Teacher(E_Id) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE Teacher_Attends_Class(
	T_Id int,
	Date varchar(255),
	C_Id int,

	PRIMARY KEY (T_Id, Date, C_Id),
	FOREIGN KEY(T_Id) REFERENCES Teacher(E_Id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(C_Id) REFERENCES Class(C_Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Child_Attends_Class(
	Child_Id int,
	Date varchar(255),
	C_Id int,

	PRIMARY KEY (Child_Id, Date, C_Id),
	FOREIGN KEY(Child_Id) REFERENCES Child(Child_Id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(C_Id) REFERENCES Class(C_Id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Child_Attends_Field_Trip(
	Ch_Id int NOT NULL,
	Trip_Id int NOT NULL,

	PRIMARY KEY(Ch_Id, Trip_Id),
	FOREIGN KEY(Ch_Id) REFERENCES Child(Child_Id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(Trip_Id) REFERENCES Field_Trip(Trip_Id) ON UPDATE CASCADE ON DELETE CASCADE
);


INSERT INTO Account(Username,Password, Access)
VALUES('parent@gmail.com', 'password', 'parent'),
	('josHill@gmail.com', 'pass', 'teacher'),
	('admin123@gmail.com', 'random', 'admin'),	
	('sarahcameron@gmail.com', 'word', 'TEACHER');

INSERT INTO Primary_Parent(Address, Fname, Lname, Phone_num, Fees, Username)
VALUES('121 Taradale Dr. NE', 'John', 'Doe', '403-273-7373', Default, 'parent@gmail.com');



INSERT INTO Child(P_Id, Prog_name, Address, Fname, Lname, status, Dob, MR_Id)
VALUES(1, 'Preschool', '768 Deerfoot Meadows Cr. NE', 'John', 'Walker', 'Active', '2000-06-06', NULL);

INSERT INTO Medical_Record(Covid_Status)
VALUES("negative"),
	  ("negative");

INSERT INTO MR_Vaccinations(MR_Id, Vaccine)
VALUES(1, "Covid Vaccine");

INSERT INTO MR_Vaccinations(MR_Id, Vaccine)
VALUES(1, "Hepatitis");

INSERT INTO Emergency_Contact(Name,Pno)
VALUES('Asma', '119');

INSERT INTO MR_Health_Conditions(MR_Id, Health_Condition)
VALUES(1, "Flu");

INSERT INTO MR_Allergies(MR_Id, Allergy)
VALUES(1,"Dust");

INSERT INTO Child(P_Id, Prog_name, Address, Fname, Lname, status, Dob, MR_Id)
VALUES(1, 'Preschool', '768 Deerfoot Meadows Cr. NE', 'Allen', 'Walker', 'Active', '2000-01-01', 1);

INSERT INTO Employee(Address, Fname, Lname, Phone_num, MR_Id)
VALUES('121 Taradale Dr NE', 'John', 'Doe', '4032737373', 1),
	("12 University Dr.", "Josephine", "Hill", "403-415-4234", NULL),
	("12 Skyview Dr", "Josh", "Day", "403-333-3333", NULL),
	("33 cornerstone Ave NE", "sarah", "cameron", "403-444-4545", NULL);

INSERT INTO Teacher(E_Id, Username)
VALUES (2, 'josHill@gmail.com'),
	(4, 'sarahcameron@gmail.com');


INSERT INTO Program(Name, Fees, Age_Group)
VALUES ("Preschool", 300, "2-4"),
	(3, 350, "3-4");


-- INSERT INTO Class(Prog_name, Class_name, )

INSERT INTO Nurse (E_Id)
VALUES(1);

INSERT INTO Caretaker(E_Id)
VALUES (1);

INSERT INTO Admin (E_Id, Username)
VALUES(3, 'admin123@gmail.com');
 
INSERT INTO Field_Trip (Trip_Id, Program, Location, T_Id)
VALUES("20", 3, "Calgary", 4);

