// number count for stats, using jQuery animate

$('.counting').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },

    {

      duration: 3000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });


});

$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.gotopbtn').fadeIn();
    } else {
      $('.gotopbtn').fadeOut();
    }
  });

  $('.gotopbtn').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

});