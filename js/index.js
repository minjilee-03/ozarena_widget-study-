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
        return false;
    });
    $('.academy-title').click(function () {
        $('.battlica-event-box-wrap').hide(); 
        $('.academy-event-box-wrap').show(); 
        return false;
    });
});

