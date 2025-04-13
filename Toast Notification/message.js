// script.js

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const toastsContainer = document.getElementById('toasts');
  
    button.addEventListener('click', () => {
      showToast('This is a toast notification!');
    });
  
    function showToast(message) {
      const toast = document.createElement('div');
      toast.classList.add('toast');
      toast.textContent = message;
  
      toastsContainer.appendChild(toast);
  
      setTimeout(() => {
        toast.classList.add('show');
      }, 10);
  
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          toastsContainer.removeChild(toast);
        }, 500);
      }, 3000);
    }
  });
  
