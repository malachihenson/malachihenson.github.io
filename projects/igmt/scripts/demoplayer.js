var demoAudio = document.getElementsByClassName("demoA");

function playTrack(num) {
    for(var i=0; i < demoAudio.length; i++) {
        if(i != num) {
            demoAudio[i].pause();
            demoAudio[i].currentTime = 0;
        }
    }
    demoAudio[num].play();
}
function pauseTrack(num) {
    demoAudio[num].pause();
}
function stopTrack(num) {
    demoAudio[num].pause();
    demoAudio[num].currentTime = 0;
}