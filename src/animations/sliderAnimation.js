import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const sliderAnimation = () => {
  gsap.to(".slider-track", {
    x: "-40%",
    ease: "none",
    scrollTrigger: {
      trigger: ".slider-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 3
    },
  });
};