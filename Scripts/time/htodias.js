import { htodias } from "../unitsTime.js";
import { mainMenu } from "../../main.js";

export function calculohtodias() {
    let horas = prompt("Ingrese la Cantidad de horas: ");
    let dias = htodias(parseFloat(horas));
    let resultadohtodias = prompt(`
        ${horas} horas son ${dias} dias.
        Digite: 
        1) Para convertir nuevamente de horas a dias.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadohtodias;
}


export function opcioneshtodias() {
    let continuar = calculohtodias();
    if (continuar === "1") {
        opcioneshtodias(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
