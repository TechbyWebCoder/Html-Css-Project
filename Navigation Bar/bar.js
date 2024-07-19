function select(element) {
    var nav = document.querySelector('.nav');
    var indicator = document.querySelector('.indicator');
    var activeclr = element.getAttribute('data-clr');

    nav.querySelectorAll('.navitem').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    document.documentElement.style.setProperty('--activeclr', activeclr);
    indicator.style.left = '${element.offsetLeft}px';
    indicator.style.background = activeclr;
}
