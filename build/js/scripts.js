// Custom Scripts
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let isMobile = false;
  const debouceMovingContent = debounce(movingContent, 5);
  debouceMovingContent();
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
//smoother scroll
  let smooth = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.6,
    smoothTouch: 0.1,
    effects: true,
  });


//fade in section 
const fadeUpDesctop = window.innerWidth <= 768;
if(!fadeUpDesctop) {
  gsap.utils.toArray('.fade-up').forEach(section => {
   
  gsap.fromTo(section,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
         start: "top 95%",
        toggleActions: 'play none none reverse',
      }
    }
  );
});

}



  //Burger menu
  const burger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".mobile");
  let menuOpen = false;
  let isAnimating = false;
  burger.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    if (!menuOpen) {
      overlay.classList.add("active");
      burger.classList.add("is-active");

      gsap.fromTo(
        overlay,
        { clipPath: "circle(0% at 100% 0%)" }, // Начинаем из правого верхнего угла
        {
          clipPath: "circle(150% at 50% 50%)", // Покрываем весь экран из центра
          duration: 0.7,
          ease: "power2.out",
          onStart: () => {
            if (typeof smooth !== "undefined") smooth.paused(true);
          },
          onComplete: () => {
            menuOpen = true;
            isAnimating = false;
          },
        }
      );
    } else {
      gsap.fromTo(
        overlay,
        { clipPath: "circle(150% at 50% 50%)" },
        {
          clipPath: "circle(0% at 100% 0%)",
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            overlay.classList.remove("active");
            burger.classList.remove("is-active");
            if (typeof smooth !== "undefined") smooth.paused(false);
            menuOpen = false;
            isAnimating = false;
          },
        }
      );
    }
  });

  //resizing
  window.addEventListener("resize", debouceMovingContent);
  //copy and delete content in mobile;

  const mobile = document.querySelector(".mobile");
  const headerNav = document.querySelector(".header_nav");
  const nav = document.querySelector(".header_nav-ul");
  const modal = document.querySelector(".header_nav-modal");
  const desctBtn = document.querySelector(".carry_descr .button");
  const head = document.querySelector(".head");
  const carry = document.querySelector(".carry_descr"),
    goods = document.querySelectorAll(".goods");

  function movingContent() {
    if (window.innerWidth <= 768) {
      if (!isMobile) {
        mobile.innerHTML = `
			<a href="#" class="logo">
                <img src="img/logo/logo.png" alt="">
            </a>
            <ul class="header_nav-ul">
                <li><a href="#" class="split-text-mobile">Главная</a></li>
                <li><a href="#" class="split-text-mobile">Магазин</a></li>
                <li><a href="#" class="split-text-mobile">О Нас</a></li>
                <li><a href="#" class="split-text-mobile">Блог</a></li>
                <li><a href="#" class="split-text-mobile">Контакты</a></li>
            </ul>
            <div class="header_nav-modal">
                <a href="#" class="favorite">
                <img src="img/logo/orange-h.svg" alt="heart">
                </a>
                <a href="#" class="backet"><img src="img/logo/orange-b.svg" alt="bag"></a>
                <a href="#" class="person"><img src="img/logo/orange-p.svg" alt="person"></a>
            </div>`;
        nav.remove();
        modal.remove();
        goodsLeft();
        head.appendChild(desctBtn);
        isMobile = true;
      }
    } else {
      if (isMobile) {
        mobile.innerHTML = "";
        headerNav.appendChild(nav);
        headerNav.appendChild(modal);
        goodsLeft();
        carry.appendChild(desctBtn);
        isMobile = false;
      }
    }
  }

  function goodsLeft() {
    goods.forEach((item, index) => {
      if (index % 2 === 0) {
        // 1, 3, 5 элементы
        if (window.getComputedStyle(item).marginLeft == "0px") {
          item.style.marginLeft = "auto";
        } else {
          item.style.marginLeft = "0px";
        }
      }
    });
  }

  function debounce(func, ms) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  }

  //resizing

  // Иницилизируем слайдер

  const tabNav = {
    navigation: document.querySelector("[data-navigation]"), // один целый блок
    content: document.querySelector("[data-main-content]"), // один целый блок
  };

  tabNav.navigation.addEventListener("click", changeNavigation); // делегируем событие через родителя

  const swiper = new Swiper(".swiper", {
    grid: {
      rows: 2, // 2 ряда
      fill: "row", // заполнять по рядам
    },
    slidesPerGroup: 2,
    slidesPerView: 2, // 3 колонки на экране
    spaceBetween: 20, // расстояние между карточками
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
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
    // autoplay: true,
    speed: 1200,
  });

  //Табы

  function changeNavigation(event) {
    const { target } = event; // получем объект события
    if (target.nodeName !== "BUTTON") return; // проверяем на какой блок был клик
    const currentButton = target; // как проверили получаем button нак который был клик
    const prevActiveBtn = tabNav.navigation.querySelector(".greenactive"); // получаем первый блок с классом geenactive
    const prevActiveCtn = tabNav.content.querySelector(".item-active"); // получем с втророго блока первый блок с классом item-active
    const currentTab = currentButton.dataset.tab; // currentTab присваемев дата атрубут прокликонной кнопки
    console.log(currentTab);

    if (prevActiveBtn) {
      // проверяет сущуетвует ли блок с классом grennactive?
      prevActiveBtn.classList.remove("greenactive"); // удаляет тот класс
      prevActiveCtn.classList.remove("item-active"); // также
    }
    const currentContent = tabNav.content.querySelector(
      `[data-content=${currentTab}]`
    ); // здеь ставится значение атрибута из currentTab

    currentButton.classList.add("greenactive"); // потом добваляем класс
    currentContent.classList.add("item-active"); // также
    console.log(target);
  }
  //slider
});
