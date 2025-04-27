// Function to fetch article data based on ID
const getArticleById = (id) => {
    return articles.find(article => article.id === id);
  }
  
  // Function to format read time
  const formatReadTime = (minutes) => {
    return `${minutes} min read`;
  }
  
  // Function to render the article page
  const renderArticlePage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id')); // Get id from URL
    console.log(articleId);
    
    if (isNaN(articleId)) {
      document.querySelector('#article-container').innerHTML = "<p>Invalid article ID.</p>";
      return;
    }
  
    const article = getArticleById(articleId);
    console.log(article.title);
  
    if (!article) {
      document.querySelector('#article-container').innerHTML = "<p>Article not found.</p>";
      return;
    }
  
    const articleContainer = document.querySelector('#article-container');
  
    articleContainer.innerHTML = `
      <div class="article-header">
        <h1 class="article-title">${article.title}</h1>
        <div class="article-meta">
          <span class="article-category">${article.category}</span>
          <span class="article-author">${article.author}</span>
          <span class="article-date">${article.date}</span>
          <span class="read-time">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${formatReadTime(article.readTime)}
          </span>
        </div>
      </div>
  
      <div class="article-content">
        <img src="${article.image}" alt="${article.title}" class="article-image">
        <p class="article-summary">${article.summary}</p>
        <div class="article-body">
          ${article.content}
        </div>
      </div>
    `;
  };
  
  // When DOM is ready
  document.addEventListener('DOMContentLoaded', renderArticlePage);
  console.log('DOM fully loaded');
  