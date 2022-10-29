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



// notes

const docs = document.querySelector(".docs");

const logoNewDocBtn = document.getElementById("logo-new-doc");
const logoMyDocsBtn = document.getElementById("logo-my-docs");

logoNewDocBtn.addEventListener("click", () => {
    logoNewDocBtn.classList.add("bg-color");
    logoMyDocsBtn.classList.remove("bg-color");
    document.querySelector(".new-doc-main").style.display = "block"
    document.querySelector(".my-docs-main").style.display = "none";
})


logoMyDocsBtn.addEventListener("click", () => {
    logoMyDocsBtn.classList.add("bg-color");
    logoNewDocBtn.classList.remove("bg-color");

    document.querySelector(".new-doc-main").style.display = "none"
    document.querySelector(".my-docs-main").style.display = "block"




// const newDocsContainer = docs.querySelector(".my-docs-container");
// const navbar = docs.querySelector(".docs-nav");
                        
// newDocsContainer.addEventListener("scroll", () => {

//     if(newDocsContainer.scrollTop >= 10) {
    
//         navbar.classList.add("nav-black");
//         console.log("dsd")
//     }

//     else {
//         navbar.classList.remove("nav-black")
//     }


//     console.log("scroll")

// })

})



// const data = document.getElementById("new-doc-data");

// saveBtn.addEventListener("click", () => {
    //     console.log("jj");
    //     document.querySelector(".my-doc-content").style.color =
    //      "red";
    //     document.querySelector(".my-doc-content").innerText = data.value;
//     console.log(document.querySelector(".my-doc-content"))
//     })

// let cancelBtn = document.getElementById("cancel");

// cancelBtn.addEventListener("click", () => {
    //     data.value = ""
    // })
    
    
const titleInput = document.getElementById("title");
const docInput = document.getElementById("new-doc-data");  
    
class Doc {
    constructor(title,body) {
        this.title = title;
        this.body = body;
        this.id = Math.random();
    }
}




const myDocsContainer = document.querySelector(".my-docs-container");

    
function addNewDoc(doc) {
    let myDoc = document.createElement("div");
    myDoc.classList.add("my-doc");

    myDoc.innerHTML = `
    <div class="my-doc-content">
                                <span hidden>${doc.id}</span>
                                <h3 class="my-doc-title">${doc.title}</h3>
                                <div class="my-doc-data">${doc.body}</div>
                            </div>
                            <div class="my-doc-btn">
                                <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>  
                            </div>`;
    myDocsContainer.appendChild(myDoc);
}


myDocsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-trash")) {
        const currentDoc = e.target.closest(".my-doc");
        currentDoc.remove();
    }

})





    
let saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", () => {

    // validate inputs 
    if(titleInput.value != "" && docInput.value != "") {
        const newDoc = new Doc(titleInput.value, docInput.value);
        addNewDoc(newDoc);
        titleInput.value = "";
        docInput.value = "";
        titleInput.focus();

        console.log(newDoc)
    }

    else if(titleInput.value === ""){
        alert("Please enter the title!!!")
    }

    else if(docInput.value === "") {
        alert("Please write some note for youself!!!")
    }


})






const navbar = document.getElementById("my-docs-nav");
                        
myDocsContainer.addEventListener("scroll", () => {

    if(myDocsContainer.scrollTop >= 8) {
    
        navbar.classList.add("nav-black");
        console.log("dsd")
    }

    else {
        navbar.classList.remove("nav-black")
    }


    console.log("scroll")

})