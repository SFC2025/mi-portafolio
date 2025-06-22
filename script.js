/* 
Copyright © 2025 Santiago Cossu (SFC2025)
This work is licensed under CC BY-NC-ND 4.0.
Do not copy, modify or use without permission.
Full license: https://creativecommons.org/licenses/by-nc-nd/4.0/
*/
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
