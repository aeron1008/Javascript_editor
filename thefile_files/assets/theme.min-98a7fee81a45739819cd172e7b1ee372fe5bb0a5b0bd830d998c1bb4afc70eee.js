(() => {
  // app/javascript/theme.min.js
  $(document).ready(function() {
    setTimeout(function() {
      $(".notification").fadeOut(1e3, function() {
        $(this).remove;
      });
    }, 1e3);
    $(".popup-settings-edit-funnel").length && $(".popup-settings-edit-funnel").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true
    });
    $(".popup-modal-button").length && $(".popup-modal-button").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true
    });
  });
  document.addEventListener("DOMContentLoaded", function(e) {
    "use strict";
    var courseForm;
    !function() {
      var e2;
      $(".course-list").length && $(".course-list").slimScroll({
        height: "100%"
      }), $(".nav-scroller").length && $(".nav-scroller").slimScroll({
        height: "97%"
      }), $(".dropdown-menu a.dropdown-toggle").length && $(".dropdown-menu a.dropdown-toggle").on("click", function(e3) {
        return $(this).next().hasClass("show") || $(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), $(this).next(".dropdown-menu").toggleClass("show"), $(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function(e4) {
          $(".dropdown-submenu .show").removeClass("show");
        }), false;
      }), $(".notification-list-scroll").length && $(".notification-list-scroll").slimScroll({
        height: 300
      }), $('[data-toggle="tooltip"]').length && $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').length && $('[data-toggle="popover"]').popover(), $("#cardRadioone , #cardRadioTwo").length && ($("#internetpayment").hide(), $("#cardRadioone").on("change", function() {
        this.checked && ($("#cardpayment").show(), $("#internetpayment").hide());
      }), $("#cardRadioTwo").on("change", function() {
        this.checked && ($("#internetpayment").show(), $("#cardpayment").hide());
      })), $(".popup-settings-edit-funnel").length && $(".popup-settings-edit-funnel").magnificPopup({
        type: "inline",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
      }), $(".popup-modal-button").length && $(".popup-modal-button").magnificPopup({
        type: "inline",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
      }), $(".popup-youtube").length && $(".popup-youtube").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
      }), $(".popup-login").length && $(".popup-login").magnificPopup({
        // don't use for now
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
      }), $(".open-popup-login").magnificPopup({
        //  items: {
        //    src: 'users/sign_in',
        //    type: 'ajax'
        //  },
        type: "inline",
        mainClass: "mfp-fade",
        removalDelay: 160,
        midClick: true
        // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
      }), $(".flatpickr").length && flatpickr(".flatpickr", {
        disableMobile: true
      }), $(".password-field input").length && $(".password-field input").on("keyup", function() {
        var e3 = function(e4) {
          var t2 = 0;
          6 <= e4.length && (t2 += 1);
          e4.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (t2 += 1);
          e4.match(/([a-zA-Z])/) && e4.match(/([0-9])/) && (t2 += 1);
          return t2;
        }($(this).val()), t = $(this).parent(".password-field");
        t.removeClass(function(e4, t2) {
          return (t2.match(/\level\S+/g) || []).join(" ");
        }), t.addClass("level" + e3);
      }), $("input").length && Inputmask().mask(document.querySelectorAll("input")), $("#earning").length && (e2 = {
        series: [{
          name: "Current Month",
          data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38]
        }],
        labels: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        chart: {
          fontFamily: "$font-family-base",
          height: "280px",
          type: "line",
          toolbar: {
            show: false
          }
        },
        colors: ["#754FFE"],
        stroke: {
          width: 4,
          curve: "smooth",
          colors: ["#754FFE"]
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            show: true
          },
          labels: {
            offsetX: 0,
            offsetY: 5,
            style: {
              fontSize: "13px",
              fontWeight: 400,
              colors: "#a8a3b9"
            }
          }
        },
        yaxis: {
          labels: {
            formatter: function(e3) {
              return e3 + "k";
            },
            style: {
              fontSize: "13px",
              fontWeight: 400,
              colors: "#a8a3b9"
            },
            offsetX: -15
          },
          tickAmount: 3,
          min: 10,
          max: 40
        },
        grid: {
          borderColor: "#e0e6ed",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          offsetY: -50,
          fontSize: "16px",
          markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: void 0,
            radius: 12,
            onClick: void 0,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 0,
            vertical: 20
          }
        },
        tooltip: {
          theme: "light",
          marker: {
            show: true
          },
          x: {
            show: false
          }
        },
        responsive: [{
          breakpoint: 575,
          options: {
            legend: {
              offsetY: -30
            }
          }
        }]
      }, new ApexCharts(document.querySelector("#earning"), e2).render()), $("#earningTwo").length && (e2 = {
        series: [{
          name: "Current Month",
          data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38]
        }],
        labels: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        chart: {
          fontFamily: "$font-family-base",
          height: "280px",
          type: "line",
          toolbar: {
            show: false
          }
        },
        colors: ["#754FFE"],
        stroke: {
          width: 4,
          curve: "smooth",
          colors: ["#754FFE"]
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            show: true
          },
          labels: {
            offsetX: 0,
            offsetY: 5,
            style: {
              fontSize: "13px",
              fontWeight: 400,
              colors: "#a8a3b9"
            }
          }
        },
        yaxis: {
          labels: {
            formatter: function(e3) {
              return e3 + "k";
            },
            style: {
              fontSize: "13px",
              fontWeight: 400,
              colors: "#a8a3b9"
            },
            offsetX: -15
          },
          tickAmount: 3,
          min: 10,
          max: 40
        },
        grid: {
          borderColor: "#e0e6ed",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          offsetY: -50,
          fontSize: "16px",
          markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: void 0,
            radius: 12,
            onClick: void 0,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 0,
            vertical: 20
          }
        },
        tooltip: {
          theme: "light",
          marker: {
            show: true
          },
          x: {
            show: false
          }
        },
        responsive: [{
          breakpoint: 575,
          options: {
            legend: {
              offsetY: -30
            }
          }
        }]
      }, new ApexCharts(document.querySelector("#earningTwo"), e2).render()), $("#order").length && (e2 = {
        series: [{
          name: "Days",
          data: [0, 3, 0.5, 3.5, 1, 2.5, 0.5, 4, 1.4, 4.5, 2.5, 4.8]
        }],
        labels: ["12 Jan", "14 Jan", "16 Jan", "18 Jan", "20 Jan", "22 Jan", "24 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
        chart: {
          fontFamily: "$font-family-base",
          height: "280px",
          type: "line",
          toolbar: {
            show: false
          }
        },
        colors: ["#754FFE"],
        stroke: {
          width: 4,
          curve: "smooth",
          colors: ["#754FFE"]
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            show: true
          },
          labels: {
            offsetX: 0,
            offsetY: 5,
            style: {
              fontSize: "13px",
              fontWeight: 400,
              colors: "#a8a3b9"
            }
          }
        },
        yaxis: {
          labels: {
            formatter: function(e3, t) {
              return e3.toFixed(0);
            },
            style: {
              fontSize: "13px",
              fontWeight: 400,
              colors: "#a8a3b9"
            },
            offsetX: -20
          },
          tickAmount: 3,
          min: 0,
          max: 5
        },
        grid: {
          borderColor: "#e0e6ed",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: -10
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          offsetY: -50,
          fontSize: "16px",
          markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: void 0,
            radius: 12,
            onClick: void 0,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 0,
            vertical: 20
          }
        },
        tooltip: {
          theme: "light",
          marker: {
            show: true
          },
          x: {
            show: false
          }
        },
        responsive: [{
          breakpoint: 575,
          options: {
            legend: {
              offsetY: -30
            }
          }
        }]
      }, new ApexCharts(document.querySelector("#order"), e2).render()), $("#traffic").length && (e2 = {
        dataLabels: {
          enabled: false
        },
        series: [44, 55, 41],
        labels: ["Direct", "Referral", "Organic"],
        colors: ["#754FFE", "#CEC0FF", "#E8E2FF"],
        chart: {
          width: 392,
          type: "donut"
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "78%"
            }
          }
        },
        legend: {
          position: "bottom",
          fontFamily: "inter",
          fontWeight: 500,
          fontSize: "14px",
          markers: {
            width: 8,
            height: 8,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: void 0,
            radius: 12,
            customHTML: void 0,
            onClick: void 0,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 8,
            vertical: 0
          }
        },
        tooltip: {
          theme: "light",
          marker: {
            show: true
          },
          x: {
            show: false
          }
        },
        states: {
          hover: {
            filter: {
              type: "none"
            }
          }
        }
      }, new ApexCharts(document.querySelector("#traffic"), e2).render()), $("#orderColumn").length && (e2 = {
        series: [{
          data: [4, 6, 5, 3, 5, 6, 8, 9]
        }],
        chart: {
          toolbar: {
            show: false
          },
          type: "bar",
          height: 272
        },
        colors: ["#754FFE"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "12%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["transparent"]
        },
        xaxis: {
          categories: ["1 Jun", "9 Jun", "16 jun", "18 Jun", "19 Jun", "22 jun", "24 Jun", "26 Jun"],
          axisBorder: {
            show: false
          },
          labels: {
            offsetX: 0,
            offsetY: 5,
            style: {
              fontSize: "13px",
              fontWeight: 400,
              colors: "#a8a3b9"
            }
          }
        },
        grid: {
          borderColor: "#e0e6ed",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: -10
          }
        },
        yaxis: {
          title: {
            text: void 0
          },
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: "rounded",
              columnWidth: "80%"
            }
          },
          labels: {
            style: {
              fontSize: "13px",
              fontWeight: 400,
              colors: "#a8a3b9"
            },
            offsetX: -10
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(e3) {
              return e3 + " sales ";
            }
          },
          marker: {
            show: true
          }
        }
      }, new ApexCharts(document.querySelector("#orderColumn"), e2).render()), $("#totalEarning").length && (e2 = {
        series: [{
          data: [50, 80, 5, 90, 12, 150, 12, 80, 150]
        }],
        chart: {
          width: 130,
          type: "line",
          toolbar: {
            show: false
          }
        },
        tooltip: {
          enabled: false
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: ["#19cb98"],
          width: 2,
          dashArray: 0
        },
        grid: {
          show: false
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          labels: {
            show: false
          },
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        }
      }, new ApexCharts(document.querySelector("#totalEarning"), e2).render()), $("#payoutChart").length && (e2 = {
        series: [{
          name: "Inflation",
          data: [40, 20, 50, 80, 65]
        }],
        chart: {
          height: 150,
          type: "bar",
          toolbar: {
            show: false
          }
        },
        colors: ["#E8E2FF"],
        grid: {
          show: false
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
          bar: {
            endingShape: "flat",
            columnWidth: "65%"
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          labels: {
            show: false
          },
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: "top",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        yaxis: {
          show: false
        }
      }, new ApexCharts(document.querySelector("#payoutChart"), e2).render()), $("#editor").length && new Quill("#editor", {
        theme: "snow"
      }), $("#courseCoverImg").length && new FileUploadWithPreview("courseCoverImg", {
        showDeleteButtonOnImages: true,
        text: {
          chooseFile: " No File Selected",
          browse: "Upload File"
        }
      }), $("#nav-toggle").length && $("#nav-toggle").on("click", function(e3) {
        e3.preventDefault(), $("#db-wrapper").toggleClass("toggled");
      }), $("#invoice").length && $("#invoice").find(".print-link").on("click", function() {
        $.print("#invoice");
      }), $(".sidebar-nav-fixed a").length && $(".sidebar-nav-fixed a").on("click", function(e3) {
        var t;
        location.pathname.replace(/^\//, "") != this.pathname.replace(/^\//, "") || location.hostname != this.hostname || (t = (t = $(this.hash)).length ? t : $("[name=" + this.hash.slice(1) + "]")).length && (e3.preventDefault(), $("html, body").animate({
          scrollTop: t.offset().top - 90
        }, 1e3, function() {
          var e4 = $(t);
          if (e4.focus(), e4.is(":focus"))
            return false;
          e4.attr("tabindex", "-1"), e4.focus();
        })), $(".sidebar-nav-fixed a").each(function() {
          $(this).removeClass("active");
        }), $(this).addClass("active");
      }), $("#checkAll").length && $("#checkAll").on("click", function() {
        $("input:checkbox").not(this).prop("checked", this.checked);
      }), $("#btn-icon").length && $(".btn-icon").on("click", function() {
        $(this).parent().addClass("active").siblings().removeClass("active");
      }), $(".stopevent").length && $(document).on("click.bs.dropdown.data-api", ".stopevent", function(e3) {
        e3.stopPropagation();
      }), $("input[name=tags]").length && (e2 = document.querySelector("input[name=tags]"), new Tagify(e2)), $(".headingTyped").length && new Typed(".headingTyped", {
        strings: ["Skills", "Products ", "Teams", "Future"],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 1e3,
        loop: true
      });
    }(), function() {
      var e2 = $("#pricing-switch input");
      $(e2).on("change", function() {
        true === $(e2).is(":checked") ? $(".toggle-price-content").each(function() {
          $(this).html($(this).data("price-yearly"));
        }) : $(".toggle-price-content").each(function() {
          $(this).html($(this).data("price-monthly"));
        });
      });
    }(), // dragula([document.querySelector("#courseOne"), document.querySelector("#courseTwo")]), $("#courseForm").length && document.addEventListener("DOMContentLoaded", function () {
    //   courseForm = new Stepper(document.querySelector("#courseForm"), {
    //     linear: !1,
    //     animation: !0
    //   })
    // }),
    // function () {
    //   for (var e, t = document.getElementsByTagName("pre"), o = 0; o < t.length; o++) 0 === t[o].children[0].className.indexOf("language-") && ((e = document.createElement("button")).className = "copy-button", e.textContent = "Copy", t[o].appendChild(e));
    //   var n = new Clipboard(".copy-button", {
    //     target: function (e) {
    //       return e.previousElementSibling
    //     }
    //   });
    //   n.on("success", function (e) {
    //     e.clearSelection(), e.trigger.textContent = "Copied", window.setTimeout(function () {
    //       e.trigger.textContent = "Copy"
    //     }, 2e3)
    //   }), n.on("error", function (e) {
    //     e.trigger.textContent = 'Press "Ctrl + C" to copy', window.setTimeout(function () {
    //       e.trigger.textContent = "Copy"
    //     }, 5e3)
    //   })
    // }(),
    function() {
      var e2 = window.location + "", t = e2.replace(window.location.protocol + "//" + window.location.host + "/", "");
      $("ul#sidebarnav a").filter(function() {
        return this.href === e2 || this.href === t;
      }).parentsUntil(".sidebar-nav").each(function(e3) {
        $(this).is("li") && 0 !== $(this).children("a").length ? ($(this).children("a").addClass("active"), $(this).parent("ul#sidebarnav").length, $(this).addClass("active")) : $(this).is("ul") || 0 !== $(this).children("a").length ? $(this).is("ul") && $(this).addClass("in") : $(this).addClass("active");
      });
    }(), $(".sliderFirst").length && tns({
      container: ".sliderFirst",
      loop: false,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderFirstControls",
      responsive: {
        768: {
          items: 2
        },
        990: {
          items: 4
        }
      }
    }), $(".sliderSecond").length && tns({
      container: ".sliderSecond",
      loop: false,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderSecondControls",
      responsive: {
        768: {
          items: 2
        },
        990: {
          items: 4
        }
      }
    }), $(".sliderThird").length && tns({
      container: ".sliderThird",
      loop: false,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderThirdControls",
      responsive: {
        768: {
          items: 2
        },
        990: {
          items: 4
        }
      }
    }), $(".sliderFourth").length && tns({
      container: ".sliderFourth",
      loop: false,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderFourthControls",
      responsive: {
        768: {
          items: 2
        },
        990: {
          items: 4
        }
      }
    }), $(".sliderTestimonial").length && tns({
      container: ".sliderTestimonial",
      loop: false,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderTestimonialControls",
      responsive: {
        768: {
          items: 2
        },
        990: {
          items: 3
        }
      }
    }), tippy(".imgtooltip", {
      content: function(e2) {
        e2 = e2.getAttribute("data-template");
        return document.getElementById(e2).innerHTML;
      },
      allowHTML: true,
      theme: "light",
      animation: "scale"
    }), tippy(".covinfo", {
      content: "Pomocn\xEDk ud\xE1v\xE1, \u017Ee m\xE1 za sebou alespo\u0148 1. d\xE1vku vakc\xEDny a je ochotna dolo\u017Eit vakcina\u010Dn\xED certifik\xE1t",
      animation: "scale"
    }), tippy(".osobinfo", {
      content: "Na\u0161e ov\u011B\u0159en\xED kde si s pomocn\xEDkem pov\xEDd\xE1me, ov\u011B\u0159\xEDme OP a rejst\u0159\xEDk trest\u016F",
      animation: "scale"
    }), tippy(".vidinfo", {
      content: "Na\u0161e ov\u011B\u0159en\xED kde si s pomocn\xEDkem pov\xEDd\xE1me a ov\u011B\u0159\xEDme p\u0159es video",
      animation: "scale"
    }), tippy(".myidinfo", {
      content: "Ukazuje 3 stupn\u011B ov\u011B\u0159en\xED p\u0159es mojeID. Pomocn\xEDk si m\u016F\u017Ee ov\u011B\u0159it email, adresu a identitu. Po\u010Det oran\u017Eov\xFDch \u0161t\xEDt\u016F v\xE1m  uk\xE1\u017Ee, na jak\xE9m je stupni.",
      animation: "scale"
    }), tippy(".bookmark", {
      content: "M\xEDsto",
      animation: "scale"
    }), tippy(".bookmark", {
      content: "M\xEDsto",
      animation: "scale"
    }), tippy(".bookmark", {
      content: "M\xEDsto",
      animation: "scale"
    }), tippy(".bookmark", {
      content: "M\xEDsto",
      animation: "scale"
    }), tippy(".bookmark", {
      content: "M\xEDsto",
      animation: "scale"
    }), tippy(".bookmark", {
      content: "M\xEDsto",
      animation: "scale"
    }), tippy(".city", {
      content: "M\xEDsto kde je nej\u010Dast\u011Bji",
      animation: "scale"
    }), tippy(".removeBookmark", {
      content: "Remove Bookmarks",
      animation: "scale"
    });
  });
})();

