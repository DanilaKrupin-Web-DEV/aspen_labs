let pointer = 0;

$("#talkng").click(function () {
  if (pointer == 0) {
    $(".dropdown").slideToggle(300);
    pointer = 1;
  } else {
    pointer = 0;
    $(".dropdown").slideToggle(300);
  }
});

$(".dropdown_point").click(function () {
  $("#talkng").attr("value", $(this).text());
  $(".dropdown").slideToggle(300);
});

$(document).ready(function () {
  //E-mail Ajax Send

  $("form").submit(function () {
    //Change
    let status = false;
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      status = true;
      $(".success_message").css("display", "block");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
        $("#talkng").val("");
      }, 1000);
      if (status == false) {
        $(".error_message").css("display", "block");
      }
    });
    return false;
  });
});

let checkStatus = false;
$(".hidden_check").val("false");
$(function () {
  $("#check").on("click", function () {
    if ($(this).is(":checked")) {
      checkStatus = true;
      $(".hidden_check").val("true");
    } else {
      checkStatus = false;
      $(".hidden_check").val("false");
    }
  });
});

$(".arrow").click(function () {
  if (pointer == 0) {
    $(".dropdown").slideToggle(300);
    pointer = 1;
  } else {
    pointer = 0;
    $(".dropdown").slideToggle(300);
  }
});
