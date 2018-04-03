# Spaceship Bug Hunt

Before you get started, follow the **setup** instructions below to add some starter data to your database. A number of bugs (8+) have been introduced to the application. You should only need to modify **one or two lines** of code per bug. Many of the bugs will throw an error in the client or server. Check the logs and use your debugger!

After importing the data, start by getting the server working. Next, move on to the **Crew** page. Fix all bugs on the **Crew** page before moving on to the **Ships** page. Consider bugs on the **Ships** page to be stretch goals. 

## Setup

```SQL
CREATE TABLE ships (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    max_crew int
);

CREATE TABLE crew (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    role varchar(255),
    ship_id INT REFERENCES "ships"
);

INSERT INTO "ships" ("name", "max_crew")
VALUES ('Serenity', 10), ('Enterprise', 200);

INSERT INTO "crew" ("name", "role", "ship_id")
VALUES ('Malcolm', 'Captain', 1),
('Kaylee', 'Mechanic', 1);

INSERT INTO "crew" ("name", "role", "ship_id")
VALUES ('Data', 'Chief Operations Officer', 2),
('Jean-Luc', 'Commanding Officer', 2),
('Deanna', 'Diplomatic Officer', 2);
```
