document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Register | Mohamed Yusri";
            $("#favicon").attr("href", "favicon.png");
        }
        else {
            document.title = "Come Back To Registration Form";
            $("#favicon").attr("href", "favhand.png");
        }
    });





$("#contact-form").submit(function (event) {
        emailjs.init("service_6ydqu0i");

        emailjs.sendForm('register_service', 'template_register', 'registration-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("registration-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });

var typed = new Typed(".typing-text", {
    strings: ["Form"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

var typed = new Typed(".typing-text1", {
    strings: ["Registration Form"],
    loop: true,
    typeSpeed:80,
    backSpeed: 25,
    backDelay: 500,
});

document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
