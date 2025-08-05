import { getLogoSize } from "./logoSize";
import gsap from "gsap";
function mobileMenu (isMobile, logo) {

  //copy and delete content in mobile;

  const mobile = document.querySelector(".mobile");
  const headerNav = document.querySelector(".header_nav");
  const navCont = document.querySelector('.navbar') ;
  const nav = document.querySelector(".header_nav-ul");
  const modal = document.querySelector(".header_nav-modal");
  const desctBtn = document.querySelector(".carry_descr .button");
  const head = document.querySelector(".head");
  const carry = document.querySelector(".carry_descr"),
    goods = document.querySelectorAll(".goods");

  function movingContent(isMobile, logo) {
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

    const size = getLogoSize(false);
    gsap.to(logo, {
      width: size.width,
      height: size.height,
      duration: 0.3,
      ease: "power2.out",
    });
      }
    } else {
      if (isMobile) {
        mobile.innerHTML = "";
        navCont.appendChild(nav);
        navCont.appendChild(modal);
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

  const debouceMovingContent = debounce(movingContent, 5);
	window.addEventListener("resize", debouceMovingContent);
  debouceMovingContent();
}

export {mobileMenu};