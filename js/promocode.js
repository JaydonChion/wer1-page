$(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get('promo');

  if(param.length > 0){
       $("input#promocodeDiv").show();
       $("input#promocode").val(param);
       $("input#promocode").attr('readonly', true);
  }
});
