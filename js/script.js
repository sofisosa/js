//array clases

const clases = [
  {
      profe: 'Sofia Sosa',
      disciplina: 'Femme Style',
      horario: 'martes y jueves 20hs',
      precio: 3600,
      descripcion: "fusdnias",
      id: 1,
      img: 'src=./img/profe5.jpg'
  },
  {
      profe: 'Matias Ramirez',
      disciplina: 'Hip Hop',
      horario: 'miercoles 18hs',
      precio: 2800,
      descripcion: "fusdniagsdddddddfrgeftrgfefgtrs",
      id: 2,
      img: 'src= ./img/profehiphop.jpg'
  },
  {
      profe: 'Sol Louro',
      disciplina: 'Urbano',
      horario: 'jueves 19hs',
      precio: 2800,
      descripcion: "fusdgfdtgrfdgnias",
      id: 3,
      img: 'src= ./img/profeurbano.jpg'
  },
  {
      profe: 'Karen Almaraz',
      disciplina: 'Jazz Infantil',
      horario: 'martes y jueves 17hs',
      precio: 3600,
      descripcion: "fusdnias",
      id: 4,
      img: 'src= ./img/profe-karu.jpg '
  },
  {
      profe: 'Agus Gil',
      disciplina: 'Babys',
      horario: 'martes 18hs, jueves 18hs y sabados 12hs ',
      precio: 4200,
      descripcion: "fusdnias",
      id: 5,
      img: 'src= ./img/profeBabys.jpg '
  },
  {
      profe: 'Angela Ramirez',
      disciplina: 'Contemporaneo',
      horario: 'lunes 17hs',
      precio: 2800,
      descripcion: "fusdnias",
      id: 6,
      img: 'src= ./img/profecontempo.jpg'
  },
  {
      profe: 'Bianca Riccilo',
      disciplina: 'Lyrical Jazz',
      horario: 'lunes y viernes 18hs',
      precio: 3600,
      descripcion: "fusdniagsdddddddfrgeftrgfefgtrs",
      id: 7,
      img: 'src= ./img/profeLyrical..webp'
  },
  {
      profe: 'Serena Galeazzi',
      disciplina: 'Reggaeton juvenil',
      horario: 'lunes y miercoles 20hs',
      precio: 3600,
      descripcion: "fusdniagsdddddddfrgeftrgfefgtrs",
      id: 8,
      img: 'src= ./img/profeReggaeton.jpg'
  },
  {
      profe: 'Leonel Ruiz',
      disciplina: 'Breackdance',
      horario: 'jueves 19hs',
      precio: 2800,
      descripcion: "fusdniacdsfdasdas",
      id: 9,
      img: 'src= ./img/profeBreack.jpg'
  },
  {
      profe: 'Luz y Miguel',
      disciplina: 'Bachata en pareja',
      horario: 'martes 17hs y sabados 14hs',
      precio: 4300,
      descripcion: "fusdnias",
      id: 10,
      img: 'src= ./img/profeBachata.jpg'
  }
]
///////
let carrito = []
const ContenedorClases = document.getElementById('ContainerClases'),
  ModalCarrito = document.getElementById('ClasesCarrito'),
  PrecioTotal = document.getElementById('PrecioTotal'),
  btnVaciarCarrito = document.getElementById('vaciarCarrito'),
  btnRecordarme = document.getElementById('CheckRecordarme'),
  btnInicioSesion = document.getElementById('btnInicioSesion'),
  btnBorrarDatos = document.getElementById('btnBorrarDatos');

/////Funcionespara guardar en STORAGE

function guardarDatosUsuario(storage) {
  let email = document.getElementById('EmailUsuario').value;
  let contrasena = document.getElementById('PassUsuario').value;
  const usuario = {
      "email": email,
      "contrasena": contrasena
  };
  if (storage === "localStorage") {
      localStorage.setItem('usuario', JSON.stringify(usuario))
  }
  if (storage === "sessionStorage") {
      sessionStorage.setItem('usuario', JSON.stringify(usuario))
  }
}

function borrarDatos() {
  localStorage.clear()
  sessionStorage.clear()
}
////llamar eventos
btnInicioSesion.addEventListener('click', () => {
  clases.forEach(clase => {
    const div = document.createElement('div')
    div.innerHTML += `<div class="card card-clases" style="width: 18rem;">
    <img ${clase.img} class="card-img-top img-card" alt="...">
    <div class="card-body">
    <h4 class="card-title"> ${clase.disciplina}</h4>
    <h4 > ${clase.profe}</h4>
    <h5 class="card-subtitle mb-2 text-muted">  ${clase.horario}</h5>
    <h6 class="card-title"> PACK MES $${clase.precio}</h6>
    <p class="card-text">${clase.descripcion}</p>
    <button  class="btn btn-dark" id="btn${clase.id}">AGREGAR PACK AL CARRITO</button>
    </div>
    </div>`
    ContenedorClases.appendChild(div);
    const btnCarrito = document.getElementById(`btn${clase.id}`)
  
    btnCarrito.addEventListener('click', () => {
        AgregarAlCarrito(clase.id);
    })
  });

//uso operador avanzado
  btnRecordarme.checked ? guardarDatosUsuario('localStorage') : guardarDatosUsuario('sessionStorage')
 /*  if (btnRecordarme.checked) {
      guardarDatosUsuario('localStorage')
  }
  else {
      guardarDatosUsuario('sessionStorage')
  } */
})


btnBorrarDatos.addEventListener('click', () => {
  borrarDatos()
})


//////FUNCIONES CARRITO


 





const AgregarAlCarrito = (claseId) => {
  const encontrar = clases.find((clase) => clase.id === claseId)
  carrito.push(encontrar)
  ActualizarCarrito();
};

const ActualizarCarrito = () => {
  ModalCarrito.innerHTML = "";

  carrito.forEach((clase) => {
      const div2 = document.createElement('div')
      div2.innerHTML = `<p> ${clase.disciplina} PACK MES ${clase.precio} </p>`
      ModalCarrito.appendChild(div2)
  })

  PrecioTotal.innerText = carrito.reduce((ac, clase) => ac + clase.precio, 0)

};

btnVaciarCarrito.addEventListener('click', () => {
  carrito.length = 0;
  ActualizarCarrito()
});