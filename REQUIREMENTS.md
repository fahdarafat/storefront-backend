# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints
- First Endpoint required to get the token is `localhost:3000/users/signup` [POST]
### Products
- `localhost:3000/products` [GET]
- `localhost:3000/products/:id` [GET]
- `localhost:3000/products` [POST] [Token required]
- `localhost:3000/products/:id` [Delete]
### Users
- `localhost:3000/users` [GET] [Token required]
- `localhost:3000/users/:id` [GET] [Token required]
- `localhost:3000/users` [POST] [Token required]
### Orders
- `localhost:3000/orders` [GET]
- `localhost:3000/orders/:id` [GET]
- `localhost:3000/orders` [POST]
- `localhost:3000/orders/:id/complete` [PUT]
- `localhost:3000/orders/user/:user_id` [GET] [Token required]

#### Products

- Index 'products' [GET]
- Show 'products/:id' [GET]
- Create [token required] 'products' [POST]
- Delete 'products/:id' [token required] [DELETE]
- [OPTIONAL] Top 5 most popular products 'products/top_five' [GET]
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index [token required] 'users' [GET]
- Show [token required] 'users/:id' [GET]
- Create [token required] 'users' [POST]

#### Orders

- Index 'orders' [GET]
- Show 'orders/:id' [GET]
- Create 'orders' [POST]
- Complete Order 'orders/:id/complete' [PUT]
- Current Order by user (args: user id)[token required] 'orders/user/:user_id' [GET]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

- Table: Products (id: serial primary key, name: varchar(80), price: integer not null)
- Table: Users (id: serial primary key, firstName: varchar(20) not null, latName: varchar(20) not null, password: varchar not null);
- Table: Orders (id: serial primary key, userID: integer[Foreign key to user table], is_complete: boolean default false)
- Table: Order_Products(id: serial primary key, quantity: integer, order_id: integer [Foreign key to orders(id)], product_id: integer [Foreign key to products(id)])

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- user_id
- status of order (active or complete)
