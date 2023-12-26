
function fValidateInput(x) {
    var nombreValido = true;

    if (x === 'Mario'|| x === 'Toad' || x === 'Toadette' || x === 'Daisy') {
    } else if (x === 'Luigi') {
    } else if (x === 'Bowser') {
        x = 'Bowser Morton Koopa';
    } else if (x === 'Peach') {
        x = 'Princesa Peach Toadstool';
    } else if (x === 'Yoshi') {
        x = 'T. Yoshisaur Munchakoopas';
    } else {
        nombreValido = false;
    }

    console.log(x);
    return nombreValido ? x : null;
}


function userInput (name){

    do {
        name = prompt("¿Quién se presenta hoy?");
        name = name.charAt(0).toUpperCase() + name.slice(1);
        var validateInput = fValidateInput(name);
        miSpan = document.getElementsByTagName('span');
        for (var i = 0; i < miSpan.length; i++ ){
            miSpan[i].textContent = validateInput;
        }
    } while (validateInput ===null);
}

userInput()


    
    

    
    

