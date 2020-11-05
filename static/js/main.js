$(document).ready(function(){
    // <firstSlider>
    $('.slick-slide-header').slick({
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev slick1 position-absolute d-md-block d-none"></div>',
        nextArrow: '<div class="slick-next slick2 position-absolute d-md-block d-none"></div>'

    });

    $('.slick-slide-sd').slick({ // SECOND SLIDER
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<div class="slick-sd-prev slick-sd-1"><i class="font-24 fas fa-angle-left text-gray" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-sd-next slick-sd-2"><i class="font-24 fas fa-angle-right text-gray" aria-hidden="true"></i></div>'

    });


    
    $('.news-slick-slider').slick({ // NEWS SLIDER 
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: '<div class="slick-news-next slick-news-2"></div>',
        responsive: [
    {
    breakpoint: 1099,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
    }
    },
    {
    breakpoint: 960,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]


});

    // <ionRange>
    var $moneyRange = $("#money_range");
    
    $moneyRange.ionRangeSlider({
        hide_min_max: true,
        hide_from: true,
        skin: "big",
        min: 300,
        max: 20000,
        step: 100,
        from: 10000
    });

    var $monthRange = $("#month_range");
    $monthRange.ionRangeSlider({
        hide_min_max: true,
        skin: "big",
        min: 3,
        max: 60,
        from: 6
    });

    moneyRangeVal = $("#money_range").val()
    monthRangeVal = $("#month_range").val()

    $('#current_loan_amount').text(moneyRangeVal)
    $('#current_month_amount').text(monthRangeVal)
    
    $('.js-range-slider').on('input', function(e){ // Output range values
        e.preventDefault()

        moneyRangeVal = $("#money_range").val()
        monthRangeVal = $("#month_range").val()

        $('#current_loan_amount').text(moneyRangeVal)
        $('#current_month_amount').text(monthRangeVal)

        let result = (moneyRangeVal / monthRangeVal) + 3.38

        $('#monthly_payment').text(result.toFixed(2))
        

    })
    // </ionRange>

    $('.menu-dropdown  .menu-dropdown-arrow').on('click', function(){
        $('#menu-list').addClass('active')
        $(this).closest('.menu-dropdown').addClass('active')
        $('.slick-slides').addClass('d-none')
    })
    $('.menu-dropdown .menu-dropdown-goback').on('click', function(){
        $('#menu-list').removeClass('active');
        $(this).closest('.menu-dropdown').removeClass('active');
        $('.slick-slides').removeClass('d-none')
    })


    // converter dropdown

    $('.selector-expanded').on('click', function(e){
        e.preventDefault()
        $('.selector__arrows > .selector_arrows-up').toggleClass('d-block')
        $('.selector__opener').toggleClass('active')
        $('.select-list').toggleClass('d-block')


    })

    $(".list-converter > .list-select").on('click', function(e){ // dropdonw converter change field
            $('.selected_value').text()
            if ($(this).attr('data-value') == 'USD'){
                $('.selected_value').text('USD')
                $('.curr_row_first td:nth-child(1)').text('170.00')
                $('.curr_row_first td:nth-child(2)').text('AZN')

                $('.curr_row_second td:nth-child(1)').text('200.00')
                $('.curr_row_second td:nth-child(2)').text('EUR')

                $(this).css('display', 'none')
                $('.list-select.azn').css('display', 'block')
                $('.list-select.eur').css('display', 'block')
            }else if($(this).attr('data-value') == 'EUR') {
                $('.selected_value').text('EUR')
                $(this).css('display', 'none')
                $('.list-select.usd').css('display', 'block')
                $('.list-select.azn').css('display', 'block')
                
                $('.curr_row_first td:nth-child(1)').text('170.40')
                $('.curr_row_first td:nth-child(2)').text('AZN')

                $('.curr_row_second td:nth-child(1)').text('200.00')
                $('.curr_row_second td:nth-child(2)').text('USD')
            }else {
                $('.selected_value').text('AZN')
                $(this).css('display', 'none')
                $('.list-select.usd').css('display', 'block')
                $('.list-select.eur').css('display', 'block')

                $('.curr_row_first td:nth-child(1)').text('170.00')
                $('.curr_row_first td:nth-child(2)').text('USD')

                $('.curr_row_second td:nth-child(1)').text('285.00')
                $('.curr_row_second td:nth-child(2)').text('EUR')
            }
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



// FOOTER
function myFunction() {
    document.getElementById("img_container_img").style.display = "none";
    document.getElementById("message_box_id").style.display = "block";
}

function MySecondFunction() {
    document.getElementById("img_container_img").style.display = "block";
    document.getElementById("message_box_id").style.display = "none";
}
