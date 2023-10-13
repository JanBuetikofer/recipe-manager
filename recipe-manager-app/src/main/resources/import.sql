CREATE TABLE ingredient (ID INT PRIMARY KEY, name VARCHAR, unit VARCHAR);

CREATE TABLE recipe (ID INT PRIMARY KEY, name VARCHAR);

CREATE TABLE recipe_ingredient (ID INT PRIMARY KEY, amount VARCHAR,ingredient_id INT,recipe_id INT);



insert into ingredient (id, name, unit) values (1, 'Weizennudeln', 'Packung');
insert into ingredient (id, name, unit) values (2, 'Fruehlingszwiebel', '');
insert into ingredient (id, name, unit) values (3, 'Koriander', 'Packung');
insert into ingredient (id, name, unit) values (4, 'Pouletbrust', 'Stück');
insert into ingredient (id, name, unit) values (5, 'Erdnussbutter', 'EL');
insert into ingredient (id, name, unit) values (6, 'Sojasauce', 'EL');
insert into ingredient (id, name, unit) values (7, 'Sesamoel', 'EL');
insert into ingredient (id, name, unit) values (8, 'Sambal Olek', 'EL');
insert into ingredient (id, name, unit) values (9, 'Limette', '');
insert into ingredient (id, name, unit) values (10, 'Ingwer', '');
insert into ingredient (id, name, unit) values (11, 'Knoblauch', '');

insert into recipe (id, name) values (1, 'Nudeln mit Erdnuss-Sauce');

insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (1, 1, 1, 1);
insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (2, 1, 2, 1);
insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (3, 0.5, 3, 1);
insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (4, 1, 4, 1);
insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (5, 1.5, 5, 1);
insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (6, 1, 6, 1);
insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (7, 0.5, 7, 1);
insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (8, 1, 8, 1);
insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (9, 0.5, 9, 1);
insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (10, 1, 10, 1);
insert into recipe_ingredient(id, amount, ingredient_id, recipe_id) values (11, 1, 11, 1);