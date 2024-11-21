CREATE DATABASE db_bolstad_backyard;

CREATE TABLE participants (
                              id SERIAL PRIMARY KEY,
                              first_name VARCHAR(50) NOT NULL,
                              last_name VARCHAR(50) NOT NULL,
                              email VARCHAR(100) UNIQUE NOT NULL,
                              age INT,
                              registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);