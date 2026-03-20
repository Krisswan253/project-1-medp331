let bootScreen = document.getElementById("bootScreen");
let archiveScreen = document.getElementById("archiveScreen");
let progressBar = document.getElementById("progressBar");
let progressText = document.getElementById("progressText");

let storyText = document.getElementById("storyText");
let pageNumber = document.getElementById("pageNumber");
let beepSound = document.getElementById("beepSound");

let progress = 0;
let currentLine = 0;
let typingTimeout;

let line1 = "The archive opened like a mouth. At first it only offered dust, weak signal, and the feeling that something had been waiting in the dark.";
let line2 = "There were pages here once that belonged completely to people. Strange layouts, bright colors, hidden thoughts, and little signs that someone wanted to be known.";
let line3 = "Most of them are gone now. The names are still here, but the rooms behind them have collapsed into blank screens and broken links.";
let line4 = "I found a journal that ended in the middle of a sentence. No final post. No goodbye. Just a thought still waiting for the person who never came back.";
let line5 = "Farther in, the archive began saving stranger things. Drafts. Cursor trails. Hidden words written in the same color as the background.";
let line6 = "Some files only seem to appear when the screen is dark enough to reflect my face. Some vanish as soon as I try to read them twice.";
let line7 = "There is an audio trace here from a user with no account attached to it anymore. It sounds like static, breathing, and someone almost saying a name.";
let line8 = "The deeper I move into the system, the less abandoned it feels. Something is still arranging the fragments. Something is still watching the pages open.";
let line9 = "I do not think this archive only stores memory. I think it waits for someone to look inside so it can remember itself again.";
let line10 = "If you are reading this now, then it has already noticed you too. Do not stay longer than you have to. Some things become real when they are read.";

let storyLines = [
  line1,
  line2,
  line3,
  line4,
  line5,
  line6,
  line7,
  line8,
  line9,
  line10
];

function startBoot() {
  let bootTimer = setInterval(function () {
    progress = progress + 2;
    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(bootTimer);

      setTimeout(function () {
        bootScreen.classList.add("hidden");
        archiveScreen.classList.remove("hidden");
        showLine();
      }, 500);
    }
  }, 60);
}

function playBeep() {
  beepSound.currentTime = 0;
  beepSound.play();
}

function showLine() {
  clearTimeout(typingTimeout);

  storyText.textContent = "";
  pageNumber.textContent = "ENTRY 0" + (currentLine + 1) + " / 10";

  if (currentLine == 9) {
    pageNumber.textContent = "ENTRY 10 / 10";
  }

  let fullText = storyLines[currentLine];
  let letterNumber = 0;

  function typeLetter() {
    if (letterNumber < fullText.length) {
      storyText.textContent = storyText.textContent + fullText.charAt(letterNumber);
      letterNumber = letterNumber + 1;
      typingTimeout = setTimeout(typeLetter, 22);
    }
  }

  typeLetter();
}

document.addEventListener("keydown", function (event) {
  if (archiveScreen.classList.contains("hidden")) {
    return;
  }

  if (event.key == "ArrowRight") {
    if (currentLine < 9) {
      currentLine = currentLine + 1;
      playBeep();
      showLine();
    }
  }

  if (event.key == "ArrowLeft") {
    if (currentLine > 0) {
      currentLine = currentLine - 1;
      playBeep();
      showLine();
    }
  }
});

startBoot();