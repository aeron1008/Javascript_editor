var slidingPopup1 = document.getElementById("rightSlidingPopup1");
var slidingPopup2 = document.getElementById("rightSlidingPopup2");
var mainContainerSection = document.getElementById("da-main-container");
var popupContainerSection = document.getElementById("da-popup-container");
var settingFullWidth = document.getElementById("setting-full-width");
var settingWide = document.getElementById("setting-wide");
var settingMedium = document.getElementById("setting-medium");
var settingSmall = document.getElementById("setting-small");
var settingRow1 = document.getElementById("setting-row1");
var settingRow2 = document.getElementById("setting-row2");
var settingRow3 = document.getElementById("setting-row3");
var settingRow4 = document.getElementById("setting-row4");
var settingRow5 = document.getElementById("setting-row5");
var settingRow6 = document.getElementById("setting-row6");
var settingsSidebar = document.getElementById("settingsSidebar");
var id = undefined;

settingFullWidth.addEventListener("click", function () {
  createContainer("100%");
});
settingWide.addEventListener("click", function () {
  createContainer("80%");
});
settingMedium.addEventListener("click", function () {
  createContainer("60%");
});
settingSmall.addEventListener("click", function () {
  createContainer("50%");
});

function createContainer(width) {
  var container = document.createElement("div");
  var key = new Date().getTime();
  container.setAttribute("id", key);
  container.classList.add("editor-container", "new-section", "new-container");
  container.style.width = width;
  slidingPopup1.style.right = "-420px";

  if (isPopupOpen()) {
    popupContainerSection.appendChild(container);
    console.log("The popup is open.");
  } else {
    mainContainerSection.appendChild(container);
    console.log("The popup is not open.");
  }

  var greenRolloverTools = document.createElement("div");
  greenRolloverTools.classList.add(
    "de-rollover-tools",
    "smallWidthElementHover",
    "d-flex",
    "flex-column"
  );
  greenRolloverTools.setAttribute("data-current-id", "nill");
  greenRolloverTools.setAttribute("data-current-type", "type");
  greenRolloverTools.style.display = "none";

  var greenArrowRolloverTools = document.createElement("div");
  greenArrowRolloverTools.classList.add(
    "arrow-de-rollover-tools",
    "smallWidthElementHover",
    "d-flex",
    "flex-column"
  );
  greenArrowRolloverTools.setAttribute("data-current-id", "nill");
  greenArrowRolloverTools.setAttribute("data-current-type", "type");
  greenArrowRolloverTools.style.display = "none";

  var greenPlusRolloverTools = document.createElement("div");
  greenPlusRolloverTools.classList.add(
    "plus-de-rollover-tools",
    "smallWidthElementHover",
    "d-flex",
    "flex-column"
  );
  var greenAddRowRolloverTools = document.createElement("div");
  greenAddRowRolloverTools.classList.add(
    "add-row-de-rollover-tools",
    "smallWidthElementHover",
    "d-flex"
  );
  var greenAddRowPlusRolloverTools = document.createElement("div");
  greenAddRowPlusRolloverTools.style.position = "relative";

  greenPlusRolloverTools.setAttribute("data-current-id", "nill");
  greenPlusRolloverTools.setAttribute("data-current-type", "type");
  greenPlusRolloverTools.style.display = "none";

  var greenMoveButton = document.createElement("div");
  greenMoveButton.classList.add("de-rollover-move");
  greenMoveButton.style.backgroundColor = "#37ca37";
  greenMoveButton.style.display = "none";
  greenMoveButton.setAttribute("type", "button");
  greenMoveButton.innerHTML = '<i class="fa fa-arrows"></i>';
  greenMoveButton.style.cursor = "move";

  var greenAdvanceButton = document.createElement("div");
  greenAdvanceButton.classList.add("de-rollover-advance");
  greenAdvanceButton.style.backgroundColor = "#37ca37";
  greenAdvanceButton.style.display = "none";
  greenAdvanceButton.setAttribute("type", "button");
  greenAdvanceButton.innerHTML = '<i class="fa fa-cog"></i>';

  var greenCloneButton = document.createElement("div");
  greenCloneButton.classList.add("de-rollover-clone");
  greenCloneButton.style.backgroundColor = "#37ca37";
  greenCloneButton.style.display = "none";
  greenCloneButton.setAttribute("type", "button");
  greenCloneButton.innerHTML = '<i class="fa fa-copy"></i>';

  var greenRemoveButton = document.createElement("div");
  greenRemoveButton.classList.add("de-rollover-remove");
  greenRemoveButton.style.backgroundColor = "#37ca37";
  greenRemoveButton.style.display = "none";
  greenRemoveButton.setAttribute("type", "button");
  greenRemoveButton.innerHTML = '<i class="fa fa-trash"></i>';
  greenRemoveButton.setAttribute(
    "onclick",
    "removeElement(this.parentElement.parentElement)"
  );

  var greenArrowUpButton = document.createElement("div");
  greenArrowUpButton.classList.add("de-rollover-arrow-up");
  greenArrowUpButton.style.backgroundColor = "#37ca37";
  greenArrowUpButton.style.display = "none";
  greenArrowUpButton.setAttribute("type", "button");
  greenArrowUpButton.innerHTML = '<i class="fa fa-arrow-up"></i>';
  greenArrowUpButton.setAttribute(
    "onclick",
    "moveUp(this.parentElement.parentElement)"
  );

  var greenArrowDownButton = document.createElement("div");
  greenArrowDownButton.classList.add("de-rollover-arrow-down");
  greenArrowDownButton.style.backgroundColor = "#37ca37";
  greenArrowDownButton.style.display = "none";
  greenArrowDownButton.setAttribute("type", "button");
  greenArrowDownButton.innerHTML = '<i class="fa fa-arrow-down"></i>';
  greenArrowDownButton.setAttribute(
    "onclick",
    "moveDown(this.parentElement.parentElement)"
  );

  var greenPlusCircle = document.createElement("div");
  greenPlusCircle.classList.add("de-rollover-plus-circle");
  greenPlusCircle.style.backgroundColor = "#37ca37";
  greenPlusCircle.style.display = "none";
  greenPlusCircle.style.position = "relative";
  greenPlusCircle.style.left = "-50%";
  greenPlusCircle.setAttribute("type", "button");
  greenPlusCircle.innerHTML = '<i class="fa fa-plus"></i>';

  var greenAddRowPlusButton = document.createElement("div");
  greenAddRowPlusButton.innerHTML = '<i class="fa fa-plus"></i>';
  greenAddRowPlusButton.classList.add("add-row-plus-de-rollover-tools");

  var greenAddRowButton = document.createElement("div");
  greenAddRowButton.innerHTML = '<button class="add-row"> + Add Row</button>';
  greenAddRowButton.style.backgroundColor = "#37ca37";
  greenAddRowButton.style.borderRadius = "3px";
  greenAddRowButton.style.display = "none";

  greenRolloverTools.appendChild(greenMoveButton);
  greenRolloverTools.appendChild(greenAdvanceButton);
  greenRolloverTools.appendChild(greenCloneButton);
  greenRolloverTools.appendChild(greenRemoveButton);
  greenArrowRolloverTools.appendChild(greenArrowUpButton);
  greenArrowRolloverTools.appendChild(greenArrowDownButton);
  greenPlusRolloverTools.appendChild(greenPlusCircle);
  greenAddRowRolloverTools.appendChild(greenAddRowButton);
  greenAddRowPlusRolloverTools.appendChild(greenAddRowPlusButton);

  container.appendChild(greenRolloverTools);
  container.appendChild(greenArrowRolloverTools);
  container.appendChild(greenPlusRolloverTools);
  container.appendChild(greenAddRowRolloverTools);
  container.appendChild(greenAddRowPlusRolloverTools);

  container.addEventListener("mouseenter", (e) => {
    greenRolloverTools.style.display = "block";
    greenArrowRolloverTools.style.display = "block";
    greenPlusRolloverTools.style.display = "block";
    greenAddRowRolloverTools.style.display = "block";
    greenMoveButton.style.display = "block";
    greenAdvanceButton.style.display = "block";
    greenCloneButton.style.display = "block";
    greenRemoveButton.style.display = "block";
    greenArrowUpButton.style.display = "block";
    greenArrowDownButton.style.display = "block";
    greenPlusCircle.style.display = "block";
    greenAddRowButton.style.display = "block";
    greenAddRowPlusButton.style.display = "none";
    if (container.childNodes[5]) {
      greenAddRowRolloverTools.style.display = "none";
      greenAddRowButton.style.display = "none";
    } else {
      greenAddRowRolloverTools.style.display = "block";
      greenAddRowButton.style.display = "block";
    }
    container.style.border = "1px solid #37ca37";
    container.style.position = "relative";
  });
  container.addEventListener("mouseleave", (e) => {
    greenRolloverTools.style.display = "none";
    greenArrowRolloverTools.style.display = "none";
    greenPlusRolloverTools.style.display = "none";
    greenAddRowRolloverTools.style.display = "none";
    greenMoveButton.style.display = "none";
    greenAdvanceButton.style.display = "none";
    greenCloneButton.style.display = "none";
    greenRemoveButton.style.display = "none";
    greenArrowUpButton.style.display = "none";
    greenArrowDownButton.style.display = "none";
    greenPlusCircle.style.display = "none";
    greenAddRowButton.style.display = "none";
    greenAddRowPlusButton.style.display = "block";
    if (container.childNodes[5]) {
      greenAddRowPlusButton.style.display = "none";
    } else {
      greenAddRowPlusButton.style.display = "block";
    }
    container.style.border = "none";
    container.style.position = "unset";
  });

  greenPlusCircle.addEventListener("click", function () {
    if (slidingPopup1.style.right === "0px") {
      slidingPopup1.style.right = "-420px"; // Slide out the popup
    } else {
      slidingPopup1.style.right = "0px"; // Slide in the popup
    }
  });

  greenAddRowButton.addEventListener("click", function (e) {
    var target = e.target;
    let parentNode = target.parentNode.parentNode.parentNode;

    if (parentNode.classList.contains("new-container")) {
      id = parentNode.getAttribute("id");
      console.log("This is container id", id);
    }

    if (slidingPopup2.style.right === "0px") {
      slidingPopup2.style.right = "-420px"; // Slide out the popup
    } else {
      slidingPopup2.style.right = "0px"; // Slide in the popup
    }
  });

  greenAdvanceButton.addEventListener("click", function () {
    gearElement();
  });
  greenCloneButton.addEventListener("click", function () {
    greenClone(width);
  });
}

function configDragDrop() {
  const customDragnDrop = new CustomDragAndDrop();
  customDragnDrop.init();
  console.log("customDragnDropInitialized=true");
  customDragnDrop.loadSections();
  console.log("we loaded the Sections");
  customDragnDropInitialized = true;
}

function createRowSection() {
  var rowSection = document.createElement("div");
  rowSection.classList.add("row-section");

  var blueRolloverTools = document.createElement("div");
  blueRolloverTools.classList.add(
    "de-rollover-tools",
    "smallWidthElementHover",
    "d-flex",
    "flex-column"
  );

  blueRolloverTools.setAttribute("data-current-id", "nill");
  blueRolloverTools.setAttribute("data-current-type", "type");
  blueRolloverTools.style.display = "none";

  var blueArrowRolloverTools = document.createElement("div");
  blueArrowRolloverTools.classList.add(
    "arrow-de-rollover-tools",
    "smallWidthElementHover",
    "d-flex",
    "flex-column"
  );
  blueArrowRolloverTools.setAttribute("data-current-id", "nill");
  blueArrowRolloverTools.setAttribute("data-current-type", "type");
  blueArrowRolloverTools.style.display = "none";

  var bluePlusRolloverTools = document.createElement("div");
  bluePlusRolloverTools.classList.add(
    "plus-de-rollover-tools",
    "smallWidthElementHover",
    "d-flex",
    "flex-column"
  );
  bluePlusRolloverTools.setAttribute("data-current-id", "nill");
  bluePlusRolloverTools.setAttribute("data-current-type", "type");
  bluePlusRolloverTools.style.display = "none";

  var blueMoveButton = document.createElement("div");
  blueMoveButton.classList.add("de-rollover-move");
  blueMoveButton.style.backgroundColor = "#3a85ff";
  blueMoveButton.style.display = "none";
  blueMoveButton.style.zIndex = "10";
  blueMoveButton.innerHTML = '<i class="fa fa-arrows"></i>';
  blueMoveButton.style.cursor = "move";

  var blueRemoveButton = document.createElement("div");
  blueRemoveButton.classList.add("de-rollover-remove");
  blueRemoveButton.style.backgroundColor = "#3a85ff";
  blueRemoveButton.style.display = "none";
  blueRemoveButton.style.zIndex = "10";
  blueRemoveButton.innerHTML = '<i class="fa fa-trash"></i>';
  blueRemoveButton.setAttribute("type", "button");
  blueRemoveButton.setAttribute(
    "onclick",
    "removeElement(this.parentElement.parentElement)"
  );

  var blueArrowUpButton = document.createElement("div");
  blueArrowUpButton.classList.add("de-rollover-arrow-up");
  blueArrowUpButton.style.backgroundColor = "#3a85ff";
  blueArrowUpButton.style.display = "none";
  blueArrowUpButton.style.zIndex = "10";
  blueArrowUpButton.innerHTML = '<i class="fa fa-arrow-up"></i>';
  blueArrowUpButton.setAttribute("type", "button");
  blueArrowUpButton.setAttribute(
    "onclick",
    "rowMoveUp(this.parentElement.parentElement.parentElement)"
  );

  var blueArrowDownButton = document.createElement("div");
  blueArrowDownButton.classList.add("de-rollover-arrow-down");
  blueArrowDownButton.style.backgroundColor = "#3a85ff";
  blueArrowDownButton.style.display = "none";
  blueArrowDownButton.style.zIndex = "10";
  blueArrowDownButton.innerHTML = '<i class="fa fa-arrow-down"></i>';
  blueArrowDownButton.setAttribute("type", "button");
  blueArrowDownButton.setAttribute(
    "onclick",
    "rowMoveDown(this.parentElement.parentElement.parentElement)"
  );

  var blueCloneButton = document.createElement("div");
  blueCloneButton.classList.add("de-rollover-clone");
  blueCloneButton.style.backgroundColor = "#3a85ff";
  blueCloneButton.style.zIndex = "10";
  blueCloneButton.style.display = "none";
  blueCloneButton.innerHTML = '<i class="fa fa-copy"></i>';
  blueCloneButton.setAttribute("type", "button");

  var blueGearButton = document.createElement("div");
  blueGearButton.classList.add("de-rollover-settings");
  blueGearButton.style.backgroundColor = "#3a85ff";
  blueGearButton.style.zIndex = "10";
  blueGearButton.style.display = "none";
  blueGearButton.innerHTML = '<i class="fa fa-cog"></i>';
  blueGearButton.setAttribute("type", "button");
  blueGearButton.setAttribute("onclick", "gearElement()");

  var bluePlusCircle = document.createElement("div");
  bluePlusCircle.classList.add("de-rollover-plus-circle");
  bluePlusCircle.style.backgroundColor = "#3a85ff";
  bluePlusCircle.style.display = "none";
  bluePlusCircle.setAttribute("type", "button");
  bluePlusCircle.style.zIndex = "10";
  bluePlusCircle.style.position = "relative";
  bluePlusCircle.style.left = "-50%";
  bluePlusCircle.innerHTML = '<i class="fa fa-plus"></i>';
  bluePlusCircle.setAttribute("type", "button");
  bluePlusCircle.setAttribute("onclick", "openSlidingPopup2()");

  rowSection.appendChild(blueRolloverTools);
  rowSection.appendChild(blueArrowRolloverTools);
  rowSection.appendChild(bluePlusRolloverTools);
  blueRolloverTools.appendChild(blueMoveButton);
  blueRolloverTools.appendChild(blueCloneButton);
  blueRolloverTools.appendChild(blueRemoveButton);
  blueArrowRolloverTools.appendChild(blueArrowUpButton);
  blueArrowRolloverTools.appendChild(blueArrowDownButton);
  blueArrowRolloverTools.appendChild(blueGearButton);
  bluePlusRolloverTools.appendChild(bluePlusCircle);

  rowSection.addEventListener("mouseenter", (e) => {
    for (let i = 0; i < 4; i++) {
      rowSection.parentNode.childNodes[0].childNodes[i].style.display = "none";
    }
    for (let i = 0; i < 2; i++) {
      rowSection.parentNode.childNodes[1].childNodes[i].style.display = "none";
    }
    rowSection.parentNode.childNodes[2].childNodes[0].style.display = "none";
    blueRolloverTools.style.display = "block";
    blueArrowRolloverTools.style.display = "block";
    bluePlusRolloverTools.style.display = "block";
    blueMoveButton.style.display = "block";
    blueCloneButton.style.display = "block";
    blueRemoveButton.style.display = "block";
    blueArrowUpButton.style.display = "block";
    blueArrowDownButton.style.display = "block";
    blueGearButton.style.display = "block";
    bluePlusCircle.style.display = "block";
    rowSection.parentNode.style.border = "none";
    rowSection.style.border = "1px solid #3a85ff";
  });

  rowSection.addEventListener("mouseleave", (e) => {
    for (let i = 0; i < 4; i++) {
      rowSection.parentNode.childNodes[0].childNodes[i].style.display = "block";
    }
    for (let i = 0; i < 2; i++) {
      rowSection.parentNode.childNodes[1].childNodes[i].style.display = "block";
    }
    rowSection.parentNode.childNodes[2].childNodes[0].style.display = "block";
    blueRolloverTools.style.display = "none";
    blueArrowRolloverTools.style.display = "none";
    bluePlusRolloverTools.style.display = "none";
    blueMoveButton.style.display = "none";
    blueCloneButton.style.display = "none";
    blueRemoveButton.style.display = "none";
    blueArrowUpButton.style.display = "none";
    blueArrowDownButton.style.display = "none";
    blueGearButton.style.display = "none";
    bluePlusCircle.style.display = "none";
    rowSection.parentNode.style.border = "1px solid #37ca37";
    rowSection.style.border = "none";
  });
  bluePlusCircle.addEventListener("click", function () {
    if (slidingPopup2.style.right === "0px") {
      slidingPopup2.style.right = "-420px"; // Slide out the popup
    } else {
      slidingPopup2.style.right = "0px"; // Slide in the popup
    }
  });
  blueCloneButton.addEventListener("click", function () {
    var colDivNumber = rowSection.children.length - 3;
    console.log("This is col div number", colDivNumber);
    if (colDivNumber == 1) {
      settingRow1.click();
    } else if (colDivNumber == 2) {
      settingRow2.click();
    } else if (colDivNumber == 3) {
      settingRow3.click();
    } else if (colDivNumber == 4) {
      settingRow4.click();
    } else if (colDivNumber == 5) {
      settingRow5.click();
    } else if (colDivNumber == 6) {
      settingRow6.click();
    }
  });
  return rowSection;
}

