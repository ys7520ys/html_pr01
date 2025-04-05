function sidebarChange() {
  const sidebar = document.querySelector('.sidebar');
  const viewportWidth = window.innerWidth;
  sidebar.classList.remove('.mobile-class','.desktop-class');

// <----------사이드메뉴 너비 조정 (320px ~ 768PX)---------->
  if(viewportWidth >= 320 && viewportWidth <= 768) {
    $('.menuBtn').on('click',function(){
      $('.sidebar').css({
        'width':'100%',
        'right':'0%'
      })
    });
    $('.menuCloseBtn').on('click',function(){
      $('.sidebar').css({
        'right':'-100%'
      })
      $('.subCategory').fadeOut()
      $('.subMain').fadeIn()
    })
// </----------사이드메뉴 너비 조정 (320px ~ 768PX)---------->

// <----------사이드메뉴 너비 조정 (768px ~ )---------->
  } 
  else if(viewportWidth > 768) {
    $('.menuBtn').on('click',function(){
      $('.sidebar').css({
        'width':'40%',
        'right':'0%'
      })
    });
    $('.menuCloseBtn').on('click',function(){
      $('.sidebar').css({
        'right':'-40%'
      })
      $('.subCategory').fadeOut()
      $('.subMain').fadeIn()
    })
  }
}
// </----------사이드메뉴 너비 조정 (768px ~ )---------->

sidebarChange();
window.addEventListener('resize',sidebarChange);