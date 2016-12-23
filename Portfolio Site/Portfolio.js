//Mobile nav functions
$("#ham").click(function(e){
               $("#HamNav").slideToggle(1000); 
            });
//This allows to click anywhere in the header to close the menu again
$("header").click(function(e){
                $("#HamNav").slideUp(1000);                 
            });

//Ask about when clicking ham img, if I can hide ham image and place mobile nav menu in its place