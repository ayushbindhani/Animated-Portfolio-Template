$(document).ready(function() {
  $("#loading-screen")
    .delay(2000)
    .queue(function() {
      $(this)
        .addClass("loading-screen-remove")
        .dequeue();
      $("#loading-screen").css({ height: "0" });
      $(".welcome").css({ opacity: "0" });
    });
});
