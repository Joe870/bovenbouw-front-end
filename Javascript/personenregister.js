persoon = [{"voornaam":"Pieter", "achternaam":"Heijn", "nationaliteit":"Nederlandse", "leeftijd":47, "gewicht":86},{"voornaam":"masud","achternaam":"mohammed","nationaliteit":"Iraans","leeftijd":37,"gewicht":79},{"voornaam":"Marie","achternaam":"visser","nationaliteit": "Belgische","leeftijd":42,"gewicht":69},{"voornaam":"klaas", "achternaam":"wever", "nationaliteit":"nederlandse", "leeftijd":73, "gewicht":85},{"voornaam":"bjorn", "achternaam":"hakke", "leeftijd":18, "gewicht":71}, {"voornaam":"jouke", "achternaam":"dijkstra", "nationaliteit":"fries", "leeftijd":29, "gewicht":82}, {"voornaam":"bo", "achternaam": "wàng", "nationaliteit":"chinees", "leeftijd":38, "gewicht":65}]
leeftijd_check = prompt("vul een leeftijd in")
var container = document.getElementById("container")
persoon.forEach(function(persoon){
    var line = document.createElement("p");
    for(key in persoon){
        if(persoon["leeftijd"]>leeftijd_check){
            line.textContent += key + " : " + persoon[key] + " ";
        }
    }
    container.appendChild(line);
})
