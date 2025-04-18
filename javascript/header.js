const burgerMenu = document.querySelector('.burger-menu');
const optionsContainer = document.querySelector('.options-container');

burgerMenu.addEventListener('click', () => {
    optionsContainer.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 460) {
      document.querySelector('.header').style.color = 'black';
    
      document.querySelectorAll('.options-container a').forEach(option => option.style.color = 'black');
  } else {
    document.querySelector('.header').style.color = 'white';
    document.querySelectorAll('.options-container a').forEach(option => option.style.color = 'white');
    
    }
  });
  
  
  