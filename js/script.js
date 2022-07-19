/* uso de for */

let contrasena = 'blue';


for (i = 3; i >= 1; i--) {
    let usuario = prompt('ingresa tu contrasena, tienes ' + i + ' oportunidades');
    if (usuario == contrasena) {
        alert('contrasena correcta, puedes ingresar')
        /* uso de switch */
        let jeans = 5000;
        let buzos = 4000;
        let remeras = 3000;

        let productos = prompt('Bienvenido a nuestra tienda, selecciona el numero del producto que deseas comprar \n1-jeans \n2-buzos \n3-remeras ');

        switch (productos) {
            case '1': alert('Elegiste comprar jeans! Su precio es de ' + jeans + '.')
                break;

            case '2': alert('Elegiste comprar buzos! Su precio es de ' + buzos + '.')
                break;

            case '3': alert('Elegiste comprar remeras! Su precio es de ' + remeras + '.')
                break;

            default: alert("Seleccionaste una opcion NO valida")
                break;
        }

        let MetodoPago = prompt('Como quieres abonar? Selecciona una de las siguientes opciones \n1- Mercado pago: Tienes un 10% de recargo \n2- Efectivo: Tienes un 15% de descuento \n3- Tarjeta de debito o credito (sin ningun recargo) ')


        const MercadoPago = (x) => x * 1.10;
        const Efectivo = (x) => x - (x * 0.15);

        let PrecioProducto = prompt('Ingresa el precio del producto que seleccionaste anteriormente');

        switch (MetodoPago) {

            case '1':
                alert('El precio final es de ' + MercadoPago(PrecioProducto));
                break;

            case '2':
                alert('El precio final es de ' + Efectivo(PrecioProducto));
                break;
            case '3':
                alert('El precio final es de ' + PrecioProducto)
                break;
            default: alert('Seleccionaste una opcion NO valida')
                break;
        }


        break
    }
    else {
        alert('Contrasena incorrecta, no puedes ingresar')
    }
}

alert('Fin del proceso')
