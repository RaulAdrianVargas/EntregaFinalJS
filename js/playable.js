document.addEventListener('DOMContentLoaded', function(){
   
    let exp = 0;
    let salud = 100;
    let oro = 50;
    let armaActual = 0;
    let luchando;
    let saludMonstruo;
    let mochila = ['palo'];
    let mochilaVisible = false;

    // Cargar el estado del juego desde el Local Storage
    // const savedGameState = loadGameState();
    // if (savedGameState) {
    //     exp = savedGameState.exp;
    //     salud = savedGameState.salud;
    //     oro = savedGameState.oro;
    //     mochila = savedGameState.mochila;
    // }

    // Cargar el GIF del personaje desde el Local Storage
    const savedCharacterGif = loadCharacterGif();
    if (savedCharacterGif) {
        document.getElementById('characterGif').src = savedCharacterGif;
    }

    // Cargar el personaje seleccionado desde el Local Storage
    const selectedCharacter = loadSelectedCharacter();
    if (selectedCharacter) {
        document.getElementById('characterGif').src = selectedCharacter === 'asesino' ? '../img/asIddle.gif' : '../img/idle.gif';
    }

    // Guardar el estado del juego y el GIF del personaje antes de cerrar la ventana
    window.addEventListener('beforeunload', function() {
        saveGameState(exp, salud, oro, mochila);
        saveCharacterGif(document.getElementById('characterGif').src);
    });

let eleccionJugador;
const boton1 = document.querySelector('#button1');
const boton2 = document.querySelector('#button2');
const boton3 = document.querySelector('#button3');
const texto = document.querySelector('#text');
const textoXp = document.querySelector('#xpText');
const textoSalud = document.querySelector('#healthText');
const textoOro = document.querySelector('#goldText');
const statsMonstruos = document.querySelector('#monsterStats');
const nombreDelMonstruo = document.querySelector('#monsterName');
const saludDelMonstruo = document.querySelector('#monsterHealth');
const divJuego = document.getElementById("#game");
const mochilaDiv = document.getElementById('mochila');
const pantallaBatalla = document.getElementById("pantallaDeEstado");
const enemyGif = document.getElementById("enemyGif");
const pantallaDeTienda = document.getElementById("pantallaDeTienda");

document.getElementById('mochilaButton').addEventListener('click', function() {
    if (locations.find(location => location.name === 'store')) { // Verifica si está en la tienda
        mochilaVisible = !mochilaVisible; // Cambia el estado de la mochila solo si está en la tienda
        toggleMochilaDiv(mochilaVisible); // Muestra u oculta la mochila según el nuevo estado
    }
});


const weapons = [
    {
        name: "palo",
        power: 5,
    },
    {
        name: "daga",
        power: 30,
    },
    {
        name: "hacha de batalla",
        power: 50,
    },
    {
        name: "espada epica",
        power: 100,
    }
];

const monsters = [
    {
        name:"Slime",
        level: 2,
        health:15,
        image: '../img/spawnSlime.gif' 
    },
    {
        name:"Lobo",
        level: 8,
        health: 60,
        image: '../img/loboIdle.gif' 
    },
    {
        name:"Lobo Boss",
        level: 20,
        health: 300,
        image: '../img/loboBoss.gif' 
    },
    {
        name:"Goblin",
        level: 30,
        health: 250,
        image: '../img/goblinIdle.gif'
    },
]

const locations = [
    {
        name: "plaza del pueblo",
        "button text":["Ir a la tienda","Aventurarse al bosque","Pelearle al jefe."],
        "button functions": [goStore, goForest, fightBoss],
        text: "Estas en la plaza del pueblo. Ves un signo que dice 'Tienda'. ¿Que deseas hacer?."
    },
    {
        name: "store",
        "button text": ["Curar 10 de salud (10 oro)","Comprar armita nueva (30 oro)","Volver a la plaza."],
        "button functions": [buyHealth,buyWeapon,goTown],
        text: "Estas en la tienda. ¿Que te gustaria comprar?"
    },
    {
        name: "Forest",
        "button text": ["Pelear slime","Pelear bestia intimidante","Volver a la plaza."],
        "button functions":[figthSlime, fightBeast, goTown],
        text: "Entraste al bosque. Ves unos cuantos monstruos. ¿Que hacemos?."
    },
    {
        name: "fight",
        "button text": ["Atacar","Esquivar","Correr"],
        "button functions":[attack, dodge, goTown],
        text: "Estas peleando con un enemigo."
    },
    {
        name: "Kill Monster",
        "button text": ["Volver a la plaza","Seguir entrenando","Opa, te gusta apostar?"],
        "button functions":[goTown, goForest, tirarMoneda],
        text: "Derrotaste al monstruo! Se escucha un 'Argh!' a traves de las paredes de la cueva. Ganaste experiencia y oro."
    },
    {
        name: "lose",
        "button text": ["Volver a intentar?","Volver a intentar?","Volver a intentar?"],
        "button functions":[restart, restart, restart],
        text: "Te derrotaron..."
    },
    {
        name: "win",
        "button text": ["Volver a jugar?","Ir a un nuevo pueblo","Volver al menu principal"],
        "button functions":[restart, viajePeligroso, menuPrincipal],
        text: "Mataste al jefe final! GANASTE!! "
    },
    { 
        name: "cara o cruz", 
        "button text": ["Cara?","Cruz?","No gracias, soy malo en el azar"], 
        "button functions":[cara, cruz, goTown], 
        text: "Queres jugar al cara o cruz? La apuesta vale 10 monedas. Si ganas te llevas 50. Y si perdes, perdes 20 de vida." 
    },
    { 
        name: "pueblito 2", 
        "button text": ["Tienda","Bosque","Volver al pueblo anterior"], 
        "button functions":[goStore, goForest, goTown], 
        text: "Entraste a un nuevo pueblo. Se escucha mucha gente alrededor. Ves una Tiendita. ¿Que deseas hacer?." 
    },
];

const locationsJSON = JSON.stringify(locations, null, 2);
console.log(locationsJSON);
// botones de inicializacion

const closeButton = document.querySelector('#closeButton');
    closeButton.addEventListener('click', () => {
        Swal.fire({
            title: '¿Desea volver al menú principal?',
            text: 'Perderá todos los avances.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, por favor.',
            cancelButtonText: 'No, sigamos jugando',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Volviendo al menú principal...',
                    text: 'Todos los avances se han perdido.',
                    icon: 'success'
                }).then(() => {
                    menuPrincipal();
                });
            }
        });
    });

