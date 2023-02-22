$(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get('promo');
  if(param !== null && param.length > 0){
       $("#promoApplied").text("Promo code <".concat(param ,"> is applied successfully"))
       $("#promoApplied").show();
       $("#promotandc").show();
       $("input#promocode").val(param);
       $("input#promocode").attr('readonly', true);
    
      $('html, body').animate({
        scrollTop: $("#contact").offset().top
      },1000);
    
  }
});
