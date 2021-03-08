$(".removeBannerBtn").click(function () {
  $(this)
    .closest(".banner-content")
    .addClass("slideRight");
});
$(".toggle").click(function () {
  // alert("Clicked");
  $(".menu").toggleClass("active-menu");
});

// $(document).mouseup(function(e) {
//     var container = $(".menu");

//     // if the target of the click isn't the container nor a descendant of the container
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//         container.removeClass("active-menu");
//     }
// });

if ($(window).width() < 800) {
  $(".nav-logo").attr({
    src: "/main/images/mobile_logo.png"
  });
} else {
  $(".nav-logo").attr("src", "/main/images/logo.png");
}