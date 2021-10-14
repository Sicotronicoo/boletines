globalThis.paises =["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán",
"Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso",
"Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur",
"Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España",
"Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial",
"Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania",
"Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui",
"Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua",
"Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido",
"República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda",
"Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona",
"Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga",
"Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];
function numeroElementos(){
    return(paises.length);
}

function elementos(){
    var contador = 0;
    while(contador < 195){
        document.write((contador + 1) + "- " + paises[contador]+"<br>");
        contador++;
    }
}
function elementosInversos(){
    var contador = 0;
    var bar = paises.slice().reverse();
    while(contador < 195){
        document.write((contador + 1) + "- " + bar[contador]+"<br>");
        contador++;
    }
}
function lista (){
    var posicion1 = prompt("Introduce el primer elemento... ");
    var posicion2 = prompt("Introduce el ultimo elemento... ");
    var listado = paises.slice(posicion1, posicion2);
    return(listado);
}
function anadirElementoInicial (){
    paises.unshift(prompt("¿Que pais desea anadir?"));
    var contador = 0;
    while(contador < 196){
        document.write((contador + 1) + "- " + paises[contador]+"<br>");
        contador++;
    }
}
function anadirElementoFinal(){
    paises.push(prompt("¿Que pais desea anadir?"));
    var contador = 0;
    while(contador < 196){
        document.write((contador + 1) + "- " + paises[contador]+"<br>");
        contador++;
    }
}
function obtenerPosicion (){
    var x = prompt ("Indique un pais...");
    var posicion= paises.indexOf(x);
    document.write(posicion);
}
function posicion () {
    var posicion1 = prompt("Introduce la posicion... ");
    
    var posicion1 = paises[parseInt(posicion1)];
    document.write(posicion1);
}
function borrarInicial () {
    var borrar = paises.shift();
    document.write(borrar);
}
function borrarFinal () {
    document.write(paises.pop());
}
var opcion = prompt("1- Mostrar numero de paises\n"+
                    "2- Mostrar listado de paises\n"+
                    "3- Mostrar un intervalo de paises\n"+
                    "4- Anadir un pais\n"+
                    "5- Borrar un pais\n"+
                    "6- Consultar un pais");
while(opcion <=0 || opcion >=7){
    alert("Elija una de las opciones indicadas");
    var opcion = prompt("1- Mostrar numero de paises\n"+
                    "2- Mostrar listado de paises\n"+
                    "3- Mostrar un intervalo de paises\n"+
                    "4- Anadir un pais\n"+
                    "5- Borrar un pais\n"+
                    "6- Consultar un pais");
}
if(opcion == 1){
    document.write(numeroElementos(paises));
}
else if(opcion == 2){
    var modo = prompt("1- Mostrar paises alfabeticamente.\n"+
                    "2- Mostrar paises en orden inverso.\n");
    while(modo <=0 || modo >=3){
        alert("Eliga una de las opciones posibles");
        var modo = prompt("1- Mostrar paises alfabeticamente.\n"+
                    "2- Mostrar paises en orden inverso.\n");
    }
    if(modo == 1){
        elementos(paises);
    }
    else{
        elementosInversos(paises);
    }
}
else if(opcion == 3){
    document.write(lista(paises));
}
else if(opcion == 4){
  var anadir = prompt("1- Incluye un elemento al inicio de la lista.\n"+
                    "2- Incluye un elemento al final de la lista\n");
    while(anadir <=0 || anadir >=3){
    alert("Eliga una de las opciones posibles");
    var anadir = prompt("1- Incluye un elemento al inicio de la lista.\n"+
                        "2- Incluye un elemento al final de la lista\n");
    }
    if(anadir == 1){
        anadirElementoInicial(paises);
    }
    else{
        anadirElementoFinal(paises);
    }

}
else if(opcion == 5){
    var borrar = prompt("1- Borrar al principio.\n"+
                            "2- Borrar al final.");
    while(borrar <=0 || borrar >=3){
    alert("Eliga una de las opciones posibles");
    var borrar = prompt("1- Consulta por nombre.\n"+
                        "2- Consulta por posicion");
    }
    if(consulta == 1){
    borrarInicial(paises);
    }
    else{
    borrarFinal(paises);
    }       
}
else{
    var consulta = prompt("1- Consulta por nombre.\n"+
                        "2- Consulta por posicion");
    while(consulta <=0 || consulta >=3){
    alert("Eliga una de las opciones posibles");
    var consulta = prompt("1- Consulta por nombre.\n"+
                        "2- Consulta por posicion");
    }
    if(consulta == 1){
        obtenerPosicion(paises);
    }
    else{
        posicion(paises);
    }
}
