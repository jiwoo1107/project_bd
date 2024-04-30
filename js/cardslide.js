    // 상단 메뉴 효과
    // $(function(){
    //     $('header nav a').click(function(){
    //         let i = $(this).index();
    //         $('header nav a').removeClass("active")
    //         $(this).addClass("active")
          
    //     })
    // })

    // 프로젝트선택
    $(function(){
        $('.main-tabs li').click(function(){
            let i= $(this).index();
            $('.pjwrap').eq(i).fadeIn(1000).siblings('.pjwrap').hide();
        })
    })

  