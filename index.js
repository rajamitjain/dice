
function diceRoll(){
  var no1=Math.floor(Math.random()*6)+1;
  var no2=Math.floor(Math.random()*6)+1;
  var img1 = "images/dice"+no1+".png";
  var img2 = "images/dice"+no2+".png";
    document.querySelector(".d1 h3").innerHTML="Player 1 : "+ no1;
    document.querySelector(".d2 h3").innerHTML="Player 2 : "+ no2;
  document.querySelector("img.player1").setAttribute("src",img1);
  document.querySelector("img.player2").setAttribute("src",img2);
  if (no1>no2){
    document.querySelector("h1").innerHTML="🚩  Player 1 Wins !";

  }
  else if (no1<no2){
    document.querySelector("h1").innerHTML="Player 2 Wins !  🚩";

  }
  else{
    document.querySelector("h1").innerHTML="Tie!";
  }
}
