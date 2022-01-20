// Funcion arrow de multiplicacion
let multi = (numero) => {
    for (i = 1; i <= numero; i++){
        while (i <= numero){
            let multip = i * numero;
            let showResult = i + " x " + numero + " = " + multip;
            console.log(showResult);
            document.getElementById("results").innerHTML += "<p>" + showResult + "</p>";
            // incrementa el iterador
            i++
          
           
        }
    }
}    
// Funcion arrow de factorial
let factorial = (numero) => {
    lastResult = 1;
    for (i = 1; i <= numero; i++){
        
        //Calcula el factorail, multiplica i por el ultimo factorial
        let result = lastResult * i;
        let showResult = "Factorial de " + i +" es : " + result;
        console.log(showResult);
        document.getElementById("results").innerHTML += "<p>" + showResult + "</p>";

        //Almacena ultimo factorial para el siguiente ciclo
        lastResult = result;
       
    }
}
//Solicitar entradas
//const results = document.getElementById("results")
var app = () => {
    let numero = prompt("Ingrese un número del 1 al 20");
    if (numero > 0 && numero <= 20){
        // Si numero está entre 0 y 20 => ejecutar

        //Limpiar elemento "results", del resultado anterior
        document.getElementById("results").innerHTML = "";
        multi(numero);
        factorial(numero);
    }
        
    else {
        alert("Numero fuera de rango (debe estar entre el 1 y 20)")
    }
}


