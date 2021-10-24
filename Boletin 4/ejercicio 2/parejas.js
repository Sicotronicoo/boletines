document.addEventListener("DOMContentLoaded", function () {
    var imagenes = [];
    var introducir;
    var marcador = 0;
    var td = document.getElementsByTagName("td");
    for (let item of td) {
        item.addEventListener("click", function () {
            this.innerHTML = '<img src="img/' + item.getAttribute("name") + '.png"/>';
            introducir = imagenes.push(item.getAttribute("name"));
            if (introducir %2 == 0){
                if (imagenes[0] == imagenes[1]) {
                    marcador++;
                    document.getElementById("marcador").value = marcador;
                    document.getElementById(imagenes[0]).id = imagenes[0] + '1';
                    document.getElementById(imagenes[0]).style.backgroundColor = "green";
                    document.getElementById(imagenes[1]+'1').style.backgroundColor = "green";
                    imagenes = [];
                    //
                }
                else {
                    this.innerHTML = '<img src="img/interrogacion.png"/>';                    
                    imagenes = [];
                }
            }
        }
        )
    }
});