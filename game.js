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
let start = document.querySelector("#start");
start.addEventListener('click', function(event){
  if (clicked == false){
 event.preventDefault();

let section = document.createElement("section");
let audio= document.createElement("audio");
iframe.className= "audio";
section.appendChild(audio);
document.body.appendChild(section);
let divBtn = document.createElement("div");
divBtn.id = "container";
document.body.appendChild(divBtn);
let array = ["Urdu","Korean","Georgian","Spanish","Arabic","Russian"]
for(let i =0;i<6;i++){
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