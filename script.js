//  function funcionClick () {
//     alert("click sobre el boton") }


//Se coloca un llamado al boton
// const button = document.querySelector('button')
// const div = document.querySelector('div')

// div.style.width= '30px'
// div.style.height= '30px'
// div.style.backgroundColor= 'yellow'



// //Con esta funcion se retorna
// const functionClic = ()=> {
//     // alert ("hola mundo")
//     console.log('Hicieron un click sobre mi') 
// }

// //Con esta funcion se entro
// const functionEnter = ()=> {
//     console.log('El mouse entro') 
// }

// //Con esta funcion salio
// const functionSalir = ()=> {
//     console.log('El mouse salio') 
// }

// button.onclick = functionClic

// // const functioClic = ()=> "hola mundo"


// //funcion que se asocia a ese evento, se asocia la funcion del click
// button.addEventListener('click', functionClic)
// button.addEventListener('mouseenter', functionClic)
// button.addEventListener('mouseleave', functionClic)
// div.addEventListener('mouseenter', functionClic)

//se ejecuta la funcion cuando se cargue la imagen

// document.addEventListener('DOM.ContentLoaded' , () =>{

// })


//selecionamos el elemento button dentro de la constante boton
const boton = document.querySelector("button");

//Esta línea de código define una función llamada "random" que toma un parámetro llamado "numero". 
//Utiliza la función Math.random() para generar un número decimal aleatorio entre 0 y 1, 
//luego lo multiplica por el parámetro "numero" más uno y finalmente utiliza Math.floor() 
//para redondear el resultado al número entero más cercano. El resultado final es un número aleatorio entre 0 y "numero".
const random = (number) => Math.floor(Math.random() * (number +1));

// Cuando se hace clic en el botón, se genera un color de fondo aleatorio y se aplica al elemento body
boton.addEventListener("click", () =>{
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});




// selecciona un elemento de entrada (input) con el id "inputTex"
const inputTex = document.querySelector('#inputTex');

//selecciona un elemento con el id "output"
const output = document.querySelector('#output');

//Cuando se presiona una tecla, se actualiza el contenido del elemento "output" con el texto que indica la tecla presionada
inputTex.addEventListener(
    "keydown",
    (e) => (output.textContent = `Usted ha presionado la tecla: "${e.key}".`)
);







