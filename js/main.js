/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader)
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services-modal') , 
      modalBtns = document.querySelectorAll('.services-button') , 
      modalCloses = document.querySelectorAll('.services-modal-close') ;

let showModal = function(modalIndex) {
    modalViews[modalIndex].classList.add('active-modal')
}
let hideModal = function(modalIndex) {
    modalViews[modalIndex].classList.remove('active-modal')
}
modalBtns.forEach( (mb , i ) => {
    mb.addEventListener('click', () => {
        showModal(i);
    })
})


modalCloses.forEach( (mc , index) => {
    mc.addEventListener('click' , () => {
        hideModal(index);
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortofolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
function activeWork() {
    filters.forEach(f => f.classList.remove('active-work'));
    this.classList.add('active-work');
}
const filters = document.querySelectorAll('.work-item');
filters.forEach(f => f.addEventListener('click' , activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonial-container", {
    slidesPerView: 1,
    spaceBetween:24,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      }
    },
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]') ;

function scrollActive() {
    const scrollY = window.pageYOffset + 50;

    sections.forEach(currentSection => {
        const sectionHeight = currentSection.offsetHeight ,
              sectionTop = currentSection.offsetTop ,
              sectionId = currentSection.getAttribute('id') ;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-menu a[href="#${sectionId}"]`).classList.add('active-link');
        } else {
            document.querySelector(`.nav-menu a[href="#${sectionId}"]`).classList.remove('active-link');
        }
        
    })
    
}
window.addEventListener('scroll',scrollActive);

/*=============== LIGHT DARK THEME ===============*/ 


const lightModeToggle = document.querySelector('#theme-button');

/*
I want to check if the light mode is enabled
if light mode enabled ==> turn off
if light mode disabled ==> turn on
*/
const enableLightMode = () => {
    // 1. add the class light-mode to the body
    document.body.classList.add('light-mode');
    // 2. update lightMode in the localStorage
    localStorage.setItem('lightMode' , 'enabled');

    lightModeToggle.classList.remove('bx-moon')
    lightModeToggle.classList.add('bx-sun')
};

const disableLightMode = () => {
    // 1. remove the class light-mode to the body
    document.body.classList.remove('light-mode');
    // 2. update lightMode in the localStorage
    localStorage.setItem('lightMode' , 'disabled');

    lightModeToggle.classList.remove('bx-sun')
    lightModeToggle.classList.add('bx-moon')
};

if(localStorage.getItem('lightMode') === 'enabled') {
    enableLightMode();
} else {
    disableLightMode();
}


lightModeToggle.addEventListener('click' , () => {
    
    
    if (localStorage.getItem('lightMode') !== 'enabled') {
        enableLightMode();
        
    } else {
        disableLightMode();
        
    }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

