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

INSERT INTO favorite_foods (food, score)
VALUES ("Pizza", 100);
INSERT INTO favorite_foods (food, score)
VALUES ("Chili", 90);
INSERT INTO favorite_foods (food, score)
VALUES ("Clif Bar", 80);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("One","Metallica", 100);
INSERT INTO favorite_songs (song, artist, score)
VALUES ("Master Of Puppets","Metallica", 100);
INSERT INTO favorite_songs (song, artist, score)
VALUES ("Fire","Toto", 100);

INSERT INTO favorite_movies (favorite_movies, five_times, score)
VALUES ("Mr ME", TRUE, 100);
INSERT INTO favorite_movies (favorite_movies, five_times, score)
VALUES ("Big", FALSE, 100);
INSERT INTO favorite_movies (favorite_movies, five_times, score)
VALUES ("Paul", TRUE, 100);

ALTER TABLE {favorite_foods} 
ADD {processed} {BOOLEAN} {FALSE|NOT NULL} 
CONSTRAINT {CONSTRAINT_NAME} DEFAULT {DEFAULT_VALUE}
WITH VALUES

ALTER TABLE favorite_foods
        ADD processed BOOLEAN FALSE|NOT NULL --Or NOT NULL.
WITH VALUES 

Instructions

It is time to add some data into FavoriteDB! The data that you add should be unique to you and you should try to test your skills in not only adding new data, but also attempt to update old data as well!

Try to add at least three rows of data to each table.

BONUS: Look into how you you might go about creating a column that can hold a default value within it and how default values work when creating new rows.

BONUS: Look into how you might go about creating a column with a default value that automatically go up with each new row

BONUS: Look into the concept of making a column the “primary key”

ULTRA BONUS: Try to create a column called “id” in one of your tables that can contain an integer, is the primary key for the table, cannot be NULL, and automatically increments with each new row added.