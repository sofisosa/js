/* uso de for */

let contrasena= 'blue';


for(i=3; i>=1; i--){
    let usuario= prompt('ingresa tu contrasena, tienes ' +i+ ' oportunidades');
    if(usuario==contrasena){
        alert('contrasena correcta, puedes ingresar')
        break
    }
}

/* uso de if */

let edadUsuario= parseInt(prompt('Para poder comprar en nuestra tienda, debes ingresar tu edad'));
let edadPermitida= 18;
let edadAutorizacion= 16;

if(edadUsuario>=edadPermitida){
    alert('Bienvenido/a a nuestra tienda, puedes comprar nuestros productos');
}
else if(edadUsuario>=edadAutorizacion){
    alert('Unicamente podras comprar en nuestra tienda con la autorizacion de un adulto');
}
else{
    alert('No puedes comprar en nuestra tienda.');
}

/* uso de while */
 let palabra='casa';
let palabraUsuario= prompt('Ingresa la palabra "casa" para saber que eres tu ');

while( palabraUsuario!= palabra){
    alert('Ingresaste la palabra INOCORRECTA');
    palabraUsuario= prompt('Ingresa la palabra "casa" para saber que eres tu ');
} 
alert('Ingresaste la palabra correcta!')

/* uso de switch */

let productos= prompt('Bienvenido a nuestra tienda, selecciona el numero del producto que deseas comprar \n1-jeans \n2-buzos \n3-remeras \n4-zapatillas \n5-joggings ');

switch (productos) {
    case '1': alert('Elegiste comprar jeans!')
        
        break;
        case '2': alert('Elegiste comprar buzos!')
        
        break;
        case '3': alert('Elegiste comprar remeras!')
        
        break;
        case '4': alert('Elegiste comprar zapatillas!')
        
        break;
        case '1': alert('Elegiste comprar joggings!')
        
        break;
    default: alert("Seleccionaste una opcion NO valida")
        break;
}

