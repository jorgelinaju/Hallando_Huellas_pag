// Expresiones regulares para validar email y contraseña
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
const passwordRegex = /^\d{4,6}$/;

// Selección del formulario y de los campos de email y contraseña
const form = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

// Manejo del evento de envío del formulario
form.onsubmit = (e) => {
  e.preventDefault(); // Evita que el formulario se envíe inmediatamente

  const email = emailInput.value;
  const password = passwordInput.value;

  // Validación del formato de email y contraseña
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "El email debe tener el formato: caracteres@caracteres.caracteres(2 o 3)";
    errorMessage.style.display = "block";
    return;
  }

  if (!passwordRegex.test(password)) {
    errorMessage.textContent = "La contraseña debe tener entre 4 y 6 dígitos numéricos";
    errorMessage.style.display = "block";
    return;
  }

  // Redirige a la página deseada si la autenticación es correcta
  window.location.href = "/mostrar_mascotas.html";
};

