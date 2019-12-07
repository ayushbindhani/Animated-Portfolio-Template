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
  $(".link-list").fadeToggle();
  console.log("clicked");
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

// Git Repo
$(function() {
  $(".git-hub-btn").on("click", function(e) {
    e.preventDefault();
    var username = "shaunstone0";
    var requri = "https://api.github.com/users/" + username;
    var repouri = "https://api.github.com/users/" + username + "/repos";

    requestJSON(requri, function(json) {
      var fullname = json.name;
      var username = json.login;
      var aviurl = json.avatar_url;
      var profileurl = json.html_url;
      var location = json.location;
      var reposnum = json.public_repos;

      var outhtml = `<div class="git-profile">`;
      outhtml += `<div class="profile-picture"><img src="${aviurl}"></div> `;
      outhtml += `<div class="profile-info"><ul class="info"><li><div class="git-hub-profile"><a href="${profileurl}">${fullname}</a></li><li><span class="bold">Location:</span> ${location}</li><li><span class="bold">Repos:</span> ${reposnum}</li></ul>`;
      var repositories;
      $.getJSON(repouri, function(json) {
        repositories = json;
        outputPageContent();
      });

      function outputPageContent() {
        if (repositories.length == 0) {
          outhtml = outhtml + "<p>No repos!</p>";
        } else {
          outhtml = outhtml + `<ul class="profile-hub">`;
          $.each(repositories, function(index) {
            outhtml =
              outhtml +
              '<li><a href="' +
              repositories[index].html_url +
              '" target="_blank">' +
              repositories[index].name +
              "</a></li>";
          });
          outhtml = outhtml + "</ul></div></div></div>";
        }
        $("#git-hub-data").html(outhtml);
      } // end outputPageContent()
    }); // end requestJSON Ajax call
  }); // end click event handler

  function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  }
});
