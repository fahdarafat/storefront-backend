CREATE TABLE orders( 
    id SERIAL PRIMARY KEY,
    is_complete BOOLEAN DEFAULT false,
    user_id bigint REFERENCES users(id)
);