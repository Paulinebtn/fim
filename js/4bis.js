$("#tags").tagsInput({width:'auto',defaultText:'Ajouter une allergie'});
$('#medocs').tagsInput({width:'auto',defaultText:'Ajouter un médicament'});

$('.all-btn>button').on("click",function(event){
    $(".sanguin-active").toggleClass("sanguin-active");
    event.preventDefault();
    $(this).toggleClass("sanguin-active");
})

