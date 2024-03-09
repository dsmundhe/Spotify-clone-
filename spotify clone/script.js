let card1 = document.getElementById("card1");
let song1 = document.getElementById("song1");
let showbar = document.getElementById("showbar");

card1.addEventListener("click", () => {
    if (song1.paused) {
        song1.play();
        song2.pause();
        showbar.innerHTML = `  <div class="card card1" id="card1">
        <div class=playicon1>
        <i class="ri-folder-music-line"></i>
         </div>
         <h2>Playing.....</h2>
        <img src="card1.jpeg" alt="">
        <h2>Mega Hit mix</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song1.mp3" class="song">
</audio></div>`
    } else {
        song1.pause();
        showbar.innerHTML = `  <div class="card card1" id="card1">
        <div class=playicon1>
        <i class="ri-folder-music-line"></i>
         </div>
         <h2>Playing.....</h2>
        <img src="card1.jpeg" alt="">
        <h2>Mega Hit mix</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song1.mp3" class="song">
</audio></div>`
    }
})

let card2 = document.getElementById("card2");
let song2 = document.getElementById("song2");
let songs = document.getElementsByClassName("songs");
card2.addEventListener("click", () => {
    if (song2.paused) {
        song2.play();
        song1.pause();
        showbar.innerHTML = `<div class="card card1" id="card2">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card2.jpeg" alt="">
        <h2>Mellow lofi....</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
    else {
        song2.pause();
        showbar.innerHTML = `<div class="card card1" id="card2">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card2.jpeg" alt="">
        <h2>Mellow lofi....</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
})

let card3 = document.getElementById("card3");
let song3 = document.getElementById("song3");
songs = document.getElementsByClassName("songs");
card3.addEventListener("click", () => {
    if (song3.paused) {
        song3.play();
        song1.pause();
        song2.pause();
        showbar.innerHTML = `<div class="card card1" id="card2">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card3.jpeg" alt="">
        <h2>Rise</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
    else {
        song3.pause();
        showbar.innerHTML = `<div class="card card1" id="card2">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card3.jpeg" alt="">
        <h2>Rise</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
})

let card4 = document.getElementById("card4");
let song4 = document.getElementById("song4");
songs = document.getElementsByClassName("songs");
card4.addEventListener("click", () => {
    if (song4.paused) {
        song4.play();
        song1.pause();
        song2.pause();
        song3.pause();
        showbar.innerHTML = `<div class="card card1" id="card4">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card4.jpeg" alt="">
        <h2>Rock Classics</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
    else {
        song4.pause();
        showbar.innerHTML = `<div class="card card1" id="card4">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card4.jpeg" alt="">
        <h2>Rock Classics</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
})


let card5 = document.getElementById("card5");
let song5 = document.getElementById("song5");
songs = document.getElementsByClassName("songs");
card5.addEventListener("click", () => {
    if (song5.paused) {
        song5.play();
        song1.pause();
        song2.pause();
        song3.pause();
        song4.pause();
        showbar.innerHTML = `<div class="card card1" id="card5">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card5.jpeg" alt="">
        <h2>Paiceful piano</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
    else {
        song5.pause();
        showbar.innerHTML = `<div class="card card1" id="card5">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card5.jpeg" alt="">
        <h2>Paiceful piano</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
})

let card6 = document.getElementById("card6");
let song6 = document.getElementById("song6");
songs = document.getElementsByClassName("songs");
card6.addEventListener("click", () => {
    if (song6.paused) {
        song6.play();
        song1.pause();
        song2.pause();
        song3.pause();
        song4.pause();
        song5.pause();
        showbar.innerHTML = `<div class="card card1" id="card6">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card6.jpeg" alt="">
        <h2>Mood Booster</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
    else {
        song6.pause();
        showbar.innerHTML = `<div class="card card1" id="card6">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card6.jpeg" alt="">
        <h2>Mood Booster</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
})

let card7 = document.getElementById("card7");
let song7 = document.getElementById("song7");
songs = document.getElementsByClassName("songs");
card7.addEventListener("click", () => {
    if (song7.paused) {
        song7.play();
        song6.pause();
        song1.pause();
        song2.pause();
        song3.pause();
        song4.pause();
        song5.pause();
        showbar.innerHTML = `<div class="card card1" id="card7" id="song7">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card7.jpeg" alt="">
        <h2>Chill Hits</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
    else {
        song7.pause();
        showbar.innerHTML = `<div class="card card1" id="card7">
        <div class="playicon1">
        <i class="ri-folder-music-line"></i>
        </div>
        <h2>Playing.....</h2>
        <img src="card7.jpeg" alt="">
        <h2>Chill Hits</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, enim.</p>
    </div>
    <div class="audio>  <audio controls id="song1" class="songs">
    <source src="song2.mp3" class="song">
</audio></div>`
    }
})

let loginbtn = document.getElementById("login-btn");
let formbox = document.getElementById("form");
let boxhide = document.getElementById("form-box");
let loginbtnmain = document.getElementById("btn2");
let logininfo = document.getElementById("logininfo");
let signupbtn = document.getElementById("btn1");
let flag = 0;
var username = document.getElementById("email").value;
console.log(username);
console.log("hello dm");
loginbtnmain.addEventListener("click", () => {
    boxhide.innerHTML = ` <div class="formbox"id="form-box">
    <div class="form" id="form">
      <form action="">
          <label for="name">Enter your name :</label>
           <input type="text"id="name"><br>
       <label for="email">Enter Log in ID :</label>
       <input type="email" id="email"><br>
       <label for="phone">Enter phone No :</label>
       <input type="number" id="phone">
       <button id="login-btn">Log in</button>
      </form>
    </div>`
})

showbar.addEventListener("click",()=>{
    song1.pause();
    song2.pause();
    song3.pause();
    song4.pause();
    song5.pause();
    song6.pause();
    song7.pause();
})



loginbtn.addEventListener("click", () => {
    if (flag == 0) {
        formbox.innerHTML = `  <div class="formbox1"id="form-box">
        <div class="form1" id="form">
           <h2>Your Welcome.....</h2>
          </div>`
        flag = 1;
        setTimeout(() => {
            alert("login successfully");
            boxhide.innerHTML = "";
            boxhide.style.display = "none";
            logininfo.innerHTML = ` <span id="logingo">
            <p>Welcome</p>
           <h2>dsmundhe28</h2>
        </span>`
            signupbtn.innerHTML = "";
        }, 500)
    }
    else {
        formbox.innerHTML = "submitted..."
    }
})

