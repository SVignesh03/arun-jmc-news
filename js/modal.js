/**
 * Modal functionality for article details
 */

// Initialize modal
const initModal = () => {
    const modalContainer = document.querySelector('#article-modal');
    const modalClose = document.querySelector('.modal-close');
  
    // Close modal when clicking the close button
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        closeModal();
      });
    }
  
    // Close modal when clicking outside the modal
    if (modalContainer) {
      modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
          closeModal();
        }
      });
    }
  
    // Close modal when pressing ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  };
  
  // Show article modal
  const showArticleModal = (articleId) => {
    const modalContainer = document.querySelector('#article-modal');
    const modalContent = document.querySelector('.modal-content');
  
    if (!modalContainer || !modalContent) {
      return;
    }
  
    // Find article by ID
    const article = articles.find(a => a.id === articleId);
  
    if (!article) {
      return;
    }
  
    // Populate modal content
    modalContent.innerHTML = `
      <div class="modal-image-container">
        <img src="${article.image}" alt="${article.title}" class="modal-image">
      </div>
      <span class="modal-category">${article.category}</span>
      <h2 class="modal-title">${article.title}</h2>
      <div class="modal-meta">
        <span class="modal-author">${article.author}</span>
        <span class="modal-date">${article.date}</span>
        <span class="read-time">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          ${formatReadTime(article.readTime)}
        </span>
      </div>
      <div class="modal-content-text">
        ${article.content}
      </div>
    `;
  
    // Show modal
    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  
  // Close modal
  const closeModal = () => {
    const modalContainer = document.querySelector('#article-modal');
  
    if (!modalContainer) {
      return;
    }
  
    modalContainer.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  // Initialize modal when DOM is loaded
  document.addEventListener('DOMContentLoaded', initModal);
  