var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var u_btn = document.getElementById("u_btn");

u_btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/CMorton1892/CW2/master/module-1.json');
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
  u_btn.disabled = true;
}
});
