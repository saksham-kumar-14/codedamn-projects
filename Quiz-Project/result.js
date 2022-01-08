// assigning variables
const submit_btn = document.querySelector("#submit");
const input = document.querySelector("#name"); 
const result = document.querySelector("#result"); 

// functions
function add_score(new_record, new_scores){
    let result = [];
    let done = false; 
    for(let i=0;i<new_scores.length;i++){
        if(!done){if(new_scores[i][1] > new_record[1]){
            result.push(new_record); 
            done = true; 
        }}
        result.push(new_scores[i]); 
    }
    if(!done){
        result.push(new_record); 
    }
    return result; 
}

function generate_result(){
    const correct_questions = parseInt(localStorage.getItem("score"));
    const time = parseInt(localStorage.getItem("time"));
    const questions = parseInt(localStorage.getItem("questions"));  
    
    let score = time + ((questions-correct_questions)*10);
    result.innerHTML = "Your score is : " + score; 
    return score;  
}

function set_score(input, score){ 
    let new_scores = JSON.parse(localStorage.getItem("highscores")); 
    new_scores = add_score([input.value+" - "+ score.toString(), score], new_scores); 
    localStorage.setItem("highscores", JSON.stringify(new_scores));
    location.href = "./highscores.html"; 
}

// main execution
const score = generate_result();
submit_btn.onclick=()=>{
    set_score(input, score);
}