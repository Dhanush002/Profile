// Auto-scrolling function
function autoScroll() {
    let currentSlide = 1;
    const totalSlides = document.querySelectorAll('.slider img').length;
  
    setInterval(() => {
      currentSlide = (currentSlide % totalSlides) + 1;
      document.querySelector('.slider').scrollTo({
        left: (currentSlide - 1) * document.querySelector('.slider img').offsetWidth,
        behavior: 'smooth'
      });
    }, 5000); // Change the interval (in milliseconds) as needed
  }
  
  // Call the auto-scrolling function when the page loads
  window.addEventListener('load', autoScroll);
  