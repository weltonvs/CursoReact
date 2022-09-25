// Concatenando strings

const nombre = 'Welton';
const apellido = 'Vieira dos Santos';

const nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

//Concatenando con template (backstrick)
const nombreCompletoBackStick = `${nombre} ${apellido}`;

console.log(nombreCompletoBackStick);

//Modificando el template de visulalización
const nombreCompletoTemplate = `
${nombre} 
${apellido}
`;

console.log(nombreCompletoTemplate);

//Modificando el template de visulalización con código JavaScript
const nombreCompletoTemplateJavaScript = `
${nombre} 
${apellido}
${1 + 2}
`;

console.log(nombreCompletoTemplateJavaScript);

function getSaludo() {
    return "Hola Mundo desde un Template";
}

console.log(`Este es un texto: ${getSaludo()}`);


//Llamadas a funciones con argumentos
let argumento = "Welton";

function getSaludosArgumento(argumento) {
    argumento = "texto nuevo modificado dentro de la función";
    return "Hola mundo para " + argumento;
}

console.log(`Este es un texto: ${getSaludosArgumento(argumento)}`);