var popUpAct = document.getElementsByClassName('pop-up');
	// console.log(popUpAct);
	setTimeout(function() {
		popUpAct[0].classList.add('pop-up-active');
	}, 3000); 


var ongletTime = document.getElementsByClassName('onglet');
	console.log(ongletTime);

var time_start = setInterval(function(){
	var time = 0;
	this.ongletTime[0] = time + 1; 
	}, 1000);


// var ongletTime = document.getElementsByClassName('onglet');
// var btn = document.querySelectorAll('#occupe');

// var time_start;
// var time = 0;

//     time_start = setInterval(function () {
//         popUpAct[1].time = time + 1;

//         var minutes = Math.floor(time / 60);
//         var seconds = time % 60;

//         if (minutes < 10) {
//             minutes = '0' + minutes;
//         }

//         if (seconds < 10) {
//             seconds = '0' + seconds;
//         }

//         var text = minutes + ':' + seconds;

//         time.textContent = text;
//     }, 1000);






          
