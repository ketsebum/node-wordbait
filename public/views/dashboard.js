$(".top-right-sidebar").on("click", function(){
  $(".row .sidebar").hide();
  $(".row .sidebar").removeClass("col-md-2");
  $(".main").removeClass("col-md-10");
  $(".main").addClass("col-md-12");
  $(".main").css("margin-left", "0px");
  $(this).removeClass("glyphicon-chevron-left");
  $(this).addClass("glyphicon-chevron-right");
});
