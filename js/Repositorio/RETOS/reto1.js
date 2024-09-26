let texto = prompt('Escribe una cadena de texto', '');


texto = texto.toLowerCase();


let con_a = 0; 
let con_e = 0; 
let con_i = 0; 
let con_o = 0; 
let con_u = 0;


for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];


    if (caracter === 'a') {
        con_a++;
    } else if (caracter === 'e') {
        con_e++;
    } else if (caracter === 'i') {
        con_i++;
    } else if (caracter === 'o') {
        con_o++;
    } else if (caracter === 'u') {
        con_u++;
    }
}


alert(`Cantidad de a: ${con_a}\nCantidad de e: ${con_e}\nCantidad de i: ${con_i}\nCantidad de o: ${con_o}\nCantidad de u: ${con_u}`);
