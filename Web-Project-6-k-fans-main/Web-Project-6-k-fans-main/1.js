
gsap.registerPlugin(ScrollTrigger);
function animateOnScroll() {
  const videoContainers = document.querySelectorAll('.video-container');
  
  videoContainers.forEach((container, index) => {
    gsap.to(container, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: index * 0.2, 
      scrollTrigger: {
        trigger: container,
        start: 'top bottom-=100px', 
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });
  });
}
animateOnScroll();
