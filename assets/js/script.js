'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
const heroTitle = document.getElementById('hero-title');
const texts = [
    'Your Ultimate Travel Guide',
    'Discover Your Next Adventure',
    'Discover new horizons',
    'Adventure awaits',
    'Travel the unknown',
    'Embrace the journey',
];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[index];
    if (!isDeleting && charIndex <= currentText.length) {
        heroTitle.textContent = currentText.substring(0, charIndex);
        charIndex++;
    } else if (isDeleting && charIndex >= 0) {
        heroTitle.textContent = currentText.substring(0, charIndex);
        charIndex--;
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            index = (index + 1) % texts.length;
        }
    }
    const typingSpeed = isDeleting ? 50 : 200; // Adjust typing speed
    setTimeout(typeText, typingSpeed);
}

typeText();

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("popular-list");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Default to International tab
document.getElementById("International").style.display = "block";

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000, // 3 seconds delay between slides
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
  });

  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('fullSizeImage');
  var closeBtn = document.getElementsByClassName('close')[0];

  // Get all gallery images
  var images = document.querySelectorAll('.gallery-image img');

  images.forEach(function (img) {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      swiper.autoplay.stop(); // Stop autoplay when modal is open
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = 'none';
    swiper.autoplay.start(); // Resume autoplay when modal is closed
  };

  modal.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = 'none';
      swiper.autoplay.start(); // Resume autoplay when modal is closed
    }
  };
});



function openTa(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Default tab open
document.getElementById("Inter").style.display = "block";