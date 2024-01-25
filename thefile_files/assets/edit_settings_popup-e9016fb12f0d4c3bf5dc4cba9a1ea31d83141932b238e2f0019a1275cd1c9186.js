(() => {
  // app/javascript/edit_settings_popup.js
  document.addEventListener("turbolinks:load", function() {
    $("#edit_settings_popup").submit(function(e) {
      e.preventDefault();
      $(".popup-settings-edit-funnel").magnificPopup("close");
    });
  });
})();

