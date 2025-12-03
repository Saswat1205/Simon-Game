let gameseq=[];
let userseq=[];
let btns = ["yellow","red","purple","green"];

let started=false;
let level = 0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false){
        console.log("game is started");
        started = true;
        levelup();
    }
    });
    function gameFlash(btn){
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
    function levelup(){
        userseq = [];
        level++;
        h2.innerText = `level ${level}`;
        let randIdx = Math.floor(Math.random()*4);
        let randcolor = btns[randIdx];
        let randBtn = document.querySelector(`.${randcolor}`);
        gameseq.push(randcolor);
        console.log(gameseq);
        /*console.log(randIdx);
        console.log(randcolor);
        console.log(randBtn);*/

        //random button choose//
        gameFlash(randBtn);
    }
    function checkAns(idx){
        
        if(  userseq[idx] == gameseq[idx]){
            if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
            }
        }
        else{
            h2.innerHTML=`Game over! your score was <b>${level}</b> press any key to Start.`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
               document.querySelector("body").style.backgroundColor = "white";
            },150);
            reset();
        }
    }
    function btnPress(){
       // console.log(this);//
        let btn = this;
        userFlash(btn);

        usercolor = btn.getAttribute("id");
        userseq.push(usercolor);
        checkAns(userseq.length-1);

    }
    
    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }
    function reset(){
        started = false;
        gameseq =[];
        userseq = [];
        level = 0;
    }