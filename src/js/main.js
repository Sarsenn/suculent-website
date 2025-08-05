// Custom Scripts
"use strict";
import { animation } from "./modules/animation";
import { burgerMenu } from "./modules/burgerMenu";
import { mobileMenu } from "./modules/mobileMenu";
import { tabsNav } from "./modules/tabsNav";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

document.addEventListener("DOMContentLoaded", () => {
  let isMobile = false;
  let logo = document.querySelector('.logo');

//smoother scroll
//fade in section 
animation(gsap, ScrollSmoother, ScrollTrigger, logo);
burgerMenu();
mobileMenu(isMobile, logo);
tabsNav();

});
