let testtest = document.getElementById('testtest');

// Funktion, um das Bild zu ändern
function bildändern(src) {
    testtest.src = src;
}

// Funktion, um das ursprüngliche Bild wiederherzustellen
function resetBild() {
    testtest.src = "Mapping.jpg";
}