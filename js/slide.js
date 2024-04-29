
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on:{
      init:function(){
        console.log("load")
      },
      slideChange:function(){
        let idx = this.activeIndex;
        console.log(this.activeIndex);
       
    


        if(idx==0){
          $('header nav a').removeClass("active")
          $('header nav a:nth-of-type(1)').addClass("active")
        }

        if(idx==1){
          $('header nav a').removeClass("active")
          $('header nav a:nth-of-type(2)').addClass("active")
          $('.profile').css("transform", "translateX(0px)").css("opacity","1")
          $(function(){
            setTimeout(()=>{
              $('.sk_card').css("transform", "translateY(0px)").css("opacity","1")
            },1800)
          })
        }
        if(idx===2){
          $('header nav a').removeClass("active")
          $('header nav a:nth-of-type(3)').addClass("active")
          $('.amazing-tabs').css("transform", "translateX(0px)").css("opacity","1")
          $(function(){
            setTimeout(()=>{
              $('.pjwrap:nth-of-type(1)').css("transform", "translateY(0px)").css("opacity","1")
            },1800)
          })
        }
        if(idx==3){
          $('header nav a').removeClass("active")
          $('header nav a:nth-of-type(4)').addClass("active")
          $('.ct_info').css("transform", "translateX(0px)").css("opacity","1")
        }
      }
    }
  });