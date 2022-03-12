$(document).ready(function() {
  
  // Adding a "JavaScript is Enabled" Body Class
  
  $("body").addClass("js");

	// "Become Part of the Story!" Form Submission

	$("#confirm-email form").submit(function(event) {

		var emailaddress = $("#form-email").val();
		var phonenumber = $("#form-phone").val();
		var complete = false;

		console.log(emailaddress);
		console.log(phonenumber);

		if(emailaddress != "" && phonenumber != "") {
			complete = true;
		}

		if(emailaddress == "") {
			$("#form-email").addClass("error").parent().parent().find("label").addClass("error");
    }
    
    if (console.log(emailaddress.indexOf("@") != -1 )){
      $("#form-email").addClass("error").parent().parent().find("label").addClass("error");
    }

		if(phonenumber == "") {
			$("#form-phone").addClass("error").parent().parent().find("label").addClass("error");
		}

		if(complete) {

			console.log("Complete Form");
			$("#confirm-email form button").html("All Done!").attr('disabled', true);

			$(".name").html(firstName);

		}
    
    else {
			console.log("Incomplete Form");
			$("#confirm-email form button").html("Try Again");
		}

		event.preventDefault();

  });

	$("#form-email, #form-phone").keydown(function() {
		$(this).removeClass("error").parent().parent().find("label").removeClass("error");
  }); 

})
