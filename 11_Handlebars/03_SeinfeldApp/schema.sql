-- Created the DB "wizard_schools_db" (only works on local connections)
DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools" 
CREATE TABLE actors  (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points INT NOT NULL,
  attitude varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
-- column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar)
INSERT INTO actors (name, coolness_points, attitude)  VALUES ("Jerry",90,"relaxed");
INSERT INTO actors (name, coolness_points, attitude)  VALUES ("Elaine",80,"righteous");
INSERT INTO actors (name, coolness_points, attitude)  VALUES ("Kramer",50,"doofas");
INSERT INTO actors (name, coolness_points, attitude)  VALUES ("George",55,"selfish");