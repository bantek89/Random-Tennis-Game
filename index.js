let player = {
                  points: 0,
                  name: 'First Player'
                }

let opponent = {
                  points: 0,
                  name: 'Second Player'
                }

let  playerScoreArray = [0];
let  opponentScoreArray = [0];

function incrementPlayerScore(player, array){
    let scoresArray = [0, 15, 30, 40, 'A', 'Winner!'];
    let currentScore = scoresArray.indexOf(player.points);
    let newScore = scoresArray[currentScore + 1];
    player.points = newScore;
    console.log(player);
    array.push(player.points);
    console.log(array);
    return player.points;
  }

function updatePlayerResultsTable(array){
  if (array.length > 5){
    array.shift();
  }

  let list = document.getElementById('resultsTableOne');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

array.forEach(function(result){
let listItem = document.createElement('h1');
listItem.appendChild(document.createTextNode(result));
document.getElementById('resultsTableOne').appendChild(listItem);
})
}

function updateOppResultsTable(array){
  if (array.length > 5){
    array.shift();
  }

  let list = document.getElementById('resultsTableTwo');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

array.forEach(function(result){
let listItem = document.createElement('h1');
listItem.appendChild(document.createTextNode(result));
document.getElementById('resultsTableTwo').appendChild(listItem);
})
};


function finalResultsBox(result){
    document.getElementById('finalResultsBox').innerHTML = result;
  }

function updateResultsBox(result){
  document.getElementById('resultsBox').innerHTML = result;
}

function playTheGame(){
  updateResultsBox('<br>');
  finalResultsBox('<br>');

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  if (randomNumber === 1){
    incrementPlayerScore(player, playerScoreArray);
    updateResultsBox('point to Player One');
  }

  if (randomNumber === 2){
    incrementPlayerScore(opponent, opponentScoreArray);
    updateResultsBox('point to Player Two');
  }

  if (randomNumber === 3){
    updateResultsBox('no points scored');
    return;
  }

  if (player.points == 40 && opponent.points == 40 ){
     finalResultsBox('Both players have 40 points, the result of this match is deuce!');
  }

  if (player.points === 'A' && opponent.points === 'A'){
    player.points = 40
    opponent.points = 40
    finalResultsBox('The match is back to deuce!');
  }

  if (player.points == 'Winner!'){
    finalResultsBox(player.name + ' is the winner!');
    resetButton();
  }

  if (opponent.points == 'Winner!'){
    finalResultsBox(opponent.name + ' is the winner!');
    resetButton();
  }

  if (player.points == 'A' && opponent.points !== 40){
    incrementPlayerScore(player, playerScoreArray);
    playerScoreArray.splice(4, 1);
    console.log(playerScoreArray);
    finalResultsBox(player.name + ' is the winner!');
    resetButton();
  }

  if (opponent.points === 'A' && player.points !== 40){
    incrementPlayerScore(opponent, opponentScoreArray);
    opponentScoreArray.splice(4, 1);
    console.log(opponentScoreArray);
    finalResultsBox(opponent.name + ' is the winner!');
    resetButton();
  }

   if (player.points === 'A'){
    opponent.points = 40
    updatePlayerResultsTable(playerScoreArray)
    finalResultsBox(player.name + ' now has advantage');
    return;
  }

  if (opponent.points === 'A'){
    player.points = 40
    updateOppResultsTable(opponentScoreArray)
    finalResultsBox(opponent.name + ' now has advantage');
    return;
  }

  else {
    updateOppResultsTable(opponentScoreArray);
    updatePlayerResultsTable(playerScoreArray);
  }
}


function resetButton() {
  let tennisBall = document.getElementById('ball');
  tennisBall.remove();

let  playAgain = document.createElement('p');
  playAgain.setAttribute('id', 'play');
  playAgain.innerText = "play again";
  console.log(playAgain);
document.getElementById('button').appendChild(playAgain);

document.getElementById('play').addEventListener("mousedown", function(){
  updateResultsBox('<br>');
  finalResultsBox('<br>');

  let resetPlayAgain = document.getElementById('play');
  resetPlayAgain.remove();

  let ballAgain = document.createElement('img');
  ballAgain.setAttribute('id', 'ball');
  ballAgain.setAttribute('src', 'tennis-ball-image.png');
  ballAgain.setAttribute('width', '20%');
  ballAgain.setAttribute('min-width', '50px');
  document.getElementById('button').appendChild(ballAgain);

  playerScoreArray.unshift(0);
  playerScoreArray.splice(1,9)
  console.log(playerScoreArray)
  opponentScoreArray.unshift(0);
  opponentScoreArray.splice(1,9);
  console.log(opponentScoreArray)

  player.points = 0;
  console.log(player)
  opponent.points = 0;
  console.log(opponent)


  document.getElementById('resultsTableOne').innerHTML = '<h1>0</h1>'
  document.getElementById('resultsTableTwo').innerHTML = '<h1>0</h1>'

  document.getElementById('ball').addEventListener('mousedown', function(){
    playTheGame();
    })
  })
}

document.getElementById('ball').addEventListener("mousedown", function() {
  playTheGame();
});