boton1.onclick= goStore;
boton2.onclick= goForest;
boton3.onclick= fightBoss;



function toggleMochilaDiv(show) {
    if (show) {
        mochilaDiv.style.display = 'block';
        mochilaDiv.style.textAlign = 'center';
        mochilaDiv.style.position = 'absolute';
        mochilaDiv.style.top = '-50px';
        mochilaDiv.style.left = '100px';
        mochilaDiv.style.height = '200px';
        mochilaDiv.style.width = '300px';
        mochilaDiv.style.background = 'rgba(255, 255, 255, 0.97)';
        mochilaDiv.style.borderRadius = '22px';
        document.querySelectorAll('*').forEach(el => {
            el.style.overflow = 'visible';
        });
    } else {
        mochilaDiv.style.display = 'none';
        document.querySelectorAll('*').forEach(el => {
            el.style.overflow = 'hidden';
        });
    }
}



document.getElementById('mochilaButton').addEventListener('click', function() {
    if (location.name === 'store') {
        mochilaVisible = !mochilaVisible; // Cambia el estado de la mochila solo si está en la tienda
        toggleMochilaDiv(mochilaVisible); // Muestra u oculta la mochila según el nuevo estado
    }
});

function update(location){
    statsMonstruos.style.display = "none";
    boton1.innerText = location["button text"][0];
    boton2.innerText = location["button text"][1];
    boton3.innerText = location["button text"][2];
    texto.innerText= location.text
    boton1.onclick= location["button functions"][0];
    boton2.onclick= location["button functions"][1];
    boton3.onclick= location["button functions"][2];

    if (location.name === 'store') {
        document.getElementById('mochilaButton').style.display = 'block';
        pantallaDeTienda.classList.remove("hidden");
        pantallaDeTienda.style.height = "250px" ;
    } else {
        document.getElementById('mochilaButton').style.display = 'none';
        pantallaDeTienda.classList.add("hidden");
        pantallaDeTienda.style.height = "auto";
    }

    const mochilaHTML = mochila.map(item => `<p>${item}</p>`).join('');
    document.getElementById('mochila').innerHTML = `<h3>Mochila:</h3>${mochilaHTML}`;
    if (location.name === 'store') {
        toggleMochilaDiv(mochilaVisible);
    } else {
        toggleMochilaDiv(false);
    };
    

    if (location.name === 'fight') {
        pantallaBatalla.classList.remove("hidden");
        updateMonsterImg();
    } else {
        pantallaBatalla.classList.add("hidden");
    }
}


