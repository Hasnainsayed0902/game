let boxes = document.querySelectorAll(".box");
let resBtn=document.querySelector(".reset button");
let msg = document.querySelector(".winmsg");
let trun0= true;
const winPatrn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const restartGame =()=>{
    trun0=true;
    enablebox();
    msg.classList.add("hide");
}
const resetGame =()=>{
    trun0=true;
    enablebox();
    msg.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trun0){
            box.innerText='0';
            trun0=false;
        }
        else{
            box.innerText='x';
            trun0=true;
        }
        box.disabled=true;

        checkwinner();
    })
})

const disablebox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}



const winmsg=(winner)=>{
    msg.innerText=`congrats ${winner} has won the match `;
    msg.classList.remove("hide")
    disablebox();
}
const checkwinner=()=>{
    for (let patrn of winPatrn){
        let ptn1= boxes[patrn[0]].innerText;
        let ptn2= boxes[patrn[1]].innerText;
        let ptn3= boxes[patrn[2]].innerText;

        if(ptn1 != "" && ptn2 != "" &&ptn3 != ""){
            if (ptn1 == ptn2 && ptn2 == ptn3){
                winmsg(ptn1);
            }
        }
    }
}

resBtn.addEventListener("click",resetGame);