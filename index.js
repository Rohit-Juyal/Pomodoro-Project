const workMinutes = document.getElementById("work-minutes");
const workSeconds = document.getElementById("work-seconds");
const startBtn = document.getElementById("start");

let startTimer = undefined;


function timer() {
    if(workSeconds.innerText != 0) {
        workSeconds.innerText--;
        console.log(workSeconds.innerText);
        console.log(workMinutes.innerText);
    }
    else if (workSeconds.innerText == 0 && workMinutes.innerText != 0) {
        workSeconds.innerText = 59;
        workMinutes.innerText--;
        console.log(workSeconds.innerText);
        console.log(workMinutes.innerText);
    }
    
    if (workMinutes.innerText == 0 && workSeconds.innerText == 0) {
        workMinutes.innerText = 45;
        workSeconds.innerText = "00";
        pauseTimer();
        startBtn.innerHTML = "Start";
    }
}

startBtn.addEventListener("click", () => {
    if(startBtn.innerHTML == "Start") {
        startTimer = setInterval(timer, 1000);
        startBtn.innerHTML = "Pause";
        }
    else {
        pauseTimer();
        startBtn.innerHTML = "Start";
    }
})

function pauseTimer() {
    clearInterval(startTimer);
    startTimer = undefined;
}
    





// Music Player

const title = document.getElementById("title");
const cover = document.getElementById("cover");
const audio = document.getElementById("audio");
const previous = document.getElementById("previous");
const play = document.getElementById("play");
const next = document.getElementById("next");

const songs = ["Alone", "Before I Forget", "Midnight", "Purrple Cat"];

let songIndex = 0;

// loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

let isPlaying = false;

function playSong() {
    isPlaying = true;
    play.querySelector(".fa-solid").classList.remove("fa-play");
    play.querySelector(".fa-solid").classList.add("fa-pause");
    audio.play();
}

function pauseSong() {
    isPlaying = false;
    play.querySelector(".fa-solid").classList.remove("fa-pause");
    play.querySelector(".fa-solid").classList.add("fa-play");
    audio.pause();

}

play.addEventListener("click", () => {
    if(isPlaying) {
        pauseSong();
    }

    else {
        playSong();
    }
})

previous.addEventListener("click", () => {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();

    console.log(songIndex)
})

next.addEventListener("click", () => {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    console.log(songIndex)

    playSong();
})



// hamburger 


document.getElementById("checkbox").addEventListener("click", () => {
    if(document.getElementById("checkbox").checked === true)
    {
        document.querySelector(".docs-container").classList.toggle('shrink');
    }
    else {
        document.querySelector(".docs-container").classList.toggle('shrink');
    }

    console.log("hey")
})


const docs = document.querySelector(".docs");

const logoNewDocBtn = document.getElementById("logo-new-doc");
const logoMyDocsBtn = document.getElementById("logo-my-docs");

logoNewDocBtn.addEventListener("click", () => {
    logoNewDocBtn.classList.add("bg-color");
    logoMyDocsBtn.classList.remove("bg-color");

    docs.innerHTML = `
    <div class="docs-nav">
                    <div class="title-nav"> 
                        <input type="text" id="title" class="title" placeholder="Title...." spellcheck="false">
                    </div>
                    <div class="new-doc-btns">
                        <button id="cancel" class="cancel">Cancel</button>
                        <button id="save" class="save">Save</button>
                    </div>
                </div>

                <div class="new-doc">
                    <textarea name="new-doc-data" id="new-doc-data" class="new-doc-data" spellcheck="false"></textarea>
                </div>
                `
})

logoMyDocsBtn.addEventListener("click", () => {
    logoMyDocsBtn.classList.add("bg-color");
    logoNewDocBtn.classList.remove("bg-color");

    docs.innerHTML = `<div class="docs-nav" id="my-docs-nav">
                            <div class = "title-nav">
                                <span class="title">My Docs</span>
                            </div>
                            <div class="search">
                                <input type="text" class="search-bar" placeholder="Search">
                                <button class="search-btn" id="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <div class="my-docs-container"> 
                            <div class="my-doc">
                            <div class="my-doc-content">
                                <h3 class="my-doc-title">Title of the doc</h3>
                                <div class="my-doc-data">Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here</div>
                                </div>
                                <div class="my-doc-btn">
                                    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>  
                                </div>
                            </div>

                            <div class="my-doc">
                            <div class="my-doc-content">
                                <h3 class="my-doc-title">Title of the doc</h3>
                                <div class="my-doc-data">Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here</div>
                                </div>
                                <div class="my-doc-btn">
                                    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>  
                                </div>
                            </div>


                            <div class="my-doc">
                            <div class="my-doc-content">
                                <h3 class="my-doc-title">Title of the doc</h3>
                                <div class="my-doc-data">Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here</div>
                                </div>
                                <div class="my-doc-btn">
                                    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>  
                                </div>
                            </div>



                            <div class="my-doc">
                            <div class="my-doc-content">
                                <h3 class="my-doc-title">Title of the doc</h3>
                                <div class="my-doc-data">Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here</div>
                                </div>
                                <div class="my-doc-btn">
                                    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>  
                                </div>
                            </div>




                            <div class="my-doc">
                            <div class="my-doc-content">
                                <h3 class="my-doc-title">Title of the doc</h3>
                                <div class="my-doc-data">Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here, Content here</div>
                                </div>
                                <div class="my-doc-btn">
                                    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>  
                                </div>
                            </div>



                           
                        </div>`;


const newDocsContainer = docs.querySelector(".my-docs-container")
const navbar = docs.querySelector(".docs-nav")
                        
newDocsContainer.addEventListener("scroll", () => {

    if(newDocsContainer.scrollTop >= 30) {
    
        navbar.classList.add("nav-black");
        console.log("dsd")
    }

    else {
        navbar.classList.remove("nav-black")
    }


    console.log("scroll")

})

})



