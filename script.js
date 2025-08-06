

let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay =document.getElementById('masterplay');
let progressbar =document.getElementById('progressbar');
let gif =document.getElementById('gif');
let songItem =Array.from(document.getElementsByClassName('songItem'))
let song=[
    {songName:"salame-e-ishq", filePath:"song/1.mp3" , coverpath: "covers/1.jpg"},
    {songName:"hello", filePath:"song/2.mp3" , coverpath: "covers/2.jpg"},
    {songName:"sadadawd", filePath:"song/3.mp3" , coverpath: "covers/3.jpg"},
    {songName:"ddwadwa", filePath:"song/4.mp3" , coverpath: "covers/4.jpg"},
    {songName:"dad", filePath:"song/5.mp3" , coverpath: "covers/5.jpg"},
    {songName:"wadawd", filePath:"song/6.mp3" , coverpath: "covers/6.jpg"}
]  

songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src =song[i].coverpath;
     element.getElementsByClassName("songName")[0].innerText =song[i].songName;
});

//handle play and pause
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=0.4;


    }else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)

    progressbar.value = progress;
         
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=((progressbar.value*audioElement.duration)/100);
})

const makeAllPlay= ()=>{
    
     Array.from(document.getElementsByClassName('songtemp')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
     })
}
Array.from(document.getElementsByClassName('songtemp')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlay();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=9){
        songIndex=0;
    }else{
        songIndex-=1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})