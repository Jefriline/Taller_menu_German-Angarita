import { suma } from "../math.js";
import { mainMenu } from "../../main.js";

export function calculosuma() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    let resultado = suma(num1,num2);
    let resultadosuma = prompt(`
        ${num1} + ${num2} = ${resultado}
        1) Para sumar nuevamente.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadosuma;
}


export function opcionessuma() {
    let continuar = calculosuma();
    if (continuar === "1") {
        opcionessuma(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
