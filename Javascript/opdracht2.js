naam_array = [];
for(let i = 1; i<4; i++){
    var name = prompt("wat is je naam?");
    naam_array.push(name);
}


document.getElementById("namen").innerHTML = naam_array;
document.getElementById("namen_omgekeerd").innerHTML = naam_array.reverse();