const button = document.getElementById('reservationButton');

button.addEventListener('mouseover', function() {
    button.textContent = 'Bientôt disponible';
});

button.addEventListener('mouseout', function() {
    button.textContent = 'Réservation';
});

var navbar = document.getElementById("navbar");

        var headerHeight = document.querySelector('header').offsetHeight;

        window.onscroll = function() {
            if (window.pageYOffset > headerHeight) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };

        const hamburger = document.getElementById('hamburger');
        const navbarMenu = document.getElementById('navbar').querySelector('ul');
        
        hamburger.addEventListener('click', () => {
           
            if (navbarMenu.style.display === 'block') {
                navbarMenu.style.display = 'none'; 
            } else {
                navbarMenu.style.display = 'block'; 
            }
        });

        function handleResize() {
            if (window.innerWidth > 768) {
                
                navbarMenu.style.display = 'flex'; 
                navbarMenu.style.flexDirection = 'row'; 
            } else {
                
                navbarMenu.style.display = 'none'; 
            }
        }
        
        handleResize();
        
        
        window.addEventListener('resize', handleResize);

       let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');
const totalImages = images.length;
const carousel = document.querySelector('.carousel');


function updateCarousel() {
    const translateXValue = -currentIndex * 100; 
    carousel.style.transform = `translateX(${translateXValue}%)`;
}


function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; 
    updateCarousel();
}


setInterval(nextImage, 3000);