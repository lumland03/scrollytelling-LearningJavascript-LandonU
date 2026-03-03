const themeToggle = document.querySelector('#theme-toggle');
const dropdownContent = document.querySelector('.dropdown-content');
const lightToggle = document.querySelector('#light-theme'); 
const darkToggle = document.querySelector('#dark-theme') ;
const systemToggle = document.querySelector('#system-theme');

// Toggle dropdown on button click
themeToggle.addEventListener('click', function() {
    console.log('Theme toggle clicked');
  dropdownContent.classList.toggle('active');
});

// Close dropdown when a theme is selected
[lightToggle, darkToggle, systemToggle].forEach(button => {
  button.addEventListener('click', function() {
    dropdownContent.classList.remove('active');
  });
});

lightToggle.addEventListener('click', function() {
  setTheme('light');
});

darkToggle.addEventListener('click', function() {
  setTheme('dark');
});

systemToggle.addEventListener('click', function() {
  localStorage.setItem('theme', 'system');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
});

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}

// Add keyboard support (Enter/Space to activate)
[lightToggle, darkToggle, systemToggle].forEach(button => {
  button.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

