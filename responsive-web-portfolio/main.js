// SWIPER JS

const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });


// ------------ Navbar --------------------- >

const menuOpen = document.querySelector('#open');
const menuClose = document.querySelector('#close');
const menu = document.querySelector('nav .container ul');

menuOpen.addEventListener('click', () => {
  menu.style.display = 'block';
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
})

menuClose.addEventListener('click', () => {
  menu.style.display = 'none';
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
})


// ------------------- Navbar Active Work ---------- >

const items = document.querySelectorAll('nav .container ul li a');

const removeActiveFunction = () => {
  items.forEach(item => {
    item.classList.remove('active');
  })
}


items.forEach(item => {
  item.addEventListener('click', () => {
    removeActiveFunction();
    item.classList.add('active');
  });
})


// About Read more --------------- >

const readMoreBtn = document.querySelector('.read-more-btn');
const readMore = document.querySelector('.read-more');

readMoreBtn.addEventListener('click', () => {
  readMore.classList.toggle('active');
  if(readMore.classList.contains('active')){
    readMoreBtn.textContent = 'Less';
  }
  else{
    readMoreBtn.textContent = 'Show More';
  }
})



//  ----------- Skills Work --------------- >

const skillItems = document.querySelectorAll('.skills .skill');



skillItems.forEach(skill => {
  skill.querySelector('.right span').addEventListener('click', () => {
    skill.querySelector('.items').classList.toggle('active');
  })
})


// ---------- Add Box Shadow In Navbar ------------ >


window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0);
})


