// Datos de autenticación predefinidos
const validEmail = "usuario@ejemplo.com";
const validPassword = "123456";

// Selección del formulario y de los campos de email y contraseña
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

// Manejo del evento de envío del formulario
form.onsubmit = (e) => {
  e.preventDefault(); // Evita que el formulario se envíe inmediatamente

  const email = emailInput.value;
  const password = passwordInput.value;

  // Validación de las credenciales
  if (email === validEmail && password === validPassword) {
    // Redirige a la página deseada si la autenticación es correcta
    window.location.href = "/mostrar_mascotas.html";
  } else {
    // Muestra un mensaje de error si las credenciales no son correctas
    errorMessage.style.display = "block";
  }
};
