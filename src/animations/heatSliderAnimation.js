import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const heatSliderAnimation = () => {

    gsap.to(".heat-slider-track", {
        x: "-40%",
        ease: "none",
        scrollTrigger: {
            trigger: ".heat-slider-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 3,
        },
    });

};