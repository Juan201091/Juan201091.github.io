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

botonPromo1.onclick = () => {
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
};

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
