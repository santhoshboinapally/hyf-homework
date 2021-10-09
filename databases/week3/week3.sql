SET
  NAMES utf8mb4;
CREATE database mealsharing;
use mealsharing;
CREATE Table meal(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(250) NOT NULL,
    description TEXT,
    location VARCHAR(150),
    `when` DATETIME,
    max_reservations INT,
    price DECIMAL(10.2),
    created_date DATE
  );
CREATE Table reservation(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE,
    contact_phonenumber VARCHAR(250),
    contact_name VARCHAR(250),
    contact_email VARCHAR(250),
    FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`)
  );
CREATE TABLE review(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(300),
    description TEXT,
    meal_id INT,
    FOREIGN KEY(`meal_id`) REFERENCES `meal` (`id`),
    stars INT,
    created_date DATE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
INSERT INTO meal (title,description,location,`when`,max_reservations,price,created_date)VALUES('Chickenburger','crispy chicken nugget,cream and fresh salads','herlev','2021-10-04 12:00:00',6,'600','2021-10-01 13:00:00');
INSERT INTO meal(title,description,location,`when`,max_reservations,price,created_date)VALUES ('Vegburger','Veg nugget,cream and fresh salads','bagsvard','2021-10-03 12:00:00',4,'320','2021-10-02 13:00:00');
INSERT INTO meal (title,description,location,`when`,max_reservations,price,created_date)VALUES('Lambburger','grilled lamb meat cream and fresh salads','rodover','2021-10-05 12:00:00',2,'300','2021-10-04 13:00:00');
INSERT INTO meal (title,description,location,`when`,max_reservations,price,created_date)VALUES('Grilledchickenburger','grilled chicken meat, cream and fresh salads','herlev','2021-10-04 12:00:00', 6,'600','2021-10-01 13:00:00');
INSERT INTO meal (title,description,location,`when`,max_reservations,price,created_date)VALUES('Chicken noodles','fresh chicken, rice noodles,soya souse, and fresh vegs','herlev','2021-10-06 12:00:00',5,'500','2021-10-04 13:00:00');
INSERT INTO meal (title,description,location,`when`,max_reservations,price,created_date)VALUES('Rød grød med fløde','Skyl bærrene, og fjern blomst og stilke','copenhagen','2021-10-04 12:00:00',5,'100','2021-10-01 13:00:00');
INSERT INTO reservation(number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email)VALUES(4,2,'2021-10-02','111111','Jhon','jhon@mail.com');
INSERT INTO reservation(number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email)VALUES(2,5,'2021-10-04','222222','Daniel','daniel@mail.com');
INSERT INTO reservation(number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email)VALUES(5,2,'2021-10-04','333333','santhosh','santhosh@mail.com');
INSERT INTO reservation(number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email)VALUES(3,2,'2021-10-05','444444','sunil','sunil@mail.com');
INSERT INTO reservation(number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email)VALUES(4,2,'2021-10-03','555555','abed','abed@mail.com');
INSERT INTO review(title, description, meal_id, stars, created_date)VALUES('Good', 'It was good ', 2, 3, Null);
INSERT INTO review(title,description,meal_id,stars,created_date)VALUES('Super','It was really tasty',4,5,'2021-10-03');
INSERT INTO review(title,description,meal_id,stars,created_date)VALUES('good','It was really good',4,5,'2021-10-04');
INSERT INTO review(title,description,meal_id,stars,created_date)VALUES('Super','It was really tasty',5,5,'2021-10-03');
INSERT INTO review(title,description,meal_id,stars,created_date)VALUES('Super','It was really tasty',1,5,'2021-10-01');
-- Get all meals
SELECT *
from meal;
-- Add a new meal
INSERT INTO meal (title,description,location,`when`,max_reservations,price,created_date)VALUES('chickensandwitch','chicken strips,cream and fresh salads','bagsvard','2021-10-03 12:00:00',4,'320','2021-10-02 13:00:00');
-- Get a meal with any id, fx 1
SELECT *
from meal
WHERE id = 4;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title = 'Vegpasta',description = 'pasta,souse and veg',price = 95
WHERE id = 7;
-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 11;
-- Get all reviews
SELECT *
FROM review;
-- Add a new review
INSERT INTO review(`title`,`description`,`meal_id`,`stars`,`created_date`)VALUES('good','It was really good',3, 5,'2021-10-05');
-- Get a review with any id, fx 1
SELECT *
from review
WHERE id = 9;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
set title = 'avg',description = 'ok',stars = 2
WHERE id = 5;
-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 11;
-- Get all reservations
SELECT *
from reservation;
-- Add a new reservation
INSERT INTO reservation (number_of_guests,meal_id, created_date,contact_phonenumber,contact_name,contact_email)VALUES(3,2,'2021-10-05','444444','sunil','sunil@mail.com');
-- Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 2;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
set number_of_guests = 6,meal_id = 6
WHERE id = 5;
-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 11;
-- Get meals that has a price smaller than a specific price fx 90
SELECT *
from meal
WHERE price < 200;
-- Get meals that still has available reservations
SELECT *
FROM meal
WHERE max_reservations > (SELECT SUM(number_of_guests) FROM reservation WHERE meal_id = meal.id);
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE title LIKE '%Rød grød med%';
-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2021-10-01'
  AND '2021-10-02';
-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
LIMIT 5;
-- Get the meals that have good reviews
SELECT meal.*, AVG(review.stars) AS Stars_recieved
FROM meal
   JOIN review ON meal.id=review.Meal_Id
WHERE review.stars>=3
GROUP BY review.meal_id;

-- Get reservations for a specific meal sorted by created_date
SELECT meal.id,meal.title,reservation.meal_id,reservation.created_date
FROM meal,reservation
WHERE meal.title LIKE "Vegburger"
and meal.id = reservation.meal_id
ORDER BY reservation.created_date;
-- Sort all meals by average number of stars in the reviews
SELECT meal.id,meal.title,meal.price,review.stars
FROM meal,review
WHERE meal.id = review.meal_id
GROUP BY meal.id 
ORDER BY AVG(stars);
