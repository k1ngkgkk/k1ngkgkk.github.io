const toggleBtn = document.getElementById('modeToggle');
const darkPref = localStorage.getItem('darkMode');

if(darkPref === 'true') {
  document.body.classList.add('dark');
  toggleBtn.textContent = 'Light Mode';
} else {
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
  document.body.style.backgroundPosition = `${-scrollY*0.3}px ${-scrollY*0.3}px`;
});
