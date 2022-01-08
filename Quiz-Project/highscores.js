//assigning variables
let highscores = JSON.parse(localStorage.getItem("highscores"));  
const main_div = document.querySelector("#main-div"); 
const scores_div = document.querySelector("#scores-div"); 
const cls_btn = document.querySelector("#clear-scores-btn"); 

//functions
function assign_scores(highscores){ 
    scores_div.innerHTML = ""; 
    highscores.map((e,index)=>{
        let new_score = document.createElement("p");
        new_score.innerHTML = (index+1).toString() + ". " +  e[0]; 
        scores_div.appendChild(new_score);
    })   
}


// main execution
assign_scores(highscores);
cls_btn.onclick=()=>{ 
    localStorage.setItem("highscores",JSON.stringify([]));   
    highscores = JSON.parse(localStorage.getItem("highscores"));  
    assign_scores(highscores); 
}