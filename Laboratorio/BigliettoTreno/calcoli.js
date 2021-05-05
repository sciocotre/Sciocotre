function calcola() {
    var km, classe, c;
    km = document.getElementById("km").value;

    var scelta = document.getElementById("NumeroPersone").selectedIndex;



    if (document.getElementById("primorb").checked)
        c = km * 0.43;

        if (document.getElementById("secondorb").checked)
        c = km * 0.23;

    switch (scelta) {
        case 0:
            c = c * 1;
            break;
        case 1:
            c = c * 2;
            break;
        case 2:
            c = c * 3;
            break;
        case 3:
            c = c * 4;
            break;
        case 4:
            c = c * 5;
            break;
        case 5:
            c = c * 6;
            break;
    }
    document.getElementById("costo").innerHTML = c;

}