$(function(){
  let dHeight = $(document).height();


  // 헤더 마우스 호버 시 노출
  $('header').mouseenter(()=>{
    $(this).addClass('on')
  }).mouseleave(()=>{
    $(this).removeClass('on')
  })

  // 버튼 눌러서 섹션 이동
  $('header a, .top_button a').click(function(){
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    $('html,body').stop();
    $('html,body').animate({scrollTop : offsetElem.top},400);
  })

  $('#gnb_btn').click(function(){
    // $('#gnb').slideup();
    if( $('#gnb').css('display') == 'none' ){
      $('header').addClass('on')
      $('#gnb').slideDown(400)
    }else{
      $('header').removeClass('on')
      $('#gnb').slideUp(400)
    }
  })

  // ts 클래스 반응
  activeFunc();
  function activeFunc(){
    let wHeight = $(window).innerHeight();
    let addHeight = wHeight*1;
    let thisScrollTop = $(this).scrollTop();
    $(".ts").each(function(){
      let thisOffset = $(this).offset();
      let thisHeight = $(this).height();
      console.log(thisHeight)
      // if( (thisScrollTop - 170) < thisOffset.top && thisOffset.top < (thisScrollTop + 840 ) ){
      if( (thisScrollTop + (wHeight * 0.75) ) >= thisOffset.top && (thisOffset.top + thisHeight - (wHeight * 0.45) ) > thisScrollTop ){
        $(this).addClass("active");
      }
    })
      // let thisOffset = $("#clinic").offset();
      // let thisHeight = $("#clinic").outerHeight();
      // if( (thisScrollTop + (wHeight * 0.75) ) >= thisOffset.top && (thisOffset.top + thisHeight - (wHeight * 0.45) ) > thisScrollTop ){
      //   $('#clinic .inner').addClass("active");
      // }
  }

  // ts 클래스 반응
  $(window).scroll(function(){
    activeFunc();
  })


  // 헤더 스크롤 위치에 따라 노출
  $(window).scroll(()=>{
    // 헤더
    if( $(window).scrollTop() != 0 ){
      $('header').addClass('on')
    }else{
      $('header').removeClass('on')
    }


    // 탑 버튼
    let dHeight = $(document).height();
    let wHeight = $(window).height();
    let winScrollTop = $(window).scrollTop();
    let footerHeight = $('footer').height();

    if( dHeight - footerHeight < (wHeight + winScrollTop)){
      $('.top_button').addClass('fixed')
    }else{
      $('.top_button').removeClass('fixed')
    }
  })

  // 말줄임표 처리
  const length = 170;
  $('.essey_title + p').each(function(){
    if( $(this).text().length >= length ){
      $(this).text($(this).text().substr(0,length)+'..');
    }
  })
})


// $('').fadeIn();
