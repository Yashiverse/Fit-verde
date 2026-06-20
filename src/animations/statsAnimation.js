import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const statsAnimation = () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {

        const target = +counter.dataset.target;

        gsap.to(counter, {
            innerText: target,
            duration: 2,
            ease: "power1.out",
            snap: {
                innerText: 1
            },
            scrollTrigger: {
                trigger: ".stats-section",
                start: "top 75%",
                once: true
            },

            onUpdate: function () {

                counter.innerText =
                    Math.ceil(counter.innerText);

                if (target === 500) {
                    counter.innerText =
                        Math.ceil(counter.innerText) + "+";
                }

                if (target === 1000) {
                    counter.innerText =
                        Math.ceil(counter.innerText) + "+";
                }

                if (target === 98) {
                    counter.innerText =
                        Math.ceil(counter.innerText) + "%";
                }

            }

        });

    });

};