$(document).ready(function()  {
	/**
	 * JQuery Validate Function
	 *
	 * this function provides front-end validation for your form.
	 * If all tests set up here pass, the form data is AJAX submitted
	 * to the mailer.php file
	 *
	 * Update this file as needed for your form.
	 * All ids and names values must match up to you form here.
	 *
	 * @author Rachelle Lewis <rlewis37@cnm.edu>
	 **/

	$("#form").validate(
		{
			debug: true,
			errorClass: "alert alert-danget",
			errorLableContainer: "#output-area",
			errorElement: "div",
			// rules here difine what ius good or bad input
			//each rule starts with the form input element's NAME attribute
			rules: {
				Name: {
					required: true,
				},
				Email: {
					email: true,
					required: true
				},
				message: {
					required: true,
					maxLength: 2000,
				},
				Subject: {
					required: false,
				}
			},
			// error messages to display to the end user when rules above don't pass
			message: {
				Name: {
					required: "please enter your name."
				},
				Email: {
					email: "please enter a valid email address",
					required: "please enter a valid email address",
				},
				message: {
					required: "Please enter a message",
					maxLength: "2000 characters max.",
				},
				Subject: {
					maxLength: "Y u no write so much",
				}
			},
			submitHandler: function(form) {
				$("#demo-form").ajaxSubmit({
					type: "POST",
					url:$("#demo-form").attr("action"),
					success: function(ajaxOutput){
						$("#output-area").css("display","");

						//
					}
				})

			}
		});

	});
