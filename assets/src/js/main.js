const dataBtn = '[data-slider]';
let btns = document.querySelectorAll(dataBtn);
let slides = document.querySelectorAll(".proff__slide");
let sliderEquip = document.querySelectorAll(".equip-item");
let sliderTeam = document.querySelectorAll(".team-item");
let initPosBig = 0;
let initPosEquip = 0;
let initPosTeam = 0;
let moveSlides = 0;
let moveSlidEquip;
// Slider 
slides.forEach(item => {
   item.style.left = initPosBig + "px";
   initPosBig += 1500;
})
sliderEquip.forEach(item => {
   item.style.left = initPosEquip + "px";
   initPosEquip += 256;
})
sliderTeam.forEach(item => {
   item.style.left = initPosTeam + "px";
   initPosTeam += 270;
})
btns.forEach(btn => {
   btn.addEventListener("click", e => {
      let dataBtnVal = e.target.dataset.slider;
      let direction = e.target.classList[1];
      if (dataBtnVal == "proff") {
         for (let i = 0; i < slides.length; i++) {
            moveSlidEquip = parseInt(window.getComputedStyle(slides[i]).getPropertyValue("left"));
            switch (direction) {
               case "right":
                  moveSlidEquip -= 1500;
                  if (moveSlidEquip < -1500) {
                     moveSlidEquip = 1500;
                  }
                  break;
               case "left":
                  moveSlidEquip += 1500;
                  if (moveSlidEquip > 3000) {
                     moveSlidEquip = 0;
                  }
                  break;
            }
            slides[i].style.left = moveSlidEquip + "px";
         }
      } else if (dataBtnVal == "equip") {
         for (let i = 0; i < sliderEquip.length; i++) {
            moveSlidEquip = parseInt(window.getComputedStyle(sliderEquip[i]).getPropertyValue("left"));
            switch (direction) {
               case "right":
                  moveSlidEquip -= 256;
                  if (moveSlidEquip < -256) {
                     moveSlidEquip = 1024;
                  }
                  break;
               case "left":
                  moveSlidEquip += 256;
                  if (moveSlidEquip > 1280) {
                     moveSlidEquip = 0;
                  }
                  break;
            }
            sliderEquip[i].style.left = moveSlidEquip + "px";
         }
      } else if (dataBtnVal == "team") {
         for (let i = 0; i < sliderTeam.length; i++) {
            moveSlidEquip = parseInt(window.getComputedStyle(sliderTeam[i]).getPropertyValue("left"));
            switch (direction) {
               case "right":
                  moveSlidEquip -= 270;
                  if (moveSlidEquip < -270) {
                     moveSlidEquip = 1080;
                  }
                  break;
               case "left":
                  moveSlidEquip += 270;
                  if (moveSlidEquip > 1080) {
                     moveSlidEquip = 0;
                  }
                  break;
            }
            sliderTeam[i].style.left = moveSlidEquip + "px";
         }
      }
   })
})

let equipSlides = document.querySelectorAll(".equip__big-slide");

sliderEquip.forEach(slide => {
   slide.addEventListener("click", e => {
      for (let item of equipSlides) {
         item.classList.remove("equip__active")
      }
      let id = e.target.dataset.idequip;
      let slide = document.querySelector(`[data-equip-slide="${id}"]`)
      slide.classList.add("equip__active")
   })
})

const tabsBtn = document.querySelectorAll(".application__tab");
let slidesApplic = document.querySelectorAll(".application__content");
let applTitle = document.querySelector(".application__title");

tabsBtn.forEach(tab => {
   tab.addEventListener("click", e => {
      for (let item of tabsBtn) {
         item.classList.remove("tab__active")
      }
      for (let item of slidesApplic) {
         item.classList.remove("appl__slide-active")
      }
      e.target.classList.add("tab__active")
      let id = e.target.dataset.tabs;
      let slide = document.querySelector(`[data-applic-slide="${id}"]`)
      slide.classList.add("appl__slide-active")
      let title = e.target.querySelector("span").textContent;
      applTitle.innerHTML = title;
   })
})

