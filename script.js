var curser = document.querySelector("#curser");
var page1 = document.querySelector("#page-1");

page1.addEventListener("mousemove", function(pos){
    gsap.to(curser,{
        x:pos.x,
        y:pos.y
    })
})
page1.addEventListener("mouseenter", function(pos){
    gsap.to(curser,{
        scale:1
    })
})
page1.addEventListener("mouseleave", function(pos){
    gsap.to(curser,{
        scale:0
    })
})

var ani = gsap.timeline()

ani.from("#loader h2",{
    x:90,
    opacity:0,
    duration: 1,
    stagger:0.1
})
ani.to("#loader h2",{
    opacity:0,
    x:-30
})
ani.to("#loader",{
    display:"none"
})
ani.from("#page1-nav2 span",{
    y:100,
    duration:0.7,
    stagger:0.1
})