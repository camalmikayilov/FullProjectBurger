const menuBar = document.querySelector(".mobile-navbar--btn");
const menuNav = document.querySelector(".mobile-navbar--list");
menuBar.addEventListener("click",()=>{
  menuNav.classList.toggle("navbar--show")
  console.log("salam")
})
