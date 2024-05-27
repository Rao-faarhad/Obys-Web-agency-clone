function locomotiveAnimation (){
    // const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
// });
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ,purple, green delete these 3 lines---



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
locomotiveAnimation();

function loadingAnimation(){
    
    var tl =gsap.timeline()
    tl.from(".line h1",  {
        y:100, 
                  //stagger ruk ruk ky ana k lia
        stagger: 1,
        duration:0.6,
        delay:0.5,
     
    })
    
    
    tl.from("#linepart1, .line h2", {
        opacity:0,
        onStart:function() {
            var h5timer = document.querySelector("#linepart1 h5")
            // function for timer
            var grow = 0
            setInterval(function(){
                if(grow<100){
                    h5timer.innerHTML= grow++
        
                }else{
                    h5timer.innerHTML=grow
            
                }
            
            },27 )
        }
    
    })
    
    tl.to(".line h2", {
        // animationName: "anime",
        opacity:1,
        ease: 3
    });
    
    tl.to("#loader", {
        opacity: 0,
        duration:0.2,
        delay:2.6,
        display:"none"
        
    });
    
    tl.from("#page1", {
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
        y: 1600,
        ease: 5    // Added easing function value
    });
    
    tl.to("#loader", {
        display:"none"
    })
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1 ", {
        y:140,
        stagger:0.2
    })
    tl.from("#hero1, #page2 ", {
        opacity:0,

    }, "-=1.2")                //time line ma elements ko slow chalwany ka lia 
}
loadingAnimation();


// coursor effct
function coursorAnimation () {
    document.addEventListener("mousemove", function(dets){
        gsap.to("#crsr", {
            left: dets.x,
            top:dets.y
        })
    })
    
    
    // make magnet effect
    
    Shery.makeMagnet("#nav-part2 h4  ", {
    });
    

    // for video icon cursor  effect
    var videoContainer=document.querySelector("#video-container")
       videoContainer.addEventListener("mouseenter", function(){
            videoContainer.addEventListener("mousemove", function(dets) {
               gsap.to("#video-cursor", {
                left: dets.x - 570,
                y:dets.y - 300
               })
            })
            
        })
    }
    

  coursorAnimation();



// Animation for 3d effects
//always write Shery.js S capitall
function SheryAnimation(){
    Shery.imageEffect(".image-div",  {
        style:5,
        // debug: true,   once we set degug value we just del or cooment out and put config value
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6486427997279416},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":2.19,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.72,"range":[0,2]},"discard_threshold":{"value":0.27,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.23,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        gooey:true

        
    })
}
SheryAnimation()


// animation for flaG
document.addEventListener("mousemove", function(dets) {
    gsap.to("#flag", {
        x:dets.x - 100,
        y:dets.y - 700
    })
})



document.querySelector("#hero3").addEventListener("mouseenter", function() {
    gsap.to("#flag", {
        opacity: 1
    });
});

document.querySelector("#hero3").addEventListener("mouseleave", function() {
    gsap.to("#flag", {
        opacity: 0
    });
});

