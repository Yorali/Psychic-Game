window.onload = function() {

var alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
				'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
				'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
				 'y', 'z'];

// var random = Math.floor(Math.random() * (alphabet.length - 1));
// var letter = alphabet[random];

//console.log(letter);

var wins = document.getElementById("wins");
var winsCounter = 0;

var losses = document.getElementById("losses");
var lossCounter = 0;

var guessleft = document.getElementById("guessleft");
var guessLeftCounter = 13;

var guessmade = document.getElementById("guessmade");
var guessMadeCounter = 0;


document.onkeyup = function (e) {
    var key = e.key; 
    for (var i = 0; i < alphabet.length; i++) {
    	if (key == alphabet[i]) {
	        var random = Math.floor(Math.random() * (alphabet.length - 1));
			var letter = alphabet[random];

		    if (key == letter) {
		    	winsCounter++;
		    	guessMadeCounter++;
		    	wins.innerHTML = winsCounter;
		    	guessmade.innerHTML = guessMadeCounter;
		    	guessLeftCounter = 13;
		    }

		    else {
		    	lossCounter++;
		    	guessMadeCounter++
		    	guessLeftCounter--;
		    	losses.innerHTML = lossCounter;
		    	guessmade.innerHTML = guessMadeCounter;
		    	guessleft.innerHTML = guessLeftCounter;

		    	if (guessLeftCounter == 0) {
		    		alert('You have lost, however feel free to keep playing');
		    		guessLeftCounter = 13;
		    		guessleft.innerHTML = guessLeftCounter;
		    	}
		    }		
    	}
    }


    // for (var i = 0; i < letter.length; i++) {
    // 	if (letter[i] == key) {
    // 		winsCounter ++;
    // 		wins.innerHTML = winsCounter;
    // 	}
    //  }
}




}