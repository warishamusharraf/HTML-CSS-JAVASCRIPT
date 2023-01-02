console.log("Welcome To tiktactoe")

let music= new Audio("music.mp3");
let turning= new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let won=false;
let turn="X";
let over=false;

//Function For the Turn
const changeTurn=()=>{
       return turn==="X"?"0":"X"
}

//Function To Check Win 
const CheckWin=()=>{
    let boxtext=document.getElementsByClassName("boxText");
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,40],
        [2,4,6,5,15,-40],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[1]].innerText !="")){
         won=true;
         document.querySelector(".info").innerText= " Congratulations " + boxtext[e[0]].innerText + " Won "
         document.querySelector('.img-box').getElementsByTagName('img')[0].style.width="200px"
         document.querySelector('.line').style.display='block';    
         document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`;


        }
        
      


       
    })

}
// let spanbox=document.getElementsByClassName("boxText");
// let arr=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
    
// ]
// arr.forEach(e=>{
//    console.log(spanbox[e[1]])
   
//    if(spanbox[e[1]]!=''){
//     document.querySelector('.img-box').getElementsByTagName('img')[0].style.width="200px"
   
     
//    }
   
   
   
   
   
    
// })





//Game Logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn = changeTurn();
            turning.play();
            CheckWin();
            if(!won){
                document.getElementsByClassName('info')[0].innerText="Turn Of " + turn;
            }
           
        }

    })

})


//Reset Button  

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxText')
    Array.from(boxtext).forEach(element=>{
        element.innerText=''
        document.querySelector('.img-box').getElementsByTagName('img')[0].style.width="0px"
        document.querySelector('.line').style.display='none';    
        won=false
        turn='X'
        document.getElementsByClassName('info')[0].innerText="Turn Of " + turn;
    })

})



