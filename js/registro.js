document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registration-button").addEventListener("click", function() {
        var fullName = document.getElementById("contact-first-name1").value;
        var phoneNumber = document.getElementById("contact-cell-number").value;
        var message = "Hola, soy " + fullName + " y quiero registrarme.";

        var encodedMessage = encodeURIComponent(message);
        var whatsappURL = "https://wa.me/+51961795940?text=" + encodedMessage;

        window.open(whatsappURL);
    });
});
