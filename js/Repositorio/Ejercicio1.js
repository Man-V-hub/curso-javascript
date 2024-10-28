// Función para calcular el área de un círculo
function calcularAreaCirculo() {
    let radio = prompt("Ingrese el radio del círculo:");
    let area = Math.PI * Math.pow(radio, 2); // Fórmula: π * radio^2
    alert(`El área del círculo es: ${area.toFixed(2)}`);
}

// Función para calcular el área de un triángulo
function calcularAreaTriangulo() {
    let base = prompt("Ingrese la base del triángulo:");
    let altura = prompt("Ingrese la altura del triángulo:");
    let area = (base * altura) / 2; // Fórmula: (base * altura) / 2
    alert(`El área del triángulo es: ${area.toFixed(2)}`);
}

// Función para calcular el área de un rectángulo
function calcularAreaRectangulo() {
    let base = prompt("Ingrese la base del rectángulo:");
    let altura = prompt("Ingrese la altura del rectángulo:");
    let area = base * altura; // Fórmula: base * altura
    alert(`El área del rectángulo es: ${area.toFixed(2)}`);
}

// Llamadas de las funciones para probarlas
calcularAreaCirculo();
calcularAreaTriangulo();
calcularAreaRectangulo();
