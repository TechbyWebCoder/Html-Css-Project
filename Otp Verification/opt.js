document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input');
  
    inputs.forEach(function(input, index) {
      input.addEventListener('input', function() {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
  
        if (index === inputs.length - 1 && input.value.length === 1) {
          document.querySelector('.form').submit();
        }
      });
  
      input.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && index > 0 && input.value.length === 0) {
          inputs[index - 1].focus();
        }
      });
    });
  });
  
