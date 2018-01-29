$('.modCalendar').hide();
toggleOpa();
function toggleOpa(){
    if($('.opa').is(':visible')){
        $('.opa').hide();
    }
    else{
        $('.opa').show();
    }
}
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["activité", "inactivité"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: ['#C5D9EF', '#60A9FF'],
            data: [75, 25],
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["salle de bain", "chambre"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: ['#FDD9B0', '#FFAC5A'],
            data: [75, 25],
        }]
    },

    // Configuration options go here
    options: {}
});

$(document).on("click","#toggleCalendar",function(){
    toggleOpa();
    $('.modCalendar').show();
})

$(document).on("click",function(e){
    if($(e.target).hasClass("opa")){
        toggleOpa();
        $('.modCalendar').hide();
    }
})