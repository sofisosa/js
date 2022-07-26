/* uso de for */

let contrasena = 'blue';
//array
let carrito = [
    { producto: 'camisa', precio: 3700 },
    { producto: 'chomba', precio: 5000 },
    { producto: 'jogging', precio: 3500 },
    { producto: 'campera', precio: 5400 }]
//uso de metodo REDUCE
const total1 = carrito.reduce((ac, el) => ac + el.precio, 0);
//uso metodo MAP
let ProductosCarrito= carrito.map(el=>el.producto);

let SeguirComprando = prompt('Tu carrito actual esta compuesto por: ' + ProductosCarrito.join('-') + ' .\n Hasta ahora el precio final es de $' + total1 + '. Deseas seguir comprando?. \n 1- si \n 2-no ');


if (SeguirComprando == '1') {
    //uso de for, ingreso de usuario con contrasena
    for (i = 3; i >= 1; i--) {
        let usuario = prompt('Para poder seguir con tu compra, deberas ingresar tu contrasena, tienes ' + i + ' oportunidades');
        if (usuario == contrasena) {
            alert('contrasena correcta, puedes ingresar')
            /* uso de switch, seleccion del producto*/
            let jeans = 5000;
            let buzos = 4000;
            let remeras = 3000;

            let productos = prompt('Bienvenido a nuestra tienda, selecciona el numero del producto que deseas comprar \n1-jeans \n2-buzo \n3-remera ');
            //push de elementos en el array "ProductosCarrito", dependiendo el producto que haya seleccionado
            switch (productos) {
                case '1': alert('Elegiste comprar jeans! Su precio es de $' + jeans + '.')
                    ProductosCarrito.push('jeans')
                    break;

                case '2': alert('Elegiste comprar buzos! Su precio es de $' + buzos + '.')
                    ProductosCarrito.push('buzo')
                    break;

                case '3': alert('Elegiste comprar remeras! Su precio es de $' + remeras + '.')
                    ProductosCarrito.push('remera')
                    break;

                default: alert("Seleccionaste una opcion NO valida");
                    break;

            }
            let PrecioProducto = parseInt(prompt('Ingresa el precio del producto que seleccionaste anteriormente'));
    
      let AsegurarCarrito= prompt('Queres asegurarte de tener todos los productos cargados en el carrito? \n Escribe el nombre del producto y te diremos si esta cargado (TRUE), o si no lo esta (FALSE)');
/////uso de metodo SOME
      alert(ProductosCarrito.some((el)=>el==AsegurarCarrito));


            let ConfirmarCarrito = alert('En tu carrito estan cargados los siguientes productos: \n ' + ProductosCarrito.join(' \n ') + '. \n El total, con tu nueva compra, quedaria en ' + (total1+PrecioProducto) +'.')

          
            //elegir el metodo para pagar
            let MetodoPago = prompt('Como quieres abonar? Selecciona una de las siguientes opciones \n1- Mercado pago: Tienes un 10% de recargo \n2- Efectivo: Tienes un 15% de descuento \n3- Tarjeta de debito o credito (sin ningun recargo) ')

            //funciones para cada una de las opciones de pago, sumando siempre el Total1(su,a de precio de los productos que estaban en un principio en el carrito) + el precio del producto seleccionado

            const MercadoPago = (x) => { return (x + total1) * 1.10 };
            const Efectivo = (x) => ((x + total1) - ((x + total1) * 0.15));
            const Tarjeta = (x) => total1 + x;

            switch (MetodoPago) {

                case '1':
                    alert('El precio final es de ' + Math.trunc(MercadoPago(PrecioProducto)))  //uso del math
                    break;

                case '2':
                    alert('El precio final es de ' + Math.trunc(Efectivo(PrecioProducto)))
                    break;

                case '3':
                    alert('El precio final es de ' + Math.trunc(Tarjeta(PrecioProducto)))
                    break;

                default: alert('Seleccionaste una opcion NO valida')
                    break;

            }
          
         let DireccionUsuario= prompt('Gracias por su compra! Por ultimo, ingrese su direccion para poder realizar el envio de sus productos');
           //uso de DATE
            let DiaDelEnvio= new Date(2022, 7, 18, 14,30);
            alert('Tus productos llegaran el dia ' +DiaDelEnvio.getDate()+'-' + DiaDelEnvio.getMonth()+ '-'+ DiaDelEnvio.getFullYear()+ ' a la siguiente direccion: '+ DireccionUsuario)
            break;
        }

        else {
            alert('Contrasena incorrecta, no puedes ingresar');

        }
    }

}

else if (SeguirComprando == '2') {
    alert('Elegiste la opcion de NO seguir sumando productos a tu compra. El precio final queda en ' + total1 + '.');

}
else {
    alert('Opcion NO valida')
}



alert('Fin del proceso')
