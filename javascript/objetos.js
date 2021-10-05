class Producto {
  constructor(producto, precio) {
    this.producto = producto;
    this.precio = precio;
  }
}

let carrito = [];

const calcularPrecioTotal = (productosEnElCarrito) => {
  let total = 0;
  for (let producto of productosEnElCarrito) {
    total = total + parseInt(producto.precio);
  }
  return total;
};

$("#boton1").on("click", () => {
  let nuevaPizza = new Producto(
    tituloPromo1.textContent,
    precioPromo1.textContent
  );
  carrito.push(nuevaPizza);
  btnAgregrPromo1.innerHTML = `Producto agregado con exito`;
  btnAgregrPromo1.style.color = "green";
  btnAgregrPromo1.style.fontSize = "1.8rem";

  setTimeout(() => {
    btnAgregrPromo1.innerHTML = "";
  }, 2000);
  localStorage.setItem("productos", JSON.stringify(carrito));
});

$("#boton2").on("click", () => {
  let nuevaPizza = new Producto(
    tituloPromo2.textContent,
    precioPromo2.textContent
  );
  carrito.push(nuevaPizza);
  btnAgregrPromo2.innerHTML = `Producto agregado con exito`;
  btnAgregrPromo2.style.color = "green";
  btnAgregrPromo2.style.fontSize = "1.8rem";
  setTimeout(() => {
    btnAgregrPromo2.innerHTML = "";
  }, 2000);
  localStorage.setItem("productos", JSON.stringify(carrito));
});

$("#boton3").on("click", () => {
  let nuevaPizza = new Producto(
    tituloPromo3.textContent,
    precioPromo3.textContent
  );
  carrito.push(nuevaPizza);
  btnAgregrPromo3.innerHTML = `Producto agregado con exito`;
  btnAgregrPromo3.style.color = "green";
  btnAgregrPromo3.style.fontSize = "1.8rem";
  setTimeout(() => {
    btnAgregrPromo3.innerHTML = "";
  }, 2000);
  localStorage.setItem("productos", JSON.stringify(carrito));
});

$("#facebook").on("click", () => {
  console.log("Entradas en facebook ");
});
$("#instagram").on("click", () => {
  console.log("Entradas en instagram ");
});

console.log($("#titulo-promo-1"));
console.log($("div"));
/*let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");

window.addEventListener("scroll", function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1.05 + "px";
    mountains_behind.style.top = value * 0.05 + "px";
    mountains_front.style.top = value * 0 + "px";
    text.style.marginRight = value * 4 + "px";
    text.style.marginTop = value * 1.5 + "px";
})
eso en JS


class Producto {
  constructor(producto, precio) {
    this.producto = producto;
    this.precio = precio;
  }
}

let carrito = [];

const calcularPrecioTotal = (productosEnElCarrito) => {
  let total = 0;
  for (let producto of productosEnElCarrito) {
    total = total + parseInt(producto.precio);
  }
  return total;
};

$("#boton1").on("click", () => {
  let nuevaPizza = new Producto(
    tituloPromo1.textContent,
    precioPromo1.textContent
  );
  carrito.push(nuevaPizza);
  btnAgregrPromo1.innerHTML = `Producto agregado con exito`;
  btnAgregrPromo1.style.color = "green";
  btnAgregrPromo1.style.fontSize = "1.8rem";

  setTimeout(() => {
    btnAgregrPromo1.innerHTML = "";
  }, 2000);
  localStorage.setItem("productos", JSON.stringify(carrito));
});

botonPromo2.onclick = () => {
  let nuevaPizza = new Producto(
    tituloPromo2.textContent,
    precioPromo2.textContent
  );
  carrito.push(nuevaPizza);
  btnAgregrPromo2.innerHTML = `Producto agregado con exito`;
  btnAgregrPromo2.style.color = "green";
  btnAgregrPromo2.style.fontSize = "1.8rem";
  setTimeout(() => {
    btnAgregrPromo2.innerHTML = "";
  }, 2000);
  localStorage.setItem("productos", JSON.stringify(carrito));
};

botonPromo3.onclick = () => {
  let nuevaPizza = new Producto(
    tituloPromo3.textContent,
    precioPromo3.textContent
  );
  carrito.push(nuevaPizza);
  btnAgregrPromo3.innerHTML = `Producto agregado con exito`;
  btnAgregrPromo3.style.color = "green";
  btnAgregrPromo3.style.fontSize = "1.8rem";
  setTimeout(() => {
    btnAgregrPromo3.innerHTML = "";
  }, 2000);
  localStorage.setItem("productos", JSON.stringify(carrito));
};

facebook.onclick = () => {
  console.log("Entradas en facebook ");
};
instagram.onclick = () => {
  console.log("Entradas en instagram ");
};

console.log($("#titulo-promo-1"));
console.log($("div"));*/
