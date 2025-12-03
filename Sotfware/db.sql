CREATE DATABASE IF NOT EXISTS miapp;

USE miapp;

CREATE TABLE users (
    id INT AUTO_INCREMET PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    rol ENUM('admim'. 'cliente') DEFAULT 'cliente';
);
