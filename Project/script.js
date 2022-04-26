
//se a página estiver a carregar aparecer cena a rodar


document.getElementById("navbar--0").style.display = "none";
document.getElementById("navbar--2").style.display = "none";
document.getElementById("navbar--3").style.display = "none";

function myMenuOpen() {
  var big = document.getElementById("navbar--0");
  var small = document.getElementById("navbar--1");
  if (big.style.display === "none" || small.style.display === "block") {
    big.style.display = "block";
    small.style.display = "none";
  } else {
    big.style.display = "none";
    small.style.display = "block";
  }
}

const profileOn = document.getElementById("profile");
profileOn.onmouseover = function () {
  if(profileOn.onmouseover){
    document.getElementById("navbar--3").style.display = "block";
  }
}

// const profileOff = document.getElementById("profile");
// const profileNon = document.getElementById("navbar--3");
// profileOff.onmouseout = function () {
//   if(profileOff.onmouseout && profileNon.onmouseout){
//     document.getElementById("navbar--3").style.display = "none";
//   }
// }

// function mouseOverIt(){
//   var on = document.getElementById("profile");
//   if(on.onmouseover){
//     document.getElementById("navbar--3").style.display = "block";
//   }
// }


const productOne = document.getElementById("product-normal-1");
const productZoomOne = document.getElementById("product--1");
const productThree = document.getElementById("product-normal-3");
const productZoomThree = document.getElementById("product--3");
const productFour = document.getElementById("product-normal-4");
const productZoomFour = document.getElementById("product--4");
const productFive = document.getElementById("product-normal-5");
const productZoomFive = document.getElementById("product--5");
const productSix = document.getElementById("product-normal-6");
const productZoomSix = document.getElementById("product--6");
const productSeven = document.getElementById("product-normal-7");
const productZoomSeven = document.getElementById("product--7");

productZoomOne.style.display = "none";
productZoomThree.style.display = "none";
productZoomFour.style.display = "none";
productZoomFive.style.display = "none";
productZoomSix.style.display = "none";
productZoomSeven.style.display = "none";


// function mouseOver(){
//   if(productOne.onmouseover){
//     productZoomOne.style.display = "block";
//     productOne.style.display = "none";
//   }

// }



productOne.onmouseover = function () {
  if(productOne.onmouseover){
    productZoomOne.style.display = "block";
    productOne.style.display = "none";
  }
}
productOne.onmouseleave = function (){
  if(productOne.onmouseleave){
    productZoomOne.style.display = "none";
    productOne.style.display = "block";
  }
}

const productTwo = document.getElementById("product-normal-2");
const productZoomTwo = document.getElementById("product--2");
productZoomTwo.style.display = "none";

productTwo.onmouseover = function () {
  if(productTwo.onmouseover){
    productZoomTwo.style.display = "block";
    productTwo.style.display = "none";
  }

}






// function mouseOver(){
//   document.getElementById("navbar--0").style.display = "none";
//   document.getElementById("navbar--1").style.display = "block";
// }
// function mouseOverF(){
//   document.getElementById("navbar--1").style.display = "none";
//   document.getElementById("navbar--0").style.display = "block";
// }


const buttonRight = document.getElementById('arrow-right');
const buttonLeft = document.getElementById('arrow-left');
const buttonRightNew = document.getElementById('right-arrow');
const buttonLeftNew = document.getElementById('left-arrow');

buttonRight.onclick = function () {
  document.getElementById('bestSeller').scrollLeft += 150;
};
buttonLeft.onclick = function () {
  document.getElementById('bestSeller').scrollLeft -= 150;
};
buttonRightNew.onclick = function () {
  document.getElementById('news').scrollLeft += 150;
};
buttonLeftNew.onclick = function () {
  document.getElementById('news').scrollLeft -= 150;
};


