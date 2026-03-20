let homeBtn = document.getElementById("homeBtn");
let log1Btn = document.getElementById("log1Btn");
let log2Btn = document.getElementById("log2Btn");
let log3Btn = document.getElementById("log3Btn");
let log4Btn = document.getElementById("log4Btn");

let logTitle = document.getElementById("logTitle");
let storyText = document.getElementById("storyText");
let beepSound = document.getElementById("beepSound");

let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let bar4 = document.getElementById("bar4");
let bar5 = document.getElementById("bar5");

homeBtn.addEventListener("click", function () {
  logTitle.textContent = "ARCHIVE READY";
  storyText.textContent = "A damaged archive has been recovered. Somewhere inside it are the last fragments of a more personal internet. Click through the logs to uncover what was lost.";
  beepSound.currentTime = 0;
  beepSound.play();
});

log1Btn.addEventListener("click", function () {
  logTitle.textContent = "LOG_01";
  storyText.textContent = "I remember when every page looked different. Nothing matched, and somehow that made it feel alive. People filled their sites with blinking text, strange backgrounds, awkward colors, and pieces of themselves. It was messy, but it felt human.";
  beepSound.currentTime = 0;
  beepSound.play();
});

log2Btn.addEventListener("click", function () {
  logTitle.textContent = "LOG_02";
  storyText.textContent = "Then things became cleaner. Faster. Smoother. The strange corners disappeared first. Personal pages were replaced by platforms, and the small worlds people built for each other slowly gave way to timelines that all looked the same.";
  beepSound.currentTime = 0;
  beepSound.play();
});

log3Btn.addEventListener("click", function () {
  logTitle.textContent = "LOG_03";
  storyText.textContent = "I kept fragments that no one came back for. Half-finished journals. Fan pages for bands that no longer exist. A note someone wrote at three in the morning and never posted anywhere else. They are still here, but only barely. I do not know where their owners went.";
  beepSound.currentTime = 0;
  beepSound.play();
});

log4Btn.addEventListener("click", function () {
  logTitle.textContent = "FINAL_MESSAGE";
  storyText.textContent = "If you found this, then something survived. The old internet was never perfect, but it made room for unfinished people. It let them be strange, specific, and small. I held those pieces for as long as I could. Do not let every memory become a feed.";
  beepSound.currentTime = 0;
  beepSound.play();
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