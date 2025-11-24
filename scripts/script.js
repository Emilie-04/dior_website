
const menuButton = document.querySelector("header button")
const sluitButton = document.querySelector("header nav button")
const deNav = document.querySelector("header nav")


menuButton.addEventListener("click", openMenu);
sluitButton.addEventListener("click", sluitMenu)

function openMenu () {
 deNav.classList.add("open")
}

function sluitMenu () {
 deNav.classList.remove("open")
}










// const Vidb = document.querySelector("button")
// const  deVideo = document.querySelector("video")
// Vidb.onclick = toggleVideo

// function toggleVideo () {

//     if ( deVideo.paused == true) {
//         deVideo.play();
//     }
// }
// else {
//     deVideo.pause ();
// }
// om de video te pauzeren en playen
  
