var $d3 = $("#demo_3");
    
$d3.ionRangeSlider({
    skin: "big",
    min: 0,
    max: 10000,
    from: 5000
});

$d3.on("change", function () {
    var $inp = $(this);
    var from = $inp.prop("value"); // reading input value
    var from2 = $inp.data("from"); // reading input data-from attribute

    console.log(from, from2); // FROM value
});

// console.log($('.js-range-slider').value)

// $(document).ready(function () {
//   $("#slider1").slider({
//     min: 5000,
//     max: 500000,
//     step: 5000,
//     slide: function (event, ui) {
//     $("#slider1-value").text(
//         "$" + ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//     );
//     computeValue();
//     },
//     stop: function (event, ui) {
//     $("#slider1-value").text(
//         "$" + ui.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//     );
//     computeValue();
//     },
// });

//     function computeValue() {
//         var amount = $("#slider1").slider("value");
//         $("#slider1-computedvalue").text(
//         amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//         );
// }
// });
