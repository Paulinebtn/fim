
$('#btn-alert').hide();
var popUpAct = document.getElementsByClassName('pop-up');
	// console.log(popUpAct);
	setTimeout(function() {
        $('#pop-up02').hide();
		popUpAct[0].classList.add('pop-up-active');
	}, 3000); 


var onglet = document.querySelectorAll('.alerte01');

var time_start;
var time = 0;

time_start = setInterval(function () {
    time = time + 1;

    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    if (minutes < 10) {
        minutes = '0' + minutes; 
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    var text = 'Chambre 01 ' + minutes + ':' + seconds;

    onglet[0].textContent = text;
}, 1000);

$("#pop-up02>form>input").on("click",function(){
    $('#btn-alert').hide();
    $('#pop-up02').hide();
    $('.pop-up').toggleClass("pop-up-active");
})

$(document).on("click","#btn-alert",function(){
    $('.pop-up').toggleClass("pop-up-active");
    $('#pop-up02').show();
})

$(document).on("click","#prise-charge",function(){
    $('.pop-up').toggleClass("pop-up-active");
    $('#pop-up01').hide();
    $('#btn-alert').show();
})

function toggleSlide() {
    if($('#pop-up01').is(":visible")) {
        $('#pop-up01').hide();
        $('#pop-up02').show();
    }
    else {
        $('#pop-up02').hide();
        $('#pop-up01').show();
    }
}

$(document).on("click",".touch-event-1",function(){
    if(!$('.afficher').is(':visible')){
        $('.touch-activate').toggleClass("touch-activate");
        $(this).toggleClass("touch-activate");
        $('.cacher').hide();
        $('.afficher').show();

    }
})

$(document).on("click",".touch-event-2",function(){
    if(!$('.cacher').is(':visible')){
        $('.touch-activate').toggleClass("touch-activate");
        $(this).toggleClass("touch-activate");
        $('.afficher').hide();
        $('.cacher').show();
    }
})

