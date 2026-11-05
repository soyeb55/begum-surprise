// ===== Change these to your own words =====
const config = {
  bubbleTexts: ["Who made this? 🤔", "Begum ji made me do it 😜", "Okay okay, open it! 💕"],
  storyText: "Since we met, every year has been better than the last. Thank you for being my everything. 💞",
};

let currentScene = 1;

// Scene switching
function showScene(n) {
  document.querySelectorAll(".scene").forEach(s => s.classList.remove("active"));
  document.getElementById("scene" + n).classList.add("active");
  currentScene = n;
  if (n === 2) typeStory();
}
function nextScene() {
  showScene(currentScene + 1);
}

// Scene 1: bubble text changes every 2 seconds
let bubbleIndex = 0;
setInterval(() => {
  bubbleIndex = (bubbleIndex + 1) % config.bubbleTexts.length;
  document.getElementById("bubble").textContent = config.bubbleTexts[bubbleIndex];
}, 2000);

// Scene 2: typing effect
function typeStory() {
  const el = document.getElementById("storyLine");
  el.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += config.storyText[i];
    i++;
    if (i >= config.storyText.length) clearInterval(timer);
  }, 40);
}

// Hearts floating in the background
setInterval(() => {
  const h = document.createElement("span");
  h.className = "float-item";
  h.textContent = ["💖", "🌸", "💕", "🌹", "🥰"][Math.floor(Math.random() * 5)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (1 + Math.random() * 1.5) + "rem";
  document.getElementById("heartsBg").appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 400);

// Scene 4: the "No" button runs away
function runAway() {
  const btn = document.getElementById("noBtn");
  btn.classList.add("moved");
  btn.style.left = Math.random() * (window.innerWidth - 120) + "px";
  btn.style.top = Math.random() * (window.innerHeight - 60) + "px";
}

// Scene 5: confetti and celebration
function sayYes() {
  showScene(5);
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("span");
    c.className = "confetti";
    c.textContent = ["💖", "🎉", "✨", "🌸", "💕"][Math.floor(Math.random() * 5)];
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDelay = Math.random() * 1.5 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

function replay() {
  showScene(1);
}