function createDivCol1() {
  var divCol1 = document.createElement("div");
  divCol1.classList.add("col-div");
  divCol1.style.width = "100%";
  divCol1.style.borderRight = "none";
  return divCol1;
}
function createDivCol2() {
  var divCol2 = document.createElement("div");
  divCol2.classList.add("col-div");
  divCol2.style.width = "50%";
  return divCol2;
}
function createDivCol3() {
  var divCol3 = document.createElement("div");
  divCol3.style.width = "33.3%";
  divCol3.classList.add("col-div");
  return divCol3;
}
function createDivCol4() {
  var divCol4 = document.createElement("div");
  divCol4.style.width = "25%";
  divCol4.classList.add("col-div");
  return divCol4;
}
function createDivCol5() {
  var divCol5 = document.createElement("div");
  divCol5.style.width = "20%";
  divCol5.classList.add("col-div");
  return divCol5;
}
function createDivCol6() {
  var divCol6 = document.createElement("div");
  divCol6.style.width = "16.6%";
  divCol6.classList.add("col-div");
  return divCol6;
}

//Add Row Setting
settingRow1.addEventListener("click", function (e) {
  e.preventDefault();
  var rowSection = createRowSection();
  container = document.getElementById(id);
  container.appendChild(rowSection);
  var divCol1 = createDivCol1();
  rowSection.appendChild(divCol1);
  slidingPopup2.style.right = "-420px";
  configDragDrop();
});
settingRow2.addEventListener("click", function (e) {
  e.preventDefault();
  var rowSection = createRowSection();
  container = document.getElementById(id);
  container.appendChild(rowSection);
  var divCol2 = createDivCol2();
  var divCol2_1 = createDivCol2();
  rowSection.appendChild(divCol2);
  rowSection.appendChild(divCol2_1);

  slidingPopup2.style.right = "-420px";
  rowSection.addEventListener("mouseenter", (e) => {
    divCol2.style.borderRight = "1px dotted #3a85ff";
    divCol2Boundary.style.display = "block";
  });
  rowSection.addEventListener("mouseleave", (e) => {
    divCol2.style.borderRight = "none";
    divCol2Boundary.style.display = "none";
  });

  // setting resize
  var divCol2Boundary = document.createElement("div");
  divCol2Boundary.classList.add("div-boundary");
  divCol2.appendChild(divCol2Boundary);

  var isResizing = false;
  var lastX;
  var resizingBoundary;
  var columnSize = rowSection.offsetWidth / 12;
  var columnNumber1;
  var columnNumber2;

  divCol2Boundary.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol2Boundary";
  });
  document.addEventListener("mousemove", function (e) {
    if (isResizing) {
      var offset = e.clientX - lastX;
      if (resizingBoundary === "divCol2Boundary") {
        var newWidth1 = divCol2.offsetWidth + offset;
        var newWidth2 = divCol2_1.offsetWidth - offset;
        divCol2.style.width = newWidth1 + "px";
        divCol2_1.style.width = newWidth2 + "px";
        columnNumber1 = Math.round(newWidth1 / columnSize);
        columnNumber2 = Math.round(newWidth2 / columnSize);
      }
      lastX = e.clientX;
    }
  });
  document.addEventListener("mouseup", function () {
    isResizing = false;
    divCol2.style.width = columnNumber1 * columnSize + "px";
    divCol2_1.style.width = columnNumber2 * columnSize + "px";
  });
  configDragDrop();
});

settingRow3.addEventListener("click", function (e) {
  e.preventDefault();
  var rowSection = createRowSection();
  container = document.getElementById(id);
  container.appendChild(rowSection);
  var divCol3 = createDivCol3();
  var divCol3_1 = createDivCol3();
  var divCol3_2 = createDivCol3();
  rowSection.appendChild(divCol3);
  rowSection.appendChild(divCol3_1);
  rowSection.appendChild(divCol3_2);
  slidingPopup2.style.right = "-420px";
  rowSection.addEventListener("mouseenter", (e) => {
    divCol3.style.borderRight = "1px dotted #3a85ff";
    divCol3_1.style.borderRight = "1px dotted #3a85ff";
    divCol3Boundary1.style.display = "block";
    divCol3Boundary2.style.display = "block";
  });
  rowSection.addEventListener("mouseleave", (e) => {
    divCol3.style.borderRight = "none";
    divCol3_1.style.borderRight = "none";
    divCol3Boundary1.style.display = "none";
    divCol3Boundary2.style.display = "none";
  });

  // setting resize
  var divCol3Boundary1 = document.createElement("div");
  divCol3Boundary1.classList.add("div-boundary");
  divCol3.appendChild(divCol3Boundary1);
  var divCol3Boundary2 = document.createElement("div");
  divCol3Boundary2.classList.add("div-boundary");
  divCol3_1.appendChild(divCol3Boundary2);
  var isResizing = false;
  var lastX;
  var resizingBoundary;
  divCol3Boundary1.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol3Boundary1";
  });
  divCol3Boundary2.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol3Boundary2";
  });
  var columnSize = rowSection.offsetWidth / 12;
  var columnNumber1;
  var columnNumber2;
  var columnNumber3;
  document.addEventListener("mousemove", function (e) {
    if (isResizing) {
      var offset = e.clientX - lastX;

      if (resizingBoundary === "divCol3Boundary1") {
        var newWidth1 = divCol3.offsetWidth + offset;
        var newWidth2 = divCol3_1.offsetWidth - offset;
        divCol3.style.width = newWidth1 + "px";
        divCol3_1.style.width = newWidth2 + "px";

        columnNumber1 = Math.round(newWidth1 / columnSize);
        columnNumber2 = Math.round(newWidth2 / columnSize);
      } else if (resizingBoundary === "divCol3Boundary2") {
        var newWidth1 = divCol3_1.offsetWidth + offset;
        var newWidth2 = divCol3_2.offsetWidth - offset;
        divCol3_1.style.width = newWidth1 + "px";
        divCol3_2.style.width = newWidth2 + "px";
        columnNumber2 = Math.round(newWidth1 / columnSize);
        columnNumber3 = Math.round(newWidth2 / columnSize);
      }

      lastX = e.clientX;
    }
  });
  document.addEventListener("mouseup", function () {
    isResizing = false;
    divCol3.style.width = columnNumber1 * columnSize + "px";
    divCol3_1.style.width = columnNumber2 * columnSize + "px";
    divCol3_2.style.width = columnNumber3 * columnSize + "px";
  });
  configDragDrop();
});
settingRow4.addEventListener("click", function (e) {
  e.preventDefault();
  var rowSection = createRowSection();
  container = document.getElementById(id);
  container.appendChild(rowSection);
  var divCol4 = createDivCol4();
  var divCol4_1 = createDivCol4();
  var divCol4_2 = createDivCol4();
  var divCol4_3 = createDivCol4();
  rowSection.appendChild(divCol4);
  rowSection.appendChild(divCol4_1);
  rowSection.appendChild(divCol4_2);
  rowSection.appendChild(divCol4_3);
  slidingPopup2.style.right = "-420px";
  rowSection.addEventListener("mouseenter", (e) => {
    divCol4.style.borderRight = "1px dotted #3a85ff";
    divCol4_1.style.borderRight = "1px dotted #3a85ff";
    divCol4_2.style.borderRight = "1px dotted #3a85ff";
    divCol4Boundary1.style.display = "block";
    divCol4Boundary2.style.display = "block";
    divCol4Boundary3.style.display = "block";
  });
  rowSection.addEventListener("mouseleave", (e) => {
    divCol4.style.borderRight = "none";
    divCol4_1.style.borderRight = "none";
    divCol4_2.style.borderRight = "none";
    divCol4Boundary1.style.display = "none";
    divCol4Boundary2.style.display = "none";
    divCol4Boundary3.style.display = "none";
  });

  // setting resize
  var divCol4Boundary1 = document.createElement("div");
  divCol4Boundary1.classList.add("div-boundary");
  divCol4.appendChild(divCol4Boundary1);
  var divCol4Boundary2 = document.createElement("div");
  divCol4Boundary2.classList.add("div-boundary");
  divCol4_1.appendChild(divCol4Boundary2);
  var divCol4Boundary3 = document.createElement("div");
  divCol4Boundary3.classList.add("div-boundary");
  divCol4_2.appendChild(divCol4Boundary3);
  var isResizing = false;
  var lastX;
  var resizingBoundary;
  var columnSize = rowSection.offsetWidth / 12;
  var columnNumber1;
  var columnNumber2;
  var columnNumber3;
  var columnNumber4;
  divCol4Boundary1.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol4Boundary1";
  });
  divCol4Boundary2.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol4Boundary2";
  });
  divCol4Boundary3.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol4Boundary3";
  });
  document.addEventListener("mousemove", function (e) {
    if (isResizing) {
      var offset = e.clientX - lastX;
      if (resizingBoundary === "divCol4Boundary1") {
        var newWidth1 = divCol4.offsetWidth + offset;
        var newWidth2 = divCol4_1.offsetWidth - offset;
        divCol4.style.width = newWidth1 + "px";
        divCol4_1.style.width = newWidth2 + "px";
        columnNumber1 = Math.round(newWidth1 / columnSize);
        columnNumber2 = Math.round(newWidth2 / columnSize);
      } else if (resizingBoundary === "divCol4Boundary2") {
        var newWidth1 = divCol4_1.offsetWidth + offset;
        var newWidth2 = divCol4_2.offsetWidth - offset;
        divCol4_1.style.width = newWidth1 + "px";
        divCol4_2.style.width = newWidth2 + "px";
        columnNumber2 = Math.round(newWidth1 / columnSize);
        columnNumber3 = Math.round(newWidth2 / columnSize);
      } else if (resizingBoundary === "divCol4Boundary3") {
        var newWidth1 = divCol4_2.offsetWidth + offset;
        var newWidth2 = divCol4_3.offsetWidth - offset;
        divCol4_2.style.width = newWidth1 + "px";
        divCol4_3.style.width = newWidth2 + "px";
        columnNumber3 = Math.round(newWidth1 / columnSize);
        columnNumber4 = Math.round(newWidth2 / columnSize);
      }
      lastX = e.clientX;
    }
  });
  document.addEventListener("mouseup", function () {
    isResizing = false;
    divCol4.style.width = columnNumber1 * columnSize + "px";
    divCol4_1.style.width = columnNumber2 * columnSize + "px";
    divCol4_2.style.width = columnNumber3 * columnSize + "px";
    divCol4_3.style.width = columnNumber4 * columnSize + "px";
  });

  configDragDrop();
});
settingRow5.addEventListener("click", function (e) {
  e.preventDefault();
  var rowSection = createRowSection();
  container = document.getElementById(id);
  container.appendChild(rowSection);
  var divCol5 = createDivCol5();
  var divCol5_1 = createDivCol5();
  var divCol5_2 = createDivCol5();
  var divCol5_3 = createDivCol5();
  var divCol5_4 = createDivCol5();

  rowSection.appendChild(divCol5);
  rowSection.appendChild(divCol5_1);
  rowSection.appendChild(divCol5_2);
  rowSection.appendChild(divCol5_3);
  rowSection.appendChild(divCol5_4);
  slidingPopup2.style.right = "-420px";
  rowSection.addEventListener("mouseenter", (e) => {
    divCol5.style.borderRight = "1px dotted #3a85ff";
    divCol5_1.style.borderRight = "1px dotted #3a85ff";
    divCol5_2.style.borderRight = "1px dotted #3a85ff";
    divCol5_3.style.borderRight = "1px dotted #3a85ff";
    divCol5Boundary1.style.display = "block";
    divCol5Boundary2.style.display = "block";
    divCol5Boundary3.style.display = "block";
    divCol5Boundary4.style.display = "block";
  });
  rowSection.addEventListener("mouseleave", (e) => {
    divCol5.style.borderRight = "none";
    divCol5_1.style.borderRight = "none";
    divCol5_2.style.borderRight = "none";
    divCol5_3.style.borderRight = "none";
    divCol5Boundary1.style.display = "none";
    divCol5Boundary2.style.display = "none";
    divCol5Boundary3.style.display = "none";
    divCol5Boundary4.style.display = "none";
  });

  // setting resize
  var divCol5Boundary1 = document.createElement("div");
  divCol5Boundary1.classList.add("div-boundary");
  divCol5.appendChild(divCol5Boundary1);
  var divCol5Boundary2 = document.createElement("div");
  divCol5Boundary2.classList.add("div-boundary");
  divCol5_1.appendChild(divCol5Boundary2);
  var divCol5Boundary3 = document.createElement("div");
  divCol5Boundary3.classList.add("div-boundary");
  divCol5_2.appendChild(divCol5Boundary3);
  var divCol5Boundary4 = document.createElement("div");
  divCol5Boundary4.classList.add("div-boundary");
  divCol5_3.appendChild(divCol5Boundary4);
  var isResizing = false;
  var lastX;
  var resizingBoundary;
  var columnSize = rowSection.offsetWidth / 12;
  var columnNumber1;
  var columnNumber2;
  var columnNumber3;
  var columnNumber4;
  var columnNumber5;
  divCol5Boundary1.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol5Boundary1";
  });
  divCol5Boundary2.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol5Boundary2";
  });
  divCol5Boundary3.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol5Boundary3";
  });
  divCol5Boundary4.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol5Boundary4";
  });
  document.addEventListener("mousemove", function (e) {
    if (isResizing) {
      var offset = e.clientX - lastX;
      if (resizingBoundary === "divCol5Boundary1") {
        var newWidth1 = divCol5.offsetWidth + offset;
        var newWidth2 = divCol5_1.offsetWidth - offset;
        divCol5.style.width = newWidth1 + "px";
        divCol5_1.style.width = newWidth2 + "px";
        columnNumber1 = Math.round(newWidth1 / columnSize);
        columnNumber2 = Math.round(newWidth2 / columnSize);
      } else if (resizingBoundary === "divCol5Boundary2") {
        var newWidth1 = divCol5_1.offsetWidth + offset;
        var newWidth2 = divCol5_2.offsetWidth - offset;
        divCol5_1.style.width = newWidth1 + "px";
        divCol5_2.style.width = newWidth2 + "px";
        columnNumber2 = Math.round(newWidth1 / columnSize);
        columnNumber3 = Math.round(newWidth2 / columnSize);
      } else if (resizingBoundary === "divCol5Boundary3") {
        var newWidth1 = divCol5_2.offsetWidth + offset;
        var newWidth2 = divCol5_3.offsetWidth - offset;
        divCol5_2.style.width = newWidth1 + "px";
        divCol5_3.style.width = newWidth2 + "px";
        columnNumber3 = Math.round(newWidth1 / columnSize);
        columnNumber4 = Math.round(newWidth2 / columnSize);
      } else if (resizingBoundary === "divCol5Boundary4") {
        var newWidth1 = divCol5_3.offsetWidth + offset;
        var newWidth2 = divCol5_4.offsetWidth - offset;
        divCol5_3.style.width = newWidth1 + "px";
        divCol5_4.style.width = newWidth2 + "px";
        columnNumber4 = Math.round(newWidth1 / columnSize);
        columnNumber5 = Math.round(newWidth2 / columnSize);
      }
      lastX = e.clientX;
    }
  });
  document.addEventListener("mouseup", function () {
    isResizing = false;
    divCol5.style.width = columnNumber1 * columnSize + "px";
    divCol5_1.style.width = columnNumber2 * columnSize + "px";
    divCol5_2.style.width = columnNumber3 * columnSize + "px";
    divCol5_3.style.width = columnNumber4 * columnSize + "px";
    divCol5_4.style.width = columnNumber5 * columnSize + "px";
  });

  configDragDrop();
});
settingRow6.addEventListener("click", function (e) {
  e.preventDefault();
  var rowSection = createRowSection();
  container = document.getElementById(id);
  container.appendChild(rowSection);
  var divCol6 = createDivCol6();
  var divCol6_1 = createDivCol6();
  var divCol6_2 = createDivCol6();
  var divCol6_3 = createDivCol6();
  var divCol6_4 = createDivCol6();
  var divCol6_5 = createDivCol6();
  rowSection.appendChild(divCol6);
  rowSection.appendChild(divCol6_1);
  rowSection.appendChild(divCol6_2);
  rowSection.appendChild(divCol6_3);
  rowSection.appendChild(divCol6_4);
  rowSection.appendChild(divCol6_5);
  slidingPopup2.style.right = "-420px";
  rowSection.addEventListener("mouseenter", (e) => {
    divCol6.style.borderRight = "1px dotted #3a85ff";
    divCol6_1.style.borderRight = "1px dotted #3a85ff";
    divCol6_2.style.borderRight = "1px dotted #3a85ff";
    divCol6_3.style.borderRight = "1px dotted #3a85ff";
    divCol6_4.style.borderRight = "1px dotted #3a85ff";
    divCol6Boundary1.style.display = "block";
    divCol6Boundary2.style.display = "block";
    divCol6Boundary3.style.display = "block";
    divCol6Boundary4.style.display = "block";
    divCol6Boundary5.style.display = "block";
  });
  rowSection.addEventListener("mouseleave", (e) => {
    divCol6.style.borderRight = "none";
    divCol6_1.style.borderRight = "none";
    divCol6_2.style.borderRight = "none";
    divCol6_3.style.borderRight = "none";
    divCol6_4.style.borderRight = "none";
    divCol6Boundary1.style.display = "none";
    divCol6Boundary2.style.display = "none";
    divCol6Boundary3.style.display = "none";
    divCol6Boundary4.style.display = "none";
    divCol6Boundary5.style.display = "none";
  });

  // setting resize
  var divCol6Boundary1 = document.createElement("div");
  divCol6Boundary1.classList.add("div-boundary");
  divCol6.appendChild(divCol6Boundary1);
  var divCol6Boundary2 = document.createElement("div");
  divCol6Boundary2.classList.add("div-boundary");
  divCol6_1.appendChild(divCol6Boundary2);
  var divCol6Boundary3 = document.createElement("div");
  divCol6Boundary3.classList.add("div-boundary");
  divCol6_2.appendChild(divCol6Boundary3);
  var divCol6Boundary4 = document.createElement("div");
  divCol6Boundary4.classList.add("div-boundary");
  divCol6_3.appendChild(divCol6Boundary4);
  var divCol6Boundary5 = document.createElement("div");
  divCol6Boundary5.classList.add("div-boundary");
  divCol6_4.appendChild(divCol6Boundary5);
  var isResizing = false;
  var lastX;
  var resizingBoundary;
  var columnSize = rowSection.offsetWidth / 12;
  var columnNumber1;
  var columnNumber2;
  var columnNumber3;
  var columnNumber4;
  var columnNumber5;
  var columnNumber6;
  divCol6Boundary1.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol6Boundary1";
  });
  divCol6Boundary2.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol6Boundary2";
  });
  divCol6Boundary3.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol6Boundary3";
  });
  divCol6Boundary4.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol6Boundary4";
  });
  divCol6Boundary5.addEventListener("mousedown", function (e) {
    isResizing = true;
    lastX = e.clientX;
    resizingBoundary = "divCol6Boundary5";
  });
  document.addEventListener("mousemove", function (e) {
    if (isResizing) {
      var offset = e.clientX - lastX;
      if (resizingBoundary === "divCol6Boundary1") {
        var newWidth1 = divCol6.offsetWidth + offset;
        var newWidth2 = divCol6_1.offsetWidth - offset;
        divCol6.style.width = newWidth1 + "px";
        divCol6_1.style.width = newWidth2 + "px";
        columnNumber1 = Math.round(newWidth1 / columnSize);
        columnNumber2 = Math.round(newWidth2 / columnSize);
      } else if (resizingBoundary === "divCol6Boundary2") {
        var newWidth1 = divCol6_1.offsetWidth + offset;
        var newWidth2 = divCol6_2.offsetWidth - offset;
        divCol6_1.style.width = newWidth1 + "px";
        divCol6_2.style.width = newWidth2 + "px";
        columnNumber2 = Math.round(newWidth1 / columnSize);
        columnNumber3 = Math.round(newWidth2 / columnSize);
      } else if (resizingBoundary === "divCol6Boundary3") {
        var newWidth1 = divCol6_2.offsetWidth + offset;
        var newWidth2 = divCol6_3.offsetWidth - offset;
        divCol6_2.style.width = newWidth1 + "px";
        divCol6_3.style.width = newWidth2 + "px";
        columnNumber3 = Math.round(newWidth1 / columnSize);
        columnNumber4 = Math.round(newWidth2 / columnSize);
      } else if (resizingBoundary === "divCol6Boundary4") {
        var newWidth1 = divCol6_3.offsetWidth + offset;
        var newWidth2 = divCol6_4.offsetWidth - offset;
        divCol6_3.style.width = newWidth1 + "px";
        divCol6_4.style.width = newWidth2 + "px";
        columnNumber4 = Math.round(newWidth1 / columnSize);
        columnNumber5 = Math.round(newWidth2 / columnSize);
      } else if (resizingBoundary === "divCol6Boundary5") {
        var newWidth1 = divCol6_4.offsetWidth + offset;
        var newWidth2 = divCol6_5.offsetWidth - offset;
        divCol6_4.style.width = newWidth1 + "px";
        divCol6_5.style.width = newWidth2 + "px";
        columnNumber5 = Math.round(newWidth1 / columnSize);
        columnNumber6 = Math.round(newWidth2 / columnSize);
      }
      lastX = e.clientX;
    }
  });
  document.addEventListener("mouseup", function () {
    isResizing = false;
    divCol6.style.width = columnNumber1 * columnSize + "px";
    divCol6_1.style.width = columnNumber2 * columnSize + "px";
    divCol6_2.style.width = columnNumber3 * columnSize + "px";
    divCol6_3.style.width = columnNumber4 * columnSize + "px";
    divCol6_4.style.width = columnNumber5 * columnSize + "px";
    divCol6_5.style.width = columnNumber6 * columnSize + "px";
  });

  configDragDrop();
});

