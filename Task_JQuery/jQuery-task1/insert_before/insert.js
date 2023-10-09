$(document).ready(function(){
    $('#b1').on('click',function(){
        $('<p>comes first</p>').insertBefore('#p1')
    })
})