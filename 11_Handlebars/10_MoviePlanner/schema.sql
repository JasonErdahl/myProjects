/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"
Make a database called moviePlannerDB
Inside of that database make a movies table which will contain a movie column and an id column. The id will be automatically incremented while also being the primary key.
*/

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE movie_planner_db;
USE movie_planner_db;

-- Create the table plans.
CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (movie) VALUES ('Iron Eagle');
