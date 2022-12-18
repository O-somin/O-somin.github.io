$(function(){
    $(".slide").click(function(){
        $(".gnb").addClass("on");
    })

    $(".close-btn").click(function(){
        $(".gnb").removeClass("on");
    })
})
