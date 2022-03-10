const menuBar = document.querySelector(".mobile-navbar--btn");
const menuNav = document.querySelector(".mobile-navbar--list");
menuBar.addEventListener("click",()=>{
  menuNav.classList.toggle("navbar--show")
  console.log("salam")
})

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const header = document.querySelector('.navBar');

window.onscroll = function(){
    var top = window.scrollY;
    if(top >=100){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

const galarys = document.querySelector(".galary--img");

async function getRRR() {
  let newArray = [];
  let response = await axios.get(
    "https://camal-final-default-rtdb.firebaseio.com/element.json"
  );
  let data = response.data;
  for (let key in data) {
    newArray.push(data[key]);
  }
  return newArray;
}

getRRR().then((res) => {
  res.map((item) => {
    galarys.innerHTML += `
            <div class="galary-img">
            <figure>
                  <img src="${item.img}" alt="" />
            </figure>
          </div>
            `;
  });
});