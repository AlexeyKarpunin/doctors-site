$(function() {
  $('.error').hide();
  /*$('input.text-input').css({backgroundColor:"#FFFFFF"});
  $('input.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFDDAA"});
  });
  $('input.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });
  */

  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
    $('.error').hide();
		
	  var name = $("input#name").val();
		if (name == "") {
      $("label#name_error").show();
      $("input#name").focus();
      return false;
    }
		var email = $("input#email").val();
		if (email == "") {
      $("label#email_error").show();
      $("input#email").focus();
      return false;
    }
		var phone = $("input#phone").val();
		if (phone == "") {
      $("label#phone_error").show();
      $("input#phone").focus();
      return false;
    }
    var text = $("input#text").val();
		
		var dataString = 'name='+ name + '&phone=' + phone + '&text=' + text;
		//alert (dataString);return false;
		$.ajax({
      type: "POST",
      url: "bin/process.php",
      data: dataString,
      success: function() {
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html("<h2>Ваша заявка отправлена!</h2>")
        .append("<p>Наш администратор свяжется с Вами в ближайшее время.</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("<img id='checkmark' src='images/check.png' />");
        });
      }
     });
    return false;
	});
});
runOnLoad(function(){
  /* $("input#name").select().focus();*/
});
