document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("checkbox_toggle");
  
    function toggleTheme() {
      if (checkbox.checked) {
        document.body.classList.add("night-mode");
      } else {
        document.body.classList.remove("night-mode");
      }
    }
  
    checkbox.addEventListener("change", toggleTheme);
  
    toggleTheme();
  });
  
