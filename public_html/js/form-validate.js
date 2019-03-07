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

	$("#demo-form").validate(
		{
			debug: true,
			errorClass: "alert alert-danget",
			errorLableContainer: "#output-area",
			errorElement: "div",
			// rules here difine what ius good or bad input
			//each rule starts with the form input element's NAME attribute
			rules: {
				demoName: {
					required: true,
				},
				demoEmail: {
					email: true,
				},
				message: {
					required: true,
					maxLength: 2000,
					minLength: 10
				},
				demoSubject: {
					required: false,
					maxLength: 64
				}
			},
			// error messages to display to the end user when rules above don't pass
			message: {
				demoName: {
					required: "Y u no add name"
				},
				demoEmail: {
					email: "y u no use real email",
					required: "Y u no add email",
				},
				demoMessage: {
					required: "Y u no add message",
					maxLength: "Y u no write so much",
					minLength: "Y you no write so little",
				},
				demoSubject: {
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
