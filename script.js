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
            } else {
                navbarMenu.style.display = 'none'; 
            }
        }
        
        
        handleResize();
        
            window.addEventListener('resize', handleResize);