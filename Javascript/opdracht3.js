var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

var arrayoptellen = [];
var arrayaftrekken = [];
var arrayvermenigvuldigen = [];
var arrayedelen = [];

document.write("<h1> Optellen van twee arrays zijn: </h1>");
for(i=0;i<10;i++){
    nummer1 = arrayEen[i];
    nummer2 = arrayTwee[i];
    nummer = nummer1 + nummer2;
    arrayoptellen.push(nummer);
    document.write(nummer1, "+", nummer2, "=", nummer, "<br>");
}

document.write("<h1> aftrekken van twee arrays zijn: </h1>");
for(i=0;i<10;i++){
    nummer1 = arrayEen[i];
    nummer2 = arrayTwee[i];
    nummer = nummer2 - nummer1;
    arrayaftrekken.push(nummer);
    document.write(nummer2, "-", nummer1, "=", nummer, "<br>");
}

document.write("<h1> vermendigvuldigen van twee arrays zijn: </h1>");
for(i=0;i<10;i++){
    nummer1 = arrayEen[i];
    nummer2 = arrayTwee[i];
    nummer = nummer1 * nummer2;
    arrayaftrekken.push(nummer);
    document.write(nummer1, "*", nummer2, "=", nummer, "<br>");
}

document.write("<h1> delen van twee arrays zijn: </h1>");
for(i=0;i<10;i++){
    nummer1 = arrayEen[i];
    nummer2 = arrayTwee[i];
    nummer = nummer2 / nummer1;
    arrayaftrekken.push(nummer);
    document.write(nummer2, "/", nummer1, "=", nummer, "<br>");
}
