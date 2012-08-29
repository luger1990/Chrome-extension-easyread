
genericOnClick = function(info, tab) {
   var loading = '<div id="bg_read" style="position:fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; '
      + 'width: 100%; height: 100%; border: none; margin: 0px; padding: 0px; overflow: hidden; '
      + 'z-index: 99998; background-color: black; opacity: 1; ">'
      + '<div style="position:absolute; width:32px; height32px; left:50%; top:50%">'
      + '<span class="loading_read"></span></div>' 
      + '<span class="close_read"></span>' + '</div>';

  var js = '$("body").css({"overflow": "hidden"});' + '$("body").append(\''
      + loading + '\');';
  chrome.tabs.executeScript(null, {
    code : js
  });

  var js = '$(".close_read").live("click",function(){'
      + '$("#bg_read").fadeOut(888,function(){' 
      + '$("body").css("overflow","scroll");'
      + '$(this).remove();} );'
      + 'return false;});';

chrome.tabs.executeScript(null, {
    code : js
  });

  var screenHeight = window.screen.height;
  var content = info.selectionText;
  content = content.replace(/'/g,"’");
  content = content.replace(/"/g,"“");

  var html = '<div class="title_read" style="margin-top:' + screenHeight
      + 'px"><h1>' + tab.title + '</h1></div>'
      + '<div class="box_read"><div id="read" class="content_read" style="background-color:'
      + localStorage["easyread_bgColor"]+'"><p style="color:'
      + localStorage["easyread_fontColor"]+';font-size:'
      + localStorage["easyread_fontSize"]+'">'
      + content + '</p></div></div>';

  var js = '$("#bg_read").append(\'' + html + '\');'
      + '$(".title_read").animate({marginTop:"5px"},888);'
      + '$(".loading_read").parent("div").remove();';
  chrome.tabs.executeScript(null, {
    code : js
  });
};

chrome.contextMenus.create({
  "title" : "阅读模式",
  "type" : "normal",
  contexts : [ "selection" ],
  documentUrlPatterns: ["<all_urls>"],
  "onclick" : genericOnClick
});
