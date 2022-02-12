window.onload = () => {
    document.getElementById("cantidad").value = 5;
}
var listaNumeros = new Array();
function operacion1() {
    let elemento = "<ul>";
    let maximo = parseInt(document.getElementById("cantidad").value)
    for (let i = 1; i <= maximo; i++) {
        elemento = elemento + "<li>" + i + "</li>";
    }
    elemento = elemento + "</ul>"
    document.getElementById("respuesta").innerHTML = elemento;
}

function agregarNumero() {
    let numero = parseInt(document.getElementById("numero").value);
    listaNumeros.push(numero);
    document.getElementById("numero").value = "";
    let elemento = "<ul>";
    listaNumeros.forEach(x => elemento = elemento + "<li>" + x + "</li>");
    elemento = elemento + "</ul>"
    document.getElementById("numeros_listados").innerHTML = elemento;
}

function operacion2() {
    let suma = 0;
    listaNumeros.forEach(x => suma += x)
    /*
        for (let valor : listaNumero) {
            suma =+ valor
        }
    */
    document.getElementById("respuesta2").innerHTML = "La respuesta es " + suma;
}

function operacion3() {
    let color = document.getElementById("color").value;
    let element = document.createElement("h3");
    element.innerHTML="Hola Mundo";
    element.style.color = color;
    document.getElementById("respuesta3").appendChild(element);
}

