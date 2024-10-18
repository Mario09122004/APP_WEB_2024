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
        divResultado.innerHTML = `<h2>Favor de ingresar solo numeros</h2>`;
        alert("Ingrese solo numeros por favor.");
    }
}
//Función
function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}