CREATE TABLE posts (
	id SERIAL, 
	titulo VARCHAR(255), 
	img VARCHAR(1000),
	descripcion VARCHAR(255), 
	likes BIGINT);
	
insert into posts (titulo, img, descripcion, likes) values (
	'Avengers',
	'https://lumiere-a.akamaihd.net/v1/images/eu_disneyplus_avengers-endgame_mob_m_928f44f1.jpeg',
	'Trailer', 190000),
	('Ojos bien cerrados',
	'https://m.media-amazon.com/images/S/pv-target-images/4087f5a67634d12de195001da7caebbcc23a8984edfca3856d3293998d338209.jpg',
	 'drama, suspenso, erótico', 
	 100000),
	 ('Piratas del Caribe 5',
	 'https://i.blogs.es/ee9047/piratas-del-caribe-la-venganza-de-salazar-cartel/1366_2000.jpg',
	 'Sinópsis',
	 150000);

SELECT * FROM posts;

drop table posts;