const updateMonsterImg = () => {
    enemyGif.src = monsters[luchando].image;
}


function goTown(){
    update(locations[0]);
}

function goTown2(){
    update(locations[8]);
}

function goStore(){
    update(locations[1]);

}

function goForest(){
    update(locations[2])
    console.log("Going to Forest.")
}


function buyHealth(){
    if(oro >= 10){
        oro -= 10;
        salud += 10;
        textoOro.innerText = oro;
        textoSalud.innerText = salud;
    }   
    else {
        texto.innerText = "No tenes suficientes monedas de oro para comprar."
    }

}

function buyWeapon(){
    if(armaActual < weapons.length - 1){
        if(oro >= 30){
            oro -= 30;
            armaActual++;
            textoOro.innerText = oro;
            let newWeapon = weapons[armaActual].name;
            texto.innerText = "Compraste una nueva arma: " + newWeapon + " . ";
            mochila.push(newWeapon);
            texto.innerText += "Ahora tenes: "+ mochila;
            const mochilaHTML = mochila.map(item => `<p>${item}</p>`).join('');
            document.getElementById('mochila').innerHTML = `<h3>Mochila:</h3>${mochilaHTML}`;
        }else{
            texto.innerText= "No tenes suficientes monedas para comprar un armita."
        }
    }else{
        texto.innerText= "Ya tenes el arma mas poderosa del jueguito.";
        boton2.innerText = "Vender armas viejas por 15 monedas.";
        boton2.onclick= sellWeapon;
    }
}


function sellWeapon(){
    if(mochila.length > 1){
        oro += 15;
        textoOro.innerText = oro;
        let armaActual = mochila.shift();
        texto.innerText= "Vendiste: "+ armaActual;
        texto.innerText+= "Ahora tenes: " + mochila;
    }else{
        texto.innerText="No vendas tu unica arma!.";
    }
}


function figthSlime(){
    luchando = 0;
    goFight();
}

function fightBeast(){
    luchando = 1;
    goFight();
}

function fightBoss(){
    luchando = 2;
    goFight();
}

function fightLadron(){
    luchando = 3;
    goFight();
}

function goFight(){
    update(locations[3]);
    saludMonstruo = monsters[luchando].health;
    statsMonstruos.style.display = "block";
    console.log(monsters[luchando].name);
    nombreDelMonstruo.innerText = monsters[luchando].name;
    saludDelMonstruo.innerText = saludMonstruo;
}

