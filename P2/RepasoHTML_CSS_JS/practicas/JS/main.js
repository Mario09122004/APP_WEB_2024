//Este es un comentario de Js de una linea
/*
Este es un comentario
de varias
lineas de codigo
*/
//Variables
var nombre = "Mario Lira";
var nombre2 = 'Ricardo';
//let permite cambiar variables
let nombre3 = "David";
let edad = 19;
let estatura = 1.80;
let logico = false;

//Mostrar contenido de variables
console.log("Hola soy la consola y tú nombre es: "+nombre);//A traves de consola
document.write("<hr><h2>Hola soy la consola y tú nombre es: "+nombre+"</h2>");

//alert("Soy una alerta:"+ nombre)

//Mostrar contenido getElementById

let datos = document.getElementById("informacion");
datos.innerHTML="Hola soy u contenido de innerHTML. <br>";
datos.innerHTML+="<hr><h2>Hola soy u contenido de innerHTML x2</h2><hr>";
datos.innerHTML+="<hr><h2>Mi edad: "+edad+"</h2><hr>";
datos.innerHTML+=`
            <hr>
            <h2>Mi edad es: ${edad}</h2>
            <h2>Mi nombre es: ${nombre}</h2>
            </hr>
`;

//condiciones
if (edad>18){
    datos.innerHTML+=`<hr><h2>Eres mayor de edad</h2><hr>`;
    datos.innerHTML+=`<hr><h2>Eres mayor de edad</h2><hr>`;
}else if(edad<18){
    datos.innerHTML+=`<hr><h2>Eres menor de edad</h2><hr>`;
}else{
    datos.innerHTML+=`<hr><h2>Apenas mayor de edad</h2><hr>`;
}

//ciclos
for(let i=1;i<=5;i++){
    datos.innerHTML+=`<hr><h2>Numero del for: ${i}</h2><hr>`;
}

//ciclo while
i=1;
while (i<=5){
    datos.innerHTML+=`<hr><h2>Numero del while: ${i}</h2><hr>`;
    i++;
}

//ciclo do while
i=1;
do{
    datos.innerHTML+=`<hr><h2>Numero del dowhile: ${i}</h2><hr>`;
    i++;
}while(i<5);

//Funciones
//Funciones que no reciben parametros y no regresa valor
function suma1(){
    let n1 = 2;
    let n2 = 3;
    let suma = n1+n2;
    datos.innerHTML+=`<hr><h2>La suma 1 da como resultado: ${suma}</h2><hr>`;
}
suma1();

//Funciones que no reciben parametros y si regresa valor
function suma2(){
    let n1 = 5;
    let n2 = 5;
    let suma = n1+n2;
    return suma;
}
let sum=suma2();
datos.innerHTML+=`<hr><h2>La suma 2 da como resultado: ${sum}</h2><hr>`;

//Funciones que si reciben parametros y no regresa valor
function suma3(numero1,numero2){
    let nu1 = numero1;
    let nu2 = numero2;
    let sum = nu1+nu2;
    datos.innerHTML+=`<hr><h2>La suma 3 da como resultado: ${sum}</h2><hr>`;
}
suma3(15,8);

//Funciones que si reciben parametros y si regresa valor
function suma4(numero1,numero2){
    let n1 = numero1;
    let n2 = numero2;
    let suma = n1+n2;
    return suma;
}

let suma=suma4(84,46);
datos.innerHTML+=`<hr><h2>La suma 2 da como resultado: ${suma}</h2><hr>`;

//Arreglos
let animales = [];
animales[0]="Perro","Gallina","Perido";
animales[1]="Gallina";
animales[4]="Perico";
console.log(animales);

let animales2=["Leon","Tigre","Elefante"];
console.log(animales2);

for(let i=0;i<animales.length;i++){
    datos.innerHTML+=`<hr><h2>Animal en la posision ${i}: ${animales[i]}</h2><hr>`;
}

animales2.forEach(Element=>{
    datos.innerHTML+=`<hr><h2>Animal es: ${Element}</h2><hr>`;
});


//Clases
/*
class operaciones{
    hola(){
        console.log("Hola, clases")
    }
    adios(){
        console.log("Adios,")
    }
}
const op = new operaciones();
op.hola();
op.adios();
if(logico){
    console.log(edad)
    }else{
    console.log(nombre.length)
}*/ 