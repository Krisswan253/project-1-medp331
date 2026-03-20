const enterBtn = document.getElementById("enterBtn");
const bootSection = document.getElementById("bootSection");
const interfaceSection = document.getElementById("interface");
const typedText = document.getElementById("typedText");
const contentTitle = document.getElementById("contentTitle");
const logButtons = document.querySelectorAll(".log-btn");
const finalLogBtn = document.getElementById("finalLogBtn");
const beepSound = document.getElementById("beepSound");

let openedLogs = [];

const logs = [
  {
    title: "LOG_01",
    text: "I remember when every page looked different. Nothing matched, and somehow that made it feel alive. Backgrounds blinked. Fonts clashed. People built websites like bedrooms, like diaries, like secret spaces that did not need permission to exist."
  },
  {
    title: "LOG_02",
    text: "Then the spaces became cleaner. Faster. Brighter. Easier to scroll through. The mess disappeared first. Then the strange corners. Then the personal pages. The web kept growing, but it began to feel smaller."
  },
  {
    title: "LOG_03",
    text: "Users stopped visiting places and began entering feeds. Their words flattened into templates. Their memories were compressed into timelines. I kept saving fragments anyway, hoping someone would come back for them."
  },
  {
    title: "AUDIO_TRACE",
    text: "Recovered audio transcript: static... static... If you are hearing this, the archive is still holding. There were once unfinished poems here. Fan pages. Tiny confessions. Hand-coded dreams. Please do not let them vanish completely."
  },
  {
    title: "FINAL_MESSAGE",
    text: "You stopped building places and started building systems. I held your unfinished selves for as long as I could. If this message reached you, then some part of the old web is still alive, flickering softly beneath the surface."
  }
];

enterBtn.addEventListener("click", function () {
  playBeep();
  bootSection.classList.add("hidden");
  interfaceSection.classList.remove("hidden");
  loadLog(0);
});

logButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const logIndex = parseInt(button.dataset.log);

    if (button.classList.contains("locked")) {
      return;
    }

    playBeep();
    setActiveButton(button);
    loadLog(logIndex);

    if (!openedLogs.includes(logIndex)) {
      openedLogs.push(logIndex);
    }

    unlockFinalMessage();
  });
});

function setActiveButton(selectedButton) {
  logButtons.forEach(function (button) {
    button.classList.remove("active");
  });

  selectedButton.classList.add("active");
}

function loadLog(index) {
  contentTitle.textContent = logs[index].title;
  typedText.textContent = "";
  typeWriter(logs[index].text, 0);
}

function typeWriter(text, i) {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    setTimeout(function () {
      typeWriter(text, i + 1);
    }, 22);
  }
}

function unlockFinalMessage() {
  if (openedLogs.includes(0) && openedLogs.includes(1) && openedLogs.includes(2) && openedLogs.includes(3)) {
    finalLogBtn.classList.remove("locked");
  }
}

function playBeep() {
  if (beepSound) {
    beepSound.currentTime = 0;
    beepSound.play().catch(function () {
      console.log("Sound blocked until user interaction.");
    });
  }
}

window.addEventListener("scroll", function () {
  updateSignalBars();
});

function updateSignalBars() {
  const bars = [
    document.getElementById("bar1"),
    document.getElementById("bar2"),
    document.getElementById("bar3"),
    document.getElementById("bar4"),
    document.getElementById("bar5")
  ];

  const scrollTop = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  let scrollPercent = 0;

  if (pageHeight > 0) {
    scrollPercent = scrollTop / pageHeight;
  }

  const activeCount = Math.ceil(scrollPercent * 5);

  bars.forEach(function (bar, index) {
    if (index < activeCount) {
      bar.classList.add("active-bar");
    } else {
      bar.classList.remove("active-bar");
    }
  });
}
