$(window).scroll(function(e){
  if ($(window).scrollTop()<=0)
    $(".explore").addClass("at_top");
  else
    $(".explore").removeClass("at_top");
});


$(document).on('click','a',function(event){
  event.preventDefault();
  var target= $(this).attr("href");
  $('html,body').animate({scrollTop: $(target).offset().top},500);
  
})

$(window).scroll(function(evt){if ($(window).scrollTop()>0)
  $(".navbar").addClass("bg-dark");
  else
  $(".navbar").removeClass("bg-dark");
});