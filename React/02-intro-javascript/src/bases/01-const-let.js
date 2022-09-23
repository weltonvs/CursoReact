// Variables y Constantes

console.log('Hola mundo');

const nombre = 'Welton';
const apellido = 'Vieira dos Santos';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if(true){

  //variables y constante del scope del bloque if
  // var no se debe utilizar...
  let valorDado = 6;
  let nombre = 'Pedro';
  console.log(valorDado);
  console.log(nombre);
}

//Variables y constantes en ese caso global
console.log(valorDado);
console.log(nombre);

