        $(document).ready(function() {
                var count;
                var interval;

            $(".example").on('mouseover', function() {
                var div = $('.example');
               

            interval = setInterval(function(){
                count = count || 1;
                var pos = div.scrollTop();
                div.scrollTop(pos + count);
            }, 100);
        }).click(function() {
            count < 6 && count++;
        }).on('mouseout', function() {
            // Uncomment this line if you want to reset the speed on out
            // count = 0;
            clearInterval(interval);
        });
    });
        