// Objetos literales

const persona = {
    nombre: 'Welton',
    apellidos: 'Vieira dos Santos',
    edad: 44,
};

/* Imprime en pantalla el objeto */
console.log({persona});

//Otra forma de visualizar un objeto en formato tabla
console.table(persona);


//Objetos con atributos multivariados (objetos)
const persona2 = {
    nombre: "Lucia",
    apellidos: "Pensado Sanchez",
    edad: 27,
    direccion: {
        calle: "Manuel Antonio Barreiro Barbeito",
        ciudad : "Laracha",
        provincia: "A Coruña",
    }
}

console.log(persona2);

//Comodin para clonar un objeto.
const persona3 = {...persona2}

persona3.nombre = "Manuel";
console.log(persona3)