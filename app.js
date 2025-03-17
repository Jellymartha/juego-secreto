let numeroSecreto = 0;
let intentos = 0;
let listaNemerosSortedos = [];
let numeroMaximo= 10;


function asiganarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    

    console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asiganarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asiganarTextoElemento("p", "El número es menor");
        } else {
        asiganarTextoElemento("p", "El número es mayor");
    }
    intentos++;
    document.getElementById("valorUsuario").value = ""; // Limpia el input
}
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNemerosSortedos)
    //si ya se terminó de sortear toda la lista
    if (listaNemerosSortedos.length == numeroMaximo) {
        asiganarTextoElemento("p","Ya se sortearon todos los números")
    } else {

    //si el numero generado esta incluido en la lista 
    if (listaNemerosSortedos.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }
    else {
        listaNemerosSortedos.push(numeroGenerado);
        return numeroGenerado
    }
    }
}
function condicionesIniciales() {
    asiganarTextoElemento("h1", "Juego del número secreto actualizado");
    asiganarTextoElemento("p", `"Indica un numero del 1 al ${numeroMaximo} xddd"`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    document.getElementById("valorUsuario").value = "";
    //indicar mensaje de inicio
    //indicar número secreto
    //indicar los intentos
    condicionesIniciales()
    //desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales()
