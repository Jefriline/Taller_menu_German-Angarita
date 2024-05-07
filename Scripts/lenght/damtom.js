import { damtom } from "../unitsLength.js";
import { mainMenu } from "../../main.js";

export function calculodamtom() {
    let decametro = prompt("Ingrese la Cantidad de dam que desea convertir a m: ");
    let metros = damtom(parseFloat(decametro));
    let resultadodamtom = prompt(`
        ${decametro} dam son ${metros} m.
        Digite: 
        1) Para convertir nuevamente de dam a m.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadodamtom;
}


export function opcionesdamtom() {
    let continuar = calculodamtom();
    if (continuar === "1") {
        opcionesdamtom(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
