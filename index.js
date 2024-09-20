var splide = new Splide( '.splide', {
  type   : 'loop',
  autoplay:true,
  perPage: 6,
  perMove: 1,
  drag: 'true',
  pagination:false,
  arrow:false,
} );

splide.mount();
new Splide( '.splide', {
  classes: {
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
  },
} );
var splide = new Splide( '.banner-Splide', {
  type   : 'loop',
  autoplay:true,
  perPage: 1,
  perMove: 1,
  drag: 'true',
  pagination:false,
} );
splide.mount();
new Splide( '.banner-Splide', {
  arrows: false,
} ).mount();
const notification_popup = document.querySelector('.notification-popup');
const notification = document.querySelector('.notification');

let isClicked = false;

notification.addEventListener('mouseover', () => {
  if (!isClicked) {
    notification_popup.style.display = 'block';
  }
});

notification.addEventListener('mouseout', () => {
  if (!isClicked) {
    notification_popup.style.display = 'none';
  }
});

notification.addEventListener('click', () => {
  isClicked = !isClicked; // Toggle trạng thái khi click
  notification_popup.style.display = isClicked ? 'block' : 'none';
});
const change_language = document.querySelector('.change-language');
const language = document.querySelector('.language');


language.addEventListener('mouseover' , ()=>{
  change_language.style.display = 'block';
});

language.addEventListener('mouseout' , ()=>{
  change_language.style.display = 'none';
});

const button_next = document.querySelector('.button-next ');
const button_prev = document.querySelector('.button-prev ');
const pages1 = document.querySelectorAll('.item-1');
const pages2 = document.querySelectorAll('.item-2');
const banner = document.querySelector('.carousel-5');
const icon_next = document.querySelector('.button-next i');
const icon_prev = document.querySelector('.button-prev i');
const icon = document.querySelector('.button span');
button_next.addEventListener('click', () => {
    pages1.forEach(page1 => {
        page1.style.display = 'none';
    });
    button_next.style.display = 'none';
    button_prev.style.display ='block';
    banner.addEventListener('mouseover', () => {
      button_prev.classList.add('button-change');
      icon_prev.classList.remove('icon')
      icon_prev.classList.add('icon-change-left');

    });
    
    banner.addEventListener('mouseout', () => {
      button_prev.classList.remove('button-change');
      icon_prev.classList.add('icon')
      icon_prev.classList.remove('icon-change-left');
    });
    
});
button_prev.addEventListener('click' ,()=>{
  pages1.forEach(page1 =>{
    page1.style.display = 'block';
  })
  button_prev.style.display ='none';
  button_next.style.display ='block';
  banner.addEventListener('mouseover', () => {
    button_next.classList.add('button-change');
    icon_next.classList.remove('icon');
    icon_next.classList.add('icon-change');

  
  });
  
  banner.addEventListener('mouseout', () => {
    button_next.classList.remove('button-change');
    icon_next.classList.add('icon');
    icon_next.classList.remove('icon-change')
  });
  
})
banner.addEventListener('mouseover', () => {
  button_next.classList.add('button-change');
  icon_next.classList.remove('icon');
  icon_next.classList.add('icon-change-right');

});

banner.addEventListener('mouseout', () => {
  button_next.classList.remove('button-change');
  icon_next.classList.add('icon');
  icon_next.classList.remove('icon-change-right')

});
