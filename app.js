
// caja de texto ingresado por el usuario
const textUSer = document.querySelector('#text-user');
//caja de texto con la respuesta entregada al usuario
let textResult= document.querySelector('#text-result');

asignarTextoElemento('#mensaje', 'Ningún mensaje fue encontrado')
asignarTextoElemento('#nota', 'Ingresa el texto que desees encriptar o desencriptar.')

let userText = '';



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// ENCRIPTACIÓN
/*
e = enter
i = imes
a = ai
o = ober
u = ufat
*/
// matriz con la información del código

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];


function encriptar(text) {
    text = text.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++) {
        if(text.includes(matrizCodigo[i][0])) {
            text = text.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return text;
}

function desencriptar(text) {
    text = text.toLowerCase();
    for(let i=matrizCodigo.length-1; i>=0; i--) {
        if(text.includes(matrizCodigo[i][1])) {
            text = text.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return text;
}



var mensaje1 = document.getElementById('mensaje');
var mensaje2 = document.getElementById('nota');
var imagen = document.getElementById('muneco');
var btnCopiar = document.querySelector('.btn-copiar');
var resultado = document.getElementById('text-result');


function mostrarResultado() {
    mensaje1.style.display = 'none';
    mensaje2.style.display = 'none';
    imagen.style.display = 'none';
    resultado.style.display = 'block';
    btnCopiar.style.display = 'block';
    btnCopiar.style.fontWeight = '400';
    btnCopiar.textContent = "Copiar";
}

//BOTONES

function btnEncriptar(){
    console.log('hola');
    console.log(textUSer.value);
    console.log(textResult.value);
    mostrarResultado();
    let textoEncriptado = encriptar(textUSer.value);
    textResult.value = textoEncriptado;
    textUSer.value = "";
    console.log(textResult.value);
}

function btnDesencriptar(){
    console.log('chocolate');
    console.log(textUSer.value);
    console.log(textResult.value);
    mostrarResultado();
    let textoDesencriptado = desencriptar(textUSer.value);
    textResult.value = textoDesencriptado;
    textUSer.value = "";
    console.log(textResult.value);
}

function copiarTexto(){
    textResult.select();
    textResult.setSelectionRange(0,9999);
    navigator.clipboard.writeText(textResult.value);
    btnCopiar.textContent = "¡Copiado!";
    btnCopiar.style.fontWeight = '700';
}