function sendMail(){
	let parms = {
	from_name : document.getElementById("name").value,
	email : document.getElementById("email").value,
	phone_number:document.getElementById("phone_number").value,
	message:document.getElementById("message").value,
	}
	
	emailjs.send("service_5t27vdv", "template_ll0of7k", parms)
    .then(function(response) {
        alert("Message Sent Successfully!");
        document.querySelector("form").reset();
    })
    .catch(function(error) {
        alert("Failed to send email. Check console.");
        console.log(error);
    });
}