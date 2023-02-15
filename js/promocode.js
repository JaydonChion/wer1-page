$(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get('promo');
  if(param !== null && param.length > 0){
       $("#promoApplied").show();
       $("#promotandc").show();
       $("input#promocode").val(param);
       $("input#promocode").attr('readonly', true);
  }
});
