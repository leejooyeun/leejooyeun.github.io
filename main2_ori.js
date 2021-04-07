$(document).ready(function(){
    var home = 0;
    var pg1 = $("#pg1").offset().top;
    var pg2 = $("#pg2").offset().top;
    var pg3 = $("#pg3").offset().top;
    var pg4 = $("#pg4").offset().top;
    var ft = $(".footer").offset().top;
    var tot = parseInt($(".header").height()+$("#pg1").height()+$("#pg2").height()+$("#pg3").height());
    var endPage = parseInt(pg3+200);
    console.log(tot);
   $(".collap_tit").click(function(){
       $(this).nextAll(".collap_lst").toggleClass("on");
   }); 
    $(window).scroll(function(){
        var scTop = parseInt($(window).scrollTop()); 
        var ht = $(window).height(); 

        if(scTop>=ht) {
            $(".to_top").fadeIn();
        } else {
            $(".to_top").fadeOut();
        }
        if(scTop<pg1){
            $(".cur_page").css("top", "35px");
        } else if(scTop>=pg1 && scTop<pg2){
            $(".cur_page").css("top", "35px");
        } else if(scTop>=pg2 && scTop<pg3){
            $(".cur_page").css("top", "55px");
        } else if(scTop>=pg3 && scTop<pg3+200){
            $(".cur_page").css("top", "75px");
        } else if(scTop>=pg3+200){
            $(".cur_page").css("top", "95px");
        }
    });
    $(".to_top").click(function(){
       $("body, html").not(":animated").animate({scrollTop:"0px"}, 500); 
    });
    $(".meter_fr li button").click(function(){
        var tar = $(this).attr("data-target");
        console.log(tar);
        if(tar="home") {
           $("body, html").not(":animated").animate({scrollTop:"0px"}, 500); 
        } else if(tar=="pg1") {
            $("body, html").not(":animated").animate({scrollTop:pg1+"px"}, 500);
        } else if(tar="pg2") {
            $("body, html").not(":animated").animate({scrollTop:pg2+"px"}, 500);
        } else if(tar="pg3") {
            $("body, html").not(":animated").animate({scrollTop:pg3+"px"}, 500);
        } else {
            $("body, html").not(":animated").animate({scrollTop:endPage+"px"}, 500);
        }

    });
});    