function setFormat(command) {
  document.execCommand(command, false, null);
}
function setAlignment(align) {
  document.execCommand("justify" + align, false, null);
}

function setLink() {
  var url = prompt("Enter the URL:");
  document.execCommand("createLink", false, url);
}
function moveUp(element) {
  if (element.previousElementSibling) {
    element.parentNode.insertBefore(element, element.previousElementSibling); // insert element before the previous sibling
  }
}

function moveDown(element) {
  if (element.nextElementSibling) {
    element.parentNode.insertBefore(
      element,
      element.nextElementSibling.nextElementSibling
    );
  }
}
function rowMoveUp(element) {
  if (element.previousElementSibling) {
    element.parentNode.insertBefore(element, element.previousElementSibling); // insert element before the previous sibling
  }
}

function rowMoveDown(element) {
  if (element.nextElementSibling) {
    element.parentNode.insertBefore(
      element,
      element.nextElementSibling.nextElementSibling
    );
  }
}

function removeElement(element) {
  element.parentNode.removeChild(element);
}
function greenClone(width) {
  createContainer(width);
}

function gearElement() {
  if (settingsSidebar.style.left === "0px") {
    settingsSidebar.style.left = "-100%"; // Slide out the popup
  } else {
    settingsSidebar.style.left = "0px"; // Slide in the popup
  }
}
function createEditTextRolloverTools() {
  var editTextRolloverTools = document.createElement("div");
  editTextRolloverTools.classList.add(
    "text-de-rollover-tools",
    "smallWidthElementHover",
    "d-flex"
  );
  editTextRolloverTools.setAttribute("data-current-id", "nill");
  editTextRolloverTools.setAttribute("data-current-type", "type");
  editTextRolloverTools.style.display = "none";

  var editBoldButton = document.createElement("div");
  editBoldButton.classList.add("de-rollover-bold");
  editBoldButton.style.display = "none";
  editBoldButton.innerHTML = '<i class="fa fa-bold"></i>';
  editBoldButton.setAttribute("onclick", "setFormat('bold')");
  var editItalicButton = document.createElement("div");
  editItalicButton.classList.add("de-rollover-italic");
  editItalicButton.style.display = "none";
  editItalicButton.innerHTML = '<i class="fa fa-italic"></i>';
  editItalicButton.setAttribute("onclick", "setFormat('italic')");
  var editUnderlineButton = document.createElement("div");
  editUnderlineButton.classList.add("de-rollover-underline");
  editUnderlineButton.style.display = "none";
  editUnderlineButton.innerHTML = '<i class="fa fa-underline"></i>';
  editUnderlineButton.setAttribute("onclick", "setFormat('underline')");
  var editStrikeButton = document.createElement("div");
  editStrikeButton.classList.add("de-rollover-strike");
  editStrikeButton.style.display = "none";
  editStrikeButton.innerHTML = '<i class="fa fa-strikethrough"></i>';
  editStrikeButton.setAttribute("onclick", "setFormat('strikeThrough')");
  var editLeftButton = document.createElement("div");
  editLeftButton.classList.add("de-rollover-left");
  editLeftButton.style.display = "none";
  editLeftButton.innerHTML = '<i class="fa fa-align-left"></i>';
  editLeftButton.setAttribute("onclick", "setAlignment('left')");
  var editCenterButton = document.createElement("div");
  editCenterButton.classList.add("de-rollover-center");
  editCenterButton.style.display = "none";
  editCenterButton.innerHTML = '<i class="fa fa-align-center"></i>';
  editCenterButton.setAttribute("onclick", "setAlignment('center')");
  var editRightButton = document.createElement("div");
  editRightButton.classList.add("de-rollover-right");
  editRightButton.style.display = "none";
  editRightButton.innerHTML = '<i class="fa fa-align-right"></i>';
  editRightButton.setAttribute("onclick", "setAlignment('right')");
  var editLinkButton = document.createElement("div");
  editLinkButton.classList.add("de-rollover-link");
  editLinkButton.style.display = "none";
  editLinkButton.innerHTML = '<i class="fa fa-link"></i>';
  editLinkButton.setAttribute("onclick", "setLink()");

  editTextRolloverTools.appendChild(editBoldButton);
  editTextRolloverTools.appendChild(editItalicButton);
  editTextRolloverTools.appendChild(editUnderlineButton);
  editTextRolloverTools.appendChild(editStrikeButton);
  editTextRolloverTools.appendChild(editLeftButton);
  editTextRolloverTools.appendChild(editCenterButton);
  editTextRolloverTools.appendChild(editRightButton);
  editTextRolloverTools.appendChild(editLinkButton);

  return editTextRolloverTools;
}
function createOrangeRolloverTools() {
  var orangeRolloverTools = document.createElement("div");
  orangeRolloverTools.classList.add(
    "orange-de-rollover-tools",
    "smallWidthElementHover",
    "d-flex"
  );
  orangeRolloverTools.setAttribute("data-current-id", "nill");
  orangeRolloverTools.setAttribute("data-current-type", "type");
  orangeRolloverTools.style.display = "none";

  var orangeMoveButton = document.createElement("div");
  orangeMoveButton.classList.add("de-rollover-move");
  orangeMoveButton.style.display = "none";
  orangeMoveButton.style.padding = "0 5px";
  orangeMoveButton.innerHTML = '<i class="fa fa-arrows"></i>';
  orangeMoveButton.style.cursor = "move";

  // var orangeCloneButton = document.createElement("div");
  // orangeCloneButton.classList.add("de-rollover-clone");
  // orangeCloneButton.style.display = 'none';
  // orangeCloneButton.style.padding = '0 5px';
  // orangeCloneButton.innerHTML = '<i class="fa fa-copy"></i>';
  // orangeCloneButton.setAttribute("type", "button");

  var orangeGearButton = document.createElement("div");
  orangeGearButton.classList.add("de-rollover-settings");
  orangeGearButton.style.display = "none";
  orangeGearButton.style.padding = "0 5px";
  orangeGearButton.innerHTML = '<i class="fa fa-cog"></i>';
  orangeGearButton.setAttribute("type", "button");

  var orangeRemoveButton = document.createElement("div");
  orangeRemoveButton.classList.add("de-rollover-remove");
  orangeRemoveButton.style.display = "none";
  orangeRemoveButton.style.padding = "0 5px";
  orangeRemoveButton.innerHTML = '<i class="fa fa-trash"></i>';
  orangeRemoveButton.setAttribute("type", "button");
  orangeRemoveButton.setAttribute(
    "onclick",
    "removeElement(this.parentElement.parentElement)"
  );
  orangeRolloverTools.appendChild(orangeMoveButton);
  orangeRolloverTools.appendChild(orangeGearButton);
  orangeRolloverTools.appendChild(orangeRemoveButton);

  orangeGearButton.addEventListener("click", function () {
    gearElement();
  });

  return orangeRolloverTools;
}
function createOrangeArrowRolloverTools() {
  var orangeArrowRolloverTools = document.createElement("div");
  orangeArrowRolloverTools.classList.add(
    "orange-arrow-de-rollover-tools",
    "smallWidthElementHover",
    "d-flex"
  );
  orangeArrowRolloverTools.setAttribute("data-current-id", "nill");
  orangeArrowRolloverTools.setAttribute("data-current-type", "type");
  orangeArrowRolloverTools.style.display = "none";
  var orangeArrowUpButton = document.createElement("div");
  orangeArrowUpButton.classList.add("de-rollover-arrow-up");
  orangeArrowUpButton.style.backgroundColor = "orange";
  orangeArrowUpButton.style.display = "none";
  orangeArrowUpButton.style.padding = "0 5px";
  orangeArrowUpButton.innerHTML = '<i class="fa fa-arrow-up"></i>';
  orangeArrowUpButton.setAttribute("type", "button");
  orangeArrowUpButton.setAttribute(
    "onclick",
    "moveUp(this.parentElement.parentElement)"
  );

  var orangeArrowDownButton = document.createElement("div");
  orangeArrowDownButton.classList.add("de-rollover-arrow-down");
  orangeArrowDownButton.style.backgroundColor = "orange";
  orangeArrowDownButton.style.display = "none";
  orangeArrowDownButton.style.padding = "0 5px";
  orangeArrowDownButton.innerHTML = '<i class="fa fa-arrow-down"></i>';
  orangeArrowDownButton.setAttribute("type", "button");
  orangeArrowDownButton.setAttribute(
    "onclick",
    "moveDown(this.parentElement.parentElement)"
  );

  orangeArrowRolloverTools.appendChild(orangeArrowUpButton);
  orangeArrowRolloverTools.appendChild(orangeArrowDownButton);

  return orangeArrowRolloverTools;
}

