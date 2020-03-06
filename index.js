console.log("Welcome to Rock Paper Scissors");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
   
});

readline.question("Please choose rock, paper or scissors: " , function(response) {
if ((response==="rock") || (response==="paper") || (response==="scissors"))
{
// create random choice between 0 to 2
console.log("The Player Choice is: "+ response);
const computerRandom = Math.floor(Math.random() * 3);  
const choices= ["rock","paper","scissors"];
let choice=0;
if (computerRandom===0) { choice= choices[0]; console.log("The Computer Choice is: rock");}
if (computerRandom===1) { choice= choices[1]; console.log("The Computer Choice is: paper");}
if (computerRandom===2) { choice= choices[2]; console.log("The Computer Choice is: scissors");}  



if (response === "rock")
{
if (choice==="rock"){ console.log("Equal")};
if (choice==="paper") { console.log("Sorry, Computer is the winner")};
if(choice==="scissors") { console.log("Congratulations, You are the winner")};
}


if ( response === "paper")
{
if (choice==="rock"){ console.log("Congratulations, You are the winner")};
if (choice==="paper") { console.log("Equal")};
if (choice==="scissors") { console.log("Sorry, Computer is the winner")};
}


if ( response === "scissors")
{
if (choice==="rock"){ console.log("Sorry, Computer is the winner")};
if (choice==="paper") { console.log("Congratulations, You are the winner")};
if (choice==="scissors") { console.log("Equal")};
}
}







//console.log(response);



if ((response!="rock") && (response!="paper") && (response!="scissors")) 
    { 
        console.log("you have made an invalid choice, try again and pick up rock, paper or scissors.");
}

readline.close();






});
