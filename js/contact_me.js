$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            $("#contactButton").html('Sending...');
            $("#contactButton").prop('disabled', true);
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var company = $("input#companyName").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var promocode = $("input#promocode").val();
            
            if (company === null) {
                company = "";
            }

            if (promocode === null) {
                promocode = "";
            }
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            let data = {
                name: name,
                company: company,
                phone: phone,
                email: email,
                message: message,
                promocode: promocode
            };
            try {
                fetch("https://script.google.com/macros/s/AKfycbzObKbBCqqNz7QF7zZZXIY-yuBETa_Z4jtJMIbm43Js0_3Jjf4ofH39p1ToMqI9C1Ck/exec", {
                    method: 'POST',
                    body: JSON.stringify(data),
                    redirect: "follow",
                    headers: {
                        'Content-Type': 'text/plain;charset=utf-8',
                    }
                }).then(res => {
                    if (!res.ok) {
                        // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                        $('#success > .alert-danger').append('</div>');
                        //clear all fields
                        $('#contactForm').trigger("reset");
                        window.gtag('event', 'form_submission_fail');
                    }
                    else{
                        // Success message
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                        $('#success > .alert-success')
                            .append('</div>');
    
                        //clear all fields
                        $('#contactForm').trigger("reset");
                        window.gtag('event', 'form_submission_success');
                    }
    
                    $("#contactButton").html('Send Message');
                    $("#contactButton").prop('disabled', false);
    
                }).catch((error) => {
                    console.log(error)
                    $("#contactButton").html('Send Message');
                    $("#contactButton").prop('disabled', false);
                });;
            } catch (error) {
                console.log(error);
                $("#contactButton").html('Send Message');
                $("#contactButton").prop('disabled', false);
            }
            
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
