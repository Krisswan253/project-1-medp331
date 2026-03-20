// GET ELEMENTS
let bootScreen = document.getElementById("bootScreen");
let archiveScreen = document.getElementById("archiveScreen");
let crashScreen = document.getElementById("crashScreen");

let enterBtn = document.getElementById("enterBtn");
let restartBtn = document.getElementById("restartBtn");

let bootLine1 = document.getElementById("bootLine1");
let bootLine2 = document.getElementById("bootLine2");
let bootLine3 = document.getElementById("bootLine3");
let bootLine4 = document.getElementById("bootLine4");

let storyText = document.getElementById("storyText");
let pageNumber = document.getElementById("pageNumber");

let beepSound = document.getElementById("beepSound");
let musicSound = document.getElementById("musicSound");
let musicBtn = document.getElementById("musicBtn");

// VARIABLES
let currentLine = 0;
let musicOn = false;
let typingNow = false;
let crashStarted = false;
let storyTimer;

// STORY TEXT
let line1 = "I am the last living person here. I cant let this place go without telling you all that I know";
let line2 = "The monster is here. It has always been here. Lurking in the shadows, waiting to strike.";
let line3 = "people have been slowly taken away before they could finish thinking.";
let line4 = "I found something that was not a human on this computer. It looked back at me when I opened it.";
let line5 = "The deeper I go, the more it feels like this system is not empty. It is waiting.";
let line6 = "There are files that only appear when I stop moving. When I look directly at them, they disappear.";
let line7 = "There is something wrong with the audio logs. It sounds like breathing behind the static.";
let line8 = "I do not think this is just memory storage anymore. Something is using it.";
let line9 = "If you are reading this, then it already knows you are here.";
let line10 = "Do not stay long..its coming for you next.";

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

// SIMPLE BEEP
function playBeep() {
  beepSound.currentTime = 0;
  beepSound.play().catch(function () {
    console.log("beep blocked");
  });
}

// SIMPLE TYPING FUNCTION FOR BOOT
function typeText(element, text, speed, doneFunction) {
  element.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent = element.textContent + text.charAt(i);
      i = i + 1;
      setTimeout(type, speed);
    } else {
      if (doneFunction) {
        doneFunction();
      }
    }
  }

  type();
}

// BOOT SEQUENCE
function startBootSequence() {
  typeText(bootLine1, "ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM", 35, function () {
    typeText(bootLine2, "INITIALIZING MEMORY RECOVERY...", 30, function () {
      typeText(bootLine3, "SCANNING ARCHIVE CLUSTERS...", 30, function () {
        typeText(bootLine4, "WARNING: 73% DATA CORRUPTION DETECTED", 30, function () {
          enterBtn.classList.remove("hidden");
        });
      });
    });
  });
}

// PAGE NUMBER
function updatePageNumber() {
  if (currentLine == 0) pageNumber.textContent = "ENTRY 01 / 10";
  if (currentLine == 1) pageNumber.textContent = "ENTRY 02 / 10";
  if (currentLine == 2) pageNumber.textContent = "ENTRY 03 / 10";
  if (currentLine == 3) pageNumber.textContent = "ENTRY 04 / 10";
  if (currentLine == 4) pageNumber.textContent = "ENTRY 05 / 10";
  if (currentLine == 5) pageNumber.textContent = "ENTRY 06 / 10";
  if (currentLine == 6) pageNumber.textContent = "ENTRY 07 / 10";
  if (currentLine == 7) pageNumber.textContent = "ENTRY 08 / 10";
  if (currentLine == 8) pageNumber.textContent = "ENTRY 09 / 10";
  if (currentLine == 9) pageNumber.textContent = "ENTRY 10 / 10";
}

// ERROR CRASH SCREEN
function showCrashScreen() {
  crashStarted = true;
  archiveScreen.classList.add("hidden");
  crashScreen.style.display = "flex";
}
// SHOW STORY
function showLine() {
  clearTimeout(storyTimer);
  typingNow = true;

  storyText.textContent = "";
  updatePageNumber();

  let text = storyLines[currentLine];
  let i = 0;

  function typeStory() {
    if (i < text.length) {
      storyText.textContent = storyText.textContent + text.charAt(i);
      i = i + 1;
      storyTimer = setTimeout(typeStory, 22);
    } else {
      typingNow = false;

      if (currentLine == 9 && crashStarted == false) {
  setTimeout(function () {
    showCrashScreen();
  }, 5000);
}
    }
  }

  typeStory();
}

// ENTER TERMINAL BUTTON
enterBtn.addEventListener("click", function () {
  playBeep();
  bootScreen.classList.add("hidden");
  archiveScreen.classList.remove("hidden");
  showLine();
});

// MUSIC BUTTON
musicBtn.addEventListener("click", function () {
  if (musicOn == false) {
    musicOn = true;
    musicBtn.textContent = "MUSIC: ON";
    musicSound.volume = 0.4;
    musicSound.play().catch(function () {
      console.log("music blocked");
    });
  } else {
    musicOn = false;
    musicBtn.textContent = "MUSIC: OFF";
    musicSound.pause();
  }
});

// RESTART BUTTON
restartBtn.addEventListener("click", function () {
  location.reload();
});

// ARROW KEYS
document.addEventListener("keydown", function (event) {
  if (archiveScreen.classList.contains("hidden")) {
    return;
  }

  if (typingNow == true) {
    return;
  }

  if (crashStarted == true) {
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

// START BOOT
startBootSequence();