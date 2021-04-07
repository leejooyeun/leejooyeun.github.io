$(document).ready(function(){
    $(".collap_item li.item3").click(function(){
        $(".header").toggleClass("active");
    });
    $(window).scroll(function(){
        var scTop = parseInt($(window).scrollTop());
        if(scTop>=300){
            $(".header").addClass("on");
        } else {
            $(".header").removeClass("on");
        }
    });
    $("#pg1 .pg_tit").click(function(){
        $("#pg1 .pg_tit").toggleClass("on");
        $(".map_box").toggleClass("on");
    });
    $(".collap_close_btn").click(function(){
        $("#pg1 .pg_tit").removeClass("on");
        $(".map_box").removeClass("on");
    });
    var tr_th = parseInt($(".tran_lst").width());
    $(".tran_lst li").mouseenter(function(){ 
        $(this).width(tr_th*0.44);
        $(this).siblings().width(tr_th*0.28);
    });
    $(".tran_lst li").mouseleave(function(){ 
        $(".tran_lst li").width(tr_th*0.3333333);
    });
});    