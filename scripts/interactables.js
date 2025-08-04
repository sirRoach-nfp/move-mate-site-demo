
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navMenu');

//modal

const modal = document.querySelector('.modal__mainWrapper')
const modalOpen = document.querySelector('.globalComponents__button__ctaPrimary')
const modalClose = document.querySelector('.modal__contentWrapper__header__close')

burger.addEventListener('click',()=>{
    console.log('cliked')
    navMenu.classList.toggle('active');
})




modalOpen.addEventListener('click',()=>{
  console.log('clicked')
  modal.classList.remove('hide')
})

modalClose.addEventListener('click',()=>[
  modal.classList.add('hide')
])