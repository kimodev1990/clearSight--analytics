const contactFormSecond = document.getElementById("contact-second-form");
const nameContactForm = document.getElementById("name-contact-form");
const companyContactForm = document.getElementById("company-contact-form");
const emailContactForm = document.getElementById("email-contact-form");
const invalidContact = document.getElementById("invalid-contact-email");
const phoneContactForm = document.getElementById("phone-contact-form");
const messageContactform = document.getElementById("message-contact-form");

function sendEmailContact() {
  const bodySubject = `Details: <br> <br> Name: ${nameContactForm.value} <br> Company: ${companyContactForm.value}
   <br> Email Address: ${emailContactForm.value} <br> Phone Number: ${phoneContactForm.value} <br> Message: ${messageContactform.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hakeemaseradel@gmail.com",
    Password: "2B3A57C352F9924487DC64E5DBDE71B4C74B",
    To: "hakeemaseradel@gmail.com",
    From: "hakeemaseradel@gmail.com",
    Subject: "New Message from Client",
    Body: bodySubject,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Thank You",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  });
}

function checkInputsContact() {
  if (emailContactForm.value == "") {
    invalidContact.classList.remove("hidden");
  }
  emailContactForm.addEventListener("keyup", () => {
    if (emailContactForm.value != "") {
      invalidContact.classList.add("hidden");
    } else {
      invalidContact.classList.remove("hidden");
    }
  });
}

contactFormSecond.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsContact();

  if (validateEmail(emailContactForm.value.trim()) === true) {
    invalidContact.classList.remove("hidden");
  } else {
    invalidContact.classList.add("hidden");
  }

  function validateEmail(inputText) {
    const mailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailForm)) {
      return false;
    }
    return true;
  }

  if (invalidContact.classList.contains("hidden")) {
    sendEmailContact();
    contactFormSecond.reset();
    return false;
  }
});
