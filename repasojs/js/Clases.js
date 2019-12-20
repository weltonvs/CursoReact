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
        return(`La tarea ${this.nombre} tiene una priodidad ${this.priodidad}`);
    }

}

class ComprasPendientes extends Tarea{
    /**
     * Constructor de la clase ComprasPendientes
     * @param {*} nombre 
     * @param {*} priodidad 
     * @param {*} cantidad 
     */
    constructor(nombre, priodidad, cantidad){
        super(nombre,priodidad);
        this.cantidad = cantidad;
    }
    
    
    mostrar(){
        return `${super.mostrar()} de ${this.cantidad}`;
    }
    
}

//Instanciar un objeto de la clase Tarea
let objeto1 = new Tarea("Estudiar","Alta");
let objeto2 = new Tarea("Comprar Coche Nuevo","Alta");
let objeto3 = new Tarea("Ver series y peliculas","Baja");
console.log(objeto1.mostrar());
console.log(objeto2.mostrar());
console.log(objeto3.mostrar());

//Instanciar objetos de la clase heredada ComprasPendientes.
let objeto4 = new ComprasPendientes("Vender Coche","Media", "10");
console.log(objeto4.mostrar());
