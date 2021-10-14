var paises =["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán",
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
    document.write(paises.length);
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
function ordenarAlfabeticamente(){
    var contador = 0;
    var orden = paises.sort();
    while (contador < 195){
        document.write((contador + 1) + "- " + orden[contador] + "<br>");
        contador++;
    }
}
function anadirElementoInicial (){
    paises.unshift("paises");
    var contador = 0;
    while(contador < 196){
        document.write((contador + 1) + "- " + paises[contador]+"<br>");
        contador++;
    }
}
function anadirElementoFinal(){
    paises.push('paises');
    var contador = 0;
    while(contador < 196){
        document.write((contador + 1) + "- " + paises[contador]+"<br>");
        contador++;
    }
}
function borrarInicial () {
    var borrar = paises.shift();
    document.write(borrar);
}
function borrarFinal () {
    document.write(paises.pop());
}
function posicion () {
    var posicion1 = prompt("Introduce la posicion... ");
    
    var posicion1 = paises[parseInt(posicion1)];
    document.write(posicion1);
}
function obtenerPosicion (){
    var x = prompt ("Indique un pais...");
    var posicion= paises.indexOf(x);
    document.write(posicion);
}
function lista (){
    var posicion1 = prompt("Introduce el primer elemento... ");
    var posicion2 = prompt("Introduce el ultimo elemento... ");
    var listado = paises.slice(posicion1, posicion2);
    document.write(listado);
}