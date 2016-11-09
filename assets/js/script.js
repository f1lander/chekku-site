	$(document).ready( function() {
    $('#myCarousel').carousel({
		interval:4000
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
	//  var password = document.getElementById("password")
    //   , confirm_password = document.getElementById("confirmPassword");

    // var validatePassword = function () {
    //   if (password.value != confirm_password.value) {
    //     confirm_password.setCustomValidity("");
    //     return false;
    //   } else {
    //     confirm_password.setCustomValidity('');
    //     return true;
    //   }
    // }
	$('#register').on('click', function() {
        
        var comany = $("#company").val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
		var user = $("#email").val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
		var password = $("#password").val().replace(/</g, "&lt;").replace(/>/g, "&gt;");

		var req = $.ajax({
			url:"/users/register",
			method:"POST",
			data:{company_name:company, email:user, password:password},
			dataType:"json"
		});

		req.done(function(data){
			window.location.href('/app');
		});

		req.fail(function(err){
			alert('Ocurrion un error al registrar la nueva compañia, porfavor intente de nuevo')
		})
	});
	
});