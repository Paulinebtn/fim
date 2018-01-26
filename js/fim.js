var popUpAct = document.getElementsByClassName('pop-up');
	// console.log(popUpAct);
	setTimeout(function() {
		popUpAct[0].classList.add('pop-up-active');
	}, 3000); 


var onglet = document.querySelectorAll('.alerte01');

var btn = document.querySelector('#prise-charge');

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

btn.addEventListener('onclick', function() {
    console.log('je suis stop');
    clearInterval(time_start);
    time = 0;
    time_start = undefined;
});




          
