// Funcion arrow de multiplicacion
let multi = (numero) => {
    for (i = 1; i <= numero; i++){
        while (i <= numero){
            let multip = i * numero;
            console.log(i + " x " + numero + " = " + multip);
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
        console.log("Factorial de " + i +" es : " + result);

        //Almacena ultimo factorial para el siguiente ciclo
        lastResult = result;
        
    }
}

var numero = prompt("Ingrese un número del 1 al 20");
if (numero > 0 && numero <= 20){
    multi(numero);
    factorial(numero);
}
    
else {
    alert("Numero fuera de rango (debe estar entre el 1 y 20)")
}


