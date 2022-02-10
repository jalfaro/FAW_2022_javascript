
window.onload = () => {
    document.getElementById("texto").value = "Texto Generico"
}
function operarFormulario1() {
    elements = "<span style='color:" + document.getElementById("color").value + "; font-size: " + 
    document.getElementById("size").value + "px'>" + 
    document.getElementById("texto").value + "</span>"
    document.getElementById("respuesta1").innerHTML = elements;
}

function operarFormulario2() {
    let maximo = parseInt(document.getElementById("numero").value);
    let respuesta = "<ul style='display:flex; flex-direction: column; flex-wrap: wrap;height:100px;padding:10px;width:500px;justify-content: space-between'>";
    for (let i = 1; i <= maximo; i ++) {
        respuesta = respuesta + "<li>" + i + "</li>";
    }
    respuesta = respuesta + "</ul>";
    document.getElementById("respuesta2").innerHTML = respuesta;
}

