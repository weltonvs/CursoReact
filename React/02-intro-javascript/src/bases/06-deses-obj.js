//Desestructuación de Objetos
const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman"
};

//Digamos que necesito obtener los valores de la propiedades para trabajar con ellas.
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//Desestruturando el objeto persona
const {nombre, edad, clave} = persona;

//Visualizando las propiedades del objeto persona de forma desestructurante

console.log(nombre);
console.log(edad);
console.log(clave);

//Usos frecuentes de la desestruturalización
//Función de ejmplo
const retornaPersona = (usuario) => {
    const {nombre, edad, clave} = usuario;
    console.log(nombre, edad, clave)
};

retornaPersona( persona)

//Ejemplo de desectructuralizar en el scopo de las funciones
const retornaPersona2 = ({nombre, edad}) => {
    console.log(nombre, edad);
};

retornaPersona2(persona)

//JavaScrip permite añadir elementos que no estan en los objetos a través de una función
const retornaPersona3 = ({nombre,edad,clave,rango = "Capitán"}) => {
    console.log(nombre, edad, clave, rango);
};

retornaPersona3(persona);


//Objeto con otro objeto dentro
const userContent = ({clave, nombre, edad, latitude}) => {
    return {
        nombreClave: clave,
        nombreUsuario: nombre,
        anios: edad,
        latitude: {
            lat: 14.1111,
            log: 10.5555
        }
    }
}

//const {nombreClave,nombreUsuario, anios, latitude} = userContent(persona);

//console.log(nombreClave,nombreUsuario,latitude);


const {nombreClave,nombreUsuario, anios, latitude:{lat,log}} = userContent(persona);

console.log(nombreClave,nombreUsuario,lat,log);
