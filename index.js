let userInput = document.getElementById("email");

let passwordInput = document.getElementById("password");

let loginBtn = document.getElementById("login");





function ulogirajKorisnika(){

    let password = passwordInput.value;
    let username = userInput.value;


    if(!password || !username) {
        alert("Podaci nisu ispravni!");
    }


}


loginBtn.addEventListener("click", ulogirajKorisnika);