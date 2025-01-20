# Sql Assignment

### This assignment covers a design schema of a ecommerce website its optimizations and various queries



## ERD


![Database Schema](https://i.imgur.com/nHTEgFj.png)


## Customer Table ->
- customer_id:  Primary Key of the customer.
- first_name: First name of the customer.
- last_name: Last name of the customer.
- email: Email address of the customer.
- phone: Phone number of the customer.
- address: Address of the customer.


## Categories Table ->
- category_id: Primary key of the  category.
- name: Name of the category.
- description: Description of the category.


## Products Table ->
- product_id: Primary key of the product.
- category_id: For relating the product to its specific category.
- name: Name of the product.
- description: Description of the product.
- price: Price of the product.
- quantity: Quantity of the product in stock.
- image_url: url of the image of the product.
- discount: Discount on the product.


## Orders Table ->
- order_id: Primary key of the order.
- customer_id: For relating the order to the customer.
- total: Total amount of the order.
- shipping_address: Shipping address of the order.


## Order Items Table ->
- order_item_id: Primary key of the order item.
- order_id: For relating the order item to the order.
- product_id: For relating the order item to the product.
- quantity: Quantity of the product in the order.


## Reviews Table ->
- review_id: Primary key of the review.
- product_id: For relating the review to the product.
- customer_id: For relating the review to the customer.
- rating: Rating of the product.
- review: Review of the product.






## Relationships Between Tables

- A customer can have multiple orders.
- An order can have multiple order items.
- An order item can have only one product.
- A product can have multiple reviews.
- A product can belong to only one category.


---


### Creating Tables


- Customer Table

```sql

 CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(10)  UNIQUE NOT NULL,
    address TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```



- Categories Table 

```sql 
 
CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
);

```

- Products Table

```sql

 CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    image_url VARCHAR(255) NOT NULL,
    discount DECIMAL(10, 2) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE SET CASCADE
);

```

- Orders Table

```sql

 CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    total DECIMAL(10, 2) NOT NULL,
    shipping_address TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE SET CASCADE
);

```

- Order Items Table

```sql

 CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE SET CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE SET CASCADE
);

```

- Reviews table 

```sql 
CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    customer_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
);

```


---



### Inserting Sample Data


```sql
-- Inserting the User data

 INSERT INTO customers (first_name, last_name, email, phone, address) VALUES ('Sai','Anish','dummy@gmail.com', '9691319018'  'Indore , Madhya pradesh');

--  Inserting the Category data

INSERT INTO categories (name, description) VALUES ('Electronics', 'Electronic Items');

-- Inserting the Product data

INSERT INTO products (category_id, name, description, price, quantity, image_url, discount) VALUES (1, 'Lenovo thinkpad', 'good laptop', 500000, 10, '.jpg', 0);

-- Inserting the Order data
INSERT INTO orders (customer_id, total, shipping_address) VALUES (1, 20000, '123 Main St, New York, NY');

-- Inserting the Order Items data
INSERT INTO order_items (order_id, product_id, quantity) VALUES (1, 1, 1);

```

---

### Read Operations 
 

- Get all the products

```sql
  
SELECT * FROM products;

```
 
- Get all the categories

```sql
  SELECT * FROM categories; 

```

-  Retreiving the products based on the price range

```sql
 
SELECT * FROM products WHERE price BETWEEN 10000 AND 50000;

```
![price range](https://i.imgur.com/kVNh1rC.png)

- Retreiving the products based on the category

```sql
 
SELECT * FROM products WHERE category_id = 1;

```

![](https://i.imgur.com/aa5h4HP.png)


--- 

### Update Operations 

-  Update product stock

```sql
   
UPDATE products SET quantity = quantity - 1 WHERE product_id = 1;

```

-  Update the product price

```sql
  
UPDATE products SET price = price - 1000 WHERE product_id = 1;

```


---

### Delete Operations

-  Delete the product

```sql
DELETE FROM products WHERE product_id = 1;
```


- Delete the category

```sql
DELETE FROM categories WHERE category_id = 1;
```


---




### Advanced Queries and Join

- Get the total number of products in each category

```sql
 
SELECT c.name, COUNT(p.product_id) as totalProducts FROM products p JOIN categories c ON p.category_id = c.category_id GROUP BY c.name;

```

![](https://i.imgur.com/c8dFd9K.png)


- Retrieving orders along with the corresponding customer and product information.

```sql
 
SELECT o.order_id, c.first_name, c.last_name, p.name, oi.quantity
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;


```



- Getting the total revenue for a specific time period.

```sql

SELECT SUM(total) as total_revenue
FROM orders
WHERE created_at BETWEEN '2025-01-01' AND '2025-12-31';

```

![](https://i.imgur.com/Q2IDA7K.png)

- Finding customers who have made multiple purchases.

```sql

SELECT c.customer_id, c.first_name, c.last_name, COUNT(o.order_id) as totalorders
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
HAVING COUNT(o.order_id) > 1;

```

![](https://i.imgur.com/nffiA74.png)


--- 

### Indexing and optimization

In order to optimize the performance of the database, we can create indexes on the columns that are frequently used in the queries. 

For example, we can create indexes on the `category_id`, `customer_id`, `product_id` columns in the respective tables.

By creating indexes on these columns, the database can quickly locate the rows that matcing the query conditions
