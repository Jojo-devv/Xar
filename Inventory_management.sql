-- Create Database
CREATE DATABASE IF NOT EXISTS inventory_management;
USE inventory_management;

-- Table for Users
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'employee') DEFAULT 'employee'
);

-- Table for Products
CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    supplier_id INT
);

-- Table for Suppliers
CREATE TABLE IF NOT EXISTS suppliers (
    supplier_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact_email VARCHAR(100),
    contact_phone VARCHAR(15)
);

-- Table for Customers
CREATE TABLE IF NOT EXISTS customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(15)
);

-- Table for Transactions
CREATE TABLE IF NOT EXISTS transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    customer_id INT,
    quantity INT NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Insert Default Admin User
INSERT INTO users (username, password_hash, role) VALUES 
('admin', '$2y$10$ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwx12345', 'admin');

-- Insert Sample Suppliers
INSERT INTO suppliers (name, contact_email, contact_phone) VALUES 
('Supplier A', 'supplierA@example.com', '1234567890'),
('Supplier B', 'supplierB@example.com', '0987654321');

-- Insert Sample Products
INSERT INTO products (name, description, price, stock, supplier_id) VALUES 
('Product 1', 'Description for Product 1', 50.00, 100, 1),
('Product 2', 'Description for Product 2', 30.00, 200, 2);

-- Insert Sample Customers
INSERT INTO customers (name, email, phone) VALUES 
('John Doe', 'john.doe@example.com', '5551234567'),
('Jane Smith', 'jane.smith@example.com', '5557654321');

-- Insert Sample Transactions
INSERT INTO transactions (product_id, customer_id, quantity) VALUES 
(1, 1, 2),
(2, 2, 5);

-- Commit all changes
COMMIT;
