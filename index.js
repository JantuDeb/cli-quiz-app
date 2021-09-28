const readLineSync = require("readline-sync");
  const chalk = require('chalk');
  const log = console.log;
  var userName = readLineSync.question("What's your Name?")
  console.log("Welcome "+userName)
  console.log("Choose correct option a, b or c")
  let score = 0
  var questions= [
    {
    ques:"In what type of matter are atoms most tightly packed? \n   a. Gas \n   b. Solids \n   c. Lequid \n --> ", 
    ans: "b. Solids"}, 
    
    {ques:"What is the hottest planet in the solar system? \n   a. Jupiter \n   b. Earth \n   c. Venus \n -->", ans:"c. Venus"}, 
    
    {ques:"What is the opposite of matter?   \n  a. Matter    \n  b. Energy  \n  c. Antimatter \n -->", ans:"c. Antimatter"},
    
    {ques:"Which of Newton’s Laws states that ‘for every action, there is an equal and opposite reaction?   \n  a. First law of motion   \n  b. Second law of motion  \n  c. Third law of motion \n -->", ans:"c. Third law of motion"},
    
    {ques:"What is the nearest planet to the sun?    \n  a. Mercury    \n  b. Mars  \n  c. Venus \n -->", ans:"a. Mercury"},
    
    {ques:"What color is your blood when it’s inside your body?    \n  a. Green    \n  b. Red  \n  c. White \n -->", ans:"b. Red,"},
    
    {ques:"Is Pluto a planet? \n  a. No    \n  b. Yes  \n -->", ans:"a. No"},
    
    ]
// data of high score
var highScores = [
  {
    name: "Tanay",
    score: 6,
  },

  {
    name: "Jantu",
    score: 5,
  },
]


function playQuiz(ques, ans) {
  var answer = readLineSync.question(ques);
  if(answer.charAt(0)===ans.charAt(0)){
   log(chalk.blue("Great! you did it right"))
    score++
   }else{
    log(chalk.red("Opps! you did it wrong"))
   }
    console.log("Your current score: ", score);
}

function showScore(){
  if(score>6){
  log(chalk.green("Congratulation, you scored "+ score+ ". You are a high scorer."))
}else{
   log(chalk.green("Congratulation, you scored "+ score+". Try again, you can do it better." ))
   highScores.map(score => console.log(score.name, " : ", score.score))
}
}

questions.forEach(question=>{
 playQuiz(question.ques, question.ans)
})
showScore()