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
  $(".link-list").addClass("link-list-animation");
  $(".link-list").fadeToggle();
  console.log("clicked");
});
