$(document).ready(function() {

/* Cats VS. Dogs */
  $("button#meow").click(function(){
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
  });
  $("button#bark").click(function(){
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");
  });

  /* Tom VS. Jerry */
    $(".visible").click(function() {
      $("#input").prepend("<p></p>");
      $("#input").addClass("bkgrnd");
    });
    $(".unstyled").prepend().click(function() {
      $(this).click(function() {
        $(".unstyled").toggle(".initially-hidden");
      });
    });

});
