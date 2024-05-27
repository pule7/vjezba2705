let emailInput = document.getElementById("email");
let password1Input = document.getElementById("password1");
let password2Input = document.getElementById("password2");
let prijavaBtn = document.getElementById("prijavaBtn");


function registrirajKorisnika(){
    let email = emailInput.value;
    let password1 = password1Input.value;
    let password2 = password2Input.value;

    if(!email){
        alert("Niste unijeli email!");
        return;
    }

    if(!password1) {
        alert("Niste unijeli password!");
        return;
    }

    if(!password2) {
        alert("Niste ponovili lozinku!");
        return;
    }

    if( password1 !== password2){
        alert("Niste unijeli istu lozinku!");
        return;
    }
}

prijavaBtn.addEventListener("click", registrirajKorisnika);