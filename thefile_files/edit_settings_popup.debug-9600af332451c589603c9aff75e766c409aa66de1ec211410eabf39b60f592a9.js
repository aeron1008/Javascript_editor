(() => {
  // app/javascript/edit_settings_popup.js
  document.addEventListener("DOMContentLoaded", function(e) {
    $("#edit_settings_popup").submit(function(e2) {
      e2.preventDefault();
      $(".popup-settings-edit-funnel").magnificPopup("close");
    });
  });
})();


//# sourceMappingURL=edit_settings_popup.js-2a18a2f9a3ffd05f9e354c85b29179da616da2cc72637ff4bccf477e29afe6db.map
