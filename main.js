/* ================= GLOBAL VARIABLES & TRANSLATIONS ================= */
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
      "For us, Our love did not begin with love at first sight, but grew naturally through time, understanding, and shared moments. From two strangers, we learned to listen, care, and walk together — choosing today to begin a new chapter hand in hand.",
    quote:
      "To the world you are one person, but to one person you are the world",
    hopeSeeYou: "Hope to See You!",
    countdownTitle: "Counting Down to Our Special Day",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    thanksText: "Thank you for being part of our journey!",
    letterTitle: "Words from the Heart",
    fromGroom: "From Phuong",
    fromBride: "From Ngoc",
    groomHeading: "To My Beloved Ngoc,",
    groomMsg: "From the moment I met you, I knew my life would never be the same. You are my best friend, my greatest support, and my one true love. I promise to stand by you, to make you laugh, and to cherish every moment we share together.",
    brideHeading: "To My Dearest Phuong,",
    brideMsg: "Meeting you was fate, becoming your friend was a choice, but falling in love with you was beyond my control. Thank you for being my rock, my safe haven. I can't wait to build our future together.",
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
    hopeSeeYou: "Hẹn Gặp Bạn!",
    countdownTitle: "Đếm Ngược Đến Ngày Trọng Đại",
    days: "Ngày",
    hours: "Giờ",
    minutes: "Phút",
    seconds: "Giây",
    thanksText: "Cảm ơn bạn đã là một phần trong hành trình của chúng tôi!",
    letterTitle: "Lời Nhắn Gửi",
    fromGroom: "Gửi Ngọc",
    fromBride: "Gửi Phương",
    groomHeading: "Gửi Ngọc thương mến,",
    groomMsg: "Từ khoảnh khắc gặp em, anh biết cuộc sống của mình sẽ thay đổi mãi mãi. Em không chỉ là người yêu, mà là người bạn tri kỷ, là động lực lớn nhất của anh. Anh hứa sẽ luôn bên cạnh, che chở và cùng em đi hết chặng đường này.",
    brideHeading: "Gửi Phương yêu dấu,",
    brideMsg: "Gặp gỡ anh là định mệnh, nhưng để yêu và đi cùng anh là lựa chọn hạnh phúc nhất của em. Cảm ơn anh đã luôn là điểm tựa vững chắc. Em mong chờ những ngày tháng chúng ta cùng nhau xây dựng tổ ấm.",
  }
};

let currentLang = "en";

/* ================= HELPER FUNCTIONS (GLOBAL SCOPE) ================= */

// Chuyển đổi ngôn ngữ khi click nút EN/VI trên menu
function switchLanguage() {
  currentLang = currentLang === "en" ? "vi" : "en";
  localStorage.setItem("lang", currentLang);
  updateContent();
}

// Chọn ngôn ngữ từ Modal ban đầu
function selectLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  const modal = document.getElementById("language-modal");
  if(modal) modal.classList.add("hidden");
  updateContent();
  setTimeout(reveal, 100); // Gọi lại hiệu ứng reveal để hiển thị nội dung
}

// Cập nhật nội dung text theo ngôn ngữ
function updateContent() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.dataset.translate;
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key].replace(/\n/g, "<br>");
    }
  });
  const langSwitch = document.querySelector(".lang-switch");
  if (langSwitch) langSwitch.textContent = currentLang.toUpperCase();
}

// Đóng menu trên mobile khi click vào link
function myFunction() {
  const check = document.getElementById("check");
  if(check) check.checked = false;
}

// Hiệu ứng cuộn trang (Reveal)
function reveal() {
  const windowHeight = window.innerHeight;
  const elementVisible = 150;
  
  document.querySelectorAll(".reveal").forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      // Bỏ comment dòng dưới nếu muốn ẩn lại khi cuộn lên
      // el.classList.remove("active"); 
    }
  });
}

