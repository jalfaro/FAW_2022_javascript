window.onload = function () {
    document.getElementById("txtNombre").value = "Julio";
    document.getElementById("txtSaludo").value = "Hola";
}
function saludar() {
    document.getElementById("saludo").innerHTML="<b>" + document.getElementById("txtSaludo").value + "</b>"
        + "&nbsp; <i>" + document.getElementById("txtNombre").value + "</i>";
}

let array = new Array();
function calculo(operador) {
    let op1 = parseInt(document.getElementById("operando1").value);
    let op2 = parseInt(document.getElementById("operando2").value);
    let resultado = 0.0;
    if (operador === '+') {
        resultado = op1 + op2
    } else if (operador === '-') {
        resultado = op1 - op2
    } else if (operador === '*') {
        resultado = op1 * op2
    } else if (operador === '/') {
        resultado = op1 / op2
    } 
    document.getElementById("respuesta").innerHTML = "El valor es " + resultado;
}

let agregar=  () => {
    let nombre = document.getElementById("txtPersona").value;
    array.push(nombre);
    document.getElementById("listado").innerHTML = document.getElementById("listado").innerHTML + "<li>" 
    + nombre +"</li>";
    document.getElementById("txtPersona").value = "";
}

let buscar = () => {
    let i = buscarNombre(document.getElementById("txtPersona").value);
    result = "No encontro";
    if (i >= 0) {
        result = "Si encontro";
    }
    array.forEach(x => console.log(x));
    document.getElementById("encontro").innerHTML = result;
}

let buscarNombre = palabra => array.findIndex(x => x === palabra)