const menuBar = document.querySelector(".mobile-navbar--btn");
const menuNav = document.querySelector(".mobile-navbar--list");
menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("navbar--show");
  console.log("salam");
});

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

const header = document.querySelector(".navBar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

const menus = document.querySelector(".menu");

async function getRRR() {
  let newArray = [];
  let response = await axios.get(
    "https://camal-final-default-rtdb.firebaseio.com/menus.json"
  );
  let data = response.data;
  for (let key in data) {
    newArray.push(data[key]);
  }
  return newArray;
}

getRRR().then((res) => {
  res.map((item) => {
    menus.innerHTML += `
            <div class="menu--card">
            <figure>
                  <img src="${item.img}" alt="${item.author}" />
            </figure>
            <ul>
              <li>
                <h3>${item.title}</h3>
              </li>
              <li>
                <p>
                  ${item.body}
                </p>
              </li>
              <li>
                <span>
                  ${item.author}
                </span>
              </li>
            </ul>
          </div>
            `;
  });
});


// const items = document.querySelector(".sld");

// async function getRRR() {
//   let newArray = [];
//   let response = await axios.get(
//     "https://camal-final-default-rtdb.firebaseio.com/comments.json"
//   );
//   let data = response.data;
//   for (let key in data) {
//     newArray.push(data[key]);
//   }
//   return newArray;
// }

// getRRR().then((res) => {
//   res.map((item) => {
//     items.innerHTML += `
//           <div class="sld">
//                 <p>${item.body-c}</p>
//                 <figure>
//                   <img src="${item.img-c}" alt="${item.author-c}">
//                 </figure>
//                 <h4>${item.title-c}</h4>
//               </div>
//             `;
//   });
// });

