//Variables con var - versón antigua de javaScript
var aprendiendo;
aprendiendo = "JavaScript";
console.log(aprendiendo);

/**
 * Variables con cost
 * Nuevas versiones de JavaScript
 */
const VARIABLE_CONSTANTE = "Constantes en javaScript nuevo"
console.log(VARIABLE_CONSTANTE);

/**
 * Variables con let - Nueva versión javaScript
 */
let variable_con_let;
variable_con_let = "Variables con let - JavaScript nuevo. Sustituye el var";

/**
 * Variable con scoop en JavaScript
 */
var musica = 'Rock';
if(musica){
    var musica = 'Grunge';
    console.log(musica);
}
console.log(musica);
console.log("SE observa que se modifica dentro del if se modifica se utiliza var");

let musica2 = 'Sertanejo';
if(musica2){
    const musica2 = "Teste";
    console.log(musica2);
}
console.log(musica2);

/**
 * Templates en javaScript
 */
const nombre = 'Welton';
const trabajo = 'Desarrollador Web';

//Forma antigua de concatenar strings.
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);

//Nueva forma de concatenar strings.
// Nota: hay que utilizar ese simbolo ` - ese otro provoca error '.
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//Concatenar con multiples lineas.
//const contenedorApp = document.querySelector('#app');
//    let html = '<ul>' +
//                    '<li> Nombre: ' + nombre + '</li>' +
//                    '<li> Trabajo: ' + trabajo + '</li>' +
//                '</ul>';

//contenedorApp.innerHTML = html;

//Utilizando el template.

const contenedorApp2 = document.querySelector('#app');

let html2 = `
    <ul>
        <li>Nombre: ${nombre} </li>
        <li>Trabajo: ${trabajo} </li>
    </ul>    
`;

contenedorApp2.innerHTML = html2;


/**
 * Trabajando con Funciones
 */
//Creando una función clasica en JavaScript
//Fuction Declaration
//Ese tipo de función se puede crear al inicio o al final
// del código.
function saludar(nombre){

    console.log('Bienvenido ' + nombre);

}

console.log(saludar('Welton'));
console.log(saludar('Aaliyah'));

//Function Expression
//Ese tipo de función siempre se crea primero y 
//despues se puede llamarla.
const cliente = function(nombre){
    console.log('Bienvenido ' + nombre);
}

cliente('Welton');

/**
 * Funciones
 * Parámetros por default
 */
function actividad(nombre, actividad){

    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
    
}

actividad('Juan','Aprender JavaScript');
actividad();//Aqui la función funcionará, pero al no pasar parámetros se implime underfild

//Para soluciona ese problema, utilize parámetros por default
function actividad(nombre = 'Sin nombre', actividad = 'Sin actividad'){

    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
    
}

actividad();
//Haciendo lo mismo con fuction Expression
const actividad_2 = function(nombre = 'Sin nombre', actividad = 'sin actividad'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);   
}

actividad_2();

/**
 * Arrow Functions
 */

 //Utilizando fuction expression
 let viajando = function(destino){
    return `Viajando a la ciudad de: ${destino}`;
 }

 let viaje;
 viaje = viajando('Pariz');
 console.log(viaje);
 //Pasando la función anterior a Arrow Fuctions con un argumento
 let viajando_Arrow_Fuctions = destino => {
     return `Viajando a la ciudad de: ${destino}`;
 }
 let viaje2;
 viaje2 = viajando_Arrow_Fuctions('Brasil');
 console.log(viaje2);

 //Pasando la función anterior a Arrow Fuctions con mas de un argumento
 let viajando_Arrow_Fuctions2 = (destino, por) => {
     return `Viajando a la ciudad de: ${destino} por ${por}`;
 }
 let viaje3;
 viaje3 = viajando_Arrow_Fuctions2('Brasil','España');
 console.log(viaje3);
 //Con más de un parametro hay que poner dentro de parentesis.