
function onLoad() {
    //window.localStorage.setItem('bestScore',0);

    resetScore();
    checkJump();
    checkKeyPress();
    checkCol();
    window.score=0;
    window.jumpS=0
}
function resetScore(){
    let input = document.getElementById('score');
    window.score=0;
    input.innerText = "Score: "+ window.score+ " | HighScore: "+window.localStorage.getItem('bestScore');
}

function setScore(){
    console.log(window.score);
    window.score++;
    let input = document.getElementById('score');
    //console.log(window.scoreValue);
    if(window.score>window.localStorage.getItem('bestScore'))input.innerHTML = "Score: <span id='hightScore'>"+ window.score+ "</span> | BestScore: "+window.localStorage.getItem('bestScore');
    else input.innerHTML = "Score: "+ window.score+ " | BestScore: "+window.localStorage.getItem('bestScore');
}


function checkJump(){
    //console.log('checkJump');
    document.body.addEventListener('keydown', event =>{jump(event);});
   // rex.addEventListener("keydown", function(event){jump()});
}

function jump(event){
    window.compteur=0;
    
    //console.log("compteur when start jump: "+ window.compteur);
    if(event.keyCode != 13  && event.key != 'a'){
        //console.log('jump');
        let rex = document.getElementById('rex');
    
        if(rex.classList != "jump"){
            rex.classList.add("jump");
            setTimeout(function () {
                rex.classList.remove("jump");
            },300);
        }
    }
    
   
   

}
function supprJump(){
    //console.log('suppr jump');

    document.getElementById('rex').classList.remove("jump")
}


function checkCollision(){
    setInterval(collision(), 10 );
} 


function checkCol(){
    let compteur = 0;
    setInterval(function(){
        let dinoTop = parseInt(window.getComputedStyle(rex).getPropertyValue("top"));
        let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
        let dinoLeft = parseInt(window.getComputedStyle(rex).getPropertyValue("left"));
      
    
        //console.log("jump:"+ window.jumpS);
    
        if(treeLeft>5 && treeLeft<40 ){
            if(dinoTop> 25){
                if(window.score>window.localStorage.getItem('bestScore')) localStorage.setItem('bestScore', window.score);
                console.log('GAME OVER -- Press Enter to restart');
                let tree = document.getElementById('tree');
                tree.classList.remove('moveLeft');
                window.score=0;
                resetScore();
                let input = document.getElementById('score');
                input.innerHTML = "<span id='gameOver'>GAME OVER</span>";

            }
            else if(window.jumpS==0){
                window.jumpS=1
                setScore();
            }
        }
        else if(dinoTop == 60)window.jumpS=0;
       
       
    },10);
}


function checkKeyPress(){
    document.body.addEventListener('keypress', event =>{command(event);});
}


function command(event){
    //console.log(event.keyCode);
    if(event.keyCode==13){
        let input = document.getElementById('score');
        input.innerText = "Score: "+ window.score+ " | BestScore: "+window.localStorage.getItem('bestScore');
        tree.classList.add('moveLeft');
    } 
    if(event.keyCode==97) tree.classList.remove('moveLeft');
}

window.onload = onLoad;

