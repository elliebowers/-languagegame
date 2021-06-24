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

const language = ["polish","korean","georgian","spanish","arabic","russian","ukranian","greek"];
let played = [];
const number = [1,2,3,4];
let languageSelect;
let numberSelect;
let answer;
let start = document.querySelector("#start");
start.addEventListener('click', function(event){
  if (clicked == false){
 event.preventDefault();
languageSelect =language[Math.floor(Math.random() * (language.length-1))];
numberSelect = number[Math.floor(Math.random() * (number.length-1))];
answer  = languageSelect +numberSelect;

 let video = document.createElement("video");
 video.id = "video";
 video.class="video";
 video.width = "320";
 video.height = "240";
 video.control = true;
 video.autoplay = true;
let source = document.createElement("source");
source.id="source";
source.src="";
source.type="video/mp4";

played.push(answer);
source.setAttribute("src", answer+".mp4");
video.appendChild(source);
document.body.appendChild(video);

let divBtn = document.createElement("div");
divBtn.id = "container";
document.body.appendChild(divBtn);

for(let i =0;i<9;i++){
let value = array[i];
let btnName = language[i];
let btn = document.createElement("button");
//btn.innerHTML = "Submit";
btn.innerText = value;
btn.type = "submit";
btn.name = "btn"+i;
btn.className=btnName;

divBtn.appendChild(btn);
}
  
clicked = true;
}

});


polish.addEventListener("click", function() {
  while(played.includes(answer)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    answer  = languageSelect +numberSelect;
    }

});
korean.addEventListener("click", function() {
  while(played.includes(answer)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    answer = languageSelect +numberSelect;
    }
});
georgian.addEventListener("click", function() {
  while(played.includes(answer)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    answer = languageSelect +numberSelect;
    }
});
spanish.addEventListener("click", function() {
  while(played.includes(answer)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    answer  = languageSelect +numberSelect;
    }
});
arabic.addEventListener("click", function() {
  while(played.includes(answer)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    answer  = languageSelect +numberSelect;
    }
});
russian.addEventListener("click", function() {
  while(played.includes(answer)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    answer  = languageSelect +numberSelect;
    }
});

ukranian.addEventListener("click", function() {
  while(played.includes(answer)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    answer  = languageSelect +numberSelect;
    }
});

greek.addEventListener("click", function() {
  while(played.includes(answer)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    answer  = languageSelect +numberSelect;
    }
});

