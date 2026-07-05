const giftScreen = document.getElementById("gift-screen");
const envelopeScreen = document.getElementById("envelope-screen");
const giftBox = document.getElementById("giftBox");

giftBox.addEventListener("click", openGift);

function openGift(){

    giftBox.classList.add("open");

    createSparkles();

    setTimeout(()=>{

        giftScreen.classList.remove("active");
        giftScreen.classList.add("hide");

        envelopeScreen.classList.add("active");

    },1000);

}

function createSparkles(){

    const icons=["✨","⭐","🤍"];

    for(let i=0;i<18;i++){

        const s=document.createElement("div");

        s.className="sparkle";

        s.innerHTML=
        icons[
        Math.floor(Math.random()*icons.length)];

        s.style.left=
        (Math.random()*200-100)+"px";

        s.style.top=
        (Math.random()*200-100)+"px";

        s.style.setProperty(
        "--x",
        (Math.random()*300-150)+"px"
        );

        s.style.setProperty(
        "--y",
        (Math.random()*300-150)+"px"
        );

        giftBox.appendChild(s);

        setTimeout(()=>{

            s.remove();

        },1200);

    }

}
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.add("open");

    });

}

if (letter) {

    letter.addEventListener("click", (e) => {

        e.stopPropagation();

        document
            .getElementById("envelope-screen")
            .classList.remove("active");

        document
            .getElementById("letter-screen")
            .classList.add("active");

        startTyping();

    });

}
const message =
`In this vast tapestry of existence our paths intertwined and my life had totally changed.
With you, world feels lighter 💗. 
Words cannot adequately express the depth of love and gratitude that I hold for you.
Thank you for being the incredible person that you are.
💗🫂🌏`;

function startTyping(){

const typing=document.getElementById("typing");
const cursor=document.getElementById("cursor");
const btn=document.getElementById("continueBtn");

typing.innerHTML="";
btn.style.display="none";

let i=0;

function type(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(type,35);

}else{

cursor.style.display="none";

btn.style.display="inline-block";

}

}

type();

}
/* Continue button */

document
.getElementById("continueBtn")
.addEventListener("click",()=>{

document
.getElementById("letter-screen")
.classList.remove("active");

document
.getElementById("book-screen")
.classList.add("active");

});

const pages=document.querySelectorAll(".page");

let currentPage=0;

const pageNo=document.getElementById("pageNumber");

function showPage(index){

pages.forEach(p=>{

p.classList.remove("active");
p.classList.remove("exit");

});

pages[index].classList.add("active");

pageNo.innerHTML=
(index+1)+" / "+pages.length;

}

document
.getElementById("nextPage")
.onclick=function(){

if(currentPage<pages.length-1){

pages[currentPage]
.classList.add("exit");

currentPage++;

showPage(currentPage);

}

}

document
.getElementById("prevPage")
.onclick=function(){

if(currentPage>0){

currentPage--;

showPage(currentPage);

}

}
let startX = 0;

const book = document.querySelector(".book");

book.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

book.addEventListener("touchend", e => {

    let endX = e.changedTouches[0].clientX;

    if(endX - startX > 60){

        document.getElementById("prevPage").click();

    }

    if(startX - endX > 60){

        document.getElementById("nextPage").click();

    }

});
/* ==========================
      SIMPLE CONFETTI
========================== */

const confettiCanvas =
document.getElementById("confetti");

const ctx =
confettiCanvas.getContext("2d");

confettiCanvas.width =
window.innerWidth;

confettiCanvas.height =
window.innerHeight;

let confetti=[];

function launchConfetti(){

confettiCanvas.style.display="block";

confetti=[];

for(let i=0;i<150;i++){

confetti.push({

x:Math.random()*confettiCanvas.width,

y:-20,

size:5+Math.random()*8,

speed:2+Math.random()*4,

});

}

animateConfetti();

}

function animateConfetti(){

ctx.clearRect(
0,
0,
confettiCanvas.width,
confettiCanvas.height
);

confetti.forEach(c=>{

ctx.fillStyle="#D8BFA9";

ctx.fillRect(
c.x,
c.y,
c.size,
c.size
);

c.y+=c.speed;

});

requestAnimationFrame(
animateConfetti
);

}

/* Last page */

document
.getElementById("nextPage")
.addEventListener("click",()=>{

if(currentPage===pages.length-1){

document
.getElementById("book-screen")
.classList.remove("active");

document
.getElementById("ending-screen")
.classList.add("active");

launchConfetti();

}

});

/* Restart */

document
.getElementById("restartBtn")
.onclick=function(){

location.reload();

}