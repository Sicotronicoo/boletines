var imagenes = [];
var imagenesid = [];
var introducir = 0;
var marcador = 0;


function cargarImagen(self){
    introducir++;
    self.src = 'img/' + self.getAttribute("name") + '.png';
    imagenes.push(self.getAttribute("name"));
    imagenesid.push(self.getAttribute("id"));
    //if (introducir ==2) {
    //           else {
    //sleep(2000);
    /*this.src = "img/interrogacion.png";*/
    /*var ultimaimagen = imagenesid.pop();*/
    /*var td = document.getElementById(ultimaimagen);
    td.innerHTML = '<img src="img/interrogacion.png"/>';*/
    //  }
    ///     }
};

document.addEventListener("DOMContentLoaded", function () {

    var td = document.getElementsByTagName("img");
    for (let item of td) {

        item.addEventListener("load", function () {
            if (introducir == 2) {
                //sleep(1000);
                if (imagenes[0] == imagenes[1]) {
                    marcador++;
                    document.getElementById("marcador").value = marcador;
                    document.getElementById(imagenesid[0]).parentElement.style.backgroundColor = "green";
                    
                    document.getElementById(imagenesid[1]).parentElement.style.backgroundColor = "green";
                } else {
                    var imagen1 = imagenesid.pop();
                    var img1 = document.getElementById(imagen1);
                    img1.src = "img/interrogacion.png";
                    var imagen2 = imagenesid.pop();
                    var img2 = document.getElementById(imagen2);
                    img2.src = "img/interrogacion.png";
                }
                introducir = 0;
                imagenes = [];
                imagenesid = [];
            }
        });
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