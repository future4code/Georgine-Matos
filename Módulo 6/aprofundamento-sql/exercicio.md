/*O DROP EXCLUI A COLUNA INFORMADA*/
/*O CHANGE ALTERA A COLUNA*/
/*O CHANGE ALTERA A COLUNA*/

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "MUDANOME003"
WHERE id = "003";

UPDATE Actor
SET birth_date = "2020/02/02"
WHERE id = "003";

SELECT UPPER(name)
from Actor where id = "005";

DELETE FROM Actor WHERE name = "Tony Ramos";

DELETE FROM Actor WHERE gender ="male" AND salary>"1000000";

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE avaliacao avaliacao FLOAT;

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

DELETE FROM Movie WHERE id = "001"