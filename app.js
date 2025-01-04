let boxes = document.querySelectorAll(".box");
let msgp = document.querySelector(".msg p");
let msg = document.querySelector(".msg");
let restartBtn= document.querySelector(".restartbtn");
let resBtn = document.querySelector(".resetbtn");
let turn0 = true;

let winpatrn =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const winmsg =(winner)=>{
    msgp.innerText= `congrates ${winner} is the  winner`;
    msg.classList.remove("hide");
} 
const drawGame=()=>{
    msgp.innerText="The match is draw ";
    msg.classList.remove("hide");
}

const resGame = () => {
    trun0 = true;
    enablebox();
}
const restartGame = () => {
    trun0 = true;
    enablebox();
    msg.classList.add("hide");
}
const disablebox = ()=>{
    for (let box of boxes){
        box.disabled= true;
    }
}
const enablebox = ()=>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}
for(let box of boxes){
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText='-/';
            box.style.color="silver";
            turn0 = false;
        }else{
            box.innerText='X';
            box.style.color="yellow";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
}

const checkwinner =()=>{
    for (patrn of winpatrn){
        let ptn1 = boxes[patrn[0]].innerText;
        let ptn2 = boxes[patrn[1]].innerText;
        let ptn3 = boxes[patrn[2]].innerText;

        if (ptn1 !="" && ptn2 !="" && ptn3 !=""){
            if(ptn1==ptn2 && ptn2==ptn3){
                winmsg(ptn1);
                disablebox();
                return;
            }
        }
    }
    if ([...boxes].every(box => box.innerText !== "")) {
        drawGame();
    }
};
restartBtn.addEventListener("click",restartGame);
resBtn.addEventListener("click",resGame)