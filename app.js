// Burger
const menuBtn = document.querySelector(".menu-btn");
const menuBtn1a = document.querySelector(".menu-btn1a");
const menuBtn2 = document.querySelector(".menu-btn2");
const exploreBtn = document.querySelector(".explore-1");
const exploreBtn1a = document.querySelector(".explore-1a");
const exploreBtn2 = document.querySelector(".explore-2");
var showMenu = document.getElementById("id-burger-dropdown-content");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    exploreBtn.style.visibility = "hidden";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    exploreBtn.style.visibility = "visible";
    showMenu.style.display = "none";
    menuOpen = false;
  }
});

menuBtn1a.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn1a.classList.add("open");
    exploreBtn1a.style.visibility = "hidden";
    menuOpen = true;
  } else {
    menuBtn1a.classList.remove("open");
    exploreBtn1a.style.visibility = "visible";
    menuOpen = false;
  }
});

menuBtn2.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn2.classList.add("open");
    exploreBtn2.style.visibility = "hidden";
    menuOpen = true;
  } else {
    menuBtn2.classList.remove("open");
    exploreBtn2.style.visibility = "visible";
    menuOpen = false;
  }
});

// Header-menu, Header-menu 750px to stick on top
window.onscroll = function () {
  stickNavbar2();
  stickNavbar3();
};

var header, header2, header3, sticky, sticky2, sticky3, burgerMenu;

header = document.getElementById("header-menu");
sticky = header.offsetTop;
header2 = document.getElementById("header-menu-2");
sticky2 = header2.offsetTop;
header3 = document.getElementById("header-menu-3");
sticky3 = header3.offsetTop;
burgerMenu = document.getElementById("burger-menu");

function stickNavbar2() {
  if (window.pageYOffset > sticky2) {
    header.style.display = "none";
    burgerMenu.style.display = "none";
    header2.classList.add("sticky");
    header2.style.display = "block";
  } else {
    header2.classList.remove("sticky");
    header2.style.display = "none";
    header.style.display = "block";
    burgerMenu.style.display = "block";
  }
}

function stickNavbar3() {
  if (window.pageYOffset > sticky3) {
    header3.classList.add("sticky");
  } else {
    header3.classList.remove("sticky");
  }
}

// Burger-menu
var showMenu, burgerBtn;

function showBurgerMenu() {
  showMenu = document.getElementById("id-burger-dropdown-content");

  let burgerMenu = showMenu.style.display == "none";
  burgerMenu = showMenu.style.display == "block";
  switch (burgerMenu) {
    case showMenu.style.display == "none":
      showMenu.style.display = "block";
      break;
    case showMenu.style.display == "block":
      showMenu.style.display = "none";
      location.reload();
      break;
    default:
      showMenu.style.display = "none";
  }
}

function showBurgerMenu1a() {
  showMenu = document.getElementById("id-burger-dropdown-content-1-a");

  let burgerMenu = showMenu.style.display == "none";
  burgerMenu = showMenu.style.display == "block";
  switch (burgerMenu) {
    case showMenu.style.display == "none":
      showMenu.style.display = "block";
      break;
    case showMenu.style.display == "block":
      showMenu.style.display = "none";
      location.reload();
      break;
    default:
      showMenu.style.display = "none";
  }
}

function showBurgerMenu2() {
  showMenu = document.getElementById("id-burger-dropdown-content-2");

  let burgerMenu = showMenu.style.display == "none";
  burgerMenu = showMenu.style.display == "block";
  switch (burgerMenu) {
    case showMenu.style.display == "none":
      showMenu.style.display = "block";
      break;
    case showMenu.style.display == "block":
      showMenu.style.display = "none";
      location.reload();
      break;
    default:
      showMenu.style.display = "none";
  }
}

// Burger-menu sub-menu for Mobile
var navMenuHidden, plus, minus;

