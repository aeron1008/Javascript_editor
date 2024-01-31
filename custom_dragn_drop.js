var slidingPopup1 = document.getElementById("rightSlidingPopup1");
var slidingPopup2 = document.getElementById("rightSlidingPopup2");
var slidingPopup3 = document.getElementById("rightSlidingPopup3");
var slidingPopup4 = document.getElementById("rightSlidingPopup4");
var slidingPopup5 = document.getElementById("rightSlidingPopup5");
var headlineSidebar = document.getElementById("headlineSidebar");
var settingsSidebar = document.getElementById("settingsSidebar");
var leftSlidingPopup = document.getElementById("leftSlidingPopup");
var openElementsPanel = document.getElementById("add-element-button");
var basicContainerSection = document.getElementById("basic-container");
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
var id = undefined;

var draggables = undefined;
var containers = undefined;
var placeholder = undefined;
var elementToInsert = "";
var afterElement = undefined;
var sectionCount = 0;
var mainContainer = undefined;
var popupContainer = undefined;
var existingElement = undefined;

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
  greenAdvanceButton.setAttribute("id", `green_advanced-${Date.now()}`);
  greenAdvanceButton.innerHTML = '<i class="fa fa-cog"></i>';
  greenAdvanceButton.setAttribute(
    "onclick",
    "greenGearElement(parentElement.parentElement.id)"
  );

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
    "removeElement(parentElement.parentElement)"
  );

  var greenArrowUpButton = document.createElement("div");
  greenArrowUpButton.classList.add("de-rollover-arrow-up");
  greenArrowUpButton.style.backgroundColor = "#37ca37";
  greenArrowUpButton.style.display = "none";
  greenArrowUpButton.setAttribute("type", "button");
  greenArrowUpButton.innerHTML = '<i class="fa fa-arrow-up"></i>';
  greenArrowUpButton.setAttribute(
    "onclick",
    "moveUp(parentElement.parentElement)"
  );

  var greenArrowDownButton = document.createElement("div");
  greenArrowDownButton.classList.add("de-rollover-arrow-down");
  greenArrowDownButton.style.backgroundColor = "#37ca37";
  greenArrowDownButton.style.display = "none";
  greenArrowDownButton.setAttribute("type", "button");
  greenArrowDownButton.innerHTML = '<i class="fa fa-arrow-down"></i>';
  greenArrowDownButton.setAttribute(
    "onclick",
    "moveDown(parentElement.parentElement)"
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

  greenCloneButton.addEventListener("click", function () {
    greenClone(width);
  });
}

