$("#header-image.jumbotron").css({ height: ($(window).height() / 3) + "px" });

$(window).on("resize", function() {
  $("#header-image.jumbotron").css({ height: ($(window).height() / 3) + "px" });
});