hero-banner
$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(document).ready(function() {
    $('.hamburger-menu').on('click', function() {
      $(this).toggleClass('cross');
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.single-item');
  
    function showItem(index) {
      items.forEach(item => item.classList.remove('active'));
      items[index].classList.add('active');
    }
  
    function nextItem() {
      const currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
      const nextIndex = (currentIndex + 1) % items.length;
      showItem(nextIndex);
    }
  
    // Change item every 3 seconds
    setInterval(nextItem, 3000);
  });
  