function createRowSection() {
  var rowSection = document.createElement("div");
  var key = new Date().getTime();
  rowSection.setAttribute("id", key);
  rowSection.classList.add("row-section");
  rowSection.style.margin = "auto";

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
    "removeElement(parentElement.parentElement)"
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
    "rowMoveUp(parentElement.parentElement.parentElement)"
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
    "rowMoveDown(parentElement.parentElement.parentElement)"
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
  blueGearButton.setAttribute("id", `blue_gear-${Date.now()}`);
  blueGearButton.setAttribute("id", `blue_gear-${Date.now()}`);
  blueGearButton.setAttribute("onclick", "blueGearElement(parentElement.parentElement.id)");

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
  divCol1.classList.add("col-div", "blue-container");
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

function addElement() {
  var blueAddElementRolloverTools = document.createElement("div");
  blueAddElementRolloverTools.classList.add(
    "add-row-de-rollover-tools",
    "smallWidthElementHover",
    "d-flex"
  );
  blueAddElementRolloverTools.setAttribute("data-current-id", "nill");
  blueAddElementRolloverTools.setAttribute("data-current-type", "type");
  blueAddElementRolloverTools.style.display = "none";

  var blueAddElementButton = document.createElement("div");
  blueAddElementButton.innerHTML = '<button class="add-element"> + Add Element</button>';
  blueAddElementButton.style.backgroundColor = "rgb(58, 133, 255)";
  blueAddElementButton.style.borderRadius = "3px";
  blueAddElementButton.style.display = "none";
  blueAddElementButton.setAttribute("id", `blue_add-${Date.now()}`);

  blueAddElementRolloverTools.appendChild(blueAddElementButton);

  blueAddElementButton.addEventListener('click', function () {
    console.log("blue add element button clicked");
    openElementsPanel.click();
  })
  return blueAddElementRolloverTools;
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
  blueAddElementRolloverTools = addElement();
  divCol1.appendChild(blueAddElementRolloverTools);

  rowSection.addEventListener("mouseenter", (e) => {
    if (divCol1.childNodes[1]) {
      blueAddElementRolloverTools.style.display = "none";
      blueAddElementRolloverTools.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools.style.display = "block";
      blueAddElementRolloverTools.childNodes[0].style.display = "block";
    }
  });
  rowSection.addEventListener("mouseleave", (e) => {
    blueAddElementRolloverTools.style.display = "none";
    blueAddElementRolloverTools.childNodes[0].style.display = "none";
  });
  loadSections()
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

  blueAddElementRolloverTools = addElement();
  blueAddElementRolloverTools1 = addElement();
  divCol2.appendChild(blueAddElementRolloverTools);
  divCol2_1.appendChild(blueAddElementRolloverTools1);

  slidingPopup2.style.right = "-420px";
  rowSection.addEventListener("mouseenter", (e) => {
    divCol2.style.borderRight = "1px dotted #3a85ff";
    divCol2Boundary.style.display = "block";
    if (divCol2.childNodes[2]) {
      blueAddElementRolloverTools.style.display = "none";
      blueAddElementRolloverTools.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools.style.display = "block";
      blueAddElementRolloverTools.childNodes[0].style.display = "block";
    }
    if (divCol2_1.childNodes[1]) {
      blueAddElementRolloverTools1.style.display = "none";
      blueAddElementRolloverTools1.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools1.style.display = "block";
      blueAddElementRolloverTools1.childNodes[0].style.display = "block";
    }
  });
  rowSection.addEventListener("mouseleave", (e) => {
    divCol2.style.borderRight = "none";
    divCol2Boundary.style.display = "none";
    blueAddElementRolloverTools.style.display = "none";
    blueAddElementRolloverTools1.style.display = "none";
    blueAddElementRolloverTools.childNodes[0].style.display = "none";
    blueAddElementRolloverTools1.childNodes[0].style.display = "none";
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
  // configDragDrop();
  loadSections()
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

  blueAddElementRolloverTools = addElement();
  blueAddElementRolloverTools1 = addElement();
  blueAddElementRolloverTools2 = addElement();

  divCol3.appendChild(blueAddElementRolloverTools);
  divCol3_1.appendChild(blueAddElementRolloverTools1);
  divCol3_2.appendChild(blueAddElementRolloverTools2);

  rowSection.addEventListener("mouseenter", (e) => {
    divCol3.style.borderRight = "1px dotted #3a85ff";
    divCol3_1.style.borderRight = "1px dotted #3a85ff";
    divCol3Boundary1.style.display = "block";
    divCol3Boundary2.style.display = "block";
    if (divCol3.childNodes[2]) {
      blueAddElementRolloverTools.style.display = "none";
      blueAddElementRolloverTools.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools.style.display = "block";
      blueAddElementRolloverTools.childNodes[0].style.display = "block";
    }
    if (divCol3_1.childNodes[2]) {
      blueAddElementRolloverTools1.style.display = "none";
      blueAddElementRolloverTools1.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools1.style.display = "block";
      blueAddElementRolloverTools1.childNodes[0].style.display = "block";
    }
    if (divCol3_2.childNodes[1]) {
      blueAddElementRolloverTools2.style.display = "none";
      blueAddElementRolloverTools2.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools2.style.display = "block";
      blueAddElementRolloverTools2.childNodes[0].style.display = "block";
    }
  });
  rowSection.addEventListener("mouseleave", (e) => {
    divCol3.style.borderRight = "none";
    divCol3_1.style.borderRight = "none";
    divCol3Boundary1.style.display = "none";
    divCol3Boundary2.style.display = "none";
    blueAddElementRolloverTools.style.display = "none";
    blueAddElementRolloverTools1.style.display = "none";
    blueAddElementRolloverTools2.style.display = "none";
    blueAddElementRolloverTools.childNodes[0].style.display = "none";
    blueAddElementRolloverTools1.childNodes[0].style.display = "none";
    blueAddElementRolloverTools2.childNodes[0].style.display = "none";
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
  // configDragDrop();
  loadSections()
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

  blueAddElementRolloverTools = addElement();
  blueAddElementRolloverTools1 = addElement();
  blueAddElementRolloverTools2 = addElement();
  blueAddElementRolloverTools3 = addElement();
  divCol4.appendChild(blueAddElementRolloverTools);
  divCol4_1.appendChild(blueAddElementRolloverTools1);
  divCol4_2.appendChild(blueAddElementRolloverTools2);
  divCol4_3.appendChild(blueAddElementRolloverTools3);

  rowSection.addEventListener("mouseenter", (e) => {
    divCol4.style.borderRight = "1px dotted #3a85ff";
    divCol4_1.style.borderRight = "1px dotted #3a85ff";
    divCol4_2.style.borderRight = "1px dotted #3a85ff";
    divCol4Boundary1.style.display = "block";
    divCol4Boundary2.style.display = "block";
    divCol4Boundary3.style.display = "block";
    if (divCol4.childNodes[2]) {
      blueAddElementRolloverTools.style.display = "none";
      blueAddElementRolloverTools.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools.style.display = "block";
      blueAddElementRolloverTools.childNodes[0].style.display = "block";
    }
    if (divCol4_1.childNodes[2]) {
      blueAddElementRolloverTools1.style.display = "none";
      blueAddElementRolloverTools1.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools1.style.display = "block";
      blueAddElementRolloverTools1.childNodes[0].style.display = "block";
    }
    if (divCol4_2.childNodes[2]) {
      blueAddElementRolloverTools2.style.display = "none";
      blueAddElementRolloverTools2.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools2.style.display = "block";
      blueAddElementRolloverTools2.childNodes[0].style.display = "block";
    }
    if (divCol4_3.childNodes[1]) {
      blueAddElementRolloverTools3.style.display = "none";
      blueAddElementRolloverTools3.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools3.style.display = "block";
      blueAddElementRolloverTools3.childNodes[0].style.display = "block";
    }
  });
  rowSection.addEventListener("mouseleave", (e) => {
    divCol4.style.borderRight = "none";
    divCol4_1.style.borderRight = "none";
    divCol4_2.style.borderRight = "none";
    divCol4Boundary1.style.display = "none";
    divCol4Boundary2.style.display = "none";
    divCol4Boundary3.style.display = "none";
    blueAddElementRolloverTools.style.display = "none";
    blueAddElementRolloverTools1.style.display = "none";
    blueAddElementRolloverTools2.style.display = "none";
    blueAddElementRolloverTools3.style.display = "none";
    blueAddElementRolloverTools.childNodes[0].style.display = "none";
    blueAddElementRolloverTools1.childNodes[0].style.display = "none";
    blueAddElementRolloverTools2.childNodes[0].style.display = "none";
    blueAddElementRolloverTools3.childNodes[0].style.display = "none";
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

  // configDragDrop();
  loadSections()

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

  blueAddElementRolloverTools = addElement();
  blueAddElementRolloverTools1 = addElement();
  blueAddElementRolloverTools2 = addElement();
  blueAddElementRolloverTools3 = addElement();
  blueAddElementRolloverTools4 = addElement();
  divCol5.appendChild(blueAddElementRolloverTools);
  divCol5_1.appendChild(blueAddElementRolloverTools1);
  divCol5_2.appendChild(blueAddElementRolloverTools2);
  divCol5_3.appendChild(blueAddElementRolloverTools3);
  divCol5_4.appendChild(blueAddElementRolloverTools4);

  rowSection.addEventListener("mouseenter", (e) => {
    divCol5.style.borderRight = "1px dotted #3a85ff";
    divCol5_1.style.borderRight = "1px dotted #3a85ff";
    divCol5_2.style.borderRight = "1px dotted #3a85ff";
    divCol5_3.style.borderRight = "1px dotted #3a85ff";
    divCol5Boundary1.style.display = "block";
    divCol5Boundary2.style.display = "block";
    divCol5Boundary3.style.display = "block";
    divCol5Boundary4.style.display = "block";
    if (divCol5.childNodes[2]) {
      blueAddElementRolloverTools.style.display = "none";
      blueAddElementRolloverTools.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools.style.display = "block";
      blueAddElementRolloverTools.childNodes[0].style.display = "block";
    }
    if (divCol5_1.childNodes[2]) {
      blueAddElementRolloverTools1.style.display = "none";
      blueAddElementRolloverTools1.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools1.style.display = "block";
      blueAddElementRolloverTools1.childNodes[0].style.display = "block";
    }
    if (divCol5_2.childNodes[2]) {
      blueAddElementRolloverTools2.style.display = "none";
      blueAddElementRolloverTools2.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools2.style.display = "block";
      blueAddElementRolloverTools2.childNodes[0].style.display = "block";
    }
    if (divCol5_3.childNodes[2]) {
      blueAddElementRolloverTools3.style.display = "none";
      blueAddElementRolloverTools3.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools3.style.display = "block";
      blueAddElementRolloverTools3.childNodes[0].style.display = "block";
    }
    if (divCol5_4.childNodes[1]) {
      blueAddElementRolloverTools4.style.display = "none";
      blueAddElementRolloverTools4.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools4.style.display = "block";
      blueAddElementRolloverTools4.childNodes[0].style.display = "block";
    }
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
    blueAddElementRolloverTools.style.display = "none";
    blueAddElementRolloverTools1.style.display = "none";
    blueAddElementRolloverTools2.style.display = "none";
    blueAddElementRolloverTools3.style.display = "none";
    blueAddElementRolloverTools4.style.display = "none";
    blueAddElementRolloverTools.childNodes[0].style.display = "none";
    blueAddElementRolloverTools1.childNodes[0].style.display = "none";
    blueAddElementRolloverTools2.childNodes[0].style.display = "none";
    blueAddElementRolloverTools3.childNodes[0].style.display = "none";
    blueAddElementRolloverTools4.childNodes[0].style.display = "none";
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

  // configDragDrop();
  loadSections()

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

  blueAddElementRolloverTools = addElement();
  blueAddElementRolloverTools1 = addElement();
  blueAddElementRolloverTools2 = addElement();
  blueAddElementRolloverTools3 = addElement();
  blueAddElementRolloverTools4 = addElement();
  blueAddElementRolloverTools5 = addElement();
  divCol6.appendChild(blueAddElementRolloverTools);
  divCol6_1.appendChild(blueAddElementRolloverTools1);
  divCol6_2.appendChild(blueAddElementRolloverTools2);
  divCol6_3.appendChild(blueAddElementRolloverTools3);
  divCol6_4.appendChild(blueAddElementRolloverTools4);
  divCol6_5.appendChild(blueAddElementRolloverTools5);

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
    if (divCol6.childNodes[2]) {
      blueAddElementRolloverTools.style.display = "none";
      blueAddElementRolloverTools.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools.style.display = "block";
      blueAddElementRolloverTools.childNodes[0].style.display = "block";
    }
    if (divCol6_1.childNodes[2]) {
      blueAddElementRolloverTools1.style.display = "none";
      blueAddElementRolloverTools1.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools1.style.display = "block";
      blueAddElementRolloverTools1.childNodes[0].style.display = "block";
    }
    if (divCol6_2.childNodes[2]) {
      blueAddElementRolloverTools2.style.display = "none";
      blueAddElementRolloverTools2.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools2.style.display = "block";
      blueAddElementRolloverTools2.childNodes[0].style.display = "block";
    }
    if (divCol6_3.childNodes[2]) {
      blueAddElementRolloverTools3.style.display = "none";
      blueAddElementRolloverTools3.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools3.style.display = "block";
      blueAddElementRolloverTools3.childNodes[0].style.display = "block";
    }
    if (divCol6_4.childNodes[2]) {
      blueAddElementRolloverTools4.style.display = "none";
      blueAddElementRolloverTools4.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools4.style.display = "block";
      blueAddElementRolloverTools4.childNodes[0].style.display = "block";
    }
    if (divCol6_5.childNodes[1]) {
      blueAddElementRolloverTools5.style.display = "none";
      blueAddElementRolloverTools5.childNodes[0].style.display = "none";
    } else {
      blueAddElementRolloverTools5.style.display = "block";
      blueAddElementRolloverTools5.childNodes[0].style.display = "block";
    }
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
    blueAddElementRolloverTools.style.display = "none";
    blueAddElementRolloverTools1.style.display = "none";
    blueAddElementRolloverTools2.style.display = "none";
    blueAddElementRolloverTools3.style.display = "none";
    blueAddElementRolloverTools4.style.display = "none";
    blueAddElementRolloverTools5.style.display = "none";
    blueAddElementRolloverTools.childNodes[0].style.display = "none";
    blueAddElementRolloverTools1.childNodes[0].style.display = "none";
    blueAddElementRolloverTools2.childNodes[0].style.display = "none";
    blueAddElementRolloverTools3.childNodes[0].style.display = "none";
    blueAddElementRolloverTools4.childNodes[0].style.display = "none";
    blueAddElementRolloverTools5.childNodes[0].style.display = "none";
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

  // configDragDrop();
  loadSections()

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

function buttonGearElement() {
  if (settingsSidebar.style.right === "0px") {
    settingsSidebar.style.right = "-420px"; // Slide out the popup
  } else {
    settingsSidebar.style.right = "0px"; // Slide in the popup
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

  var orangeGearButton = document.createElement("div");
  orangeGearButton.classList.add("de-rollover-settings");
  orangeGearButton.style.display = "none";
  orangeGearButton.style.padding = "0 5px";
  orangeGearButton.innerHTML = '<i class="fa fa-cog"></i>';
  orangeGearButton.setAttribute("type", "button");
  orangeGearButton.setAttribute("id", `orange_gear-${Date.now()}`);

  var orangeRemoveButton = document.createElement("div");
  orangeRemoveButton.classList.add("de-rollover-remove");
  orangeRemoveButton.style.display = "none";
  orangeRemoveButton.style.padding = "0 5px";
  orangeRemoveButton.innerHTML = '<i class="fa fa-trash"></i>';
  orangeRemoveButton.setAttribute("type", "button");
  orangeRemoveButton.setAttribute(
    "onclick",
    "removeElement(parentElement.parentElement)"
  );
  orangeRolloverTools.appendChild(orangeMoveButton);
  orangeRolloverTools.appendChild(orangeGearButton);
  orangeRolloverTools.appendChild(orangeRemoveButton);

  orangeGearButton.addEventListener("click", function () {
    var parentWrapper = orangeGearButton.parentElement.parentElement;
    var parentType = parentWrapper.getAttribute("data-de-type");
    var firstChild = parentWrapper.firstChild;
    if (parentType === "headline") {
      headlineGearElement(parentWrapper, parentType);
    } else if (parentType === "subhead") {
      headlineGearElement(parentWrapper, parentType);
    } else if (parentType === "text") {
      headlineGearElement(parentWrapper, parentType);
    } else if (parentType === "button") {
      openSidebar(firstChild);
    } else if (parentType === "combo") {
      twoStepGearElement(parentWrapper);
    } else {
      headlineGearElement(parentWrapper, parentType);
    }
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
    "moveUp(parentElement.parentElement)"
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
    "moveDown(parentElement.parentElement)"
  );

  orangeArrowRolloverTools.appendChild(orangeArrowUpButton);
  orangeArrowRolloverTools.appendChild(orangeArrowDownButton);

  return orangeArrowRolloverTools;
}


// function CustomDragAndDrop (container) {


loadSections = function () {
  var newContainer = document.getElementById(id);
  var allContainers = newContainer.querySelectorAll(".col-div");

  if (allContainers.length > 0) {
    allContainers.forEach((container) => {
      var condition = container.getAttribute("data-dragetted");
      if (!condition) {
        container.setAttribute("data-dragetted", "true");
        addEventListenersForContainer(container);
      }
    });
    // updateContainers();
  } else {
    // Handle the case when no elements with the class .editor-container are found.
    // You can choose to display an error message or take appropriate action here.
  }
};

function configPopup() {
  let container = document.createElement("div");
  container.classList.add("editor-container", "new-section"); //p-3
  container.style.minHeight = "250px";
  container.style.backgroundColor = "#ffffff";

  let section = document.createElement("div");
  container.appendChild(section);
  // popupContainer.appendChild(container);
  var allContainers = document.querySelectorAll(".editor-container");

  if (allContainers.length > 0) {
    allContainers.forEach((container) => {
    addEventListenersForContainer(container);
    });
  } else {
  }
};

updateDraggables = function () {
  draggables = document.querySelectorAll(".draggable");
};

addEventListeners = function () {
  if (draggables) {
    draggables.forEach((draggable) => {
      draggable.addEventListener(
        "dragstart",
        (e) => onDragStart(e, draggable),
        false
      );
      draggable.addEventListener(
        "dragend",
        (e) => onDragEnd(e, draggable),
        false
      );
    });
  }
};

createPlaceHolder = function () {
  placeholder = document.createElement("div");
  placeholder.style.height = "50px";
  placeholder.style.borderRadius = "5px";
  placeholder.style.backgroundColor = "#eee";
  placeholder.style.margin = "10px 0";
  placeholder = placeholder;
};

getDragAfterElement = function (container, y) {
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

onDragStart = function (e, draggable) {
  e.stopPropagation();

  // console.log("drag start", draggable);

  if (draggable && draggable.getAttribute("name")) {
    console.log(placeholder, 'name=============================')
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
        wrapper.style.backgroundColor = "transparent";
        wrapper.setAttribute("aria-disabled", "false");
        wrapper.setAttribute("draggable", true);

        elementToInsert = document.createElement("h1");
        elementToInsert.classList.add(
          "ne",
          "elHeadline",
          // "fs-1",
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
        elementToInsert.style.color = "#000000";
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
              wrapper.parentNode.parentNode.childNodes[i].childNodes[1]
                .className == "div-boundary"
            ) {
              wrapper.parentNode.parentNode.childNodes[
                i
              ].childNodes[1].style.display = "none";
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

        elementToInsert = wrapper;
        existingElement = false;

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
        subheadWrapper.setAttribute("data-de-type", "sub-headline");
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
            subheadWrapper.parentNode.parentNode.childNodes[0].childNodes[i].style.display = "none";
          }
          for (let i = 0; i < 3; i++) {
            subheadWrapper.parentNode.parentNode.childNodes[1].childNodes[i].style.display = "none";
          }
          subheadWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display = "none";
          for (let i = 3; i < subheadWrapper.parentNode.parentNode.children.length; i++) {
            subheadWrapper.parentNode.parentNode.childNodes[i].style.borderRight = "none";
            if (subheadWrapper.parentNode.parentNode.childNodes[i].childNodes[1].className == "div-boundary") {
              subheadWrapper.parentNode.parentNode.childNodes[i].childNodes[1].style.display = "none";
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

        elementToInsert = subheadWrapper;
        existingElement = false;
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

        paragraphWrapper.addEventListener("mouseenter", (e) => {
          for (
            let i = 3;
            i < paragraphWrapper.parentNode.parentNode.children.length;
            i++
          ) {
            paragraphWrapper.parentNode.parentNode.childNodes[i].style.borderRight =
              "none";
            if (
              paragraphWrapper.parentNode.parentNode.childNodes[i].childNodes[1]
                .className == "div-boundary"
            ) {
              paragraphWrapper.parentNode.parentNode.childNodes[
                i
              ].childNodes[1].style.display = "none";
            }
          }
        });

        elementToInsert = paragraphWrapper;
        existingElement = false;
        addEventListenerForText(paragraphWrapper);
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
        imageWrapper.innerHTML = `<p id="field-${Date.now()}" style="display:flex; margin:auto; justify-content:center;">Image</p>`;

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
              imageWrapper.parentNode.parentNode.childNodes[i].childNodes[1]
                .className == "div-boundary"
            ) {
              imageWrapper.parentNode.parentNode.childNodes[
                i
              ].childNodes[1].style.display = "none";
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
        elementToInsert = imageWrapper;
        existingElement = false;
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
        listWrapper.setAttribute("id", `list-${Date.now()}`);
        listWrapper.setAttribute("data-de-type", "Bullet List");
        listWrapper.setAttribute("data-de-editing", "false");
        listWrapper.setAttribute("data-title", "list");
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
          `<p id="field-${Date.now()}" style="display:flex; margin:auto; justify-content:center;">Bullet List</p>`;

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
            listWrapper.parentNode.parentNode.childNodes[0].childNodes[i].style.display = "none";
          }
          for (let i = 0; i < 3; i++) {
            listWrapper.parentNode.parentNode.childNodes[1].childNodes[i].style.display = "none";
          }
          listWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
            "none";
          for (let i = 3; i < listWrapper.parentNode.parentNode.children.length; i++) {
            listWrapper.parentNode.parentNode.childNodes[i].style.borderRight = "none";
            if (listWrapper.parentNode.parentNode.childNodes[i].childNodes[1].className == "div-boundary") {
              listWrapper.parentNode.parentNode.childNodes[i].childNodes[1].style.display = "none";
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
            listWrapper.parentNode.parentNode.childNodes[0].childNodes[i].style.display = "block";
          }
          for (let i = 0; i < 3; i++) {
            listWrapper.parentNode.parentNode.childNodes[1].childNodes[i].style.display = "block";
          }
          listWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
            "block";
          for (let i = 4; i < listWrapper.parentNode.parentNode.children.length; i++) {
            listWrapper.parentNode.parentNode.childNodes[i - 1].style.borderRight = "1px dotted rgb(58, 133, 255)";
            if (
              listWrapper.parentNode.parentNode.childNodes[i - 1]
                .childNodes[0].className == "div-boundary"
            ) {
              listWrapper.parentNode.parentNode.childNodes[i - 1].childNodes[0].style.display = "block";
            }
          }
        });
        elementToInsert = listWrapper;
        existingElement = false;
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
                .childNodes[1].className == "div-boundary"
            ) {
              buttonContainer.parentNode.parentNode.childNodes[
                i
              ].childNodes[1].style.display = "none";
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
        elementToInsert = elementToInsert;
        existingElement = false;
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
        containercountdownWrapper.setAttribute("data-de-type", "CountDown");

        const countdownWrapper = document.createElement("div");
        countdownWrapper.classList.add("row", "no-gutters");
        countdownWrapper.setAttribute("id", `field-${Date.now()}`);
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
                .childNodes[1].className == "div-boundary"
            ) {
              containercountdownWrapper.parentNode.parentNode.childNodes[
                i
              ].childNodes[1].style.display = "none";
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
        elementToInsert = containercountdownWrapper;
        existingElement = false;

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
        inputElement.setAttribute("id", `field-${Date.now()}`);
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
              inputWrapper.parentNode.parentNode.childNodes[i].childNodes[1]
                .className == "div-boundary"
            ) {
              inputWrapper.parentNode.parentNode.childNodes[
                i
              ].childNodes[1].style.display = "none";
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
        elementToInsert = inputWrapper;
        existingElement = false;
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
        emailElement.setAttribute("id", `field-${Date.now()}`);
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
              emailWrapper.parentNode.parentNode.childNodes[i].childNodes[1]
                .className == "div-boundary"
            ) {
              emailWrapper.parentNode.parentNode.childNodes[
                i
              ].childNodes[1].style.display = "none";
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
        elementToInsert = emailWrapper;
        existingElement = false;
        break;

      case "2step-combo":
        const comboWrapper = document.createElement("div");
        comboWrapper.classList.add("container-fluid");
        comboWrapper.setAttribute("data-de-type", "combo");
        comboWrapper.setAttribute("id", `combo-${Date.now()}`);
        // comboWrapper.id = "2step-form1";

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
        formBody.id = `formBody-${Date.now()}`;

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
        button.onclick = () => showForm(form, formBody2.id);
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

        // Second part for 2 Step Combo
        const formBody2 = document.createElement("div");
        formBody2.classList.add("form-body", "pt-4", "hidden");
        formBody2.id = `formBody2-${Date.now()}`;

        const sectionDetail = document.createElement("section");
        sectionDetail.classList.add("product-detail");
        sectionDetail.id = "ctwo-setp-order";

        const productTitle = document.createElement("div");
        productTitle.classList.add("product-title");
        productTitle.innerHTML = `
              <span class="item">Item</span>
              <span class="item text-center">Quantity</span>
              <span class="item">Price</span>
          `;

        const dividerProduct = document.createElement("div");
        dividerProduct.classList.add("divider-product");

        const productDescription = document.createElement("div");
        productDescription.id = "659d9244637b7ce094361944";
        productDescription.classList.add("product-description");
        productDescription.innerHTML = `
              <div class="d-flex">
                  <div class="d-flex radioBtn">
                      <input id="checkbox-ctwo-setp-order-659d9244637b7ce094361944" type="checkbox" value="659d9244637b7ce094361944">
                  </div>
                  <div>
                      <span class="item product-name" style="margin-left:7px;"><strong>FAP Airtable System</strong></span>
                      <div class="item-description"><strong></strong></div>
                  </div>
              </div>
              <div class="text-center item">1</div>
              <span class="item item-price">$29.00</span>
          `;

        sectionDetail.appendChild(productTitle);
        sectionDetail.appendChild(dividerProduct);
        sectionDetail.appendChild(productDescription);

        // Create main container
        const bpContainer = document.createElement("section");
        bpContainer.classList.add("bp-container");

        // Create product bump divider
        const productBumpDivider = document.createElement("div");
        productBumpDivider.classList.add("product-bump-divider");

        // Create order bump container
        const orderBumpContainer = document.createElement("section");
        orderBumpContainer.classList.add("order-bump-container");

        // Create main section within order bump container
        const mainSection = document.createElement("div");
        mainSection.classList.add("main-section");
        mainSection.innerHTML = `
            <img src="data:image/webp;base64,UklGRsYBAABXRUJQVlA4WAoAAAASAAAAGwAAEAAAQU5JTQYAAAAAAAAAAABBTk1GsgAAAAAAAAAAABsAABAAAA4BAANWUDhMmgAAAC8bAAQQH8GgbSRHx59rL/8/ys/gmH/FbSQ19F8pvxwHBs1/FIG/ppDrB1yyELIAuslyFqb4AEKWNQHOIiSbiaij+ADg3QGyESEADttIUqQ+Zmaeu84/y/v/mY8gov8TgH+eYwt5et+AvCoLck3eJuoOgQWlcQzIPbMgJ4uz0Ls7D2pLBKAefnxejhyqQlJaF2pjCG3ZUuiX+BpBTk1GJgAAAAAAAAAAAAAAAAAAAOYAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcAQU5NRrIAAAAAAAAAAAAbAAAQAABGAAAAVlA4TJoAAAAvGwAEEB/BoG0kR8efay//P8rP4Jh/xW0kNfRfKb8cBwbNfxSBv6aQ6wdcshCyALrJcham+ABCljUBziIkm4moo/gA4N0BshEhAA7bSFKkPmZmnrvOP8v7/5mPIKL/E4B/nmMLeXrfgLwqC3JN3ibqDoEFpXEMyD2zICeLs9C7Ow9qSwSgHn58Xo4cqkJSWhdqYwht2VLol/ga" class="bump--flashing-arrow">
            <input type="checkbox" name="order-bump" class="bump--checkbox">
            <span class="headline bump-headline">YES! Add the "Advanced Ads Scaling Q&amp;A" for just $29!</span>
          `;

        // Create paragraph within order bump container
        const paragraph = document.createElement("p");
        paragraph.innerHTML = `
            <span class="oto-headline">Advanced Ads Scaling Q&amp;A Session</span>
            <span> Get a recording of one of our live monthly calls! Our media buyer who has run ads for Frank Kern, Agora, Dean Graziosi, Jeff Lerner (and more!) not only shows how to launch and SCALE campaigns but also answers the TOP questions most people when trying to scale ads! This is "Behind Closed Doors" information for pennies!</span>
          `;

        orderBumpContainer.appendChild(mainSection);
        orderBumpContainer.appendChild(paragraph);

        // Create separator for order summary
        const separator = document.createElement("div");
        separator.classList.add("separator");
        separator.textContent = "Order Summary";

        // Create product cost total section
        const productCostTotal = document.createElement("section");
        productCostTotal.classList.add("product-cost-total");
        productCostTotal.innerHTML = `
            <div class="product-title">
                <span class="item">item</span>
                <span class="item text-center">Quantity</span>
                <span class="item">amount</span>
            </div>
            <div class="divider-product"></div>
            <div class="product-description">
                <span class="item"><span class="coupon-item">FAP Airtable System</span><!----></span>
                <span class="item text-center">1</span>
                <span class="item item-price">$ 29.00</span>
            </div>
            <div class="divider-product"></div>
            <div class="order-total">
                <span class="item"><strong>Order Total</strong></span>
                <span class="item text-right">
                    <div class="item-price">$ 29.00</div>
                    <!---->
                </span>
            </div>
          `;

        // Append all elements to the main container
        bpContainer.appendChild(productBumpDivider);
        bpContainer.appendChild(orderBumpContainer);
        bpContainer.appendChild(separator);
        bpContainer.appendChild(productCostTotal);

        // Create billing form section
        const billingSection = document.createElement("section");
        billingSection.classList.add("billing");

        // Create credit card input elements
        const creditCardContainer = document.createElement("div");
        creditCardContainer.classList.add("ghl-payment-element", "pb-4");

        const inlineCreditCardContainer = document.createElement("div");
        inlineCreditCardContainer.classList.add(
          "inline-credit-card-container"
        );

        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        const colMd6Div1 = document.createElement("div");
        colMd6Div1.classList.add("col-md-6");

        const cardNumberLabel = document.createElement("label");
        cardNumberLabel.setAttribute("for", "cardNumber");
        cardNumberLabel.classList.add("card-input-label", "d-block");
        cardNumberLabel.textContent = "Card Number";

        const cardNumberInput = document.createElement("input");
        cardNumberInput.setAttribute("type", "text");
        cardNumberInput.setAttribute("name", "cc");
        cardNumberInput.setAttribute(
          "id",
          "cc-ctwo-setp-order-payment-element"
        );
        cardNumberInput.setAttribute("placeholder", "1234 1234 1234 1234");
        cardNumberInput.classList.add("card-input");

        colMd6Div1.appendChild(cardNumberLabel);
        colMd6Div1.appendChild(cardNumberInput);

        const colMd6Div2 = document.createElement("div");
        colMd6Div2.classList.add("col-md-6");

        const creditCardSubContainer = document.createElement("div");
        creditCardSubContainer.classList.add("credit-card-sub-container");

        const rowDiv2 = document.createElement("div");
        rowDiv2.classList.add("row");

        const colMd6Div3 = document.createElement("div");
        colMd6Div3.classList.add("col-md-6");

        const expirationLabel = document.createElement("label");
        expirationLabel.setAttribute("for", "cardExpiration");
        expirationLabel.classList.add("card-input-label");
        expirationLabel.textContent = "Expiration";

        const expirationInput = document.createElement("input");
        expirationInput.setAttribute("type", "text");
        expirationInput.setAttribute("name", "card-expiration");
        expirationInput.setAttribute(
          "id",
          "card-expiration-ctwo-setp-order-payment-element"
        );
        expirationInput.setAttribute("maxlength", "5");
        expirationInput.setAttribute("placeholder", "MM / YY");
        expirationInput.classList.add("card-input");

        colMd6Div3.appendChild(expirationLabel);
        colMd6Div3.appendChild(expirationInput);

        const colMd6Div4 = document.createElement("div");
        colMd6Div4.classList.add("col-md-6");

        const cvcLabel = document.createElement("label");
        cvcLabel.setAttribute("for", "cardCvc");
        cvcLabel.classList.add("card-input-label");
        cvcLabel.textContent = "CVC";

        const cvcInput = document.createElement("input");
        cvcInput.setAttribute("type", "text");
        cvcInput.setAttribute("name", "card-cvc");
        cvcInput.setAttribute(
          "id",
          "card-cvc-ctwo-setp-order-payment-element"
        );
        cvcInput.setAttribute("maxlength", "3");
        cvcInput.setAttribute("placeholder", "CVC");
        cvcInput.classList.add("card-input");

        colMd6Div4.appendChild(cvcLabel);
        colMd6Div4.appendChild(cvcInput);

        rowDiv2.appendChild(colMd6Div3);
        rowDiv2.appendChild(colMd6Div4);

        creditCardSubContainer.appendChild(rowDiv2);

        colMd6Div2.appendChild(creditCardSubContainer);

        rowDiv.appendChild(colMd6Div1);
        rowDiv.appendChild(colMd6Div2);

        inlineCreditCardContainer.appendChild(rowDiv);

        creditCardContainer.appendChild(inlineCreditCardContainer);

        // Create order button
        const orderButton = document.createElement("button");
        orderButton.classList.add("btn", "btn-success", "w-100", "p-2");
        orderButton.onclick = () => showForm(form, formBody.id);

        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-arrow-right", "fs-5");

        const mainText = document.createElement("span");
        mainText.classList.add("main-text", "fs-4");
        mainText.setAttribute("style", "font-weight: 600;");
        mainText.innerHTML = "&nbsp; Complete Order";

        const subText = document.createElement("span");
        subText.classList.add("sub-text");

        orderButton.appendChild(icon);
        orderButton.appendChild(mainText);
        orderButton.appendChild(document.createElement("br"));
        orderButton.appendChild(subText);

        // Create order form footer section
        const orderFormFooter2 = document.createElement("section");
        orderFormFooter2.classList.add("order-form-footer");
        orderFormFooter2.innerHTML =
          "<span>* 100% Secure & Safe Payments *</span>";

        // Append elements to the billing section
        billingSection.appendChild(creditCardContainer);
        billingSection.appendChild(orderButton);
        billingSection.appendChild(orderFormFooter2);

        formBody2.appendChild(sectionDetail);
        formBody2.appendChild(bpContainer);
        formBody2.appendChild(billingSection);

        form.appendChild(formTitle);
        form.appendChild(dividerForm);
        form.appendChild(formBody);
        form.appendChild(formBody2);

        container.appendChild(form);
        card.appendChild(container);
        comboWrapper.appendChild(card);

        var orangeRolloverTools = createOrangeRolloverTools();
        var orangeArrowRolloverTools = createOrangeArrowRolloverTools();

        // Append all the elements to the wrapper
        comboWrapper.appendChild(orangeRolloverTools);
        comboWrapper.appendChild(orangeArrowRolloverTools);

        // Add event listeners to show/hide rollover tools

        // Add event listeners to show/hide rollover tools and change border color on mouseover
        comboWrapper.addEventListener("mouseenter", () => {
          orangeRolloverTools.style.display = "block";
          orangeArrowRolloverTools.style.display = "block";
          orangeRolloverTools.childNodes[0].style.display = "block";
          orangeRolloverTools.childNodes[1].style.display = "block";
          orangeRolloverTools.childNodes[2].style.display = "block";
          orangeArrowRolloverTools.childNodes[0].style.display = "block";
          orangeArrowRolloverTools.childNodes[1].style.display = "block";
          comboWrapper.style.border = "1px solid orange"; // Change border color on mouseover
          comboWrapper.style.position = "relative";
          comboWrapper.parentNode.parentNode.style.border = "none";
          for (let i = 0; i < 3; i++) {
            comboWrapper.parentNode.parentNode.childNodes[0].childNodes[
              i
            ].style.display = "none";
          }
          for (let i = 0; i < 3; i++) {
            comboWrapper.parentNode.parentNode.childNodes[1].childNodes[
              i
            ].style.display = "none";
          }
          comboWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
            "none";
          for (
            let i = 3;
            i < comboWrapper.parentNode.parentNode.children.length;
            i++
          ) {
            comboWrapper.parentNode.parentNode.childNodes[
              i
            ].style.borderRight = "none";
            if (
              comboWrapper.parentNode.parentNode.childNodes[i].childNodes[1]
                .className == "div-boundary"
            ) {
              comboWrapper.parentNode.parentNode.childNodes[
                i
              ].childNodes[1].style.display = "none";
            }
          }
        });

        comboWrapper.addEventListener("mouseleave", () => {
          orangeRolloverTools.style.display = "none";
          orangeArrowRolloverTools.style.display = "none";
          orangeRolloverTools.childNodes[0].style.display = "none";
          orangeRolloverTools.childNodes[1].style.display = "none";
          orangeRolloverTools.childNodes[2].style.display = "none";
          orangeArrowRolloverTools.childNodes[0].style.display = "none";
          orangeArrowRolloverTools.childNodes[1].style.display = "none";
          comboWrapper.style.border = "none"; // Reset border color on mouseout
          comboWrapper.style.position = "unset";
          comboWrapper.parentNode.parentNode.style.border =
            "1px solid rgb(58, 133, 255)";
          for (let i = 0; i < 3; i++) {
            comboWrapper.parentNode.parentNode.childNodes[0].childNodes[
              i
            ].style.display = "block";
          }
          for (let i = 0; i < 3; i++) {
            comboWrapper.parentNode.parentNode.childNodes[1].childNodes[
              i
            ].style.display = "block";
          }
          comboWrapper.parentNode.parentNode.childNodes[2].childNodes[0].style.display =
            "block";
          for (
            let i = 4;
            i < comboWrapper.parentNode.parentNode.children.length;
            i++
          ) {
            comboWrapper.parentNode.parentNode.childNodes[
              i - 1
            ].style.borderRight = "1px dotted rgb(58, 133, 255)";
            if (
              comboWrapper.parentNode.parentNode.childNodes[i - 1]
                .childNodes[0].className == "div-boundary"
            ) {
              comboWrapper.parentNode.parentNode.childNodes[
                i - 1
              ].childNodes[0].style.display = "block";
            }
          }
        });

        elementToInsert = comboWrapper;
        existingElement = false;
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
        phoneWrapper.setAttribute("data-de-type", "Phone Field");
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
          `<p id=field-${Date.now()}" style="display:flex; margin:auto; justify-content:center;">Phone</p>`;
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
              phoneWrapper.parentNode.parentNode.childNodes[i].childNodes[1]
                .className == "div-boundary"
            ) {
              phoneWrapper.parentNode.parentNode.childNodes[
                i
              ].childNodes[1].style.display = "none";
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
        elementToInsert = phoneWrapper;
        existingElement = false;
        break;
      default:
        elementToInsert = draggable;
        existingElement = true;
        break;
    }
  } else {
    existingElement = true;
    elementToInsert = draggable;
  }
  placeholder.setAttribute("id", `placeholder-${Date.now()}`);
  draggable.classList.add("dragging");
};

function onDragEnd(e, draggable) {
  draggable.classList.remove("dragging");
  updateTextareaFromContainer(
    "da-main-container",
    "step[large_html_blob_content]"
  );
  updateTextareaFromContainer(
    "da-popup-container",
    "step[popup_html_blob_content]"
  );

  var settingsSidebar = document.getElementById("settingsSidebar");
  var anchor = elementToInsert.querySelector("a.elSettings"); // Find the anchor element within 'this'

  if (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior

      if (settingsSidebar.style.right === "0px") {
        closeSidebar();
        // console.log('closing inside');
      } else {
        openSidebar(anchor);
        // console.log('opening inside');
      }
    });
  }

  if (!existingElement) {
    addEventListenerForDraggableItem(elementToInsert);
    updateDraggables("draggables");
  } else {
    console.log("existing ele", elementToInsert);
    elementToInsert.classList.remove("dragging");
  }
};

function addEventListenerForDraggableItem(element) {
  // console.log("ele", element);
  element.addEventListener("dragstart", (e) => onDragStart(e, element));
  element.addEventListener("dragend", (e) => onDragEnd(e, element));

  const elHeadlineElements = element.querySelectorAll(
    ".elHeadline, .elText, .elSubHeadline"
  ); // Select .elHeadline elements inside the div


  // Add click event listener for content editing to each .elHeadline element
  elHeadlineElements.forEach((elHeadlineElement) => {
    elHeadlineElement.addEventListener("mousedown", function () {
      elHeadlineElement.setAttribute("contenteditable", "true");
      elHeadlineElement.style.cursor = "text";
    });
  });
};

function addEventListenersForContainer(container) {
  container.addEventListener("dragover", (e) => onDragHover(e, container, false));
  container.addEventListener("drop", (e) => onDragDrop(e), false);
  container.addEventListener("dragleave", (e) => onDragLeave(e), false);
  container.addEventListener("dragenter", (e) => onDragEnter(e), false);
};

// Text section
function addEventListenerForText(textElement) {
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
        textElement.parentNode.parentNode.childNodes[i].childNodes[1]
          .className == "div-boundary"
      ) {
        textElement.parentNode.parentNode.childNodes[
          i
        ].childNodes[1].style.display = "none";
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

function onDragHover(e, container) {
  e.preventDefault();
  afterElement = getDragAfterElement(container, e.clientY);

  if (afterElement == null) {
    container.appendChild(placeholder);
  } else {
    container.insertBefore(placeholder, afterElement);
  }
};

function onDragEnter(e) {
  e.preventDefault();
};

function onDragLeave(e) {
  e.preventDefault();
};

function onDragDrop(e) {
  e.preventDefault();
  placeholder.replaceWith(elementToInsert);
};

function init() {
  try {
    mainContainer = document.getElementById("da-main-container");
    popupContainer = document.getElementById("da-popup-container");
    configPopup()

    // updateContainers();
    updateDraggables();
    addEventListeners();
    createPlaceHolder();
  } catch (e) {
    console.log(e);
  }
};


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
  // button.onclick = () => showForm();
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
  // button.onclick = () => showForm(nextFormId);
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

function showForm(form, formId) {
  document.getElementById(form.childNodes[2].id).classList.add("hidden");
  document.getElementById(form.childNodes[3].id).classList.add("hidden");
  const currentForm = document.getElementById(formId);
  if (currentForm) {
    currentForm.classList.remove("hidden");
  }

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

// * MAIN CODE SECTION ------------------------------------------------------------------

var customDragnDropInitialized = false;

function loadSections() {

  var newContainer = document.getElementById(id);
  var allContainers = newContainer.querySelectorAll(".col-div");

  if (allContainers.length > 0) {
    allContainers.forEach((container) => {
      var condition = container.getAttribute("data-dragetted");
      if (!condition) {
        container.setAttribute("data-dragetted", "true");
        addEventListenersForContainer(container);
      }
    });
    // updateContainers();
  } else {
    // Handle the case when no elements with the class .editor-container are found.
    // You can choose to display an error message or take appropriate action here.
  }
};

function addEventListenersForContainer(container) {
  container.addEventListener("dragover", (e) => onDragHover(e, container, false));
  container.addEventListener("drop", (e) => onDragDrop(e), false);
  container.addEventListener("dragleave", (e) => onDragLeave(e), false);
  container.addEventListener("dragenter", (e) => onDragEnter(e), false);
};


addEventListenerForText = function (textElement) {
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

function onDragHover(e, container) {
  e.preventDefault();
  afterElement = getDragAfterElement(container, e.clientY);

  if (afterElement == null) {
    container.appendChild(placeholder);
  } else {
    container.insertBefore(placeholder, afterElement);
  }
};
function onDragEnter(e) {
  e.preventDefault();
};

function onDragLeave(e) {
  e.preventDefault();
};

function onDragDrop(e) {
  e.preventDefault();
  placeholder.replaceWith(elementToInsert);
};

// document.addEventListener('turbolinks:load', () => {
document.addEventListener("DOMContentLoaded", function (e) {
  if (!customDragnDropInitialized) {
    init()

    const addSectionButton = document.getElementById("add-section-button");
    if (addSectionButton) {
      addSectionButton.addEventListener("click", () => {

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

openElementsPanel.addEventListener("click", function () {
  if (leftSlidingPopup.classList.contains("hidden")) {
    leftSlidingPopup.classList.remove("hidden");
    basicContainerSection.classList.remove("col-md-12");
    basicContainerSection.classList.add("col-md-9");
    basicContainerSection.style.marginLeft = "25%";
  } else {
    closeElementsPanel();
  }
});
function closeElementsPanel() {
  leftSlidingPopup.classList.add("hidden");
  basicContainerSection.classList.remove("col-md-9");
  basicContainerSection.classList.add("col-md-12");
  basicContainerSection.style.marginLeft = "0%";
}

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
const popup = document.querySelector(".popup-container");
const thebody = document.querySelector("body");
const damaincontainer = document.getElementById("da-main-container");

openPopupButton.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(popupContainer, 'here is popup container')

  // Display the popup
  popup.classList.add("open");

  popup.style.display = "block";
  thebody.style.backgroundColor = "rgba(100, 100, 100, 0.1)"; // Red with 50% opacity
  // damaincontainer.style.opacity = 0.5;
  damaincontainer.style.display = "none"; // Set the background color to red
});

closePopupButton.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("open");
  popup.style.display = "none";

  damaincontainer.style.display = "block"; // Set the background color to red
});
// The popup END

//------------------------------------------------------------------
//settingsSidebar

let selectedElSettings = null; // Global variable to store the selected .elSettings element

// Select all anchor elements within elements with class "elSettings"
var elSettingsAnchors = document.querySelectorAll("a.elSettings");
var settingsSidebar = document.getElementById("settingsSidebar");

function openSidebar(element) {
  selectedElSettings = element.id; // Store the clicked element's ID
  if (settingsSidebar.style.right === "0px") {
    closeSidebar();
  } else {
    settingsSidebar.style.right = "0px";
    console.log("open");
  }
  loadPresetButtonSettings(element);
}

function closeSidebar() {
  selectedElSettings = null;
  settingsSidebar.style.right = "-420px";
}

// Attach the click event to each anchor element within "elSettings" buttons
elSettingsAnchors.forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior
    if (settingsSidebar.style.right === "0px") {
      closeSidebar();
      // console.log('closing outside');
    } else {
      // console.log('opening outside');
      openSidebar(anchor);
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

function loadPresetButtonSettings(element) {
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
      const fontSize = value;
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
      targetElement.innerHTML = value;
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

// Add event listener to the search panel for elements input
document.querySelector(".search-panel").addEventListener("input", function () {
  const searchKeyword = this.value.toLowerCase();
  const elementPanels = document.querySelectorAll(".element-panel");

  console.log(searchKeyword);
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

// Close Settings Panel
const buttonSettingClose = document.getElementById("button-setting-close");
buttonSettingClose.addEventListener("click", function () {
  closeSidebar();
});

// Settings for Green Section Container
let selectedGreenSection = null;
function greenGearElement(id) {
  selectedGreenSection = id;
  if (slidingPopup4.style.right === "0px") {
    slidingPopup4.style.right = "-420px"; // Slide out the popup
  } else {
    slidingPopup4.style.right = "0px"; // Slide in the popup
  }
  loadPresetGreenSettings(id);
}
const greenSettingClose = document.getElementById("popup4-close");
greenSettingClose.addEventListener("click", function () {
  selectedGreenSection = null;
  slidingPopup4.style.right = "-420px"; // Slide out the popup  
});
function loadPresetGreenSettings(id) {
  const editorComponent = document.getElementById(id);
  // Background color setting for Green Section
  const greenBackColor = document.getElementById("green-back-color");
  const greenBackColorIcon = document.getElementById("green-back-color-icon");
  greenBackColor.style.color = editorComponent.style.backgroundColor;
  greenBackColorIcon.style.color = editorComponent.style.backgroundColor;
  greenBackColor.addEventListener("input", function () {
    greenBackColorIcon.style.color = greenBackColor.value;
    const editorComponent = document.getElementById(selectedGreenSection);
    editorComponent.style.backgroundColor = greenBackColor.value;
  });

  // // Background Image upload
  // const inputPanel = document.getElementById
};

// General and Advanced tab panel for Green Section
const greenGeneralTab = document.getElementById("green-general-tab");
const greenGeneralContent = document.getElementById("green-general-content");
const greenAdvancedTab = document.getElementById("green-advanced-tab");
const greenAdvancedContent = document.getElementById("green-advanced-content");
greenGeneralTab.addEventListener("click", function () {
  greenGeneralContent.classList.add("active");
  greenGeneralTab.classList.add("active");
  greenAdvancedContent.classList.remove("active");
  greenAdvancedTab.classList.remove("active");
});
greenAdvancedTab.addEventListener("click", function () {
  greenGeneralContent.classList.remove("active");
  greenGeneralTab.classList.remove("active");
  greenAdvancedContent.classList.add("active");
  greenAdvancedTab.classList.add("active");
});

// Advanced Border Settings for Green Section
document.addEventListener("DOMContentLoaded", function () {
  const borderSelect = document.getElementById("border-select");
  const borderStyleSelect = document.querySelector(
    "#green-border-setting select:nth-of-type(2)"
  );
  const borderWidthSelect = document.querySelector(
    "#green-border-setting select:nth-of-type(2)"
  );
  const greenBorderSetting = document.getElementById("green-border-setting");
  const editorComponent = document.querySelector(".editor-container");

  borderSelect.addEventListener("change", function () {
    if (borderSelect.value !== "") {
      greenBorderSetting.classList.remove("hidden");
    } else {
      greenBorderSetting.classList.add("hidden");
    }
  });

  // borderStyleSelect.addEventListener("change", function() {
  //   editorComponent.style.border = borderStyleSelect.value;
  // });

  // borderWidthSelect.addEventListener("change", function() {
  //   editorComponent.style.borderWidth = borderWidthSelect.value + "px";
  // });
});

// Settings for Blue Section Container
let selectedBlueSection = null;
function blueGearElement(id) {
  selectedBlueSection = id;
  if (slidingPopup5.style.right === "0px") {
    slidingPopup5.style.right = "-420px"; // Slide out the popup
  } else {
    slidingPopup5.style.right = "0px"; // Slide in the popup
  }
  loadPresetBlueSettings(id);
}
const blueSettingClose = document.getElementById("popup5-close");
blueSettingClose.addEventListener("click", function () {
  selectedBlueSection = null;
  slidingPopup5.style.right = "-420px"; // Slide out the popup
});

function loadPresetBlueSettings(id) {
  const blueComponent = document.getElementById(id);

  // Background color setting for Blue Section
  const blueBackColor = document.getElementById("blue-back-color");
  const blueBackColorIcon = document.getElementById("blue-back-color-icon");
  blueBackColor.style.color = blueComponent.style.backgroundColor;
  blueBackColorIcon.style.color = blueComponent.style.backgroundColor;
  blueBackColor.addEventListener("input", function () {
    blueBackColorIcon.style.color = blueBackColor.value;
    const blueComponent = document.getElementById(selectedBlueSection);
    blueComponent.style.backgroundColor = blueBackColor.value;
  });

  // Alginment for blue Section
  const alignSelect = document.getElementById("blue-align-select");
  if (blueComponent.style.margin === "auto") {
    alignSelect.value = "center";
  } else if (blueComponent.style.marginLeft === "auto") {
    alignSelect.value = "right";
  } else {
    alignSelect.value = "left";
  }
  alignSelect.addEventListener("change", function () {
    const selectedAlignment = alignSelect.value;
    const blueComponent = document.getElementById(selectedBlueSection);
    if (selectedAlignment === "center") {
      blueComponent.style.margin = "auto";
    } else if (selectedAlignment === "left") {
      blueComponent.style.margin = "0";
    } else if (selectedAlignment === "right") {
      blueComponent.style.margin = "0";
      blueComponent.style.marginLeft = "auto";
    }
  });

  // Width range change for blue Section
  const blueWidthSlider = document.getElementById("blue-width-slider");
  const blueWidthValue = document.getElementById("blue-width-value");
  if (blueComponent.style.width) {
    blueWidthSlider.value = parseInt(blueComponent.style.width);
    blueWidthValue.value = parseInt(blueComponent.style.width);
  } else {
    blueWidthSlider.value = 100;
    blueWidthValue.value = 100;
  }
  blueWidthSlider.addEventListener("input", function () {
    blueWidthValue.value = blueWidthSlider.value;
    const blueComponent = document.getElementById(selectedBlueSection);
    blueComponent.style.width = `${blueWidthSlider.value}%`;
  });
  blueWidthValue.addEventListener("change", function () {
    let parsedValue = parseInt(blueWidthValue.value);
    if (parsedValue >= 0 && parsedValue <= 100) {
      blueWidthSlider.value = parsedValue;
    }
    const blueComponent = document.getElementById(selectedBlueSection);
    blueComponent.style.width = `${parsedValue}%`;
  });
};

// General and Advanced tab panel for Blue Section
const blueGeneralTab = document.getElementById("blue-general-tab");
const blueGeneralContent = document.getElementById("blue-general-content");
const blueAdvancedTab = document.getElementById("blue-advanced-tab");
const blueAdvancedContent = document.getElementById("blue-advanced-content");
blueGeneralTab.addEventListener("click", function () {
  blueGeneralContent.classList.add("active");
  blueGeneralTab.classList.add("active");
  blueAdvancedContent.classList.remove("active");
  blueAdvancedTab.classList.remove("active");
});
blueAdvancedTab.addEventListener("click", function () {
  blueGeneralContent.classList.remove("active");
  blueGeneralTab.classList.remove("active");
  blueAdvancedContent.classList.add("active");
  blueAdvancedTab.classList.add("active");
});


// General and Advanced tab panel for Orange Section
const orangeGeneralTab = document.getElementById("orange-general-tab");
const orangeGeneralContent = document.getElementById("orange-general-content");
const orangeAdvancedTab = document.getElementById("orange-advanced-tab");
const orangeAdvancedContent = document.getElementById(
  "orange-advanced-content"
);
orangeGeneralTab.addEventListener("click", function () {
  orangeGeneralContent.classList.add("active");
  orangeGeneralTab.classList.add("active");
  orangeAdvancedContent.classList.remove("active");
  orangeAdvancedTab.classList.remove("active");
});
orangeAdvancedTab.addEventListener("click", function () {
  orangeGeneralContent.classList.remove("active");
  orangeGeneralTab.classList.remove("active");
  orangeAdvancedContent.classList.add("active");
  orangeAdvancedTab.classList.add("active");
});

// Settings for headline element
let selectedHeadlineElement = null;
let selectedHeadlineContainer = null;
function headlineGearElement(parentWrapper, parentType) {
  selectedHeadlineElement = parentWrapper.firstChild.id;
  selectedHeadlineContainer = parentWrapper.id;
  const titleComponent = document.getElementById("orange-title");
  titleComponent.textContent =
    parentType.charAt(0).toUpperCase() + parentType.slice(1);
  if (headlineSidebar.style.right === "0px") {
    headlineSidebar.style.right = "-420px"; // Slide out the popup
  } else {
    headlineSidebar.style.right = "0px"; // Slide in the popup
  }
  loadPresetHeadlineSettings(parentWrapper);
}
const headlineSettingClose = document.getElementById("headline-close");
headlineSettingClose.addEventListener("click", function () {
  selectedHeadlineElement = null;
  selectedHeadlineContainer = null;
  headlineSidebar.style.right = "-420px"; // Slide out the popup
});
function loadPresetHeadlineSettings(parentWrapper) {
  const headlineContainer = document.getElementById(parentWrapper.id);
  const headlineComponent = document.getElementById(
    parentWrapper.firstChild.id
  );
  const headlineOpacitySelect = document.getElementById("headline-opacity-select");
  // Background color setting for Headline Element
  const headlineBackColor = document.getElementById("headline-back-color");
  const headlineBackColorIcon = document.getElementById(
    "headline-back-color-icon"
  );
  headlineBackColor.style.color = headlineContainer.style.backgroundColor;
  headlineBackColorIcon.style.color = headlineContainer.style.backgroundColor;
  headlineBackColor.addEventListener("input", function () {
    headlineBackColorIcon.style.color = headlineBackColor.value;
    const headlineContainer = document.getElementById(
      selectedHeadlineContainer
    );
    headlineContainer.style.backgroundColor = headlineBackColor.value;
    headlineOpacitySelect.value = "1.0";
  });

  // Background color opacity for Headline Element
  headlineOpacitySelect.addEventListener("change", function () {
    const headlineContainer = document.getElementById(parentWrapper.id);
    let rgbColor = headlineContainer.style.backgroundColor;
    if (headlineContainer.style.backgroundColor.includes("rgba")) {
      rgbColor = headlineContainer.style.backgroundColor.replace(/, [\d\.]+\)$/, "") + ")";
    }
    let convertedRGBA = rgbColor.replace(")", `, ${headlineOpacitySelect.value})`);
    headlineContainer.style.backgroundColor = convertedRGBA;
  })

  // Text Alignment for Headline Element
  const headlineAlignButtons = document.querySelectorAll('.align-button');
  headlineAlignButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const headlineComponent = document.getElementById(selectedHeadlineElement);
      headlineComponent.style.textAlign = "";
      headlineAlignButtons.forEach(function (btn) {
        btn.classList.remove("selected-button");
      });
      if (this.querySelector('i').classList.contains('bi-text-left')) {
        headlineComponent.style.textAlign = "left";
        this.classList.add('selected-button');
      } else if (this.querySelector("i").classList.contains("bi-text-center")) {
        headlineComponent.style.textAlign = "center";
        this.classList.add("selected-button");
      } else if (this.querySelector("i").classList.contains("bi-text-right")) {
        headlineComponent.style.textAlign = "right";
        this.classList.add("selected-button");
      } else if (this.querySelector("i").classList.contains("bi-justify")) {
        headlineComponent.style.textAlign = "justify";
        this.classList.add("selected-button");
      }
      
    })
  })

  // Font size setting for Headline Element
  const headlineFontSlider = document.getElementById("headline-font-slider");
  const headlineFontValue = document.getElementById("headline-font-value");
  headlineFontSlider.value = parseInt(headlineComponent.style.fontSize);
  headlineFontValue.value = parseInt(headlineComponent.style.fontSize);
  headlineFontSlider.addEventListener("input", function () {
    headlineFontValue.value = headlineFontSlider.value;
    const headlineComponent = document.getElementById(selectedHeadlineElement);
    headlineComponent.style.fontSize = `${headlineFontSlider.value}px`;
  });
  headlineFontValue.addEventListener("change", function () {
    let parsedValue = parseInt(headlineFontValue.value);
    if (parsedValue >= 0 && parsedValue <= 100) {
      headlineFontSlider.value = parsedValue;
    }
    const headlineComponent = document.getElementById(selectedHeadlineElement);
    headlineComponent.style.fontSize = `${parsedValue}px`;
  });

  // Text color setting for Headline Element
  const headlineColor = document.getElementById("headline-color");
  const headlineColorIcon = document.getElementById("headline-color-icon");
  headlineColor.style.color = headlineComponent.style.color;
  headlineColorIcon.style.color = headlineComponent.style.color;
  headlineColor.addEventListener("input", function () {
    headlineColorIcon.style.color = headlineColor.value;
    const headlineComponent = document.getElementById(selectedHeadlineElement);
    headlineComponent.style.color = headlineColor.value;
  });
};

// Settings for 2 Step Combo Element
let selectedComboElement = null;
function twoStepGearElement(parentWrapper) {
  selectedComboElement = parentWrapper.id;
  if (slidingPopup3.style.right === "0px") {
    slidingPopup3.style.right = "-420px"; // Slide out the popup
  } else {
    slidingPopup3.style.right = "0px"; // Slide in the popup
  }
  loadPresetComboSettings(parentWrapper.firstChild.firstChild);
}
const comboSettingClose = document.getElementById("combo-close");
comboSettingClose.addEventListener("click", function () {
  selectedComboElement = null;
  slidingPopup3.style.right = "-420px"; // Slide out the popup
});

function loadPresetComboSettings(parentContainer) {
  const firstForm = parentContainer.firstChild.childNodes[2];
  const secondForm = parentContainer.firstChild.childNodes[3];

  // Add event listener for 2-step advanced setting tabs
  const step1Tab = document.getElementById("step1-tab");
  const step2Tab = document.getElementById("step2-tab");
  const eyeIcon1 = document.getElementById("eye-icon1");
  const eyeIcon2 = document.getElementById("eye-icon2");
  if (firstForm.classList.contains("hidden")) {
    step1Tab.classList.remove("step-active");
    step2Tab.classList.add("step-active");
    eyeIcon1.classList.remove("bi-eye");
    eyeIcon1.classList.add("bi-eye-slash");
    eyeIcon2.classList.remove("bi-eye-slash");
    eyeIcon2.classList.add("bi-eye");
  } else if (secondForm.classList.contains("hidden")) {
    step1Tab.classList.add("step-active");
    step2Tab.classList.remove("step-active");
    eyeIcon1.classList.remove("bi-eye-slash");
    eyeIcon1.classList.add("bi-eye");
    eyeIcon2.classList.remove("bi-eye");
    eyeIcon2.classList.add("bi-eye-slash");
  }

  step1Tab.addEventListener("click", function () {
    step1Tab.classList.add("step-active");
    step2Tab.classList.remove("step-active");
    eyeIcon1.classList.remove("bi-eye-slash");
    eyeIcon1.classList.add("bi-eye");
    eyeIcon2.classList.remove("bi-eye");
    eyeIcon2.classList.add("bi-eye-slash");
    showForm(parentContainer.firstChild, firstForm.id);
  });
  step2Tab.addEventListener("click", function () {
    step1Tab.classList.remove("step-active");
    step2Tab.classList.add("step-active");
    eyeIcon1.classList.remove("bi-eye");
    eyeIcon1.classList.add("bi-eye-slash");
    eyeIcon2.classList.remove("bi-eye-slash");
    eyeIcon2.classList.add("bi-eye");
    showForm(parentContainer.firstChild, secondForm.id);
  });
};

// Button & Button Text & Input Background color pickers
const btnColor = document.getElementById("btn-color");
const btnColorIcon = document.getElementById("btn-color-icon");
btnColor.addEventListener("input", function () {
  btnColorIcon.style.color = btnColor.value;
});

const btnTxtColor = document.getElementById("btn-txt-color");
const btnTxtColorIcon = document.getElementById("btn-txt-color-icon");
btnTxtColor.addEventListener("input", function () {
  btnTxtColorIcon.style.color = btnTxtColor.value;
});

const btnBackColor = document.getElementById("btn-back-color");
const btnBackColorIcon = document.getElementById("btn-back-color-icon");
btnBackColor.addEventListener("input", function () {
  btnBackColorIcon.style.color = btnBackColor.value;
});

// Add event listener for 2-step combo setting tabs
const generalTab = document.getElementById("general-tab");
const generalContent = document.getElementById("general-content");
const advancedTab = document.getElementById("advanced-tab");
const advancedContent = document.getElementById("advanced-content");
generalTab.addEventListener("click", function () {
  generalContent.classList.add("active");
  generalTab.classList.add("active");
  advancedContent.classList.remove("active");
  advancedTab.classList.remove("active");
});
advancedTab.addEventListener("click", function () {
  generalContent.classList.remove("active");
  generalTab.classList.remove("active");
  advancedContent.classList.add("active");
  advancedTab.classList.add("active");
});

// Close Popups when I click outside
document.addEventListener("click", function (event) {
  const greenGearButtons = document.querySelectorAll("[id*='green_advanced']");
  const isOutsidePopup4 =
    event.target !== slidingPopup4 && !slidingPopup4.contains(event.target);
  const isGreenGearButton = Array.from(greenGearButtons).some((button) =>
    button.contains(event.target)
  );
  if (isOutsidePopup4 && !isGreenGearButton) {
    if (selectedGreenSection) {
      selectedGreenSection = null;
      slidingPopup4.style.right = "-420px"; // Slide out the popup
    }
  }

  const blueGearButtons = document.querySelectorAll("[id*='blue_gear']");
  const isOutsidePopup5 =
    event.target !== slidingPopup5 && !slidingPopup5.contains(event.target);
  const isBlueGearButton = Array.from(blueGearButtons).some((button) =>
    button.contains(event.target)
  );
  if (isOutsidePopup5 && !isBlueGearButton) {
    if (selectedBlueSection) {
      selectedBlueSection = null;
      slidingPopup5.style.right = "-420px"; // Slide out the popup
    }
  }

  const orangeGearButtons = document.querySelectorAll("[id*='orange_gear']");
  const isOutsideHeadlinePopup =
    event.target !== headlineSidebar && !headlineSidebar.contains(event.target);
  const isOrangeGearButton = Array.from(orangeGearButtons).some((button) =>
    button.contains(event.target)
  );
  if (isOutsideHeadlinePopup && !isOrangeGearButton) {
    if (selectedHeadlineElement) {
      selectedHeadlineElement = null;
      selectedHeadlineContainer = null;
      headlineSidebar.style.right = "-420px"; // Slide out the popup
    }
  }

  const isOutsideComboPopup =
    event.target !== slidingPopup3 && !slidingPopup3.contains(event.target);
  if (isOutsideComboPopup && !isOrangeGearButton) {
    if (selectedComboElement) {
      selectedComboElement = null;
      slidingPopup3.style.right = "-420px"; // Slide out the popup
    }
  }

  const buttonElements = document.querySelectorAll("[id*='the_button']");
  const isButtonElement = Array.from(buttonElements).some((button) =>
    button.contains(event.target)
  );
  const isOutsideButtonPopup =
    event.target !== settingsSidebar &&
    !settingsSidebar.contains(event.target);
  if (isOutsideButtonPopup && !isOrangeGearButton && !isButtonElement) {
    if (selectedElSettings) {
      closeSidebar();
    }
  }

  const blueAddButtons = document.querySelectorAll("[id*='blue_add']");
  const isBlueAddButton = Array.from(blueAddButtons).some((button) =>
    button.contains(event.target)
  );
  const addElementButton = document.getElementById("add-element-button");
  const isAddElementButton = addElementButton.contains(event.target);
  const isOutsideElementsPopup =
    event.target !== leftSlidingPopup &&
    !leftSlidingPopup.contains(event.target);
  if (isOutsideElementsPopup && !isAddElementButton && !isBlueAddButton) {
    if (!leftSlidingPopup.classList.contains("hidden")) closeElementsPanel();
  }
});
