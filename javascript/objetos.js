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
  /*setTimeout(() => {
    btnAgregrPromo3.innerHTML = "";
  }, 2000);*/
  $("#productoAgregadoPromo3").fadeOut(2000);
  localStorage.setItem("productos", JSON.stringify(carrito));
});

$("#facebook").on("click", () => {
  console.log("Entradas en facebook ");
});
$("#instagram").on("click", () => {
  console.log("Entradas en instagram ");
});
$("#titulo1").css("display", "none").slideUp(2000).delay(2000).slideDown(2000);
$("#titulo2").css("display", "none").slideUp(2000).delay(2000).slideDown(2000);
$(".contenido-principal").css("display", "none");
$(".contenido-principal").fadeIn(1500);

$("#facebook").onmouseover = () => {
  $("#facebook").addClass("animate__animated animate__tada");
  console.log("hola que tal");
};

$("#facebook").addClass("animate__animated animate__tada");
$("#instagram").addClass("animate__animated animate__tada");
