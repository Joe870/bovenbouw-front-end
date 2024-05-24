var getal = parseInt(prompt('hoeveel getallen wil je toevoegen'));
var start_getal = 1;
antw = document.getElementById('antwoord')
tot = ''
antwoordenlijst = []

for(let i=1; i<=getal; i++){
    tot += i;
    document.write(tot.slice(0,-1) + "<br>");
    antwoordenlijst.push(tot.slice(0,-1) + "<br>");
}
