function create(code,name,parentID) {
  var a = document.createElement("a");
  a.textContent = name;
  a.href = 'javascript:innerHTML=document.getElementsByTagName("head")[0].innerHTML+document.getElementsByTagName("body")[0].innerHTML+"<scr'+'ipt>'+code+'</scr'+'ipt>"';
  document.getElementById(parentID).appendChild(a);
}
function flashFix() {
  var a = document.createElement('a');
  a.setAttribute('href','https://get.adobe.com/flashplayer');
  a.click();
}
function getFunctionContent(name) {
  var f = window[name];
  var txt = f.toString();
  var t = txt.slice(txt.indexOf("{")+1,txt.lastIndexOf("}"));
  return t;
}
create(getFunctionContent('flashFix'),"Enable Flash","link");
