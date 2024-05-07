import { dividir } from "../math.js";
import { mainMenu } from "../../main.js";

export function calculodividir() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    if (num2 == 0) {
        alert("¡Error! No se puede dividir por cero.");
    }else {
        let resultado = dividir(num1,num2);
        let resultadodividir = prompt(`
            ${num1} / ${num2} = ${resultado}
            1) Para dividir nuevamente.
            2) Para regresar al menú principal.
            
            3) Para salir.`);
    return resultadodividir;
    }
}


export function opcionesdividir() {
    let continuar = calculodividir();
    if (continuar === "1") {
        opcionesdividir(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
