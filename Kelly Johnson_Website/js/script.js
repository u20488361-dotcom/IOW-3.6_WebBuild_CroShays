
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

//observing the sectio in view to indicate the active page in the navbar

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}, {
    rootMargin: "-20% 0px -20% 0px", // valid rootMargin with units like px or %
    threshold: 0.5 // value controling when a section is considered "visible"
});

sections.forEach(section => {
    observer.observe(section);
});


/*-----------CAROUSEL ------------------------*/

let currentIndex = 0;

function moveCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= totalItems) currentIndex = totalItems - 1;

  const offset = -currentIndex * items[0].offsetWidth;
  track.style.transform = `translateX(${offset}px)`;
}


/*--------------ACCORDIAN ---------------------*/

function toggleAccordion(header) {
  const item = header.parentElement;
  item.classList.toggle('active');
}

/*-------------- CARDS SHUFFLER WHY US SECTION ---------------------*/

$(".custom-carousel").owlCarousel({
  autoWidth: true,
  //loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

const buttons = document.getElementsByClassName('owl-nav disabled');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.display = 'none';
}

const dotss = document.getElementsByClassName('owl-dots disabled');

for (let i = 0; i < buttons.length; i++) {
  dotss[i].style.display = 'none';
}


/* ------------------- ANIMATION :) ---------------------------  */

function addClass() {
  document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);

/*var myElements = document.querySelectorAll(".letter");
console.log(myElements.length);
for (var i= 0; i < myElements.length ; i++) { 
   myElements[i].style.height = "500px"
}

//changing the height of the letter
*/

var myElements = document.querySelectorAll(".side");
console.log(myElements.length);
for (var i= 0; i < myElements.length ; i++) { 
   myElements[i].style.height = "250px"
}