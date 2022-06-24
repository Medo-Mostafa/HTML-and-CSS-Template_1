let links = document.querySelectorAll(".menu a"); // Select All links in Header
let sections = document.querySelectorAll("section"); // Select All sections in HTML File
// Determine Section On Scroll And Change
// link Class active According to The textContent of The Section
window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - 400 &&
      scrollPosition <= section.offsetHeight + section.offsetTop
    ) {
      links.forEach((link) => {
        if (section.id === "landing") {
          removeClass(links);
          addClass(links[0]);
        } else if (section.id === link.textContent.toLocaleLowerCase()) {
          removeClass(links);
          addClass(link);
        }
      });
    }
  });
};
function removeClass(links) {
  links.forEach((ele) => {
    ele.classList.remove("active");
  });
}
function addClass(link) {
  link.classList.add("active");
}
// ------------------------------------Global Animate Content Function------------------------------------
function animateContent(parent, ...childs) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= parent.offsetTop - 200) {
      childs.forEach((ele) => {
        let arr = Array.from(ele);
        if (arr.length === 0) {
          ele.style.cssText = `opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);`;
        } else {
          arr.forEach((element) => {
            element.style.cssText = `opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);`;
          });
        }
      });
    }
  });
}
// ------------------------------------
let icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  icon.classList.toggle("active");
});
// ------------------------------------
let constBtn = document.querySelector(".const");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    constBtn.style.cssText = "display:block";
  } else {
    constBtn.style.cssText = "display:none";
  }
});
// ------------------------------------ Services Section  ------------------------------------
let serviceSection = document.querySelector("#services");
let serviceCols = document.querySelectorAll(".services-content .col");
animateContent(serviceSection, serviceCols);
// ------------------------------------ Protofolio Section  ------------------------------------
let protofolioSection = document.querySelector(".protfolio");
let protofolioCards = document.querySelectorAll(".protfolio-content .card");
animateContent(protofolioSection, protofolioCards);
// ------------------------------------ About Section  ------------------------------------
let aboutSection = document.querySelector(".about");
let aboutImage = document.querySelectorAll(".about-content .image");
let aboutText = document.querySelectorAll(".about-content .text");
animateContent(aboutSection, aboutImage, aboutText);
