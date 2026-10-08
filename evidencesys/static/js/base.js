const toggleButton = document.getElementById('theme-toggle');

// 1. Kontrola uložené preference v localStorage nebo systémového nastavení
const currentTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.classList.add('dark-theme');
  toggleButton.textContent = '☀️ Světlý režim';
} else {
  toggleButton.textContent = '🌙 Tmavý režim';
}

// 2. Reakce na kliknutí na tlačítko
toggleButton.addEventListener('click', () => {
  // Přepne třídu dark-theme na <body>
  document.body.classList.toggle('dark-theme');

  // Zjistí, zda je nyní aktivní tmavý režim
  const isDarkMode = document.body.classList.contains('dark-theme');

  // Aktualizuje text tlačítka a uloží stav do localStorage
  if (isDarkMode) {
    toggleButton.textContent = '☀️ Světlý režim';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = '🌙 Tmavý režim';
    localStorage.setItem('theme', 'light');
  }
});