-- Make a new database called “programming_db” and switch into it for this activity

-- Create a table called “programming_languages” which includes a primary key named “id” which will automatically increment which each new row created, a string column called “languages,” and a numeric column called “rating.”

-- Insert some data into the table and then modify the data using the id column.

-- BONUS: Study up on how to add columns to a table and then create a boolean column called “mastered” which has a default value of true.

-- BONUS: Start looking into the concept of joins in SQL

-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS programming_db;
-- Creates the "animals_db" database --
CREATE DATABASE programming_db;

USE programming_db;

-- Creates the table "people" within animals_db --
CREATE TABLE programming_languages (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  languages VARCHAR(30),
  rating INTEGER(11),
  mastered BOOLEAN DEFAULT true, 
  PRIMARY KEY (id)
);

INSERT INTO programming_languages (languages, rating, mastered) (\
    VALUES ("ASP", 1);
