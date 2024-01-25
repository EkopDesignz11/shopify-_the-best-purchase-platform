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

// show/hide FAQS Answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () =>{
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'fa fa-plus') {
      icon.className = "fa fa-minus";
    } else{
      icon.className = "fa fa-plus";
    }
  })
})



// DARK MODE

function toggleDarkMode(){
  const body = document.body;
  body.classList.toggle('dark-mode');

  let toggleDarkMode = document.querySelector('.fa-moon-o');

  body.addEventListener('click',()=>{ 
     toggleDarkMode.classList.toggle('.fa-sun-o');
  })
}

















// SEARCH BAR
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('search');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('search');
}

// SHOPPING CART
let cartBtn = document.querySelector('.cart-btn');
let cart = document.querySelector('.cart');
let header = document.querySelector('header');
// let cartQty = document.querySelector('.cart-qty');
let closeBtn = document.querySelector('.close-btn');

CartBtn.addEventListener('click', ()=>{
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        header.style.transform = 'transformX(-400px)';
    }else{
        cart.style.right = '-100%';
        header.style.transform = 'transformX(0)';
    }
})
closeBtn.addEventListener('click', ()=>{
    cart.style.right = '-100%';
    header.style.transform = 'transformX(0)';
})



// let product = [];
// function checkCart(){
//     var cookieValue = document.cookie
//     .split(';')
//     .find(row => row.startsWith('product='));
//     if(cookieValue){
//         product =(cookieValue.split('=')[1]);
//     }
// }
// checkCart();





// let timeSave = "expires=Thu, 31 Dec 2030 23:59:59 UTC";
// document.cookie ='listCart='+stringify(product)+"; "+timeSave+"; path=/;";


// addCartToHTML();
// function addCartToHTML(){
//    let productHTML = document.querySelector('.product');
//    product.innerHTML = '';

//    let cartQtyHTML = document.querySelector('.cart-qty');
//    let cartQty = 0;

//    if(product){
//       product.forEach(product =>{
//         if(product){
//             let newCart = document.createElement('div');
//             newCart.classList.add('item');
//             newCart.innerHTML =
//             `<img src="./images/Shopify img/IMG_20240109_040055.jpg">
//              <div class="context">
//                    <div class="name">
//                        Product Name
//                    </div>
//                    <div class="price">
//                        $60/ 1 product
//                    </div>
//             </div>
//             <div class="quantity">
//                <button>-</button>
//                <span class="value">1</span>
//                <button>+</button>
//             </div>`;
//             productHTML.appendChild(newCart);
//         }
//       })
//    }


// // ADD TO CART
// let CartBtn = [];

// function addToCart(ProductName, price){
//     cartBtn.push({ProductName, price});
//     updateCartQty();
// }

// function updateCartQty(){
//     const cartQty = document.getElementById('cartQty');
//     cartQty.innerText = cart.length;
// }


// PRELOADER WHEN PAGE REFRESHES
window.addEventListener("load", () =>{
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () =>{
        document.body.removeChild("loader");
    })
});
