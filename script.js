const toggleBtn = document.getElementById('modeToggle');
const darkPref = localStorage.getItem('darkMode');

if(darkPref === 'true') {
  document.body.classList.add('dark');
  toggleBtn.textContent = 'Light Mode';
} else {
  document.body.classList.remove('dark');
  toggleBtn.textContent = 'Dark Mode';
}

function toggleDark() {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
  toggleBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
}

toggleBtn.addEventListener('click', toggleDark);

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.body.style.setProperty('--scroll-x', `${-scrollY * 0.3}px`);
  document.body.style.setProperty('--scroll-y', `${-scrollY * 0.3}px`);
});

function resetTypingAnimation() {
  const bookItems = document.querySelectorAll('.book-item');

  bookItems.forEach(item => {
    const bookInfo = item.querySelector('.book-info');
    
    item.addEventListener('mouseenter', () => {
      bookInfo.style.animation = 'none';
      void bookInfo.offsetWidth;
      bookInfo.style.animation = 'typing 1s steps(40, end) forwards';
    });

    item.addEventListener('mouseleave', () => {
      bookInfo.style.animation = 'none';
    });
  });
}

if (document.querySelector('.reading-section')) {
    resetTypingAnimation();
}
