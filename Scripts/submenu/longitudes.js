import { mainMenu } from "../../main.js";
import { opcionesmtokm } from "../lenght/mtokm.js";
import { opcionesdmtom } from "../lenght/dmtom.js";
import { opcionesmtocm } from "../lenght/mtocm.js";
import { opcioneshmtom } from "../lenght/hmtom.js";
import { opcionesdamtom } from "../lenght/damtom.js";
export function menuLongitud() {
    let menuOption1 = prompt(
        `-----------Unidades de longitud-----------
        Digite:
        1) Para convertir de m a Km.
        2) Para convertir de dm a m.
        3) para Convertir de m a cm.
        4) Para convertir de hm a m.
        5) Para convertir de dam a m.

        0) Para devolverse`
    );
    if (menuOption1 == "1") {
        opcionesmtokm();
    }else if (menuOption1 == "2") {
        opcionesdmtom();
    }else if (menuOption1 == "3") {
        opcionesmtocm();
    }else if (menuOption1 == "4") {
        opcioneshmtom();
    }else if (menuOption1 == "5") {
        opcionesdamtom();
    }else if (menuOption1 == "0"){
        mainMenu();
    }else{
        alert("Por favor ingrese una opcion valida")
    }
}