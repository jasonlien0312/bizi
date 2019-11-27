console.log("javascript called");
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
console.log("Params' name is " + name);
$(document).ready(() => {
  $.ajax({
    url: "/events?name=" + name,
    type: "GET",
    dataType: "json",
    success: data => {
      console.log("You get: " + JSON.stringify(data));
      $("#events").html("All events:" + JSON.stringify(data));
      $("#title").html("What's up " + name + "!");
    }
  });
});
