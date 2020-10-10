const tl = gsap.timeline({default:{ease: 'power1.out'}});

tl.to('.txt',{y:"0%",duration: 1, stagger:0.25});
tl.to('.slider',{y:"-100%",duration:1.5,delay:0.5});
tl.to('.intro',{y:"-100%",duration:1},"-=1");
tl.fromTo('nav',{opacity:0},{opacity:1,duration:1});
tl.fromTo('.big_txt',{opacity:0},{opacity:1,duration:1}, "-=1");