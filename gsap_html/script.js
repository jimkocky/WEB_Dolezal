gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Draggable);

function splitTextToSpans(textElement) {
    const text = textElement.textContent;
    const characters = text.split('');
    textElement.innerHTML = characters.map(char => `<span class="char">${char}</span>`).join('');
}

const titleElement = document.querySelector('.text');
splitTextToSpans(titleElement);

gsap.from(".nadpis",{
    duration:1,
    opacity: 0,
    y:100,
    stagger:0.25,
    delay: 0.2
});

gsap.to(".char", {
    delay:1.5,
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.05,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".title-section",
        start: "top center",
        toggleActions: "play none none reverse"
    }
});

var tl = gsap.timeline({ 
    repeat: 999999999999999,
    yoyo: true,
});

tl.from(".haha", {
    duration:5,
    x:1700
});

gsap.to(".img1", {
    duration: 1.5,
    x: 1125,
});

gsap.to(".img2", {
    duration: 1.5,
    x: -1125,
});

gsap.to('.horizontal-content', {
    xPercent: 50 * (document.querySelectorAll('.box').length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.horizontal-scroll',
        start: 'top top', 
        end: '+=1000',
        pin: true,
        scrub: true,
    }
});

Draggable.create(".draggable-box", {
    type: "x,y",
    edgeResistance: 0.65,
    bounds: ".horizontal-scroll",
    inertia: true
});

gsap.fromTo('.resume-text',
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.vertical-resume',
            start: 'top center',
            end: 'top 100px',
            scrub: true,
        }
});