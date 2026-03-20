let bootScreen = document.getElementById("bootScreen");
let mainSite = document.getElementById("mainSite");
let startBtn = document.getElementById("startBtn");

let soundBtn = document.getElementById("soundBtn");
let homeBtn = document.getElementById("homeBtn");
let log1Btn = document.getElementById("log1Btn");
let log2Btn = document.getElementById("log2Btn");
let log3Btn = document.getElementById("log3Btn");
let log4Btn = document.getElementById("log4Btn");
let log5Btn = document.getElementById("log5Btn");

let logTitle = document.getElementById("logTitle");
let storyText = document.getElementById("storyText");
let beepSound = document.getElementById("beepSound");

let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let bar4 = document.getElementById("bar4");
let bar5 = document.getElementById("bar5");

let soundOn = false;

startBtn.addEventListener("click", function () {
  bootScreen.classList.add("hidden");
  mainSite.classList.remove("hidden");
});

soundBtn.addEventListener("click", function () {
  if (soundOn == false) {
    soundOn = true;
    soundBtn.textContent = "SOUND: ON";
  } else {
    soundOn = false;
    soundBtn.textContent = "SOUND: OFF";
  }
});

function playBeep() {
  if (soundOn == true) {
    beepSound.currentTime = 0;
    beepSound.play();
  }
}

homeBtn.addEventListener("click", function () {
  logTitle.textContent = "ARCHIVE READY";
  storyText.textContent = "A damaged archive has been recovered. Something inside it has been trying to stay alive. The files feel less like data and more like remains. Click through the logs to see what is still speaking.";
  playBeep();
});

log1Btn.addEventListener("click", function () {
  logTitle.textContent = "LOG_01";
  storyText.textContent = "At first the pages felt harmless. Handmade. Awkward. Full of blinking text, cheap stars, and overshared secrets. But the deeper I looked, the more abandoned rooms I found. Guestbooks with no final entry. Journals that ended mid-sentence. Profiles still waiting for someone who never came back.";
  playBeep();
});

log2Btn.addEventListener("click", function () {
  logTitle.textContent = "LOG_02";
  storyText.textContent = "Then the web changed. The strange little rooms were sealed over by smoother systems. Personal pages flattened into feeds. Faces became icons. Memory became content. It grew cleaner, but it also grew colder. The silence underneath everything became easier to hear.";
  playBeep();
});

log3Btn.addEventListener("click", function () {
  logTitle.textContent = "LOG_03";
  storyText.textContent = "I kept what I could. A page someone updated every night until one day they didn’t. A list of favorite songs from 2009. A confession hidden in white text at the bottom of a site no one visits anymore. These things are still here. They have been alone for a very long time.";
  playBeep();
});

log4Btn.addEventListener("click", function () {
  logTitle.textContent = "AUDIO_TRACE";
  storyText.textContent = "[CORRUPTED TRANSCRIPT] ...someone is still inside the archive... signal unstable... I can hear pages opening where no user is logged in... there are names here with no bodies attached to them anymore... if you can read this, do not stay too long... it has started remembering you back...";
  playBeep();
});

log5Btn.addEventListener("click", function () {
  logTitle.textContent = "FINAL_MESSAGE";
  storyText.textContent = "If you found this, then part of it survived. The old internet was never clean, but it made room for unfinished people. It held their fear, boredom, strange obsessions, and lonely little proofs of life. I kept them here for as long as I could. Now that you have opened this archive, it knows you were here too.";
  playBeep();
});

window.addEventListener("scroll", function () {
  let scrollAmount = window.scrollY;

  if (scrollAmount > 50) {
    bar1.classList.add("active-bar");
  } else {
    bar1.classList.remove("active-bar");
  }

  if (scrollAmount > 150) {
    bar2.classList.add("active-bar");
  } else {
    bar2.classList.remove("active-bar");
  }

  if (scrollAmount > 250) {
    bar3.classList.add("active-bar");
  } else {
    bar3.classList.remove("active-bar");
  }

  if (scrollAmount > 350) {
    bar4.classList.add("active-bar");
  } else {
    bar4.classList.remove("active-bar");
  }

  if (scrollAmount > 450) {
    bar5.classList.add("active-bar");
  } else {
    bar5.classList.remove("active-bar");
  }
});