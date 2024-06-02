document.addEventListener('DOMContentLoaded', (event) => {
    // const startButton = document.getElementById("iniciarJuego");
    const body = document.body;
    const botonToggle = document.getElementById('toggleButton');
    const btnAcercaDe = document.getElementById("btnAcercaDe");
    const contenedorAcercaDe = document.getElementById("contenedorAcercaDe");
    const botonSalir = document.getElementById("btnSalir");

function divAbout(){
    Swal.fire({
        title: "About the game",
        text: "Bienvenido a mi videojuego creado en html, css y JavaScript.\n"+
        "Estoy aprendiendo, por lo que cualquier consejito y comentario es mas que bienvenido.",
        icon: "info"
    });
    }

    function aplicarModoOscuro(estaOscuro) {
        if (estaOscuro) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    function alternarModoOscuro() {
        const estaEnModoOscuro = body.classList.toggle('dark-mode');
        localStorage.setItem('modoOscuro', estaEnModoOscuro ? 'habilitado' : 'deshabilitado');
        botonToggle.textContent = estaEnModoOscuro ? "Light" : "Dark";
    }

    function inicializarModoOscuro() {
        const modoOscuroGuardado = localStorage.getItem('modoOscuro');
        aplicarModoOscuro(modoOscuroGuardado === 'habilitado');
        botonToggle.textContent = modoOscuroGuardado === 'habilitado' ? "Light" : "Dark";
    }

    inicializarModoOscuro();
    botonToggle.addEventListener('click', alternarModoOscuro);



    // Event listener para mostrar el div al hacer clic en "Acerca del juego"
    btnAcercaDe.addEventListener("click", divAbout);


/* Cosas que tenia en la version preliminar
    // // Declaracion de objeto jugador
    // let personajeJugable = {
    //     nombre: "",
    //     vida: 1000,
    //     dinero: 1000,
    //     ataque: 12,
    //     comida: 100,
    //     // nivel: 1,  Funcion a agregarse mas adelante
    //     mochila: []
    // };

    // // Declaracion de objetos de la tienda
    // const cura1 = { nombre: 'Pocion Chica', precio: 20, tipo: 'cura' };
    // const cura2 = { nombre: 'Pocion Grande', precio: 50, tipo: 'cura' };
    // const arma1 = { nombre: 'Cuchillo', precio: 100, tipo: 'arma' };
    // const arma2 = { nombre: 'Espada', precio: 250, tipo: 'arma' };
    // const comida1 = { nombre: 'Pan', precio: 25, tipo: 'comida' };
    // const comida2 = { nombre: 'Asado', precio: 50, tipo: 'comida' };

    // // Creacion de array de objetos de la tienda
    // const objetosTienda = [cura1, cura2, arma1, arma2, comida1, comida2];

    // // Función para añadir un producto a la mochila
    // function agregarAMochila(producto) {
    //     personajeJugable.mochila.push(producto);
    // }

    // // Actualizar estado 
    // function actualizarEstado(cambioVida = 0, cambioDinero = 0, cambioComida = 0, productoComprado = null) {
    //     personajeJugable.vida = Math.max(0, personajeJugable.vida + cambioVida);
    //     personajeJugable.dinero = Math.max(0, personajeJugable.dinero + cambioDinero);
    //     personajeJugable.comida = Math.max(0, personajeJugable.comida + cambioComida);

    //     if (productoComprado) {
    //         agregarAMochila(productoComprado);
    //         console.log(`Metiste ${productoComprado.nombre} a tu mochila.`);
    //     }

    //     // Mensajes adicionales según el tipo de producto o acción
    //     if (cambioVida > 0) {
    //         console.log(`Recuperaste ${cambioVida} puntos de vida.`);
    //     }
    // }

    // // Función para filtrar productos por tipo
    // function filtrarProductosPorTipo(tipoProducto) {
    //     return objetosTienda.filter(producto => producto.tipo.toLowerCase() === tipoProducto.toLowerCase());
    // }

    // // Comienzo a crear funciones básicas del juego
    // function crearPersonaje() {
    //     personajeJugable.nombre = prompt("Ingresar tu nombre, jugador");
    // }

    // function tiendaDeObjetos() {
    //     console.log("Esta es la tienda. ¿Que queres comprar?");
    //     const tipoProducto = prompt("Buenas, esta es la tienda \n" +
    //         "Ingrese el tipo de producto que desea buscar: (cura, arma, comida) ").toLowerCase();
    //     if (tipoProducto === null || tipoProducto.trim() === "") {
    //         console.log("Búsqueda cancelada o tipo de producto no válido.");
    //         eleccionJugador();
    //         return;
    //     }
    //     const productosFiltrados = filtrarProductosPorTipo(tipoProducto);


    //     if (productosFiltrados.length > 0) {
    //         console.log("Productos encontrados:");
    //         console.table(productosFiltrados);

    //         const eleccion = parseInt(prompt('Ingrese el número del producto que desea comprar:')) ;

    //         if (eleccion >= 0 && eleccion < productosFiltrados.length) {
    //             const producto = productosFiltrados[eleccion];
    //             if (personajeJugable.dinero >= producto.precio) {
    //                 console.log(`Te compraste: ${producto.nombre} y te salió: ${producto.precio} monedas`);
    //                 actualizarEstado(0, -producto.precio, 0, producto);
    //             } else {
    //                 console.log("No tenes las monedas necesarias para comprar eso.");
    //             }
    //         } else {
    //             console.log("Ni idea que pusiste.");
    //         }
    //     } else {
    //         console.log("No existe eso todavia. Ya vendra la version 1.2.");
    //     }
        
    // }

    // // Ver la mochila del jugador
    // function verMochila() {
    //     if (personajeJugable.mochila.length > 0) {
    //         console.log("Tu mochila contiene los siguientes objetos:");
    //         console.table(personajeJugable.mochila);
    //     } else {
    //         console.log("Tu mochila está vacía.");
    //     }
    // }

    // // Buscar un objeto específico en la mochila
    // function buscarObjetoEnMochila() {
    //     const tipoProducto = prompt("Ingrese el tipo de producto que desea buscar en su mochila (cura, arma, comida):");
    //     const productosFiltrados = filtrarEnMochilaPorTipo(tipoProducto);
    //     if (productosFiltrados.length > 0) {
    //         console.log("Productos filtrados por tipo en tu mochila:");
    //         console.table(productosFiltrados);
    //     } else {
    //         console.log("No se encontraron productos de ese tipo en tu mochila.");
    //     }
    // }

    // // Función para filtrar objetos en la mochila por tipo
    // function filtrarEnMochilaPorTipo(tipoProducto) {
    //     return personajeJugable.mochila.filter(producto => producto.tipo.toLowerCase() === tipoProducto.toLowerCase());
    // }

    // // Opciones del menu principal
    // function eleccionJugador() {
    //     console.log("Y ahora... ¿Que sigue?");
    //     let respuesta = parseInt(prompt(
    //         "¿Que te gustaria hacer?\n"+
    //         "1. Descansar un rato\n" +
    //         "2. Ir a una tienda\n "+
    //         "3. Aventurarse a lo desconocido\n" +
    //         "4. Buscar un hotel\n"+
    //         "5. Ver mochila\n"+
    //         "6. Buscar objeto en mochila"
    //     ));

    //     if (respuesta === 1) {
    //         mimirAcaNomas();
    //     } else if (respuesta === 2) {
    //         tiendaDeObjetos();
    //     } else if (respuesta === 3) {
    //         eventosAleatorios();
    //     } else if (respuesta === 4) {
    //         mimirEnHotel();
    //     } else if (respuesta === 5) {
    //         verMochila();
    //     } else if (respuesta === 6) {
    //         buscarObjetoEnMochila();
    //     } else {
    //         console.log("Opción no válida.");
    //     }
    // }

    // // Otras funciones del juego 
    // function eventosAleatorios() {
    //     console.log("Bueno, paso lo siguiente: ");
    //     const eventoAlAzar = Math.floor(Math.random() * 4) + 1;

    //     if (eventoAlAzar === 1) {
    //         console.log("Te encontraste con alguien amistoso. Ganas 50 monedas, recuperas 50 puntos de vida.")
    //         // Tambien quiero que le regale dos panes. Debo pensar esta funcion
    //         actualizarEstado(50, 50, 0);
    //     } else if (eventoAlAzar === 2) {
    //         console.log("Te encontraste con un enemigo. Pierdes 100 de vida y te roba 100 monedas.");
    //         actualizarEstado(-100, -100, 0);
    //     } else if (eventoAlAzar === 3) {
    //         console.log("Pasaste por un puesto callejero e hiciste una apuesta. Jugaste cara o cruz ");
    //         function jugarCaraCruz() {
    //             const eleccionJugador = prompt("Elija 'cara' o 'cruz'.").trim().toLowerCase();

    //             if (eleccionJugador !== 'cara' && eleccionJugador !== 'cruz') {
    //                 console.log("Amigo, cara o cruz, no es tan complicado.");
    //                 return;
    //             }

    //             const resultadoMoneda = lanzarMoneda();
    //             console.log(`La moneda cayó en ${resultadoMoneda}`);
    //             if (eleccionJugador === resultadoMoneda) {
    //                 console.log("¡Felicidades! Ganaste.");
    //                 console.log("Ganaste 200 monedas.")
    //                 actualizarEstado(0, 200, 0);
    //             } else {
    //                 console.log("No amigo, tenés una sal.");
    //                 console.log("Perdiste 200 monedas.")
    //                 actualizarEstado(0, -200, 0);
    //             }
    //         }
    //         jugarCaraCruz();
    //     } else {
    //         console.log("No sé cómo hiciste, pero pusiste una letra donde van solo numeros. Increible.");
    //     }
    // }

    // function lanzarMoneda() {
    //     return Math.random() < 0.5 ? "cara" : "cruz";
    // }

    // function mimirAcaNomas() {
    //     console.log("Decidís descansar en donde estás. Te comes algo tranqui y recuperas vida.");
    //     actualizarEstado(50, 0, -20);
    // }

    // function mimirEnHotel() {
    //     console.log("Decidís descansar en un hotel cercano. Es cómodo y calentito. Recuperas vida.");
    //     actualizarEstado(250, -150, 0);
    // }

    // function mostrarEstatus() {
    //     const respuesta = confirm("¿Queres ver tu estado actual?");
    //     if (respuesta) {
    //         console.table(personajeJugable);
    //     } else {
    //         console.log("Joya. ¿Entonces qué hacemos?");
    //     }
    // }

    // function continuar() {
    //     let seguirJugando = true;
    //     while (seguirJugando) {
    //         const respuesta = confirm("¿Queres continuar la aventura?");
    //         if (respuesta) {
    //             eleccionJugador();
    //             mostrarEstatus();
    //         } else {
    //             console.log("Gracias por jugar :D");
    //             alert("Gracias por jugar mi jueguito")
    //             console.log("Terminaste tu aventura.");
    //             seguirJugando = false;
    //         }
    //     }
    // }

    // function empezarAventura(){
    //     let empezarJueguito = confirm("¿Te gustaria empezar a jugar?")
    //     if(empezarJueguito){
    //         alert("Perfecto.\n"+
    //         "Tene en cuenta que tenes que apretar f12 para ver la consola.\n"+ 
    //         "Tambien, puede que la primera vez la consola no muestre lo que deberia, por favor recargar con f5 si eso pasa.\n"+
    //         "Disculpe las dificultades para iniciar, ya lo solucionare en la version 1.2 :D. Gracias")
    //         crearPersonaje();
    //         console.table(personajeJugable);

    //         alert("Bienvenido al juego RPG de javascript, " + personajeJugable.nombre);

    //         eleccionJugador();

    //         continuar();
    //     }
    //     else{
    //         alert("Muy bien, gracias por pasarte por mi app.")
    //     }
    // }
*/
//-----------------------------------------------------------------------------------
// Aca inicializa el juego
    // startButton.addEventListener("click", empezarAventura)
});

function sweetAlertExit(){
    Swal.fire({
        title: "<strong>Adrian Vargas</strong>",
        icon: "info",
        html: `
            Mi github<br>
            <a href="https://github.com/RaulAdrianVargas?tab=repositories" target="_blank">https://github.com/RaulAdrianVargas?tab=repositories</a><br>
            Mi Instagram<br>
            <a href="https://www.instagram.com/tu_usuario_de_instagram" target="_blank">https://www.instagram.com/tu_usuario_de_instagram</a><br>
            Mi Correo<br>
            <a href="mailto:rauladrianvargas@gmail.com" target="_blank">rauladrianvargas@gmail.com</a><br>
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Gracias por entrar!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
            <i class="fa fa-thumbs-down"></i>
        `,
        cancelButtonAriaLabel: "Thumbs down"
    });
}
botonSalir.addEventListener("click", sweetAlertExit)
