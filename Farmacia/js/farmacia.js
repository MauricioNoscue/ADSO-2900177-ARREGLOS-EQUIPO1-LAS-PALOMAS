// Saludo de bienenida
alert("Bienvenido Farmacia Las Palomas");

// les voy a poner mensajitos para no perdernos 

        // obviamente aqui pedimos el ingreso del nombre 
        let nombre = prompt("Ingrese su nombre, por favor");
        // inicializamos el arreglo que vamos a utilizar para la factura
        let factura = [];
        // el ciclo que vamos a utilizar en este caso es while (true), para que sea más facil y funciona asi
        // mientras lo de adentro sea verdadero siga su camino y podamos elegir normal 
        while (true) {
            // ya aqui está la variable del nombre, y ponemos a elegir que dolor tiene 
            let respuesta = prompt("Ingrese su molestia  " + nombre + "\n" + "Elija (1/2)" + "\n" + "1. Dolor de cabeza" + "\n" + "2. Dolor de espalda");
            // utilizamos una nueva variable llamada opciones, que depende de la eleccion del usuario le muestre las opciones 
            let opciones;
            // bueno la condicional jajaj
            if (respuesta == 1) {
                
                opciones = "1. Acetaminofen 300$\n2 . Paracetamol 200$\n3. Ibuprufeno 400$.";
            } else if (respuesta == 2) {
                opciones = "1. Xreydol 2000$\n2. Lumbal 2700$\n3. Duraflex 2800$.";
            } else {
                alert("Opción no válida");
                continue;
            }
            // aqui le pedimos que elija el medicamento que le recomendamos
            let eleccion = prompt("Elija el medicamento recomendado para su molestia" + "\n" + opciones);
            /*
            utilizamos otras variables
            la descripcion es el nombre del producto
            el precio es el precio del producto ajsjas obviamente 
            */

            let descripcion;
            let descripcion2;
            let precio;
            /*
            aqui le decimos que dependiendo de la eleccion del usuario 
            le muestre el producto que le recomendamos
            */ 
            switch (respuesta) {
                // el case 1 es cuando el usuario dice que tiene dolor de cabeza 
                case "1":
                    switch (eleccion) {
                        case "1":
                            descripcion = "Acetaminofen"
                            descripcion2 = "Debe tomarlo cada 8 horas"+"\n"+"si toma en exceso puede generar mareos";
                            precio = 300;
                            break;
                        case "2":
                            descripcion = "Paracetamol";
                            descripcion2 = "Puede tomarlo de 4 a 6 horas "+"\n"+"si toma en exceso puede generar irritación estomacal";
                            precio = 200;
                            break;
                        case "3":
                            descripcion = "Ibuprufeno";
                            descripcion2 = "Debe tomarlo cada 6 "+"\n"+"si toma en exceso puede generar agitación o convulsiones";
                            precio = 400;
                            break;
                        default:
                            alert("Opción no válida");

                            /* el "continue" funciona para que el ciclo siga su camino y no se corte con 
                            el break pues el ciclo pasa a ser falso si llega a un break     
                            */
                            continue;
                    }
                    break;
                    // el case 2 es cuando el usuario dice que tiene dolor de espalda
                case "2":
                    switch (eleccion) {
                        case "1":
                            descripcion = "Xreydol";
                            descripcion2 = "Debe tomar una cada 12 horas"+"\n"+"si toma en exceso puede generar reacciones alérgicas";
                            precio = 2000;
                            break;
                        case "2":
                            descripcion = "Lumbal";
                            descripcion2 = "Debe tomar una cada 12 horas"+"\n"+"si toma en exceso puede generar náuseas y vómitos ";
                            precio = 2700;
                            break;
                        case "3":
                            descripcion = "Duraflex";
                            descripcion2 = "Puede tomar una tableta cada 8 o 12 horas"+"\n"+"si toma en exceso puede generar mareos";
                            precio = 2800;
                            break;
                        default:
                            alert("Opción no válida");
                            /* el "continue" funciona para que el ciclo siga su camino y no se corte con 
                            el break pues el ciclo pasa a ser falso si llega a un break     
                            */
                            continue;
                    }
                    break;
            }
            let cantidad;
            while (true) {
                cantidad = prompt("Ingrese la cantidad de tabletas de " + descripcion +" que desea a llevar: ");
                if (!isNaN(cantidad) && parseInt(cantidad) > 0) {
                    break;
                } else {
                    alert("Cantidad no válida. Por favor, ingrese un número entero mayor que cero.");
                }
            }
            let subtotal = cantidad * precio;
            // en el arreglo metemos todas las variables que vamos a mostrar en factura
            // el push es para agregar los datos al arreglo
            factura.push({ descripcion,descripcion2, precio, cantidad, subtotal });
            // el prompt es para que el usuario ingrese si quiere comprar más productos
            let mas = prompt("Desea comprar más productos" + "\n" + "Elija (si/no)");
           // el toLowerCase es como un convertidor, si se ingresa mayusculas las convierte en minusculas 
            if (mas.toLowerCase() === "no") {
                 // el "break" es para que el ciclo se detenga si el usuario no quiere comprar más productos
                 // en el codigo hay muchos break pero no influyen en el ciclo, en cambio este si por lo cual
                //se corta el ciclo si el usurario dice que no quiere mas productos 
                break;
            }
        }
        // llamamos la funcion, esta misma tiene un alert en el cual imprime lo siguiente 
        mostrarFactura();


        //  la funcion que vamos a utilizar para mostrar la factura 

        function mostrarFactura() {
            // aqui se me van a enredar un poquito mis amigos valieron queso 

            //  utilizamos una variable para almacenar los subTotales de los productos 
            let total = 0;
            //  eta variable la vamos a utilizar para almacenar todos los datos de la factura      
            let facturaTexto = "Factura para: " + nombre + "\n\n";
            /*
            *    aqui se va a recorrer el arreglo factura y se va a ir agregando a la variable facturaTexto
            *    el forEach es para recorrer el arreglo factura
            *    el "almacenar" es para que se vaya agregando a la variable facturaTexto
            */
            factura.forEach(almacenar => {
                //
                facturaTexto += "PRODUCTO: " + almacenar.descripcion + "\n"+   "RECOMENDACIONES DE USO: " +"\n"+almacenar.descripcion2 +"\n"+     " PRECIO UNITARIO: " +"$"+ almacenar.precio +"\n"+ " CANTIDAD: " + almacenar.cantidad +"\n"+ " SUBTOTAL: " +"$"+ almacenar.subtotal + " pesos\n";
                total += almacenar.subtotal;
            });
            // terminamos de concatnear lo que queremos que se muestre en la factura 
            facturaTexto += "\nTotal a pagar: " + "$"+ total + " pesos";
            // y listo, se muestra la factura 
            alert(facturaTexto);
        }

    
        
        alert("Gracias por su compra, vuelva pronto"+ "\n"+"   ");

       