function showSubMenu() {
  navMenuHidden = document.getElementById("hidden-menu1");
  plus = document.getElementById("plus");
  minus = document.getElementById("minus");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu2() {
  navMenuHidden = document.getElementById("hidden-menu2");
  plus = document.getElementById("plus2");
  minus = document.getElementById("minus2");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu3() {
  navMenuHidden = document.getElementById("hidden-menu3");
  plus = document.getElementById("plus3");
  minus = document.getElementById("minus3");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu4() {
  navMenuHidden = document.getElementById("hidden-menu4");
  plus = document.getElementById("plus4");
  minus = document.getElementById("minus4");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu5() {
  navMenuHidden = document.getElementById("hidden-menu5");
  plus = document.getElementById("plus5");
  minus = document.getElementById("minus5");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu6() {
  navMenuHidden = document.getElementById("hidden-menu6");
  plus = document.getElementById("plus6");
  minus = document.getElementById("minus6");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu1a() {
  navMenuHidden = document.getElementById("hidden-menu1-a");
  plus = document.getElementById("plus1-a");
  minus = document.getElementById("minus1-a");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu2a() {
  navMenuHidden = document.getElementById("hidden-menu2-a");
  plus = document.getElementById("plus2-a");
  minus = document.getElementById("minus2-a");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu3a() {
  navMenuHidden = document.getElementById("hidden-menu3-a");
  plus = document.getElementById("plus3-a");
  minus = document.getElementById("minus3-a");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu4a() {
  navMenuHidden = document.getElementById("hidden-menu4-a");
  plus = document.getElementById("plus4-a");
  minus = document.getElementById("minus4-a");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu5a() {
  navMenuHidden = document.getElementById("hidden-menu5-a");
  plus = document.getElementById("plus5-a");
  minus = document.getElementById("minus5-a");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

function showSubMenu6a() {
  navMenuHidden = document.getElementById("hidden-menu6-a");
  plus = document.getElementById("plus6-a");
  minus = document.getElementById("minus6-a");

  if (!navMenuHidden.style.display || navMenuHidden.style.display == "none") {
    navMenuHidden.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
    event.stopPropagation();
  } else {
    navMenuHidden.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
    event.stopPropagation();
  }
}

// About/ Products & Service/ Shop By/ Resources/ Customer Support
var minusImage1,
  minusImage2,
  minusImage3,
  minusImage4,
  minusImage5,
  aboutLenovoBtn,
  productServiceBtn,
  shopIndustryBtn,
  resourcesBtn,
  customerSupportBtn,
  svgprimary,
  svgcontent,
  svgitem,
  svgsecondary;

aboutLenovoBtn = document.getElementById("aboutLenovoBtn");
productServiceBtn = document.getElementById("productServiceBtn");
shopIndustryBtn = document.getElementById("shopIndustryBtn");
resourcesBtn = document.getElementById("resourcesBtn");
customerSupportBtn = document.getElementById("customerSupportBtn");

function aboutLenovo() {
  if (!aboutLenovoBtn.style.opacity || aboutLenovoBtn.style.opacity == "0") {
    minusImage1 = document.getElementById("plus1").src = "/assets/minus.png";
    aboutLenovoBtn.style.display = "block";
  } else {
    minusImage1 = document.getElementById("plus1").src = "/assets/plus.png";
    aboutLenovoBtn.style.display = "none";
  }
}

function productService() {
  if (
    !productServiceBtn.style.display ||
    productServiceBtn.style.display == "none"
  ) {
    minusImage2 = document.getElementById("plus2").src = "/assets/minus.png";
    productServiceBtn.style.display = "block";
  } else {
    minusImage2 = document.getElementById("plus2").src = "/assets/plus.png";
    productServiceBtn.style.display = "none";
  }
}

function shopIndustry() {
  if (
    !shopIndustryBtn.style.display ||
    shopIndustryBtn.style.display == "none"
  ) {
    minusImage3 = document.getElementById("plus3").src = "/assets/minus.png";
    shopIndustryBtn.style.display = "block";
  } else {
    minusImage3 = document.getElementById("plus3").src = "/assets/plus.png";
    shopIndustryBtn.style.display = "none";
  }
}

function resources() {
  if (!resourcesBtn.style.display || resourcesBtn.style.display == "none") {
    minusImage4 = document.getElementById("plus4").src = "/assets/minus.png";
    resourcesBtn.style.display = "block";
  } else {
    minusImage4 = document.getElementById("plus4").src = "/assets/plus.png";
    resourcesBtn.style.display = "none";
  }
}

function customerSupport() {
  if (
    !customerSupportBtn.style.display ||
    customerSupportBtn.style.display == "none"
  ) {
    minusImage5 = document.getElementById("plus5").src = "/assets/minus.png";
    customerSupportBtn.style.display = "block";
  } else {
    minusImage5 = document.getElementById("plus5").src = "/assets/plus.png";
    customerSupportBtn.style.display = "none";
  }
}
