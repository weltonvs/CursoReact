/**
 * Programación orientada a Objetos
 */

// Clases en JavaScript
class Tarea{

    /**
     * Constructor de la clase Tarea
     * @param {*} nombre 
     * @param {*} priodidad 
     */
    constructor(nombre, priodidad){
        this.nombre = nombre;
        this.priodidad = priodidad;
    }

    /**
     * Método mostrar contenido de los atributos.
     */
    mostrar(){
        return(`La tarea ${this.nombre} tiene una priodidad ${this.priodidad}.`);
    }

}

//Instanciar un objeto de la clase Tarea
let objeto1 = new Tarea("Estudiar","Alta");
let objeto2 = new Tarea("Comprar Coche Nuevo","Alta");
let objeto3 = new Tarea("Ver series y peliculas","Baja");
console.log(objeto1.mostrar());
console.log(objeto2.mostrar());
console.log(objeto3.mostrar());
