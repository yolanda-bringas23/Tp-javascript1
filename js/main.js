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

//Variables y tipos de datos:
//a) Crea una variable y asígnale un número. Luego, imprime por consola el doble de ese número.
const num = 2
console.log(num * 2);
//b) Crea una variable y asígnale una cadena de texto. Luego, imprime por consola lalongitud de esa cadena.
let cadena = "Hola Profesor";
console.log("Longitud :" ,cadena.length);

//c) Crea dos variables numéricas y realiza operaciones matemáticas básicas con ellas (suma, resta, multiplicación, división).
let num_1= 4;
let num_2= 4;

console.log(num_1 - num_2);
console.log(num_1 + num_2);
console.log(num_1 * num_2);
console.log(num_1 / num_2);

//Estructuras de control:
//a) Escribe un programa que reciba un número y determine si es par o impar.
function determinarParimpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par.";
    } else {
      return "El número es impar.";
    }
  }
  
// Solicitar al usuario que ingrese un número
let numeroIngresado = prompt("Ingrese un número:");
  
// Convertir el valor ingresado a un número entero
numeroIngresado = parseInt(numeroIngresado);
  
// Llamar a la función para determinar si es par o impar y mostrar el resultado
let resultado = determinarParimpar(numeroIngresado);
console.log(resultado);
//b) Crea un bucle que imprima los números del 1 al 10.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//c) Escribe una función que reciba dos números y devuelva el mayor de ellos.
/*let numero1 = 2
let numero2 = 8
function mayor(numero1,numero2) {
    return Math.max (numero1 , numero2);
}
console.log(mayor(numero1 , numero2));*/

function MayoryMenor(numer1, numer2) {
    if (numer1 > numer2) {
        return numer1;
    } else {
        return numer2;
    }
}

let resultado_MyM = MayoryMenor(8, 2);
console.log(resultado_MyM);

//Funciones y arrays:
//a) Escribe una función que reciba un array de números y devuelva la suma de todos ellos.
function obtenerSuma(arrayNumeros) {
    let suma = 0;
    for(let i = 0; i < arrayNumeros.length; i++){
     suma = suma + arrayNumeros[i];
    }
    return suma;
}
let numerosss = [2,3,4,5];
let resultado3 = obtenerSuma(numerosss);
console.log(resultado3);

//b) Crea un array de nombres y recorre el array imprimiendo cada nombre en la consola.
const nombres = ["Jani", "Yoli", "Kevin"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//c) Escribe una función que reciba un array de números y devuelva un nuevo array con solo los números pares.
function numbers(arrayNumbers) {
    let numerios = [];
    for (let i = 0; i < arrayNumbers.length; i++){
        if (arrayNumbers[i] % 2 === 0) {
           numerios.push(arrayNumbers[i]);
    }  
  }
    return numerios;
}

let arrayNumbers = [0,1,2,3,4,5,6,7,8,9,10];
let numerios= numbers(arrayNumbers);
console.log(numerios);

//Objetos y métodos:
//a) Crea un objeto persona con propiedades como nombre, edad y profesión. Luego, accede a esas propiedades e imprímelas en la consola.
const object = {
    nombre: "Yoli",
    edad: 20,
    esAlumna: true
};

console.log(object.nombre,object.edad,object.esAlumna);
//b) Agrega un método al objeto persona que imprima un mensaje de saludo utilizando las propiedades del objeto.
const personita = {
    nombre: "Coki",
    edad: 6,
    direccion: "Calle Falsa 123",
    saludar: function() {
        console.log("Mi nombre es " + this.nombre + " Tengo " + this.edad + " Vivo en " + this.direccion);
    }
};

personita.saludar();

//c) Crea un objeto libro con propiedades como título, autor y año de publicación. Luego, crea un método que calcule la antigüedad del libro en años.

let libro = {
    titulo: "Como Agua Para Chocolate",
    autor: "Laura Esquivel",
    ano_de_publicacion: 1989,
    antiguedad: function() {
        let anio_actual = new Date().getFullYear();
        let publicacion = anio_actual - this.ano_de_publicacion;
        return publicacion;
    }
};

let antiguedad_libro = libro.antiguedad();
console.log("Libro tiene antiguedad de ", antiguedad_libro);