let clicked = false;
const array = ["Polish","Korean","Georgian","Spanish","Arabic","Russian","Ukrainian","Greek","English"];
let btn=[];
const language = ["polish","korean","georgian","spanish","arabic","russian","ukrainian","greek"];
const number = ["1","2","3","4"];
let combo=[];
for(let i=0;i<8;i++){
  for(let j=0;j<4;j++){
    combo.push(language[i]+number[j]);
  }
}
let randomNumber;
let song;
let start = document.querySelector("#start");
let video;
let source;
start.addEventListener('click', function(event){
  if (clicked == false){
 event.preventDefault();
 randomNumber= Math.floor(Math.random() * (combo.length-1));
song= combo[randomNumber];

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
  




btn[0].addEventListener("click", function() {
  if(combo[randomNumber].includes("polish")){
    alert("correct");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
     
      
      console.log(song);
      source.setAttribute("src", song+".mp4");
      video.load();
  }
  else{
    alert("wrong");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
  }

});




btn[1].addEventListener("click", function() {
  if(combo[randomNumber].includes("korean")){
    alert("correct");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
  }
  else{
    alert("wrong");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
    
      source.setAttribute("src", song+".mp4");
      video.load();
  }
  
});



btn[2].addEventListener("click", function() {
  if(combo[randomNumber].includes("georgian")){
    alert("correct");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
     
      source.setAttribute("src", song+".mp4");
      video.load();
  }
  else{
    alert("wrong");
    combo.splice(randomNumber,1);
      randomNumber= Math.floor(Math.random() * (combo.length-1));
      song= combo[randomNumber];
     
      source.setAttribute("src", song+".mp4");
      video.load();
  }

    
 
});



btn[3].addEventListener("click", function() {
  if(combo[randomNumber].includes("spanish")){
    alert("correct");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
    
      source.setAttribute("src", song+".mp4");
      video.load();
  }
  else{
    alert("wrong");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
  }
  
});


btn[4].addEventListener("click", function() {
  if(combo[randomNumber].includes("arabic")){
    alert("correct");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
  }
  else{
    alert("wrong");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
  }
 
});



btn[5].addEventListener("click", function() {
  if(combo[randomNumber].includes("russian")){
    alert("correct");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
  }
  else{
    alert("wrong");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
  }

});


btn[6].addEventListener("click", function() {
  if(combo[randomNumber].includes("ukrainian")){
    alert("correct");
    combo.splice(randomNumber,1);
      randomNumber= Math.floor(Math.random() * (combo.length-1));
      song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
  }
  else{
    alert("wrong");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
  }
 
});


btn[7].addEventListener("click", function() {
  if(combo[randomNumber].includes("greek")){
    alert("correct");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
  }
  else{
    alert("wrong");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      source.setAttribute("src", song+".mp4");
      video.load();
  }

});








clicked = true;
}

});