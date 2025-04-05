// 앵커 스무스 - 상단 이동 동작
$('header a, .btn-gototop').click(function(){
  $.scrollTo(this.hash || 0, 600);
})
