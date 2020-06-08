document.addEventListener('DOMContentLoaded', myParent);
function myParent(){
//the target aka #the-bird
const bird = document.querySelector("#the-bird");

//adding event listeners
bird.addEventListener ('click', addScore);
bird.addEventListener ('click', nextPosition);

//addScore function
function addScore(ev) {
const score = document.querySelector("#score-goal").innerHTML; //content of the current #score-goal from HTML <body>
const addScore = document.querySelector("#score-goal");  //the addscore should totaling up the final innerHTML
let count = Number(score);   //making the existing #score-goal an actual number value
addScore.innerHTML = count + 1; 
return addScore;
}

//a helper function to get a random number
 const getRandomNum = (num) => {   
 return Math.floor(Math.random() * Math.floor(num));
}
//moving the duck
function nextPosition (ev){
const w = window.innerWidth;
const h = window.innerHeight;
bird.style.top = getRandomNum(w) + "px";
bird.style.left = getRandomNum(h) + "px";
};
}

