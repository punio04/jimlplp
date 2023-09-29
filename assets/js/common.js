jQuery.event.special.touchstart = { setup: function (e, t, s) { t.includes("noPreventDefault") ? this.addEventListener("touchstart", s, { passive: !1 }) : this.addEventListener("touchstart", s, { passive: !0 }) } }, jQuery.event.special.touchmove = { setup: function (e, t, s) { t.includes("noPreventDefault") ? this.addEventListener("touchmove", s, { passive: !1 }) : this.addEventListener("touchmove", s, { passive: !0 }) } }, jQuery.event.special.wheel = { setup: function (e, t, s) { this.addEventListener("wheel", s, { passive: !0 }) } }, jQuery.event.special.mousewheel = { setup: function (e, t, s) { this.addEventListener("mousewheel", s, { passive: !0 }) } };

$(window).on('load scroll', function () {

  var box = $('.fadeIn');
  var animated = 'animated';

  box.each(function () {

    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    //画面内のどの位置で処理を実行するかで「100」の値を変更
    if (scrollPos > boxOffset - wh + 100) {
      $(this).addClass(animated);
    }
  });

});

$(function checkBreakPoint() {
  w = $(window).width();

  if (w <= 767) {
    $('.futureSlider').not('.slick-initialized').slick({
      slidesToShow: 2.2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      responsive: [{
        breakpoint: 599,
        settings: {
          slidesToShow: 1.2,
        }
      }]
    });

    $('.achievementSlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      prevArrow: '<div class="prev"><img src="./assets/img/oracle-prev-arrow.svg" alt="" class="prev_icon"></div>',
      nextArrow: '<div class="next"><img src="./assets/img/oracle-next-arrow.svg" alt="" class="next_icon"></div>'
    });

    $('.flowSlider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      responsive: [{
        breakpoint: 599,
        settings: {
          slidesToShow: 1.2,
        }
      }]
    });

    $('.planSlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      prevArrow: '<div class="prev"><img src="./assets/img/oracle-prev-arrow.svg" alt="" class="prev_icon"></div>',
      nextArrow: '<div class="next"><img src="./assets/img/oracle-next-arrow.svg" alt="" class="next_icon"></div>'
    });

  } else {
    $('.futureSlider.slick-initialized').slick('unslick');
    $('.achievementSlider.slick-initialized').slick('unslick');
    $('.flowSlider.slick-initialized').slick('unslick');
    $('.planSlider.slick-initialized').slick('unslick');
  }

  $('.trainerSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    prevArrow: '<div class="prev"><img src="./assets/img/prev-arrow.svg" alt="" class="prev_icon"></div>',
    nextArrow: '<div class="next"><img src="./assets/img/next-arrow.svg" alt="" class="next_icon"></div>',
    responsive: [{
      breakpoint: 599,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  $("#faq .faqBox dt").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });

  $("#shop .shopBox dt").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });

  $('.menu-trigger').on('click', function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#sp_menu').removeClass('open');
      $('.headerNav').removeClass('open');
    } else {
      $(this).addClass('active');
      $('#sp_menu').addClass('open');
      $('.headerNav').addClass('open');
      $('.topNavListSub').removeClass('open');
    }
  });

});


$(function () {
  var windowWidth = $(window).width();
  var devW = 767;

  if (windowWidth <= devW) {
    var headerHight = 53;
  } else {
    var headerHight = 53;
  }

  $('a[href^="#"]').click(function () {
    // if ( $(this).parents('#sp_menu').length ) {
    //   //メニューだったら閉じる
    if ($(this).hasClass('js-sub_menu_trigger')) {
      var $link = $(this).attr('href');
      $(this).toggleClass('open');
      $($link).toggleClass('open');
      return false;
    }
    $('#sp_menu').removeClass('open');
    $('.headerNav').removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('.topNavListSub').removeClass('open');
    // }
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var posBf = $(window).scrollTop();
    var posAf = target.offset().top;
    if (posBf > posAf) {//スクローのアップ・ダウンでヘッダー高を変更
      headerHight = $('.headerTop').innerHeight() + $('.headerNav').innerHeight();
      // console.log("UP");
    } else {
      headerHight = $('.headerTop').innerHeight();
      // console.log("down");
    }
    var position = posAf - headerHight;

    // $("html, body").animate({ scrollTop: position }, 500);//ずれるので下記に変更

    $.when(
      $("html, body").animate({
        scrollTop: position
      }, 400, "swing"),
      // e.preventDefault(),
    ).done(function () {
      var diff = target.offset().top - headerHight;
      if (diff === position) {
      } else {
        $("html, body").animate({
          scrollTop: diff
        }, 10, "swing");
      }
    });



    return false;
  });
});

let start_position = 0,
  window_position,
  $window = $(window),
  $header = $('header'),
  $footer = $('footer');

$window.on('scroll', function () {
  window_position = $(this).scrollTop();
  var header = $("header");

  if (window_position <= start_position && $(this).scrollTop() > 500) {
    header.addClass("active");
  } else if ($(this).scrollTop() < 600) {
    header.addClass("topPosition");
  } else {
    header.removeClass("active");
    header.removeClass("topPosition");
    $('.topNavListSub').removeClass('open');
  }
  start_position = window_position;

});
$window.trigger('scroll');
