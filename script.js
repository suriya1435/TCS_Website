function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone_number : document.getElementById("phone_number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_5t27vdv", "template_ll0of7k", parms).then(alert("Email Sent!!"))

}
