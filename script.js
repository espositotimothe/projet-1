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
