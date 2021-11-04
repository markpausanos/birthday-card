// References to DOM elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

const paper1 = document.querySelector('#p1')
const paper2 = document.querySelector('#p2')
const cake = document.querySelector("#cake")

// Event listeners
prevBtn.addEventListener("click", cardOpen);
nextBtn.addEventListener("click", cardClose);

document.addEventListener("DOMContentLoaded", function() {
    playAudio("main_theme");
});


function openCard() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeCard() {
    
    book.style.transform = "translateX(0%)";
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function cardClose() {
    
    openCard();
    cake.classList.add("aud");
    paper1.classList.add("flipped");
    nextBtn.style.visibility ="hidden";
    prevBtn.style.visibility = "visible";
    prevBtn.style.transition = "2s";
    paper1.style.zIndex = 1;
    
}

function cardOpen() {
    closeCard();
    paper1.classList.remove("flipped");
    prevBtn.style.visibility = "hidden";
    prevBtn.style.transition = "0s";
    nextBtn.style.visibility ="visible";
    paper1.style.zIndex = 3;
          
}

function playAudio(x){
    maintheme = document.getElementById("main_theme")
    audio = document.getElementById(x)
    origvolume = maintheme.volume;
    if(audio === maintheme){
        maintheme.vol = 1;
        audio.play();
        return;
    }
    maintheme.volume = 0.3;
    audio.play();
    audio.onended = function(){
        tempvol = 0.3
        var interval = setInterval(function(){
            tempvol += 0.05;
            if(tempvol <= 1){
                maintheme.volume = tempvol;
            }
            if(tempvol > origvolume || tempvol >= 1 ){
                clearInterval(interval)
            }
        }, 1000);
    }
}

function noshake(x){
    const removeshake = document.querySelector(x);
    removeshake.classList.add("noshake");
}

