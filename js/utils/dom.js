/**
 * DOM utility functions
 */

// Select a single element
const $ = (selector, parent = document) => {
    return parent.querySelector(selector);
  };
  
  // Select multiple elements
  const $$ = (selector, parent = document) => {
    return [...parent.querySelectorAll(selector)];
  };
  
  // Create element with attributes and children
  const createElement = (tag, options = {}) => {
    const element = document.createElement(tag);
    
    // Set attributes
    if (options.attributes) {
      Object.entries(options.attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }
    
    // Set text content
    if (options.text) {
      element.textContent = options.text;
    }
    
    // Set HTML content
    if (options.html) {
      element.innerHTML = options.html;
    }
    
    // Add classes
    if (options.classes) {
      if (Array.isArray(options.classes)) {
        options.classes.forEach(cls => element.classList.add(cls));
      } else {
        element.className = options.classes;
      }
    }
    
    // Add event listeners
    if (options.events) {
      Object.entries(options.events).forEach(([event, callback]) => {
        element.addEventListener(event, callback);
      });
    }
    
    // Append children
    if (options.children) {
      options.children.forEach(child => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else {
          element.appendChild(child);
        }
      });
    }
    
    return element;
  };
  
  // Add event listener with optional delegation
  const on = (eventType, selector, callback, parent = document) => {
    parent.addEventListener(eventType, (e) => {
      if (selector) {
        const targetElement = e.target.closest(selector);
        if (targetElement) {
          callback(e, targetElement);
        }
      } else {
        callback(e);
      }
    });
  };
  
  // Toggle class on element
  const toggleClass = (element, className) => {
    element.classList.toggle(className);
    return element.classList.contains(className);
  };
  
  // Add class to element
  const addClass = (element, className) => {
    if (Array.isArray(className)) {
      className.forEach(cls => element.classList.add(cls));
    } else {
      element.classList.add(className);
    }
    return element;
  };
  
  // Remove class from element
  const removeClass = (element, className) => {
    if (Array.isArray(className)) {
      className.forEach(cls => element.classList.remove(cls));
    } else {
      element.classList.remove(className);
    }
    return element;
  };
  
  // Toggle element visibility
  const toggleVisibility = (element, isVisible) => {
    if (isVisible === undefined) {
      isVisible = element.classList.contains('hidden');
    }
    
    if (isVisible) {
      removeClass(element, 'hidden');
    } else {
      addClass(element, 'hidden');
    }
    
    return isVisible;
  };
  
  // Animate element
  const animate = (element, animation, duration = 300) => {
    return new Promise(resolve => {
      addClass(element, animation);
      
      setTimeout(() => {
        removeClass(element, animation);
        resolve(element);
      }, duration);
    });
  };