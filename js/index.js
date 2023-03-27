// mobile nav
const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('openBtn')
const mobMenu = document.querySelector('.mobile-nav');

openBtn.addEventListener('click', function(){
  mobMenu.style.display = 'flex';
})

closeBtn.addEventListener('click', function(){
  mobMenu.style.display = 'none';
})