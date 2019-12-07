function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
var name = GetURLParameter("name");
$(document).ready(() => {
  $.ajax({
    url: "/events?name=" + name,
    type: "GET",
    dataType: "json",
    success: data => {
      $("#title").html("What's up " + name + "!");
      badge = document.createElement("div");
      badge.innerHTML = "<ul>";
      console.log(data.length);
      for (i = 0; i < data.length; i++) {
        badge.innerHTML +=
          "<li>" +
          data[i].eventName +
          ": " +
          data[i].eventDescription +
          "</li>";
      }
      badge.innerHTML += "</ul>";
      console.log(badge.innerHTML);
      document.getElementById("events").appendChild(badge);
    }
  });
});
