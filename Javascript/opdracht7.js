// variabelen nu in assotiative arrays
prijs_soort = {'bolletje':0.95, 'hoorn':1.25, 'bak':0.75, 'liter':9.80};
aantal_smaken = {'aardbei':0, 'chocolade':0, 'vanille':0};
aantal_soorten = {'bolletje':0, 'hoorn':0, 'bak':0, 'liter':0, 'topping':0};
volgende_bestelling = 'ja';
hoorn_of_bak = '';
aantal_topping = {'geen':0, 'slagroom':0, 'sprinkels':0, 'caramel_bak':0, 'caramel_hoorn':0};
prijs_topping = {'geen':0, 'slagroom':0.50, 'sprinkels':0.30, 'caramel_bak':0.60, 'caramel_hoorn':0.90};
eind_prijs = {'topping':0, 'aardbei':0, 'chocola':0, 'vanille':0, 'hoorn':0, 'bak':0, 'totaal':0, 'geen':0, 'slagroom':0, 'sprinkels':0, 'caramel_bak':0, 'caramel_hoorn':0};
btw = 6;

volgende_bestelling = 'ja';

//functions
function soort_klant(){
    klant_soort = prompt('bent u 1) een particuliere klant of 2) een zakelijke klant?');
    return klant_soort;
}

function aantal_bolletjes_ijs(klant){
    if(klant == 1){
        aantal_bolletjes = parseInt(prompt('hoeveel bolletjes wilt u?'));
        console.log(aantal_bolletjes, "aantal bolletjes");
        aantal_soorten['bolletje'] = aantal_bolletjes;
        while (aantal_bolletjes > 8){
            console.log('sorry zulke grote bakjes hebben we niet');
            aantal_bolletjes = parseInt(prompt('hoeveel bolletjes wilt u? (niet meer als 8 bolletjes, zulke grote bakjes hebben we niet)'));
            aantal_soorten['bolletje'] = aantal_bolletjes;
        }
    }
    else{
        aantal_liter = parseInt(prompt('hoeveel liter wilt u?'));
        console.log(aantal_liter,"aantal liter");
        aantal_soorten['liter'] = aantal_liter;
    }
    return aantal_soorten
}

function waar_in(aantal_soorten){
    hofb = '';
    if (aantal_soorten['bolletje'] >3 && aantal_soorten['bolletje'] <8){
        hofb = 'bakje';
    }
    else if(aantal_soorten['bolletje']>=1){
        hofb = prompt(`wilt u deze ${aantal_soorten['bolletje']} bolletje(s) in een hoorntje of een bakje?`);
    }
    return hofb;
}

function aantal_hoorntjes_bakjes(hoorn_of_bak, aantal_soorten){
    if (hoorn_of_bak == 'bakje'){
        aantal_soorten['bak'] += 1;
    }
    else if (hoorn_of_bak == 'hoorntje'){
        aantal_soorten['hoorn'] += 1;
    }
    return aantal_soorten
}

function meer(){
    doorgaan = prompt("wilt u nog meer bestellen?");
    if (doorgaan == 'nee'){
        console.log('bedankt en tot ziens');
    }
    return doorgaan;
}

function smaak(aantal_soorten, klant){
    if (klant == 1){
        welke_smaak = prompt(`welke smaak wilt u voor bolletje ${aantal_soorten['bolletje']}? A) aardbei, C) chocolade, of V) vanille?`);
    }
    else if (klant == 2){
        welke_smaak = prompt(`welke smaak wilt u voor liter ${aantal_soorten['liter']}? A) aardbei, C) chocolade, of V) vanille?`);
    }
    welke_smaak = welke_smaak.toUpperCase();
    return welke_smaak;
}

function aantal_smaak(aantal_smaken, taste){
    if (taste == 'A'){
        aantal_smaken['aardbei'] +=1;
    }
    else if (taste == 'C'){
        aantal_smaken['chocolade'] +=1;
    }
    else if (taste == 'V'){
        aantal_smaken['vanille'] +=1;
    }
    return aantal_smaken;
}

function welke_topping(aantal_soorten, aantal_topping, bofh){
    topping = prompt('wat voor topping wilt u: A) geen, B) slagroom, C) sprinkels of D) caramel saus?');
    topping = topping.toUpperCase();
    if (topping == 'C'){
        ///// klopt nog niet
        for (i=0; i<aantal_soorten['bolletje']; i++){
            extra_sprinkels = prompt(`wilt uw op bolletje ${i+1} sprinkels?`);
            if (extra_sprinkels.toLowerCase() == 'ja'){
                aantal_topping['sprinkels'] +=1;
            }
        }
    }
    else if (topping == 'A'){
        aantal_topping['geen'] += 1;
    }
    else if (topping == 'B'){
        aantal_topping['slagroom'] +=1; 
    }
    else if(topping == 'D'){
        bofh.toLowerCase()
        if (bofh == 'hoorntje'){
            aantal_topping['caramel_hoorn'] +=1;
        }
        else if (bofh == 'bakje'){
            aantal_topping['caramel_bak'] += 1;
        }
    }
}

