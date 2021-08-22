var readlineSync=require("readline-sync");
var userName=readlineSync.question("Please enter your name ");
var userScore=0;

console.log("Welcome "+userName+" let's play a quiz on how well do you know me");


//Play function

function play(question,answer){
  var userAnswer=readlineSync.question("Enter your answer from the given options: ");
  if(userAnswer==answer){
    console.log("Yay! right answer!");
    userScore=userScore+1;
  }else{
    console.log("Sorry! wrong answer!");
    //userScore=userScore-1;
  }

  console.log("current score: ",userScore);
  console.log("--------------------");

}

questionOne = {
  question: "Who is my favorite superhero? ",
  option1: "1. batman",
  option2: "2. superman",
  option3: "3. ironman",
  option4: "4. thor",
  answer: "ironman"
}

questionTwo = {
  question: "Which is my favorite colour? ",
  option1: "1. red",
  option2: "2. yellow",
  option3: "3. green",
  option4: "4. blue",
  answer: "blue"
}

questionThree = {
  question: "Which is my favorite season? ",
  option1: "1. winter",
  option2: "2. rain",
  option3: "3. summer",
  option4: "4. autumn",
  answer: "winter"
}

questionFour = {
  question: "Which is my favorite food? ",
  option1: "1. pizza",
  option2: "2. biryani",
  option3: "3. pasta",
  option4: "4. burger",
  answer: "biryani"
}

questionFive = {
  question: "Which is my dream company? ",
  option1: "1. google",
  option2: "2. facebook",
  option3: "3. tcs",
  option4: "4. amazon",
  answer: "google"
}

questionSix = {
  question: "Which is my favorite sport? ",
  option1: "1. cricket",
  option2: "2. basketball",
  option3: "3. hockey",
  option4: "4. football",
  answer: "football"
}

//Array of objects
var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix];


//loop 
for(var i=0; i<questions.length; i++){
  var currentQuestion=questions[i].question;
  console.log(currentQuestion)
  console.log(questions[i].option1);
  console.log(questions[i].option2);
  console.log(questions[i].option3);
  console.log(questions[i].option4);
  play(currentQuestion,questions[i].answer)
  
}

console.log("Congrats "+userName+"! you scored: ",userScore);








