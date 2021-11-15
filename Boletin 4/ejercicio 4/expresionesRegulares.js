document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
 
});
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var cocinero  = [];
    var nombreCocinero  = document.getElementById("cocinero");
    function insert ( ) {
        cocinero.push(nombreCocinero.value);
        alert(cocinero);
       }
    if(cocinero[0] == "i"){
        alert("Correcto");
    }else{
        alert("error");
    } 
  }