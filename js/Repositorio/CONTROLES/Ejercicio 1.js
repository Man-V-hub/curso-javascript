// Solicitar la palabra u oración al usuario
let oracion = prompt("Ingrese una oración o palabra:");

// Contar el número de caracteres
let numeroCaracteres = oracion.length;

// Mostrar la oración y el número de caracteres en el navegador
document.write (`<p>'Oración ingresada: "${oracion}"</p>`);
document.write (`<p>Número de caracteres: ${numeroCaracteres}</p>`);
