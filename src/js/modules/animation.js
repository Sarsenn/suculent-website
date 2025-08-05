import { getLogoSize } from "./logoSize";

function animation (gsap, ScrollSmoother, ScrollTrigger, logo) {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  let lastScroll = 0;
  let navbar = document.querySelector(".header_nav");
  let isScrolled = false;


	const fadeUpDesctop = window.innerWidth <= 768;
	if(!fadeUpDesctop) {
  gsap.utils.toArray(".fade-up").forEach(section => {
    gsap.fromTo(section,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",    // когда секция заходит в зону видимости
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        }
      }
    );
  });


	}


	let smooth = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: .5,
    smoothTouch: 0.1,
    effects: true,
  });






//const size = getLogoSize(isScrolled);

ScrollTrigger.create({
  start: "top top",
  end: "bottom bottom",
  onUpdate: () => {
    const scrollY = smooth.scrollTop();

    if (scrollY > 50 && !isScrolled) {
      isScrolled = true;
      navbar.classList.add("scrolled");

      gsap.to(navbar, {
        paddingTop: "10px",
        paddingBottom: "10px",
        borderBottomColor: "rgba(0,0,0,0.1)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(logo, {
        width: "70px",
        height: '70px',
        duration: 0.3,
        ease: "power2.out",
      });

    } else if (scrollY <= 50 && isScrolled) {
      isScrolled = false;
      navbar.classList.remove("scrolled");
       const size = getLogoSize(false);
      gsap.to(navbar, {
        paddingTop: "20px",
        paddingBottom: "20px",
        borderBottomColor: "transparent",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(logo, {
        width: size.width,
        height: size.height,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }
});
}

export {animation};