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