// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
var version = "1.0.1";
{
  /* <i class='bx bx-x'></i> */
}
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //   sticky navbar

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //   remove toggle icon navbar when click navbar link (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// reset control for scroll reveal
// let screenSize = screen.width;
// let isTrue = false;
// if (screenSize < 500) {
//   isTrue = false;
// } else {
//   isTrue = true;
// }
// scroll reveal
ScrollReveal({
  // reset: isTrue,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form, .about-content",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p", { origin: "right" });

// typedJS
const typed = new Typed(".multiple-text", {
  strings: ["Frontend", "Backend", "Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//submit to google sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyXDydcYGVxd9_z8cpJo4G3HHF58Qg4q_vJqJVF8kF4D8utw33tWipJ23qODokI2JMI/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.style.color = "#61b752";
      msg.innerHTML = "Message sent Succesfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      msg.style.color = "#b00101";
      msg.innerHTML = "Message sent Failed";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
    });
});

// self functions

function openSolarProject() {
  alert("Solar Grace Project OnGoing");
}
