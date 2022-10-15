// Desestructuación de Arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

//Imprimir resultados en consola
console.log(personajes);
//imprimir los personajes por separado
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//Dessestructurando el Array
//El primer elemento del array
const [P1] = personajes;

//El segundo elemento del array
const [ , P2] = personajes;

//El tercero elemento del array
const [ , , P3] = personajes;

//Imprimir los elementos desestructurados del array
console.log(P1);
console.log(P2);
console.log(P3);

//Una función que regresa un arreglo
const retornaArreglo = () => {
    return ['ABC', 123];
}

//Obtener los valores del arreglo
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


//Tarea
//1. el primer valor del arr se llamará nombre
//2. se llamará setNombre
const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);

setNombre();