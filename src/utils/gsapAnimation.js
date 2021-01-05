import gsap from 'gsap';

const gsapAnimation = (elements, trigger, reverse = 'play none none none') => {
  gsap.to(elements, {
    x: 0,
    opacity: 1,
    duration: 0.7,
    stagger: { each: 0.2 },
    scrollTrigger: trigger
      ? {
          trigger: trigger,
          start: 'top 90%',
          toggleActions: reverse,
        }
      : null,
  });
};
export default gsapAnimation;
