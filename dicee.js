// for first image
var randomnumber1=Math.floor(Math.random()*6)+1;

randomDiceImage="dice"+randomnumber1+".png";  // dice1.png-----dice6.png

var randomimagesource="images/"+randomDiceImage;  // images/dice1.png---dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

// for second image 
var randomnumber2=Math.floor(Math.random()*6)+1;

randomDiceImage2="dice"+randomnumber2+".png";  // dice1.png-----dice6.png

var randomimagesource2="images/"+randomDiceImage2;  // images/dice1.png---dice6.png

var image1=document.querySelectorAll("img")[1];

image1.setAttribute("src",randomimagesource2);

// title
if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML=" 🚩 Player 1 win";
}
else if(randomnumber2 > randomnumber1)
{
    document.querySelector("h1").innerHTML="Player 2 win 🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}