function CustompPopUpDragAndDrop() {
  this.draggables = undefined;
  this.containers = undefined;
  this.placeholder = undefined;
  this.elementToInsert = undefined;
  this.afterElement = undefined;
  this.sectionCount = 0;
  this.mainContainer = undefined;
  this.popupContainer = undefined;
  this.existingElement = undefined;

  this.loadSections = function () {
    var popupContainer = document.getElementsByClassName("popup-container")[0];
    var allContainers = popupContainer.querySelectorAll(".editor-container");

    if (allContainers.length > 0) {
      allContainers.forEach((container) => {
        this.addEventListenersForContainer(container);
      });
      this.updateContainers();
    } else {
      // Handle the case when no elements with the class .editor-container are found.
      // You can choose to display an error message or take appropriate action here.
    }
  };

  this.addSection = function () {
    // Create a new section container
    let container = document.createElement("div");
    container.classList.add("editor-container", "new-section"); //p-3

    // Set the minimum height to 250px
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

  this.updateContainers = function () {
    this.containers = document.querySelectorAll(".editor-container");
  };
  this.updateDraggables = function () {
    this.draggables = document.querySelectorAll(".draggable");
  };
  this.addEventListeners = function (name) {
    // console.log("adding event listeners", this.containers, this.draggables);
    if (name === "containers" && this.containers) {
      this.containers.forEach((container) => {
        container.addEventListener("dragover", (e) =>
          this.onDragHover(e, container, false)
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
    } else if ("draggables" && this.draggables) {
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

    // console.log("draggables", this.draggables);
    // console.log("this.containers", this.containers);
  };
  this.removeEventListeners = function (name) {
    if (name === "col-div" && this.containers) {
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
  this.createPlaceHolder = function () {
    let placeholder = document.createElement("div");
    placeholder.style.height = "50px";
    placeholder.style.borderRadius = "5px";
    placeholder.style.backgroundColor = "#eee";
    placeholder.style.margin = "10px 0";
    this.placeholder = placeholder;
  };
  this.getDragAfterElement = function (container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return {
            offset: offset,
            element: child,
          };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
      }
    ).element;
  };

  this.onDragStart = function (e, draggable) {
    e.stopPropagation();
    let elementToInsert;
    console.log("drag start", draggable);
    // e.dataTransfer.setData('elementid',e.target.id);
    if (draggable && draggable.getAttribute("name")) {
      let element = draggable.getAttribute("name");

      // Create rollover tools div
      var rolloverTools = document.createElement("div");
      rolloverTools.classList.add(
        "de-rollover-tools",
        "smallWidthElementHover"
      );
      rolloverTools.setAttribute("data-current-id", "nill");
      rolloverTools.setAttribute("data-current-type", "type");
      rolloverTools.style.display = "none";

      // Add move, advance, clone, and remove buttons to rollover tools
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

      // Append the buttons to the rollover tools
      rolloverTools.appendChild(moveButton);
      rolloverTools.appendChild(advanceButton);
      rolloverTools.appendChild(cloneButton);
      rolloverTools.appendChild(removeButton);

      switch (element) {
        case "headline-field": // * HEADLINE *****************************************
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
          // wrapper.style.marginTop = '15px';
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
          // elementToInsert.dataset.bold = "inherit";
          elementToInsert.dataset.gramm = "false";
          elementToInsert.style.marginTop = "10px";
          elementToInsert.style.marginBottom = "10px";
          // elementToInsert.setAttribute('contenteditable', 'false');
          elementToInsert.setAttribute("contenteditable", "true");

          const bElement = document.createElement("b");
          bElement.textContent = "How To [GOOD] Without [BAD]";

          elementToInsert.appendChild(bElement);
          elementToInsert.setAttribute("id", `field-${Date.now()}`);

          elementToInsert.setAttribute("placeholder", "Text");

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          wrapper.appendChild(elementToInsert);
          wrapper.appendChild(orangeRolloverTools);
          wrapper.appendChild(orangeArrowRolloverTools);

          wrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            wrapper.style.borderColor = "orange"; // Change border color on mouseover
            wrapper.style.borderWidth = "1px";
            wrapper.style.position = "relative";
          });
          wrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            wrapper.style.borderColor = ""; // Reset border color on mouseout
            wrapper.style.borderWidth = "";
            wrapper.style.position = "unset";

            editTextRolloverTools.style.display = "none";
            for (let i = 0; i < 8; i++) {
              editTextRolloverTools.childNodes[i].style.display = "none";
            }
          });

          // Edit Text
          var editTextRolloverTools = createEditTextRolloverTools();

          wrapper.appendChild(editTextRolloverTools);

          wrapper.addEventListener("mousedown", (e) => {
            const boundingRect = wrapper.getBoundingClientRect();
            const width = boundingRect.width;
            const height = boundingRect.height;
            const x = e.clientX - boundingRect.left;
            const y = e.clientY - boundingRect.top;

            // Calculate 80% width and height range
            const minWidth = width * 0.1; // 10% from the left
            const maxWidth = width * 0.9; // 10% from the right
            const minHeight = height * 0.1; // 10% from the top
            const maxHeight = height * 0.9; // 10% from the bottom

            // Check if the click position is within the 80% center part
            if (
              x >= minWidth &&
              x <= maxWidth &&
              y >= minHeight &&
              y <= maxHeight
            ) {
              wrapper.style.border = "1px solid #777";
              for (let i = 0; i < 3; i++) {
                wrapper.childNodes[1].childNodes[i].style.display = "none";
              }
              for (let i = 0; i < 2; i++) {
                wrapper.childNodes[2].childNodes[i].style.display = "none";
              }
              editTextRolloverTools.style.display = "block";
              for (let i = 0; i < 8; i++) {
                editTextRolloverTools.childNodes[i].style.display = "block";
              }
            }
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
          // subheadWrapper.style.marginTop = '15px';
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
          //subheadElement.setAttribute('contenteditable', 'false');

          const subheadBElement = document.createElement("p");
          subheadBElement.textContent =
            "FREE: Brand New On-Demand Class Reveals ...";

          subheadElement.appendChild(subheadBElement);
          subheadElement.setAttribute("id", `field-${Date.now()}`);
          subheadElement.setAttribute("placeholder", "Subhead Text");

          // Add any additional styling or attributes for the subhead as needed

          subheadWrapper.appendChild(subheadElement);

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          subheadWrapper.appendChild(orangeRolloverTools);
          subheadWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          subheadWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            subheadWrapper.style.borderColor = "orange"; // Change border color on mouseover
            subheadWrapper.style.borderWidth = "1px";
            subheadWrapper.style.position = "relative";
          });

          subheadWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            subheadWrapper.style.borderColor = ""; // Reset border color on mouseout
            subheadWrapper.style.borderWidth = "";
            subheadWrapper.style.position = "unset";
            editTextRolloverTools.style.display = "none";
            for (let i = 0; i < 8; i++) {
              editTextRolloverTools.childNodes[i].style.display = "none";
            }
          });

          // Edit Text
          var editTextRolloverTools = createEditTextRolloverTools();

          subheadWrapper.appendChild(editTextRolloverTools);

          subheadWrapper.addEventListener("mousedown", (e) => {
            const boundingRect = subheadWrapper.getBoundingClientRect();
            const width = boundingRect.width;
            const height = boundingRect.height;
            const x = e.clientX - boundingRect.left;
            const y = e.clientY - boundingRect.top;

            // Calculate 80% width and height range
            const minWidth = width * 0.1; // 10% from the left
            const maxWidth = width * 0.9; // 10% from the right
            const minHeight = height * 0.1; // 10% from the top
            const maxHeight = height * 0.9; // 10% from the bottom

            // Check if the click position is within the 80% center part
            if (
              x >= minWidth &&
              x <= maxWidth &&
              y >= minHeight &&
              y <= maxHeight
            ) {
              subheadWrapper.style.border = "1px solid #777";
              for (let i = 0; i < 3; i++) {
                subheadWrapper.childNodes[1].childNodes[i].style.display =
                  "none";
              }
              for (let i = 0; i < 2; i++) {
                subheadWrapper.childNodes[2].childNodes[i].style.display =
                  "none";
              }
              editTextRolloverTools.style.display = "block";
              for (let i = 0; i < 8; i++) {
                editTextRolloverTools.childNodes[i].style.display = "block";
              }
            }
          });

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
          // paragraphWrapper.style.marginTop = '15px';
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
          // textElement.style.textAlign = 'center';
          textElement.style.fontSize = "20px";
          textElement.dataset.bold = "inherit";
          textElement.dataset.gramm = "false";
          // textElement.setAttribute('contenteditable', 'false');

          // const textPElement = document.createElement('p');
          textElement.textContent =
            "This Class Is Available Instantly ...No Waiting.";

          // textElement.appendChild(textPElement);
          textElement.setAttribute("id", `field-${Date.now()}`);
          textElement.setAttribute("placeholder", "Text");

          // Add any additional styling or attributes for the text element as needed

          paragraphWrapper.appendChild(textElement);

          this.elementToInsert = paragraphWrapper;
          this.existingElement = false;
          this.addEventListenerForText(paragraphWrapper);
          break;

        case "image-field":
          const imageWrapper = document.createElement("div");
          imageWrapper.classList.add(
            "draggable",
            "de",
            "elSubHeadlineWrapper",
            "ui-droppable",
            "de-editable"
          );
          imageWrapper.setAttribute("id", `image-${Date.now()}`);
          imageWrapper.setAttribute("data-de-type", "image");
          imageWrapper.setAttribute("data-de-editing", "false");
          imageWrapper.setAttribute("data-title", "image");
          imageWrapper.setAttribute("data-ce", "true");
          imageWrapper.setAttribute("data-trigger", "none");
          imageWrapper.setAttribute("data-animate", "fade");
          imageWrapper.setAttribute("data-delay", "500");
          // imageWrapper.style.marginTop = '15px';
          imageWrapper.style.outline = "none";
          imageWrapper.style.cursor = "pointer";
          imageWrapper.setAttribute("aria-disabled", "false");
          imageWrapper.setAttribute("draggable", true);
          imageWrapper.innerHTML =
            '<p style="display:flex; margin:auto; justify-content:center;">Image</p>';

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          imageWrapper.appendChild(orangeRolloverTools);
          imageWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          imageWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            imageWrapper.style.borderColor = "orange"; // Change border color on mouseover
            imageWrapper.style.borderWidth = "1px";
            imageWrapper.style.position = "relative";
          });

          imageWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            imageWrapper.style.borderColor = ""; // Reset border color on mouseout
            imageWrapper.style.borderWidth = "";
            imageWrapper.style.position = "unset";
          });
          this.elementToInsert = imageWrapper;
          this.existingElement = false;
          break;

        case "list-field":
          const listWrapper = document.createElement("div");
          listWrapper.classList.add(
            "draggable",
            "de",
            "elSubHeadlineWrapper",
            "ui-droppable",
            "de-editable"
          );
          listWrapper.setAttribute("id", `image-${Date.now()}`);
          listWrapper.setAttribute("data-de-type", "image");
          listWrapper.setAttribute("data-de-editing", "false");
          listWrapper.setAttribute("data-title", "image");
          listWrapper.setAttribute("data-ce", "true");
          listWrapper.setAttribute("data-trigger", "none");
          listWrapper.setAttribute("data-animate", "fade");
          listWrapper.setAttribute("data-delay", "500");
          // listWrapper.style.marginTop = '15px';
          listWrapper.style.outline = "none";
          listWrapper.style.cursor = "pointer";
          listWrapper.setAttribute("aria-disabled", "false");
          listWrapper.setAttribute("draggable", true);
          listWrapper.innerHTML =
            '<p style="display:flex; margin:auto; justify-content:center;">Bullet List</p>';

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          listWrapper.appendChild(orangeRolloverTools);
          listWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          listWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            listWrapper.style.borderColor = "orange"; // Change border color on mouseover
            listWrapper.style.borderWidth = "1px";
            listWrapper.style.position = "relative";
          });

          listWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            listWrapper.style.borderColor = ""; // Reset border color on mouseout
            listWrapper.style.borderWidth = "";
            listWrapper.style.position = "unset";
          });
          this.elementToInsert = listWrapper;
          this.existingElement = false;
          break;

        case "button-field":
          // Create the outer container
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
          buttonContainer.style.outline = "none";
          buttonContainer.style.textAlign = "center";
          // buttonContainer.style.margin = '20px 30px';

          // Create the <a> element
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

          // Create the main and sub spans
          const mainSpan = document.createElement("span");
          mainSpan.classList.add("elButtonMain");
          mainSpan.textContent = "Let Me In!";

          const subSpan = document.createElement("span");
          subSpan.classList.add("elButtonSub");

          // Append the main and sub spans to the <a> element
          linkElement.appendChild(mainSpan);
          linkElement.appendChild(subSpan);

          // Append the <a> element to the button container
          buttonContainer.appendChild(linkElement);

          // Add rollover tools for the button (you should complete this part)

          // Set the draggable attribute
          elementToInsert = buttonContainer;
          elementToInsert.setAttribute("draggable", true);
          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          buttonContainer.appendChild(orangeRolloverTools);
          buttonContainer.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          buttonContainer.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            buttonContainer.style.borderColor = "orange"; // Change border color on mouseover
            buttonContainer.style.borderWidth = "1px";
            buttonContainer.style.position = "relative";
          });

          buttonContainer.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            buttonContainer.style.borderColor = ""; // Reset border color on mouseout
            buttonContainer.style.borderWidth = "";
            buttonContainer.style.position = "unset";
          });
          this.elementToInsert = elementToInsert;
          this.existingElement = false;
          break;

        case "countdown-field":
          const currentDate = new Date();
          const futureDate = new Date();

          futureDate.setDate(currentDate.getDate() + 1); // Add 1 day
          futureDate.setHours(currentDate.getHours() + 12); // Add 11 hours

          // Construct the targetDateStr with the desired format, including hours, minutes, and seconds
          const targetDateStr = `${futureDate.getFullYear()}-${(
            futureDate.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${futureDate
            .getDate()
            .toString()
            .padStart(2, "0")}T${futureDate
            .getHours()
            .toString()
            .padStart(2, "0")}:${futureDate
            .getMinutes()
            .toString()
            .padStart(2, "0")}:${futureDate
            .getSeconds()
            .toString()
            .padStart(2, "0")}`;

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
          // countdownWrapper.style.margin = 0;
          countdownWrapper.style.backgroundColor = "red";
          countdownWrapper.style.color = "yellow";
          countdownWrapper.style.display = "flex"; // Enable Flexbox
          countdownWrapper.style.alignItems = "center"; // Center content vertically

          const leftColumn = document.createElement("div");
          // leftColumn.classList.add('col-md-9');
          leftColumn.classList.add("col-md-8", "d-none", "d-md-block"); // Hide on iPhones, show on medium and larger screens

          const textLeft = document.createElement("div");
          textLeft.classList.add("text-left");

          function getFormattedDate(date) {
            const options = {
              weekday: "long",
              hour: "numeric",
              minute: "numeric",
              timeZoneName: "short",
              timeZone: "America/New_York",
              // timeZone: 'Europe/Vienna'
            };
            return date.toLocaleString("en-US", options);
          }

          const heading = document.createElement("div");
          // heading.style.fontSize = '24px'; // Set font size
          heading.style.fontSize = "1.6vw"; // 3% of the viewport width

          heading.style.fontWeight = "600"; // Set font weight
          heading.style.letterSpacing = "letter-spacing: -0.5px;"; // Set letter spacing
          heading.style.fontFamily = "Nunito Sans, sans-serif"; // Set font family
          heading.style.paddingLeft = "20px";
          const formattedTargetDateMessage = `Hurry! This special offer is available until ${getFormattedDate(
            currentDate
          )}`;
          heading.textContent = formattedTargetDateMessage;

          textLeft.appendChild(heading);
          // textLeft.appendChild(paragraph);
          leftColumn.appendChild(textLeft);

          const rightColumn = document.createElement("div");
          // rightColumn.classList.add('col-md-3');
          rightColumn.classList.add("col-12", "col-md-4"); // Span full width on small screens, and col-3 on medium and larger screens

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
          // countdownElement.setAttribute('data-tz', 'Europe/Vienna');
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
              word: "days",
            },
            {
              number: "04",
              word: "hrs",
            },
            {
              number: "12",
              word: "min",
            },
            {
              number: "03",
              word: "sec",
            },
          ];

          timerElements.forEach((element) => {
            const timerItem = document.createElement("div");
            timerItem.style.display = "inline-block";
            timerItem.style.marginRight = "10px";

            const timerNumber = document.createElement("div");
            timerNumber.classList.add("timer-number");
            timerNumber.textContent = element.number;

            const timerWord = document.createElement("div");
            timerWord.classList.add("timer-word");
            timerWord.textContent = element.word;

            timerItem.appendChild(timerNumber);
            timerItem.appendChild(timerWord);
            timerDiv.appendChild(timerItem);
          });

          countdownElement.appendChild(timerDiv); // Nest the timer inside .realcountdown

          countdownDiv.appendChild(countdownElement);
          countdownDiv.appendChild(countdownDemo);

          // Append columns to the countdown wrapper
          containercountdownWrapper.appendChild(countdownWrapper);

          countdownWrapper.appendChild(leftColumn);
          countdownWrapper.appendChild(rightColumn);

          rightColumn.appendChild(countdownDiv);

          // countdownWrapper.appendChild(rolloverTools);

          countdownWrapper.setAttribute("draggable", true);

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          containercountdownWrapper.appendChild(orangeRolloverTools);
          containercountdownWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          containercountdownWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            containercountdownWrapper.style.borderColor = "orange"; // Change border color on mouseover
            containercountdownWrapper.style.borderWidth = "1px";
            containercountdownWrapper.style.position = "relative";
          });

          containercountdownWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            containercountdownWrapper.style.borderColor = ""; // Reset border color on mouseout
            containercountdownWrapper.style.borderWidth = "";
            containercountdownWrapper.style.position = "unset";
          });
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
          // inputWrapper.style.marginTop = "30px";
          inputWrapper.style.outline = "none";

          const inputElement = document.createElement("input");
          inputElement.type = "text";

          inputElement.placeholder = "Your Name Here...";
          inputElement.name = "name"; //not-set
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
          inputElement.style.width = "100%"; // This sets the input field to full width

          // Create rollover tools div
          // const rolloverTools = document.createElement('div');
          // rolloverTools.classList.add('de-rollover-tools', 'smallWidthElementHover');
          // rolloverTools.setAttribute('data-current-id', 'nill');
          // rolloverTools.setAttribute('data-current-type', 'type');
          // rolloverTools.style.display = 'none';

          // Add move, advance, clone, and remove buttons to rollover tools
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
          removeButton.innerHTML = '<i class="fa fa-trash"></i>';

          // Append input and rollover tools to the wrapper
          inputWrapper.appendChild(inputElement);
          // inputWrapper.appendChild(rolloverTools);

          // Create addElementFlyoutDOM
          addElementFlyoutDOM = document.createElement("div");
          addElementFlyoutDOM.classList.add("addElementFlyoutDOM");
          addElementFlyoutDOM.style.display = "none";
          addElementFlyoutDOM.style.left = "325px";
          addElementFlyoutDOM.innerHTML = '<i class="fa fa-plus"></i>';

          inputWrapper.appendChild(addElementFlyoutDOM);

          // Set the draggable attribute
          inputWrapper.setAttribute("draggable", true);
          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          inputWrapper.appendChild(orangeRolloverTools);
          inputWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          inputWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            inputWrapper.style.borderColor = "orange"; // Change border color on mouseover
            inputWrapper.style.borderWidth = "1px";
            inputWrapper.style.position = "relative";
          });

          inputWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            inputWrapper.style.borderColor = ""; // Reset border color on mouseout
            inputWrapper.style.borderWidth = "";
            inputWrapper.style.position = "unset";
          });
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
          // emailWrapper.style.marginTop = "30px";
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
          emailElement.style.width = "100%"; // This sets the input field to full width

          // Create rollover tools div
          // const rolloverTools = document.createElement('div');
          // rolloverTools.classList.add('de-rollover-tools', 'smallWidthElementHover');
          // rolloverTools.setAttribute('data-current-id', 'nill');
          // rolloverTools.setAttribute('data-current-type', 'type');
          // rolloverTools.style.display = 'none';

          // Add move, advance, clone, and remove buttons to rollover tools
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
          removeButton.innerHTML = '<i class="fa fa-trash"></i>';

          // Append input and rollover tools to the wrapper
          emailWrapper.appendChild(emailElement);
          // emailWrapper.appendChild(rolloverTools);

          // Create addElementFlyoutDOM
          addElementFlyoutDOM = document.createElement("div");
          addElementFlyoutDOM.classList.add("addElementFlyoutDOM");
          addElementFlyoutDOM.style.display = "none";
          addElementFlyoutDOM.style.left = "325px";
          addElementFlyoutDOM.innerHTML = '<i class="fa fa-plus"></i>';

          emailWrapper.appendChild(addElementFlyoutDOM);

          // Set the draggable attribute
          emailWrapper.setAttribute("draggable", true);

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          emailWrapper.appendChild(orangeRolloverTools);
          emailWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          emailWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            emailWrapper.style.borderColor = "orange"; // Change border color on mouseover
            emailWrapper.style.borderWidth = "1px";
            emailWrapper.style.position = "relative";
          });

          emailWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            emailWrapper.style.borderColor = ""; // Reset border color on mouseout
            emailWrapper.style.borderWidth = "";
            emailWrapper.style.position = "unset";
          });
          this.elementToInsert = emailWrapper;
          this.existingElement = false;
          break;

        case "phone-field":
          const phoneWrapper = document.createElement("div");
          phoneWrapper.classList.add(
            "draggable",
            "de",
            "elSubHeadlineWrapper",
            "ui-droppable",
            "de-editable"
          );
          phoneWrapper.setAttribute("id", `phone-${Date.now()}`);
          phoneWrapper.setAttribute("data-de-type", "phone");
          phoneWrapper.setAttribute("data-de-editing", "false");
          phoneWrapper.setAttribute("data-title", "phone");
          phoneWrapper.setAttribute("data-ce", "true");
          phoneWrapper.setAttribute("data-trigger", "none");
          phoneWrapper.setAttribute("data-animate", "fade");
          phoneWrapper.setAttribute("data-delay", "500");
          phoneWrapper.style.outline = "none";
          phoneWrapper.style.cursor = "pointer";
          phoneWrapper.setAttribute("aria-disabled", "false");
          phoneWrapper.setAttribute("draggable", true);
          phoneWrapper.innerHTML =
            '<p style="display:flex; margin:auto; justify-content:center;">Phone</p>';
          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          phoneWrapper.appendChild(orangeRolloverTools);
          phoneWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          phoneWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            phoneWrapper.style.borderColor = "orange"; // Change border color on mouseover
            phoneWrapper.style.borderWidth = "1px";
            phoneWrapper.style.position = "relative";
          });

          phoneWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            phoneWrapper.style.borderColor = ""; // Reset border color on mouseout
            phoneWrapper.style.borderWidth = "";
            phoneWrapper.style.position = "unset";
          });
          this.elementToInsert = phoneWrapper;
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

  this.onDragEnd = function (e, draggable) {
    //update the main conatiner and popup container so it can be saved
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

    // Add a click event listener for settings sidebar

    console.log("adding elSettings");

    var anchor = this.elementToInsert.querySelector("a.elSettings"); // Find the anchor element within 'this'

    if (anchor) {
      anchor.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior

        if (settingsSidebar.style.left === "0px") {
          closeSidebar();
          // console.log('closing inside');
        } else {
          openSidebar(this);
          // console.log('opening inside');
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

  this.addEventListenerForDraggableItem = function (element) {
    console.log("ele", element);
    element.addEventListener("dragstart", (e) => this.onDragStart(e, element));
    element.addEventListener("dragend", (e) => this.onDragEnd(e, element));

    const elHeadlineElements = element.querySelectorAll(
      ".elHeadline, .elText, .elSubHeadline"
    ); // Select .elHeadline elements inside the div

    // Add click event listener for content editing to each .elHeadline element
    elHeadlineElements.forEach((elHeadlineElement) => {
      elHeadlineElement.addEventListener("mousedown", function () {
        console.log("clicked to edit");
        elHeadlineElement.setAttribute("contenteditable", "true");
        elHeadlineElement.style.cursor = "text";
      });
    });
  };

  this.addEventListenersForContainer = function (container) {
    container.addEventListener("dragover", (e) =>
      this.onDragHover(e, container, false)
    );
    container.addEventListener("drop", (e) => this.onDragDrop(e), false);
    container.addEventListener("dragleave", (e) => this.onDragLeave(e), false);
    container.addEventListener("dragenter", (e) => this.onDragEnter(e), false);
  };
  this.addEventListenerForText = function (textElement) {
    var orangeRolloverTools = createOrangeRolloverTools();
    var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

    textElement.appendChild(orangeRolloverTools);
    textElement.appendChild(orangeArrowRolloverTools);
    textElement.style.padding = "1.5rem 1rem 0.5rem 1rem";

    textElement.addEventListener("mouseenter", (e) => {
      orangeRolloverTools.style.display = "block";
      orangeArrowRolloverTools.style.display = "block";
      orangeRolloverTools.childNodes[0].style.display = "block";
      orangeRolloverTools.childNodes[1].style.display = "block";
      orangeRolloverTools.childNodes[2].style.display = "block";
      orangeArrowRolloverTools.childNodes[0].style.display = "block";
      orangeArrowRolloverTools.childNodes[1].style.display = "block";
      textElement.style.border = "1px solid orange";
      textElement.style.position = "relative";
    });
    textElement.addEventListener("mouseleave", (e) => {
      orangeRolloverTools.style.display = "none";
      orangeArrowRolloverTools.style.display = "none";
      orangeRolloverTools.childNodes[0].style.display = "none";
      orangeRolloverTools.childNodes[1].style.display = "none";
      orangeRolloverTools.childNodes[2].style.display = "none";
      orangeArrowRolloverTools.childNodes[0].style.display = "none";
      orangeArrowRolloverTools.childNodes[1].style.display = "none";
      textElement.style.position = "unset";
      textElement.style.border = "none";
      editTextRolloverTools.style.display = "none";
      for (let i = 0; i < 8; i++) {
        editTextRolloverTools.childNodes[i].style.display = "none";
      }
    });

    // Edit Text
    var editTextRolloverTools = createEditTextRolloverTools();

    textElement.appendChild(editTextRolloverTools);

    textElement.addEventListener("mousedown", (e) => {
      const boundingRect = textElement.getBoundingClientRect();
      const width = boundingRect.width;
      const height = boundingRect.height;
      const x = e.clientX - boundingRect.left;
      const y = e.clientY - boundingRect.top;

      // Calculate 80% width and height range
      const minWidth = width * 0.1; // 10% from the left
      const maxWidth = width * 0.9; // 10% from the right
      const minHeight = height * 0.1; // 10% from the top
      const maxHeight = height * 0.9; // 10% from the bottom

      // Check if the click position is within the 80% center part
      if (x >= minWidth && x <= maxWidth && y >= minHeight && y <= maxHeight) {
        textElement.style.border = "1px solid #777";
        for (let i = 0; i < 3; i++) {
          textElement.childNodes[1].childNodes[i].style.display = "none";
        }
        for (let i = 0; i < 2; i++) {
          textElement.childNodes[2].childNodes[i].style.display = "none";
        }
        editTextRolloverTools.style.display = "block";
        for (let i = 0; i < 8; i++) {
          editTextRolloverTools.childNodes[i].style.display = "block";
        }
      }
    });
  };
  this.onDragHover = function (e, container) {
    e.preventDefault();
    this.afterElement = this.getDragAfterElement(container, e.clientY);
    if (this.afterElement == null) {
      container.appendChild(this.placeholder);
    } else {
      container.insertBefore(this.placeholder, this.afterElement);
    }
  };
  this.onDragEnter = function (e) {
    e.preventDefault();
  };
  this.onDragLeave = function (e) {
    e.preventDefault();
  };

  this.onDragDrop = function (e) {
    e.preventDefault();
    // let data = e.dataTransfer.getData("elementid");
    this.placeholder.replaceWith(this.elementToInsert);
  };

  this.init = function () {
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

function CustomDragAndDrop(container) {
  this.draggables = undefined;
  this.containers = undefined;
  this.placeholder = undefined;
  this.elementToInsert = "";
  this.afterElement = undefined;
  this.sectionCount = 0;
  this.mainContainer = undefined;
  this.popupContainer = undefined;
  this.existingElement = undefined;

  this.loadSections = function () {
    var newContainer = document.getElementById(id);
    var allContainers = newContainer.querySelectorAll(".col-div");

    // var popupContainer = document.getElementsByClassName('popup-container')[0]
    // popupContainer.querySelectorAll('.editor-container')

    // function hasDragEvent(element) {
    //   const eventListeners = getEventListeners(element);
    //   const dragEventListeners = eventListeners.drag || eventListeners.dragstart || eventListeners.dragend;
    //   console.log(dragEventListeners,'here is condition')
    //   return !!dragEventListeners;
    // }

    if (allContainers.length > 0) {
      allContainers.forEach((container) => {
        var condition = container.getAttribute("data-dragetted");
        console.log("condition = ", condition);

        if (!condition) {
          console.log("here is condition false");
          container.setAttribute("data-dragetted", "true");
          this.addEventListenersForContainer(container);
        }
      });
      this.updateContainers();
    } else {
      // Handle the case when no elements with the class .editor-container are found.
      // You can choose to display an error message or take appropriate action here.
    }
  };

  this.addSection = function () {
    let section = document.createElement("div");

    // section.innerHTML = `Section ${this.sectionCount++}`;
    // section.innerHTML = `<div class="containerInner ui-sortable">
    // <div class="dropZoneForRows ui-droppable" style="display: none;">
    // <div class="dropIconr"><i class="fa fa-plus fs-3"></i></div></div>
    // <div class="de-add-new-row-empty elFont_helvectica">
    // <a href="#" class="btn" id="de-show-rows-empty">
    // </a></div></div>`;

    // this should show the plus button inside of this HTML

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

  this.updateContainers = function () {
    this.containers = document.querySelectorAll(".col-div");
  };
  this.updateDraggables = function () {
    this.draggables = document.querySelectorAll(".draggable");
  };
  this.addEventListeners = function (name) {
    console.log("here is name", name);
    // console.log("adding event listeners", this.containers, this.draggables);
    if (name === "containers" && this.containers) {
      this.containers.forEach((container) => {
        container.addEventListener("dragover", (e) =>
          this.onDragHover(e, container, false)
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
    } else if ("draggables" && this.draggables) {
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

    // console.log("draggables", this.draggables);
    // console.log("this.containers", this.containers);
  };
  this.removeEventListeners = function (name) {
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
  this.createPlaceHolder = function () {
    let placeholder = document.createElement("div");
    placeholder.style.height = "50px";
    placeholder.style.borderRadius = "5px";
    placeholder.style.backgroundColor = "#eee";
    placeholder.style.margin = "10px 0";
    this.placeholder = placeholder;
  };
  this.getDragAfterElement = function (container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return {
            offset: offset,
            element: child,
          };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
      }
    ).element;
  };

  this.onDragStart = function (e, draggable) {
    e.stopPropagation();
    let elementToInsert;
    console.log("drag start", draggable);
    // e.dataTransfer.setData('elementid',e.target.id);
    if (draggable && draggable.getAttribute("name")) {
      let element = draggable.getAttribute("name");

      // Create rollover tools div
      var rolloverTools = document.createElement("div");
      rolloverTools.classList.add(
        "de-rollover-tools",
        "smallWidthElementHover"
      );
      rolloverTools.setAttribute("data-current-id", "nill");
      rolloverTools.setAttribute("data-current-type", "type");
      rolloverTools.style.display = "none";

      // Add move, advance, clone, and remove buttons to rollover tools
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
      removeButton.innerHTML = '<i class="fa fa-trash"></i>';

      // Append the buttons to the rollover tools
      rolloverTools.appendChild(moveButton);
      rolloverTools.appendChild(advanceButton);
      rolloverTools.appendChild(cloneButton);
      rolloverTools.appendChild(removeButton);

      switch (element) {
        case "headline-field": // * HEADLINE *****************************************
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
          // wrapper.style.marginTop = '15px';
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
          // elementToInsert.dataset.bold = "inherit";
          elementToInsert.dataset.gramm = "false";
          elementToInsert.style.marginTop = "10px";
          elementToInsert.style.marginBottom = "10px";
          // elementToInsert.setAttribute('contenteditable', 'false');
          elementToInsert.setAttribute("contenteditable", "true");

          const bElement = document.createElement("b");
          bElement.textContent = "How To [GOOD] Without [BAD]";

          elementToInsert.appendChild(bElement);
          elementToInsert.setAttribute("id", `field-${Date.now()}`);

          elementToInsert.setAttribute("placeholder", "Text");

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          wrapper.appendChild(elementToInsert);
          wrapper.appendChild(orangeRolloverTools);
          wrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          wrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            wrapper.style.borderColor = "orange"; // Change border color on mouseover
            wrapper.style.borderWidth = "1px";
            wrapper.style.position = "relative";

            wrapper.parentNode.parentNode.style.border = "none";
            for (let i = 0; i < 3; i++) {
              wrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "none";
            }
            for (let i = 0; i < 3; i++) {
              wrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "none";
            }
            wrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "none";
            for (
              let i = 3;
              i < wrapper.parentNode.parentNode.children.length;
              i++
            ) {
              wrapper.parentNode.parentNode.childNodes[i].style.borderRight =
                "none";
              if (
                wrapper.parentNode.parentNode.childNodes[i].childNodes[0]
                  .className == "div-boundary"
              ) {
                wrapper.parentNode.parentNode.childNodes[
                  i
                ].childNodes[0].style.display = "none";
              }
            }
          });

          wrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            wrapper.style.borderColor = ""; // Reset border color on mouseout
            wrapper.style.borderWidth = "";
            wrapper.style.position = "unset";

            wrapper.parentNode.parentNode.style.border =
              "1px solid rgb(58, 133, 255)";
            for (let i = 0; i < 3; i++) {
              wrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "block";
            }
            for (let i = 0; i < 3; i++) {
              wrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "block";
            }
            wrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "block";
            editTextRolloverTools.style.display = "none";
            for (let i = 0; i < 8; i++) {
              editTextRolloverTools.childNodes[i].style.display = "none";
            }
            for (
              let i = 4;
              i < wrapper.parentNode.parentNode.children.length;
              i++
            ) {
              wrapper.parentNode.parentNode.childNodes[
                i - 1
              ].style.borderRight = "1px dotted rgb(58, 133, 255)";
              if (
                wrapper.parentNode.parentNode.childNodes[i - 1].childNodes[0]
                  .className == "div-boundary"
              ) {
                wrapper.parentNode.parentNode.childNodes[
                  i - 1
                ].childNodes[0].style.display = "block";
              }
            }
          });

          // Edit Text
          var editTextRolloverTools = createEditTextRolloverTools();

          wrapper.appendChild(editTextRolloverTools);

          wrapper.addEventListener("mousedown", (e) => {
            const boundingRect = wrapper.getBoundingClientRect();
            const width = boundingRect.width;
            const height = boundingRect.height;
            const x = e.clientX - boundingRect.left;
            const y = e.clientY - boundingRect.top;

            // Calculate 80% width and height range
            const minWidth = width * 0.1; // 10% from the left
            const maxWidth = width * 0.9; // 10% from the right
            const minHeight = height * 0.1; // 10% from the top
            const maxHeight = height * 0.9; // 10% from the bottom

            // Check if the click position is within the 80% center part
            if (
              x >= minWidth &&
              x <= maxWidth &&
              y >= minHeight &&
              y <= maxHeight
            ) {
              wrapper.style.border = "1px solid #777";
              for (let i = 0; i < 3; i++) {
                wrapper.childNodes[1].childNodes[i].style.display = "none";
              }
              for (let i = 0; i < 2; i++) {
                wrapper.childNodes[2].childNodes[i].style.display = "none";
              }
              editTextRolloverTools.style.display = "block";
              for (let i = 0; i < 8; i++) {
                editTextRolloverTools.childNodes[i].style.display = "block";
              }
            }
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
          // subheadWrapper.style.marginTop = '15px';
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
          //subheadElement.setAttribute('contenteditable', 'false');

          const subheadBElement = document.createElement("p");
          subheadBElement.textContent =
            "FREE: Brand New On-Demand Class Reveals ...";

          subheadElement.appendChild(subheadBElement);
          subheadElement.setAttribute("id", `field-${Date.now()}`);
          subheadElement.setAttribute("placeholder", "Subhead Text");

          // Add any additional styling or attributes for the subhead as needed

          subheadWrapper.appendChild(subheadElement);

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          subheadWrapper.appendChild(orangeRolloverTools);
          subheadWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          subheadWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            subheadWrapper.style.borderColor = "orange"; // Change border color on mouseover
            subheadWrapper.style.borderWidth = "1px";
            subheadWrapper.style.position = "relative";
            subheadWrapper.parentNode.parentNode.style.border = "none";
            for (let i = 0; i < 3; i++) {
              subheadWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "none";
            }
            for (let i = 0; i < 3; i++) {
              subheadWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "none";
            }
            subheadWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "none";
            for (
              let i = 3;
              i < subheadWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              subheadWrapper.parentNode.parentNode.childNodes[
                i
              ].style.borderRight = "none";
              if (
                subheadWrapper.parentNode.parentNode.childNodes[i].childNodes[0]
                  .className == "div-boundary"
              ) {
                subheadWrapper.parentNode.parentNode.childNodes[
                  i
                ].childNodes[0].style.display = "none";
              }
            }
          });

          subheadWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            subheadWrapper.style.borderColor = ""; // Reset border color on mouseout
            subheadWrapper.style.borderWidth = "";
            subheadWrapper.style.position = "unset";
            subheadWrapper.parentNode.parentNode.style.border =
              "1px solid rgb(58, 133, 255)";
            for (let i = 0; i < 3; i++) {
              subheadWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "block";
            }
            for (let i = 0; i < 3; i++) {
              subheadWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "block";
            }
            subheadWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "block";
            editTextRolloverTools.style.display = "none";
            for (let i = 0; i < 8; i++) {
              editTextRolloverTools.childNodes[i].style.display = "none";
            }
            for (
              let i = 4;
              i < subheadWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              subheadWrapper.parentNode.parentNode.childNodes[
                i - 1
              ].style.borderRight = "1px dotted rgb(58, 133, 255)";
              if (
                subheadWrapper.parentNode.parentNode.childNodes[i - 1]
                  .childNodes[0].className == "div-boundary"
              ) {
                subheadWrapper.parentNode.parentNode.childNodes[
                  i - 1
                ].childNodes[0].style.display = "block";
              }
            }
          });

          // Edit Text
          var editTextRolloverTools = createEditTextRolloverTools();

          subheadWrapper.appendChild(editTextRolloverTools);

          subheadWrapper.addEventListener("mousedown", (e) => {
            const boundingRect = subheadWrapper.getBoundingClientRect();
            const width = boundingRect.width;
            const height = boundingRect.height;
            const x = e.clientX - boundingRect.left;
            const y = e.clientY - boundingRect.top;

            // Calculate 80% width and height range
            const minWidth = width * 0.1; // 10% from the left
            const maxWidth = width * 0.9; // 10% from the right
            const minHeight = height * 0.1; // 10% from the top
            const maxHeight = height * 0.9; // 10% from the bottom

            // Check if the click position is within the 80% center part
            if (
              x >= minWidth &&
              x <= maxWidth &&
              y >= minHeight &&
              y <= maxHeight
            ) {
              subheadWrapper.style.border = "1px solid #777";
              for (let i = 0; i < 3; i++) {
                subheadWrapper.childNodes[1].childNodes[i].style.display =
                  "none";
              }
              for (let i = 0; i < 2; i++) {
                subheadWrapper.childNodes[2].childNodes[i].style.display =
                  "none";
              }
              editTextRolloverTools.style.display = "block";
              for (let i = 0; i < 8; i++) {
                editTextRolloverTools.childNodes[i].style.display = "block";
              }
            }
          });

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
          // paragraphWrapper.style.marginTop = '15px';
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
          // textElement.style.textAlign = 'center';
          textElement.style.fontSize = "20px";
          textElement.dataset.bold = "inherit";
          textElement.dataset.gramm = "false";
          // textElement.setAttribute('contenteditable', 'false');

          // const textPElement = document.createElement('p');
          textElement.textContent =
            "This Class Is Available Instantly ...No Waiting.";

          // textElement.appendChild(textPElement);
          textElement.setAttribute("id", `field-${Date.now()}`);
          textElement.setAttribute("placeholder", "Text");

          // Add any additional styling or attributes for the text element as needed

          paragraphWrapper.appendChild(textElement);

          this.elementToInsert = paragraphWrapper;
          this.existingElement = false;
          this.addEventListenerForText(paragraphWrapper);
          break;

        case "image-field":
          const imageWrapper = document.createElement("div");
          imageWrapper.classList.add(
            "draggable",
            "de",
            "elSubHeadlineWrapper",
            "ui-droppable",
            "de-editable"
          );
          imageWrapper.setAttribute("id", `image-${Date.now()}`);
          imageWrapper.setAttribute("data-de-type", "image");
          imageWrapper.setAttribute("data-de-editing", "false");
          imageWrapper.setAttribute("data-title", "image");
          imageWrapper.setAttribute("data-ce", "true");
          imageWrapper.setAttribute("data-trigger", "none");
          imageWrapper.setAttribute("data-animate", "fade");
          imageWrapper.setAttribute("data-delay", "500");
          // imageWrapper.style.marginTop = '15px';
          imageWrapper.style.outline = "none";
          imageWrapper.style.cursor = "pointer";
          imageWrapper.setAttribute("aria-disabled", "false");
          imageWrapper.setAttribute("draggable", true);
          imageWrapper.innerHTML =
            '<p style="display:flex; margin:auto; justify-content:center;">Image</p>';

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          imageWrapper.appendChild(orangeRolloverTools);
          imageWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          imageWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            imageWrapper.style.borderColor = "orange"; // Change border color on mouseover
            imageWrapper.style.borderWidth = "1px";
            imageWrapper.style.position = "relative";
            imageWrapper.parentNode.parentNode.style.border = "none";
            for (let i = 0; i < 3; i++) {
              imageWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "none";
            }
            for (let i = 0; i < 3; i++) {
              imageWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "none";
            }
            imageWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "none";
            for (
              let i = 3;
              i < imageWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              imageWrapper.parentNode.parentNode.childNodes[
                i
              ].style.borderRight = "none";
              if (
                imageWrapper.parentNode.parentNode.childNodes[i].childNodes[0]
                  .className == "div-boundary"
              ) {
                imageWrapper.parentNode.parentNode.childNodes[
                  i
                ].childNodes[0].style.display = "none";
              }
            }
          });

          imageWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            imageWrapper.style.borderColor = ""; // Reset border color on mouseout
            imageWrapper.style.borderWidth = "";
            imageWrapper.style.position = "unset";
            imageWrapper.parentNode.parentNode.style.border =
              "1px solid rgb(58, 133, 255)";
            for (let i = 0; i < 3; i++) {
              imageWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "block";
            }
            for (let i = 0; i < 3; i++) {
              imageWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "block";
            }
            imageWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "block";
            for (
              let i = 4;
              i < imageWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              imageWrapper.parentNode.parentNode.childNodes[
                i - 1
              ].style.borderRight = "1px dotted rgb(58, 133, 255)";
              if (
                imageWrapper.parentNode.parentNode.childNodes[i - 1]
                  .childNodes[0].className == "div-boundary"
              ) {
                imageWrapper.parentNode.parentNode.childNodes[
                  i - 1
                ].childNodes[0].style.display = "block";
              }
            }
          });
          this.elementToInsert = imageWrapper;
          this.existingElement = false;
          break;

        case "list-field":
          const listWrapper = document.createElement("div");
          listWrapper.classList.add(
            "draggable",
            "de",
            "elSubHeadlineWrapper",
            "ui-droppable",
            "de-editable"
          );
          listWrapper.setAttribute("id", `image-${Date.now()}`);
          listWrapper.setAttribute("data-de-type", "image");
          listWrapper.setAttribute("data-de-editing", "false");
          listWrapper.setAttribute("data-title", "image");
          listWrapper.setAttribute("data-ce", "true");
          listWrapper.setAttribute("data-trigger", "none");
          listWrapper.setAttribute("data-animate", "fade");
          listWrapper.setAttribute("data-delay", "500");
          // listWrapper.style.marginTop = '15px';
          listWrapper.style.outline = "none";
          listWrapper.style.cursor = "pointer";
          listWrapper.setAttribute("aria-disabled", "false");
          listWrapper.setAttribute("draggable", true);
          listWrapper.innerHTML =
            '<p style="display:flex; margin:auto; justify-content:center;">Bullet List</p>';

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          listWrapper.appendChild(orangeRolloverTools);
          listWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          listWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            listWrapper.style.borderColor = "orange"; // Change border color on mouseover
            listWrapper.style.borderWidth = "1px";
            listWrapper.style.position = "relative";
            listWrapper.parentNode.parentNode.style.border = "none";
            for (let i = 0; i < 3; i++) {
              listWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "none";
            }
            for (let i = 0; i < 3; i++) {
              listWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "none";
            }
            listWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "none";
            for (
              let i = 3;
              i < listWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              listWrapper.parentNode.parentNode.childNodes[
                i
              ].style.borderRight = "none";
              if (
                listWrapper.parentNode.parentNode.childNodes[i].childNodes[0]
                  .className == "div-boundary"
              ) {
                listWrapper.parentNode.parentNode.childNodes[
                  i
                ].childNodes[0].style.display = "none";
              }
            }
          });

          listWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            listWrapper.style.borderColor = ""; // Reset border color on mouseout
            listWrapper.style.borderWidth = "";
            listWrapper.style.position = "unset";
            listWrapper.parentNode.parentNode.style.border =
              "1px solid rgb(58, 133, 255)";
            for (let i = 0; i < 3; i++) {
              listWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "block";
            }
            for (let i = 0; i < 3; i++) {
              listWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "block";
            }
            listWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "block";
            for (
              let i = 4;
              i < listWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              listWrapper.parentNode.parentNode.childNodes[
                i - 1
              ].style.borderRight = "1px dotted rgb(58, 133, 255)";
              if (
                listWrapper.parentNode.parentNode.childNodes[i - 1]
                  .childNodes[0].className == "div-boundary"
              ) {
                listWrapper.parentNode.parentNode.childNodes[
                  i - 1
                ].childNodes[0].style.display = "block";
              }
            }
          });
          this.elementToInsert = listWrapper;
          this.existingElement = false;
          break;

        case "button-field":
          // Create the outer container
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
          buttonContainer.style.outline = "none";
          buttonContainer.style.textAlign = "center";
          // buttonContainer.style.margin = '20px 30px';

          // Create the <a> element
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

          // Create the main and sub spans
          const mainSpan = document.createElement("span");
          mainSpan.classList.add("elButtonMain");
          mainSpan.textContent = "Let Me In!";

          const subSpan = document.createElement("span");
          subSpan.classList.add("elButtonSub");

          // Append the main and sub spans to the <a> element
          linkElement.appendChild(mainSpan);
          linkElement.appendChild(subSpan);

          // Append the <a> element to the button container
          buttonContainer.appendChild(linkElement);

          // Add rollover tools for the button (you should complete this part)

          // Set the draggable attribute
          elementToInsert = buttonContainer;
          elementToInsert.setAttribute("draggable", true);
          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          buttonContainer.appendChild(orangeRolloverTools);
          buttonContainer.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          buttonContainer.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            buttonContainer.style.borderColor = "orange"; // Change border color on mouseover
            buttonContainer.style.borderWidth = "1px";
            buttonContainer.style.position = "relative";
            buttonContainer.parentNode.parentNode.style.border = "none";
            for (let i = 0; i < 3; i++) {
              buttonContainer.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "none";
            }
            for (let i = 0; i < 3; i++) {
              buttonContainer.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "none";
            }
            buttonContainer.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "none";
            for (
              let i = 3;
              i < buttonContainer.parentNode.parentNode.children.length;
              i++
            ) {
              buttonContainer.parentNode.parentNode.childNodes[
                i
              ].style.borderRight = "none";
              if (
                buttonContainer.parentNode.parentNode.childNodes[i]
                  .childNodes[0].className == "div-boundary"
              ) {
                buttonContainer.parentNode.parentNode.childNodes[
                  i
                ].childNodes[0].style.display = "none";
              }
            }
          });

          buttonContainer.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            buttonContainer.style.borderColor = ""; // Reset border color on mouseout
            buttonContainer.style.borderWidth = "";
            buttonContainer.style.position = "unset";
            buttonContainer.parentNode.parentNode.style.border =
              "1px solid rgb(58, 133, 255)";
            for (let i = 0; i < 3; i++) {
              buttonContainer.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "block";
            }
            for (let i = 0; i < 3; i++) {
              buttonContainer.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "block";
            }
            buttonContainer.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "block";
            for (
              let i = 4;
              i < buttonContainer.parentNode.parentNode.children.length;
              i++
            ) {
              buttonContainer.parentNode.parentNode.childNodes[
                i - 1
              ].style.borderRight = "1px dotted rgb(58, 133, 255)";
              if (
                buttonContainer.parentNode.parentNode.childNodes[i - 1]
                  .childNodes[0].className == "div-boundary"
              ) {
                buttonContainer.parentNode.parentNode.childNodes[
                  i - 1
                ].childNodes[0].style.display = "block";
              }
            }
          });
          this.elementToInsert = elementToInsert;
          this.existingElement = false;
          break;

        case "countdown-field":
          const currentDate = new Date();
          const futureDate = new Date();

          futureDate.setDate(currentDate.getDate() + 1); // Add 1 day
          futureDate.setHours(currentDate.getHours() + 12); // Add 11 hours

          // Construct the targetDateStr with the desired format, including hours, minutes, and seconds
          const targetDateStr = `${futureDate.getFullYear()}-${(
            futureDate.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${futureDate
            .getDate()
            .toString()
            .padStart(2, "0")}T${futureDate
            .getHours()
            .toString()
            .padStart(2, "0")}:${futureDate
            .getMinutes()
            .toString()
            .padStart(2, "0")}:${futureDate
            .getSeconds()
            .toString()
            .padStart(2, "0")}`;

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
          // countdownWrapper.style.margin = 0;
          countdownWrapper.style.backgroundColor = "red";
          countdownWrapper.style.color = "yellow";
          countdownWrapper.style.display = "flex"; // Enable Flexbox
          countdownWrapper.style.alignItems = "center"; // Center content vertically

          const leftColumn = document.createElement("div");
          // leftColumn.classList.add('col-md-9');
          leftColumn.classList.add("col-md-8", "d-none", "d-md-block"); // Hide on iPhones, show on medium and larger screens

          const textLeft = document.createElement("div");
          textLeft.classList.add("text-left");

          function getFormattedDate(date) {
            const options = {
              weekday: "long",
              hour: "numeric",
              minute: "numeric",
              timeZoneName: "short",
              timeZone: "America/New_York",
              // timeZone: 'Europe/Vienna'
            };
            return date.toLocaleString("en-US", options);
          }

          const heading = document.createElement("div");
          // heading.style.fontSize = '24px'; // Set font size
          heading.style.fontSize = "1.6vw"; // 3% of the viewport width

          heading.style.fontWeight = "600"; // Set font weight
          heading.style.letterSpacing = "letter-spacing: -0.5px;"; // Set letter spacing
          heading.style.fontFamily = "Nunito Sans, sans-serif"; // Set font family
          heading.style.paddingLeft = "20px";
          const formattedTargetDateMessage = `Hurry! This special offer is available until ${getFormattedDate(
            currentDate
          )}`;
          heading.textContent = formattedTargetDateMessage;

          textLeft.appendChild(heading);
          // textLeft.appendChild(paragraph);
          leftColumn.appendChild(textLeft);

          const rightColumn = document.createElement("div");
          // rightColumn.classList.add('col-md-3');
          rightColumn.classList.add("col-12", "col-md-4"); // Span full width on small screens, and col-3 on medium and larger screens

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
          // countdownElement.setAttribute('data-tz', 'Europe/Vienna');
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
              word: "days",
            },
            {
              number: "04",
              word: "hrs",
            },
            {
              number: "12",
              word: "min",
            },
            {
              number: "03",
              word: "sec",
            },
          ];

          timerElements.forEach((element) => {
            const timerItem = document.createElement("div");
            timerItem.style.display = "inline-block";
            timerItem.style.marginRight = "10px";

            const timerNumber = document.createElement("div");
            timerNumber.classList.add("timer-number");
            timerNumber.textContent = element.number;

            const timerWord = document.createElement("div");
            timerWord.classList.add("timer-word");
            timerWord.textContent = element.word;

            timerItem.appendChild(timerNumber);
            timerItem.appendChild(timerWord);
            timerDiv.appendChild(timerItem);
          });

          countdownElement.appendChild(timerDiv); // Nest the timer inside .realcountdown

          countdownDiv.appendChild(countdownElement);
          countdownDiv.appendChild(countdownDemo);

          // Append columns to the countdown wrapper
          containercountdownWrapper.appendChild(countdownWrapper);

          countdownWrapper.appendChild(leftColumn);
          countdownWrapper.appendChild(rightColumn);

          rightColumn.appendChild(countdownDiv);

          // countdownWrapper.appendChild(rolloverTools);

          countdownWrapper.setAttribute("draggable", true);

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          containercountdownWrapper.appendChild(orangeRolloverTools);
          containercountdownWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          containercountdownWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            containercountdownWrapper.style.borderColor = "orange"; // Change border color on mouseover
            containercountdownWrapper.style.borderWidth = "1px";
            containercountdownWrapper.style.position = "relative";
            containercountdownWrapper.parentNode.parentNode.style.border =
              "none";
            for (let i = 0; i < 3; i++) {
              containercountdownWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "none";
            }
            for (let i = 0; i < 3; i++) {
              containercountdownWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "none";
            }
            containercountdownWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "none";
            for (
              let i = 3;
              i <
              containercountdownWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              containercountdownWrapper.parentNode.parentNode.childNodes[
                i
              ].style.borderRight = "none";
              if (
                containercountdownWrapper.parentNode.parentNode.childNodes[i]
                  .childNodes[0].className == "div-boundary"
              ) {
                containercountdownWrapper.parentNode.parentNode.childNodes[
                  i
                ].childNodes[0].style.display = "none";
              }
            }
          });

          containercountdownWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            containercountdownWrapper.style.borderColor = ""; // Reset border color on mouseout
            containercountdownWrapper.style.borderWidth = "";
            containercountdownWrapper.style.position = "unset";
            containercountdownWrapper.parentNode.parentNode.style.border =
              "1px solid rgb(58, 133, 255)";
            for (let i = 0; i < 3; i++) {
              containercountdownWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "block";
            }
            for (let i = 0; i < 3; i++) {
              containercountdownWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "block";
            }
            containercountdownWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "block";
            for (
              let i = 4;
              i <
              containercountdownWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              containercountdownWrapper.parentNode.parentNode.childNodes[
                i - 1
              ].style.borderRight = "1px dotted rgb(58, 133, 255)";
              if (
                containercountdownWrapper.parentNode.parentNode.childNodes[
                  i - 1
                ].childNodes[0].className == "div-boundary"
              ) {
                containercountdownWrapper.parentNode.parentNode.childNodes[
                  i - 1
                ].childNodes[0].style.display = "block";
              }
            }
          });
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
          // inputWrapper.style.marginTop = "30px";
          inputWrapper.style.outline = "none";

          const inputElement = document.createElement("input");
          inputElement.type = "text";

          inputElement.placeholder = "Your Name Here...";
          inputElement.name = "name"; //not-set
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
          inputElement.style.width = "100%"; // This sets the input field to full width

          // Create rollover tools div
          // const rolloverTools = document.createElement('div');
          // rolloverTools.classList.add('de-rollover-tools', 'smallWidthElementHover');
          // rolloverTools.setAttribute('data-current-id', 'nill');
          // rolloverTools.setAttribute('data-current-type', 'type');
          // rolloverTools.style.display = 'none';

          // Add move, advance, clone, and remove buttons to rollover tools
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
          removeButton.innerHTML = '<i class="fa fa-trash"></i>';

          // Append input and rollover tools to the wrapper
          inputWrapper.appendChild(inputElement);
          // inputWrapper.appendChild(rolloverTools);

          // Create addElementFlyoutDOM
          addElementFlyoutDOM = document.createElement("div");
          addElementFlyoutDOM.classList.add("addElementFlyoutDOM");
          addElementFlyoutDOM.style.display = "none";
          addElementFlyoutDOM.style.left = "325px";
          addElementFlyoutDOM.innerHTML = '<i class="fa fa-plus"></i>';

          inputWrapper.appendChild(addElementFlyoutDOM);

          // Set the draggable attribute
          inputWrapper.setAttribute("draggable", true);
          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          inputWrapper.appendChild(orangeRolloverTools);
          inputWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          inputWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            inputWrapper.style.borderColor = "orange"; // Change border color on mouseover
            inputWrapper.style.borderWidth = "1px";
            inputWrapper.style.position = "relative";
            inputWrapper.parentNode.parentNode.style.border = "none";
            for (let i = 0; i < 3; i++) {
              inputWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "none";
            }
            for (let i = 0; i < 3; i++) {
              inputWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "none";
            }
            inputWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "none";
            for (
              let i = 3;
              i < inputWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              inputWrapper.parentNode.parentNode.childNodes[
                i
              ].style.borderRight = "none";
              if (
                inputWrapper.parentNode.parentNode.childNodes[i].childNodes[0]
                  .className == "div-boundary"
              ) {
                inputWrapper.parentNode.parentNode.childNodes[
                  i
                ].childNodes[0].style.display = "none";
              }
            }
          });

          inputWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            inputWrapper.style.borderColor = ""; // Reset border color on mouseout
            inputWrapper.style.borderWidth = "";
            inputWrapper.style.position = "unset";
            inputWrapper.parentNode.parentNode.style.border =
              "1px solid rgb(58, 133, 255)";
            for (let i = 0; i < 3; i++) {
              inputWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "block";
            }
            for (let i = 0; i < 3; i++) {
              inputWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "block";
            }
            inputWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "block";
            for (
              let i = 4;
              i < inputWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              inputWrapper.parentNode.parentNode.childNodes[
                i - 1
              ].style.borderRight = "1px dotted rgb(58, 133, 255)";
              if (
                inputWrapper.parentNode.parentNode.childNodes[i - 1]
                  .childNodes[0].className == "div-boundary"
              ) {
                inputWrapper.parentNode.parentNode.childNodes[
                  i - 1
                ].childNodes[0].style.display = "block";
              }
            }
          });
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
          // emailWrapper.style.marginTop = "30px";
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
          emailElement.style.width = "100%"; // This sets the input field to full width

          // Create rollover tools div
          // const rolloverTools = document.createElement('div');
          // rolloverTools.classList.add('de-rollover-tools', 'smallWidthElementHover');
          // rolloverTools.setAttribute('data-current-id', 'nill');
          // rolloverTools.setAttribute('data-current-type', 'type');
          // rolloverTools.style.display = 'none';

          // Add move, advance, clone, and remove buttons to rollover tools
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
          removeButton.innerHTML = '<i class="fa fa-trash"></i>';

          // Append input and rollover tools to the wrapper
          emailWrapper.appendChild(emailElement);
          // emailWrapper.appendChild(rolloverTools);

          // Create addElementFlyoutDOM
          addElementFlyoutDOM = document.createElement("div");
          addElementFlyoutDOM.classList.add("addElementFlyoutDOM");
          addElementFlyoutDOM.style.display = "none";
          addElementFlyoutDOM.style.left = "325px";
          addElementFlyoutDOM.innerHTML = '<i class="fa fa-plus"></i>';

          emailWrapper.appendChild(addElementFlyoutDOM);

          // Set the draggable attribute
          emailWrapper.setAttribute("draggable", true);

          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          emailWrapper.appendChild(orangeRolloverTools);
          emailWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          emailWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            emailWrapper.style.borderColor = "orange"; // Change border color on mouseover
            emailWrapper.style.borderWidth = "1px";
            emailWrapper.style.position = "relative";
            emailWrapper.parentNode.parentNode.style.border = "none";
            for (let i = 0; i < 3; i++) {
              emailWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "none";
            }
            for (let i = 0; i < 3; i++) {
              emailWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "none";
            }
            emailWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "none";
            for (
              let i = 3;
              i < emailWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              emailWrapper.parentNode.parentNode.childNodes[
                i
              ].style.borderRight = "none";
              if (
                emailWrapper.parentNode.parentNode.childNodes[i].childNodes[0]
                  .className == "div-boundary"
              ) {
                emailWrapper.parentNode.parentNode.childNodes[
                  i
                ].childNodes[0].style.display = "none";
              }
            }
          });

          emailWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            emailWrapper.style.borderColor = ""; // Reset border color on mouseout
            emailWrapper.style.borderWidth = "";
            emailWrapper.style.position = "unset";
            emailWrapper.parentNode.parentNode.style.border =
              "1px solid rgb(58, 133, 255)";
            for (let i = 0; i < 3; i++) {
              emailWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "block";
            }
            for (let i = 0; i < 3; i++) {
              emailWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "block";
            }
            emailWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "block";
            for (
              let i = 4;
              i < emailWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              emailWrapper.parentNode.parentNode.childNodes[
                i - 1
              ].style.borderRight = "1px dotted rgb(58, 133, 255)";
              if (
                emailWrapper.parentNode.parentNode.childNodes[i - 1]
                  .childNodes[0].className == "div-boundary"
              ) {
                emailWrapper.parentNode.parentNode.childNodes[
                  i - 1
                ].childNodes[0].style.display = "block";
              }
            }
          });
          this.elementToInsert = emailWrapper;
          this.existingElement = false;
          break;

        //* beginning of the NEW CODE
        case "2step-combo":
          const comboWrapper = document.createElement("div");
          comboWrapper.classList.add("container-fluid");
          comboWrapper.id = "2step-form1";

          const card = document.createElement("div");
          card.classList.add(
            "card",
            "px-5",
            "pb-5",
            "col-12",
            "col-lg-8",
            "mx-auto"
          );

          const container = document.createElement("div");
          container.classList.add("container", "mt-3");

          const form = document.createElement("form");
          form.id = "two-step-order-form";
          form.classList.add("container-order-form-two-step");

          const formTitle = document.createElement("div");
          formTitle.classList.add("form-title");

          const row = document.createElement("div");
          row.classList.add("row");

          const colMd6Step1 = createFormStep("Your profile", "Contact details");
          const colMd6Step2 = createFormStep(
            "Normally $297. Use coupon code FAP to get 90% OFF",
            "Billing details"
          );

          row.appendChild(colMd6Step1);
          row.appendChild(colMd6Step2);

          formTitle.appendChild(row);

          const dividerForm = document.createElement("div");
          dividerForm.classList.add("divider-form");
          dividerForm.innerHTML = '<i class="fas fa-caret-up caret-up"></i>';

          const formBody = document.createElement("div");
          formBody.classList.add("form-body", "pt-4");
          formBody.id = "div-ctwo-setp-order";

          const sectionInfo = document.createElement("section");
          sectionInfo.classList.add("info");

          const inputs1 = [
            "Company Name..",
            "Full Name...",
            "Email Address...",
            "Phone Number...",
          ];
          inputs1.forEach((placeholder) => {
            const input = createInput("text", placeholder);
            sectionInfo.appendChild(input);
          });

          const sectionShipping = document.createElement("section");
          sectionShipping.classList.add("shipping");

          const inputs2 = [
            "Full Address...",
            "City Name...",
            "State / Province...",
            "Zip Code...",
          ];
          inputs2.forEach((placeholder) => {
            const input = createInput("text", placeholder);
            sectionShipping.appendChild(input);
          });

          const select = document.createElement("select");
          select.classList.add("form-select", "mb-3");
          select.value = "";
          select.name = "country";

          const option = document.createElement("option");
          option.disabled = true;
          option.value = "";
          option.textContent = "Select Country";
          select.appendChild(option);

          const countryOption = document.createElement("option");
          countryOption.value = "US";
          countryOption.textContent = "United Kingdom";
          select.appendChild(countryOption);

          sectionShipping.appendChild(select);

          const sectionButton = document.createElement("section");

          const button = document.createElement("button");
          button.classList.add("btn", "btn-success", "w-100", "p-2");
          button.type = "button";
          button.onclick = () => showForm("2step-form1");
          button.innerHTML = `<i class="fas fa-arrow-right fs-5"></i>
                      <span class="main-text fs-4" style="font-weight: 600;"> &nbsp; Go To Step #2 </span><br>
                      <span class="sub-text"></span>`;

          sectionButton.appendChild(button);

          const orderFormFooter = document.createElement("section");
          orderFormFooter.classList.add("order-form-footer");
          orderFormFooter.innerHTML =
            "<span>We Respect Your Privacy &amp; Information.</span>";

          formBody.appendChild(sectionInfo);
          formBody.appendChild(sectionShipping);
          formBody.appendChild(sectionButton);
          formBody.appendChild(orderFormFooter);

          form.appendChild(formTitle);
          form.appendChild(dividerForm);
          form.appendChild(formBody);

          container.appendChild(form);
          card.appendChild(container);
          comboWrapper.appendChild(card);

          this.elementToInsert = comboWrapper;
          this.existingElement = false;
          break;

        //* the end of NEW CODE

        case "text-field":
          elementToInsert = document.createElement("input");
          elementToInsert.classList.add("draggable");
          elementToInsert.setAttribute("draggable", true);
          elementToInsert.setAttribute("placeholder", "Text");
          elementToInsert.setAttribute("disabled", true);
          elementToInsert.setAttribute("id", `field-${Date.now()}`);
          this.elementToInsert = elementToInsert;
          this.existingElement = false;
          break;

        case "email-field":
          elementToInsert = document.createElement("input");
          elementToInsert.classList.add("draggable");
          elementToInsert.setAttribute("draggable", true);
          elementToInsert.setAttribute("placeholder", "Email");
          elementToInsert.setAttribute("disabled", true);
          elementToInsert.setAttribute("id", `field-${Date.now()}`);
          this.elementToInsert = elementToInsert;
          this.existingElement = false;
          break;

        case "phone-field":
          const phoneWrapper = document.createElement("div");
          phoneWrapper.classList.add(
            "draggable",
            "de",
            "elSubHeadlineWrapper",
            "ui-droppable",
            "de-editable"
          );
          phoneWrapper.setAttribute("id", `phone-${Date.now()}`);
          phoneWrapper.setAttribute("data-de-type", "phone");
          phoneWrapper.setAttribute("data-de-editing", "false");
          phoneWrapper.setAttribute("data-title", "phone");
          phoneWrapper.setAttribute("data-ce", "true");
          phoneWrapper.setAttribute("data-trigger", "none");
          phoneWrapper.setAttribute("data-animate", "fade");
          phoneWrapper.setAttribute("data-delay", "500");
          phoneWrapper.style.outline = "none";
          phoneWrapper.style.cursor = "pointer";
          phoneWrapper.setAttribute("aria-disabled", "false");
          phoneWrapper.setAttribute("draggable", true);
          phoneWrapper.innerHTML =
            '<p style="display:flex; margin:auto; justify-content:center;">Phone</p>';
          var orangeRolloverTools = createOrangeRolloverTools();
          var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

          // Append all the elements to the wrapper
          phoneWrapper.appendChild(orangeRolloverTools);
          phoneWrapper.appendChild(orangeArrowRolloverTools);

          // Add event listeners to show/hide rollover tools

          // Add event listeners to show/hide rollover tools and change border color on mouseover
          phoneWrapper.addEventListener("mouseenter", () => {
            orangeRolloverTools.style.display = "block";
            orangeArrowRolloverTools.style.display = "block";
            orangeRolloverTools.childNodes[0].style.display = "block";
            orangeRolloverTools.childNodes[1].style.display = "block";
            orangeRolloverTools.childNodes[2].style.display = "block";
            orangeArrowRolloverTools.childNodes[0].style.display = "block";
            orangeArrowRolloverTools.childNodes[1].style.display = "block";
            phoneWrapper.style.borderColor = "orange"; // Change border color on mouseover
            phoneWrapper.style.borderWidth = "1px";
            phoneWrapper.style.position = "relative";
            phoneWrapper.parentNode.parentNode.style.border = "none";
            for (let i = 0; i < 3; i++) {
              phoneWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "none";
            }
            for (let i = 0; i < 3; i++) {
              phoneWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "none";
            }
            phoneWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "none";
            for (
              let i = 3;
              i < phoneWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              phoneWrapper.parentNode.parentNode.childNodes[
                i
              ].style.borderRight = "none";
              if (
                phoneWrapper.parentNode.parentNode.childNodes[i].childNodes[0]
                  .className == "div-boundary"
              ) {
                phoneWrapper.parentNode.parentNode.childNodes[
                  i
                ].childNodes[0].style.display = "none";
              }
            }
          });

          phoneWrapper.addEventListener("mouseleave", () => {
            orangeRolloverTools.style.display = "none";
            orangeArrowRolloverTools.style.display = "none";
            orangeRolloverTools.childNodes[0].style.display = "none";
            orangeRolloverTools.childNodes[1].style.display = "none";
            orangeRolloverTools.childNodes[2].style.display = "none";
            orangeArrowRolloverTools.childNodes[0].style.display = "none";
            orangeArrowRolloverTools.childNodes[1].style.display = "none";
            phoneWrapper.style.borderColor = ""; // Reset border color on mouseout
            phoneWrapper.style.borderWidth = "";
            phoneWrapper.style.position = "unset";
            phoneWrapper.parentNode.parentNode.style.border =
              "1px solid rgb(58, 133, 255)";
            for (let i = 0; i < 3; i++) {
              phoneWrapper.parentNode.parentNode.childNodes[0].childNodes[
                i
              ].style.display = "block";
            }
            for (let i = 0; i < 3; i++) {
              phoneWrapper.parentNode.parentNode.childNodes[1].childNodes[
                i
              ].style.display = "block";
            }
            phoneWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
              "block";
            for (
              let i = 4;
              i < phoneWrapper.parentNode.parentNode.children.length;
              i++
            ) {
              phoneWrapper.parentNode.parentNode.childNodes[
                i - 1
              ].style.borderRight = "1px dotted rgb(58, 133, 255)";
              if (
                phoneWrapper.parentNode.parentNode.childNodes[i - 1]
                  .childNodes[0].className == "div-boundary"
              ) {
                phoneWrapper.parentNode.parentNode.childNodes[
                  i - 1
                ].childNodes[0].style.display = "block";
              }
            }
          });
          this.elementToInsert = phoneWrapper;
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

  this.onDragEnd = function (e, draggable) {
    //update the main conatiner and popup container so it can be saved
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

    // Add a click event listener for settings sidebar

    console.log("adding elSettings");
    var settingsSidebar = document.getElementById("settingsSidebar");
    var anchor = this.elementToInsert.querySelector("a.elSettings"); // Find the anchor element within 'this'

    if (anchor) {
      anchor.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior

        if (settingsSidebar.style.left === "0px") {
          closeSidebar();
          // console.log('closing inside');
        } else {
          openSidebar(this);
          // console.log('opening inside');
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

  this.addEventListenerForDraggableItem = function (element) {
    console.log("ele", element);
    element.addEventListener("dragstart", (e) => this.onDragStart(e, element));
    element.addEventListener("dragend", (e) => this.onDragEnd(e, element));

    const elHeadlineElements = element.querySelectorAll(
      ".elHeadline, .elText, .elSubHeadline"
    ); // Select .elHeadline elements inside the div

    console.log(elHeadlineElements, "here is elment of headlines");

    // Add click event listener for content editing to each .elHeadline element
    elHeadlineElements.forEach((elHeadlineElement) => {
      elHeadlineElement.addEventListener("mousedown", function () {
        console.log("clicked to edit");
        elHeadlineElement.setAttribute("contenteditable", "true");
        elHeadlineElement.style.cursor = "text";
      });
    });
  };

  this.addEventListenersForContainer = function (container) {
    container.addEventListener("dragover", (e) =>
      this.onDragHover(e, container, false)
    );

    console.log("here is listener of drop and drag", container);
    container.addEventListener("drop", (e) => this.onDragDrop(e), false);
    container.addEventListener("dragleave", (e) => this.onDragLeave(e), false);
    container.addEventListener("dragenter", (e) => this.onDragEnter(e), false);
  };

  // Text section
  this.addEventListenerForText = function (textElement) {
    var orangeRolloverTools = createOrangeRolloverTools();
    var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

    textElement.appendChild(orangeRolloverTools);
    textElement.appendChild(orangeArrowRolloverTools);
    textElement.style.padding = "1.5rem 1rem 0.5rem 1rem";

    textElement.addEventListener("mouseenter", (e) => {
      orangeRolloverTools.style.display = "block";
      orangeArrowRolloverTools.style.display = "block";
      orangeRolloverTools.childNodes[0].style.display = "block";
      orangeRolloverTools.childNodes[1].style.display = "block";
      orangeRolloverTools.childNodes[2].style.display = "block";
      orangeArrowRolloverTools.childNodes[0].style.display = "block";
      orangeArrowRolloverTools.childNodes[1].style.display = "block";
      textElement.style.border = "1px solid orange";
      textElement.style.position = "relative";
      textElement.parentNode.parentNode.style.border = "none";
      for (let i = 0; i < 3; i++) {
        textElement.parentNode.parentNode.childNodes[0].childNodes[
          i
        ].style.display = "none";
      }
      for (let i = 0; i < 3; i++) {
        textElement.parentNode.parentNode.childNodes[1].childNodes[
          i
        ].style.display = "none";
      }
      textElement.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
        "none";
      for (
        let i = 3;
        i < textElement.parentNode.parentNode.children.length;
        i++
      ) {
        textElement.parentNode.parentNode.childNodes[i].style.borderRight =
          "none";
        if (
          textElement.parentNode.parentNode.childNodes[i].childNodes[0]
            .className == "div-boundary"
        ) {
          textElement.parentNode.parentNode.childNodes[
            i
          ].childNodes[0].style.display = "none";
        }
      }
    });
    textElement.addEventListener("mouseleave", (e) => {
      orangeRolloverTools.style.display = "none";
      orangeArrowRolloverTools.style.display = "none";
      orangeRolloverTools.childNodes[0].style.display = "none";
      orangeRolloverTools.childNodes[1].style.display = "none";
      orangeRolloverTools.childNodes[2].style.display = "none";
      orangeArrowRolloverTools.childNodes[0].style.display = "none";
      orangeArrowRolloverTools.childNodes[1].style.display = "none";
      textElement.style.position = "unset";
      textElement.style.border = "none";
      textElement.parentNode.parentNode.style.border =
        "1px solid rgb(58, 133, 255)";
      for (let i = 0; i < 3; i++) {
        textElement.parentNode.parentNode.childNodes[0].childNodes[
          i
        ].style.display = "block";
      }
      for (let i = 0; i < 3; i++) {
        textElement.parentNode.parentNode.childNodes[1].childNodes[
          i
        ].style.display = "block";
      }
      textElement.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
        "block";
      editTextRolloverTools.style.display = "none";
      for (let i = 0; i < 8; i++) {
        editTextRolloverTools.childNodes[i].style.display = "none";
      }
      for (
        let i = 4;
        i < textElement.parentNode.parentNode.children.length;
        i++
      ) {
        textElement.parentNode.parentNode.childNodes[i - 1].style.borderRight =
          "1px dotted rgb(58, 133, 255)";
        if (
          textElement.parentNode.parentNode.childNodes[i - 1].childNodes[0]
            .className == "div-boundary"
        ) {
          textElement.parentNode.parentNode.childNodes[
            i - 1
          ].childNodes[0].style.display = "block";
        }
      }
      editTextRolloverTools.style.display = "none";
      for (let i = 0; i < 8; i++) {
        editTextRolloverTools.childNodes[i].style.display = "none";
      }
    });

    // Edit Text
    var editTextRolloverTools = createEditTextRolloverTools();

    textElement.appendChild(editTextRolloverTools);

    textElement.addEventListener("mousedown", (e) => {
      const boundingRect = textElement.getBoundingClientRect();
      const width = boundingRect.width;
      const height = boundingRect.height;
      const x = e.clientX - boundingRect.left;
      const y = e.clientY - boundingRect.top;

      // Calculate 80% width and height range
      const minWidth = width * 0.1; // 10% from the left
      const maxWidth = width * 0.9; // 10% from the right
      const minHeight = height * 0.1; // 10% from the top
      const maxHeight = height * 0.9; // 10% from the bottom

      // Check if the click position is within the 80% center part
      if (x >= minWidth && x <= maxWidth && y >= minHeight && y <= maxHeight) {
        textElement.style.border = "1px solid #777";
        for (let i = 0; i < 3; i++) {
          textElement.childNodes[1].childNodes[i].style.display = "none";
        }
        for (let i = 0; i < 2; i++) {
          textElement.childNodes[2].childNodes[i].style.display = "none";
        }
        editTextRolloverTools.style.display = "block";
        for (let i = 0; i < 8; i++) {
          editTextRolloverTools.childNodes[i].style.display = "block";
        }
      }
    });
  };

  this.onDragHover = function (e, container) {
    e.preventDefault();
    this.afterElement = this.getDragAfterElement(container, e.clientY);

    // console.log("here is insert drag element into col-div", this.placeholder);
    if (this.afterElement == null) {
      container.appendChild(this.placeholder);
    } else {
      container.insertBefore(this.placeholder, this.afterElement);
    }
  };
  this.onDragEnter = function (e) {
    e.preventDefault();
  };
  this.onDragLeave = function (e) {
    e.preventDefault();
  };

  this.onDragDrop = function (e) {
    e.preventDefault();

    console.log(
      "here is replace with element insert and this.place holder,",
      this.elementToInsert,
      this.placeholder
    );
    // let data = e.dataTransfer.getData("elementid");
    this.placeholder.replaceWith(this.elementToInsert);
  };

  this.init = function () {
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

//* BEGINNING FOR THE 2PART FORM

function createFormContainer(id, heading1, subHeading1, heading2, subHeading2) {
  const container = document.createElement("div");
  container.classList.add("container-fluid");
  container.id = id;

  const card = document.createElement("div");
  card.classList.add("card", "px-5", "pb-5", "col-12", "col-lg-8", "mx-auto");

  const containerInner = document.createElement("div");
  containerInner.classList.add("container", "mt-3");

  const formTitle = document.createElement("div");
  formTitle.classList.add("form-title");

  const row = document.createElement("div");
  row.classList.add("row");

  const colMd6Step1 = createFormStep("Your profile222", "Contact details");
  const colMd6Step2 = createFormStep(
    "Normally $297. Use coupon code FAP to get 90% OFF",
    "Billing details"
  );

  row.appendChild(colMd6Step1);
  row.appendChild(colMd6Step2);

  formTitle.appendChild(row);
  containerInner.appendChild(formTitle);

  card.appendChild(containerInner);
  container.appendChild(card);

  return container;
}

function createForm(id, formClass, nextFormId) {
  const form = document.createElement("form");
  form.id = id;
  form.classList.add(formClass);

  const dividerForm = document.createElement("div");
  dividerForm.classList.add("divider-form");
  dividerForm.innerHTML = '<i class="fas fa-caret-up caret-up"></i>';

  form.appendChild(dividerForm);

  return form;
}

function createFormStep(heading, subHeading) {
  const colMd6 = document.createElement("div");
  colMd6.classList.add("col-md-6");

  const rowInner = document.createElement("div");
  rowInner.classList.add("row");

  const formStep = document.createElement("div");
  formStep.classList.add("form-step", "text-center", "col-md-11", "p-0");
  formStep.innerHTML = `<span class="form-heading active">${heading}</span> <br>
                        <span class="form-sub-heading">${subHeading}</span>`;

  const colMd1 = document.createElement("div");
  colMd1.classList.add("col-md-1", "p-0");

  const hr = document.createElement("hr");
  hr.classList.add("separator-vertical", "m-0");

  rowInner.appendChild(formStep);
  rowInner.appendChild(colMd1);
  rowInner.appendChild(hr);

  colMd6.appendChild(rowInner);

  return colMd6;
}

function createFormBody(id, inputs1, inputs2, country) {
  const formBody = document.createElement("div");
  formBody.classList.add("form-body", "pt-4");
  formBody.id = id;

  const sectionInfo = document.createElement("section");
  sectionInfo.classList.add("info");

  inputs1.forEach((placeholder) => {
    const input = createInput("text", placeholder);
    sectionInfo.appendChild(input);
  });

  const sectionShipping = document.createElement("section");
  sectionShipping.classList.add("shipping");

  inputs2.forEach((placeholder) => {
    const input = createInput("text", placeholder);
    sectionShipping.appendChild(input);
  });

  const select = document.createElement("select");
  select.classList.add("form-select", "mb-3");
  select.name = "country";

  const option = document.createElement("option");
  option.disabled = true;
  option.value = "";
  option.textContent = "Select Country";

  select.appendChild(option);

  const countryOption = document.createElement("option");
  countryOption.value = "US";
  countryOption.textContent = country;

  select.appendChild(countryOption);

  sectionShipping.appendChild(select);

  const sectionButton = document.createElement("section");

  const button = document.createElement("button");
  button.classList.add("btn", "btn-success", "w-100", "p-2");
  button.type = "button";
  button.onclick = () => showForm(nextFormId);
  button.innerHTML = `<i class="fas fa-arrow-right fs-5"></i>
                      <span class="main-text fs-4" style="font-weight: 600;"> &nbsp; Go To Step #2 </span><br>
                      <span class="sub-text"></span>`;

  sectionButton.appendChild(button);

  formBody.appendChild(sectionInfo);
  formBody.appendChild(sectionShipping);
  formBody.appendChild(sectionButton);

  return formBody;
}

function createInput(type, placeholder) {
  const input = document.createElement("input");
  input.type = type;
  input.name = placeholder.toLowerCase().replace(/\s/g, "");
  input.placeholder = placeholder;
  input.classList.add("form-control", "mb-3");

  return input;
}

function createFormButtons(nextFormId, buttonText) {
  const section = document.createElement("section");
  section.classList.add("order-form-footer");

  const button = document.createElement("button");
  button.classList.add("btn", "btn-success", "w-100", "p-2");
  button.onclick = () => showForm(nextFormId);
  button.innerHTML = `<i class="fas fa-arrow-right fs-5"></i>
                      <span class="main-text fs-4" style="font-weight: 600;"> &nbsp; ${buttonText} </span><br>
                      <span class="sub-text"></span>`;

  section.appendChild(button);

  return section;
}

function createPaymentForm() {
  const form = document.createElement("form");
  form.classList.add("form-payment", "order-form-v2");

  const paymentContent = document.createElement("div");
  paymentContent.classList.add("payment-content");

  const paymentForm = document.createElement("div");
  paymentForm.id = "ctwo-setp-order-payment-form";
  paymentForm.classList.add("payment-form");

  const vSpinner = document.createElement("div");
  vSpinner.classList.add("v-spinner", "loaderClass");
  vSpinner.style.display = "none";

  const vMoon1 = createVMoon("30px", "30px", "100%", "rgb(24, 139, 246)");
  const vMoon2 = createVMoon(
    "4.28571px",
    "4.28571px",
    "100%",
    "rgb(24, 139, 246)"
  );
  const vMoon3 = createVMoon(
    "30px",
    "30px",
    "100%",
    "rgb(24, 139, 246)",
    "4.28571px"
  );

  vSpinner.appendChild(vMoon1);
  vSpinner.appendChild(vMoon2);
  vSpinner.appendChild(vMoon3);

  paymentForm.appendChild(vSpinner);

  paymentContent.appendChild(paymentForm);
  form.appendChild(paymentContent);

  return form;
}

function createVMoon(height, width, borderRadius, backgroundColor, border) {
  const vMoon = document.createElement("div");
  vMoon.classList.add("v-moon");
  vMoon.style.height = height;
  vMoon.style.width = width;
  vMoon.style.borderRadius = borderRadius;
  vMoon.style.backgroundColor = backgroundColor;

  if (border) {
    vMoon.style.border = border;
  }

  return vMoon;
}

function showForm(formId) {
  const currentForm = document.getElementById(formId);

  if (currentForm) {
    console.log(currentForm);
    currentForm.classList.add("hidden");
  }

  // You may want to hide other forms if needed
}

function appendElements(parent, elements) {
  elements.forEach((element) => {
    parent.appendChild(element);
  });
}

//* END FOR 2PART FORM

function updateTextareaFromContainer(containerId, textareaName) {
  const mainContainer = document.getElementById(containerId);
  const textarea = document.querySelector(`textarea[name="${textareaName}"]`);

  // textarea.addEventListener("mouseenter", () => {
  //   textarea.style.border = "3px solid #37ca37";
  // });
  // textarea.addEventListener("mouseleave", () => {
  //   textarea.style.border = "none";
  // });

  if (mainContainer && textarea) {
    textarea.value = mainContainer.innerHTML;
  } else {
    console.error("Container or textarea not found");
  }
}

function isPopupOpen() {
  var popup = document.querySelector(".popup-container");
  return popup.classList.contains("open"); // Or check the display style
}

// document.addEventListener('turbolinks:load', () => {
//   const customDragnDrop = new CustomDragAndDrop();
//   customDragnDrop.init();
//   customDragnDrop.loadSections();
// });

// $(document).ready(function () { // This one seems to work when it just loads the page 1st time but the rest of the times it works when loads under in $(document).off().on('ready turbolinks:load'
//   let customDragnDrop = new CustomDragAndDrop();
//   customDragnDrop.init();
//   customDragnDrop.loadSections(); // this one should load again
// });

// * MAIN CODE SECTION ------------------------------------------------------------------

var customDragnDropInitialized = false;

// document.addEventListener('turbolinks:load', () => {
document.addEventListener("DOMContentLoaded", function (e) {
  if (!customDragnDropInitialized) {
    const custompPopUpDragAndDrop = new CustompPopUpDragAndDrop();
    custompPopUpDragAndDrop.init();
    console.log("customDragnDropInitialized=true");
    custompPopUpDragAndDrop.loadSections();
    console.log("we loaded the Sections");
    customDragnDropInitialized = true;
    // Add a click event listener to the button
    const addSectionButton = document.getElementById("add-section-button");
    if (addSectionButton) {
      addSectionButton.addEventListener("click", () => {
        // customDragnDrop.addSection();
        if (slidingPopup1.style.right === "0px") {
          slidingPopup1.style.right = "-420px"; // Slide out the popup
        } else {
          slidingPopup1.style.right = "0px"; // Slide in the popup
        }
      });
    }
  } else {
  }
});

//here we will add the listener to save the HTML before they submit the form
document.addEventListener("DOMContentLoaded", function () {
  const formWrapper = document.getElementById("editorFormWrapper");
  const form = formWrapper.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      // Prevent the form from submitting immediately.
      e.preventDefault();

      // Call the updateTextareaFromContainer function.
      updateTextareaFromContainer(
        "da-main-container",
        "step[large_html_blob_content]"
      );
      updateTextareaFromContainer(
        "da-popup-container",
        "step[popup_html_blob_content]"
      );
      console.log("save it");
      // Now, you can choose to submit the form manually.
      form.submit();
    });
  }
});

// The popup START
const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const popupContainer = document.querySelector(".popup-container");
const thebody = document.querySelector("body");
const damaincontainer = document.getElementById("da-main-container");

openPopupButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Display the popup
  popupContainer.classList.add("open");

  popupContainer.style.display = "block";
  thebody.style.backgroundColor = "rgba(100, 100, 100, 0.1)"; // Red with 50% opacity
  // damaincontainer.style.opacity = 0.5;
  damaincontainer.style.display = "none"; // Set the background color to red
});

