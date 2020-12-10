function slidemenu(){
  var x = document.getElementById("first-navbar");
  if (x.className === "navigation-links") {
    x.className += " mobile";
  }else {
    x.className = "navigation-links";
  }
}