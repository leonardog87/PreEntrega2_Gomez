//CODERHOUSE
//Pre entrega N2
//Leonardo Gomez

const producto = [
    { id: 1, title: 'Zapatillas', price: 300 },
    { id: 2, title: 'Botines', price: 350 },
    { id: 3, title: 'Botas', price: 400 }
];

const promptFuncion = () => {

    let carrito = [];
    let IngresoOpcion = parseInt(prompt('Bienvenido a la Web de compra!\n1) Comprar\n0) Salir'));

    if (IngresoOpcion === 0) {
        console.log('Gracias por tu visita!')
    }

    else if (IngresoOpcion === 1) {
        alert('Vamos a comprar!')
        while (IngresoOpcion !== 0) {
            let IngresoOpcion = parseInt(prompt('Los productos que elijas iran al carrito,\n cuando termines de comprar sumaremos todo\n y te diremos el total:\n1) Zapatillas $300\n2) Botines $350\n3) Botas $400\n0) Salir'));
            if (IngresoOpcion === 1) {
                carrito.push(producto[0])
                console.log(carrito)
            }

            else if (IngresoOpcion === 2) {
                carrito.push(producto[1])
                console.log(carrito)
            }

            else if (IngresoOpcion === 3) {
                carrito.push(producto[2])
                console.log(carrito)
            }

            else if (IngresoOpcion === 0) {
                alert('Compra finalizada')
                break
            }
            else {
                console.log('temrinado')
            }
        }

        const sumaTotal = () => {
            let suma = [];
            let titles = [];

            carrito.forEach(element => {
                let price = element.price;
                let title = element.title;
                suma.push(price);
                titles.push(title);
                totaltotal = suma.reduce((a, b) => a + b, 0);
            })
            console.log('Compraste: ', titles, 'Total: $', totaltotal)
        };
        sumaTotal();
    }
}

promptFuncion();


