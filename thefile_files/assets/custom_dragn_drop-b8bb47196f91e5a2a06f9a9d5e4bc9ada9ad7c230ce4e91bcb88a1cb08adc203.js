(() => {
  // app/javascript/custom_dragn_drop.js
  function CustomDragAndDrop() {
    this.draggables = void 0;
    this.containers = void 0;
    this.placeholder = void 0;
    this.elementToInsert = void 0;
    this.afterElement = void 0;
    this.sectionCount = 0;
    this.mainContainer = void 0;
    this.popupContainer = void 0;
    this.existingElement = void 0;
    this.loadSections = function() {
      allContainers = document.querySelectorAll(".editor-container");
      if (allContainers.length > 0) {
        allContainers.forEach((container) => {
          this.addEventListenersForContainer(container);
        });
        this.updateContainers();
      } else {
      }
    };
    this.addSection = function() {
      let container = document.createElement("div");
      container.classList.add("editor-container", "new-section");
      container.style.minHeight = "250px";
      container.style.backgroundColor = "#ffffff";
      let section = document.createElement("div");
      container.appendChild(section);
      console.log("this main container", this.mainContainer);
      console.log("this popup container", this.popupContainer);
      if (isPopupOpen()) {
        this.popupContainer.appendChild(container);
        console.log("The popup is open.");
      } else {
        this.mainContainer.appendChild(container);
        console.log("The popup is not open.");
      }
      this.addEventListenersForContainer(container);
      this.updateContainers();
    };
    this.updateContainers = function() {
      this.containers = document.querySelectorAll(".editor-container");
    };
    this.updateDraggables = function() {
      this.draggables = document.querySelectorAll(".draggable");
    };
    this.addEventListeners = function(name) {
      if (name === "containers" && this.containers) {
        this.containers.forEach((container) => {
          container.addEventListener(
            "dragover",
            (e) => this.onDragHover(e, container, false)
          );
          container.addEventListener("drop", (e) => this.onDragDrop(e), false);
          container.addEventListener(
            "dragleave",
            (e) => this.onDragLeave(e),
            false
          );
          container.addEventListener(
            "dragenter",
            (e) => this.onDragEnter(e),
            false
          );
        });
      } else if (this.draggables) {
        this.draggables.forEach((draggable) => {
          draggable.addEventListener(
            "dragstart",
            (e) => this.onDragStart(e, draggable),
            false
          );
          draggable.addEventListener(
            "dragend",
            (e) => this.onDragEnd(e, draggable),
            false
          );
        });
      } else if (this.draggables && this.containers) {
        this.containers.forEach((container) => {
          container.addEventListener(
            "dragover",
            (e) => this.onDragHover(e, container),
            false
          );
          container.addEventListener("drop", (e) => this.onDragDrop(e), false);
          container.addEventListener(
            "dragleave",
            (e) => this.onDragLeave(e),
            false
          );
          container.addEventListener(
            "dragenter",
            (e) => this.onDragEnter(e),
            false
          );
        });
        this.draggables.forEach((draggable) => {
          draggable.addEventListener(
            "dragstart",
            (e) => this.onDragStart(e),
            false
          );
          draggable.addEventListener("dragend", (e) => this.onDragEnd(e), false);
        });
      }
    };
    this.removeEventListeners = function(name) {
      if (name === "editor-container" && this.containers) {
        this.containers.forEach((container) => {
          container.removeEventListener(
            "dragover",
            (e) => this.onDragHover(e, container),
            false
          );
          container.removeEventListener("drop", (e) => this.onDragDrop(e), false);
          container.removeEventListener(
            "dragleave",
            (e) => this.onDragLeave(e),
            false
          );
          container.removeEventListener(
            "dragenter",
            (e) => this.onDragEnter(e),
            false
          );
        });
      } else if (name === "draggables" && this.draggables) {
        this.draggables.forEach((draggable) => {
          draggable.removeEventListener(
            "dragstart",
            (e) => this.onDragStart(e, draggable),
            false
          );
          draggable.removeEventListener(
            "dragend",
            (e) => this.onDragEnd(e, draggable),
            false
          );
        });
      } else if (this.draggables && this.containers) {
        this.containers.forEach((container) => {
          container.removeEventListener(
            "dragover",
            (e) => this.onDragHover(e, container),
            false
          );
          container.removeEventListener("drop", (e) => this.onDragDrop(e), false);
          container.removeEventListener(
            "dragleave",
            (e) => this.onDragLeave(e),
            false
          );
          container.removeEventListener(
            "dragenter",
            (e) => this.onDragEnter(e),
            false
          );
        });
        this.draggables.forEach((draggable) => {
          draggable.removeEventListener(
            "dragstart",
            (e) => this.onDragStart(e),
            false
          );
          draggable.removeEventListener(
            "dragend",
            (e) => this.onDragEnd(e),
            false
          );
        });
      }
    };
    this.createPlaceHolder = function() {
      let placeholder = document.createElement("div");
      placeholder.style.height = "50px";
      placeholder.style.borderRadius = "5px";
      placeholder.style.backgroundColor = "#eee";
      placeholder.style.margin = "10px 0";
      this.placeholder = placeholder;
    };
    this.getDragAfterElement = function(container, y) {
      const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)")
      ];
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return {
              offset,
              element: child
            };
          } else {
            return closest;
          }
        },
        {
          offset: Number.NEGATIVE_INFINITY
        }
      ).element;
    };
    this.onDragStart = function(e, draggable) {
      e.stopPropagation();
      let elementToInsert;
      console.log("drag start", draggable);
      if (draggable && draggable.getAttribute("name")) {
        let element = draggable.getAttribute("name");
        var rolloverTools = document.createElement("div");
        rolloverTools.classList.add(
          "de-rollover-tools",
          "smallWidthElementHover"
        );
        rolloverTools.setAttribute("data-current-id", "nill");
        rolloverTools.setAttribute("data-current-type", "type");
        rolloverTools.style.display = "none";
        var moveButton = document.createElement("div");
        moveButton.classList.add("de-rollover-move");
        moveButton.innerHTML = '<i class="fa fa-arrows"></i>';
        var advanceButton = document.createElement("div");
        advanceButton.classList.add("de-rollover-advance");
        advanceButton.innerHTML = '<i class="fa fa-cog"></i>';
        var cloneButton = document.createElement("div");
        cloneButton.classList.add("de-rollover-clone");
        cloneButton.innerHTML = '<i class="fa fa-copy"></i>';
        var removeButton = document.createElement("div");
        removeButton.classList.add("de-rollover-remove");
        removeButton.innerHTML = '<i class="fa fa-trash-o"></i>';
        rolloverTools.appendChild(moveButton);
        rolloverTools.appendChild(advanceButton);
        rolloverTools.appendChild(cloneButton);
        rolloverTools.appendChild(removeButton);
        switch (element) {
          case "headline-field":
            const wrapper = document.createElement("div");
            wrapper.classList.add(
              "draggable",
              "de",
              "elHeadlineWrapper",
              "ui-droppable",
              "de-editable"
            );
            wrapper.setAttribute("id", `headline-${Date.now()}`);
            wrapper.setAttribute("data-de-type", "headline");
            wrapper.setAttribute("data-de-editing", "false");
            wrapper.setAttribute("data-title", "headline");
            wrapper.setAttribute("data-ce", "true");
            wrapper.setAttribute("data-trigger", "none");
            wrapper.setAttribute("data-animate", "fade");
            wrapper.setAttribute("data-delay", "500");
            wrapper.style.outline = "none";
            wrapper.style.cursor = "pointer";
            wrapper.setAttribute("aria-disabled", "false");
            wrapper.setAttribute("draggable", true);
            elementToInsert = document.createElement("h1");
            elementToInsert.classList.add(
              "ne",
              "elHeadline",
              "fs-1",
              "lh4",
              "elMargin0",
              "elBGStyle0",
              "hsTextShadow0",
              "display-5",
              "font-weight-normal"
            );
            elementToInsert.style.textAlign = "center";
            elementToInsert.style.fontSize = "32px";
            elementToInsert.dataset.bold = "inherit";
            elementToInsert.dataset.gramm = "false";
            elementToInsert.style.marginTop = "10px";
            elementToInsert.style.marginBottom = "10px";
            elementToInsert.setAttribute("contenteditable", "true");
            const bElement = document.createElement("b");
            bElement.textContent = "How To [GOOD] Without [BAD].";
            elementToInsert.appendChild(bElement);
            elementToInsert.setAttribute("id", `field-${Date.now()}`);
            elementToInsert.setAttribute("placeholder", "Text");
            const rolloverTools2 = document.createElement("div");
            rolloverTools2.classList.add(
              "de-rollover-tools",
              "smallWidthElementHover"
            );
            rolloverTools2.setAttribute("data-current-id", "nill");
            rolloverTools2.setAttribute("data-current-type", "type");
            rolloverTools2.style.display = "none";
            const rolloverMove = document.createElement("div");
            rolloverMove.classList.add("de-rollover-move");
            rolloverMove.innerHTML = '<i class="fa fa-arrows"></i>';
            const rolloverAdvance = document.createElement("div");
            rolloverAdvance.classList.add("de-rollover-advance");
            rolloverAdvance.innerHTML = '<i class="fa fa-cog"></i>';
            const rolloverClone = document.createElement("div");
            rolloverClone.classList.add("de-rollover-clone");
            rolloverClone.innerHTML = '<i class="fa fa-copy"></i>';
            const rolloverRemove = document.createElement("div");
            rolloverRemove.classList.add("de-rollover-remove");
            rolloverRemove.innerHTML = '<i class="fa fa-trash-o"></i>';
            rolloverTools2.appendChild(rolloverMove);
            rolloverTools2.appendChild(rolloverAdvance);
            rolloverTools2.appendChild(rolloverClone);
            rolloverTools2.appendChild(rolloverRemove);
            wrapper.appendChild(elementToInsert);
            wrapper.appendChild(rolloverTools2);
            wrapper.addEventListener("mouseenter", () => {
              rolloverTools2.style.display = "block";
              wrapper.style.borderColor = "orange";
              wrapper.style.borderWidth = "3px";
            });
            wrapper.addEventListener("mouseleave", () => {
              rolloverTools2.style.display = "none";
              wrapper.style.borderColor = "";
              wrapper.style.borderWidth = "";
            });
            this.elementToInsert = wrapper;
            this.existingElement = false;
            break;
          case "subhead-field":
            const subheadWrapper = document.createElement("div");
            subheadWrapper.classList.add(
              "draggable",
              "de",
              "elSubHeadlineWrapper",
              "ui-droppable",
              "de-editable"
            );
            subheadWrapper.setAttribute("id", `subhead-${Date.now()}`);
            subheadWrapper.setAttribute("data-de-type", "subhead");
            subheadWrapper.setAttribute("data-de-editing", "false");
            subheadWrapper.setAttribute("data-title", "subhead");
            subheadWrapper.setAttribute("data-ce", "true");
            subheadWrapper.setAttribute("data-trigger", "none");
            subheadWrapper.setAttribute("data-animate", "fade");
            subheadWrapper.setAttribute("data-delay", "500");
            subheadWrapper.style.outline = "none";
            subheadWrapper.style.cursor = "pointer";
            subheadWrapper.setAttribute("aria-disabled", "false");
            subheadWrapper.setAttribute("draggable", true);
            const subheadElement = document.createElement("h3");
            subheadElement.classList.add(
              "ne",
              "elSubHeadline",
              "hsSize3",
              "lh4",
              "elMargin0",
              "elBGStyle0",
              "hsTextShadow0"
            );
            subheadElement.style.textAlign = "center";
            subheadElement.style.fontSize = "28px";
            subheadElement.dataset.bold = "inherit";
            subheadElement.dataset.gramm = "false";
            const subheadBElement = document.createElement("p");
            subheadBElement.textContent = "FREE: Brand New On-Demand Class Reveals ...";
            subheadElement.appendChild(subheadBElement);
            subheadElement.setAttribute("id", `field-${Date.now()}`);
            subheadElement.setAttribute("placeholder", "Subhead Text");
            subheadWrapper.appendChild(subheadElement);
            this.elementToInsert = subheadWrapper;
            this.existingElement = false;
            break;
          case "paragraph-field":
            const paragraphWrapper = document.createElement("div");
            paragraphWrapper.classList.add(
              "draggable",
              "de",
              "elparagraphWrapper",
              "ui-droppable",
              "de-editable"
            );
            paragraphWrapper.setAttribute("id", `text-${Date.now()}`);
            paragraphWrapper.setAttribute("data-de-type", "text");
            paragraphWrapper.setAttribute("data-de-editing", "false");
            paragraphWrapper.setAttribute("data-title", "text");
            paragraphWrapper.setAttribute("data-ce", "true");
            paragraphWrapper.setAttribute("data-trigger", "none");
            paragraphWrapper.setAttribute("data-animate", "fade");
            paragraphWrapper.setAttribute("data-delay", "500");
            paragraphWrapper.style.outline = "none";
            paragraphWrapper.style.cursor = "pointer";
            paragraphWrapper.setAttribute("aria-disabled", "false");
            paragraphWrapper.setAttribute("draggable", true);
            const textElement = document.createElement("p");
            textElement.classList.add(
              "ne",
              "elText",
              "hsSize3",
              "lh4",
              "elMargin0",
              "elBGStyle0",
              "hsTextShadow0"
            );
            textElement.style.fontSize = "20px";
            textElement.dataset.bold = "inherit";
            textElement.dataset.gramm = "false";
            textElement.textContent = "This Class Is Available Instantly ...No Waiting.";
            textElement.setAttribute("id", `field-${Date.now()}`);
            textElement.setAttribute("placeholder", "Text");
            paragraphWrapper.appendChild(textElement);
            this.elementToInsert = paragraphWrapper;
            this.existingElement = false;
            break;
          case "button-field":
            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add(
              "draggable",
              "de",
              "elBTN",
              "de-editable",
              "elAlign_center",
              "elMargin0"
            );
            buttonContainer.id = `tmp_button-${Date.now()}`;
            buttonContainer.dataset.deType = "button";
            buttonContainer.dataset.deEditing = "false";
            buttonContainer.dataset.title = "button";
            buttonContainer.dataset.ce = "false";
            buttonContainer.dataset.trigger = "none";
            buttonContainer.dataset.animate = "fade";
            buttonContainer.dataset.delay = "500";
            buttonContainer.style.marginTop = "40px";
            buttonContainer.style.marginBottom = "40px";
            buttonContainer.style.outline = "none";
            buttonContainer.style.textAlign = "center";
            const linkElement = document.createElement("a");
            linkElement.href = "#submit-form";
            linkElement.id = `the_button-${Date.now()}`;
            linkElement.classList.add(
              "elSettings",
              "elButton",
              "elButtonSize1",
              "elButtonColor1",
              "elButtonRounded",
              "elButtonPadding2",
              "elBtnVP_10",
              "elButtonCorner3",
              "elButtonFluid",
              "elBtnHP_25",
              "elBTN_b_1",
              "elButtonShadowN1",
              "elButtonTxtColor1"
            );
            linkElement.style.color = "rgb(255, 255, 255)";
            linkElement.style.fontWeight = "600";
            linkElement.style.backgroundColor = "#ff0000";
            linkElement.style.fontSize = "20px";
            linkElement.rel = "noopener noreferrer";
            const mainSpan = document.createElement("span");
            mainSpan.classList.add("elButtonMain");
            mainSpan.textContent = "Let Me In!";
            const subSpan = document.createElement("span");
            subSpan.classList.add("elButtonSub");
            linkElement.appendChild(mainSpan);
            linkElement.appendChild(subSpan);
            buttonContainer.appendChild(linkElement);
            elementToInsert = buttonContainer;
            elementToInsert.setAttribute("draggable", true);
            this.elementToInsert = elementToInsert;
            this.existingElement = false;
            break;
          case "countdown-field":
            let getFormattedDate2 = function(date) {
              const options = {
                weekday: "long",
                hour: "numeric",
                minute: "numeric",
                timeZoneName: "short",
                timeZone: "America/New_York"
                // timeZone: 'Europe/Vienna'
              };
              return date.toLocaleString("en-US", options);
            };
            var getFormattedDate = getFormattedDate2;
            const currentDate = /* @__PURE__ */ new Date();
            const futureDate = /* @__PURE__ */ new Date();
            futureDate.setDate(currentDate.getDate() + 1);
            futureDate.setHours(currentDate.getHours() + 12);
            const targetDateStr = `${futureDate.getFullYear()}-${(futureDate.getMonth() + 1).toString().padStart(2, "0")}-${futureDate.getDate().toString().padStart(2, "0")}T${futureDate.getHours().toString().padStart(2, "0")}:${futureDate.getMinutes().toString().padStart(2, "0")}:${futureDate.getSeconds().toString().padStart(2, "0")}`;
            const targetDate = new Date(targetDateStr);
            const targetStamp = targetDate.getTime();
            const containercountdownWrapper = document.createElement("div");
            containercountdownWrapper.classList.add(
              "container-fluid",
              "draggable",
              "de",
              "elCountdownWrapper",
              "ui-droppable",
              "de-editable"
            );
            const countdownWrapper = document.createElement("div");
            countdownWrapper.classList.add("row", "no-gutters");
            countdownWrapper.style.backgroundColor = "red";
            countdownWrapper.style.color = "yellow";
            countdownWrapper.style.display = "flex";
            countdownWrapper.style.alignItems = "center";
            const leftColumn = document.createElement("div");
            leftColumn.classList.add("col-md-8", "d-none", "d-md-block");
            const textLeft = document.createElement("div");
            textLeft.classList.add("text-left");
            const heading = document.createElement("div");
            heading.style.fontSize = "1.6vw";
            heading.style.fontWeight = "600";
            heading.style.letterSpacing = "letter-spacing: -0.5px;";
            heading.style.fontFamily = "Nunito Sans, sans-serif";
            heading.style.paddingLeft = "20px";
            const formattedTargetDateMessage = `Hurry! This special offer is available until ${getFormattedDate2(
              currentDate
            )}`;
            heading.textContent = formattedTargetDateMessage;
            textLeft.appendChild(heading);
            leftColumn.appendChild(textLeft);
            const rightColumn = document.createElement("div");
            rightColumn.classList.add("col-12", "col-md-4");
            const countdownDiv = document.createElement("div");
            countdownDiv.classList.add(
              "de",
              "elCountdown",
              "de-editable",
              "elAlign_center",
              "elMargin0"
            );
            countdownDiv.setAttribute("id", `countdown-${Date.now()}`);
            countdownDiv.setAttribute("data-de-type", "countdown");
            countdownDiv.setAttribute("data-de-editing", "false");
            countdownDiv.setAttribute("data-title", "Date Countdown 2.0");
            countdownDiv.setAttribute("data-ce", "false");
            countdownDiv.setAttribute("data-trigger", "none");
            countdownDiv.setAttribute("data-animate", "fade");
            countdownDiv.setAttribute("data-delay", "500");
            countdownDiv.style.outline = "none";
            countdownDiv.style.backgroundColor = "red";
            countdownDiv.style.color = "yellow";
            countdownDiv.style.border = "0px none";
            const countdownElement = document.createElement("div");
            countdownElement.classList.add(
              "realcountdown",
              "wideCountdownSize2",
              "cdBlack",
              "cdStyleTextOnly",
              "clearfix",
              "hide"
            );
            countdownElement.setAttribute("data-date", targetDateStr);
            countdownElement.setAttribute("data-time", targetStamp);
            countdownElement.setAttribute("data-tz", "America/New_York");
            countdownElement.setAttribute("data-url", "#");
            countdownElement.setAttribute("data-lang", "eng");
            countdownElement.textContent = "";
            const countdownDemo = document.createElement("div");
            countdownDemo.classList.add(
              "wideCountdown",
              "wideCountdownSize2",
              "cdBlack",
              "cdStyleTextOnly",
              "wideCountdown-demo",
              "is-countdown",
              "clearfix"
            );
            const timerDiv = document.createElement("div");
            timerDiv.classList.add("timer");
            const timerElements = [
              {
                number: "03",
                word: "days"
              },
              {
                number: "04",
                word: "hrs"
              },
              {
                number: "12",
                word: "min"
              },
              {
                number: "03",
                word: "sec"
              }
            ];
            timerElements.forEach((element2) => {
              const timerItem = document.createElement("div");
              timerItem.style.display = "inline-block";
              timerItem.style.marginRight = "10px";
              const timerNumber = document.createElement("div");
              timerNumber.classList.add("timer-number");
              timerNumber.textContent = element2.number;
              const timerWord = document.createElement("div");
              timerWord.classList.add("timer-word");
              timerWord.textContent = element2.word;
              timerItem.appendChild(timerNumber);
              timerItem.appendChild(timerWord);
              timerDiv.appendChild(timerItem);
            });
            countdownElement.appendChild(timerDiv);
            countdownDiv.appendChild(countdownElement);
            countdownDiv.appendChild(countdownDemo);
            containercountdownWrapper.appendChild(countdownWrapper);
            countdownWrapper.appendChild(leftColumn);
            countdownWrapper.appendChild(rightColumn);
            rightColumn.appendChild(countdownDiv);
            countdownWrapper.setAttribute("draggable", true);
            this.elementToInsert = containercountdownWrapper;
            this.existingElement = false;
            break;
          case "input-field":
            const inputWrapper = document.createElement("div");
            inputWrapper.classList.add(
              "draggable",
              "de",
              "elInputWrapper",
              "de-editable",
              "de-input-block",
              "elAlign_center",
              "elMargin0"
            );
            inputWrapper.setAttribute("id", `tmp_input-${Date.now()}`);
            inputWrapper.setAttribute("data-de-type", "input");
            inputWrapper.setAttribute("data-de-editing", "false");
            inputWrapper.setAttribute("data-title", "input");
            inputWrapper.setAttribute("data-ce", "false");
            inputWrapper.setAttribute("data-trigger", "none");
            inputWrapper.setAttribute("data-animate", "fade");
            inputWrapper.setAttribute("data-delay", "500");
            inputWrapper.style.marginTop = "30px";
            inputWrapper.style.outline = "none";
            const inputElement = document.createElement("input");
            inputElement.type = "text";
            inputElement.placeholder = "Your Name Here...";
            inputElement.name = "name";
            inputElement.classList.add(
              "elInput",
              "elInput100",
              "elAlign_left",
              "elInputMid",
              "elInputStyl0",
              "elInputBG1",
              "elInputBR5",
              "elInputI0",
              "elInputIBlack",
              "elInputIRight",
              "required0",
              "ceoinput"
            );
            inputElement.dataset.type = "extra";
            inputElement.style.width = "100%";
            moveButton = document.createElement("div");
            moveButton.classList.add("de-rollover-move");
            moveButton.innerHTML = '<i class="fa fa-arrows"></i>';
            advanceButton = document.createElement("div");
            advanceButton.classList.add("de-rollover-advance");
            advanceButton.innerHTML = '<i class="fa fa-cog"></i>';
            cloneButton = document.createElement("div");
            cloneButton.classList.add("de-rollover-clone");
            cloneButton.innerHTML = '<i class="fa fa-copy"></i>';
            removeButton = document.createElement("div");
            removeButton.classList.add("de-rollover-remove");
            removeButton.innerHTML = '<i class="fa fa-trash-o"></i>';
            inputWrapper.appendChild(inputElement);
            addElementFlyoutDOM = document.createElement("div");
            addElementFlyoutDOM.classList.add("addElementFlyoutDOM");
            addElementFlyoutDOM.style.display = "none";
            addElementFlyoutDOM.style.left = "325px";
            addElementFlyoutDOM.innerHTML = '<i class="fa fa-plus"></i>';
            inputWrapper.appendChild(addElementFlyoutDOM);
            inputWrapper.setAttribute("draggable", true);
            this.elementToInsert = inputWrapper;
            this.existingElement = false;
            break;
          case "email-field":
            const emailWrapper = document.createElement("div");
            emailWrapper.classList.add(
              "draggable",
              "de",
              "elemailWrapper",
              "de-editable",
              "de-input-block",
              "elAlign_center",
              "elMargin0"
            );
            emailWrapper.setAttribute("id", `tmp_input-${Date.now()}`);
            emailWrapper.setAttribute("data-de-type", "input");
            emailWrapper.setAttribute("data-de-editing", "false");
            emailWrapper.setAttribute("data-title", "input");
            emailWrapper.setAttribute("data-ce", "false");
            emailWrapper.setAttribute("data-trigger", "none");
            emailWrapper.setAttribute("data-animate", "fade");
            emailWrapper.setAttribute("data-delay", "500");
            emailWrapper.style.marginTop = "30px";
            emailWrapper.style.outline = "none";
            const emailElement = document.createElement("input");
            emailElement.type = "text";
            emailElement.placeholder = "Your Email Address Here...";
            emailElement.name = "email";
            emailElement.classList.add(
              "elInput",
              "elInput100",
              "elAlign_left",
              "elInputMid",
              "elInputStyl0",
              "elInputBG1",
              "elInputBR5",
              "elInputI0",
              "elInputIBlack",
              "elInputIRight",
              "required0",
              "ceoinput"
            );
            emailElement.dataset.type = "extra";
            emailElement.style.width = "100%";
            moveButton = document.createElement("div");
            moveButton.classList.add("de-rollover-move");
            moveButton.innerHTML = '<i class="fa fa-arrows"></i>';
            advanceButton = document.createElement("div");
            advanceButton.classList.add("de-rollover-advance");
            advanceButton.innerHTML = '<i class="fa fa-cog"></i>';
            cloneButton = document.createElement("div");
            cloneButton.classList.add("de-rollover-clone");
            cloneButton.innerHTML = '<i class="fa fa-copy"></i>';
            removeButton = document.createElement("div");
            removeButton.classList.add("de-rollover-remove");
            removeButton.innerHTML = '<i class="fa fa-trash-o"></i>';
            emailWrapper.appendChild(emailElement);
            addElementFlyoutDOM = document.createElement("div");
            addElementFlyoutDOM.classList.add("addElementFlyoutDOM");
            addElementFlyoutDOM.style.display = "none";
            addElementFlyoutDOM.style.left = "325px";
            addElementFlyoutDOM.innerHTML = '<i class="fa fa-plus"></i>';
            emailWrapper.appendChild(addElementFlyoutDOM);
            emailWrapper.setAttribute("draggable", true);
            this.elementToInsert = emailWrapper;
            this.existingElement = false;
            break;
          case "phone-field":
            elementToInsert = document.createElement("input");
            elementToInsert.classList.add("draggable");
            elementToInsert.setAttribute("draggable", true);
            elementToInsert.setAttribute("placeholder", "Phone");
            elementToInsert.setAttribute("disabled", true);
            elementToInsert.setAttribute("id", `field-${Date.now()}`);
            this.elementToInsert = elementToInsert;
            this.existingElement = false;
            break;
          default:
            this.elementToInsert = draggable;
            this.existingElement = true;
            break;
        }
      } else {
        this.existingElement = true;
        this.elementToInsert = draggable;
      }
      this.placeholder.setAttribute("id", `placeholder-${Date.now()}`);
      draggable.classList.add("dragging");
    };
    this.onDragEnd = function(e, draggable) {
      draggable.classList.remove("dragging");
      updateTextareaFromContainer(
        "da-main-container",
        "step[large_html_blob_content]"
      );
      updateTextareaFromContainer(
        "da-popup-container",
        "step[popup_html_blob_content]"
      );
      console.log("drag end", this.elementToInsert);
      console.log("adding elSettings");
      var settingsSidebar2 = document.getElementById("settingsSidebar");
      var anchor = this.elementToInsert.querySelector("a.elSettings");
      if (anchor) {
        anchor.addEventListener("click", function(event) {
          event.preventDefault();
          if (settingsSidebar2.style.left === "0px") {
            closeSidebar();
          } else {
            openSidebar(this);
          }
        });
      }
      if (!this.existingElement) {
        this.addEventListenerForDraggableItem(this.elementToInsert);
        this.updateDraggables("draggables");
      } else {
        console.log("existing ele", this.elementToInsert);
        this.elementToInsert.classList.remove("dragging");
      }
    };
    this.addEventListenerForDraggableItem = function(element) {
      console.log("ele", element);
      element.addEventListener("dragstart", (e) => this.onDragStart(e, element));
      element.addEventListener("dragend", (e) => this.onDragEnd(e, element));
      const elHeadlineElements = element.querySelectorAll(
        ".elHeadline, .elText, .elSubHeadline"
      );
      elHeadlineElements.forEach((elHeadlineElement) => {
        elHeadlineElement.addEventListener("mousedown", function() {
          console.log("clicked to edit");
          elHeadlineElement.setAttribute("contenteditable", "true");
          elHeadlineElement.style.cursor = "text";
        });
      });
    };
    this.addEventListenersForContainer = function(container) {
      container.addEventListener(
        "dragover",
        (e) => this.onDragHover(e, container, false)
      );
      container.addEventListener("drop", (e) => this.onDragDrop(e), false);
      container.addEventListener("dragleave", (e) => this.onDragLeave(e), false);
      container.addEventListener("dragenter", (e) => this.onDragEnter(e), false);
    };
    this.onDragHover = function(e, container) {
      e.preventDefault();
      this.afterElement = this.getDragAfterElement(container, e.clientY);
      if (this.afterElement == null) {
        container.appendChild(this.placeholder);
      } else {
        container.insertBefore(this.placeholder, this.afterElement);
      }
    };
    this.onDragEnter = function(e) {
      e.preventDefault();
    };
    this.onDragLeave = function(e) {
      e.preventDefault();
    };
    this.onDragDrop = function(e) {
      e.preventDefault();
      this.placeholder.replaceWith(this.elementToInsert);
    };
    this.init = function() {
      try {
        this.mainContainer = document.getElementById("da-main-container");
        this.popupContainer = document.getElementById("da-popup-container");
        this.updateContainers();
        this.updateDraggables();
        this.addEventListeners();
        this.createPlaceHolder();
      } catch (e) {
        console.log(e);
      }
    };
  }
  function updateTextareaFromContainer(containerId, textareaName) {
    const mainContainer = document.getElementById(containerId);
    const textarea = document.querySelector(`textarea[name="${textareaName}"]`);
    if (mainContainer && textarea) {
      textarea.value = mainContainer.innerHTML;
    } else {
      console.error("Container or textarea not found");
    }
  }
  function isPopupOpen() {
    var popup = document.querySelector(".popup-container");
    return popup.classList.contains("open");
  }
  var customDragnDropInitialized = false;
  document.addEventListener("DOMContentLoaded", function(e) {
    if (!customDragnDropInitialized) {
      const customDragnDrop = new CustomDragAndDrop();
      customDragnDrop.init();
      console.log("customDragnDropInitialized=true");
      customDragnDrop.loadSections();
      console.log("we loaded the Sections");
      customDragnDropInitialized = true;
      const addSectionButton = document.getElementById("add-section-button");
      if (addSectionButton) {
        addSectionButton.addEventListener("click", () => {
          customDragnDrop.addSection();
        });
      }
    } else {
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    const formWrapper = document.getElementById("editorFormWrapper");
    const form = formWrapper.querySelector("form");
    if (form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        updateTextareaFromContainer(
          "da-main-container",
          "step[large_html_blob_content]"
        );
        updateTextareaFromContainer(
          "da-popup-container",
          "step[popup_html_blob_content]"
        );
        console.log("save it");
        form.submit();
      });
    }
  });
  var openPopupButton = document.getElementById("open-popup");
  var closePopupButton = document.getElementById("close-popup");
  var popupContainer = document.querySelector(".popup-container");
  var thebody = document.querySelector("body");
  var damaincontainer = document.getElementById("da-main-container");
  openPopupButton.addEventListener("click", function(event) {
    event.preventDefault();
    popupContainer.classList.add("open");
    popupContainer.style.display = "block";
    thebody.style.backgroundColor = "rgba(100, 100, 100, 0.1)";
    damaincontainer.style.display = "none";
  });
  closePopupButton.addEventListener("click", function(event) {
    event.preventDefault();
    popupContainer.classList.remove("open");
    popupContainer.style.display = "none";
    damaincontainer.style.display = "block";
  });
  var selectedElSettings = null;
  var elSettingsAnchors = document.querySelectorAll("a.elSettings ");
  var settingsSidebar = document.getElementById("settingsSidebar");
  function openSidebar(element) {
    selectedElSettings = element.id;
    settingsSidebar.style.left = "0";
    loadPresetSettings(element);
  }
  function closeSidebar() {
    selectedElSettings = null;
    settingsSidebar.style.left = "-100%";
  }
  elSettingsAnchors.forEach(function(anchor) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      if (settingsSidebar.style.left === "0px") {
        closeSidebar();
      } else {
        openSidebar(this);
      }
    });
  });
  var urlInputContainers = document.querySelectorAll(".url-input-container");
  var actionSelect = document.getElementById("action-select");
  actionSelect.addEventListener("change", () => {
    const selectedValue = actionSelect.value;
    urlInputContainers.forEach((container) => {
      if (selectedValue === "#") {
        container.style.display = "flex";
        const urlInput = document.getElementById("url-input");
        if (urlInput.value.trim() === "") {
          urlInput.value = "#";
        }
      } else {
        container.style.display = "none";
      }
    });
  });
  function loadPresetSettings(element) {
    const urlInputContainers2 = document.querySelectorAll(".url-input-container");
    const actionSelect2 = document.getElementById("action-select");
    const actionText = document.getElementById(selectedElSettings);
    const urlInput = document.getElementById("url-input");
    readHref = actionText.getAttribute("href");
    if (readHref === "#open-popup" || readHref === "#submit-form" || readHref === "#") {
      actionSelect2.value = readHref;
    } else {
      actionSelect2.value = "#";
      urlInput.value = readHref;
    }
    urlInputContainers2.forEach((container) => {
      if (!(readHref === "#open-popup" || readHref === "#submit-form")) {
        container.style.display = "flex";
        if (urlInput.value.trim() === "") {
          urlInput.value = "#";
        }
      } else {
        container.style.display = "none";
      }
    });
    actionSelect2.addEventListener("change", function() {
      if (selectedElSettings) {
        const targetElement = document.getElementById(selectedElSettings);
        targetElement.setAttribute("href", actionSelect2.value);
      }
    });
    urlInput.addEventListener("input", function() {
      if (selectedElSettings) {
        const targetElement = document.getElementById(selectedElSettings);
        targetElement.setAttribute("href", urlInput.value);
      }
    });
    const fontSizeSlider = document.getElementById("font-size-slider");
    const initialFontSize = window.getComputedStyle(element).fontSize;
    fontSizeSlider.value = parseFloat(initialFontSize);
    fontSizeSlider.addEventListener("input", function() {
      if (selectedElSettings) {
        const targetElement = document.getElementById(selectedElSettings);
        const fontSize = this.value;
        targetElement.style.fontSize = fontSize + "px";
      }
    });
    const buttonTextInput = document.getElementById("button-text-input");
    const buttonText = document.getElementById(selectedElSettings);
    buttonTextInput.value = buttonText.textContent;
    buttonTextInput.addEventListener("input", function() {
      if (selectedElSettings) {
        const targetElement = document.getElementById(selectedElSettings);
        targetElement.innerHTML = this.value;
      }
    });
    const fontFamilySelect = document.getElementById("font-family-select");
    const selectText = document.getElementById(selectedElSettings);
    fontFamilySelect.value = selectText.style.fontFamily.replace(/['"]/g, "");
    fontFamilySelect.addEventListener("change", function() {
      if (selectedElSettings) {
        const targetElement = document.getElementById(selectedElSettings);
        targetElement.style.fontFamily = fontFamilySelect.value;
      }
    });
  }
})();

