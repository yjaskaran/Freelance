const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("#heading1");
const text2 = intro.querySelector("#heading2");
const heading3 = intro.querySelector("#heading3");
const heading4 = intro.querySelector("#heading4");

//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//Text Animation
const textAnim = TweenMax.fromTo(text, 1.5, { opacity: 1 }, { opacity: 0 });
// const textAnim2 = TweenMax.fromTo();
let tl = new TimelineMax();
// tl.set(text2, { transformOrigin: "50% 50%" });
tl.to(text2, 3, { scale: 0, opacity: 0 });
tl.to(text2, 3, { scale: 1, opacity: 1 });
tl.to(text2, 3, { scale: 1, opacity: 1 });
tl.to(text2, 3, { scale: 0, opacity: 0 });

let heading3Tl = new TimelineMax();

// heading3Tl.to(heading3, 3, { opacity: 0, right: 800 });
heading3Tl.to(heading3, 3, { bottom: 100, opacity: 0 });
heading3Tl.to(heading3, 2, { bottom: 150, opacity: 1 });
heading3Tl.to(heading3, 3, { bottom: 350, opacity: 0 });

let heading4Tl = new TimelineMax();

// heading3Tl.to(heading3, 3, { opacity: 0, right: 800 });
heading4Tl.to(heading4, 3, { top: 350, opacity: 0 });
heading4Tl.to(heading4, 2, { top: 150, opacity: 1 });
heading4Tl.to(heading4, 3, { top: 50, opacity: 0 });

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0,
})

  .setPin(intro)
  .addTo(controller);

let scene2 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 1500,
})
  .setTween(tl)
  .addTo(controller);

let scene4 = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 4000,
})
  .setTween(heading3Tl)
  .addTo(controller);

let scene5 = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 3000,
})
  .setTween(heading4Tl)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33);
