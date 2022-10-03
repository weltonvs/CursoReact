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

//Estilo de funciones de flecha en React
const getUser = () => {
    return {
        uid: 'ABC123',
        userName: 'El_Papi1502'
    };
};

console.log(getUser());

//Escrbir la función anterior con la flecha reducida
const getUser2 = () => (
    {
        uid: 'ABC123',
        userName: 'El_Papi1503'
    }
);

console.log(getUser2());

//Tarea 
//1. Transformar a una función de Flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas

function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC1501',
        userName: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Welton');

console.log( usuarioActivo );

// Hacer la transformación de una función de flecha
// Opción 1:
let getUsuarioActivo2 = ( nombre )  => {
    return {
        uid: 'ABC1501',
        userName: nombre
    }
};

const usuarioActivo2 = getUsuarioActivo2('Welton - Opción 1');

console.log( usuarioActivo2 );

// Opción 2:
let getUsuarioActivo3 = ( nombre )  => (
    {
        uid: 'ABC1501',
        userName: nombre
    }
);

const usuarioActivo3 = getUsuarioActivo3('Welton - Opción 2');

console.log( usuarioActivo3 );