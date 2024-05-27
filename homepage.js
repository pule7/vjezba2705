let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let izracunajBtn = document.querySelector("button");



function odrediVeciBroj(){

    let broj1 = input1.value;
    let broj2 = input2.value;

    if(!broj1 || !broj2){
        alert("Niste unijeli broj!");
        return;
    }

    if(broj1 > broj2) {
        alert(`Broj ${broj1} je veći!`);
    } else if(broj2 > broj1){
        alert(`Broj ${broj2} je veći!`);
    } else {
        alert(`Unijeli ste dva jednaka broja, broj ${broj1}`);
    }
} 

izracunajBtn.addEventListener("click", odrediVeciBroj);


