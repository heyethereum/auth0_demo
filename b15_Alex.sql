CREATE TABLE users(
  user_id INTEGER AUTO_INCREMENT,
  user_name VARCHAR(100),
  user_email VARCHAR(100),
  user_dob DATE,
  PRIMARY KEY(user_id)
);

SHOW  TABLEs;

describe users;

INSERT INTO users 
  (user_name, user_email, user_dob)
VALUES
  ("Alex", "piggyinu@gmail.com", "1981-03-12"),
  ("piggy", "piggyinu@gmail.com", "2000-03-12");

  SELECT * FROM users;

  DELETE FROM users WHERE user_dob > "2000-01-01";

  DELETE FROM users;

  DELETE FROM users where user_id IN (8,2,3,4,5);

  UPDATE users SET user_email= "piggyinu@gmail.com" where user_id =1;

  CREATE table Inventory (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(100),
    description VARCHAR (300),
    category VARCHAR(100),
    brand VARCHAR(100),
    price DECIMAL (10,2),
    PRIMARY KEY(id)
  );

  describe Inventory;

  INSERT into Inventory 
    (name, description, category, brand, price)
  VALUES 
    ("strong", "I am tomato,Strong", "vegetables", "strong-tomaies", 10.90),
    ("weak", "I am tomato, Weak", "vegetables", "weak-tomaies", 11.90),
    ("Ape", "I am potatoes, only", "vegetables", "ape-potatoes", 12.90);

  SELECT * FROM Inventory;

  UPDATE Inventory SET category = "tomatoes" WHERE description LIKE  ("%tomato%");

  ALTER TABLE Inventory ADD supplier varchar(100);
