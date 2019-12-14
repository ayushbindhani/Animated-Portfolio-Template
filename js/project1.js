$(document).ready(function() {
  var displayProjects = $("#displayProjects");
  $.ajax({
    type: "GET",
    url: "projects.json",
    success: function(result) {
      var output = ``;
      for (var i in result) {
        output += `<div class="projects">
        <div class="project-image">
          <img src=${result[i].img}>
        </div>
        <p class="view-title">${result[i].title}</p>
        <p class="caption">${result[i].inrto}</p>
        <p class="caption">${result[i].caption}</p>
        <p><span class="bold green">Technologies Used:</span></p>
        <p class="tech">${result[i].tech}</p>
        </span>`;
      }
      output += ``;

      displayProjects.html(output);
    },
    complete: function() {
      $("#displayProjects");
    }
  });
});
