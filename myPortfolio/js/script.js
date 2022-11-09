var typed = new Typed(".mov",{
    strings: ["Student Wirtschaftsinformatik", "Softwaretester"] ,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

})

$(document).ready(function () {

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });

});

$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });
});