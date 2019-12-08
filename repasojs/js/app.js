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