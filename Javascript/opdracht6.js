var getal = parseInt(prompt('hoeveel getallen wil je toevoegen'));
var start_getal = 1;
antw = document.getElementById('antwoord')
tot = ''
antwoordenlijst = []
for(let i=1; i<=getal; i++){
    tot += i;
    antwoordenlijst.push(tot.slice(0,-1) + "<br>");
}
console.log(antwoordenlijst);
for(let i=getal; i>=2; i--){
    document.write(antwoordenlijst[i-2]);
    console.log(i)
}
