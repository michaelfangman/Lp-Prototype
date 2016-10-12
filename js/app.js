// Modal Toggle
$(function() {                      
  $("button").click(function() {
    $(".modal").toggleClass("showModal");
    $(".modalContainer").toggleClass("showModal");
    $(".modalOverlay").toggleClass("showOverlay");
    $("body").toggleClass("noScroll");
  });
});

$(function() {                      
  $(".modalOverlay").click(function() {
    $(".modal").removeClass("showModal");
    $(".modalContainer").removeClass("showModal");
    $(".modalOverlay").removeClass("showOverlay");
    $("body").removeClass("noScroll");
  });
});