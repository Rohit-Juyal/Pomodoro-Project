// Pomodoro timer

const workMinutes = document.getElementById("work-minutes");
const workSeconds = document.getElementById("work-seconds");
const startBtn = document.getElementById("start");

let startTimer = undefined;

function timer() {
    if(workSeconds.innerText != 0) {
        workSeconds.innerText--;
    }
    else if (workSeconds.innerText == 0 && workMinutes.innerText != 0) {
        workSeconds.innerText = 59;
        workMinutes.innerText--;
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


var audio1  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3')

startBtn.addEventListener("mousedown", () => {
    audio2.play();
})
startBtn.addEventListener("mouseup", () => {
    audio1.play();
})


    

// Music Player

const audioTitle = document.getElementById("audio-title");
const cover = document.getElementById("cover");
const audio = document.getElementById("audio");
const previous = document.getElementById("previous");
const play = document.getElementById("play");
const next = document.getElementById("next");

const songs = ["Alone", "Before I Forget", "Midnight", "Purrple Cat"];

let songIndex = 0;

// loadSong(songs[songIndex]);

function loadSong(song) {
    audioTitle.innerText = song;
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






// Logo

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
    
})



// Docs

const titleInput = document.getElementById("title");
const docInput = document.getElementById("new-doc-data");  
const myDocsContainer = document.querySelector(".my-docs-container");
const saveBtn = document.getElementById("save");


class Doc {
    constructor(title,body) {
        this.title = title;
        this.body = body;
        this.id = Math.random();
    }
}

function getDocs() {
    let docs;
    if (localStorage.getItem("docApp.docs") === null) {
        docs = []; 
    } 
    else {
        docs = JSON.parse(localStorage.getItem("docApp.docs"))
    }
    return docs;

}


function addDocToLS(doc) {
    const docs = getDocs();
    docs.push(doc);
    localStorage.setItem("docApp.docs", JSON.stringify(docs))
}


function removeDoc(id) {
    const docs = getDocs();
    docs.forEach((doc, index) => {
        if(doc.id === id) {
            docs.splice(index, 1);
        } 
        localStorage.setItem("docApp.docs", JSON.stringify(docs));
    })
} 

 
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


function displayDocs() {
    const docs = getDocs();
    docs.forEach(doc => {
        addNewDoc(doc);
    })
}


myDocsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-trash")) {
        const currentDoc = e.target.closest(".my-doc");
        const id = currentDoc.querySelector("span").textContent;
        currentDoc.remove();
        console.log(id);
        removeDoc(Number(id));
    }

})


document.addEventListener("DOMContentLoaded", displayDocs)


saveBtn.addEventListener("click", () => {

    // validate inputs 
    if(titleInput.value != "" && docInput.value != "") {
        const newDoc = new Doc(titleInput.value, docInput.value);
        addNewDoc(newDoc);
        addDocToLS(newDoc);
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



const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("input", () => {
    let value = searchBar.value.toLowerCase();
    console.log(value);

    const myDoc = document.querySelectorAll(".my-doc");
    console.log(myDoc)

    Array.from(myDoc).forEach(doc => {
        let docText = doc.querySelectorAll(".my-doc-data")[0].innerText.toLowerCase();
        let docTitle = doc.querySelectorAll(".my-doc-title")[0].innerText.toLowerCase();
        console.log(docText);

        if(docText.includes(value) || docTitle.includes(value)) {
            doc.style.display = "block"
        }
        else {
            doc.style.display = "none";
        }
    })
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



// hamburger 

document.getElementById("checkbox").addEventListener("click", () => {
    let tools = document.querySelector(".tools");

    if(document.getElementById("checkbox").checked === true)
    {
        document.querySelector(".docs-container").classList.toggle('shrink');
        tools.style.transform = "translateX(0%)";
        document.querySelector(".open").style.display = "none";
        document.querySelector(".close").style.display = "block";


        const myDocs = document.querySelectorAll(".my-doc");
        for (let i = 0; i < myDocs.length; i++) {
            myDocs[i].classList.toggle("shrink");
        }
        
        
    }
    else {
        document.querySelector(".docs-container").classList.toggle('shrink');
        tools.style.transform = "";
        document.querySelector(".open").style.display = "block";
        document.querySelector(".close").style.display = "none";
        
        const myDocs = document.querySelectorAll(".my-doc");
        for (let i = 0; i < myDocs.length; i++) {
            myDocs[i].classList.toggle("shrink");
        }
    }
})