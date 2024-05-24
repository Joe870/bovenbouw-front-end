function handle_click(e){
    if(e.target.id == 'knop1'){
        document.body.style.background = 'green'
    }
    else if(e.target.id == 'knop2'){
        document.body.style.background = 'red'
    }
    else{
        document.body.style.background = 'blue'
    }
}

// handle_click({name:'this is my click-event', id:1234});
knop1.onclick = handle_click;
knop2.onclick = handle_click;
knop3.onclick = handle_click;
