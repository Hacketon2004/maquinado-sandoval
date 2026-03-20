document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_v4fhoby",
      "template_pso547k",
      form
    )
    .then(() => {
      alert("Mensaje enviado correctamente. Gracias por contactarnos.");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Error al enviar el mensaje. Inténtelo nuevamente.");
    });
  });
});