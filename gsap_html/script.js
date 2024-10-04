gsap.to(".text", { 
    duration: 1.5,
    rotate: 360
},);

gsap.from(".nadpis",{
    duration:1,
    opacity: 0,
    y:100,
    stagger:0.25
})

var tl = gsap.timeline({ 
    repeat: 999999999999999,
    yoyo: true,
});

tl.from(".haha", {
    duration:5,
    x:1920
});

gsap.to(".img1", {
    duration: 1.5,
    x: 1350
});

gsap.to(".img2", {
    duration: 1.5,
    x: -1350
});