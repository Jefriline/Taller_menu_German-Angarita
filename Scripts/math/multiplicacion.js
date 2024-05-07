import { multiplicar } from "../math.js";
import { mainMenu } from "../../main.js";

export function calculomultiplicar() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    let resultado = multiplicar(num1,num2);
    let resultadomultiplicar = prompt(`
        ${num1} * ${num2} = ${resultado}
        1) Para multiplicar nuevamente.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadomultiplicar;
}


export function opcionesmultiplicar() {
    let continuar = calculomultiplicar();
    if (continuar === "1") {
        opcionesmultiplicar(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
