function changeImage(e, numImg) {
  var elems = document.querySelector(".active");
  if (elems !== null && numImg !== "") {
    elems.classList.remove("active");
    e.target.className = "active";
  }

  var servicesCarousel = document.getElementById("servicesCarousel");
  switch (numImg) {
    case "1":
      servicesCarousel.src = "img/img-subistitute.png";
      break;
    case "2":
      servicesCarousel.src = "img/img-subistitute.png";
      break;
    case "3":
      servicesCarousel.src = "img/img-subistitute.png";
      break;
    case "4":
      servicesCarousel.src = "img/img-subistitute.png";
      break;
    case "5":
      servicesCarousel.src = "img/img-subistitute.png";
      break;
    default:
      break;
  }
}