closePopupButton.addEventListener("click", function (event) {
  event.preventDefault();
  popupContainer.classList.remove("open");
  popupContainer.style.display = "none";
  damaincontainer.style.display = "block"; // Set the background color to red
});
// The popup END

//------------------------------------------------------------------
//settingsSidebar

let selectedElSettings = null; // Global variable to store the selected .elSettings element

// Select all anchor elements within elements with class "elSettings"
var elSettingsAnchors = document.querySelectorAll("a.elSettings ");
var settingsSidebar = document.getElementById("settingsSidebar");

function openSidebar(element) {
  selectedElSettings = element.id; // Store the clicked element's ID
  settingsSidebar.style.left = "0";
  loadPresetSettings(element);
}

function closeSidebar() {
  selectedElSettings = null;
  settingsSidebar.style.left = "-100%";
}

// Attach the click event to each anchor element within "elSettings" buttons
elSettingsAnchors.forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior
    if (settingsSidebar.style.left === "0px") {
      closeSidebar();
      // console.log('closing outside');
    } else {
      // console.log('opening outside');
      openSidebar(this);
    }
  });
});

// hide the url input -- this is only when the page is already loaded -- it looks like the code  in the loadPresetSettings, but we need this too

const urlInputContainers = document.querySelectorAll(".url-input-container");
const actionSelect = document.getElementById("action-select");

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
  // Action select dropdown -----------------------------------------
  const urlInputContainers = document.querySelectorAll(".url-input-container");
  const actionSelect = document.getElementById("action-select");
  const actionText = document.getElementById(selectedElSettings);
  const urlInput = document.getElementById("url-input");

  // Initialize the dropdown with the current value of the href attribute
  readHref = actionText.getAttribute("href");
  if (
    readHref === "#open-popup" ||
    readHref === "#submit-form" ||
    readHref === "#"
  ) {
    actionSelect.value = readHref;
  } else {
    actionSelect.value = "#";
    urlInput.value = readHref;
  }

  urlInputContainers.forEach((container) => {
    //if doesn't equal those vals the show the field
    if (!(readHref === "#open-popup" || readHref === "#submit-form")) {
      container.style.display = "flex";
      if (urlInput.value.trim() === "") {
        urlInput.value = "#";
      }
    } else {
      container.style.display = "none";
    }
  });

  // Listen for changes in the dropdown value----------------
  actionSelect.addEventListener("change", function () {
    if (selectedElSettings) {
      const targetElement = document.getElementById(selectedElSettings);
      // Update the href attribute with the selected value from the dropdown
      targetElement.setAttribute("href", actionSelect.value);
    }
  });

  // Listen for changes in the url value---------------------
  urlInput.addEventListener("input", function () {
    if (selectedElSettings) {
      const targetElement = document.getElementById(selectedElSettings);
      // Update the href attribute with the selected value from the dropdown
      targetElement.setAttribute("href", urlInput.value);
      // console.log(urlInput.value);
    }
  });
  // buttonTextInput -----------------------------------------
  // const buttonTextInput = document.getElementById('button-text-input');
  // const buttonText = document.getElementById(selectedElSettings);
  // buttonTextInput.value = buttonText.textContent;

  // fontSizeSlider -----------------------------------------
  const fontSizeSlider = document.getElementById("font-size-slider");
  // Get the initial font size from the selected element
  const initialFontSize = window.getComputedStyle(element).fontSize;
  // Set the slider value to the initial font size
  fontSizeSlider.value = parseFloat(initialFontSize);
  // Listen for changes in the slider value
  fontSizeSlider.addEventListener("input", function () {
    if (selectedElSettings) {
      // Apply the font size to the selected .elSettings element
      const targetElement = document.getElementById(selectedElSettings);
      const fontSize = this.value;
      targetElement.style.fontSize = fontSize + "px";
    }
  });

  // buttonTextInput -----------------------------------------
  const buttonTextInput = document.getElementById("button-text-input");
  const buttonText = document.getElementById(selectedElSettings);
  buttonTextInput.value = buttonText.textContent;
  // Listen for changes in buttonTextInput
  buttonTextInput.addEventListener("input", function () {
    if (selectedElSettings) {
      const targetElement = document.getElementById(selectedElSettings);
      targetElement.innerHTML = this.value;
    }
  });

  // font family dropdown -----------------------------------------
  const fontFamilySelect = document.getElementById("font-family-select");
  const selectText = document.getElementById(selectedElSettings); // Get the element by its ID
  fontFamilySelect.value = selectText.style.fontFamily.replace(/['"]/g, "");

  // Listen for changes for font-----------------------------
  fontFamilySelect.addEventListener("change", function () {
    if (selectedElSettings) {
      const targetElement = document.getElementById(selectedElSettings);

      targetElement.style.fontFamily = fontFamilySelect.value;
    }
  });
}

// Add event listener to the search input
document.querySelector(".search-panel").addEventListener("input", function () {
  const searchKeyword = this.value.toLowerCase();
  const elementPanels = document.querySelectorAll(".element-panel");

  // Loop through each element panel and check if it matches the search keyword
  elementPanels.forEach(function (panel) {
    const panelText = panel.textContent.toLowerCase();
    if (panelText.includes(searchKeyword)) {
      panel.style.display = "flex"; // Show the element panel
    } else {
      panel.style.display = "none"; // Hide the element panel
    }
  });
});
