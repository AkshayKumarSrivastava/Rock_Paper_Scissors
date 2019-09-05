let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("userscore");
const compscore_span = document.getElementById("compscore");
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

function get_comp_choice(){
    const choice=['r','p','s'];
    const randnum=Math.floor(Math.random()*3);
    return choice[randnum];
}

function convert(letter){
    switch(letter){
        case "r":
            return "Rock";
            break;
        case "p":
            return "Paper";
            break;
        case "s":
            return "Scissor";
            break;            
    }
}


function win(userchoice,compchoice){
    userscore++;
    //console.log("User => "+userscore);
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML=`${convert(userchoice)} Beats ${convert(compchoice)} <br>🔥🔥🔥 YOU WIN 🔥🔥🔥`;
}

function lose(userchoice,compchoice){
    //console.log("computer => "+compscore)
    compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML=`${convert(userchoice)} Loses To ${convert(compchoice)} <br>💩💩💩 YOU LOST 💩💩💩`;
}

function draw(userchoice,compchoice){
   // console.log("DRAWWW");
    //console.log("User => "+userscore);
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML=`Both Choose ${convert(compchoice)} <br>⚖️⚖️⚖️ IT'S A DRAW ⚖️⚖️⚖️`;
}

function game(userchoice){
    //console.log(userchoice);
    //console.log(get_comp_choice());
    const compchoice = get_comp_choice();
    switch(userchoice+compchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,compchoice);
            break;
        case "rp":
        case "ps":
        case "sr":                
            lose(userchoice,compchoice); 
            break;    
        case "rr":
        case "pp":
        case "ss":                
            draw(userchoice,compchoice);
            break;        
    }
}

function main() {
    rock.addEventListener('click', function () {
        // console.log("1");
        game("r");
    })
    paper.addEventListener('click', function () {
        //console.log("2");
        game("p");
    })
    scissor.addEventListener('click', function () {
        //console.log("3");
        game("s");
    })
}

main();