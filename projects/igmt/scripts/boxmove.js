var box = document.getElementById("mainBox");
var top = document.getElementById("mainTop");
var close = document.getElementById("closeBtn");
var clock = document.getElementById("clock");
var play = document.getElementsByClassName("playButton");
var pause = document.getElementsByClassName("pauseButton");
var stop = document.getElementsByClassName("stopButton");
var mx = 0;
var my = 0;
var mxo = 0;
var myo = 0;
var canInteract = false;
var firstFrame = false;
var intervalTrigger = false;
const d = new Date();

//drag function
document.addEventListener("mousemove", function(event) {
    const rect = box.getBoundingClientRect();
    if(firstFrame) {
        mx = event.clientX;
        my = event.clientY;
        mxo = 0;
        myo = 0;
        firstFrame = false;
    } else {
        mxo = event.clientX - mx;
        myo = event.clientY - my;
        mx = event.clientX;
        my = event.clientY;
    }
    if(canInteract) {
        box.style.top = (rect.top + myo).toString() + "px";
        box.style.left = (rect.left + mxo).toString() + "px";
    }
});
top.addEventListener("mousedown", function() {
    canInteract = true;
    firstFrame = true;
});
top.addEventListener("mouseup", function() {
    canInteract = false;
});
//button animations
close.addEventListener("mousedown", function() {
    close.firstElementChild.src = "../images/close2.png";
});
close.addEventListener("mouseup", function() {
    close.firstElementChild.src = "../images/close1.png";
    box.style.display = "none";
});
for(var i=0; i<play.length; i++) {
    play[i].addEventListener("mousedown", function() {
        this.firstElementChild.src = "../images/play2.png";
    });
    play[i].addEventListener("mouseup", function() {
        this.firstElementChild.src = "../images/play1.png";
    });
}
for(var i=0; i<pause.length; i++) {
    pause[i].addEventListener("mousedown", function() {
        this.firstElementChild.src = "../images/pause2.png";
    });
    pause[i].addEventListener("mouseup", function() {
        this.firstElementChild.src = "../images/pause1.png";
    });
}
for(var i=0; i<stop.length; i++) {
    stop[i].addEventListener("mousedown", function() {
        this.firstElementChild.src = "../images/stop2.png";
    });
    stop[i].addEventListener("mouseup", function() {
        this.firstElementChild.src = "../images/stop1.png";
    });
}

updateTime();

function updateTime() {
    //eye rolls... Javascript is so particular...
    clock.innerHTML = d.getHours() + ":" + d.getMinutes().toString().padStart(2, "0");
    if(!intervalTrigger) {
        setInterval(updateTime, 1000);
        intervalTrigger = true;
    }
}