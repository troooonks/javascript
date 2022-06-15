const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
let mensaje = "";




const pepito = ( event ) => {
    if (event.key == "Backspace") {
        // estoy quitandole un caracter a la cadena
        mensaje = mensaje.slice(0,-1)
    } else {
        //mensaje = mensaje + event.key
        mensaje += event.key;
    }
    output.textContent = `has presionado "${mensaje}".`;


}

textBox.addEventListener('keydown', pepito);

