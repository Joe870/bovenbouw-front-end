getalbutton = 0;
button_amount = 30
button_per_row = 5
amount_rows = Math.ceil(button_amount / button_per_row)
container = document.getElementById("container")
for(let i = 0; i<button_amount; i++){
        getalbutton += 1
        var newbutton = document.createElement("button")
        body = document.getElementsByTagName("body")[0]
        body.appendChild(newbutton);
        newbutton.id = i
        newbutton.innerHTML = getalbutton
        newbutton.amount_clicked = 0
        newbutton.onclick=handle_click;
}

function handle_click(e){
console.dir(this)
this.amount_clicked += 1 
        if (this.amount_clicked == 1){
                console.dir(this.amount_clicked)
                this.style.backgroundColor = "red"        
        }
        else if (this.amount_clicked == 2){
                console.dir(this.amount_clicked)
                this.style.backgroundColor = "purple"
        } 
        else if (this.amount_clicked == 3){
                console.dir(this.amount_clicked)
                this.style.backgroundColor = "blue"
        }
        else if (this.amount_clicked == 4){
                console.dir(this.amount_clicked)
                this.style.backgroundColor = "black"
        }
        else if (this.amount_clicked >= 5){
                this.style.visibility = "hidden";
        }
}

// for(let i = 0; i<amount_rows; i++){
//         row = document.createElement("div");
//         row.classList.add("button");
//         for(let i = 0; i<button_per_row; i++){
//                 let newbutton = document.createElement("button");
//                 getalbutton += 1
//                 newbutton.innerHTML = getalbutton;
//                 newbutton.id = i
//                 newbutton.onclick=handle_click;
//                 row.appendChild(newbutton);
//         }
//         container.appendChild(row);
// };