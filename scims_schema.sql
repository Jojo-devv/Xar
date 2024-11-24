CREATE DATABASE IF NOT EXISTS scims_db;

USE scims_db;

CREATE TABLE IF NOT EXISTS inventory (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

Add sample data
INSERT INTO inventory (name, quantity, price) VALUES ('Apple', 100, 0.99);
INSERT INTO inventory (name, quantity, price) VALUES ('Orange', 50, 1.25);
