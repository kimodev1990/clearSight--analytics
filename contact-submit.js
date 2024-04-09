const consultClick = document.getElementById("consult-click");
const consulting = document.getElementById("consulting-popup-situation");
const solutionsClick = document.getElementById("solutions-click");
const solutions = document.getElementById("solutions-popup-situation");
const hamburger = document.getElementById("menu-hamburger-mobile");
const menuMobile = document.getElementById("menu-content-mobile");
const consultPopMobile = document.getElementById("consult-showpop-up-mobile");
const consultClickMobile = document.getElementById("consult-click-mobile");
const solutionsClickMobile = document.getElementById("solutions-click-mobile");
const solutionsPopMobile = document.getElementById(
  "solutions-showpop-up-mobile"
);

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
    SecureToken: "9c334764-b1dc-44dd-b285-e4990535344c",
    To: "info@clearsightanalytics.com.au",
    From: "info@clearsightanalytics.com.au",
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

consultClick.addEventListener("click", () => {
  consulting.classList.toggle("hidden");
});
solutionsClick.addEventListener("click", () => {
  solutions.classList.toggle("hidden");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menuMobile.classList.toggle("hidden");
  menuMobile.setAttribute("id", "fading");
  if (!consultPopMobile.classList.contains("hidden")) {
    consultPopMobile.classList.add("hidden");
  }
  if (!solutionsPopMobile.classList.contains("hidden")) {
    solutionsPopMobile.classList.add("hidden");
  }
});

consultClickMobile.addEventListener("click", () => {
  consultPopMobile.classList.toggle("hidden");
});

solutionsClickMobile.addEventListener("click", () => {
  solutionsPopMobile.classList.toggle("hidden");
});
