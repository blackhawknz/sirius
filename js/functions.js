$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var pos = $('.display2').position().top;
  var eScroll = ($(this).scrollTop()-(pos/2));
  var headerHeight = $('.bg').height();

  if (wScroll <= headerHeight ){

    $('.moon').css({
      'transform' : 'translate('+ wScroll /40 +'%, '+ wScroll /10 +'px)'
    });

    $('.earth').css({
      'transform' : 'translate('+ -wScroll /30 +'%, 0px)'
    });

  }

  $(".europa, .shadow").css({
      'transform' : 'translate('+ -eScroll /20 +'%, 0px)'
  });

  $('.desert').css({
    'transform' : 'translate(0px, '+ wScroll /15 +'px)'
  });

  $('.bgDesert').css({
    'transform' : 'translate(0px, '+ wScroll /15 +'px)'
  });

})
