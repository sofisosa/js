
//array de productos
let Zapatillas = [
    {
        id: 1,
        nombre: "Vans-beige",
        precio: 20000,
        img: 'src=./img/vans1.jpg',
        cantidad: 1
    },

    {
        id: 2,
        nombre: "Vans clasicas",
        precio: 18000,
        img: 'src="./img/vans2.jpg"',
        cantidad: 1
    },

    {
        id: 3,
        nombre: "Vans cuadrille",
        precio: 21000,
        img: 'src="./img/vans3.jpg"',
        cantidad: 1
    },

    {
        id: 4,
        nombre: "Vans botita",
        precio: 26000,
        img: 'src="./img/vans4.jpg"',
        cantidad: 1
    },

    {
        id: 5,
        nombre: "Vans verdes",
        precio: 20000,
        img: 'src="./img/vans5.jpg"',
        cantidad: 1
    },


]

//agrego html desde js (uso de DOM)
const Bienvenido = document.getElementById('bienvenido');
Bienvenido.innerHTML = ` <div class="row">
<div class="col">
  <input id="IngresarNombre" type="text" class="form-control" placeholder="Ingresa tu nombre!" aria-label="First name">
  <button  id="btn-saludo" type="submit" class="btn btn-primary">Listo:)</button>
</div>` ;

let nombreUsuario = document.getElementById('IngresarNombre');
//agrego evento
const btnSaludo = document.getElementById('btn-saludo');
btnSaludo.addEventListener('click', () => {
    Bienvenido.innerHTML = `<H3 class="Titulos"> Bienvenido/a ${nombreUsuario.value} </h3> `
})


const productos = document.getElementById('productos');
Zapatillas.forEach((zapatilla) => {

    productos.innerHTML += (`<div class="card" style="width: 18rem;">
    <img ${zapatilla.img} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title"> ${zapatilla.nombre}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Precio: $ ${zapatilla.precio}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button id='boton${zapatilla.id}' class="btn btn-dark">Agregar al carrito</button>
  </div>
  </div>`)

});


let carrito = document.createElement('div');
carrito.innerHTML += `<h3 class= "Titulos" id= "carritocompras"> Tu carrito </h3>`;
document.body.append(carrito);
for (const zapatilla of Zapatillas) {
    //uso de evento
    let botonAgregarCarrito = document.getElementById(`boton${zapatilla.id}`)
    botonAgregarCarrito.addEventListener('click', () => {
 carrito.innerHTML += `<h5>se agrego 1 ${zapatilla.nombre} a tu carrito, su precio es de ${zapatilla.precio}</h5>`;
});
}













