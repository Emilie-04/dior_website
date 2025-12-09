const menuButton = document.querySelector("header > ul > li > button"); 
const closeButton = document.querySelector("header nav button"); 
const deNav = document.querySelector("header nav");


menuButton.onclick = toggleMenu;
closeButton.onclick = toggleMenu;

function toggleMenu() {
  deNav.classList.toggle("open");
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
  
