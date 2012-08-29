$(document).ready(function() {
  var yourhere_checked = localStorage["yourhere_checked"];
  var radios = document.getElementsByName("yourhere");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].value == yourhere_checked) {
      radios[i].checked = true;
    }
  }//for

  var easyread_fontColor = localStorage["easyread_fontColor"];
  var easyread_bgColor = localStorage["easyread_bgColor"];
  var easyread_fontSize = localStorage["easyread_fontSize"]
  $("#demo").css("backgroundColor", easyread_bgColor);
  $("#demo").css("color", easyread_fontColor);
  $("#demo").css("font-size", easyread_fontSize );
  $("#font_size").val(easyread_fontSize);
  $("#range").html(easyread_fontSize);
  $("#bg_choose").children("div").css("backgroundColor", easyread_bgColor);
  $("#font_choose").children("div").css("backgroundColor", easyread_fontColor);
  
  $('#bg_choose').ColorPicker({
    color: '#E4F2F5',
    onShow: function(colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide: function(colpkr) {
      $(colpkr).fadeOut(500);
      return false;
    },
    onChange: function(hsb, hex, rgb) {
      $('#bg_choose div').css('backgroundColor', '#' + hex);
      $("#demo").css("backgroundColor", "#" + hex);
    }
  });

  $('#font_choose').ColorPicker({
    color: '#2A85E8',
    onShow: function(colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide: function(colpkr) {
      $(colpkr).fadeOut(500);
      return false;
    },
    onChange: function(hsb, hex, rgb) {
      $('#font_choose div').css('backgroundColor', '#' + hex);
      $("#demo").css("color", "#" + hex);
    }
  });

  $("#font_size").change(function(){
    $("#range").html($("#font_size").val()+"px");
    $("#demo").css("font-size", $("#font_size").val() + "px" );
  });
});

$(document).ready(function() {
  $("#save").click(function() {
    var radios = document.getElementsByName("yourhere");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked == true) {
        localStorage["yourhere_checked"] = radios[i].value;
      }
    }//for

    localStorage["easyread_fontColor"] = $("#demo").css("color");
    localStorage["easyread_bgColor"] = $("#demo").css("backgroundColor");
    localStorage["easyread_fontSize"] = $("#demo").css("font-size");
    alert("保存成功，赶快去看看效果吧");
  }); //save.click

  $("#rest").click(function(){
    localStorage["easyread_fontColor"] = "#2A85E8";
    localStorage["easyread_bgColor"] = "#E4F2F5";
    localStorage["easyread_fontSize"] = "18px";
    $("#demo,#bg_choose div").css("backgroundColor", "#E4F2F5");
    $("#demo").css("color", "#2A85E8");
    $("#font_choose div").css("backgroundColor", "#2A85E8")
    $("#demo").css("font-size", "18px" );
    $("#font_size").val(18);
    $("#range").html("18px");
  });//reset.click
});
