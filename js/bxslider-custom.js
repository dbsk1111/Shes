$(document).ready(function(){
  $('.slider').bxSlider({
    // 일반
    mode: 'fade',
    speed: 800,
    randomStart: true,
    responsive: true,

    // 호출기
    pager: true,

    // 조절자
    controls: false,

    // 자동
    auto: true,
    pause:4000,
    autoHover:true,
  });

  $('.essey_bxslider').bxSlider({
    // 일반
    mode: 'fade',
    speed: 400,
    randomStart: true,
    responsive: true,

    // 호출기
    pager: true,

    // 조절자


    // 자동
    auto: true,
    pause:4000,
    autoHover:true,
  })
});
