// Solicitar la contraseña al usuario
let contrasena = prompt("Ingrese su contraseña:");

// Función para verificar si la contraseña es válida
function verificarContrasena(contrasena) {
    // Variables que regulan los requisitos
    const tieneLongitud = contrasena.length >= 8;
    const tieneMayuscula = /[A-Z]/; // Al menos una letra mayúscula
    const tieneNumero = /\d/; // Al menos un número
    const tieneCaracterEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]/; // Al menos un carácter especial

    // Verificar los requisitos con condicionales
    if (!tieneLongitud) {
        alert("La contraseña debe tener al menos 8 caracteres.");
    } else if (!tieneMayuscula) {
        alert("La contraseña debe contener al menos una letra mayúscula.");
    } else if (!tieneNumero) {
        alert("La contraseña debe contener al menos un número.");
    } else if (!tieneCaracterEspecial) {
        alert("La contraseña debe incluir al menos un carácter especial (!@#$%^&*()_+{}[]:;<>,.?~\\-).");
    } else {
        alert("La contraseña es válida.");
    }
}

// Ejecutar para verificar la contraseña
verificarContrasena(contrasena);
