document.addEventListener('DOMContentLoaded', () => {
    const asesino = document.getElementById("asesino");
    const elfo = document.getElementById("elfo");
    const elegido = document.getElementById("characterSeleccionado");
    const heroContainer = document.querySelector(".hero-container");

    const updateBoton = () => {
        const seHizoEleccion = asesino.getAttribute('data-selected') === 'true' || elfo.getAttribute("data-selected") === "true";
        elegido.disabled = !seHizoEleccion;

        if (seHizoEleccion) {
            elegido.classList.remove('hidden');
            elegido.classList.add('visible');
        } else {
            elegido.classList.add("hidden");
            elegido.classList.remove('visible');
        }
    }

    const cambiarEleccion = div => {
        const elegistePersonaje = div.getAttribute("data-selected") === 'true';

        // Resetear todos los personajes
        [asesino, elfo].forEach(d => {
            d.setAttribute('data-selected', 'false');
            d.classList.remove('selected');
        });

        // Si no se había seleccionado, seleccionarlo ahora
        if (!elegistePersonaje) {
            div.setAttribute('data-selected', 'true');
            div.classList.add('selected');
            heroContainer.classList.add('centered');
            // Guardar el personaje seleccionado en el Local Storage
            saveSelectedCharacter(div.id);
        } else {
            heroContainer.classList.remove('centered');
            // Borrar el personaje seleccionado del Local Storage
            saveSelectedCharacter(null);
        }

        updateBoton();
    }

    [asesino, elfo].forEach(div => div.addEventListener('click', () => cambiarEleccion(div)));

    updateBoton();
});
