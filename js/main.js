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
        html: `
            Bienvenido a mi videojuego creado en html, css y JavaScript.<br>
            Estoy aprendiendo, por lo que cualquier consejito y comentario es mas que bienvenido.<br>
            `,
        icon: "info"
    });
    };

btnAcercaDe.addEventListener("click", divAbout);


function sweetAlertExit() {
    Swal.fire({
        title: "<strong>Adrian Vargas</strong>",
        icon: "info",
        html: `
            Mi GitHub<br>
            <a href="https://github.com/RaulAdrianVargas?tab=repositories" target="_blank">https://github.com/RaulAdrianVargas?tab=repositories</a><br>
            Mi Instagram<br>
            <a href="https://www.instagram.com/adruuch" target="_blank">https://www.instagram.com/adruuch</a><br>
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
});