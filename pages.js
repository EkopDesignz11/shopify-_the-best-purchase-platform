// SHOP

// POPUP
document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active")
})


document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active")
})

// Get the Form
var modal = document.getElementById('id01');
// Wen user clicks anywhere outside the modal close it
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}


let products = [];
let cart = [];

// selectors

// const selectors = {
//     products = document.querySelector(".products"),
//     cartBtn: document.querySelector(".cartBtn"),
//     cartQty: document.querySelector(".cartQty"),
//     cartClose: document.querySelector(".cartClose"),
//     cartOverlay: document.querySelector(".cart-overlay"),
//     cartClear: document.querySelector(".cart-clear"),
//     cartBody: document.querySelector(".cart-body"),
// };

// // events listeners

// const setupListeners = () => {
//     document.addEventListener('DOMContentLoaded', InitStore)
// }

// // events handlers

// const initStore = () =>{
//     loadProducts("https://fakestoreapi.com/products/1")
//     .then(renderProducts);
// };

// // render functions

// const renderProducts = () => {
//     selectors.products.innerHTML = products.map(product => {
//         const { id, title, bg_img, price} =
//     })
// };

// // api functions

// const loadProducts =async(apiURL) =>{
//    try{
//        const response = await fetch(apiURL);
//        if(!response.ok){
//            throw new Error(`htpp error! status=${response.status}`)
//        }
//        products = await response.json();
//        console.log(products)
//    }catch (error){
//       console.error("fetch error:", error)
//    }
// }

// // helper functions

// // Initialize

// setupListeners();



// DARK MODE

function toggleDarkMode(){
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
// HEADER
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY > 0) 
  })
  
// BACK TO TOP BUTTON WITH SCROLL PROGRESS
let calcScrollValue  = () =>{
    let scrollProgress = document.getElementById('progress');
    let progressValue = document.getElementById('progress-value');
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.Element.scrollHeight - 
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100){
      scrollProgress.style.display = 'grid';
    } else{
      scrollProgress.style.display = 'none';
    }
    
};    

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// PRELOADER WHEN PAGE REFRESHES
window.addEventListener("load", () =>{
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () =>{
      document.body.removeChild("loader");
  })
})
  