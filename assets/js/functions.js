// @codekit-prepend "/vendor/hammer-2.0.8.js";

$( document ).ready(function() {

  



//Game silder 

function workgslider() {

  $('.gslider--prev, .gslider--next').click(function() {

    var $this = $(this),
        curLeft = $('.gslider').find('.gslider--item-left'),
        curLeftPos = $('.gslider').children().index(curLeft),
        curCenter = $('.gslider').find('.gslider--item-center'),
        curCenterPos = $('.gslider').children().index(curCenter),
        curRight = $('.gslider').find('.gslider--item-right'),
        curRightPos = $('.gslider').children().index(curRight),
        totalWorks = $('.gslider').children().length,
        $left = $('.gslider--item-left'),
        $center = $('.gslider--item-center'),
        $right = $('.gslider--item-right'),
        $item = $('.gslider--item');

    $('.gslider').animate({ opacity : 0 }, 400);

    setTimeout(function(){

    if ($this.hasClass('gslider--next')) {
      if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
        $left.removeClass('gslider--item-left').next().addClass('gslider--item-left');
        $center.removeClass('gslider--item-center').next().addClass('gslider--item-center');
        $right.removeClass('gslider--item-right').next().addClass('gslider--item-right');
      }
      else {
        if (curLeftPos === totalWorks - 1) {
          $item.removeClass('gslider--item-left').first().addClass('gslider--item-left');
          $center.removeClass('gslider--item-center').next().addClass('gslider--item-center');
          $right.removeClass('gslider--item-right').next().addClass('gslider--item-right');
        }
        else if (curCenterPos === totalWorks - 1) {
          $left.removeClass('gslider--item-left').next().addClass('gslider--item-left');
          $item.removeClass('gslider--item-center').first().addClass('gslider--item-center');
          $right.removeClass('gslider--item-right').next().addClass('gslider--item-right');
        }
        else {
          $left.removeClass('gslider--item-left').next().addClass('gslider--item-left');
          $center.removeClass('gslider--item-center').next().addClass('gslider--item-center');
          $item.removeClass('gslider--item-right').first().addClass('gslider--item-right');
        }
      }
    }
    else {
      if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
        $left.removeClass('gslider--item-left').prev().addClass('gslider--item-left');
        $center.removeClass('gslider--item-center').prev().addClass('gslider--item-center');
        $right.removeClass('gslider--item-right').prev().addClass('gslider--item-right');
      }
      else {
        if (curLeftPos === 0) {
          $item.removeClass('gslider--item-left').last().addClass('gslider--item-left');
          $center.removeClass('gslider--item-center').prev().addClass('gslider--item-center');
          $right.removeClass('gslider--item-right').prev().addClass('gslider--item-right');
        }
        else if (curCenterPos === 0) {
          $left.removeClass('gslider--item-left').prev().addClass('gslider--item-left');
          $item.removeClass('gslider--item-center').last().addClass('gslider--item-center');
          $right.removeClass('gslider--item-right').prev().addClass('gslider--item-right');
        }
        else {
          $left.removeClass('gslider--item-left').prev().addClass('gslider--item-left');
          $center.removeClass('gslider--item-center').prev().addClass('gslider--item-center');
          $item.removeClass('gslider--item-right').last().addClass('gslider--item-right');
        }
      }
    }

  }, 400);

  $('.gslider').animate({ opacity : 1 }, 400);

  });

}



  
  workgslider();
  

});
