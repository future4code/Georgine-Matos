USE `joy-419603-georgine-matos`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY, /*cadeia de caracteres limitado a 255*/     
    name VARCHAR (255) NOT NULL, /*cadeia de caracteres limitado a 255*/ 
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL, /*o dado esperado é em formato de data*/ 
    gender VARCHAR(6) NOT NULL /*cadeia de caracteres limitado a 6*/ 
);

SHOW DATABASES; /*AQUI É APRESENTADO OS BANCOS DISPONÍVEIS*/

SHOW TABLES; /*AQUI É APRESENTADO TABELA DO BANCO SELECIONADO*/

DESCRIBE Actor; /*AQUI É APRESENTADO TODO O CONTEXTO QUE A TABELA POSSUI*/

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "GLORIA PIRES",
  120000,
  "1963-08-23", 
  "FEMALE"
);

/*ERRO AO INSERIR 'OBJETO' PELO ID JÁ EXISTENTE. DUPLICIDADE NA CHAVE PRIMÁRIA*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "TESTE",
  120000,
  "1963-08-23", 
  "FEMALE"
);

/*A ORDEM DOS VALORES NAO CONDIZ COM O TIPO DE ENTRADA*/
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

/*O VALOR DE NOME NÃO É PASSADO*/
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "autodenome",
  400000,
  "1949-04-18", 
  "male"
);

/*A PASSAGEM DA DATA ESTÁ ERRADA*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

SELECT * FROM Actor WHERE gender = "female";

SELECT salary FROM Actor WHERE name = "Tony Ramos";

SELECT * FROM Actor WHERE gender = "invalid";

SELECT id, name, salary FROM Actor WHERE salary>500000;

/*ERRO APRESENTADO POR NÃO EXISTIR NOME NA TABELA*/
SELECT id, nome from Actor WHERE id = "002";

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor WHERE name LIKE "A%" OR name LIKE "J%";

SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") and salary > 300000;