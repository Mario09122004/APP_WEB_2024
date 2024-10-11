function operacion(){
    //let num1,num2,opcion;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let opcion = document.getElementById("opcion").value;
    const divResultado = document.getElementById('resultado');
    
    if(isNumber(num1) && isNumber(num2)){
        //Herramienta de cotrol selectiva
        switch(opcion){
            case"suma":
                divResultado.innerHTML = `<h2>${num1} + ${num2} = ${num1+num2}</h2>`;
                break;
            case"resta":
                divResultado.innerHTML = `<h2>${num1} - ${num2} = ${num1-num2}</h2>`;
                break;
            case"multiplicacion":
                divResultado.innerHTML = `<h2>${num1} * ${num2} = ${num1*num2}</h2>`;
                break;
            case"divicion":
                if (num2 !== 0) {
                    divResultado.innerHTML = `<h2>${num1} / ${num2} = ${num1/num2}</h2>`;
                } else {
                    divResultado.innerHTML = `<h2>Error: División por cero</h2>`;
                }
                break;
        }
    }else{
        alert("Ingrese solo numeros por favor.");
    }
}

//Función
function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
} 
//Fucnion profe
function a(){
    let resultado;
    resultado= document.getElementById("resultado").innerHTML=`<h2>${n1} ${tipoope} ${n2} = ${ope}</h2>`
}
/*
function operacionIf() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let opcion = document.getElementById("opcion").value;
    const divResultado = document.getElementById('resultado');
    
    if (opcion === "suma") {
        divResultado.innerHTML = `<h2>Suma: ${num1} + ${num2} = ${num1+num2}</h2><hr>`;
    } else if (opcion === "resta") {
        divResultado.innerHTML = `<h2>Resta: ${num1} - ${num2} = ${num1-num2}</h2><hr>`;
    } else if (opcion === "multiplicacion") {
        divResultado.innerHTML = `<h2>Multiplicación: ${num1} * ${num2} = ${num1*num2}</h2><hr>`;
    } else if (opcion === "divicion") {
        if (num2 !== 0) {
            divResultado.innerHTML = `<h2>División: ${num1} / ${num2} = ${num1/num2}</h2><hr>`;
        } else {
            divResultado.innerHTML = `<h2>Error: División por cero</h2><hr>`;
        }
    }
}*/
