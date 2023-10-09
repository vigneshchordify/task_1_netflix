


$(document).ready(function(){


    $(".p1").on("click",function(){
        $(this).css({"color":"red"})
    });

    $('#b1').on('click',function(){
        $('.p1').unbind()
    })

})


