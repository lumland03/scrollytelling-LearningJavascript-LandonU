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


// let tl = gsap.timeline
// gsap.to('#case-cover', {
//     y: -1200,
//     ease: "none",
//     scrollTrigger: {
//       trigger:"#section-2", 
//       start: "top 20%",
//       end: "bottom bottom",
//       pin: true,
//       pinSpacing: true,
//       scrub: true,
//       markers: true,
//   }
// });

// gsap.to('.section-2-p', {
//     y: -1000,
//     ease: "none",
//     scrollTrigger: {
//       trigger:"#section-2", 
//       start: "top 5%",  
//       end: "bottom bottom",
//       pin: true,
//       pinSpacing: true,
//       scrub: true,
//       markers: true,
//     }
// });

// Create a timeline for Section 2
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-2",
    start: "top top",      // Pin when the top of the section hits the top of viewport
    end: "+=2000",         // Stay pinned for 2000px of scrolling
    pin: true,             // This keeps the whole section still
    scrub: true,           // Links animation to scroll distance
    markers: true,         // Toggle off when done
  }
});


// 1. Reveal Motherboard (Section 2 Logic)
gsap.to("#case-cover", {
  yPercent: -200,
  scrollTrigger: {
    trigger: "#step-2", // Starts when text for section 2 hits
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true,
  }
});

// 2. Highlight text as you scroll past it
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

// 3. Example: Animate the RAM when you get to Section 4
