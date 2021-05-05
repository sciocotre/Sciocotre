function inizializza() {

    var sesso = ["Maschio", "Femmina"];

    var a = document.getElementById("sesso");

    for (var i = 0; i < sesso.length; i++) {
        a.add(new Option(sesso[i]));
    }


    var color = ["Azzurri", "Marroni", "Verdi", "Neri"];

    a = document.getElementById("coloreocchi");

    for (var i = 0; i < color.length; i++) {
        a.add(new Option(color[i]));
    }

    var provincia = ["Como", "Milano", "Padova", "Cremona", "Bergamo"];

    a = document.getElementById("provincia di residenza");

    for(var i=0;i<provincia.length;i++){
        a.add(new Option(provincia[i]));
    }



}