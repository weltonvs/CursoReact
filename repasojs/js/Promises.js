/**
 * Promises o Promesas
 * Las promesas lo que hace es que al utilizar el código si sale correcto almacena en la variable resolve,
 * caso salga mal se lanzará una notificación a través de la variable reject.
 */

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = false;

        if(descuento){
            resolve('Descuento aplicado!');
        } else {
            reject('No se puede aplicar el descuento');
        }
    }, 3000);
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log('No tiene derecho al descuento.');
});
