let tl = gsap.timeline()

tl.from(".nav>img,.nav h1, .nav h3 , .nav button", {
    y: -100,
    duration: 1,
    delay: 0.1,
    opacity: 0,
    stagger: 0.1,     //stagger matlab har ak element thode thode der me ayega.
})
tl.from(".surface-texts h1", {
    y: 300,
    opacity: 0,
    stagger: 0.2
})
tl.from(".surface-texts img", {
    opacity: 0,
    scale: 0,

})
tl.from(".main h5", {
    scale:0,
    opacity:0,
 

})
tl.to(".main h5", {
    y: 30,
    repeat: -1,
    duration: 1,
    yoyo: true,
    opacity: 1,

})

// tl.from(".main .surface-texts span",{
//     backgroundColor: "red",
    
// })
