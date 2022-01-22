CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    firstName VARCHAR(20) NOT NULL, 
    lastName VARCHAR(20) NOT NULL, 
    password VARCHAR not null);