document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('.input');
    const svg = document.querySelector('svg');
  
    function handleSearch() {
      const searchText = input.value.trim();
      console.log("Search Text:", searchText);
    }
  
    input.addEventListener('input', handleSearch);
  
    svg.addEventListener('click', handleSearch);
  });
  
