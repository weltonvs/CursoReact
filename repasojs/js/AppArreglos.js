/**
 * Métodos en Arreglos
 */

// Arreglos de objetos.
const personas = [
    {nombre: 'Juan', edad:23, aprendiendo:'JavaScript'},
    {nombre: 'Pablo', edad:18, aprendiendo:'PHP'},
    {nombre: 'Alejandra', edad:21, aprendiendo:'AdobeXD'},
    {nombre: 'Caren', edad:30, aprendiendo:'Phyton'},
    {nombre: 'Miguel', edad:35, aprendiendo:'ReactJS'}
];
console.log(personas);//Imprimiendo el arreglo en la consola.

//Quiero filtrar solo mayores de 28 años
mayores = personas.filter(persona => {
    return persona.edad > 28;
});
console.log(mayores);

//Que aprende alejandra y su edad.
const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra'; //SE puede utilizar para comparar = o == 0 ===
});
console.log(alejandra);

//Sacar la suma de las edades con el método reduce (Sintaxis de reduce es objeto.reduce(param1, param2) lo que me devuelve la suma de los dos parámetros)
let total = personas.reduce((edadTotal,persona) => {
    return edadTotal + persona.edad;
}, 0);
console.log(total);
//Para saber la edad media
console.log(total/personas.length);


