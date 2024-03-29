// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true
//   }); 
// g sap ke sath sath ye kaam ni krega q ki locomotive js scrollbar ko hijack kr leta h

// This is work with locomotive js and gsap
function locoMotive()
{
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}    
locoMotive()


const crsr = document.querySelector(".crsr");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x-11+"px";
    crsr.style.top = dets.y-11+"px";
})


const tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#main-heading h1",
        scroller:'.main',
        // markers:true,
        start:"top 27%",
        end:"top -10%",
        scrub:3
    }
})
tl.to("#main-heading h1", {
    x:-110,
    
},"rish")
tl.to("#main-heading h2", {
    x:110,
},"rish")
tl.to("#main-video", {
    width:"95%",
},"rish")

    
const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:'.main',
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:1
    }
})
tl2.to("#page2",{
    backgroundColor:"#fff",
})


// Animation for page 3 just 1 time down to up
gsap.to("#project-1",{
    y:-60,
    duration:1,
    scrollTrigger:{
        trigger:"#project-1", 
        scroller:".main"
    }
})
gsap.to("#project-3",{
    y:-60,
    duration:1,
    scrollTrigger:{
        trigger:"#project-3", 
        scroller:".main"
    }
})
gsap.to("#project-4",{
    y:-60,
    duration:1,
    scrollTrigger:{
        trigger:"#project-4", 
        // markers:true,
        scroller:".main"
    }
})
// Animation top down for page 3
const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#project-1",
        scroller:'.main',
        // markers:true,
        start:"top 40%",
        end:"top 30%",
        scrub:3
    }
})
tl3.to("#project-1",{
    y:60,
},"rishabh")
tl3.to("#project-2",{
    y:-60,
},"rishabh")
const tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#project-4",
        scroller:'.main',
        // markers:true,
        start:"top 40%",
        end:"top 30%",
        scrub:3
    }
})
tl4.to("#project-3",{
    y:60,
},"pandey")
tl4.to("#project-4",{
    y:-180,
},"pandey")


gsap.to("#page4",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:".main",
        // markers:true,
        start:"top 50%",
        end:"top 40%",
        scrub:1
    }
})
     
const navh4 = document.querySelectorAll('#nav h4');
const navImg = document.querySelector('#nav img');

navh4.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        crsr.style.scale = 2;
        crsr.style.webkitTextStroke = "1px #000";
    })
    elem.addEventListener("mouseout", function(){
        crsr.style.scale = 1;
        crsr.style.webkitTextStroke = "";
    })
})

navImg.addEventListener("mousemove", function(){
    crsr.style.scale = 2.5;
    navImg.style.cursor = "pointer"
})
navImg.addEventListener("mouseout", function(){
    crsr.style.scale = 1;
})

const video = document.querySelector('video');
video.addEventListener("mousemove", function(dets){
    crsr.style.width = "120px"
    crsr.style.height = "30px"
    crsr.style.borderRadius = "30px"
    crsr.innerHTML = "<p>Sound on</p>";
    crsr.style.textAlign = "center"
    crsr.style.webkitTextStroke = "1px #000";
    crsr.style.color = "#fff";
    crsr.style.font = "22px bold";
    crsr.style.transform = "translate(-50%, 0)"
})

video.addEventListener("mouseout", function(dets){
    crsr.style.width = "20px"
    crsr.style.height = "20px"
    crsr.style.webkitTextStroke = "";
    crsr.style.borderRadius = "50%"
    crsr.innerHTML = "";
    crsr.style.textAlign = ""
    crsr.style.color = "";
    crsr.style.font = "";
    crsr.style.transform = ""
})
video.addEventListener("click", function()
{
    if (video.muted) {
        // If muted, unmute the video
        video.muted = false;
        // Start playing the video
        video.play();
      }
    else if(!(video.muted))
    {
        video.muted = true;
        video.play();
    }
})

const abtUs = document.querySelector('button');
abtUs.addEventListener("mousemove", function(){
    crsr.style.scale = 2.5;
})
abtUs.addEventListener("mouseout", function(){
    crsr.style.scale = 1;
})

const projectImages = document.querySelectorAll('.project img');

projectImages.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        crsr.style.width = "100px"
        crsr.style.height = "30px"
        crsr.style.borderRadius = "30px"
        crsr.style.webkitTextStroke = "1px #000";
        crsr.innerHTML = "<p>View</p>";
        crsr.style.textAlign = "center"
        crsr.style.color = "#fff";
        crsr.style.font = "22px bold";
        crsr.style.transform = "translate(-50%, 0)"
    })
    elem.addEventListener("mouseout", function(){
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.innerHTML = "";
        crsr.style.textAlign = ""
        crsr.style.webkitTextStroke = "";
        crsr.style.color = "";
        crsr.style.font = "";
        crsr.style.transform = ""
    })
})
const projectVideos = document.querySelectorAll('.project video');
projectVideos.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        crsr.style.width = "100px"
        crsr.style.height = "30px"
        crsr.style.borderRadius = "30px"
        crsr.innerHTML = "<p>View</p>";
        crsr.style.textAlign = "center"
        crsr.style.webkitTextStroke = "1px #000";
        crsr.style.font = "22px bold";
        crsr.style.transform = "translate(-50%, 0)"
    })
    elem.addEventListener("mouseout", function(){
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.innerHTML = "";
        crsr.style.textAlign = ""
        crsr.style.webkitTextStroke = "";
        crsr.style.color = "";
        crsr.style.font = "";
        crsr.style.transform = ""
    })
})