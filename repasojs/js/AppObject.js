/**
 * Objectos en JavaScript
 */

//Objetos literales - Forma antigua de hacer.
const persona = {
  nombre: "juan",
  profesion: "Desarrollador Web",
  edad: 500
};

console.log(persona);
console.log(persona.nombre);

//Object Constructor
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

//Instanciando un objeto del tipo Tarea,
const tarea1 = new Tarea("Welton", "Urgente");

//Imprimiendo en consola el objeto tarea1.
console.log(tarea1);

/**
 * Utilizando el Prototype
 * Son como los métodos de clase en Java.
 */

//Creando una clase
function Empleado(nombre, direccion) {
  this.nombre = nombre;
  this.direccion = direccion;
}
//Aplicando un método al objeto Empleado
Empleado.prototype.mostrarInformacion = function() {
  return `Nombre: ${this.nombre}\nDirección: ${this.direccion}`;
};

let objeto_Empleado = new Empleado("Welton", "Calle Juarez");
console.log(objeto_Empleado);
console.log(objeto_Empleado.mostrarInformacion());

/**
 * Object Destructuring
 */

//Forma antigua de hacer Object Destructuring
const aprendiendoJS = {
  version: {
    nueva: "ES6",
    anterior: "ES5"
  },
  frameworks: ["React", "VueJS", "AngularJS"]
};

console.log(aprendiendoJS); //Forma actual de acceder al objecto
console.log(aprendiendoJS.version.nueva);//Forma antigua de acceder al objeto
console.log(aprendiendoJS.frameworks[1]);