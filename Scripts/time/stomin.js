import { stomin } from "../unitsTime.js";
import { mainMenu } from "../../main.js";

export function calculostomin() {
    let segundos = prompt("Ingrese la Cantidad de segundos: ");
    let minutos = stomin(parseFloat(segundos));
    let resultadostomin = prompt(`
        ${segundos} segundos son ${minutos} minutos.
        Digite: 
        1) Para convertir nuevamente de segundos a minutos.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadostomin;
}


export function opcionesstomin() {
    let continuar = calculostomin();
    if (continuar === "1") {
        opcionesstomin(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
