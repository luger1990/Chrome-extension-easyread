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


