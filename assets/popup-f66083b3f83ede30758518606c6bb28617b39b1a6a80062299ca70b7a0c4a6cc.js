(() => {
  // app/javascript/popup.js
  document.addEventListener("turbolinks:load", function() {
    const form1 = document.getElementById("dynamic");
    const form2 = document.getElementById("new_contact");
    const nameField = form1.querySelector('input[name="name"]');
    const emailField = form1.querySelector('input[name="email"]');
    const nameField2 = form2.querySelector('input[name="contact[name]"]');
    const emailField2 = form2.querySelector('input[name="contact[email]"]');
    const submitButtons = document.querySelectorAll("a[href='#submit-form']");
    submitButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("submitting");
        nameField2.value = nameField.value;
        emailField2.value = emailField.value;
        const forms = document.forms;
        const lastForm = forms[forms.length - 1];
        if (lastForm) {
          lastForm.submit();
        } else {
          console.error("Form not found for the button");
        }
      });
    });
    const elButtons = document.querySelectorAll("a[href='#open-popup']");
    const popupContainer = document.getElementById("popup-container");
    const closePopupButton = document.getElementById("close-popup");
    elButtons.forEach(function(elButton) {
      elButton.addEventListener("click", function(event) {
        event.preventDefault();
        popupContainer.style.display = "flex";
      });
    });
    closePopupButton.addEventListener("click", function() {
      popupContainer.style.display = "none";
    });
    popupContainer.addEventListener("click", function(event) {
      if (event.target === popupContainer) {
        popupContainer.style.display = "none";
      }
    });
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        popupContainer.style.display = "none";
      }
    });
  });
})();

