function elabora() {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;

    if (nome.toUpperCase() != nome || cognome.toUpperCase() != cognome) {
        alert("Nome e Cognome devono essere in CAPS!");
    }
    else {
        var data = document.getElementById("giorno").value + "/" + document.getElementById("mese").selectedIndex + 1 + "/" + document.getElementById("anno").value;
       
        var risposta1 = document.getElementById("risposta1").value;
        
        var risposta2 = document.getElementById("risposta2").value;
        
        var risposta3;
        if (document.getElementById("risposta3_1").checked) {
            risposta3 = "statiche";
        } else {
            risposta3 = "dinamiche";
        }
        
        var risposta4;
        if (document.getElementById("risposta4_1").checked) {
            risposta4 = "void ";
        }
        if (document.getElementById("risposta4_2").checked) {
            risposta4 += "integer";
        }
        if (document.getElementById("risposta4_3").checked) {
            risposta4 += "char";
        }
        
        var risposta5 = document.getElementById("risposta5").value;
        var punti = 0;
        if (risposta1 == "HTML") {
            punti++;
        }
        if (risposta2 == "2") {
            punti++;
        }
        if (risposta3 == "statiche") {
            punti++;
        }
        if (risposta4 == "void char") {
            punti++;
        }
        if (risposta5 == "un byte") {
            punti++;
        }
        document.getElementById("punteggio").innerHTML = "Punteggio: " + punti;
        var temp = cognome.substr(0, 3) + nome.substr(0, 3) + (document.getElementById("mese").value).substr(0, 3) + (document.getElementById("anno").value).substr(2, 2);
        document.getElementById("codiceUtente").innerHTML = "CodiceUtente: " + temp;
        document.getElementById("punteggioUtente").innerHTML ="Punteggio: " + punti * 10;
    }
}

function cancella() {
    document.getElementById("nome").value = " ";
    document.getElementById("cognome").value = " ";
    document.getElementById("giorno").value = " ";
    document.getElementById("mese").selectedIndex = 0;
    document.getElementById("anno").value = " ";
    document.getElementById("risposta1").value = " ";
    document.getElementById("risposta2").selectedIndex = 0;
    document.getElementById("risposta3_1").checked = false;
    document.getElementById("risposta3_2").checked = false;
    document.getElementById("risposta4_1").checked = false;
    document.getElementById("risposta4_2").checked = false;
    document.getElementById("risposta4_3").checked = false;
    document.getElementById("risposta5").value = " ";
}
function compila() {
    document.getElementById("nome").value = "MATTIA";
    document.getElementById("cognome").value = "NESPOLI";
    document.getElementById("giorno").value = "20";
    document.getElementById("mese").selectedIndex = 6;
    document.getElementById("anno").value = "2003";
    document.getElementById("risposta1").value = "HTML";
    document.getElementById("risposta2").selectedIndex = 1;
    document.getElementById("risposta3_1").checked = true;
    document.getElementById("risposta3_2").checked = false;
    document.getElementById("risposta4_1").checked = true;
    document.getElementById("risposta4_2").checked = false;
    document.getElementById("risposta4_3").checked = true;
    document.getElementById("risposta5").value = "un byte";
}