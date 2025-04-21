CREATE DATABASE crudnode;
USE crudnode;

CREATE TABLE vehiculos
(
	id 			INT AUTO_INCREMENT PRIMARY KEY,
    tipo 		VARCHAR(40) 		NOT NULL,
    marca 		ENUM('Kia','Toyota','Nissan','Hyundai','Javal') NOT NULL,
	color 		VARCHAR(40) 		NOT NULL
)ENGINE = INNODB;

INSERT INTO vehiculos (tipo, marca, color) VALUES
	('Hatchback', 'Hyundai', 'Blanco'),
    ('Camioneta','Toyota','Negro');

SELECT * FROM vehiculos;