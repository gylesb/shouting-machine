$(document).ready(function() {

  $("#formInput").submit(function(event) {
    var randomInput = $("input#random").val().toUpperCase();

    $(".dot1").text(randomInput);

    $(".dot1").show("randomInput");

    event.preventDefault();
  });

});
