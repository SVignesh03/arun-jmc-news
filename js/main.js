/**
 * Main JavaScript file
 */

// Initialize mobile menu
const initMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
  
    if (menuToggle && navList) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
      });
    }
  };
  
  // Render featured article
  const renderFeaturedArticle = () => {
    const featuredArticleContainer = document.querySelector('#featured-article');
  
    if (!featuredArticleContainer) {
      return;
    }
  
    // Find featured article
    const featuredArticle = articles.find(article => article.featured);
  
    if (!featuredArticle) {
      return;
    }
  
    // Create featured article HTML
    featuredArticleContainer.innerHTML = `
      <img src="${featuredArticle.image}" alt="${featuredArticle.title}" class="featured-image">
      <div class="featured-content">
        <span class="featured-category">${featuredArticle.category}</span>
        <h2 class="featured-title">${featuredArticle.title}</h2>
        <p class="featured-summary">${featuredArticle.summary}</p>
        <div class="featured-meta">
          <span class="featured-author">${featuredArticle.author}</span>
          <span class="featured-date">${featuredArticle.date}</span>
          <span class="read-time">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${formatReadTime(featuredArticle.readTime)}
          </span>
        </div>
      </div>
    `;
  
    // Add click event to open modal
    featuredArticleContainer.addEventListener('click', () => {
    //   showArticleModal(featuredArticle.id);
    window.location.href = `article/${article.id}.html`;
    });
  };
  
  // Render top stories
  const renderTopStories = () => {
    const topStoriesContainer = document.querySelector('#top-stories');
  
    if (!topStoriesContainer) {
      return;
    }
  
    // Get latest articles (excluding featured)
    const topStories = articles
      .filter(article => !article.featured)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  
    // Clear container
    topStoriesContainer.innerHTML = '';
  
    // Create article cards
    topStories.forEach(article => {
      const articleCard = createElement('div', {
        classes: 'article-card hover-lift hover-shadow',
        attributes: {
          'data-id': article.id
        },
        html: `
          <div class="article-image-container">
            <img src="${article.image}" alt="${article.title}" class="article-image">
          </div>
          <div class="article-content">
            <span class="article-category">${article.category}</span>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-summary">${article.summary}</p>
            <div class="article-meta">
              <span class="article-author">${article.author}</span>
              <div class="read-time">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                ${formatReadTime(article.readTime)}
              </div>
            </div>
          </div>
        `
      });
  
      // Add click event to open modal
      articleCard.addEventListener('click', () => {
        // showArticleModal(article.id);
        window.location.href = `article/${article.id}.html`;
      });
  
      topStoriesContainer.appendChild(articleCard);
    });
  };
  
  // Render category sections
  const renderCategorySections = () => {
    const categories = ['technology', 'business', 'politics', 'entertainment', 'health'];
  
    categories.forEach(category => {
      const categoryContainer = document.querySelector(`#${category}-section .articles-row`);
  
      if (!categoryContainer) {
        return;
      }
  
      // Get articles for this category
      const categoryArticles = articles
        .filter(article => article.category === category)
        .slice(0, 3);
  
      // Clear container
      categoryContainer.innerHTML = '';
  
      // Create article cards
      categoryArticles.forEach(article => {
        const articleCard = createElement('div', {
          classes: 'article-card hover-lift hover-shadow',
          attributes: {
            'data-id': article.id
          },
          html: `
            <div class="article-image-container">
              <img src="${article.image}" alt="${article.title}" class="article-image">
            </div>
            <div class="article-content">
              <span class="article-category">${article.category}</span>
              <h3 class="article-title">${article.title}</h3>
              <p class="article-summary">${article.summary}</p>
              <div class="article-meta">
                <span class="article-author">${article.author}</span>
                <div class="read-time">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  ${formatReadTime(article.readTime)}
                </div>
              </div>
            </div>
          `
        });
  
        // Add click event to open modal
        articleCard.addEventListener('click', () => {
        //   showArticleModal(article.id);
        window.location.href = `article/${article.id}.html`;
        });
  
        categoryContainer.appendChild(articleCard);
      });
    });
  };
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    renderFeaturedArticle();
    renderTopStories();
    renderCategorySections();
  });
  