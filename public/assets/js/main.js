window.onscroll = function () {
  if (window.scrollY > 22) {
    document.querySelector("navbar").classList.add("scrolled");
  } else {
    document.querySelector("navbar").classList.remove("scrolled");
  }
}