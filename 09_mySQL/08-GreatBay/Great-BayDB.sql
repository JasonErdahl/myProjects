DROP DATABASE IF EXISTS great_bayDB;

CREATE DATABASE great_bayDB;

USE great_bayDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(45) NOT NULL,
  high_bid DECIMAL(10,2) NULL,
  descript VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item_name, high_bid, descript)
VALUES ("truck", 1.00, ""),("car", 2.50, ""),("bike", 2.50, "");


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
