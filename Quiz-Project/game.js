
//assigning variables
let score = 0; 
const questions = [
{
questionText: "Commonly used data types DO NOT include:",
options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
answer: "3. alerts",
},
{
questionText: "Arrays in JavaScript can be used to store ______.",
options: [
"1. numbers and strings",
"2. other arrays",
"3. booleans",
"4. all of the above",
],
answer: "4. all of the above",
},
{
questionText:
"String values must be enclosed within _____ when being assigned to variables.",
options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
answer: "3. quotes",
},
{
questionText:
"A very useful tool used during development and debugging for printing content to the debugger is:",
options: [
"1. JavaScript",
"2. terminal/bash",
"3. for loops",
"4. console.log",
],
answer: "4. console.log",
},
{
questionText:
"Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
options: ["1. break", "2. stop", "3. halt", "4. exit"],
answer: "1. break",
},
];
let current_question = 0; 
let question = document.querySelector("#question"); 
let op_1 = document.querySelector("#option-1")
let op_2 = document.querySelector("#option-2")
let op_3 = document.querySelector("#option-3")
let op_4 = document.querySelector("#option-4") 
let options = [op_1,op_2,op_3,op_4];
let time = 0;
const info = document.querySelector("#info"); 

//functions
function set_question(current_question,question,questions,options){
    options.map((e)=>{
        e.style.backgroundColor = "#218380"
    })
    question.innerHTML = questions[current_question].questionText;  
    options.map((e, index)=>{
        e.innerHTML = questions[current_question].options[index];
    })
    info.innerHTML = ""; 
}

function increase_time(time){
    setInterval(()=>{
        time += 1; 
        document.querySelector("#time").innerHTML = time; 
    }, 1000)
}


//main execution
window.onload=()=>{
    set_question(current_question,question,questions,options); 
} 
localStorage.setItem("questions", questions.length); 

options.map((e)=>{
    e.onclick=()=>{
        e.style.backgroundColor = "red"; 
        if(e.innerHTML === questions[current_question].answer){
            score += 1;
            info.innerHTML = "Correct"; 
        }
        else{
            info.innerHTML = "Incorrect"; 
        }
        current_question += 1;  
        if(current_question === questions.length){
            setTimeout(() => { 
                localStorage.setItem("score",score);
                localStorage.setItem("time", parseInt(document.querySelector("#time").innerHTML)) 
                location.href = "./result.html"; 
            }, 1000);
        }

        setTimeout(()=>{
            set_question(current_question, question,questions,options)
        }, 1000)

    }
})

increase_time(time); 


