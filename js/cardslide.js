
    $(function(){
        $('.main-tabs li').click(function(){
            let i= $(this).index();

            $('.main-tabs li').removeClass("active")
            $(this).addClass("active")
            $('.pjwrap').eq(i).fadeIn(500).siblings('.pjwrap').hide();
        })
    })