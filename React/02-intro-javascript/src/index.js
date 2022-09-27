//Funciones en JavaScript
function saludar(nombre) {
    return `Hola ${nombre}`;
}

//llamar la función
console.log(saludar("Welton"));

//Verificando el contenido de saludar
console.log(saludar);

//Asignando un valor a la variable que almacena la función
saludar = 30;

//Verificando el contenido de la variable
console.log(saludar);

//Funciones en JavaScript de forma correcta.
const saludar2 = function (nombre) {
    return `Hola ${nombre}`;
}

//llamar la función
console.log(saludar2("Welton en la Función 2"));
console.log(saludar2);

//saludar2 = 20;
//console.log(saluar2);

//Funciones estilo flecha en JavaScript.
const saludar3 =  (nombre) => {
    return `Hola ${nombre}`;
}

//llamar la función
console.log(saludar3("Welton en la Función 3 estilo flecha"));
console.log(saludar3);

//Funciones estilo flecha  reducida en JavaScript.
const saludar4 =  (nombre) => `Hola ${nombre}`;

//llamar la función
console.log(saludar4("Welton en la Función 3 estilo flecha reducida."));
console.log(saludar4);


//Función flecha sin argumento
const saludar5 = () => `Hola, soy una función sin argumentos`;

//Llamar la función sin argumento
console.log(saludar5());