// Usar el nombre de host en lugar de la IP
const esp32URL = "http://esp32.local/toggle";

document.getElementById("toggle").addEventListener("click", () => {
    fetch(esp32URL, {
        method: "POST"
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
});
