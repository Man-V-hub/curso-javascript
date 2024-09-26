//EJERCICIO 1
// Solicitando al usuario que ingrese un número
let numero = prompt("Ingrese un número:", '');

// Verificando si el número es par o impar
if (numero % 2 === 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}

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

//EJERCICIO 3
// Inicializando la sumatoria en 0
let sumatoria = 0;

// Bucle para recorrer los valores de la secuencia
for (let i = 500; i <= 800; i += 2) {
    // Si el valor de i es impar, sumamos al valor
    if (i % 2 === 0) {
        sumatoria += i;
    } else {
        sumatoria += (i + 2);
    }
}

// Imprimiendo el resultado de la sumatoria
console.log("La sumatoria es: " + sumatoria);

//EJERCICIO 4
// Tarifas por turno
const tarifaDiurna = 12000;
const tarifaNocturna = 16000;
const incrementoDiurnoDomingo = 2000;
const incrementoNocturnoDomingo = 3000;
const horasPorTurno = 10;

// Información de los empleados
let empleados = {
    empleado1: {
        nombre: "Empleado 1",
        turnos: {
            lunes: 'nocturno',
            martes: 'nocturno',
            miercoles: 'nocturno',
            jueves: 'diurno',
            viernes: 'diurno',
        }
    },
    empleado2: {
        nombre: "Empleado 2",
        turnos: {
            martes: 'nocturno',
            miercoles: 'nocturno',
            jueves: 'nocturno',
            domingo: 'diurno',
        }
    },
    empleado3: {
        nombre: "Empleado 3",
        turnos: {
            miercoles: 'diurno',
            jueves: 'diurno',
            viernes: 'diurno',
            sabado: 'nocturno',
            domingo: 'nocturno',
        }
    }
};

// Función para calcular el pago diario
function calcularPagoDiario(turno, dia) {
    let pago = 0;
    if (turno === 'diurno') {
        if (dia === 'domingo') {
            pago = (tarifaDiurna + incrementoDiurnoDomingo) * horasPorTurno;
        } else {
            pago = tarifaDiurna * horasPorTurno;
        }
    } else if (turno === 'nocturno') {
        if (dia === 'domingo') {
            pago = (tarifaNocturna + incrementoNocturnoDomingo) * horasPorTurno;
        } else {
            pago = tarifaNocturna * horasPorTurno;
        }
    }
    return pago;
}

// Función para calcular el total semanal
function calcularPagoSemanal(empleado) {
    let totalSemanal = 0;
    let pagosDiarios = {};

    for (let dia in empleado.turnos) {
        let turno = empleado.turnos[dia];
        let pagoDiario = calcularPagoDiario(turno, dia);
        pagosDiarios[dia] = pagoDiario;
        totalSemanal += pagoDiario;
    }

    return { pagosDiarios, totalSemanal };
}

// Calculando y mostrando los pagos diarios y totales de cada empleado
for (let empleadoKey in empleados) {
    let empleado = empleados[empleadoKey];
    let { pagosDiarios, totalSemanal } = calcularPagoSemanal(empleado);

    console.log(`${empleado.nombre}:`);
    console.log("Pagos diarios: ", pagosDiarios);
    console.log("Total semanal: ", totalSemanal);
    console.log("-------------------------");
}
