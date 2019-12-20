/**
 * Programación orientada a Objetos
 */

// Clases en JavaScript
class Tarea{

    constructor(nombre, priodidad){
        this.nombre = nombre;
        this.priodidad = priodidad;
    }

}

//Instanciar un objeto de la clase Tarea
let objeto1 = new Tarea("Estudiar","Alta");
let objeto2 = new Tarea("Comprar Coche Nuevo","Alta");
let objeto3 = new Tarea("Ver series y peliculas","Baja");
console.log(objeto1);
console.log(objeto2);
console.log(objeto3);