function fin_de_curso(){
    var hoy = new Date(2021,09,20);
    var fin = new Date(2022,06,24);
    var dif = fin - hoy;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));

    return document.write(dias, "<br>");
}

function formato_fechas(){
    var opcion = prompt ("Introduce la forma en la que te gustaria ver la fecha: 1-(dd/mm/yy), 2-(dia, mes, año), 3-(day, month, year)");
        while(opcion < 1 || opcion > 3){
            var opcion = prompt ("Introduce la forma en la que te gustaria ver la fecha: 1-(dd/mm/yy), 2-(dia, mes, año), 3-(day, month, year)");
        }
        var fechaHoy = new Date();

        const dias = ['lunes','martes','miercoles','jueves','viernes', 'sabado', 'domingo'];
            var nombreDia = dias[fechaHoy.getDay()- 1];

        const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
            var nombreMes = meses[fechaHoy.getMonth()];

        const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
            var nameDay = days[fechaHoy.getDay() - 1];

        const month = ['January','February','March','April','May','June','July','August','September','October','November', 'December'];
            var nameMonth = month[fechaHoy.getMonth()];

        if (opcion == 1){
            document.write(fechaHoy.getDate()+'/'+(fechaHoy.getMonth()+1)+'/'+fechaHoy.getFullYear());
        }
        else if (opcion == 2){
            document.write(nombreDia+ ', '+ fechaHoy.getDate() + ' de ' + nombreMes + ' de ' + fechaHoy.getFullYear());
        }
        else{
            document.write(nameDay+ ', ' + nameMonth + ' ' + fechaHoy.getDate() + ' , ' + fechaHoy.getFullYear());
        }
}

function formato_horas(){
    var opcion = prompt ("Introduce la forma en la que te gustaria ver la hora: 1-(hh:min:sec), 2-(hh:min PM o AM)");
    while(opcion < 1 || opcion > 2){
        var opcion = prompt ("Introduce la forma en la que te gustaria ver la hora: 1-(hh:min:sec), 2-(hh:min PM o AM)");
    }
    var hoy = new Date();
    var hour = hoy.getHours();
    var min = hoy.getMinutes();
    var sec = hoy.getSeconds();

    if (opcion == 1 && sec <= '9' && min <= '9'){
        document.write(hoy.getHours() + ':0' + hoy.getMinutes() + ':0' + hoy.getSeconds());
    }
    else if(opcion == 1 && sec <= '9' && min >= '10'){
        document.write(hoy.getHours() + ':' + hoy.getMinutes() + ':0' + hoy.getSeconds());
    }
    else if(opcion == 1 && sec >= '10' && min <= '9'){
        document.write(hoy.getHours() + ':0' + hoy.getMinutes() + ':' + hoy.getSeconds());
    }
    else if(opcion == 1){
        document.write(hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds());
    }
    else if (opcion == 2 && hour <= '12' && sec <='9' && min <= '9'){
        document.write(hoy.getHours() + ':0' + hoy.getMinutes() + ':0' + hoy.getSeconds()+' AM'); 
    }
    else if(opcion == 2 && hour <= '12' && sec <= '9' && min >= '10'){
        document.write(hoy.getHours() + ':' + hoy.getMinutes() + ':0' + hoy.getSeconds()+' AM');
    }
    else if(opcion == 2 && hour <= '12' && sec >= '10' && min <= '9'){
        document.write(hoy.getHours() + ':0' + hoy.getMinutes() + ':' + hoy.getSeconds()+' AM');
    }
    else if (opcion == 2 && hour > '12' && sec <='9' && min <= '9'){
        document.write((hoy.getHours()-12) + ':0' + hoy.getMinutes() + ':0' + hoy.getSeconds()+' PM'); 
    }
    else if(opcion == 2 && hour > '12' && sec <= '9' && min >= '10'){
        document.write((hoy.getHours()-12) + ':' + hoy.getMinutes() + ':0' + hoy.getSeconds()+' PM');
    }
    else if(opcion == 2 && hour > '12' && sec >= '10' && min <= '9'){
        document.write((hoy.getHours()-12) + ':0' + hoy.getMinutes() + ':' + hoy.getSeconds()+' PM');
    }
    else if (opcion == 2 && hour < '12'){
        document.write(hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()+' PM');
    }
    else{
        document.write((hoy.getHours()-12) + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()+' AM');
    }
}

function nombreApellidos(){
    var nombre = prompt ("Introduce tu nombre completo.");
    var resultado = nombre.split(" ");
    var nombre1 = resultado[0].length;
    var nombre2 = resultado[1].length;
    var nombre3 = resultado[2].length;

    document.write("En mayusculas: " + nombre.toUpperCase() + "<br>" + " En minusculas: " + nombre.toLowerCase() + "<br>");
    document.write("El total de caracteres es: " + (nombre1 + nombre2 + nombre3) + "<br>");
    document.write("Nombre: " + resultado[0] + "<br> Apellido 1: " + resultado[1] + "<br> Apellido 2: " + resultado[2] + "<br>");
    document.write("Nombre de usuario: " + resultado[0].charAt(0) + resultado[1] + resultado[2].charAt(0) + "<br>");
    document.write("Nombre de usuario 2: " + resultado[0].charAt(0) + resultado[0].charAt(1) + resultado[0].charAt(2) + resultado[1].charAt(0) + resultado[1].charAt(1) + resultado[1].charAt(2) +
    resultado[2].charAt(0) + resultado[2].charAt(1) + resultado[2].charAt(2));
}