$(document).ready(function(){
    $('button').on('click',function(){
        $('<p>comes first</p>').insertBefore('p')
    })
})