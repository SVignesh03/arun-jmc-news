/**
 * Category filtering functionality
 */

// Initialize categories
const initCategories = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const footerCategoryLinks = document.querySelectorAll('.footer-nav a');
  
    // Handle nav link clicks
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
  
        // Add active class to clicked link
        link.classList.add('active');
  
        // Get category to filter
        const category = link.getAttribute('data-category');
  
        // Filter articles by category
        filterByCategory(category);
  
        // Close mobile menu if open
        const menuToggle = document.querySelector('.menu-toggle');
        const navList = document.querySelector('.nav-list');
  
        if (menuToggle && menuToggle.classList.contains('active')) {
          menuToggle.classList.remove('active');
          navList.classList.remove('active');
        }
      });
    });
  
    // Handle footer category links
    footerCategoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Get category to filter
        const category = link.getAttribute('data-category');
  
        // Update active nav link
        navLinks.forEach(l => {
          if (l.getAttribute('data-category') === category) {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });
  
        // Filter articles by category
        filterByCategory(category);
  
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  };
  
  // Filter articles by category
  const filterByCategory = (category) => {
    if (category === 'all') {
      document.querySelector('.hero')?.classList.remove('hidden');
      document.querySelector('.top-stories')?.classList.remove('hidden');
      document.querySelectorAll('.category-section').forEach(section => {
        section.classList.remove('hidden');
      });
      return;
    }
  
    document.querySelector('.hero')?.classList.add('hidden');
    document.querySelector('.top-stories')?.classList.add('hidden');
    document.querySelectorAll('.category-section').forEach(section => {
      section.classList.add('hidden');
    });
  
    const categorySection = document.querySelector(`#${category}-section`);
    if (categorySection) {
      categorySection.classList.remove('hidden');
    }
  };
  
  // Initialize categories when DOM is loaded
  document.addEventListener('DOMContentLoaded', initCategories);
  