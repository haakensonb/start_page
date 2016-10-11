function searchOnEnter(){
  if (event.keyCode == 13 || event.which == 13) {
    location='http://www.google.com/search?q=' + encodeURIComponent(document.getElementById('textbox').value);
    document.getElementById('textbox').value = '';
  }
}

$(document).ready(function(){
  $(".category").click(function() {
    $category = $(this);
    $content = $category.next();
    $content.slideToggle(300);
  });
});
