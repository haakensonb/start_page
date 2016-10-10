$(document).ready(function(){
  $(".category").click(function() {
    $category = $(this);
    $content = $category.next();
    $content.slideToggle(300);
  });
});
