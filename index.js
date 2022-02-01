let mainImg = document.querySelector(".main__slide img");
const secondSlides = document.querySelector(".second__slides");

secondSlides.addEventListener("click", function (e) {
  if (e.target.tagName == "IMG") {
    mainImg.src = e.target.src;
  }
});

////////////////////////////////////////////////////////////// Item
const item = {
  name: "shoes",
  company: "ApM__797",
  amount: 0,
  totalPrice: 155,
  sale: 40,
  get Sum() {
    return Math.floor(this.totalPrice - (this.totalPrice * this.sale) / 100);
  },
};

const btns = document.querySelectorAll(".plus-minus");
const numAmount = document.querySelector(".main__amount");
numAmount.innerHTML = `${item.amount}`
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    plusMinus(this);
  });
}
function plusMinus(button) {
  if (button.classList.contains("main__plus") && item.amount < 10) {
    item.amount++;
  } else if (button.classList.contains("main__minus") && item.amount > 0) {
    item.amount--;
  }
  numAmount.innerHTML = item.amount;
}
const shablonCompany = document.querySelector(".main__company");
const shablonName = document.querySelector(".item-name");
const shablonSale = document.querySelector(".sale");
const shablonCost = document.querySelector(".cost");
const shablonSalePrice = document.querySelector(".price");

function shablon() {
  shablonCompany.innerHTML = `${item.company} company`;
  shablonName.innerHTML = `${item.name}`;
  shablonSale.innerHTML = `${item.sale}%`;
  shablonCost.innerHTML = `${item.totalPrice}.00`;
  shablonSalePrice.innerHTML = `${item.Sum}.00`;
}
shablon();


// ///////////////////////////////////////// TO Cart
const amountCartNum = {
  cartAmount: 0
}

const cartItems = document.querySelector('.modal__cart')
const cartItem = `<div class="modal__content ">
<p class="modal__company  mt-20">Компания производитель: </p>
<p class="modal__name  mt-10">Название товара:</p>
<p class="modal__amount  mt-10">Кол-во:</p>
</div>`





const addCart = document.querySelector(".main__addCart")
const modalToCart = document.querySelector(".check__cart")
const amountCart = document.querySelector('.amount-cart')
amountCart.style.display = 'none'



  addCart.addEventListener("click", () => {
  if(amountCartNum.cartAmount < 9 && item.amount !== 0){
    console.log(item.amount);
    amountCartNum.cartAmount++
    amountCart.innerHTML = `${amountCartNum.cartAmount}`
     modalToCart.style.opacity = "1";
  addCart.classList.add("disabled");
  addCart.setAttribute("disabled", "disabled");
  amountCart.style.display = 'flex'
  setTimeout(() => {
    modalToCart.style.opacity = "0";
    addCart.classList.remove("disabled");
    addCart.removeAttribute("disabled");
  }, 1500);
  item.amount = 0
  numAmount.innerHTML = item.amount
  } else if(item.amount == 0){
    alert('Аза иди работай')
   
  }else{
     amountCart.innerHTML = `9<sup>+</sup>`
  }

 
});


// .............................. Cart .................................//

const modal = document.querySelector('.modal__wrapper')
const cart = document.querySelector('.header__cart')
const body = document.querySelector('body')

cart.addEventListener('click', (e) => {
  e.preventDefault()
  modal.style.opacity = "1"
  modal.style.pointerEvents = "auto"
  body.style.overflow = 'hidden'

})
const cartClose = document.querySelector('.modal__close')
const cartPay = document.querySelector('.modal__pay')
 
cartClose.addEventListener('click',() => {
  modal.style.opacity = "0"
  modal.style.pointerEvents = "none"
  body.style.overflow = 'auto'
})


