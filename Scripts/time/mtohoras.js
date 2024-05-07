import { mtohoras } from "../unitsTime.js";
import { mainMenu } from "../../main.js";

export function calculomtohoras() {
    let minutos = prompt("Ingrese la Cantidad de minutos: ");
    let horas = mtohoras(parseFloat(minutos));
    let resultadomtohoras = prompt(`
        ${minutos} minutos son ${horas} horas.
        Digite: 
        1) Para convertir nuevamente de minutos a horas.
        2) Para regresar al menú principal.
        
        3) Para salir.`);

    return resultadomtohoras;
}


export function opcionesmtohoras() {
    let continuar = calculomtohoras();
    if (continuar === "1") {
        opcionesmtohoras(); 
    } else if (continuar === "2") {
        mainMenu(); 
    } else if (continuar === "3") {
        alert("Programa terminado");
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}
