/*
const YOUTUBE_API_KEY = 'AIzaSyCDB3M78P11OokQ01YEaxED6xq3RQ_M0lE';
const searchTerms = ["urdu%20song","korean%20song", "russian%20song", "georgian%20song", "spanish%20song", "arabic%20song"];

const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${YOUTUBE_API_KEY}`;
fetch(url)
  .then(response => response.json())
  .then(data => {
    document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
});
*/
let clicked = false;
const array = ["Polish","Korean","Georgian","Spanish","Arabic","Russian","Ukranian","Greek","English"];

const language = ["Polish","korean","georgian","spanish","arabic","russian","ukranian","greek"];
const languageSelect =language[Math.floor(Math.random() * (language.length-1))];
const number = [1,2,3,4];
const numberSelect = number[Math.floor(Math.random() * (number.length-1))];

let start = document.querySelector("#start");
start.addEventListener('click', function(event){
  if (clicked == false){
 event.preventDefault();


let source = document.querySelector("#source");

source.setAttribute("src", "russian1.mp4");
video.appendChild(source);
section.appendChild(video);

let divBtn = document.createElement("div");
divBtn.id = "container";
document.body.appendChild(divBtn);

for(let i =0;i<9;i++){
let value = array[i];
let btn = document.createElement("button");
//btn.innerHTML = "Submit";
btn.innerText = value;
btn.type = "submit";
btn.name = "btn"+i;
btn.className="btn"+i;
console.log(btn.name);
divBtn.appendChild(btn);
}
  
clicked = true;
}

});


btn0.addEventListener("click", function() {

});
btn1.addEventListener("click", function() {

});
btn2.addEventListener("click", function() {

});
btn3.addEventListener("click", function() {

});
btn4.addEventListener("click", function() {

});
btn5.addEventListener("click", function() {

});

btn6.addEventListener("click", function() {

});

btn7.addEventListener("click", function() {

});


btn6.addEventListener("click", function() {

});