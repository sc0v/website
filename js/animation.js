$( document ).ready(function() {
    
    if(! $.cookie('carnivalintro')) {
    
        $('#animation').delay(4500).fadeOut(500);  

        var arr = [];
        for (var i = 1; i < 11; i++)
            arr.push(i);

        $.each(arr, function(idx, item) {
            setTimeout(function(){
            target = "#panel".concat(item);
            $(target).addClass("go");
            },100*item);
        });
        $('#animation .logo').delay(2000).fadeIn(500);
        $.cookie('carnivalintro', 'skip');   
    } else {
        $('#animation').hide();   
    }

    
    
});

