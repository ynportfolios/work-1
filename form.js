$(document).ready(function(){
  $('#name').change(function() {
    var x = document.getElementsByTagName("p");

    var y = document.getElementById("name").value;
    x[0].innerHTML = 'こんにちは、' + y + 'さん';
  });
  $('#content').change(function() {
    var b = document.getElementById("content").value;
    if ( b === "バカ野郎！"){
      document.body.style.backgroundColor = "red";
      var x = document.getElementsByTagName("p");
    x[0].innerHTML = '激おこぷんぷん丸！';
    }
  });
});