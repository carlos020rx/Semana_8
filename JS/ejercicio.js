let num1=11;
let num2=12;
let num3=12;

function analizarNumeros(num1, num2, num3) {
    let numm;
    if (num1 === num2 && num1 === num3) {
        return "Todos los números son iguales.";
    }
    // Verificar si todos los números son iguales
    else if(num1==num2){
         numm="El numero 1 es igual al numero 2"
    }
    else if(num1==num3){
        numm="El numero 1 es igual al numero 3"
    }
    else if(num2==num3){
        numm="El numero 2 es igual al numero 3"
    }
    

    // Calcular el menor número
    let menor;
    if (num1 < num2 && num1 < num3) {
        menor = num1;
    } else if (num2 < num1 && num2 < num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    return `El menor número es ${menor}. ${numm} `;
}
let resultado = analizarNumeros(num1, num2, num3);

// Mostrar el resultado en la página
document.write(resultado);