//main programma
while(volgende_bestelling == "ja"){
    klant = parseInt(soort_klant());
    if(klant == 1){
        aantal_bolletjes = aantal_bolletjes_ijs(klant);
        for (i=0; i<aantal_soorten['bolletje']; i++){
            smaken = smaak(aantal_soorten, klant);
            aantal_smaken = aantal_smaak(aantal_smaken,smaken);
        }
        hoorn_of_bak = waar_in(aantal_soorten)
        aantal_soorten = aantal_hoorntjes_bakjes(hoorn_of_bak,aantal_soorten);
        welke_topping(aantal_soorten, aantal_topping, hoorn_of_bak);
        meld_transactie = console.log(`hier is uw ${hoorn_of_bak} met ${aantal_soorten['bolletje']} bolletje(s)`);
        volgende_bestelling = meer();
        aantal_soorten['topping'] = aantal_topping['geen'] + aantal_topping['slagroom'] + aantal_topping['sprinkels'] + aantal_topping['caramel_bak'] + aantal_topping['caramel_hoorn'];
        eind_prijs['slagroom'] += aantal_topping['slagroom'] * prijs_topping['slagroom'];
        eind_prijs['sprinkels'] += aantal_topping['sprinkels'] * prijs_topping['sprinkels'];
        eind_prijs['geen'] += aantal_topping['geen'] * prijs_topping['geen'];
        eind_prijs['caramel_bak'] += aantal_topping['caramel_bak'] * prijs_topping['caramel_bak'];
        eind_prijs['caramel_hoorn'] += aantal_topping['caramel_hoorn'] * prijs_topping['caramel_hoorn'];
        eind_prijs['topping'] = eind_prijs['slagroom'] + eind_prijs['sprinkels'] + eind_prijs['geen'] + eind_prijs['caramel_bak'] + eind_prijs['caramel_hoorn'];
        eind_prijs['aardbei'] = aantal_smaken['aardbei'] * prijs_soort['bolletje'];
        eind_prijs['chocola'] = aantal_smaken['chocolade'] * prijs_soort['bolletje'];
        eind_prijs['vanille'] = aantal_smaken['vanille'] * prijs_soort['bolletje'];
        eind_prijs['hoorn'] = aantal_soorten['hoorn'] * prijs_soort['hoorn'];
        eind_prijs['bak'] = aantal_soorten['bak'] * prijs_soort['bak'];
        eind_prijs['totaal'] = eind_prijs['bak'] + eind_prijs['hoorn'] + eind_prijs['aardbei'] + eind_prijs['chocola'] + eind_prijs['vanille'] + eind_prijs['topping'];
    }
    else if (klant == 2){
        aantal_liter = aantal_bolletjes_ijs(klant);
        for (i=0; i<aantal_soorten['liter']; i++){
            smaken = smaak(aantal_soorten, klant);
            aantal_smaken = aantal_smaak(aantal_smaken,smaken);
        }
        eind_prijs['aardbei'] += aantal_smaken['aardbei'] * prijs_soort['liter'];
        eind_prijs['chocola'] = aantal_smaken['chocolade'] * prijs_soort['liter'];
        eind_prijs['vanille'] = aantal_smaken['vanille'] * prijs_soort['liter'];
        eind_prijs['liter'] = (aantal_smaken['aardbei'] + aantal_smaken['chocolade'] + aantal_smaken['vanille']) * prijs_soort['liter'];
        eind_btw = eind_prijs['liter'] / 100 * btw
        console.log(eind_btw);
        eind_prijs['totaal'] += eind_prijs['aardbei'] + eind_prijs['chocola'] + eind_prijs['vanille'] + eind_btw
        volgende_bestelling = 'nee';
    } 
}
    
if (klant == 1){
    lob = 'Bolletjes';
}

else if (klant == 2){
    lob = 'Liter';
}


console.log(aantal_smaken['aardbei'], 'aardbei bolletjes')
console.log(aantal_smaken['chocolade'], 'chocolade bolletjes')
console.log(aantal_smaken['vanille'], 'vanille bolletjes')
console.log(aantal_soorten['bolletje'], 'bolletjes')
console.log(aantal_soorten['liter'], 'liters')
console.log(aantal_topping, 'toppings')
console.log(aantal_soorten['toppings'], 'toppings')
console.log(aantal_soorten['bak'], 'bakjes')
console.log(aantal_soorten['hoorn'], 'hoorntje')
document.write('-----------["papi gelato"]------------' + "<br>")
prijs=0
if(klant == 1){
    prijs = prijs_soort['bolletje']
}
else{
    prijs = prijs_soort['liter']
}
if(aantal_smaken['aardbei'] >= 1){
    document.write(lob, " aardbei ",      aantal_smaken['aardbei'], "x $", prijs, "= $", eind_prijs['aardbei'] + "<br>");
    "<br>"
}
if(aantal_smaken['chocolade'] >= 1){
    document.write(lob, " chocolade",     aantal_smaken['chocolade'], "x $", prijs, "= $", eind_prijs['chocola'] + "<br>");
    "<br>"
}    
if(aantal_smaken['vanille'] >= 1){
    document.write(lob, " vanille",      aantal_smaken['vanille'], "x $", prijs, "= $", eind_prijs['vanille'] + "<br>");
    "<br>"
}
if(aantal_soorten['hoorn'] >= 1){
    document.write('Hoorntjes ',                 aantal_soorten['hoorn'], "x $", prijs_soort['hoorn'], "= $", eind_prijs['hoorn'] + "<br>");
}
if(aantal_soorten['bak'] >= 1){
    document.write(' Bakjes',         aantal_soorten['bak'], "x $", prijs_soort['bak'], "= $", eind_prijs['bak'] + "<br>");
    
}
if(aantal_soorten['topping'] >= 1){
    document.write(' topping                         = $', eind_prijs['topping'] + "<br>");

}
if(klant == 2){
    document.write(' BTW',                       "= $", eind_btw + "<br>")
}
    
document.write('---------------------------------------' + "<br>")

document.write("totaal         = $", eind_prijs['totaal'] + "<br>")
document.write('bedankt en tot ziens')

