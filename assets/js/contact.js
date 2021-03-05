//Javascript code to send email through emailjs.init
//The JS code for this section is referred from Rosie resume miniproject

var emailjs;
function sendMail(contactForm){
    emailjs.send("gmail","Flip_game",{
"from_name": contactForm.name.value,
"from_email": contactForm.emailaddress.value,
"feedback": contactForm.feedback.value
})

        .then(
            function(response) {
                var sentButton = document.getElementById("contact-button");
                sentButton.style.backgroundColor = "Green";
                sentButton.innerHTML = "Feedback Sent!";
                alert("Thanks for your feedback");
                },
                function(error) {
               alert("Unable to send email");
            });
       // Clear form after submission
            document.getElementById("contactForm").reset();
            return false;
    }
