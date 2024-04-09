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

const helpFormFirst = document.getElementById("first-form");
const nameForm = document.getElementById("name-form");
const company = document.getElementById("company-form");
const email = document.getElementById("email-form");
const phone = document.getElementById("phone-form");
const message = document.getElementById("message-form");
const invalid = document.getElementById("invalid-email");

function sendEmail() {
  const bodySubject = `Details: <br> <br> Name: ${nameForm.value} <br> Company: ${company.value}
   <br> Email Address: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${message.value}`;

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

function checkInputs() {
  if (email.value == "") {
    invalid.classList.remove("hidden");
  }
  email.addEventListener("keyup", () => {
    if (email.value != "") {
      invalid.classList.add("hidden");
    } else {
      invalid.classList.remove("hidden");
    }
  });
}

helpFormFirst.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (validateEmail(email.value.trim()) === true) {
    invalid.classList.remove("hidden");
  } else {
    invalid.classList.add("hidden");
  }

  function validateEmail(inputText) {
    const mailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailForm)) {
      return false;
    }
    return true;
  }

  if (invalid.classList.contains("hidden")) {
    sendEmail();
    helpFormFirst.reset();
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
