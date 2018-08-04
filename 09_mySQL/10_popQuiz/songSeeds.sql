--1,Bing Crosby,White Christmas,1942,39.903,23.929,5.7,2.185,0.54
--2,Bill Haley & his Comets,Rock Around the Clock,1955,36.503,19.961,7.458,5.663,0.76
--3,Celine Dion,My Heart Will Go On,1998,35.405,12.636,8.944,23.701,3.61
USE top_songsDB;

INSERT INTO Top5000 (rankINT,artist,album,yearINT,raw_total,raw_usa,raw_uk,raw_Eur,raw_rest_of_world)
VALUES (1,"Bing Crosby","White Christmas",1942,39.903,23.929,5.7,2.185,0.54);

INSERT INTO Top5000 (rankINT,artist,album,yearINT,raw_total,raw_usa,raw_uk,raw_Eur,raw_rest_of_world)
VALUES (2,"Bill Haley & his Comets","Rock Around the Clock",1955,36.503,19.961,7.458,5.663,0.76);

INSERT INTO Top5000 (rankINT,artist,album,yearINT,raw_total,raw_usa,raw_uk,raw_Eur,raw_rest_of_world)
VALUES (3,"Celine Dion","My Heart Will Go On",1998,35.405,12.636,8.944,23.701,3.61);