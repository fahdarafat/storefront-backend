# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index 'products' [GET]
- Show 'products/:id' [GET]
- Create [token required] 'products' [POST]
- [OPTIONAL] Top 5 most popular products 'products/top_five' [GET]
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index [token required] 'users' [GET]
- Show [token required] 'users/:id' [GET]
- Create [token required] 'users' [POST]

#### Orders

- Current Order by user (args: user id)[token required] 'users/:id/orders' [GET]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

- Table: Products (id: serial primary key, name: varchar(80), price: integer not null)
- Table: Users (id: serial primary key, firstName: varchar(20) not null, latName: varchar(20) not null, password: varchar not null);
- Table: Orders (id: serial primary key, productID: integer references productID, quantity: integer not null, userID: integer references userID, isComplete: boolean default false)

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
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
