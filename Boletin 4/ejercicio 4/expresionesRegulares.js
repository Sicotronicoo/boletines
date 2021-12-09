document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);

});

function validarFormulario(evento) {
  evento.preventDefault();
  var cocinero = [];
  cocinero = document.getElementById('cocinero').value;
  if (/^[A-Z]{2}\W[0-9]{4}$/.test(cocinero)) {
    document.getElementById("cocinero").style.border = "0.3em green solid";
  } else {
    alert("El nombre del cocinero debe estar formado por dos letras en mayúscula, un símbolo y cuatro dígitos")
    document.getElementById("cocinero").style.border = "0.3em red solid";
  }
  var destinatario = [];
  destinatario = document.getElementById('destinatario').value;
  if (/^[A-Z]{2,3} ?[_] *[a-z]{3,20} ?[:] *[0-9]{4}$/.test(destinatario)) {
    document.getElementById("destinatario").style.border = "0.3em green solid";
  } else {
    alert("El destinatario debe tener dos o tres letras mayúsculas correspondientes al estado, un guión bajo, el nombre de la ciudad en minúsculas, dos puntos, y el código de distrito de 4 digitos")
    document.getElementById("destinatario").style.border = "0.3em red solid";
  }
  var gramos = [];
  gramos = document.getElementById('gramos').value;
  if (/^[0-9]{3}$|^[0-9]{4}$/.test(gramos) && gramos >= 100 && gramos <=5000) {
    document.getElementById("gramos").style.border = "0.3em green solid";
  } else {
    alert("Los gramos deben estar comprendidos entre 100 y 5000");
    document.getElementById("gramos").style.border = "0.3em red solid";
  }
  var composicion =[];
  composicion = document.getElementById("composicion").value;
  if(composicion[0,1,2,3] == gramos[0,1,2,3]){
    if(/^[0-9]{4} *[g] *[A-Z]{1,2} *[0-9]{0,1} *[A-Z]{1,2} *[0-9]{0,1}$/.test(composicion)){
      document.getElementById("composicion").style.border = "0.3em green solid"; 
    }
    else{
      alert("Introduzca la cantidad en gramos seguida de dos conjuntos de una o dos letras seguidas o no de un número. (ej. 200gC3OH7)");
      document.getElementById("composicion").style.border = "0.3em red solid";
    }
  }
  else if(composicion[0,1,2] == gramos[0,1,2]){
    if(/^[0-9]{3} *[g] *[A-Z]{1,2} *[0-9]{0,1} *[A-Z]{1,2} *[0-9]{0,1}$/.test(composicion)){
      document.getElementById("composicion").style.border = "0.3em green solid"; 
    }
    else{
      alert("Introduzca la cantidad en gramos seguida de dos conjuntos de una o dos letras seguidas o no de un número. (ej. 200gC3OH7)");
      document.getElementById("composicion").style.border = "0.3em red solid";
    }
  }
  else{
      alert("Introduzca la cantidad en gramos seguida de dos conjuntos de una o dos letras seguidas o no de un número. (ej. 200gC3OH7)");
      document.getElementById("composicion").style.border = "0.3em red solid";
  }
  var cuenta = [];
  cuenta = document.getElementsById("cuenta").value;
  if(/^[a-z]{2} $/.test(cuenta)){

  }
  else{
    alert("error");
  }
}