/* uso de for */

let contrasena = 'blue';
//array
let carrito = ['camisa', 'chomba', 'jogging', 'campera']
let total1= 30000;

let SeguirComprando= prompt('Tu carrito actual esta compuesto por: ' + carrito.toString() +' .\n Hasta ahora el precio final es de $'+ total1+'.Deseas seguir comprando?. \n 1- si \n 2-no ');
if(SeguirComprando=='1' ){
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
     //push de elementos en el array "carrito", dependiendo el producto que haya seleccionado
            switch (productos) {
                case '1': alert('Elegiste comprar jeans! Su precio es de $' + jeans + '.')
                    carrito.push(' JEAN')
                    break;
    
                case '2': alert('Elegiste comprar buzos! Su precio es de $' + buzos + '.')
                    carrito.push(' BUZO')
                    break;
    
                case '3': alert('Elegiste comprar remeras! Su precio es de $' + remeras + '.')
                    carrito.push('REMERA')
                    break;
    
                default: alert("Seleccionaste una opcion NO valida");
                break;
            
            }

            let ConfirmarCarrito = alert('En tu carrito estan cargados los siguientes productos: \n ' + carrito.join(' \n ') + '. ')
    
            let PrecioProducto = parseInt(prompt('Ingresa el precio del producto que seleccionaste anteriormente'))
    //elegir el metodo para pagar
            let MetodoPago =   prompt('Como quieres abonar? Selecciona una de las siguientes opciones \n1- Mercado pago: Tienes un 10% de recargo \n2- Efectivo: Tienes un 15% de descuento \n3- Tarjeta de debito o credito (sin ningun recargo) ')
    
          /*   function MercadoPago(x){
                return (x + total1)* 1.10
            } */
//funciones para cada una de las opciones de pago, sumando siempre el Total1(productos que estaban en el array de carrito) + el precio del producto seleccionado 
            const MercadoPago=(x)=> { return (x+total1) * 1.10 };
            const Efectivo = (x) => ((x+total1)-((x+total1)*0.15));
             const Tarjeta=(x)=> total1 + x ;
    
            switch (MetodoPago) {
    
                case '1':
                    alert('El precio final es de ' + MercadoPago(PrecioProducto))
                    break;
    
                case '2':
                    alert('El precio final es de ' + Efectivo(PrecioProducto))
                    break;
    
                case '3':
                    alert('El precio final es de ' + Tarjeta(PrecioProducto))
                    break;
    
                default: alert('Seleccionaste una opcion NO valida')
                break;
    
            }

            break;
        }

        else {
            alert('Contrasena incorrecta, no puedes ingresar');

        }
    }

}

 else if(SeguirComprando== '2'){
    alert('Elegiste la opcion de NO seguir sumando productos a tu compra. El precio final queda en '+ total1 + '.');

}
else{
    alert('Opcion NO valida')
 }



alert('Fin del proceso')
