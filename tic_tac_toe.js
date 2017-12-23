let count = 0;
let xMoves = [];
let oMoves = [];

let winningConditions =
[[1,2,3],[4,5,6],[7,8,9],[1,4,7],
[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

const drawXorO = function(){
  document.getElementById("won").innerText = "O is thinking...";
  if(count%2==0){
    document.getElementById("won").innerText = "X is thinking...";
    count++;
    return 'O';
  }
  count++;
  return 'X';
}

const insertXOrO = function(id){
  if(count%2==0){
    oMoves.push(id);
  } else {
    xMoves.push(id);
  }

  document.getElementById(id).innerText=drawXorO();
  document.getElementById(id).disabled=true;
  if(count==9){
    document.getElementById("won").innerText = "Oops! Match Drawn...";
    disableMoves();
  }

  hasWon(oMoves,winningConditions,'O');
  hasWon(xMoves,winningConditions,'X');
};

const disableMoves = function() {
  for (var i = 1; i <= 9; i++) {
    document.getElementById(i).disabled=true;
  }
};

const hasWon = function(moves,winningConditions,symbol){
  for (var i = 0; i < winningConditions.length; i++) {
    if(isSubset(moves,winningConditions[i])){
      document.getElementById("won").innerText =  symbol+" Won the Game...";
      disableMoves();
    }
  }
};

const isSubset = function(firstList,secondList){
  for(var index = 0; index < secondList.length; index++) {
    if(!firstList.includes(secondList[index])){
      return false;
    }
  }
  return true;
}
