

$(document).ready(()=>{

    $("button").click(()=>{

       alert("page reloaded or clicked the button")

    })

    $("button").trigger('click')

})