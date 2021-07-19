function sendMail(contactForm) {
    emailjs.send("service_4hr136t","template_jltblcp", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS: ", response);
        },
        function(error) {
            console.log("ERROR: ", error);
        })
    return false;
}