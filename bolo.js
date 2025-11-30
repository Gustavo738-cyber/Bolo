const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggle.textContent = "☀️ Modo Claro";
    } else {
        toggle.textContent = "🌙 Modo Escuro";
    }
});
