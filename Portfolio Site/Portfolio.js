//Mobile nav functions
$("#ham").click(function(e){
               $("#HamNav").slideToggle(1000); 
            });
//This allows to click anywhere in the header to close the menu again
$("header, .paraLayer").click(function(e){
                $("#HamNav").slideUp(1000);                 
            });


//Scroll to sections
$("#HamNav a").click(function(e){
    var scrollLink = $(this).attr('href');
    $("html, body").animate({
       scrollTop: $(scrollLink).offset().top 
    }, 1000);
    
});