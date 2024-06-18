
function obtenerPersonajes(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            const ricks = data.results.filter(personaje => personaje.name.includes("Rick"));
            done(ricks);
        });
}

obtenerPersonajes(personajes => {
    personajes.forEach(personaje => {
        let statusText = '';

        // Personalizar el texto del estado según el estado del personaje
        switch (personaje.status) {
            case 'Alive':
                statusText = 'El jefe, superviso todo';
                break;
            case 'Dead':
                statusText = 'Este loco se encargo de vender el juego';
                break;
            case 'unknown':
                statusText = 'Ni idea que hacen aca, querian adjudicarse mi exito';
                break;
            default:
                statusText = 'No se pudo determinar el estado de este Rick.';
        }

        const article = document.createRange().createContextualFragment(/*html*/
            `<article>
                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>
                <h2>${personaje.name}</h2>
                <span>${statusText}</span>
            </article>`
        );

        const main = document.querySelector("main");
        main.appendChild(article);
    });
});
