


$(document).ready(function(){


    $("p").on("click",function(){
        $(this).css({"color":"red"})
    });

    $('button').on('click',function(){
        $('p').unbind()
    })

})


