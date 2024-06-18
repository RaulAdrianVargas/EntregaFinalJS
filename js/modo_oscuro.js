document.addEventListener('DOMContentLoaded', (event) => {
    const botonToggle = document.getElementById('toggleButton');
    const body = document.body;
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
    // botonToggle.textContent = modoOscuroGuardado === 'habilitado' ? "Light" : "Dark";
}

inicializarModoOscuro();
botonToggle.addEventListener('click', alternarModoOscuro);

});