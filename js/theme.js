/**
 * Theme switching functionality
 */

// Initialize theme from local storage or default to light
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  };
  
  // Set theme on body and store in local storage
  const setTheme = (theme) => {
    if (theme === 'dark') {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
    
    localStorage.setItem('theme', theme);
  };
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  
  // Initialize theme when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // Add event listener to theme toggle button
    const themeToggle = $('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
  });