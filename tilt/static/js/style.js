$(document).ready(function() {
  var prevData = {field1: 0, field2: 0};
  var count1 = 0;
  var count2 = 0;

  setInterval(function() {
    $.getJSON("/data", function(data) {
      if (data.field1 != prevData.field1) {
        prevData.field1 = data.field1;
        $("#field1").text(data.field1);

        if (data.field1 == 1 && count1 < 3) {
          showAlert("Tree in zone 1 subzone 3 is logged!", "red");
          count1++;
        } else if (count1 == 3) {
          $("#field1").text("0");
          count1 = 0;
        }
      }

      if (data.field2 != prevData.field2) {
        prevData.field2 = data.field2;
        $("#field2").text(data.field2);

        if (data.field2 == 1 && count2 < 3) {
          showAlert("Tree in zone 2 subzone 2 is logged!", "red");
          count2++;
        } else if (count2 == 3) {
          $("#field2").text("0");
          count2 = 0;
        }
      }
    });
  }, 1000);

  function showAlert(message, color) {
    var alertDiv = $("<div>").text(message).addClass("alert").css({
      "background-color": color,
      "color": "white",
      "font-size": "24px",
      "padding": "20px",
      "position": "fixed",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "z-index": "9999",
      "border-radius": "10px",
      "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.5)",
      "text-align": "center",
      "width": "80%",
      "max-width": "600px",
    });
    $("body").append(alertDiv);
    var audio = new Audio('beep-01a.mp3');
    audio.play();
    audio.volume = 1.0;
    setTimeout(function() {
      alertDiv.remove();
    }, 5000);
  }
});
