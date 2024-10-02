const sidebar = document.getElementById("sidebar");
const titulo = document.getElementById("titulo");
const navbar = document.getElementById("navbar");
const botones = document.getElementById("botones");
const songs = document.getElementById("songs");


// Entry point of the JavaScript code for the web application
document.getElementById("menu-btn").onclick = function() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("principal").style.marginLeft = "250px";
}
document.getElementById("close-btn").onclick = function() {
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("principal").style.marginLeft = "0";
}
function selectWeek(week) {
    while (songs.firstChild) {
        songs.removeChild(songs.firstChild);
    }
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("principal").style.marginLeft = "0";
    titulo.innerText = week.fecha;
    console.log(week);
    const cancionesKeys = Object.keys(week.canciones);
    
    while (botones.firstChild) {
        botones.removeChild(botones.firstChild);
    }

    cancionesKeys.forEach(key => {
        const button = document.createElement("button");
        button.innerText = key;
        button.id = key;
        button.onclick = function() {
            show_song(week.canciones, key);
        }
        button.classList.add("song-btn");

        botones.appendChild(button);
    });
}

function show_song(canciones, title) {
    while (songs.firstChild) {
        songs.removeChild(songs.firstChild);
    }
    fetch("src/canciones/"+canciones[title]+".json")
        .then(response => response.json())
        .then(songData => {
            console.log(songData);
            const title = document.createElement("h1")
            title.innerText = songData.titulo;
            songs.appendChild(title);

            const letra = document.createElement("p")
            letra.innerText = songData.letra;
            songs.appendChild(letra);

            if (songData.link) {
                const link = document.createElement("a")
                link.href = songData.link;
                link.innerText = "Escucha aquí la canción";
                songs.appendChild(link);
            }
        });
}


// Add your code here
fetch("src/semanas.json")
    .then(response => response.json())
    .then(semanasData => {

    semanasData.semanas.forEach(item => {
        const button = document.createElement("button");
        button.innerText = item['fecha'];
        button.id = item['id'];
        button.onclick = function() {
            selectWeek(item);
        }
        button.classList.add("week-btn");

        sidebar.appendChild(button);
    });
});