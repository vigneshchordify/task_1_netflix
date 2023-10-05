

$(document).ready(()=>{

    $("button").on("click",function(){

       alert("page reloaded or clicked the button")

    })

    $("button").trigger('click')

})