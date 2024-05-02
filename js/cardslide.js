
    // 프로젝트선택
    $(function(){
        $('.main-tabs li').click(function(){
            let i= $(this).index();
            $('.pjwrap').eq(i).fadeIn(1000).siblings('.pjwrap').hide();
        })
    })

  