/**
 * Objectos en JavaScript
 */

 //Objetos literales - Forma antigua de hacer.
 const persona = {
     nombre : 'juan',
     profesion : 'Desarrollador Web',
     edad: 500

 }

 console.log(persona);
 console.log(persona.nombre);

 //Object Constructor
 function Tarea(nombre, urgencia){
     this.nombre = nombre;
     this.urgencia = urgencia;
 }

 //Instanciando un objeto del tipo Tarea,
 const tarea1 = new Tarea('Welton', 'Urgente');

 //Imprimiendo en consola el objeto tarea1.
 console.log(tarea1);

 