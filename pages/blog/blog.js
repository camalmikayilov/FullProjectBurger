const menuBar = document.querySelector(".mobile-navbar--btn");
const menuNav = document.querySelector(".mobile-navbar--list");
menuBar.addEventListener("click",()=>{
  menuNav.classList.toggle("navbar--show")
  console.log("salam")
})


const header = document.querySelector('.navBar');

window.onscroll = function(){
    var top = window.scrollY;
    if(top >=100){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}


document.querySelector('#list--input').addEventListener("input", filterList);

function filterList(){
  const searchInput = document.querySelector('#list--input');
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll('.list--item');

  listItems.forEach((item) =>{
    let text = item.textContent;
    if(text.toLowerCase().includes(filter.toLowerCase())){
      item.style.display = '';
    }
    else{
      item.style.display = 'none';
    }
  })
}


const apis = document.querySelector(".api");

async function getRRR() {
  let newArray = [];
  let response = await axios.get(
    "https://camal-final-default-rtdb.firebaseio.com/single.json"
  );
  let data = response.data;
  for (let key in data) {
    newArray.push(data[key]);
  }
  return newArray;
}

getRRR().then((res) => {
  res.map((item) => {
    apis.innerHTML += `
          <div class="api--img">
              <img src="${item.img}" alt="">
              <a class="time" href="./pages/single-blog/single-blog.html" >
                <h3>${item.author}</h3>
                <p>${item.par}</p>
              </a>
          </div>
          <div class="api-content">
            <a href="./pages/single-blog/single-blog.html"><h2>${item.title}</h2></a>
            <p>${item.body}</p>
          </div>
            `;
  });
});
