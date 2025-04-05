

//Nachricht, die mit Klick auf Button wieder verschwindet:
function toggleNachricht() {
    // Zugriff auf das div mit der Nachricht
    var nachrichtDiv = document.getElementById('nachricht');

    // Prüfen, ob bereits Text im div steht
    if (nachrichtDiv.innerText === '1 Primzahl') {
        nachrichtDiv.innerText = ''; // Nachricht entfernen
    } else {
        nachrichtDiv.innerText = '1 Primzahl'; // Nachricht hinzufügen
    }
}


//Primzahl-Rechner:
var zahl = parseInt(document.getElementById("zahlEingabe").value);
function istPrimzahl(zahl) {
    if (zahl <= 1) return false; // Zahlen <= 1 sind keine Primzahlen
    for (let i = 2; i < zahl; i++) {
        if (zahl % i === 0) {
            return false; // Wenn n durch i teilbar ist, ist es keine Primzahl
            break
        }
           
    }
    return true; // Wenn keine Teiler gefunden wurden, ist n eine Primzahl
}

function speichereZahl() {
    // Holt den Wert aus dem Eingabefeld
   let zahl = parseInt(document.getElementById("zahlEingabe").value);
    
    // Überprüfen, ob die Zahl eine Primzahl ist und das Ergebnis anzeigen
    if (istPrimzahl(zahl)) {
        document.getElementById("ergebnis").innerText = zahl + " ist eine Primzahl.";
    } else {
        document.getElementById("ergebnis").innerText = zahl + " ist keine Primzahl.";
    }
}


var primzahlenArray = [];
function primzahlenbishundert() {
    primzahlenArray = []; // Leert das Array bei erneutem Aufruf
    for (let i = 2; i < 101; i++) {
        var istPrimzahl = true;
        for (let z = 2; z < i; z++) {
            if (i % z === 0) {
                istPrimzahl = false;
                break;
            }
        }
        if (istPrimzahl) {
            primzahlenArray.push(i); // Fügt die Primzahl im Array hinzu
        }
    }
    // Zeigt die Primzahlen im HTML-Element an
    document.getElementById("primzahlenListe").innerText = primzahlenArray.join(", ");
}