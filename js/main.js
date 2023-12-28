function fValidateInput(x) {
    var nombreValido = true;

    if (x === 'Mario'|| x === 'Toad' || x === 'Toadette' || x === 'Daisy') {
    } else if (x == 'Luigi') {
    } else if (x == 'Bowser') {
        x = 'Bowser Morton Koopa';
    } else if (x == 'Peach') {
        x = 'Princesa Peach Toadstool';
    } else if (x == 'Yoshi') {
        x = 'T. Yoshisaur Munchakoopas';
    } else {
        nombreValido = false;
    }

    console.log(x);
    return nombreValido ? x : null;
}

function searchActor(search) {
    const divID = document.getElementById(search)
    divID.title = "Presentado";
}

function deleteActor() {
    const miDiv = document.getElementsByTagName('div');
    for (var i = 0; i < miDiv.length; i++ ){
        miDiv[i].removeAttribute("title");
    }
}


function actorPrompt(){
    let name
    let validateInput
    let actor
    do{
        actor = prompt("¿Quién se presenta hoy?");
        actor = actor.toLowerCase()
        name = actor.charAt(0).toUpperCase() + actor.slice(1);
        validateInput = fValidateInput(name);
    }while (validateInput ===null);
    insertSpan(validateInput)
    searchActor(actor);
}

function insertSpan (presentador){

        deleteActor()
        const miSpan = document.getElementsByTagName('span');
        for (var i = 0; i < miSpan.length; i++ ){
            miSpan[i].textContent = presentador;
        }       
}

    cajas.addEventListener("click", function (event) {
            let idContent = event.target.id;
            if (idContent && idContent !== 'cajas'){
            const name = idContent.charAt(0).toUpperCase()+idContent.slice(1)
            let ValidateId = fValidateInput(name);
            insertSpan(ValidateId);
            searchActor(idContent);
        }
            
        })
