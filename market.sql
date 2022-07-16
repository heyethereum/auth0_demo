show tables;
describe seller;
select
  *
from
  seller;
select
  seller_name as "Seller Name"
from
  seller;
-- This is COMMENT
select
  seller.seller_name
from
  seller;
select
  s.seller_name as "Seller Name"
from
  seller as s;
describe customer;
select
  *
from
  customer;
SELECT
  product_id,
  product_name
from
  product;
SELECT
  transaction_datetime,
  customer_id,
  product_id,
  transaction_amount
from
  transaction;
SELECT
  *
from
  customer
WHERE
  customer_type = 1;
SELECT
  *
from
  customer
WHERE
  customer_wallet <> 7000
  and customer_type = 0;
SELECT
  *
from
  customer
ORDER BY
  customer_wallet,
  customer_name;
SELECT
  *
from
  customer
WHERE
  customer_tolerance in (0.7, 0.6, 0.5)
LIMIT
  5;
SELECT
  *
FROM
  customer
LIMIT
  3;
SELECT
  *
from
  customer
WHERE
  customer_wallet > 5000
  AND customer_tolerance > 0.7;
SELECT
  *
from
  customer
WHERE
  customer_wallet > 5000
  AND customer_tolerance > 0.7
ORDER BY
  customer_wallet DESC;
select
  *
FROM
  transaction
WHERE
  customer_id IN (1, 3, 5, 7, 9);
select
  *
FROM
  customer
ORDER BY
  customer_wallet DESC
LIMIT
  5;
SELECT
  COUNT(*) as " Total records for 0 type"
FROM
  customer
where
  customer_type = 0;
SELECT
  NOW();
SELECT
  AVG(customer_wallet) as "Average wallet"
FROM
  customer;
SELECT
  MIN(customer_wallet) as "Minimum balance",
  max(customer_wallet) as "Maximum balance"
FROM
  customer;
SELECT
  AVG(customer_wallet)
FROM
  customer;
SELECT
  seller_id,
  sum(stock_quantity)
from
  stock
GROUP BY
  seller_id;
SELECT
  customer_type,
  avg(customer_wallet) as "Average balance",
  count(customer_wallet) as "Total population"
from
  customer
GROUP BY
  customer_type;
SELECT
  customer_tolerance,
  MAX(customer_wallet)
FROM
  customer
GROUP BY
  customer_tolerance;
select
  customer_type,
  avg(customer_wallet)
FROM
  customer
GROUP BY
  customer_type;
SELECT
  product_id,
  SUM(transaction_quantity)
from
  transaction
group by
  product_id;
SELECT
  t.transaction_datetime,
  s.seller_name,
  t.transaction_quantity,
  t.transaction_amount
FROM
  transaction as t
  INNER JOIN seller as s on t.seller_id = s.seller_id;
SELECT
  t.transaction_datetime,
  s.seller_name,
  t.transaction_quantity,
  t.transaction_amount
FROM
  transaction as t
  LEFT JOIN seller as s on t.seller_id = s.seller_id;
SELECT
  t.transaction_datetime,
  s.seller_name,
  t.transaction_quantity,
  t.transaction_amount
FROM
  transaction as t
  RIGHT JOIN seller as s on t.seller_id = s.seller_id;
SELECT
  t.*,
  c.customer_name
FROM
  customer as c
  INNER JOIN transaction as t ON c.customer_id = t.customer_id;
SELECT
  c.customer_name,
  Max(t.transaction_datetime),
  t.*
FROM
  customer as c
  INNER JOIN transaction as t ON c.customer_id = t.customer_id
GROUP BY
  c.customer_name;
select
  *
from
  transaction
WHERE
  seller_id = 2;
select
  t.transaction_datetime,
  s.seller_name,
  t.transaction_quantity,
  Avg(t.transaction_amount)
from
  transaction as t
  left join seller as s on t.seller_id = s.seller_id
group by
  seller_name;
SELECT
  t.transaction_datetime,
  s.seller_name,
  t.transaction_quantity,
  t.transaction_amount,
  t.product_id,
  st.stock_cost,
  (t.transaction_amount-st.stock_cost) as Earnings
from
  seller as s
  LEFT JOIN transaction as t ON t.seller_id = s.seller_id
  INNER JOIN stock as st ON t.product_id = st.product_id;

  
SELECT
  t.transaction_datetime,
  s.seller_name,
  t.transaction_quantity,
  t.transaction_amount,
  t.product_id,
  st.stock_cost,
  avg(t.transaction_amount-st.stock_cost) as Earnings
from
  seller as s
  LEFT JOIN transaction as t ON t.seller_id = s.seller_id
  INNER JOIN stock as st ON t.product_id = st.product_id GROUP BY s.seller_name;

  SELECT  * FROM product where product_name LIKE "iphone X_";
  SELECT  * FROM product where product_name LIKE "iphone X%";

  CREATE DATABASE b15_Alex;
