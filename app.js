//Cache clickable stuff.
var r_div = document.getElementById("r");
var p_div = document.getElementById("p");
var s_div = document.getElementById("s");

//Cache scores
var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var result_div = document.querySelector(".result > p")


function game(decision){
  var user_choice = decision;
  var computer_choice = compChoice();
  determineWin(user_choice, computer_choice);
}


r_div.addEventListener('click', function(){
  game("r");
});
p_div.addEventListener("click", function(){
  game("p")
});
s_div.addEventListener("click", function(){
  game("s");
});


function compChoice(){
  choices = ['r', 'p', 's'];
  return choices[Math.floor(Math.random()*3)];
}

function determineWin(user_choice, computer_choice){
  var combination = user_choice + computer_choice;
  switch(combination){
    case 'rr':
      tie(user_choice, computer_choice);
      break;
    case 'pp':
      tie(user_choice, computer_choice);
      break;
    case 'ss':
      tie(user_choice, computer_choice);
      break;
    case 'rs':
      win(user_choice, computer_choice);
      break;
    case 'pr':
      win(user_choice, computer_choice);
      break;
    case 'sp':
      win(user_choice, computer_choice);
      break;
    case 'rp':
      loose(user_choice, computer_choice);
      break;
    case 'ps':
      loose(user_choice, computer_choice);
      break;
    case 'sr':
      loose(user_choice, computer_choice);
      break;
  }
}

var get_div = {'r' : r_div, 's': s_div, 'p' : p_div};

function win(user_choice, computer_choice){
  //Updates score
  userScore++;
  userScore_span.innerHTML = userScore;

  //Glow effect
  get_div[user_choice].classList.add('green-glow');
  setTimeout(function(){
    get_div[user_choice].classList.remove('green-glow');
  }, 1000);

  //Updates text
  result_div.innerHTML = "Win!";

  //Checks for game reset
  if(userScore == 5 || computerScore == 5){
    gameReset();
  }

}

function loose(user_choice, computer_choice){
  //Updates score
  computerScore++;
  computerScore_span.innerHTML = computerScore;

  //Glow effect
  get_div[user_choice].classList.add('red-glow');
  setTimeout(function(){
    get_div[user_choice].classList.remove('red-glow');
  }, 1000);

  //Updates text
  result_div.innerHTML = "Loose!";

  //Checks for game reset
  if(userScore == 5 || computerScore == 5){
    gameReset();
  }
}

function tie(user_choice, computer_choice){
  //Glow effect
  get_div[user_choice].classList.add('grey-glow');
  setTimeout(function(){
    get_div[user_choice].classList.remove('grey-glow');
  }, 1000);

  //Update text
  result_div.innerHTML = "Tie!";
}

function gameReset(){
  userScore = 0;
  computerScore = 0;
  setTimeout(function(){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
  }, 500);
}
