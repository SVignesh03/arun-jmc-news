/**
 * Search functionality
 */

// Initialize search
const initSearch = () => {
    const searchToggle = $('.search-toggle');
    const searchFormContainer = $('.search-form-container');
    const searchForm = $('.search-form');
    const searchInput = $('.search-input');
    const searchResults = $('.search-results');
    const resultsContainer = $('.results-container');
    const closeSearch = $('.close-search');
  
    // Toggle search form visibility
    if (searchToggle) {
      searchToggle.addEventListener('click', () => {
        toggleClass(searchFormContainer, 'active');
        if (searchFormContainer.classList.contains('active')) {
          searchInput.focus();
        }
      });
    }
  
    // Close search results
    if (closeSearch) {
      closeSearch.addEventListener('click', () => {
        toggleVisibility(searchResults, false);
        resultsContainer.innerHTML = '';
      });
    }
  
    // Handle search form submission
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const query = searchInput.value.trim().toLowerCase();
  
        if (query.length < 2) {
          return;
        }
  
        performSearch(query);
        toggleClass(searchFormContainer, 'active');
      });
    }
  
    // Handle clicks outside search form
    document.addEventListener('click', (e) => {
      if (searchFormContainer && searchFormContainer.classList.contains('active')) {
        if (!searchFormContainer.contains(e.target) && e.target !== searchToggle) {
          toggleClass(searchFormContainer, 'active');
        }
      }
    });
  };
  
  // Perform search
  const performSearch = (query) => {
    const searchResultsElement = $('.search-results');
    const resultsContainer = $('.results-container');
  
    // Filter articles by query
    const searchResults = articles.filter(article => {
      return (
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    });
  
    // Clear previous results
    resultsContainer.innerHTML = '';
  
    if (searchResults.length === 0) {
      resultsContainer.innerHTML = `
        <div class="no-results">
          <p>No results found for "${query}"</p>
        </div>
      `;
    } else {
      // Build results
      searchResults.forEach(article => {
        const articleElement = createElement('div', {
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
                <span class="read-time">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  ${formatReadTime(article.readTime)}
                </span>
              </div>
            </div>
          `
        });
  
        articleElement.addEventListener('click', () => {
        //   showArticleModal(article.id);
        window.location.href = `article.html?id=${article.id}`;
        });
  
        resultsContainer.appendChild(articleElement);
      });
    }
  
    // Show results
    toggleVisibility(searchResultsElement, true);
  };
  
  // Initialize search when DOM is loaded
  document.addEventListener('DOMContentLoaded', initSearch);
  