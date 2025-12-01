
const menuButton = document.querySelector("header button ")
const deNav = document.querySelector("header nav")


menuButton.onclick = toggleMenu;


function toggleMenu () {
 deNav.classList.toggle("open")
}

console.log("button found?", menuButton);




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
  
