function saludar() {
    let ingresoNombre = prompt("Ingresa tu nombre: ");
    if (ingresoNombre == "") {
        alert("Debes ingresar tu nombre!")
    }
    else {
        alert("Bievenida/o a nuestra web" + " " + ingresoNombre);
    }
}

// saludar();

function ingresoOpcion() {
    let ingresoOpcion = parseInt(prompt("Elige una las opciones!\n1) Comprar \n0) Salir"))
    if (ingresoOpcion === 0) {
        alert("Hasta luego!")
    }
    while (ingresoOpcion !== 0) {
        ingresoOpcion = parseInt(prompt("Que producto deseas comprar?\n1) Producto1\n2) Producto2\n3) Producto3\n0) Salir"));
        if (ingresoOpcion === 1) {
            alert("Seleccionaste el Producto1")
        }
        else if (ingresoOpcion === 2) {
            alert("Seleccionaste el Producto2")
        }
        else if (ingresoOpcion === 3) {
            alert("Seleccionaste el Producto3")
        }
        else if (ingresoOpcion === 0) {
            alert("Hasta luego!")
        }
        else {
            alert("Ingresaste un dato invalido")
        }
    }
}

// ingresoOpcion();
