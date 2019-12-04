$(document).ready(function() {
  $("#loading-screen")
    .delay(800)
    .queue(function() {
      $(this)
        .addClass("loading-screen-remove")
        .dequeue();
      $("#loading-screen").css({ height: "0" });
      $(".welcome").css({ opacity: "0" });
    });
});

$(".hamburger").click(function() {
  $(".link-list").fadeToggle();
  $(".social").fadeToggle();
  console.log("clicked");
});

$(document).ready(function() {
  function checkWidth() {
    var windowSize = $(window).width();
    var linkList = document.getElementsByClassName("link-list");
    var social = document.getElementsByClassName("social");

    if (windowSize >= 951) {
      $(linkList).css({ display: "flex" });
    } else {
      $(linkList).css({ display: "none" });
    }
    if (windowSize >= 951) {
      $(social).css({ display: "flex" });
    } else {
      $(social).css({ display: "none" });
    }
  }

  checkWidth();
  $(window).resize(checkWidth);
});
