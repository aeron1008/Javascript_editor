(() => {
  // app/javascript/connect_products_popup.js
  document.addEventListener("DOMContentLoaded", function(e) {
    $(document).on("submit", "#connectProductForm", function(e2) {
      e2.preventDefault();
      var form = $(this);
      $.ajax({
        url: form.attr("action"),
        type: form.attr("method"),
        data: form.serialize(),
        success: function(response) {
          $.magnificPopup.close();
        },
        error: function(xhr, textStatus, errorThrown) {
          console.error("Error connecting product:", errorThrown);
        }
      });
    });
    $(document).on("click", "#connectProductButton", function() {
      $.magnificPopup.open({
        items: {
          src: "#connectProductPopup",
          type: "inline"
        }
      });
    });
  });
})();

