(() => {
  // app/javascript/workflow_steps.js
  https:
    document.addEventListener("DOMContentLoaded", initializeWorkflow);
  document.addEventListener("turbo:render", initializeWorkflow);
  if (window.jQuery.ui) {
  }
  function initializeWorkflow() {
    var currentURL = window.location.href;
    var workflowId = getCurrentWorkflowId(currentURL);
    if (!isNaN(workflowId)) {
      var urlParams = new URLSearchParams(window.location.search);
      var stepIdParam = urlParams.get("step_id");
      if (stepIdParam) {
        console.log("the 1st one loads and its not problem");
        var initialStepItem = $(".step-list-item[data-worktask-id='" + stepIdParam + "']");
        if (initialStepItem.length > 0) {
          initialStepItem.addClass("active");
          loadStepDetails(stepIdParam, workflowId);
        }
      } else {
        console.log("the second one loads and its not problem");
        var initialStepIndex = getInitialStepIndexForWorkflow(workflowId);
        console.log(initialStepIndex);
        var initialStepItem = $(".step-list-item:eq(" + initialStepIndex + ")");
        if (initialStepItem.length > 0) {
          initialStepItem.addClass("active");
          var stepId = initialStepItem.data("worktask-id");
          loadStepDetails(stepId, workflowId);
        }
      }
      $(".clickable-column").on("click", function() {
        var href = $(this).data("href");
        if (href) {
          window.location.href = href;
        }
      });
      $(".step-list-item").on("click", function(e) {
        e.preventDefault();
        $(".step-list-item").removeClass("active");
        $(this).addClass("active");
        var stepId2 = $(this).data("worktask-id");
        loadStepDetails(stepId2, workflowId);
      });
      var workflowId = window.location.pathname.match(/\/workflows\/(\d+)/);
      if (workflowId && workflowId[1]) {
        workflowId = parseInt(workflowId[1]);
        var csrfToken = $("meta[name=csrf-token]").attr("content");
        $(".step-list").sortable({
          update: function(event, ui) {
            var stepIds = [];
            $(this).find(".step-list-item").each(function() {
              stepIds.push($(this).data("worktask-id"));
            });
            $.ajax({
              url: "/workflows/" + workflowId + "/update_worktask_order",
              // Define a route in your Rails routes file
              type: "PUT",
              data: {
                worktaskIds: stepIds
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
  }
  function getCurrentWorkflowId(url) {
    var parts = url.split("/");
    var lastPart = parts[parts.length - 1];
    console.log(parts);
    var lastPart = parts[parts.length - 2];
    console.log(parts);
    console.log("lala");
    var workflowId = parseInt(lastPart);
    console.log(workflowId);
    return isNaN(workflowId) ? 0 : workflowId;
  }
  function getInitialStepIndexForWorkflow(workflowId) {
    var stepItems = $(".step-list-item");
    for (var i = 0; i < stepItems.length; i++) {
      var step = $(stepItems[i]);
      if (step.data("workflow-id") == workflowId) {
        return i;
      }
    }
    return 0;
  }
  function loadStepDetails(stepId, workflowId) {
    if (!isNaN(workflowId) && stepId > 0) {
      $.ajax({
        url: `/workflows/${workflowId}/worktasks/${stepId}`,
        type: "GET",
        dataType: "script",
        success: function(response) {
        },
        error: function(xhr, textStatus, errorThrown) {
          if (xhr.status === 404) {
            console.log(`Step with ID ${stepId} doesn't exist for workflow with ID ${workflowId}`);
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
    $("#workflow-details").empty();
  }
})();

