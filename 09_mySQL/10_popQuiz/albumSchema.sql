DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top3000 (
  rankINT INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  yearINT INT NULL,
  raw_total DECIMAL(10,3) NULL,
  raw_usa DECIMAL(10,3) NULL,
  raw_uk DECIMAL(10,3) NULL,
  raw_Eur DECIMAL(10,3) NULL,
  raw_rest_of_world DECIMAL(10,3) NULL,
  PRIMARY KEY (rankINT)
);


--   1,The Beatles,Sgt Pepper's Lonely Hearts Club Band,1967,62.984,29.233,13.31,8.757,0.553


--SELECT top3000.artist, top3000.album, top3000.yearINT, top5000.artist, top5000.album, top5000.yearINT
--FROM top3000 
--INNER JOIN top5000 ON top3000.artist=top5000.artist
--WHERE ((top3000.album)='Rumours')