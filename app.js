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
  customerSupportBtn;

aboutLenovoBtn = document.getElementById("aboutLenovoBtn");
productServiceBtn = document.getElementById("productServiceBtn");
shopIndustryBtn = document.getElementById("shopIndustryBtn");
resourcesBtn = document.getElementById("resourcesBtn");
customerSupportBtn = document.getElementById("customerSupportBtn");

function aboutLenovo() {
  if (!aboutLenovoBtn.style.opacity || aboutLenovoBtn.style.opacity == "0") {
    minusImage1 = document.getElementById("plus1").src = "/assets/minus.png";
    aboutLenovoBtn.style.opacity = "1";
  } else {
    minusImage1 = document.getElementById("plus1").src = "/assets/plus.png";
    aboutLenovoBtn.style.opacity = "0";
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
