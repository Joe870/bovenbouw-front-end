const week = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
const week_omgekeerd = week.slice().reverse()
document.getElementById("alle_dagen").innerHTML = week;
document.getElementById("werkdagen").innerHTML = week.slice(0,5);
document.getElementById("weekenddagen").innerHTML = week.slice(5,7);
document.getElementById("alle_dagen_omgekeerd").innerHTML = week_omgekeerd;
document.getElementById("werkdagen_omgekeerd").innerHTML = week_omgekeerd.slice(2,7);
document.getElementById("weekenddagen_omgekeerd").innerHTML = week_omgekeerd.slice(0,2);
