import gsap from "gsap";

function animation () {
gsap.fromTo(".fixed",
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
);

gsap.fromTo(".header_subheader-descr h1",
  { x: -20, opacity: .0 },
  { x: 0, opacity: 1, duration: 1.4, ease: "power2.out" }
);

gsap.fromTo(".header_subheader-descr p",
  { x: -30, opacity: .0 },
  { x: 0, opacity: 1, duration: 2.0, ease: "power2.out" }
);

gsap.fromTo(".header_subheader-descr .button",
  { x: -30, opacity: .0 },
  { x: 0, opacity: 1, duration: 2.5, ease: "power2.out" }
);

const videoSpeed = document.querySelectorAll('.benefits_video');
const videoItem = document.querySelectorAll('.benefits_item');


videoItem.forEach((item, index )=> {
  item.addEventListener('mouseenter', () => {
    videoSpeed.forEach((video, indexVideo) => {
      if(indexVideo == index) {
        video.pause();
      } else {
        video.play();
      }
    })
  })
})

videoItem.forEach((item, index )=> {
  item.addEventListener('mouseleave', () => {
    videoSpeed.forEach((video, indexVideo) => {
      if(indexVideo == index) {
        video.play();
      }
    })
  })
})


}

export {animation};