//funciones

function salario(pdiasTrab, pvalorDia){
    let diasTrab = pdiasTrab;
    let valorDia = pvalorDia
    let sueldo = diasTrab * valorDia;
    return sueldo
}
function ahorroSalario(psueldo, pporcentaje){
    let sueldo = psueldo;
    let porcentaje = pporcentaje;
    let ahorroMensual = sueldo/100 * porcentaje;
    return ahorroMensual;
}

function ahorros(pahorroMensual, ppais){
    let ahorroMensual = pahorroMensual;
    let pais = ppais;
    let ahorro = pais/ahorroMensual;
    return ahorro
}

//Agencia de viajes 
let paises=[];
let precios=[];
let porcentaje=[];
let meses;
let porcentajeEleccion;
let validacion;

paises=[,"Turquia","Italia","Perú","Chile","Guatemala","Brasil","Mexico"];

precios=[,6000000,5000000,4000000,7000000,6000000,6500000,5000000];

porcentaje=[,10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100]

validacion = "si"


while(validacion != "no"){
    
    alert("Señor usuario! \nEsta es una agencia de viajes que te ayudará a calcular cuánto dinero debes de ahorrar para poder llegar a tu destino, además te ayudará a tener un buen control sobre tu dinero.");


    destino= parseInt(prompt("Elige tu destino: "+"\n"+ "1. Turquía = 6000000" +"\n"+ "2. Italia = 5000000" +"\n"+ "3. Perú = 4000000" +"\n"+ "4. Chile = 7000000" +"\n"+ "5. Guatemala = 6000000" +"\n"+ "6. Brasil = 6500000" +"\n"+ "7. México = 5000000"));

    if (destino == 1 || destino == 2 || destino == 3 || destino == 4 || destino == 5 || destino == 6 || destino == 7){
        alert("Señor usuario necesito calcular tu salario para saber cuánto dinero debes ahorrar para viajar a tu destino. Para esto necesito que me ingreses los siguientes datos:")
        diasTrab = parseInt(prompt("Días trabajados"));
        valorDia = parseFloat(prompt("Valor del día"));

        let sal = salario(diasTrab, valorDia);
        alert("Señor usuario su salario es de: "+ sal);

        porcentajeEleccion = parseInt(prompt("¿Qué porcentaje deseas ahorrar de tu salario?" +"\n"+ "1. 10%" +"\n"+ "2. 20%" +"\n"+ "3. 30%" +"\n"+ "4. 40%" +"\n"+ "5. 50%" +"\n"+ "6. 60%" +"\n"+ "7. 70%" +"\n"+ "8. 80%" +"\n"+ "9. 90%" +"\n"+ "10. 100%"));
        
        if(porcentajeEleccion>=10){
            porcentajeEleccion=porcentajeEleccion/10;
        }

        let ahorrosMensaules = ahorroSalario(sal, porcentaje[porcentajeEleccion]);
        alert("Señor usuario usted ahorrara: " + ahorrosMensaules + " pesos mensuales ");

        if (destino == 1){
            meses = ahorros(ahorrosMensaules, precios[destino])
            meses = parseInt(meses)
            alert("Señor usuario para viajar a Turquia necesitara ahorrar " + meses + " meses, esto es igual al " + porcentaje[porcentajeEleccion] + " porciento de su salario ")
            validacion = prompt("¿Desea realizar el calculo para el ahorro de otro viaje? (si/no)")
        }
        else if (destino == 2){
            meses =ahorros(ahorrosMensaules, precios[destino]);
            meses = parseInt(meses)
            alert(" Señor usuario para viajar a Italia necesitara ahorrar " + meses + " meses, esto es igual al " + porcentaje[porcentajeEleccion] + " porciento de su salario ")
            validacion = prompt("¿Desea realizar el calculo para el ahorro de otro viaje? (si/no)")
        }
        else if (destino == 3){
            meses = ahorros(ahorrosMensaules, precios[destino])
            meses = parseInt(meses)
            alert("Señor usuario para viajar a Perú necesitara ahorrar " + meses + " meses, esto es igual al " + porcentaje[porcentajeEleccion] + " porciento de su salario ")
            validacion = prompt("¿Desea realizar el calculo para el ahorro de otro viaje? (si/no)")
        }
        else if (destino == 4){
            meses = ahorros(ahorrosMensaules, precios[destino])
            meses = parseInt(meses)
            alert("Señor usuario para viajar a Chile necesitara ahorrar " + meses + " meses, esto es igual al " + porcentaje[porcentajeEleccion] + " porciento de su salario ")
            validacion = prompt("¿Desea realizar el calculo para el ahorro de otro viaje? (si/no)")
        }
        else if (destino == 5){
            meses = ahorros(ahorrosMensaules, precios[destino])
            meses = parseInt(meses)
            alert("Señor usuario para viajar a Guatemala necesitara ahorrar " + meses + " meses, esto es igual al " + porcentaje[porcentajeEleccion] + " porciento de su salario ")
            validacion = prompt("¿Desea realizar el calculo para el ahorro de otro viaje? (si/no)")
        }
        else if (destino == 6){
            meses = ahorros(ahorrosMensaules, precios[destino])
            meses = parseInt(meses)
            alert("Señor usuario para viajar a Brasil necesitara ahorrar " + meses + " meses, esto es igual al " + porcentaje[porcentajeEleccion] + " porciento de su salario ")
            validacion = prompt("¿Desea realizar el calculo para el ahorro de otro viaje? (si/no)")
        }
        else if (destino == 7){
            meses = ahorros(ahorrosMensaules, precios[destino])
            meses = parseInt(meses)
            alert("Señor usuario para viajar a Mexico necesitara ahorrar " + meses + " meses, esto es igual al " + porcentaje[porcentajeEleccion] + " porciento de su salario ")
            validacion = prompt("¿Desea realizar el calculo para el ahorro de otro viaje? (si/no)")
            }
    }
    else{
        alert("País no valido, por favor ingrese nuevamente")
    }

}









    




        


   















