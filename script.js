document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("modo-oscuro-btn");
  const body = document.body;

  btn.addEventListener("click", function () {
    body.classList.toggle("modo-oscuro");

    // Alternar texto del botón
    if (body.classList.contains("modo-oscuro")) {
      btn.innerHTML = "☀️ Desactivar modo oscuro";
    } else {
      btn.innerHTML = "🌙 Activar modo oscuro";
    }
  });
});
