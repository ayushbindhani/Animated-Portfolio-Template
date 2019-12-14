// Git Repo
$(document).ready(function() {
  var username = "shaunstone0";
  var requri = "https://api.github.com/users/" + username;
  var repouri = "https://api.github.com/users/" + username + "/repos";

  requestJSON(requri, function(json) {
    var fullname = json.name;
    var aviurl = json.avatar_url;
    var profileurl = json.html_url;
    var location = json.location;
    var reposnum = json.public_repos;

    var outhtml = `<div class="git-profile">`;
    outhtml += `<div class="profile-picture"><img src="${aviurl}"></div> `;
    outhtml += `<div class="profile-info"><ul>
    <li><div class="git-hub-profile"><a href="${profileurl}">${fullname}</a>
    </li>
    <li><span class="bold">Location:</span> ${location}</li>
    <li><span class="bold">Repos:</span> ${reposnum}</li></ul>`;
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
    }
  });
});

function requestJSON(url, callback) {
  $.ajax({
    url: url,
    complete: function(xhr) {
      callback.call(null, xhr.responseJSON);
    }
  });
}
