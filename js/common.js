$(function(){
  let dHeight = $(document).height();
  let wHeight = $(window).innerHeight();
  let winScrollTop = $(window).scrollTop();
  // let footerHeight = $('footer').outerHeight();
  // let footerHeight = $('footer').outerHeight();

  // 헤더 마우스 호버 시 노출
  $('header').mouseenter(function(){
    $(this).addClass('on')
  }).mouseleave(function(){
    if( $(window).scrollTop() == 0 ){
      $(this).removeClass('on')
    }
  })

  // 버튼 눌러서 섹션 이동
  $('header a, .back_to_top').click(function(){
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    $('html,body').stop();
    $('html,body').animate({scrollTop : offsetElem.top},400);
  })

  // 모바일 버튼 클릭 / 메뉴 호출
  $('#gnb_btn').click(function(){
    // $('#gnb').slideup();
    if( $('#gnb').css('display') == 'none' ){
      $('header, #gnb_btn').addClass('on')
      $('#gnb').slideDown(400)
    }else{
      $('#gnb_btn').removeClass('on')
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
      let thisHeight = $(this).outerHeight();
      if( (thisScrollTop + (wHeight * 0.75) ) >= thisOffset.top && (thisOffset.top + thisHeight - (wHeight * 0.45) ) > thisScrollTop ){
        $(this).addClass("active");
      }
    })
  }

  // 화면 커졌을 때 gnb 노출
  $(window).resize(function(){
    if( $(this).innerWidth() > 768 ){
      $('#gnb').css('display','block')
    }else{
      $('#gnb').css('display','none')
    }

    // 슬라이더 너비 고정
    $('.slider_01, .slider_02, .slider_03, .slider_04').css('width','100%')
  })

  // 탑 버튼 초기화
  // $('.top_button_wrap').css('top',(wHeight + winScrollTop))

  // 헤더 스크롤 위치에 따라 노출
  $(window).scroll(function(){
    winScrollTop = $(window).scrollTop();

    // 데코레이션 움직임
    let deco1Height = winScrollTop*0.5;
    let deco2Height = winScrollTop*0.2;
    let deco3Height = winScrollTop*0.8;
    let deco4Height = winScrollTop*0.3;
    $('.deco1').css('transform', 'translateY(-'+deco1Height+'px)');
    $('.deco2').css('transform', 'translateY(-'+deco2Height+'px)');
    $('.deco3').css('transform', 'translateY(-'+deco3Height+'px)');
    $('.deco4').css('transform', 'translateY(-'+deco4Height+'px)');

    // ts 클래스 반응
    activeFunc();

    // 헤더 색 변화
    if( $(window).scrollTop() != 0 ){
      $('header').addClass('on')
    }else{
      $('header').removeClass('on')
    }

    // 탑 버튼
    // dHeight = $(document).height();
    // wHeight = $(window).innerHeight();
    // let footerHeight = $('footer').outerHeight();
    let footerHeight = $('footer').offset().top;

    if( footerHeight <= (wHeight + winScrollTop) ){
      $('.top_button_wrap').css('transform','translateY(-'+((wHeight + winScrollTop) - footerHeight + 0)+'px)')
      // $('#test').css('top',footerHeight)
      // $('.top_button_wrap').css('top', footerHeight)
      // $('.top_button_wrap').css('bottom',(wHeight + winScrollTop) - footerHeight)
    // if( dHeight - footerHeight <= (wHeight + winScrollTop)){
      // if( $(window).width() < 500 ){
        // $('.schedule').css('transform', 'translateY(-'+  ((wHeight + winScrollTop - footerHeight) / $('footer').outerHeight() * 30 )/2 +'vw)')
      // }else{
        // $('.schedule').css('transform', 'translateY(-'+  ((wHeight + winScrollTop - footerHeight) / $('footer').outerHeight() * 30 ) +'px)')
      // }
      // $('.top_button_wrap').addClass('fixed')

      // $('.top_button_wrap').css('bottom',footerHeight)
    }else{
      // $('.top_button_wrap').css('top',(wHeight + winScrollTop))
      $('.top_button_wrap').css('transform','translateY( 0 )')
      $('.schedule').css('transform', 'translateY(0)')
      // $('.top_button_wrap').removeClass('fixed')
    }

    // $('#test').css('top',((wHeight + winScrollTop) - footerHeight)).css('bottom',0)

  })

  // 운영 시간
  $('a.operating, .screen_black').click(function(){
    if( !$('a.operating').hasClass('on') ){
      $('a.operating').addClass('on')
      $('a.operating img').attr('src','./img/button_fix_close.png')
      // $('.screen_black, .schedule').css('display','block')
      $('.screen_black, .schedule').fadeIn();
    }else{
      $('a.operating').removeClass('on')
      $('a.operating img').attr('src','./img/button_time.png')
      // $('.screen_black, .schedule').css('display','none')
      $('.screen_black, .schedule').fadeOut();
    }
    return false;
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
