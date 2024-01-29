let numSecreto = 0;
let intentos = 0;
let numMaximo = 10;
let listaNumerosSorteados = [];


    
function asignarTextoElemento (elemento,texto ){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numDeUsuario = parseInt(document.getElementById('valorUsuario').value);
if (numDeUsuario==numSecreto) {
    asignarTextoElemento('p',`Acertaste! en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    //No acerto
    if(numDeUsuario>numSecreto){
        asignarTextoElemento('p','El número es menor');
    }else{
        asignarTextoElemento('p','El número es mayor');
    }
    intentos++;
    limpiarCaja();
}
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    
}


function generarNumSecreto () {
let numGenerado = Math.floor(Math.random() * numMaximo) +1;

console.log(numSecreto);
console.log(listaNumerosSorteados);

if (listaNumerosSorteados.length == numMaximo) {
    asignarTextoElemento('p','Todos los números fueron sorteados');
    
}else{

    if (listaNumerosSorteados.includes(numGenerado)) {
        return generarNumSecreto();
    }else{
        listaNumerosSorteados.push(numGenerado);
        return numGenerado;
        

    }
}
}


function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`indica un número del 1 al ${numMaximo}`);
    numSecreto = generarNumSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpiar juego
    limpiarCaja();
    //indicar mensaje de numeros
    //generara num aletorio 
    //inicializar el num de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

