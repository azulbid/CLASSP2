CREATE SCHEMA proyectoIntegrador;
USE proyectoIntegrador;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR (200) NOT NULL,
contrasena VARCHAR (200) NOT NULL,
fotodeperfil TEXT ,
fecha DATE NOT NULL,
dni  INT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED NOT NULL,
nombreproducto VARCHAR (200) NOT NULL,
descripcionproducto VARCHAR (800) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY ,
id_post INT UNSIGNED NOT NULL,
id_usuario INT UNSIGNED NOT NULL,
texto_comentario TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL,
FOREIGN KEY (id_post) REFERENCES productos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios 
VALUES(DEFAULT, "ninateller@gmail.com" , "ninucha08", "Foto", "2003-07-08", 44937782, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios 
VALUES(DEFAULT, "azulbid@gmail.com" , "juanita04", "Foto", "2002-07-17", 44837452, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios 
VALUES(DEFAULT, "loloriber@gmail.com" , "lolodelab", "Foto", "2004-01-08", 45524367, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios 
VALUES(DEFAULT, "nestorortigoza@gmail.com" , "cuervo1908", "Foto", "1983-09-08", 25876456, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios 
VALUES(DEFAULT, "agustinmartegani@gmail.com" , "marta212", "Foto", "1998-04-08", 3647483, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos 
VALUES(DEFAULT, 1, "Venus de Milo", "La Afrodita de Milo (en griego, Αφροδίτη της Μήλου), más conocida como Venus de Milo, es una de las estatuas más representativas del periodo helenístico de la escultura griega, y una de las más famosas esculturas de la antigua Grecia. Fue creada en algún momento entre los años 130 a. C. y 100 a. C., y se cree que representa a Afrodita (denominada Venus en la mitología romana), diosa del amor y la belleza;2​ mide, aproximadamente, 211 cm de alto.", default, default, default);
INSERT INTO productos 
VALUES(default, 2, "El beso", "El beso (original en alemán: Der Kuss) es una obra del pintor austríaco Gustav Klimt y probablemente su obra más conocida. Es un óleo con laminillas de oro y estaño sobre lienzo de 180 x 180 centímetros, realizado entre 1907-08.1", default, default, default);
INSERT INTO productos 
VALUES(default, 3, "La joven de la perla", "La joven de la perla (en neerlandés Het meisje met de parel), también conocida como Muchacha con turbante, es una de las obras maestras del pintor neerlandés Johannes Vermeer realizada entre 1665 y 1667. Como el nombre indica, utiliza un pendiente de perla como punto focal. La pintura se encuentra actualmente en el museo Mauritshuis de La Haya.", default, default, default);
INSERT INTO productos 
VALUES(default, 4, "Nenúfares", "Los nenúfares (en francés, Les nymphéas) es una serie de pinturas al óleo que ejecutó el pintor impresionista Claude Monet (aproximadamente 250 obras) al final de su vida, sobre amplios paneles, como el de la ilustración, que mide 219 × 602 cm, y que actualmente se exhiben en el Museo de la Orangerie de las Tullerías, en París, Francia. Estos inmensos paneles representan un lago con agua. Son representaciones del Jardín de Giverny, lugar donde se instaló Monet con su familia y construyó una finca en 1890. Monet instaló allí un estanque con plantas exóticas que será el modelo de sus famosos nenúfares.", default, default, default);
INSERT INTO productos 
VALUES(default, 5, "La creación de Adan", "La creación de Adán es un fresco en la bóveda de la Capilla Sixtina, pintado por Miguel Ángel alrededor del año 1511. Ilustra uno de los nueve episodios del Génesis representados allí por el artista toscano,1​ en el cual Dios le da vida a Adán, el primer hombre.", default, default, default);
INSERT INTO productos 
VALUES(default, 6, "Venus del Pardo", "Júpiter y Antíope (en italiano: Giove e Antiope) o Antíope sorprendida por Júpiter, más conocido como Venus del Pardo (en italiano: Venere del Pardo), es un cuadro realizado por el pintor Tiziano Vecellio. Mide 196 cm de alto y 385 cm de ancho, y está pintado al óleo sobre lienzo. Pintado hacia 1535-1540, se encuentra en el Museo del Louvre, en París, con el número de inventario INV 752.", default, default, default);
INSERT INTO productos
VALUES(default, 7, "Autorretrato", "El autorretrato se define como un retrato hecho de la misma persona que lo realiza. Es uno de los ejercicios de análisis más profundos que puede hacer un artista. Implica escrutarse el rostro y conocerse hasta tal punto que la expresión que tenga en ese momento se traduzca en el dibujo o la pintura que aborda. En épocas pictóricas como el barroco o el renacimiento, una de las costumbres era que el artista se autorretratara dentro de un gran cuadro, para reafirmar su autoría o para dar a entender sus intenciones, como lo hizo Velázquez.", default, default, default);
INSERT INTO productos
VALUES(default, 8, "La Gioconda", "El retrato de Lisa Gherardini, esposa de Francesco del Giocondo,1​ más conocido como La Gioconda (La Joconde en francés) o Monna Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo xvi y desde entonces es propiedad del Estado francés. Se halla expuesta en el Museo del Louvre de París, siendo, sin duda, la «joya» de sus colecciones.", default, default, default);
INSERT INTO productos 
VALUES(default, 9, "Apolo y Dafne", "Apolo persiguiendo a Dafne o Apolo y Dafne es una pintura que Giambattista Tiepolo realizó en torno a 1755-1760. Está realizada en óleo sobre lienzo y sus dimensiones son 68,5 cm de alto y 87 de ancho. Se conserva en la Galería Nacional de Arte de Washington.", default, default, default);
INSERT INTO productos 
VALUES(default, 10, "La noche estrellada", "La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh. Pintado en junio de 1889, representa la vista desde la ventana orientada al este de su habitación de asilo en Saint-Rémy-de-Provence, justo antes del amanecer, con la adición de un pueblo imaginario.1​2​3​ Ha estado en la colección permanente del Museo de Arte Moderno de la ciudad de Nueva York desde 1941, adquirida a través de Lillie P. Bliss Bequest", default, default, default);

INSERT INTO comentarios 
VALUES(default, 1, 1, "Muy interesante", default, default, default);
INSERT INTO comentarios 
VALUES(default, 1, 2, "Sobrevaloradisima", default, default, default);
INSERT INTO comentarios 
VALUES(default, 1, 3, "Muy profunda", default, default, default);
INSERT INTO comentarios 
VALUES(default, 1, 4, "Ojala tenerla en el living de casa", default, default, default);

INSERT INTO comentarios 
VALUES(default, 2, 1, "Belleza pura", default, default, default);
INSERT INTO comentarios 
VALUES(default, 2, 2, "Horrible", default, default, default);
INSERT INTO comentarios 
VALUES(default, 2, 3, "Me gusto", default, default, default);
INSERT INTO comentarios 
VALUES(default, 2, 4, "arte puro!", default, default, default);

INSERT INTO comentarios 
VALUES(default, 3, 1, "Wow", default, default, default);
INSERT INTO comentarios 
VALUES(default, 3, 2, "Mmm no me cierran los colores", default, default, default);
INSERT INTO comentarios 
VALUES(default, 3, 3, "Interesante...", default, default, default);
INSERT INTO comentarios 
VALUES(default, 3, 4, "Normal para lo que vale!", default, default, default);


INSERT INTO comentarios 
VALUES(default, 2, 1, "Belleza pura", default, default, default);
INSERT INTO comentarios 
VALUES(default, 2, 2, "Horrible", default, default, default);
INSERT INTO comentarios 
VALUES(default, 2, 3, "Me gusto", default, default, default);
INSERT INTO comentarios 
VALUES(default, 2, 4, "arte puro!", default, default, default);


INSERT INTO comentarios 
VALUES(default, 3, 1, "Belleza pura", default, default, default);
INSERT INTO comentarios 
VALUES(default, 3, 2, "Horrible", default, default, default);
INSERT INTO comentarios 
VALUES(default, 3, 3, "Me gusto", default, default, default);
INSERT INTO comentarios 
VALUES(default, 3, 4, "arte puro!", default, default, default);

INSERT INTO comentarios 
VALUES(default, 4, 1, "Belleza pura", default, default, default);
INSERT INTO comentarios 
VALUES(default, 4, 2, "Horrible", default, default, default);
INSERT INTO comentarios 
VALUES(default, 4, 3, "Me gusto", default, default, default);
INSERT INTO comentarios 
VALUES(default, 4, 4, "arte puro!", default, default, default);

INSERT INTO comentarios 
VALUES(default, 5, 1, "Belleza pura", default, default, default);
INSERT INTO comentarios 
VALUES(default, 5, 2, "Horrible", default, default, default);
INSERT INTO comentarios 
VALUES(default, 5, 3, "Me gusto", default, default, default);
INSERT INTO comentarios 
VALUES(default, 5, 4, "arte puro!", default, default, default);

INSERT INTO comentarios 
VALUES(default, 6, 1, "Belleza pura", default, default, default);
INSERT INTO comentarios 
VALUES(default, 6, 2, "Horrible", default, default, default);
INSERT INTO comentarios 
VALUES(default, 6, 3, "Me gusto", default, default, default);
INSERT INTO comentarios 
VALUES(default, 6, 4, "arte puro!", default, default, default);

INSERT INTO comentarios 
VALUES(default, 7, 1, "Belleza pura", default, default, default);
INSERT INTO comentarios 
VALUES(default, 7, 2, "Horrible", default, default, default);
INSERT INTO comentarios 
VALUES(default, 7, 3, "Me gusto", default, default, default);
INSERT INTO comentarios 
VALUES(default, 7, 4, "arte puro!", default, default, default);

INSERT INTO comentarios 
VALUES(default, 8, 1, "Belleza pura", default, default, default);
INSERT INTO comentarios 
VALUES(default, 8, 2, "Horrible", default, default, default);
INSERT INTO comentarios 
VALUES(default, 8, 3, "Me gusto", default, default, default);
INSERT INTO comentarios 
VALUES(default, 8, 4, "arte puro!", default, default, default);

INSERT INTO comentarios 
VALUES(default, 9, 1, "Belleza pura", default, default, default);
INSERT INTO comentarios 
VALUES(default, 9, 2, "Horrible", default, default, default);
INSERT INTO comentarios 
VALUES(default, 9, 3, "Me gusto", default, default, default);
INSERT INTO comentarios 
VALUES(default, 9, 4, "arte puro!", default, default, default);

INSERT INTO comentarios 
VALUES(default, 10, 1, "Belleza pura", default, default, default);
INSERT INTO comentarios 
VALUES(default, 10, 2, "Horrible", default, default, default);
INSERT INTO comentarios 
VALUES(default, 10, 3, "Me gusto", default, default, default);
INSERT INTO comentarios 
VALUES(default, 10, 4, "arte puro!", default, default, default);