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
