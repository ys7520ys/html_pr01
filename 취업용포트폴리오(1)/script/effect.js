// <----------HEADER---------->
  // 헤더 말풍선 동작 (마우스 인)
$('.mainNav li').on('mouseenter', function() {
  var index = $(this).index(); // 현재 li의 인덱스 값값
  $('.speech_bubble').stop(true, true).css('opacity', '1'); 
  if (index === 0) { 
    $('.speech_bubble').css({
      'left': '36%',
    });
    $('.speech_bubble p').text('이야기 섹션으로 스크롤됩니다'); 
    setTimeout(function(){
      $('.speech_bubble').css({
        'top': '120px'
      });
    },200)
  } else if (index === 1) { 
    $('.speech_bubble').css({
      'left': '46%',
    });
    $('.speech_bubble p').text('위기 섹션으로 스크롤됩니다'); 
    setTimeout(function(){
      $('.speech_bubble').css({
        'top': '120px'
      });
    },200)
  } else if (index === 2) { 
    $('.speech_bubble').css({
      'left': '56%',
    });
    $('.speech_bubble p').text('상황 섹션으로 스크롤됩니다'); 
    setTimeout(function(){
      $('.speech_bubble').css({
        'top': '120px'
      });
    },200)
  } else if (index === 3) { 
    $('.speech_bubble').css({
      'left': '65%',
    });
    $('.speech_bubble p').text('캠페인 섹션으로 스크롤됩니다');
    setTimeout(function(){
      $('.speech_bubble').css({
        'top': '120px'
      });
    },200)
  }
});

  // 헤더 말풍선 동작 (마우스 아웃)
$('header ul').on('mouseleave', function() {
  $('.speech_bubble').stop(true, true).css({
    'top': '-100px',
    'opacity': '0'
  });
});

  // 헤더 사이드바 세부메뉴 동작
$('.subMain > li:nth-of-type(1) > a').on('click',function(){
  $('ul.sub1').fadeIn()
  $('.subMain').fadeOut()
})
$('.subMain > li:nth-of-type(2) > a').on('click',function(){
  $('ul.sub2').fadeIn()
  $('.subMain').fadeOut()
})
$('.subMain > li:nth-of-type(3) > a').on('click',function(){
  $('ul.sub3').fadeIn()
  $('.subMain').fadeOut()
})
$('.subMain > li:nth-of-type(4) > a').on('click',function(){
  $('ul.sub4').fadeIn()
  $('.subMain').fadeOut()
})
$('.subMain > li:nth-of-type(5) > a').on('click',function(){
  $('ul.sub5').fadeIn()
  $('.subMain').fadeOut()
})
$('.subMain > li:nth-of-type(6) > a').on('click',function(){
  $('ul.sub6').fadeIn()
  $('.subMain').fadeOut()
})
$('.backCategory').on('click',function(){
  $('.subCategory').fadeOut()
  $('.subMain').fadeIn()
})
// </----------HEADER---------->





// <----------BODY---------->
  // <----------section---------->
    // 첫 번째 섹션 버튼 동작 (마우스 인 & 아웃)
$('.firstSection .text_box a').on('mouseenter', function() {
  $(this).parents('.img_box').css({
    'outline':'solid 5px #3c3c3c'
  });
  $(this).parents('.img_box').children('img').css({
    'scale':'1.1',
    'filter':'invert(1)',
  })
  $(this).parents('.text_box').css({
    'background-color':'#3c3c3c'
  })
});
$('.firstSection .text_box a').on('mouseout', function() {
  $(this).parents('.img_box').css({
    'outline':'solid 0px rgba(0,0,0,0)'
  });
  $(this).parents('.img_box').children('img').css({
    'scale':'1',
    'filter':'invert(0)',
  })
  $(this).parents('.text_box').css({
    'background-color':'rgba(0,0,0,0)'
  })
});

    // 두 번째 섹션 버튼 동작 (마우스 인 & 아웃)
$('.secondSection .img_box a').on('mouseenter', function() {
  $(this).closest('div').css({
    'outline':'solid 5px #3c3c3c'
  });
  $(this).siblings('img').css({
    'filter':'invert(0.8)',
    'scale':'1.1',
  })
});
$('.secondSection .img_box a').on('mouseout', function() {
  $(this).closest('div').css({
    'outline':'solid 5px rgba(0,0,0,0)'
  });
  $(this).siblings('img').css({
    'filter':'invert(0)',
    'scale':'1'
  })
});

    // 세 번째 섹션 버튼 동작 (마우스 인 & 아웃)
$('.thirdSection .card_box a').on('mouseenter', function() {
  $(this).parents('.text_box').siblings('.img_box').children('img').css({
    'scale': '1.1',
    'filter': 'invert(1)',
  });
  $(this).parents('.text_box').siblings('.img_box').parents('.deco_').css({
    'border-radius': '10px',
    'outline':'solid 5px #3c3c3c'
  });
  $(this).parents('.text_box').css({
    'background-color':'#3c3c3c',
  })
  $(this).parents('.text_box').find('h2, p, a').css({
    'color':'white'
  })
});
$('.thirdSection .card_box a').on('mouseout', function() {
  $(this).parents('.text_box').siblings('.img_box').children('img').css({
    'scale': '1',
    'filter': 'invert(0)',
  });
  $(this).parents('.text_box').siblings('.img_box').parents('.deco_').css({
    'border-radius': '10px',
    'outline':'solid 5px rgba(0,0,0,0)'
  });
  $(this).parents('.text_box').css({
    'background-color':'rgba(0,0,0,0)',
  })
  $(this).parents('.text_box').find('h2, p, a').css({
    'color':'black'
  })
});

    // 네 번째 섹션 버튼 동작 (마우스 인 & 아웃)
$('.fourthSection .card a').on('mouseenter', function() {
  $(this).parents('.card').css({
    'background-color':'#3c3c3c'
  });
  $(this).parents('.card').children('.text_box').children('h2,p,a').css({
    'color':'white'
  })
  $(this).parents('.card').children('.img_box').css({
    'filter':'invert(0.75)'
  })
});
$('.fourthSection .card').on('mouseleave', function() {
  $(this).css({
    'background-color':'rgba(0,0,0,0)'
  });
  $(this).children('.text_box').children('h2,p,a').css({
    'color':'black'
  })
  $(this).children('.img_box').css({
    'filter':'invert(0)'
  })
});
  // </----------section---------->

  // 페이지전환 애니메이션 동작
$(function () {
  $('main').addClass('loaded');
  $('.subCategory li a:not(.backCategory), .logo a, .gotoLogin, section a').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('.sidebar').css({
      'opacity':'0'
    })
    $('main').removeClass('loaded'); 
    setTimeout(function () {
      window.location.href = target;
    }, 1000); 
    setTimeout(function() {
      $('.subCategory').fadeOut()
      $('.subMain').fadeIn()
      $('.sidebar').css({
        'right':'-100%',
      })
    }, 600)
    $(document).ready(function () {
      $('main').addClass('loaded');
    });
    setTimeout(function() {
      $('.sidebar').css({
        'opacity':'1',
      })
    },1000)
  });
});
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
  $('.mainNav li').fadeIn();
} else{
  $('.mainNav li a').fadeOut()
}
// </----------BODY---------->



$('.menuBtn').on('click',function(){
  $('.sidebar').fadeIn("fast");
})
$('.menuCloseBtn').on('click',function(){
  $('.sidebar').fadeOut("slow");
})