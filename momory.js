// Ladebildschirm und Willkommensbildschirm
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("welcome-screen").style.display = "none";
    }, 60000); // 1 Minute Ladezeit

    checkSavedData(); // Prüft beim Laden, ob Daten gespeichert wurden
});

// Scroll-Funktion
function scrollLeft() {
    document.getElementById("button-container").scrollBy({
        top: 0,
        left: -100,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById("button-container").scrollBy({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
}

// Uhrzeit und Datum aktualisieren
function updateTime() {
    var now = new Date();
    document.getElementById("time").textContent = now.toLocaleTimeString();
    document.getElementById("date").textContent = now.toLocaleDateString();
}

setInterval(updateTime, 1000);
updateTime();

// Daten speichern und laden
function saveData() {
    // Hier könnten spezifische Daten gespeichert werden
    localStorage.setItem('gameData', 'Data gespeichert am ' + new Date().toLocaleString());
    document.getElementById('save-status').textContent = 'Daten erfolgreich gespeichert!';
}

// Prüfen, ob Daten bereits gespeichert wurden
function checkSavedData() {
    var savedData = localStorage.getItem('gameData');
    if (savedData) {
        document.getElementById('save-status').textContent = 'Letzte Speicherung: ' + savedData;
    } else {
        document.getElementById('save-status').textContent = 'Keine gespeicherten Daten.';
    }
}
