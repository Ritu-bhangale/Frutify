var litretag = document.getElementsByClassName("butn");
var addToCart = document.getElementsByClassName("addToCart");
var checkQuantity = document.querySelectorAll(".tags button");
var smallestQuantity = document.querySelectorAll(".smallest");
var middleQuantity = document.querySelectorAll(".middle");
var largestQuantity = document.querySelectorAll(".largest");
var displayPrice = document.querySelector(".shop p")
var cartNumber=0;
var quantity=0;
var price=0;

console.log(addToCart);
console.log(litretag);
console.log(checkQuantity);
console.log(smallestQuantity);
console.log(middleQuantity);
console.log(largestQuantity);

document.querySelector("body").addEventListener("load",checkCookie)

/**
 * Quantity tag clicked
 */
clicktag=()=>{
    console.log("clicked");
}

reset=()=>{
    flag=0;
}
resetColor=()=>{
    for (let index = 0; index < smallestQuantity.length; index++){
    document.querySelectorAll(".smallest")[index].style.backgroundColor="#ffffff";
    document.querySelectorAll(".smallest")[index].style.color="#000000";
    document.querySelectorAll(".middle")[index].style.backgroundColor="#ffffff";
    document.querySelectorAll(".middle")[index].style.color="#000000";
    document.querySelectorAll(".largest")[index].style.backgroundColor="#ffffff";
    document.querySelectorAll(".largest")[index].style.color="#000000";
    console.log("entered");
    }
}
resetPrice=()=>{
    price=0;
}

/**
 * 250ml selected
 */
smallTag=()=>{
    console.log("clicked");
    for (let index = 0; index < smallestQuantity.length; index++) {
        document.querySelectorAll(".smallest")[index].style.backgroundColor="#E50051";
        document.querySelectorAll(".smallest")[index].style.color="#ffffff";
        document.querySelectorAll(".price")[index].style.display = "block";
        document.querySelectorAll(".price span")[index].innerHTML="100Rs";
    }
    flag=1;
}
/**
 * 500ml selected
 */
middleTag=()=>{
    console.log("clicked");
    for (let index = 0; index < middleQuantity.length; index++) {  
        document.querySelectorAll(".middle")[index].style.backgroundColor="#E50051";
        document.querySelectorAll(".middle")[index].style.color="#ffffff";
        document.querySelectorAll(".price")[index].style.display = "block";
        document.querySelectorAll(".price span")[index].innerHTML="180Rs";
    }
    flag=2;
}
/**
 * 250ml selectedlargest
 */
 largeTag=()=>{
    console.log("clicked");
    for (let index = 0; index < largestQuantity.length; index++) { 
        document.querySelectorAll(".largest")[index].style.backgroundColor="#E50051";
        document.querySelectorAll(".largest")[index].style.color="#ffffff"; 
        document.querySelectorAll(".price")[index].style.display = "block";
        document.querySelectorAll(".price span")[index].innerHTML="360Rs";
    }
    flag=3;
}

/**
 * Quantity tag clciked
*/
tagclick=()=>{
    console.log("clicked");
}

/**
 * add to cart buttton is pressed
 */
addCart=()=>{
    console.log("clicked");
    console.log(cartNumber);
    if(flag===1){
        price=price+100;
        cartNumber++;
    }
    else if(flag===2){
        price=price+180;
        cartNumber++;
    }
    else if(flag===3){
        price=price+360;
        cartNumber++;
    }
    else{
        alert(`Please select quantity of your order!`)
    }
    alert(`Item added to cart. Total items in your cart are ${cartNumber}. Total amount is ${price}`);
    document.querySelector(".shop p").style.display = "block";
    displayPrice.innerHTML=`${price} Rs.`;
    resetColor();
    reset();
}
var arrayReview=[];
arrayReview[0]="Dragée sugar plum lemon drops gummi bears caramels. I love cookie carrot cake danish wafer tootsie roll chocolate bar.";
arrayReview[1]="Jelly beans sweet chocolate bar pastry chocolate bar soufflé chocolate cake croissant. Cotton candy chocolate cake tart icing carrot cake ice cream carrot cake jujubes apple pie.";
arrayReview[2]="Carrot cake cotton candy lollipop biscuit. Jelly-o dragée jujubes wafer carrot cake sweet. I love marshmallow sesame snaps oat cake sweet brownie. Gingerbread jelly-o cookie jelly-o cupcake cotton candy.";

var arrayReviewHead=[];
arrayReviewHead[0]="Louisa park";
arrayReviewHead[1]="Jack Desouiza";
arrayReviewHead[2]="Driffen Hasset"
console.log(document.querySelector(".paper1 p span"))
document.querySelector(".paper1 p span").innerHTML=arrayReview[0];
document.querySelector(".paper1 h2 span").innerHTML=arrayReviewHead[0];

toggleLeft=()=>{
    for (let index = 0; index < 3; index++) {
        if(index!==0){
            document.querySelector(".paper1 p span").innerHTML=arrayReview[index-1];
            document.querySelector(".paper1 h2 span").innerHTML=arrayReviewHead[index-1];
        }
        else if(index===0){
            document.querySelector(".paper1 p span").innerHTML=arrayReview[2];
        }
    }
}
toggleRight=()=>{
    for (let index = 0; index < 3; index++) {
        if(index!==2){
            document.querySelector(".paper1 p span").innerHTML=arrayReview[index+1];
            document.querySelector(".paper1 h2 span").innerHTML=arrayReviewHead[index-1];
        }
        else if(index===2){
            document.querySelector(".paper1 p span").innerHTML=arrayReview[0];
        }
    }
}
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
    console.log("entered");
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + "'"+ user + "'"+" Hope you were refreshed last time you visited!");
  } else {
     user = prompt("Please enter your name:",""+"We have potential to make your stressed day fresh!");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}


