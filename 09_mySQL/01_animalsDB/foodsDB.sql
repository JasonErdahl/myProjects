-- For the table favorite_foods...

-- Create the column “food” which can take in a 50 character string and cannot be NULL
-- Create the column “score” which can take in an integer
-- For the table favorite_songs...

-- Create the column “song” which can take in a 100 character string and cannot be NULL
-- Create the column “artist” which can take in a 50 character string
-- Create the column “score” which can take in an integer
-- For the table favorite_movies...

-- Create the column “film” which can take in a string and cannot be NULL
-- Create the column “five_times” which can take in a boolean
-- create the column “score” which can take in an integer
-- BONUS: Go online and look into how one might go about adding data into a table.


-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS favoriteFoods_db;
-- Creates the "animals_db" database --
CREATE DATABASE favoriteFoods_db;

-- Makes it so all of the following code will affect animals_db --
USE favoriteFoods_db;

-- Creates the table "people" within animals_db --
CREATE TABLE favorite_foods (
  -- Makes a string column called "name" which cannot contain null --
  food VARCHAR(50) NOT NULL,
  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  -- Makes a string column called "name" which cannot contain null --
  song VARCHAR(100) NOT NULL,
  artist VARCHAR(50),
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Makes a string column called "name" which cannot contain null --
  id INTEGER NOT NULL auto_increment,
  favorite_movies VARCHAR(100) NOT NULL,
  five_times BOOLEAN DEFAULT false,
  score INTEGER(10),
  PRIMARY KEY (id)
);

