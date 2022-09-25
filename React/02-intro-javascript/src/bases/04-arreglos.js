// Arreglos en JS
// const arreglo = new Array(100);

const arreglo = [];

console.log(arreglo);

arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
arreglo.push(5);

console.log(arreglo);

//No usar el push porque modifica el objeto

let arreglo2 = [1,2,3,4,5];
console.log(arreglo2);

arreglo2[5] = 6;
console.log(arreglo2);

//Clonar el arreglo y modificar
let arreglo3 = [...arreglo2,7];
console.log(arreglo3);

//funcion MAP de JS
const arreglo4 = arreglo2.map(function(numero) {
    return numero * 2;
});

console.log(arreglo4);

