var textWrapper = document.querySelector('.text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false})
  .add({
    targets: '.text .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });

let tl = gsap.timeline({
      scrollTrigger:{
          trigger:".fact",
          start:"center bottom"
      }
  });
tl.from("#fact1",{opacity:0,top: 30,duration: 1})
.from("#fact2",{opacity:0,top: 50,duration: 1},"-=1")
.from("#fact3",{opacity:0,top: 70,duration: 1},"-=1");

