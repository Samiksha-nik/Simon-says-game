let gameseq=[];
let userseq=[];

let btns=["red","green","yellow","blue"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random btn to choose
    let randomIdx = Math.floor(Math.random() * btns.length); // 0 to 3
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameseq.push(randomColor);
    console.log(gameseq);
    btnFlash(randomBtn);
}

function checkAns(idx){

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`game over.Your score was <b>${level}</b> <br>start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id")
    userseq.push(userColor);
    
    checkAns(userseq.length-1);

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}