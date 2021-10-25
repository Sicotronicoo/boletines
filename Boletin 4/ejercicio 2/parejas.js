document.addEventListener("DOMContentLoaded", function () {
    var imagenes = [];
    var imagenesid = [];
    var introducir;
    var marcador = 0;
    var td = document.getElementsByTagName("td");
    for (let item of td) {
        item.addEventListener("click", function () {
            this.innerHTML = '<img src="img/' + this.getAttribute("name")+ '.png" />';
            var prueba = this.getAttribute("name");
            introducir = imagenes.push(this.getAttribute("name"));
            introducir = imagenesid.push(item.getAttribute("id"));
            if (introducir %2 == 0){
                if (imagenes[0] == imagenes[1]) {
                    marcador++;
                    document.getElementById("marcador").value = marcador;
                    //document.getElementById(imagenes[0]).id = imagenes[0] + '1';
                    document.getElementById(imagenesid[0]).style.backgroundColor = "green";
                    document.getElementById(imagenesid[1]).style.backgroundColor = "green";
                    imagenes = [];
                }
                else {
                    //sleep(2000);

                    //this.innerHTML = '<img src="img/interrogacion.png"/>';
                    var ultimaimagen = imagenesid.pop();
                    var td = document.getElementById(ultimaimagen);
                     td.innerHTML = '<img src="img/interrogacion.png"/>';                    var ultimaimagen = imagenesid.pop();
                     var td = document.getElementById(ultimaimagen);
                      td.innerHTML = '<img src="img/interrogacion.png"/>';
                    imagenes = [];
                    imagenesid = [];
                }
            }
        }
        )
    }
});
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
     if ((new Date().getTime() - start) > milliseconds) {
      break;
     }
    }
   }