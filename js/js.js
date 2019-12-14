$(document).ready(function() {
  $("#loading-screen")
    .delay(1000)
    .queue(function() {
      $(this)
        .addClass("loading-screen-remove")
        .dequeue();
      $("#loading-screen").css({ height: "0" });
      $(".welcome").css({ opacity: "0" });
    });
});

$(".hamburger").click(function() {
  $(".link-list").slideToggle();
});

$(document).ready(function() {
  function checkWidth() {
    var windowSize = $(window).width();
    var linkList = document.getElementsByClassName("link-list");

    if (windowSize >= 951) {
      $(linkList).css({ display: "flex" });
    } else {
      $(linkList).css({ display: "none" });
    }
  }

  checkWidth();
  $(window).resize(checkWidth);
});

function requestJSON(url, callback) {
  $.ajax({
    url: url,
    complete: function(xhr) {
      callback.call(null, xhr.responseJSON);
    }
  });
}
