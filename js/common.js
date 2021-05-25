$(function(){
  let dHeight = $(document).height();
  // let wHeight = $(window).innerHeight();
  // let winScrollTop = $(window).scrollTop();
  // let footerHeight = $('footer').outerHeight();
  // let footerHeight = $('footer').outerHeight();

  // 헤더 마우스 호버 시 노출
  $('header').mouseenter(()=>{
    $(this).addClass('on')
  }).mouseleave(()=>{
    $(this).removeClass('on')
  })

  // 버튼 눌러서 섹션 이동
  $('header a, .top_button a').click(()=>{
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    $('html,body').stop();
    $('html,body').animate({scrollTop : offsetElem.top},400);
  })

  $('#gnb_btn').click(()=>{
    // $('#gnb').slideup();
    if( $('#gnb').css('display') == 'none' ){
      $('header, #gnb_btn').addClass('on')
      $('#gnb').slideDown(400)
    }else{
      $('header, #gnb_btn').removeClass('on')
      $('#gnb').slideUp(400)
    }
  })

  // ts 클래스 반응
  activeFunc();
  function activeFunc(){
    let wHeight = $(window).innerHeight();
    let addHeight = wHeight*1;
    let thisScrollTop = $(this).scrollTop();
    $(".ts").each(()=>{
      let thisOffset = $(this).offset();
      let thisHeight = $(this).outerHeight();
      if( (thisScrollTop + (wHeight * 0.75) ) >= thisOffset.top && (thisOffset.top + thisHeight - (wHeight * 0.45) ) > thisScrollTop ){
        $(this).addClass("active");
      }
    })
  }

  // 화면 커졌을 때 gnb 노출
  $(window).resize(()=>{
    if( $(this).innerWidth >= 768 ){
      $('#gnb').css('display','block')
    }
  })

  // 헤더 스크롤 위치에 따라 노출
  $(window).scroll(()=>{

    // ts 클래스 반응
    activeFunc();

    // 헤더
    if( $(window).scrollTop() != 0 ){
      $('header').addClass('on')
    }else{
      $('header').removeClass('on')
    }

    // 탑 버튼
    // dHeight = $(document).height();
    let wHeight = $(window).innerHeight();
    winScrollTop = $(window).scrollTop();
    // let footerHeight = $('footer').outerHeight();
    let footerHeight = $('footer').offset().top;

    if( footerHeight <= (wHeight + winScrollTop)){
    // if( dHeight - footerHeight <= (wHeight + winScrollTop)){
      $('.top_button').addClass('fixed')
    }else{
      $('.top_button').removeClass('fixed')
    }
  })

  // 말줄임표 처리
  const length = 170;
  $('.essey_title + p').each(()=>{
    if( $(this).text().length >= length ){
      $(this).text($(this).text().substr(0,length)+'..');
    }
  })
})

// $('').fadeIn();
