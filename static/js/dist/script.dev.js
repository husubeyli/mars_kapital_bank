"use strict";

// slick
$(document).ready(function () {
  $('.slick-slide-header').slick({
    accessibility: true,
    arrows: true
  });
});
document.querySelector('.btn-burger').addEventListener('click', function () {
  var header = document.querySelector('.header-none');
  header.classList.add('d-none');
  document.querySelector('.menu').classList.add('d-block');
});
document.querySelector('.menu-close-btn').addEventListener('click', function () {
  var header = document.querySelector('.header-none');
  var menu = document.querySelector('.menu');
  header.classList.remove('d-none');
  menu.classList.remove('d-block');
});
document.querySelector('.search-bar button').addEventListener('click', function (e) {
  e.stopPropagation();
  this.parentNode.classList.toggle('active');
});
document.addEventListener("click", function (elem) {
  var element = elem.target;

  if (element.id != "search-input") {
    document.querySelector('.search-bar').classList.remove('active');
  }
});

function openNav() {
  document.getElementById("menu-item-side").style.width = "100%";
}