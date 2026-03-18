import gsap from "https://esm.sh/gsap";
import ScrollTrigger from "https://esm.sh/gsap/ScrollTrigger";
import DrawSVGPlugin from "https://esm.sh/gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin); 



const prefersReducedMotion = window.matchMedia(
"(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {






// Layer 1: Background — moves the LEAST (slow = far away)
gsap.to(".bg-layer", {
  y: 250,
  ease: "none",
  scrollTrigger: {
    trigger: "#intro-section",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
   
  }
});
gsap.to('.mid-layer', {
  y: 75,
  ease: "none",
  scrollTrigger: {
    trigger:"#intro-section", 
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
}
});
gsap.to('.fg-layer', {
  y: -100,
  ease: "none",
  scrollTrigger: {
    trigger:"#intro-section", 
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
}
});





gsap.to("#case-cover", {
  yPercent: -200,
  scrollTrigger: {
    trigger: "#step-2", 
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true,
  }
});


const steps = gsap.utils.toArray(".step");
steps.forEach((step, i) => {
  ScrollTrigger.create({
    trigger: step,
    start: "top center",
    end: "bottom center",
    onEnter: () => step.classList.add("is-active"),
    onLeave: () => step.classList.remove("is-active"),
    onEnterBack: () => step.classList.add("is-active"),
    onLeaveBack: () => step.classList.remove("is-active"),
  });
});


const drawTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#step-3",
    start: "top center", 
    end: "bottom center ",   
    scrub: 1,           
  }
});

drawTl
  .fromTo(".draw-me", { drawSVG: "0%" }, { drawSVG: "100%", ease: "none" })
  .to({}, { duration: 1.5 }) 
  .to(".draw-me", { drawSVG: "0%", ease: "none" });


gsap.from("#ram", {
  x: 100,         
  y: 0,         
  opacity: 0,      
  scrollTrigger: {
    trigger: "#step-4",
    start: "top center",
    end: "center center",
    scrub: 1,             
    markers: true
  }
});

gsap.to("#ram", {
  rotation: 10,
  transformOrigin: "bottom left",            
  scrollTrigger: {
    trigger: "#step-5",
    start: "top center",
    end: "center center", 
    scrub: 1,             
    markers: true
  }
});

gsap.fromTo("#ram", 
  { 
    rotation: 10 
  }, 
  {
    rotation: 0, 
    immediateRender: false, 
    scrollTrigger: {
      trigger: "#step-6",
      start: "top center",
      end: "center center", 
      scrub: 1,            
      markers: true
    }
  }
);

gsap.to('.sticky-visual',{
    yPercent: -100,
    scrollTrigger: {
    trigger: "#step-7",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
    markers: true,
  }
});

gsap.fromTo('.psu-wrapper', 
  { 
    top: "120vh", // The STARTING position (forced by GSAP)
    opacity: 0
  }, 
  {
    top: "40%",   // The ENDING position
    opacity: 1,
    scrollTrigger: {
      trigger: "#step-7",
      start: "top center",
      end: "top top", 
      scrub: true,
      markers: true,
    }
  }
);

gsap.to('.psu-wrapper',{
    yPercent: -200,
    scrollTrigger: {
    trigger: "#step-8",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
    markers: true,
  }
});

gsap.fromTo('.rest-wrapper', 
  { 
    top: "120vh", // The STARTING position (forced by GSAP)
    opacity: 0
  }, 
  {
    top: "40%",   // The ENDING position
    opacity: 1,
    scrollTrigger: {
      trigger: "#step-8",
      start: "top center",
      end: "top top", 
      scrub: true,
      markers: true,
    }
  }
);

gsap.to('.rest-wrapper',{
    yPercent: -200,
    scrollTrigger: {
    trigger: "#step-9",
    start: "top bottom",
    end: "top top",
    scrub: true,
    markers: true,
  }
});



}









