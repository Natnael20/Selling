function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function updateCountdown() {
    const targetDate = new Date('2024-12-31 23:59:59').getTime(); // Set your target date and time
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
function toggleHeart(element, heartCountId) {
    var heartIcon = element.querySelector('.favi');
    var heartCount = document.getElementById(heartCountId);
  
    heartIcon.classList.toggle('red'); // Toggle the 'red' class on the heart icon
  
    if (heartIcon.classList.contains('red')) { 
        heartCount.textContent = parseInt(heartCount.textContent) + 1;
    } else {
        heartCount.textContent = parseInt(heartCount.textContent) - 1;
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const topElements = document.querySelectorAll('.top');
const bottomElements = document.querySelectorAll('.bottom');
const leftElements = document.querySelectorAll('.left');
const rightElements = document.querySelectorAll('.right');

topElements.forEach((el) => observer.observe(el));
bottomElements.forEach((el) => observer.observe(el));
leftElements.forEach((el) => observer.observe(el));
rightElements.forEach((el) => observer.observe(el));