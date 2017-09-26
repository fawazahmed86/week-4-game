//pseudocode
// A game has to be made where different crystals are displayed, each encapsulating a random number.
// Computer also generates a random number which is diplayed to the user as the target score.
// Whenever a crystal clicked, the random number associated with it is added to the user score.
// Counters of wins and losses are displayed to the user.


$(document).ready(function() {

  var rndResult;
  var rnd1;
  var rnd2;
  var rnd3;
  var rnd4;
  var score;
  var entry;
  var wins;
  var loss;

function game(){
  score += entry
}
function winGame() {
  if (score === rndResult) {
    wins++;
    $("#wins").append( "Wins: " + wins);
    resetGame();
  };
}

function lossGame() {
  if (score < rndResult || score > rndResult){
    loss++;
    $("#loss").append( "Loss: " + loss);
    resetGame();
  };
}
function initializeGame() {
  
  rnd1 = Math.floor(Math.random() * 9 + 1);
  rnd2 = Math.floor(Math.random() * 9 + 1);
  rnd3 = Math.floor(Math.random() * 9 + 1);
  rnd4 = 1;
  rndResult = Math.floor(Math.random() * 80 + 25);
  score = 0;


        // console.log(score);
        // console.log(rnd1);
        // console.log(rnd2);
        // console.log(rnd3);
        // console.log(rnd4);

        
        console.log(this)
        // console.log(rnd1)
        // console.log(rnd2)
        // console.log()

        // console.log(score);
        // console.log(rnd1);
        // console.log(rnd2);
        // console.log(rnd3);
        // console.log(rnd4);
    }

  

    $(".number").on("click", function() {
        
        $('btn1').val(this.rnd1);
        $('btn2').val(this.rnd2);
        $('btn3').val(this.rnd3);
        $('btn4').val(this.rnd4);
        console.log(this);
      initializeGame();

      var entry = parseInt(this.value);
      console.log(entry);
      console.log(this);

      
      // initializeGame();

        // $("#random").html( "number: " + this.value);
        
        
      // }
    });
  
    
  });


  

  