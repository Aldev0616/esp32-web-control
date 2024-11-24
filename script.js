const toggleSwitch = document.getElementById("toggleSwitch");
const statusText = document.getElementById("status");

// Cargar el estado inicial desde el ESP32
fetch("/status")
    .then(response => response.json())
    .then(data => {
        toggleSwitch.checked = data.state;
        statusText.textContent = `Estado: ${data.state ? "Encendido" : "Apagado"}`;
    })
    .catch(() => {
        statusText.textContent = "Estado: Error al cargar";
    });

// Cambiar el estado del foco
toggleSwitch.addEventListener("change", () => {
    const newState = toggleSwitch.checked;

    fetch("/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: newState })
    })
    .then(response => response.json())
    .then(data => {
        statusText.textContent = `Estado: ${data.state ? "Encendido" : "Apagado"}`;
    })
    .catch(() => {
        statusText.textContent = "Estado: Error al actualizar";
    });
});