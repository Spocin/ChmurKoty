const themeKey = 'app-theme';
const darkModeClassName = 'app-dark';

if (
  localStorage.getItem(themeKey) === 'dark' ||
  (!(themeKey in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  if (document && document.documentElement) {
    document.documentElement.classList.add(darkModeClassName);
    localStorage.setItem(themeKey, 'dark');
  }
} else {
  if (document && document.documentElement) {
    document.documentElement.classList.remove(darkModeClassName);
    localStorage.setItem(themeKey, 'light');
  }
}
