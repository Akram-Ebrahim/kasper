// Search (Header Section)

// ----------------------------------------------------------

// Images Filters (Portfolio Section)

// ----------------------------------------------------------

/*/ Scroll To Top Button /*/
let scrollToTopBtn = document.querySelector('.scroll-to-top')
// Default State (hidden)
scrollToTopBtn.style.visibility = 0;
scrollToTopBtn.style.opacity = 0;
// On Scrolling
window.onscroll = function() {
  if (window.scrollY >= 300) {
    // Show Button
    scrollToTopBtn.style.visibility = 1;
    scrollToTopBtn.style.opacity = 1;
    // Make Action (Scroll To Top)
    scrollToTopBtn.addEventListener('click',(e) => {
      window.scrollTo(0,0);
    });
  } else {
    // Hide Button (on Y = 0)
    scrollToTopBtn.style.visibility = 0;
    scrollToTopBtn.style.opacity = 0;
  }
}

// ----------------------------------------------------------

// Image Slider (Landing Section)
let landing = document.querySelector('.landing');
let bullets = document.querySelectorAll('.landing .bullets li');
function UpdateBullets() {
  // Remove Active From All Bullets
  bullets.forEach((bullet) => {
    bullet.classList.remove('active')
  });
  // Add Active To First One
  bullets[currentIdx].classList.add('active');
}
let myImgs = ['images/landing.jpg','images/landing2.jpg','images/landing3.jpg'];
let currentIdx = 0;

let changeBGBtn = document.querySelectorAll('.change-background').forEach((btn) => {
  btn.addEventListener('click',(e) => {
    if(e.currentTarget.classList.contains('previous')) {
      currentIdx--;
      if (currentIdx < 0){ 
        currentIdx = myImgs.length - 1; // 2
      }
    } else if (e.currentTarget.classList.contains('next')) {
      currentIdx++;
      if (currentIdx >= myImgs.length){ 
        currentIdx = 0; // 0
      }
    }
    
    UpdateBullets();
    landing.style.backgroundImage = `url(${myImgs[currentIdx]})`;
  })

//   // Automatic
//   setInterval(() => {
//     currentIdx = (currentIdx + 1) % myImgs.length;
//     UpdateBullets();
//     landing.style.backgroundImage = `url(${myImgs[currentIdx]})`;
//   },5000)
})

// ----------------------------------------------------------

// Counter on Scroll (Stats Section)
let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll('.stats .box .number');
let started = false;

function startCount(el) {
  let goal = parseFloat(el.dataset.goal);
  let duration = 2000; // Entire Duration
  let intervalTime = 20; // Each 20 millisecond , it will change
  let steps = duration / intervalTime; // 100 step for each element
  let step = goal / steps; // each element has its own step counter
  let current = 0; // initial value

  let counter = setInterval(() => {
  current += step; // each 20 ms it will work

  if (current >= goal) {
    el.textContent = goal % 1 === 0 ? goal : goal.toFixed(3); // if goal int number ? return it : convert to float
    clearInterval(counter);
  } else {
    el.textContent = goal % 1 === 0 ? Math.floor(current) : current.toFixed(3);
  }
}, intervalTime);
}


window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }
  }
});

// ----------------------------------------------------------

// Loading Bars on Scroll (Our Skills Section)
let skillsSection = document.querySelector(".skills");
let dataProgress = document.querySelectorAll('.skills .prog-holder .prog span');
let startedOrNot = false;

function startProgress(el) {
  let progress = parseFloat(el.dataset.progress);
  let duration = 1500; // Entire Duration
  let intervalTime = 20; // Each 20 millisecond , it will change
  let steps = duration / intervalTime; // 100 step for each element
  let step = progress / steps; // each element has its own step counter
  let current = 0; // initial value

  let counter = setInterval(() => {
  current += step; // each 20 ms it will work
  el.dataset.progress = `${Math.floor(current)}%`; // progress info

  if (current >= progress) {
    el.style.width = `${current}%`;
    clearInterval(counter);
  } else {
    el.style.width = `${current}%`;
  }
}, intervalTime);
}
window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop - 600) {
    if (!startedOrNot) {
      dataProgress.forEach((prog) => startProgress(prog));
      startedOrNot = true;
    }
  }
});

// ----------------------------------------------------------

// Update Copyright
let copyright = document.querySelector('.copyright');
copyright.innerHTML = `&copy; ${new Date().getFullYear()} <span>Kasper</span> All Right Reserved`