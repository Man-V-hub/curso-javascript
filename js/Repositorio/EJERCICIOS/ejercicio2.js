//EJERCICIO 2
// Solicitando las 3 notas del estudiante
let nota1 = parseFloat(prompt("Ingrese la primera nota (40%):", ''));
let nota2 = parseFloat(prompt("Ingrese la segunda nota (30%):", ''));
let nota3 = parseFloat(prompt("Ingrese la tercera nota (30%):", ''));

// Calculando el promedio ponderado
let promedioPonderado = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3);

// Mostrando el promedio en consola
console.log("El promedio ponderado es: " + promedioPonderado);

// Determinando el resultado según el promedio
if (promedioPonderado < 3.95) {
    alert("El estudiante ha reprobado la asignatura.");
} else if (promedioPonderado >= 3.95 && promedioPonderado <= 4.94) {
    alert("El estudiante va a examen.");
} else if (promedioPonderado >= 4.95) {
    alert("El estudiante se exime de la asignatura.");
}
