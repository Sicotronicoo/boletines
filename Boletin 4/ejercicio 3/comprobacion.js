document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('nombre').value;
  if(usuario.length > 20 || usuario.length == 0) {
    if(usuario.length > 20){
      alert('El nombre del disco no puede ocupar mas de 20 caracteres');
      document.getElementById("nombre").style.border = "0.3em red solid";
      document.getElementById("label1").style.color = "red";
    }
    else{
      alert('Introduce el nombre del disco');
      document.getElementById("nombre").style.border = "0.3em red solid";
      document.getElementById("label1").style.color = "red";
    }    
  }
  var clave = document.getElementById('grupo').value;
  if (clave.length > 20 || clave.length == 0) {
    if(clave.length > 20){
      alert('El nombre del grupo no puede ocupar mas de 20 caracteres');
      document.getElementById("grupo").style.border = "0.3em red solid";
      document.getElementById("label2").style.color = "red";
    }
    else{
      alert('Introduce el grupo o cantante del disco');
      document.getElementById("grupo").style.border = "0.3em red solid";
      document.getElementById("label2").style.color = "red";
    } 
  }

  var anio = document.getElementById('publicacion').value;
  if (anio.length < 4 || anio.length > 4){
    alert('Introduce un year correcto');
    document.getElementById("publicacion").style.border = "0.3em red solid";
    document.getElementById("label3").style.color = "red";
  }
}

