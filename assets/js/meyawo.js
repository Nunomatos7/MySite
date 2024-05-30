/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});



// Function to switch to the next slide
function nextSlide() {
  document.querySelector('.carousel-control-next').click();
}

// Function to switch to the previous slide
function prevSlide() {
  document.querySelector('.carousel-control-prev').click();
}

// Function to start the carousel auto-play
function startCarousel() {
  // Interval to switch slides every 3 seconds
  setInterval(nextSlide, 7000);
}

// Call the function to start the carousel auto-play when the page loads
window.onload = startCarousel;
