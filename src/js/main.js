// Custom Scripts
'use strict';
document.addEventListener('DOMContentLoaded', () => {

	const burger = document.querySelector('.hamburger'),
		  mobile = document.querySelector('.mobile'),
		  ul = document.querySelector('.header_nav-ul'),
		  modal = document.querySelector('.header_nav-modal'),
		  logo = document.querySelector('.logo'),
		  header = document.querySelector('.header_nav'),
		  heart = document.querySelector('.header_nav-modal .favorite img'),
		  person = document.querySelector('.header_nav-modal .backet img'),
	      bag = document.querySelector('.header_nav-modal .person img'),
		  goods = document.querySelectorAll('.goods');






function movingContent () {
			if(window.innerWidth <= 768) {
					mobile.appendChild(ul);
					mobile.appendChild(modal);
					heart.src = 'img/logo/orange-h.svg';
					person.src = 'img/logo/orange-p.svg';
					bag.src = 'img/logo/orange-b.svg';
				}  else {
					header.appendChild(ul);
					header.appendChild(modal);
					heart.src = 'img/logo/heart.svg';
					person.src = 'img/logo/person.svg';
					bag.src = 'img/logo/bag.svg';
				}
}
movingContent()

		window.addEventListener('resize', () => {
			movingContent();
				
		})

	burger.addEventListener('click', () => {
		burger.classList.toggle('is-active');
		mobile.classList.toggle('active');
	});

	const desctBtn = document.querySelector('.carry_descr .button');
	const head = document.querySelector('.head');
	const carry = document.querySelector('.carry_descr')

	function movingBtn () {
		if(innerWidth < 768) {
			head.appendChild(desctBtn);
		} else {
			carry.appendChild(desctBtn);
		}
	}


// Центрирование нечетных карточек

let isMobile = window.innerWidth <= 768;

function goodsLeft () {
	goods.forEach((item, index) => {
    if (index % 2 === 0) {  // 1, 3, 5 элементы
		if(window.getComputedStyle(item).marginLeft == '0px') {
			item.style.marginLeft = 'auto';
		} else {
			item.style.marginLeft = '0px';
		}
    }
  });
}


function checkWidthChange() {
  let currentIsMobile = window.innerWidth <= 768;

  if (currentIsMobile !== isMobile) {
    isMobile = currentIsMobile;

    if (isMobile) {
		goodsLeft()
      console.log('Перешли в мобильный режим (768px)');
    } else {
		goodsLeft()
      console.log('Перешли в десктопный режим (768px)');
    }
  }
}

window.addEventListener('resize', checkWidthChange);
window.addEventListener('resize', movingBtn);


// Иницилизируем слайдер

 const tabNav = {
	navigation: document.querySelector('[data-navigation]'), // один целый блок 
	content: document.querySelector('[data-main-content]') // один целый блок 
 }
 
tabNav.navigation.addEventListener('click', changeNavigation) // делегируем событие через родителя



const swiper = new Swiper('.swiper', {
  grid: {
    rows: 2, // 2 ряда
    fill: 'row', // заполнять по рядам
  },
	slidesPerGroup: 2, 
  slidesPerView: 2, // 3 колонки на экране
  spaceBetween: 20, // расстояние между карточками
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3, // 2 колонки при <=768px
      grid: {
        rows: 2, // остаётся 2 ряда
      },
      slidesPerGroup: 1, // листает сразу 4 карточки
    },
  },
  autoplay: true,
  speed:1200,

});



//Табы

function changeNavigation (event) {
	const {target} = event; // получем объект события 
	if(target.nodeName !== 'BUTTON') return; // проверяем на какой блок был клик
	const currentButton = target; // как проверили получаем button нак который был клик
	const prevActiveBtn = tabNav.navigation.querySelector('.greenactive'); // получаем первый блок с классом geenactive
	const prevActiveCtn = tabNav.content.querySelector('.item-active'); // получем с втророго блока первый блок с классом item-active
	const currentTab  = currentButton.dataset.tab; // currentTab присваемев дата атрубут прокликонной кнопки
	console.log(currentTab);

	if(prevActiveBtn) { // проверяет сущуетвует ли блок с классом grennactive?
	 prevActiveBtn.classList.remove('greenactive'); // удаляет тот класс
	 prevActiveCtn.classList.remove('item-active'); // также 
	}
	const currentContent = tabNav.content.querySelector(`[data-content=${currentTab}]`); // здеь ставится значение атрибута из currentTab

	currentButton.classList.add('greenactive'); // потом добваляем класс
	currentContent.classList.add('item-active'); // также 
	console.log(target);
}
//slider 


});

	
