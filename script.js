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
let index = 0;

    function showNextImage() {
const carousel = document.querySelector('.carousel-images');
const images = carousel.querySelectorAll('img');
            index = (index + 1) % images.length;
carousel.style.transform = `translateX(-${index * 100}%)`;
        }
        
        setInterval(showNextImage, 3000); // Change l'image toutes les 3 secondes
        

        

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
