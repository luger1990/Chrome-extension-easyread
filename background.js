 function addSheetFile(path){
  var fileref=document.createElement("link")
  fileref.rel = "stylesheet";
  fileref.type = "text/css";
  fileref.href = path;
  fileref.media="screen";
  var headobj = document.getElementsByTagName('head')[0];
  headobj.appendChild(fileref);
}
var cssPath = chrome.extension.getURL("style.css");
addSheetFile(cssPath);

genericOnClick = function(info, tab){	
		var loading = '<div id="bg_read" style="position:fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; '
    		+          'width: 100%; height: 100%; border: none; margin: 0px; padding: 0px; overflow: hidden; '
    		+          'z-index: 99998; background-color: black; opacity: 1; ">'
    		+			'<div style="position:absolute; width:32px; height32px; left:50%; top:50%">'
    		+			'<span class="loading_read"></span></div>'
    		+			'</div>';

		var js = '$("body").css({"overflow": "hidden"});'
			+		'$("body").append(\''+loading+'\');';
		chrome.tabs.executeScript(null, { code:js});
		var screenHeight = window.screen.height;
		var html = '<div class="title_read" style="margin-top:'+screenHeight+'px"><h1>'
    		+			tab.title
    		+		'</h1></div>'
    		+		'<div class="box_read"><div class="content_read">'
    		+			info.selectionText
    		+			'<div style="clear: both;"></div>'
    		+			'</div></div>'
    		+			'<span class="close_read"></span>';

    	var js = '$("#bg_read").append(\''+html+'\');'
    		+	'$(".title_read").animate({marginTop:"5px"},888);'
    		+	'$(".loading_read").parent("div").remove();'
            +   '$(".close_read").bind("click",function(){'
            +    '$("#bg_read").fadeOut(888,function(){'
            +        '$(this).remove();'
            +        '$("body").css("overflow","scroll");} );'
            +    'return false;});'
    	chrome.tabs.executeScript(null, { code:js});
	};

	chrome.contextMenus.create({
	  "title" : "阅读模式",
	  "type" : "normal",
	  contexts : ["selection"],
	  "onclick" : genericOnClick
	});


