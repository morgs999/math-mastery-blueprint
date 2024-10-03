const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const paragraph = document.querySelector('.paragraph');

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);

window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    var parallax = document.querySelector('.parallax');
    var coords = '50% ' + -(scrolled * 0.5) + 'px';
    parallax.style.backgroundPosition = coords;
});