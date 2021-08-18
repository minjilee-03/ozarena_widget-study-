$(function () {
    $('.title').click(function () {
        $('.title').removeClass('active');
        $(this).addClass('active');
    })
})

$(document).ready(function () {
    $('.battlica-event-box-wrap').show();
    $('.academy-event-box-wrap').hide();
    $('.battlica-title').click(function () {
        $('.academy-event-box-wrap').hide();
        $('.battlica-event-box-wrap').show();
        $('.academy-more-event-box-wrap').hide();
        return false;
    });
    $('.academy-title').click(function () {
        $('.battlica-event-box-wrap').hide();
        $('.academy-event-box-wrap').show();
        $('.battlica-more-event-box-wrap').hide();
        return false;
    });
});

$(document).ready(function () {
    $('.more-event-box-wrap').hide();
    $('.more-container-wrap').click(function () {
        $('.academy-more-event-box-wrap').slideToggle(1200);
    });
});


