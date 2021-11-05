document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('nombre').value;
  if(usuario.length > 20) {
    alert('El nombre del disco no puede ocupar mas de 20 caracteres');

  }
  var clave = document.getElementById('grupoCantante').value;
  if (clave.length > 20) {
    alert('El nombre del grupo o cantante no puede ocupar mas de 20 caracteres');
  }

  var anio = document.getElementById('publicacion').value;
  if (anio.length < 4 || anio > 4){
    alert('Introduce un year correcto');
  }
}