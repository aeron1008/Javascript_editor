(() => {
  // app/javascript/steps.js
  document.addEventListener("DOMContentLoaded", function(e) {
    if (window.jQuery.ui) {
    }
    console.log("jQuery UI loaded");
    var currentURL = window.location.href;
    var funnelId = getCurrentFunnelId(currentURL);
    if (!isNaN(funnelId)) {
      var urlParams = new URLSearchParams(window.location.search);
      var stepIdParam = urlParams.get("step_id");
      if (stepIdParam) {
        var initialStepItem = $(".step-list-item[data-step-id='" + stepIdParam + "']");
        if (initialStepItem.length > 0) {
          initialStepItem.addClass("active");
          loadStepDetails(stepIdParam, funnelId);
        }
      } else {
        var initialStepIndex = getInitialStepIndexForFunnel(funnelId);
        var initialStepItem = $(".step-list-item:eq(" + initialStepIndex + ")");
        if (initialStepItem.length > 0) {
          initialStepItem.addClass("active");
          var stepId = initialStepItem.data("step-id");
        }
      }
      $(".clickable-column").on("click", function() {
        var href = $(this).data("href");
        if (href) {
          window.location.href = href;
        }
      });
      $(".step-list-item").on("click", function(e2) {
        e2.preventDefault();
        $(".step-list-item").removeClass("active");
        $(this).addClass("active");
        var stepId2 = $(this).data("step-id");
        loadStepDetails(stepId2, funnelId);
      });
      var funnelId = window.location.pathname.match(/\/funnels\/(\d+)/);
      if (funnelId && funnelId[1]) {
        funnelId = parseInt(funnelId[1]);
        var csrfToken = $("meta[name=csrf-token]").attr("content");
        $(".step-list").sortable({
          update: function(event, ui) {
            var stepIds = [];
            $(this).find(".step-list-item").each(function() {
              stepIds.push($(this).data("step-id"));
            });
            $.ajax({
              url: "/funnels/" + funnelId + "/update_step_order",
              // Define a route in your Rails routes file
              type: "PUT",
              data: {
                stepIds
              },
              headers: {
                "X-CSRF-Token": csrfToken
                // Include the CSRF token in the headers
              },
              success: function(response) {
              },
              error: function(xhr, textStatus, errorThrown) {
              }
            });
          }
        });
      }
    }
  });
  function getCurrentFunnelId(url) {
    var parts = url.split("/");
    var lastPart = parts[parts.length - 1];
    var funnelId = parseInt(lastPart);
    return isNaN(funnelId) ? 0 : funnelId;
  }
  function getInitialStepIndexForFunnel(funnelId) {
    var stepItems = $(".step-list-item");
    for (var i = 0; i < stepItems.length; i++) {
      var step = $(stepItems[i]);
      if (step.data("funnel-id") == funnelId) {
        return i;
      }
    }
    return 0;
  }
  function loadStepDetails(stepId, funnelId) {
    if (!isNaN(funnelId) && stepId > 0) {
      $.ajax({
        url: `/funnels/${funnelId}/steps/${stepId}/details`,
        type: "GET",
        dataType: "script",
        success: function(response) {
        },
        error: function(xhr, textStatus, errorThrown) {
          if (xhr.status === 404) {
            console.log(`Step with ID ${stepId} doesn't exist for funnel with ID ${funnelId}`);
          } else {
            console.error(`Error loading step details: ${errorThrown}`);
          }
        }
      });
    } else {
      clearStepDetails();
    }
  }
  function clearStepDetails() {
    $("#step-details").empty();
  }
})();

