// Variables y tipos de datos:
// a. Crea una variable numérica y muestra su valor por consola.
let number = 20; 
console.log(number); 

//b. Crea una variable de texto y muestra su longitud por consola.
let texto = "Hola Mundo";
console.log("Longitud :" ,texto.length); 

//c. Crea una variable booleana y muestra su valor por consola.
let esMujer = false;
console.log(esMujer);   

//d. Crea una variable array y muestra su contenido por consola.
const coleccion = ["mango", "manzana", "anana", "banana", "frutilla"];
console.log(coleccion)

//e. Crea una variable objeto y muestra una de sus propiedades por consola
const perro = {
    nombre: "Lion",
    edad: 2,
    esMujer: false
};
console.log(perro.nombre);

//Operadores y expresiones:
//a. Realiza una operación aritmética y muestra el resultado por consola.
function suma(a,b) {
    return a + b;
}

console.log(suma(20,26));

//b. Combina dos cadenas de texto y muestra el resultado por consola.
let nombre = "Maria";
let apellido = "Mendez";

let doscadenas = nombre + " " + apellido;
console.log(doscadenas);
//c. Compara dos valores y muestra el resultado por consola.

let uno = 1;
let dos = 2;

console.log(uno === dos); 

//d. Crea una expresión lógica con operadores lógicos y muestra el resultado por consola.
let year = 1997;

if(year === 1997 ) {
    console.log("Es el mismo año");

} else {
    console.log("No es el mismo año ");
}

//Funciones:
//a. Crea una función que tome un número como parámetro y devuelva su cuadrado.
let cuadrado_num = 8;

function cuadrado (cuadrado_num) {
    return cuadrado_num ** 2;

}
console.log (cuadrado(cuadrado_num));

//b. Crea una función que tome un array como parámetro y devuelva el número de elementos que contiene.

const autos = ["Audi", "Fiat", "Renault", "Jeep"]

function recorrer(autos) {
    for(let i = 0; i < autos.length; i++){
        console.log(autos[i]);
    }
}

//c. Crea una función que tome un objeto como parámetro y devuelva la cantidad de propiedades que tiene.
const persona = {
    nombre: "Yolanda",
    edad: 25,
    direccion: "Siempre viva 1897",
    profesion: "Programador"
};

console.log(Object.values(persona).length);

//d. Crea una función que tome dos números como parámetros y devuelva el mayor de ellos.
const num1 = 5
const num2 = 10
function mayor(num1,num2) {
    return Math.max (num1 , num2);
}
console.log(mayor(num1 , num2));

//Manipulación del DOM:
//a. Crea un botón en HTML y añade un evento onClick que muestre un mensaje por consola cuando se haga clic en el botón.
const boton = document.createElement("input");
boton.setAttribute("type","button"); 
boton.value = "Hola!";
document.body.appendChild(boton);

boton.addEventListener("click", () => {
    alert("exito")
})
