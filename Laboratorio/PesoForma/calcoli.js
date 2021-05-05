function calcola() {
    var eta,altezza,plorenz,pbroca,pwandervael,bmi,peso;
    eta = document.getElementById("Eta").value;
	altezza=document.getElementById("altezza").value;
	peso=document.getElementById("peso").value;
    var scelta = document.getElementById("Sesso").selectedIndex;

    plorenz=(altezza-100) - [(altezza-150)/2];	
    document.getElementById("lorenz").innerHTML = plorenz;
	
	pbroca=altezza-104;
	document.getElementById("broca").innerHTML = pbroca;
	
	
	switch(scelta){
	case 0:
	pwandervael=(altezza-150)*0.75+50;
	break;
	case 1:
	pwandervael=(altezza-150)*0.6+50;
	break;
	}	
	document.getElementById("wan der vael").innerHTML = pwandervael;
	
	altezza=altezza/100;
	
	bmi=peso/(altezza*altezza);
	document.getElementById("bmi").innerHTML = bmi;
	
	
	

}