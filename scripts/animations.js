import gsap from "https://esm.sh/gsap";
import ScrollTrigger from "https://esm.sh/gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




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


// Create a timeline for Section 2


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


// 3. Slide the RAM into the motherboard
gsap.from("#ram", {
  x: 100,          // Starts 200px to the right (adjust this to fit your SVG)
  y: 0,         // Starts slightly higher to look like it's dropping in
  opacity: 0,      // Starts invisible
  scrollTrigger: {
    trigger: "#step-4",
    start: "top center",
    end: "center center", // Finishes sliding in when step 3 is fully centered
    scrub: 1,             // 1 second lag for a smooth slide
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









