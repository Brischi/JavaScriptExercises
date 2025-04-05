
document.addEventListener('DOMContentLoaded', () => { //domcontetloaded heißt, den unteren code erst ausführen, wenn die grundlegende html seite geladen ist

    const taskInput = document.getElementById('task-input');  
    const addButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Klick-Eventlistener für den 'Hinzufügen'-Button hinzufügen
    addButton.addEventListener('click', function() {
        addTask(taskInput.value.trim());//die Eingabe trimmen und an die Funktion addTask übergeben
    });

    // Keypress-Eventlistener für die 'Enter'-Taste
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim());
        }
    });

    loadTasks(); // Aufgaben beim Laden der Seite abrufen

    //neue Aufgabe zur Liste hinzuzufügen //wird vom Button oder v.d. Entertaste aufgerufen
    function addTask(taskValue) {
        if (taskValue !== "") {
            // Ein neues Listenelement für die Aufgabe
            const li = document.createElement('li');
            li.textContent = taskValue; //Testinhalt der Liste = taskValue

            //Entfernen-Button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Entfernen'; //Button-Text:'Entfernen'
            removeButton.classList.add('remove-task-button'); //Class fürs Styling
            removeButton.addEventListener('click', function() {
                removeTask(li);    //Entfernen
            });

            // Den Entfernen-Button zum Listenelement hinzufügen
            li.appendChild(removeButton);
            
            // Das Listenelement zum Aufgabenlisten-Container hinzufügen
            taskList.appendChild(li);
            
            // Das Eingabefeld leeren und den Fokus darauf setzen für die nächste Aufgabe
            taskInput.value = "";
            taskInput.focus();
            saveTasks(); // Aufgabenliste im localStorage speichern
        }
    }

    //Aufgabe entfernen
    function removeTask(taskElement) {
        taskList.removeChild(taskElement);
        saveTasks();
    }


//Aufgaben aus localStorage laden
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks'); //gespeicherte Liste abrufen
    if (storedTasks) { // Überprüfen, ob Aufgaben vorhanden sind
        const tasksArray = JSON.parse(storedTasks); // JSON-Daten in ein Array umwandeln
        tasksArray.forEach(task => addTask(task)); //gespeicherte Aufgaben zur Liste hinzufügen
    }
}

function saveTasks() {
    const tasksArray = []; // Array zur Speicherung der Aufgaben
    //Aufgaben aus der Liste abrufen
    taskList.querySelectorAll('li').forEach(function(taskItem) { //querySelectorAll sucht im taskList-Container nach allen <li>. Jedes enthält eine Aufgabe.
        tasksArray.push(taskItem.textContent.replace('Entfernen', '').trim()); // Nur den Aufgabentext speichern, nicht den Button. Entf durch '' ersetzen und dann trimmen
    });
    localStorage.setItem('tasks', JSON.stringify(tasksArray)); // Array als JSON im localStorage speichern
}
});
// //etwas in html hinzufügen: 
// // Ein neues <div>-Element erstellen
// const myDiv = document.createElement('div');
// // Eine ID vergeben
// myDiv.id = 'meinDiv';
// // Eine Klasse hinzufügen
// myDiv.classList.add('mein-klassenname');
// // Das <div> zu einem bestimmten Teil der Seite hinzufügen
// document.body.appendChild(myDiv);