import gsap from "gsap";
function burgerMenu () {
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
}

export {burgerMenu};