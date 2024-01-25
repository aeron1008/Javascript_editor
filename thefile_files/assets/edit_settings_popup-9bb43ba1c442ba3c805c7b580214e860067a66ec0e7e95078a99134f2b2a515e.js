(() => {
  // app/javascript/edit_settings_popup.js
  document.addEventListener("DOMContentLoaded", function(e) {
    $("#edit_settings_popup").submit(function(e2) {
      e2.preventDefault();
      $(".popup-settings-edit-funnel").magnificPopup("close");
    });
  });
})();

