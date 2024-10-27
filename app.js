alert("Adivina el numero!\nTienes 5 intentos\nExitos!")
function adivinarNumero () {
    let numeroSecreto = Math.floor(Math.random( ) * 10) +1
    console.log(numeroSecreto)
    let intento;
    for(let i = 0; i < 5; i++) {
        intento = parseInt(prompt("Adivina el numero entre el 1 y el 10"))
        if (intento === numeroSecreto) {
            alert("Felicidades! Adivinaste el numero correcto.")
            return;
        } else if (intento > numeroSecreto){
            alert("Pista! El numero secreto es menor")
        }  else if (intento < numeroSecreto){
            alert("Pista! El numero secreto es mayor")
        } else {
            alert("Lo siento, no adivinaste el numero. El numero secreto era " + numeroSecreto)
            break;
        }
    }
   
}
adivinarNumero()