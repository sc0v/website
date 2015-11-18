$( document ).ready(function() {
  setInterval("refresh_img();",31000); 

});
 function refresh_img(){
          $('#refreshicon').show();
          $('#refresh').attr('src', $('#refresh').attr('src') + '?' + Math.random());
          $('#refreshicon').hide();
}

