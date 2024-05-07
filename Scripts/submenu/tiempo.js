import { mainMenu } from "../../main.js";
import {opcionesstomin } from "../time/stomin.js";
import {opcionesmtohoras } from "../time/mtohoras.js";
import { opcioneshtodias } from "../time/htodias.js";
import { opcionesdtosemanas } from "../time/dtosemanas.js";
import { opcionesstoanios } from "../time/stoanios.js";
export function menuTiempo() {
    let menuOption3 = prompt(`
    -----------Unidades de tiempo-----------
    Digite:
    1) Para convertir de segundos a minutos.
    2) Para convertir de minutos a horas.
    3) Para convertir de horas a días.
    4) Para convertir de días a semanas.
    5) Para convertir de semanas a años.
    
    0) Para regresar al menú principal.`
    );
    if (menuOption3 == "1") {
        opcionesstomin();
    }else if (menuOption3 == "2") {
        opcionesmtohoras();
    }else if (menuOption3 == "3") {
        opcioneshtodias();
    }else if (menuOption3 == "4") {
        opcionesdtosemanas();
    }else if (menuOption3 == "5") {
        opcionesstoanios();
    }else if (menuOption3 == "0"){
        mainMenu();
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}