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
var btn=[];
const language = ["polish","korean","georgian","spanish","arabic","russian","ukranian","greek"];
let played = [];
const number = [1,2,3,4];
let languageSelect;
let numberSelect;
let song;
let start = document.querySelector("#start");

let video;
let source;
start.addEventListener('click', function(event){
  if (clicked == false){
 event.preventDefault();
languageSelect =language[Math.floor(Math.random() * (language.length-1))];
numberSelect = number[Math.floor(Math.random() * (number.length-1))];
song  = languageSelect +numberSelect;

 video = document.createElement("video");
 video.id = "video";
 video.class="video";
 video.width = "320";
 video.height = "240";
 video.control = true;
 video.autoplay = true;
source = document.createElement("source");
source.id="source";
source.src="";
source.type="video/mp4";

played.push(song);
source.setAttribute("src", song+".mp4");
video.appendChild(source);
document.body.appendChild(video);

let divBtn = document.createElement("div");
divBtn.id = "container";
document.body.appendChild(divBtn);

for(let i =0;i<8;i++){
let value = array[i];
let btnName = language[i];
btn[i] = document.createElement("button");
//btn.innerHTML = "Submit";
btn[i].innerText = value;
btn[i].type = "submit";
btn[i].name = "btn"+i;
btn[i].className=btnName;

divBtn.appendChild(btn[i]);
}
  
clicked = true;
}

});



btn[0].addEventListener("click", function() {
  if(languageSelect=="polish"){
    alert("correct");
  }
  while(played.includes(song)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    song  = languageSelect +numberSelect;
    }
    source.setAttribute("src", song+".mp4");
});




btn[1].addEventListener("click", function() {
  if(languageSelect=="korean"){
    alert("correct");
  }
  while(played.includes(song)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    song  = languageSelect +numberSelect;
    }
    source.setAttribute("src", song+".mp4");
});



btn[2].addEventListener("click", function() {
  if(languageSelect=="georgian"){
    alert("correct");
  }
  while(played.includes(song)){
    
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    song  = languageSelect +numberSelect;
    }
    source.setAttribute("src", song+".mp4");
});



btn[3].addEventListener("click", function() {
  if(languageSelect=="spanish"){
    alert("correct");
  }
  while(played.includes(song)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    song  = languageSelect +numberSelect;
    }
    source.setAttribute("src", song+".mp4");
});


btn[4].addEventListener("click", function() {
  if(languageSelect=="arabic"){
    alert("correct");
  }
  while(played.includes(song)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    song  = languageSelect +numberSelect;
    }
    source.setAttribute("src", song+".mp4");
});



btn[5].addEventListener("click", function() {
  if(languageSelect=="russian"){
    alert("correct");
  }
  while(played.includes(song)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    song  = languageSelect +numberSelect;
    }
    source.setAttribute("src", song+".mp4");
});


btn[6].addEventListener("click", function() {
  if(languageSelect=="ukranian"){
    alert("correct");
  }
  while(played.includes(song)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    song  = languageSelect +numberSelect;
    }
    source.setAttribute("src", song+".mp4");
});


btn[7].addEventListener("click", function() {
  if(languageSelect=="greek"){
    alert("correct");
  }
  while(played.includes(song)){
    languageSelect =language[Math.floor(Math.random() * (language.length-1))];
    numberSelect = number[Math.floor(Math.random() * (number.length-1))];
    song  = languageSelect +numberSelect;
    }
    source.setAttribute("src", song+".mp4");
});

