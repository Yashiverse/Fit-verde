import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const galleryAnimation = () => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".gallery-section",
            start: "top 45%",
            toggleActions: "play reverse play reverse"
        }
    });

    tl.from(".gallery-card-1", {
        x: -180,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out"
    })

    .from(".gallery-card-2", {
        x: 180,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out"
    }, "-=0.9")

    .from(".gallery-card-3", {
        y: 120,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out"
    }, "-=0.9");


};