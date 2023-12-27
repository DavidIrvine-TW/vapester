// hero-banner
$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(document).ready(function() {
    // Add click event listener to the button
    $('#myButton').on('click', function() {
      // Log a message to the console when the button is clicked
      console.log('Button clicked!');
    });
  
    // Add a passive scroll-blocking touchmove event listener
    document.addEventListener('touchmove', function() {
      // Your touchmove event handling code here
    }, { passive: true });
  });
  