const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

const applyTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  }
};

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    applyTheme(savedTheme);
    return;
  }

  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(prefersLight ? 'light' : 'dark');
};

initializeTheme();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const nextTheme = current === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}

lucide.createIcons();

const initializeProgressBars = () => {
  document.querySelectorAll('.progress-fill').forEach((bar) => {
    const target = bar.style.getPropertyValue('--value');
    bar.style.width = target;
  });
};

const initializeOverallRing = () => {
  const ring = document.getElementById('overallRing');
  if (!ring) {
    return;
  }

  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const percent = 78;

  ring.style.strokeDasharray = `${circumference}`;
  ring.style.strokeDashoffset = `${circumference * (1 - percent / 100)}`;
};

initializeProgressBars();
initializeOverallRing();
