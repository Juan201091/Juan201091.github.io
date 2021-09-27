/*const listadoProductos = [
  { nombre: "MUZARELLA", precio: 500, id: 001, stock: 60 },
  { nombre: "NAPOLITANA", precio: 600, id: 002, stock: 50 },
  { nombre: "FUGAZZETA", precio: 700, id: 003, stock: 40 },
  ,
];

class ProductoAniadido {
  constructor(producto, cantidad) {
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.id = producto.id;
    this.cantidad = cantidad;
    this.subtotal = producto.precio * cantidad;
  }
}

let productoElegido;
let cantidadElegida;
let productoSeleccionado;
let elegirNuevoProducto;
const carritoCompras = [];

iniciarCompra();
while (elegirNuevoProducto.toUpperCase() == "SI") {
  iniciarCompra();
}

verCarrito();

function iniciarCompra() {
  elegirProducto();
  const stockProducto = verDisponibilidadProducto(
    productoElegido,
    cantidadElegida
  );
  if (stockProducto) {
    let agregar = prompt("¿Desea agregar el producto al carrito? SI / NO");
    if (agregar.toUpperCase() == "SI") {
      let producto = new ProductoAniadido(
        productoSeleccionado,
        cantidadElegida
      );

      agregarProducto(producto);
      elegirNuevoProducto = prompt(
        "¿Quiere seleccionar otro producto? SI / NO"
      );
    } else {
      elegirNuevoProducto = prompt(
        "¿Quiere seleccionar otro producto? SI / NO"
      );
    }
  }
}

function elegirProducto() {
  productoElegido = prompt(
    "Elige un producto: MUZARELLA, NAPOLITANA, FUGAZZETA"
  );
  cantidadElegida = parseInt(prompt("Qué cantidad necesitas?"));
}

function verificarStock(stockProducto, cantidad) {
  if (stockProducto >= cantidad) {
    return true;
  } else {
    return false;
  }
}
function verDisponibilidadProducto(nombreProducto, cantidad) {
  productoSeleccionado = listadoProductos.find(
    (p) => p.nombre == nombreProducto.toUpperCase()
  );

  if (!productoSeleccionado) {
    alert("El producto seleccionado no existe");
  } else {
    let verificado = verificarStock(productoSeleccionado.stock, cantidad);
    if (verificado) {
      return true;
    } else {
      alert("El producto " + nombreProducto + " no cuenta con disponibilidad");
      elegirNuevoProducto = prompt(
        "¿Quiere seleccionar otro producto? SI / NO"
      );
    }
  }
}

function agregarProducto(itemAagregar) {
  carritoCompras.push(itemAagregar);
}

function verCarrito() {
  for (let i = 0; i < carritoCompras.length; i++) {
    console.log(
      "Producto: " +
        carritoCompras[i].nombre +
        ". Cantidad: " +
        carritoCompras[i].cantidad
    );
  }
  let totalCarrito = carritoCompras.reduce((currentTotal, producto) => {
    return producto.subtotal + currentTotal;
  }, 0);

  console.log("El total de compra es: " + totalCarrito);
}
