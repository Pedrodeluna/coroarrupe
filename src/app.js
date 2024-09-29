const sidebar = document.getElementById("sidebar");
const titulo = document.getElementById("titulo");

// Entry point of the JavaScript code for the web application
document.getElementById("menu-btn").onclick = function() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("main").style.marginLeft = "250px";
}
document.getElementById("close-btn").onclick = function() {
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("main").style.marginLeft = "0";
}
function selectWeek(week) {
    console.log("Selected: " + week);
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("main").style.marginLeft = "0";
    titulo.innerText = week.fecha;
    fetch("./canciones/santo.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

// Add your code here
semanasData = JSON.parse(data);
semanasData.semanas.forEach(item => {const button = document.createElement("button");
    button.innerText = item['fecha'];
    button.id = item['id'];
    button.onclick = function() {
        selectWeek(item);
    }
    button.classList.add("week-btn");

    // Añadir el botón al sidebar
    sidebar.appendChild(button);
});