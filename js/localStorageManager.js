

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}


function saveGameState(exp, salud, oro, mochila) {
    const gameState = { exp, salud, oro, mochila };
    saveToLocalStorage('gameState', gameState);
}

function loadGameState() {
    return loadFromLocalStorage('gameState');
}


function saveCharacterGif(gifPath) {
    saveToLocalStorage('characterGif', gifPath);
}


function loadCharacterGif() {
    return loadFromLocalStorage('characterGif');
}


function saveSelectedCharacter(character) {
    saveToLocalStorage('selectedCharacter', character);
}

function loadSelectedCharacter() {
    return loadFromLocalStorage('selectedCharacter');
}