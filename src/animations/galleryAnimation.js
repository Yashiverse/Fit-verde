import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const galleryAnimation = () => {

    gsap.from(".gallery-content", {
        scroller: "body",
        y:250,
        stagger:0.2,
        duration:3,
        scrollTrigger: {
            trigger: ".gallery-content",
            start: "top 80%",
            end:"top 15%",
            scrub:3,
            toggleActions: "play none none none"
        }
    });

};