/* ================= MAIN LOGIC ON LOAD ================= */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Khởi tạo ngôn ngữ
  const savedLang = localStorage.getItem("lang");
  const modal = document.getElementById("language-modal");
  
  if (savedLang) {
    currentLang = savedLang;
    if(modal) modal.classList.add("hidden");
  } else {
    // Nếu chưa chọn ngôn ngữ, hiện modal
    if(modal) modal.classList.remove("hidden");
  }
  updateContent();
  reveal(); // Chạy lần đầu

  // 2. Setup sự kiện cuộn (Scroll & Parallax)
  window.addEventListener("scroll", () => {
    reveal();
    
    // Parallax Effects
    const offset = window.pageYOffset;
    const parallax = document.getElementById("home-img-lg");
    const parallax1 = document.getElementById("parallax1");
    const parallax2 = document.getElementById("parallax2");

    if (parallax) parallax.style.backgroundPositionX = offset * -0.25 - 300 + "px";
    if (parallax1) parallax1.style.backgroundPositionY = (offset - 4000) * 0.1 + "px";
    if (parallax2) parallax2.style.backgroundPositionY = (offset - 4800) * -0.1 + "px";
  });

  // 3. Setup Music Player
  setupMusic();

  // 4. Setup Countdown
  setupCountdown();
});

/* ================= MUSIC PLAYER LOGIC ================= */
function setupMusic() {
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-toggle");
  
  if (!music || !musicBtn) return;
  
  const musicIcon = musicBtn.querySelector("i");
  let isPlaying = false;
  let fadeInterval = null;

  music.volume = 0;

  // Kiểm tra trạng thái lưu
  const savedMusic = localStorage.getItem("musicState");
  
  // Hàm Play
  function playMusic() {
    clearInterval(fadeInterval);
    // Promise để xử lý lỗi autoplay policy
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        fadeInterval = setInterval(() => {
          if (music.volume < 0.9) {
            music.volume += 0.05;
          } else {
            music.volume = 1;
            clearInterval(fadeInterval);
          }
        }, 100);
        isPlaying = true;
        updateIcon();
        localStorage.setItem("musicState", "on");
      }).catch(error => {
        console.log("Autoplay blocked by browser policy");
      });
    }
  }

  // Hàm Pause
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
    updateIcon();
    localStorage.setItem("musicState", "off");
  }

  function updateIcon() {
    if (isPlaying) {
      musicIcon.classList.remove("fa-volume-mute");
      musicIcon.classList.add("fa-volume-up");
      musicBtn.classList.add("playing");
    } else {
      musicIcon.classList.remove("fa-volume-up");
      musicIcon.classList.add("fa-volume-mute");
      musicBtn.classList.remove("playing");
    }
  }

  // Click handler
  musicBtn.addEventListener("click", () => {
    if (!isPlaying) playMusic();
    else pauseMusic();
  });

  // Tự động phát nếu đã lưu (cần user interaction trước đó trên trang)
  if (savedMusic === "on") {
    // Thử phát, nếu lỗi (do chưa click) thì thôi
    music.play().then(() => {
       music.volume = 1;
       isPlaying = true;
       updateIcon();
    }).catch(() => {
       // Browser block autoplay
    });
  }
}

/* ================= COUNTDOWN & FIREWORKS LOGIC ================= */
function setupCountdown() {
  const targetDate = new Date("2025-12-21T09:00:00").getTime();
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  let fireworksStarted = false;

  const timer = setInterval(() => {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      if(daysEl) daysEl.textContent = "00";
      if(hoursEl) hoursEl.textContent = "00";
      if(minutesEl) minutesEl.textContent = "00";
      if(secondsEl) secondsEl.textContent = "00";

      if (!fireworksStarted) {
        startFireworks();
        fireworksStarted = true;
      }
      return;
    }

    if(daysEl) daysEl.textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
    if(hoursEl) hoursEl.textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    if(minutesEl) minutesEl.textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    if(secondsEl) secondsEl.textContent = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");
  }, 1000);
}

function startFireworks() {
  createFirework("fireworks-left", "left");
  createFirework("fireworks-right", "right");
}

function createFirework(id, side) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = [];

  function launch() {
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: side === "left" ? 50 : canvas.width - 50,
        y: canvas.height,
        vx: (Math.random() - 0.5) * 6,
        vy: -Math.random() * 10 - 10,
        life: 100,
        color: `hsl(${Math.random() * 360},100%,60%)`
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15; // Gravity
      p.life--;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      
      if (p.life <= 0) particles.splice(i, 1);
    }
    requestAnimationFrame(animate);
  }

  setInterval(launch, 800);
  animate();
}
/* ================= TAB LOGIC (LOVE LETTER) ================= */
function openTab(evt, letterId) {
  // 1. Ẩn tất cả nội dung thư
  const contents = document.getElementsByClassName("letter-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active-content");
  }

  // 2. Xóa class active ở tất cả các nút
  const tabs = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // 3. Hiển thị nội dung được chọn và active nút đó
  document.getElementById(letterId).classList.add("active-content");
  evt.currentTarget.classList.add("active");
}