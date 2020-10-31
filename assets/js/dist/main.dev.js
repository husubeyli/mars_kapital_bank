"use strict";

$(document).ready(function () {
  $('.slick-slide-header').slick({
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev slick1 d-md-block d-none"><i class="fas fa-angle-left text-gray" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next slick2 d-md-block d-none"><i class="fas fa-angle-right text-gray" aria-hidden="true"></i></div>'
  });
  $('.slick-slide-sd').slick({
    // SECOND SLIDER
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<div class="slick-sd-prev slick-sd-1"><i class="font-24 fas fa-angle-left text-gray" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-sd-next slick-sd-2"><i class="font-24 fas fa-angle-right text-gray" aria-hidden="true"></i></div>'
  });
  $('.news-slick-slider').slick({
    // NEWS SLIDER 
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: '<div class="slick-news-next slick-news-2"></div>'
  }); // ION RANGE

  var $moneyRange = $("#money_range");
  $moneyRange.ionRangeSlider({
    hide_min_max: true,
    hide_from: true,
    skin: "big",
    min: 0,
    max: 20000,
    from: 5000
  });
  var $monthRange = $("#month_range");
  $monthRange.ionRangeSlider({
    hide_min_max: true,
    skin: "big",
    min: 3,
    max: 60,
    from: 6
  });
  moneyRangeVal = $("#money_range").val();
  monthRangeVal = $("#month_range").val();
  $('#current_loan_amount').text(moneyRangeVal);
  $('#current_month_amount').text(monthRangeVal);
  $('.js-range-slider').on('input', function (e) {
    // Output range values
    e.preventDefault();
    moneyRangeVal = $("#money_range").val();
    monthRangeVal = $("#month_range").val();
    $('#current_loan_amount').text(moneyRangeVal);
    $('#current_month_amount').text(monthRangeVal);
    var result = moneyRangeVal / monthRangeVal + 3.6;
    $('#monthly_payment').text(result.toFixed(2));
  }); // $moneyRange.on("change", function () {
  //     var $inp = $(this);
  //     var from = $inp.prop("value"); // reading input value
  //     var from2 = $inp.data("from"); // reading input data-from attribute
  //     console.log(from, from2); // FROM value
  // });
  // $monthRange.on("change", function () {
  //     var $inp = $(this);
  //     var from = $inp.prop("value"); // reading input value
  //     var from2 = $inp.data("from"); // reading input data-from attribute
  //     console.log(from, from2); // FROM value
  // });
  // slide-section-sd

  $('.menu-dropdown  .menu-dropdown-arrow').on('click', function () {
    $('#menu-list').addClass('active');
    $(this).closest('.menu-dropdown').addClass('active');
    $('.slick-slides').addClass('d-none');
  });
  $('.menu-dropdown .menu-dropdown-goback').on('click', function () {
    $('#menu-list').removeClass('active');
    $(this).closest('.menu-dropdown').removeClass('active');
    $('.slick-slides').removeClass('d-none');
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
}); // FOOTER

function myFunction() {
  document.getElementById("img_container_img").style.display = "none";
  document.getElementById("message_box_id").style.display = "block";
}

function MySecondFunction() {
  document.getElementById("img_container_img").style.display = "block";
  document.getElementById("message_box_id").style.display = "none";
}