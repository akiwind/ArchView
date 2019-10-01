const hamburger = document.querySelector('.hamburger');
const navbox = document.querySelector('.navigation');


const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  navbox.classList.toggle('navigation--active');

}

hamburger.addEventListener('click', handleClick);