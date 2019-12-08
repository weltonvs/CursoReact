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
