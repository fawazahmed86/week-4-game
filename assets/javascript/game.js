//pseudocode
// A game has to be made where different crystals are displayed, each encapsulating a random number.
// Computer also generates a random number which is diplayed to the user as the target score.
// Whenever a crystal clicked, the random number associated with it is added to the user score.
// Counters of wins and losses are displayed to the user.



$(document).ready(function() {
  var rndResult  =0;
  var rnd1;
  var rnd2;
  var rnd3;
  var rnd4;
  var score = 0;
  var entry;
  var wins = 0;
  var loss = 0;

// function game(){
//   score += entry
// }
function winGame() {
  if (score === rndResult) {
    wins++;
    $("#wins").html( "Wins = " + wins);
    $("#results").html( "You Won");
    // alert("Congratulations, You won the Game!");
    initializeGame();
  };
}

function lossGame() {
  if (score > rndResult){
    loss++;
    $("#loss").html( "Loss = " + loss);
    $("#results").html( "You Lost");
    // alert("You have Lost!");
    initializeGame();
  };
}



function initializeGame() {
  console.log(" I have intialized the game")
  
  rnd1 = Math.floor(Math.random() * 9 + 1);
  rnd2 = Math.floor(Math.random() * 9 + 1);
  rnd3 = Math.floor(Math.random() * 9 + 1);
  rnd4 = 1;
  rndResult = Math.floor(Math.random() * 80 + 25);
  $("#targetscore").html( "Computer Score: " + rndResult);
  $("#userscore").html( "Score: 0");
  score = 0;
}

initializeGame()

  

    $(".number").on("click", function() {
      console.log("I have pressed a buton and my score is" + score)
      console.log("Computer score is" + rndResult)
      
        
  
  
      entry = this.value;
  
          if (entry ==="rnd1") {
            score += rnd1;
            $("#userscore").html( "Score: " + score);
            console.log(score);
          } 
          if (entry ==="rnd2") {
            score += rnd2;
            $("#userscore").html( "Score: " + score);
            console.log(score);
          } 
          if (entry ==="rnd3") {
            score += rnd3;
            $("#userscore").html( "Score: " + score);
            console.log(score);
          } 
          if (entry ==="rnd4") {
            score += rnd4;
            $("#userscore").html( "Score: " + score);
            console.log(score);
          } 
      
      lossGame();
      winGame();
    
    });
     
  });


    

      
      // initializeGame();

        // $("#random").html( "number: " + this.value);
        
        
      // }

  
  


  

  