--TASK2-->School database.
CREATE database school;
--creating Class table with the columns: id, name, begins (date), ends (date)
CREATE TABLE `class` (id int AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50) NOT NULL,begin DATE,end DATE);
--Create Student table with the columns: id, name, email, phone, class_id (foreign key).
CREATE Table `student` (id int AUTO_INCREMENT PRIMARY KEY,name VARCHAR(60) NOT NULL,email VARCHAR(40),phone VARCHAR(15),class_id int,CONSTRAINT FOREIGN KEY (class_id) REFERENCES Class (id));
--Create an index on the name column of the student table.
CREATE index index_name on student (name);
--Add a new column to the class table named status which can only have the following values:not-started,ongoing,finished (hint: enumerations)
ALTER TABLE class ADD status ENUM("not-started", "ongoing", "finished");