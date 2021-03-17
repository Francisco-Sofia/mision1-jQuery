$(function() {

    $('.nav a').click(function(e) {
        e.preventDefault();

        $('.nav a').removeClass('active');
        
        $(this).addClass('active');

        $('.nav li a').each(function(i) {
            if($(this).attr('class') != 'active')
                $(this).css('color','#000000');
        })

    })

    $('.nav a').hover(
        function() {
            $(this).css('color','#EA178C');
        }, function() {
            if($(this).attr('class') != 'active')
                $(this).css('color','#000000');
        }
    );

})