const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const paragraph = document.querySelector('.paragraph');

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);


