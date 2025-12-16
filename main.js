/* ================= PARALLAX ================= */
const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  if (parallax)
    parallax.style.backgroundPositionX =
      offset * -0.25 - 300 + "px";
  if (parallax1)
    parallax1.style.backgroundPositionY =
      (offset - 4000) * 0.1 + "px";
  if (parallax2)
    parallax2.style.backgroundPositionY =
      (offset - 4800) * -0.1 + "px";
});

/* ================= MENU ================= */
function myFunction() {
  document.getElementById("check").checked = false;
}

/* ================= REVEAL ================= */
function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    const windowHeight = window.innerHeight;
    if (el.getBoundingClientRect().top < windowHeight - 150) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);

/* ================= MUSIC (OFF DEFAULT) ================= */
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");
const musicIcon = musicBtn.querySelector("i");

let isPlaying = false;
let fadeInterval = null;

music.volume = 0;

// restore trạng thái
const savedMusic = localStorage.getItem("musicState");
if (savedMusic === "on") {
  playMusic();
}

function playMusic() {
  clearInterval(fadeInterval);
  music.play().catch(() => {});
  fadeInterval = setInterval(() => {
    if (music.volume < 0.9) {
      music.volume += 0.05;
    } else {
      music.volume = 1;
      clearInterval(fadeInterval);
    }
  }, 100);

  isPlaying = true;
  musicIcon.classList.remove("fa-volume-mute");
  musicIcon.classList.add("fa-volume-up");
  musicBtn.classList.add("playing");
  localStorage.setItem("musicState", "on");
}

function pauseMusic() {
  clearInterval(fadeInterval);
  fadeInterval = setInterval(() => {
    if (music.volume > 0.05) {
      music.volume -= 0.05;
    } else {
      music.volume = 0;
      music.pause();
      clearInterval(fadeInterval);
    }
  }, 100);

  isPlaying = false;
  musicIcon.classList.remove("fa-volume-up");
  musicIcon.classList.add("fa-volume-mute");
  musicBtn.classList.remove("playing");
  localStorage.setItem("musicState", "off");
}

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    playMusic();
  } else {
    pauseMusic();
  }
});

/* ================= TRANSLATIONS ================= */
const translations = {
  en: {
    ourStory: "OUR STORY",
    gettingMarried: "We're getting engaged",
    location: "Sunday, Dec. 21, 2025\nLong Thanh, Dong Nai",
    celebratingLove: "Celebrating Our Love",
    withThoseLove: "With Those We Love",
    engagement: "Engagement Ceremony",
    engagementTime: "Sunday, Dec. 21, 2025\nAt 9:00 AM",
    story: "Not Just an\nOrdinary Love Story",
    storyText:
      "For us, Our love did not begin with love at first sight, but grew naturally through time, understanding, and shared moments. From two strangers, we learned to listen, care, and walk together — choosing today to begin a new chapter hand in hand. doesn't happen instantly but grows as we understand each other.",
    quote:
      "To the world you are one person, but to one person you are the world",
    hopeSeeYou: "Hope to See You!"
  },
  vi: {
    ourStory: "CÂU CHUYỆN",
    gettingMarried: "Chúng tôi sắp đính hôn",
    location:
      "Chủ Nhật, ngày 21 tháng 12 năm 2025\nLong Thành, Đồng Nai",
    celebratingLove: "Chào Mừng Tình Yêu",
    withThoseLove: "Cùng Những Người Thân Yêu",
    engagement: "Lễ Đám Hỏi",
    engagementTime:
      "Chủ Nhật, ngày 21 tháng 12 năm 2025\nLúc 9:00 sáng",
    story: "Không Chỉ Là Một\nCâu Chuyện Tình Thường",
    storyText:
      "Tình yêu của chúng tôi không bắt đầu từ cái nhìn đầu tiên, mà lớn dần theo thời gian qua sự thấu hiểu và sẻ chia. Từ hai người xa lạ, chúng tôi học cách lắng nghe, đồng hành và cùng nhau bước vào một chặng đường mới của cuộc đời.",
    quote:
      "Với thế giới, bạn chỉ là một người, nhưng với một người, bạn là cả thế giới",
    hopeSeeYou: "Hẹn Gặp Bạn!"
  }
};

let currentLang = "en";

function updateContent() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.dataset.translate;
    if (translations[currentLang][key]) {
      el.innerHTML =
        translations[currentLang][key].replace(/\n/g, "<br>");
    }
  });
  document.querySelector(".lang-switch").textContent =
    currentLang.toUpperCase();
}

function switchLanguage() {
  currentLang = currentLang === "en" ? "vi" : "en";
  localStorage.setItem("lang", currentLang);
  updateContent();
}

function selectLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document
    .getElementById("language-modal")
    .classList.add("hidden");
  updateContent();
  // ❌ KHÔNG auto play nhạc ở đây
}

document.addEventListener("DOMContentLoaded", () => {
  currentLang = localStorage.getItem("lang") || "en";
  updateContent();
});