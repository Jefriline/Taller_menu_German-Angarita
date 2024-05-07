import { resta } from "../math.js";
import { mainMenu } from "../../main.js";

export function calculoresta() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    let resultado = resta(num1,num2);
    let resultadoresta = prompt(`
        ${num1} - ${num2} = ${resultado}
        1) Para restar nuevamente.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadoresta;
}


export function opcionesresta() {
    let continuar = calculoresta();
    if (continuar === "1") {
        opcionesresta(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
