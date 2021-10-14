var almacenarDiscos = ["Somos animales", "locos", "Somos animale2s", "loco2s", "S12omos animales", "lo12cos"];
var extremoduro1 = new Disco("Somos unos animales", "Extremoduro", "1991", "Rock", 10, false);
almacenarDiscos.push(extremoduro1);
globalThis.discos = almacenarDiscos.length;
function numDiscos() {
    document.write("<h1>Número de discos</h1><br>" + almacenarDiscos.length);
}
function listarDiscos() {
    var opcion = prompt("1- Ordenar lista en orden de entrada de discos.\n" +
        "2- Ordenar lista en orden inverso de entrada");
    while (opcion <= 0 || opcion >= 3) {
        alert("Introduzca una opcion valida.")
        var opcion = prompt("1- Ordenar lista en orden de entrada de discos.\n" +
            "2- Ordenar lista en orden inverso de entrada");
    }
    if (opcion == 1) {
        var contador = 0;
        document.write("<h1>Lista en orden de entrada de discos</h1>")
        while (contador < almacenarDiscos.length) {
            document.write((contador + 1) + "- " + almacenarDiscos[contador] + "<br>");
            contador++;
        }
    }
    else {
        var contador = 0;
        document.write("<h1>Lista en orden inverso de entrada de discos</h1>")
        var disc = almacenarDiscos.slice().reverse();
        while (contador < almacenarDiscos.length) {
            document.write((contador + 1) + "- " + disc[contador] + "<br>");
            contador++;
        }
    }
}
function intervaloDiscos() {
    var datos = prompt("Introduce dos numero en este formato (num1-num2):")
    var resultado = datos.split("-");
    while (resultado[0] < 0 || resultado[1] > discos) {
        alert("El número no es correcto");
        var datos = prompt("Introduce dos numero en este formato (num1-num2):")
        var resultado = datos.split("-");
    }
    var listado = almacenarDiscos.slice(resultado[0], resultado[1]);
    document.write("<h1>Intervalo de discos seleccionado</h1>" + listado);
}
function anadirDisco() {
    var opcion = prompt("Seleccione un tipo de busqueda:\n" +
        "1- Incluir disco al pirncipio\n" +
        "2- Incluir disco al final");
    while (opcion <= 0 || opcion > 2) {
        alert("Introduce una opción válida");
        var opcion = prompt("Seleccione un tipo de busqueda:\n" +
            "1- Incluir disco al pirncipio\n" +
            "2- Incluir disco al final");
    }
    if (opcion == 1) {
        almacenarDiscos.unshift(prompt("¿Que disco desea anadir?"));
        document.write("<h1>Has incluido un disco al principio de la lista</h1><br>")
        var contador = 0;
        while (contador < discos) {
            document.write((contador + 1) + "- " + almacenarDiscos[contador] + "<br>");
            contador++;
        }
    }
    else {
        almacenarDiscos.push(prompt("¿Que disco desea anadir?"));
        document.write("<h1>Has incluido un disco al final de la lista</h1><br>")
        var contador = 0;
        while (contador < discos) {
            document.write((contador + 1) + "- " + almacenarDiscos[contador] + "<br>");
            contador++;
        }
    }
}
function borrarDisco() {
    var opcion = prompt("Seleccione un tipo de borrado:\n" +
        "1- Borrar disco al pirncipio\n" +
        "2- Borrar disco al final");
    while (opcion <= 0 || opcion > 2) {
        alert("Introduce una opción válida");
        var opcion = prompt("Seleccione un tipo de busqueda:\n" +
            "1- Borrar disco al pirncipio\n" +
            "2- Borrar disco al final");
    }
    if(opcion == 1){
        document.write("<h1>Has borrado un disco al principio de la lista</h1><br>")
        var borrar = almacenarDiscos.shift();
        document.write(borrar);
    }
    else{
        document.write("<h1>Has borrado un disco al final de la lista</h1><br>")
        document.write(almacenarDiscos.pop());
    }
}
function consultarDisco() {
    var opcion = prompt("Seleccione un tipo de busqueda:\n" +
        "1- Consultar por posicion\n" +
        "2- Consultar por nombre");
    while (opcion <= 0 || opcion > 2) {
        alert("Introduce una opción válida");
        var opcion = prompt("Seleccione un tipo de busqueda:\n" +
            "1- Consultar por posicion\n" +
            "2- Consultar por nombre");
    }
    if (opcion == 1) {
        var posicion1 = prompt("Introduce la posicion... ");
        document.write("<h1>Has consultado un disco por su posicion</h1><br>")
        var posicion1 = almacenarDiscos[parseInt(posicion1)];
        document.write(posicion1);
    }
    else {
        var x = prompt("Indique un disco...");
        document.write("<h1>Has consultado un disco por su nombre</h1><br>")
        var posicion = almacenarDiscos.indexOf(x);
        document.write(posicion);
    }
}
function Disco() {
    this.nombre = "";
    this.grupo = "";
    this.anioPublicacion = "";
    this.tipo = "";
    this.localizacion = 0;
    this.prestado = false;
    this.cambiarEstado = cambiarEstado;
    this.cambiarEstanteria = cambiarEstanteria;
}
function Disco(nombre, grupo, anioPublicacion, tipo, localizacion, prestado) {
    this.nombre = nombre;
    this.grupo = grupo;
    this.anioPublicacion = anioPublicacion;
    this.tipo = tipo;
    this.localizacion = localizacion;
    this.prestado = false;
    this.cambiarEstado = cambiarEstado;
    this.cambiarEstanteria = cambiarEstanteria;
}
function cambiarEstanteria(numero) {
    this.localizacion = numero;
}
function cambiarEstado(est) {
    this.prestado = est;
}
function informacionDisco (){
    return("Nombre del disco: " + extremoduro1.nombre + "<br>Nombre del grupo:  " +extremoduro1.grupo + "<br>Fecha de publicacion: " + extremoduro1.anioPublicacion +
    "<br>Tipo de musica:  "+ extremoduro1.tipo + "<br>Localizacion: " +extremoduro1.localizacion+ "<br>Estado: " + extremoduro1.prestado)
}
var extremoduro1 = new Disco("Somos unos animales", "Extremoduro", "1991", "Rock", 10, false);



