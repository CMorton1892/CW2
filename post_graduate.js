var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var p_btn = document.getElementById("p_btn");

p_btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/CMorton1892/CW2/master/module-2.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData);
  };
  ourRequest.send();
pageCounter++;
if (pageCounter > 1){
//btn.classList.add("hide-me");
  p_btn.disabled = true;
}
});
