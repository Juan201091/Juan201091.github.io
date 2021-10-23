const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

let usuario = {
  nombre: "",
  apellido: "",
  mensaje: "",
};

let usuarios = [
  { nombre: "Gabriel", apellido: "Salerno", mensaje: "100% recomendable" },
  {
    nombre: "Lucia",
    apellido: "Zenone",
    mensaje: "La mejor pizza que probe",
  },
  {
    nombre: "Constanza",
    apellido: "Cabrera",
    mensaje: "es exquisita y la atención es genial",
  },
];

let respuesta = {
  error: false,
  codigo: 200,
  mensaje: "",
};
app.get("/", function (req, res) {
  respuesta = {
    error: true,
    codigo: 200,
    mensaje: "Punto de inicio",
  };
  res.send(respuesta);
});
app.get("/usuarios", function (req, res) {
  respuesta = {
    mensaje: "respuesta del usuario",
    respuesta: usuarios,
  };

  res.send(respuesta.respuesta);
});
app.get("/hola", function (req, res) {
  respuesta = {
    mensaje: "holaaaaaa",
  };

  res.send(respuesta.mensaje);
});
app.post("/usuarios", function (req, res) {
  if (!req.body.nombre || !req.body.apellido || !req.body.mensaje) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: "El campo nombre, apellido y mensaje son requeridos",
    };
    console.log(respuesta.mensaje);
  } else {
    usuario = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      mensaje: req.body.mensaje,
    };
    usuarios.push(usuario);
    respuesta = usuarios;
  }

  res.send(respuesta);
});

app.use(function (req, res, next) {
  respuesta = {
    error: true,
    codigo: 404,
    mensaje: "URL no encontrada",
  };
  res.status(404).send(respuesta);
});
app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
