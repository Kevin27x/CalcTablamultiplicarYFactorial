// Funcion arrow de multiplicacion
let multi = (numero) => {
    for (i = 1; i <= numero; i++){
    
        let multip = i * numero;
        let showResult = i + " x " + numero + " = " + multip;
        //resultado en consola
        console.log(showResult);
        //resultado en HTML, "results", entre etiquetas <p> y acumulativos +=
        document.getElementById("results").innerHTML += "<p>" + showResult + "</p>";

    }
}
    
// Funcion arrow de factorial
let factorial = (numero) => {
    //Acumula el factorial del ciclo anterior, comienza en 1
    lastResult = 1;
    for (i = 1; i <= numero; i++){
        
        //Calcula el factorial, multiplica i por el último factorial
        let result = lastResult * i;
        let showResult = "Factorial de " + i +" es : " + result;
        //resultado en consola
        console.log(showResult);
        //resultado en HTML, "results", entre <p> y acumulativos 
        document.getElementById("results").innerHTML += "<p>" + showResult + "</p>";

        //Almacena ultimo factorial para el siguiente ciclo
        lastResult = result;
       
    }
}
//Se activa con el botón, entra número y salen resultados de f. multi y factorial
var app = () => {
    let numero = prompt("Ingrese un número del 1 al 20");
    // Si numero está entre 1 y 20 => ejecutar
    if (numero > 0 && numero <= 20){
        
        //Limpiar elemento id "results", del resultado anterior
        document.getElementById("results").innerHTML = "";
        multi(numero);
        factorial(numero);
    }
        
    else {
        alert("Numero fuera de rango (debe estar entre el 1 y 20)");
    }
}


