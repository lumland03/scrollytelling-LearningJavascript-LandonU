import gsap from "https://esm.sh/gsap";
import ScrollTrigger from "https://esm.sh/gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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


 
gsap.to('#case-cover', {
    y: -1000,
    ease: "none",
    scrollTrigger: {
      trigger:"#section-2", 
      start: "top 20%",
      end: "bottom bottom",
      pin: true,
      scrub: true,
      markers: true,
  }
});

gsap.to('.section-2-p', {
    y: -500, 
    ease: "none",
    scrollTrigger: {
      trigger:"section-2", 
      start: "top 10%",
      end: "bottom bottom",
      pin: true,
      scrub: true,
      markers: true,
  }
});

