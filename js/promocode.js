$(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get('promo');
  console.log("promo code received");
  console.log(param);
  if(param.length > 0){
       $("input#promocodeDiv").show();
       $("input#promocode").val(param);
       $("input#promocode").attr('readonly', true);
  }
});