const tabsBtnAppl = document.querySelectorAll("[data-tabshoriz]");
let applicContents = document.querySelectorAll(".application-horiz__content");
const circles = document.querySelectorAll(".application-horiz__circle");
tabsBtnAppl.forEach(tab => {
   tab.addEventListener("click", e => {
      for (let item of tabsBtnAppl) {
         item.classList.remove("tab__activeAppl")
      }
      for (let item of applicContents) {
         item.classList.remove("active__tab")
      }
      for (let item of circles) {
         item.classList.remove("active__circle")
      }
      e.target.classList.add("tab__activeAppl")
      let id = e.target.dataset.tabshoriz;
      let applicContent = document.querySelector(`[data-tabslide="${id}"]`);
      applicContent.classList.add("active__tab")
      let circle = document.querySelector(`[data-circle="${id}"]`);
      circle.classList.add("active__circle")
   })
})

const feedback = document.querySelector(".feedback");
const feedbackCall = document.querySelector(".feedback__call");
const feedbackMail = document.querySelector(".feedback__mail");
const sendQueryMail = document.querySelector(".header-body__btn");
const modalAero = document.querySelector(".modal__aero");
const modalCall = document.querySelector(".modal__call");
const modalPolicy = document.querySelector(".modal__policy");
const policyBtn = document.querySelectorAll(".form__label-policy");
const closeModal = document.querySelectorAll(".close__modal")
feedback.addEventListener("click", () => {
   feedback.classList.toggle("active")
   feedbackCall.classList.toggle("active")
   feedbackMail.classList.toggle("active")
})
feedbackCall.addEventListener("click", () => {
   modalCall.classList.toggle("modal__active")
})
sendQueryMail.addEventListener("click", () => {
   modalAero.classList.toggle("modal__active")
})
feedbackMail.addEventListener("click", () => {
   modalAero.classList.toggle("modal__active")
})
policyBtn.forEach(btn => {
   btn.addEventListener("click", e => {
      e.preventDefault()
      modalPolicy.classList.toggle("modal__active")
   })
})
closeModal.forEach(btn => {
   btn.addEventListener("click", e => {
      modalCall.classList.remove("modal__active")
      modalAero.classList.remove("modal__active")
      modalPolicy.classList.remove("modal__active")
   })
})

document.addEventListener("click", e => {
   if (e.target.classList[1] == "modal__active") {
      modalCall.classList.remove("modal__active")
      modalAero.classList.remove("modal__active")
      modalPolicy.classList.remove("modal__active")
   }
})
let up = document.querySelector(".go__up");
let scrollWindow;
window.onscroll = () => {
   scrollWindow = window.pageYOffset;
   if (scrollWindow >= 1249) {
      up.style.display = "block";
   } else {
      up.style.display = "none";
   }
}
up.onclick = () => {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   });
}

const menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", () => {
   document.querySelector(".hamburger-menu").classList.toggle("open")
})


let nextWind = document.querySelectorAll(".form__button")
let allWind = document.querySelectorAll(".quiz__content-field")
nextWind.forEach(btn => {
   btn.addEventListener("click", e => {
      allWind.forEach(wind => {
         wind.classList.remove("active__filed");
      })
      let id = e.target.dataset.next
      allWind[id].classList.add("active__filed");
   })
})

const sendForm = document.querySelectorAll(".form")
sendForm.forEach(form => {
   form.addEventListener("submit", e => {
      e.preventDefault();
      console.log(e.target);
      let formData = new FormData(form)
      fetch(`send.php`, {
         method: "POST",
         body: formData
      })
         .then(resp => resp.json())
         .then(resp => {
            console.log(resp);
            form.reset()
            modalCall.classList.remove("modal__active")
            modalAero.classList.remove("modal__active")
            modalPolicy.classList.remove("modal__active")
         })
   })
})