function attack(){
    texto.innerText = "El "+ monsters[luchando].name + " ataca. ";
    texto.innerText += "Y vos lo atacas con tu: " + weapons[armaActual].name + ".";
    salud -= monsters[luchando].level;
    saludMonstruo -= weapons[armaActual].power + Math.floor(Math.random()* exp)+1;
    textoSalud.innerText = salud;
    saludDelMonstruo.innerText = saludMonstruo;
    if( salud <= 0 ){
        perdiste();
    }else if ( saludMonstruo <= 0){
        luchando === 2 ? ganaste() : matarMonstruo();
    }                                
}

function dodge(){
    texto.innerText = "Esquivaste el ataque del " + monsters[luchando].name;
}

function matarMonstruo(){
    oro += Math.floor(monsters[luchando].level *6.7);
    exp += monsters[luchando].level;
    textoOro.innerText= oro;
    textoXp.innerText= exp;
    update(locations[4]);
}


function cara(){
    jugarCaraCruz("cara")
}

function cruz(){
    jugarCaraCruz("cruz")
}

function jugarCaraCruz(eleccionJugador){
    boton1.disabled = true;
    boton2.disabled = true;
    boton3.disabled = true;
    if (oro < 10) {
        texto.innerText = "No tienes suficiente oro para jugar a cara o cruz.";
        return;
    }
    
    oro -= 10;
    textoOro.innerText = oro;

    const resultado = Math.random() < 0.5 ? "cara" : "cruz";
    texto.innerText = `Lanzaste la moneda... ¡Salió ${resultado}!`;

    if (eleccionJugador === resultado) {
        oro += 50;
        texto.innerText += " ¡Ganaste 50 monedas de oro!";
    } else {
        salud-= 20;
        texto.innerText += " Que mal, perdiste...";
    }
    textoSalud.innerText = salud;
    textoOro.innerText = oro;
    setTimeout(() => {
        boton1.disabled = false;
        boton2.disabled = false;
        boton3.disabled = false;
    }, 3500);
    setTimeout(goTown, 3500);
}

function tirarMoneda(){
    update(locations[7]);
}

function perdiste(){
    update(locations[5]);
}

function ganaste(){
    update(locations[6]);
}

function viajePeligroso(){
    const eventoAlAzar = Math.floor(Math.random() * 3) + 1;

        if (eventoAlAzar === 1) {
            console.log("Te encontraste con alguien amistoso. Ganas 50 monedas, recuperas 50 puntos de vida.");
        texto.innerText = "Te encontraste con alguien amistoso. Ganas 50 monedas, recuperas 50 puntos de vida.";
        oro += 50;
        salud += 50;
        textoOro.innerText = oro;
        textoSalud.innerText = salud;
        setTimeout(goTown2, 2000);

        } else if (eventoAlAzar === 2) {
            if(oro >= 50 && salud >=50){
            console.log("Te encontraste con un enemigo. Pierdes 50 de vida y te roba 50 monedas.");
            texto.innerText = "Te encontraste con un enemigo. Pierdes 50 de vida y te roba 50 monedas.";
            oro = Math.max(oro - 50);
            salud = Math.max(salud - 50);
            textoOro.innerText = oro;
            textoSalud.innerText = salud;
            }else{
                texto.innerText= "Te encontraste con alguien demasiado poderoso. Te da una paliza y te deja en la entrada del pueblo."
                setTimeout(goTown, 2000);
            }
        } else if (eventoAlAzar === 3){
            console.log("Escuchas un ruido que viene desde los matorrales. Te ataca un ladrón.");
        texto.innerText = "Mientras vas por el sendero, escuchas un ruido que viene desde los matorrales.\nTe ataca un ladrón!";
        setTimeout(fightLadron, 2000);  
        }
}

function menuPrincipal(){
    window.location.href = '../index.html';
}


function restart(){
    exp = 0;
    salud = 100;
    oro = 50;
    armaActual = 0;
    mochila = ['palo'];
    textoOro.innerText = oro;
    textoSalud.innerText = salud;
    textoXp.innerText = exp;
    goTown();
}
});
