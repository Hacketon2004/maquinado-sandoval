document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.getElementById("form-newsletter");

  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_v4fhoby",
      "template_ohmu20z",
      newsletterForm
    )
    .then(() => {
      alert("Correo enviado correctamente. Gracias.");
      newsletterForm.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Error al enviar el correo.");
    });
  });
});
