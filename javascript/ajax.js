const URLGET = "http://localhost:3000/usuarios";

const infoPost = { nombre: "", apellido: "", mensaje: "" };

$("#submit").click((e) => {
  e.preventDefault();
  infoPost.nombre = $("#nombre").val();
  infoPost.apellido = $("#apellido").val();
  infoPost.mensaje = $("#mensaje").val();
  $.post(URLGET, infoPost);
  exito.innerHTML = `¡Fomulario enviado exitosamente!`;
  exito.style.color = "green";
  exito.style.fontSize = "1.8rem";

  console.log("sape");
  setTimeout(() => {
    exito.innerHTML = "";
  }, 2000);
  {
    formulario.reset();
  }
});
