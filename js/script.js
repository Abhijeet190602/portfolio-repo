// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/////////////// ///  Skills ////////////////

document.querySelectorAll('.circle').forEach(circle => {
  const percentage = circle.getAttribute('data-percentage');
  circle.style.setProperty('--percentage', `${percentage}%`);
});


//////////////////  swiper js     ///////////////////////
new Swiper('.skills-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      cardsPerView: 1
    },
    700: {
      cardsPerView: 2
    },
    1100: {
      cardsPerView: 3
    },
  }
});


// //////////////// contact form

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Your message has been sent!');
});