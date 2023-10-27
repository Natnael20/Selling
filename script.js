function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function updateCountdown() {
    const targetDate = new Date('2023-12-31 23:59:59').getTime(); // Set your target date and time
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
  
    const weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    document.getElementById('weeks').textContent = String(weeks).padStart(2, '0');
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }
  
  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call to set the countdown
  
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
      slides[index].classList.add('active');
      slides[(index + 1) % slides.length].classList.add('next');
      slides[(index - 1 + slides.length) % slides.length].classList.add('prev');
      
       // Highlight the active dot
      //dots.forEach(dot => dot.classList.remove('active-dot'));
      //dots[index].classList.add('active-dot');
  }
  
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }
  
  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }
  
  function goToSlide(index) {
      currentSlide = index;
      showSlide(currentSlide);
  }
  
  showSlide(currentSlide);
  
  // Auto advance to the next slide every 3 seconds
  setInterval(nextSlide, 9000);


  // Function to scroll to the top of the page smoothly
function scrollToTop() {
  // Smooth scrolling to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show the "Back to Top" button when the user scrolls down
window.addEventListener('scroll', () => {
  const backToTopButton = document.querySelector('.back-to-top');
  
  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

