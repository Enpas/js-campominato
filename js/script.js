// inizializzo le variabili;
var limit = 100;
var bombsNum = 16;
var maxTries = limit - bombsNum;
var arrBombs = bombsGen(bombsNum,limit);
var arrNumPlayed = [];
console.log(arrBombs);
// var boolean true-false;
var endGame = false;

//creo un ciclo while che gira fino a che non trova la condizione endGame;
while(endGame === false){
    var number = parseInt(prompt("inserisci un numero:"));

    if (arrNumPlayed.includes(number) === true){
        alert("attenzione! Il numero è già stato inserito.\nriprova!")

    } else if (arrBombs.includes(number) === true){ 
        alert("Hai perso!\nHai fatto " + arrNumPlayed + " tentativi!")
        
        console.log("tentativi: " + arrNumPlayed.join() + ". \nil numero che ti ha fatto perdere è stato il " + number);
        endGame = true;

    } else if (number > limit){ 
        alert("attenzione! Il numero è superiore a "+limit+".\nriprova!");

    } else if (number < 1) { 
        alert("attenzione! Il numero è inferiore a 1.\nriprova!");

    } else if (isNaN(number) === true){ 
        alert("attenzione! Non hai inserto un numero.\nriprova!");

    } else { 
        arrNumPlayed.push(number);

    if(maxTries === arrNumPlayed.length)
        {
            alert("hai vinto!");
            endGame = true;
        }
    }
}   

// creo una funzione che mette in un array le bombe;
function bombsGen(nBombs, max) {
    var arrBombs = []; 

    // creo un ciclo while che aggiunge le bombe nell'array e si ferma quando ne ha trovate nBombs. Le bombe devono essere tutte diverse. infine estraggo una bomba;
    while(arrBombs.length < nBombs){
        var bomb = randomNumber(max);
        if (arrBombs.includes(bomb) === false);
        {
            arrBombs.push(bomb);
        }
    }

    return arrBombs;
    
}

// gen di numeri casuali;
function randomNumber(min, max){
    return Math.ceil(Math.random() * max);
}
