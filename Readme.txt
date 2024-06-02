A tener en cuenta: 
	Para poder entender el juego hay que abrir la consola con f12 al iniciar. 
	Es posible que al iniciar por primera vez la consola no muestre lo que deberia, perdon ya vendra la version 1.2 que solucionara esos problemas molestos :c

	Aprender a desestructurar. Colocar un objeto constructor


eliminar alerts y prompts





// 1ro Crear personaje
	tendra un nombre que le dara el usuario
	tendra:	vida inicial
		dinero inicial
		ataque inicial
		comida inicial
		nivel 1

2do Crear array de objetos de tienda
	objetos curativos
	objetos que aumenten ataque
	objetos que llenen la barra de comida
	const objeto1 = { id:1, producto:"Arroz"};
	const array = [objeto1, {id: 2, producto:"Fideos"}];
	array.push[{id: 3, producto: "Pan"}];

3ro Crear funciones escenciales
	El creador de personajes
	La tienda que podra ser llamada en la eleccion del personaje
	Selector de opciones del jugador
	Diferentes eventos aleatorios, uno en el que al viajar se encuentre con un amigo que le de comida dinero y salud; otro que se encuentre con un enemigo ( tambien random basado en el nivel y que deba decidir si ir por el camino con un enemigo u otro); uno en el que encuentra un lugar abandonado, donde tirara una moneda para ver si consigue objetos buenos o pierde vida, salud o dinero
	Opcion de descansar en el lugar, donde recuperara vida a costo de comida.
	Opcion de descansar en un hotel cercano, donde recupera vida a costo de dinero.

4to Crear un sistema de dias, en los que pase un dia despues de cada eleccion y llame de nuevo a la funcion de eleccion de opciones del jugador.

5to (si tengo tiempo crear un evento de pelea aleatorio, que luego puedo hacer que evolucione a un ataque, bloqueo, huida para posterior subida de nivel y complejizacion de eventos aleatorios)

6to crear academia para subir de nivel

7mo crear eventos de enemigos

8vo si te encontras con un enemigo y no tenes dinero, quitar mas vida

9no arreglar tienda, al precionar cancelar que te envie nuevamente al menu de eleccion


Crear objeto constructor: Idealmente tendria que ser un enemigo y crear su propia funcion de pelear























