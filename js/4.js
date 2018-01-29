$('#range').on('input', function () {
    var _t = $(this).val();
    $('.nm-age>input').val(_t);
});

var _arr = ["homme","femme"];
_arr.forEach(function(element,index){
    $(document).on("click","#"+element,function(){
        if(!$(this).hasClass(".active-sex")){
            $('.active-sex').toggleClass("active-sex");
            $(this).find("img").toggleClass("active-sex");
        }
    })
})