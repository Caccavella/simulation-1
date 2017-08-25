drop table if exists inventory;

Create table if not exists inventory (
id SERIAL PRIMARY KEY,
name TEXT,
price MONEY,
imageurl TEXT
);