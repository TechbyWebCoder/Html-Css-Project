const button = document.querySelector('button');

button.addEventListener('mouseover', function() {
  button.classList.add('hovered');
});

button.addEventListener('mouseout', function() {
  button.classList.remove('hovered');
});
