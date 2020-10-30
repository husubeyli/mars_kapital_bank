$(document).ready(function(){
    $('.slick-slide-header').slick({
        //   dots: true,
        // infinite: true,
        // speed: 300,
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev slick1 d-md-block d-none"><i class="fas fa-angle-left text-gray" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next slick2 d-md-block d-none"><i class="fas fa-angle-right text-gray" aria-hidden="true"></i></div>'

    });
    $('.slick-slide-sd').slick({
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<div class="slick-sd-prev slick-sd-1"><i class="font-24 fas fa-angle-left text-gray" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-sd-next slick-sd-2"><i class="font-24 fas fa-angle-right text-gray" aria-hidden="true"></i></div>'

    });


    // slide-section-sd

    $('.menu-dropdown  .menu-dropdown-arrow').on('click', function(){
        $('#menu-list').addClass('active')
        $(this).closest('.menu-dropdown').addClass('active')
    })
    $('.menu-dropdown .menu-dropdown-goback').on('click', function(){
        $('#menu-list').removeClass('active');
        $(this).closest('.menu-dropdown').removeClass('active');
    })

});

document.querySelector('.btn-burger').addEventListener('click', function(){
    var header = document.querySelector('.header-none')

    header.classList.add('d-none')
    document.querySelector('.menu').classList.add('d-block')

})

document.querySelector('.menu-close-btn').addEventListener('click', function(){
    var header = document.querySelector('.header-none')
    var menu = document.querySelector('.menu')
    header.classList.remove('d-none')
    menu.classList.remove('d-block')
})

document.querySelector('.search-bar button').addEventListener('click', function(e){
    e.stopPropagation();
    this.parentNode.classList.toggle('active');

});

document.addEventListener("click", function(elem){
    const element = elem.target;
    if(element.id != "search-input"){
        document.querySelector('.search-bar').classList.remove('active')
    }
})

