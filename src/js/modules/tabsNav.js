function tabsNav () {
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
      769: {
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
}

export {tabsNav};