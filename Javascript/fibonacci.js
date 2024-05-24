function fibonacci_next(fibo_lijst){
    length1 = fibo_lijst.length - 1 
    length2 = fibo_lijst.length - 2 
    som_toevoeg = fibo_lijst[length1] + fibo_lijst[length2];
    fibo_lijst.push(som_toevoeg);
    return fibo_lijst;
}

function reeks_fibonacci(){
    let reeks = [0,1];
    for(let i=1; i < 19; i++){
        reeks = fibonacci_next(reeks);
        console.log(reeks)
    }
    return reeks;
}

uitkomst_toevoeg = reeks_fibonacci();
document.write(uitkomst_toevoeg);