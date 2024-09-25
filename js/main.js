!function () {
    "use strict";
    var t = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        }, BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        }, iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        }, Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        }, Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        }, any: function () {
            return t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
        }
    }, e = function () {
        if (!t.any()) {
            var e, i, a, n, s, o, c, r, l, d, f, u, m;
            e = {
                Android: function () {
                    return navigator.userAgent.match(/Android/i)
                }, BlackBerry: function () {
                    return navigator.userAgent.match(/BlackBerry/i)
                }, iOS: function () {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
                }, Opera: function () {
                    return navigator.userAgent.match(/Opera Mini/i)
                }, Windows: function () {
                    return navigator.userAgent.match(/IEMobile/i)
                }, any: function () {
                    return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
                }
            }, i = function () {
                e.any() || ($(".js-fullheight").css("height", $(window).height()), $(window).resize(function () {
                    $(".js-fullheight").css("height", $(window).height())
                }))
            }, a = function () {
                $(".js-counter").countTo({
                    formatter: function (t, e) {
                        return t.toFixed(e.decimals)
                    }
                })
            }, n = function () {
                $("#colorlib-counter").length > 0 && $("#colorlib-counter").waypoint(function (t) {
                    "down" !== t || $(this.element).hasClass("animated") || (setTimeout(a, 400), $(this.element).addClass("animated"))
                }, {offset: "90%"})
            }, s = function () {
                var t = 0;
                $(".animate-box").waypoint(function (e) {
                    "down" !== e || $(this.element).hasClass("animated") || (t++, $(this.element).addClass("item-animate"), setTimeout(function () {
                        $("body .animate-box.item-animate").each(function (t) {
                            var e = $(this);
                            setTimeout(function () {
                                var t = e.data("animate-effect");
                                "fadeIn" === t ? e.addClass("fadeIn animated") : "fadeInLeft" === t ? e.addClass("fadeInLeft animated") : "fadeInRight" === t ? e.addClass("fadeInRight animated") : e.addClass("fadeInUp animated"), e.removeClass("item-animate")
                            }, 200 * t, "easeInOutExpo")
                        })
                    }, 100))
                }, {offset: "85%"})
            }, o = function () {
                $(".js-colorlib-nav-toggle").on("click", function (t) {
                    t.preventDefault();
                    var e = $(this);
                    $("body").hasClass("offcanvas") ? (e.removeClass("active"), $("body").removeClass("offcanvas")) : (e.addClass("active"), $("body").addClass("offcanvas"))
                })
            }, c = function () {
                $(document).click(function (t) {
                    var e = $("#colorlib-aside, .js-colorlib-nav-toggle");
                    !e.is(t.target) && 0 === e.has(t.target).length && $("body").hasClass("offcanvas") && ($("body").removeClass("offcanvas"), $(".js-colorlib-nav-toggle").removeClass("active"))
                }), $(window).scroll(function () {
                    $("body").hasClass("offcanvas") && ($("body").removeClass("offcanvas"), $(".js-colorlib-nav-toggle").removeClass("active"))
                })
            }, r = function () {
                $('#navbar a:not([class="external"])').click(function (t) {
                    var e = $(this).data("nav-section"), i = $("#navbar");
                    return $('[data-section="' + e + '"]').length && $("html, body").animate({scrollTop: $('[data-section="' + e + '"]').offset().top - 55}, 500), i.is(":visible") && (i.removeClass("in"), i.attr("aria-expanded", "false"), $(".js-colorlib-nav-toggle").removeClass("active")), t.preventDefault(), !1
                })
            }, l = function (t) {
                var e = $("#navbar > ul");
                e.find("li").removeClass("active"), e.each(function () {
                    $(this).find('a[data-nav-section="' + t + '"]').closest("li").addClass("active")
                })
            }, d = function () {
                var t = $("section[data-section]");
                t.waypoint(function (t) {
                    "down" === t && l($(this.element).data("section"))
                }, {offset: "150px"}), t.waypoint(function (t) {
                    "up" === t && l($(this.element).data("section"))
                }, {
                    offset: function () {
                        return -$(this.element).height() + 155
                    }
                })
            }, f = function () {
                $("#colorlib-hero .flexslider").flexslider({
                    animation: "fade",
                    slideshowSpeed: 5e3,
                    directionNav: !0,
                    start: function () {
                        setTimeout(function () {
                            $(".slider-text").removeClass("animated fadeInUp"), $(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")
                        }, 500)
                    },
                    before: function () {
                        setTimeout(function () {
                            $(".slider-text").removeClass("animated fadeInUp"), $(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")
                        }, 500)
                    }
                })
            }, u = function () {
                var t = $(".image-content").outerHeight();
                992 >= $(window).width() ? $("#sticky_item").trigger("sticky_kit:detach") : ($(".sticky-parent").removeClass("stick-detach"), $("#sticky_item").trigger("sticky_kit:detach"), $("#sticky_item").trigger("sticky_kit:unstick")), $(window).resize(function () {
                    var t = $(".image-content").outerHeight();
                    $(".sticky-parent").css("height", t), 992 >= $(window).width() ? $("#sticky_item").trigger("sticky_kit:detach") : ($(".sticky-parent").removeClass("stick-detach"), $("#sticky_item").trigger("sticky_kit:detach"), $("#sticky_item").trigger("sticky_kit:unstick"), $("#sticky_item").stick_in_parent())
                }), $(".sticky-parent").css("height", t), $("#sticky_item").stick_in_parent()
            }, m = function () {
                $(".owl-carousel").owlCarousel({
                    animateOut: "fadeOut",
                    animateIn: "fadeIn",
                    autoplay: !0,
                    loop: !0,
                    margin: 0,
                    nav: !0,
                    dots: !1,
                    autoHeight: !0,
                    items: 1,
                    navText: ["<i class='icon-arrow-left3 owl-direction'></i>", "<i class='icon-arrow-right3 owl-direction'></i>"]
                })
            }, $(function () {
                i(), a(), n(), s(), o(), r(), d(), c(), f(), u(), m()
            }), $(".js-fullheight").css("height", $(window).height()), $(window).resize(function () {
                $(".js-fullheight").css("height", $(window).height())
            })
        }
    }, i = function () {
        $(".js-counter").countTo({
            formatter: function (t, e) {
                return t.toFixed(e.decimals)
            }
        })
    }, a = function () {
        $("#colorlib-counter").length > 0 && $("#colorlib-counter").waypoint(function (t) {
            "down" !== t || $(this.element).hasClass("animated") || (setTimeout(i, 400), $(this.element).addClass("animated"))
        }, {offset: "90%"})
    }, n = function () {
        var t = 0;
        $(".animate-box").waypoint(function (e) {
            "down" !== e || $(this.element).hasClass("animated") || (t++, $(this.element).addClass("item-animate"), setTimeout(function () {
                $("body .animate-box.item-animate").each(function (t) {
                    var e = $(this);
                    setTimeout(function () {
                        var t = e.data("animate-effect");
                        "fadeIn" === t ? e.addClass("fadeIn animated") : "fadeInLeft" === t ? e.addClass("fadeInLeft animated") : "fadeInRight" === t ? e.addClass("fadeInRight animated") : e.addClass("fadeInUp animated"), e.removeClass("item-animate")
                    }, 200 * t, "easeInOutExpo")
                })
            }, 100))
        }, {offset: "85%"})
    }, s = function () {
        $(".js-colorlib-nav-toggle").on("click", function (t) {
            t.preventDefault();
            var e = $(this);
            $("body").hasClass("offcanvas") ? (e.removeClass("active"), $("body").removeClass("offcanvas")) : (e.addClass("active"), $("body").addClass("offcanvas"))
        })
    }, o = function () {
        $(document).click(function (t) {
            var e = $("#colorlib-aside, .js-colorlib-nav-toggle");
            !e.is(t.target) && 0 === e.has(t.target).length && $("body").hasClass("offcanvas") && ($("body").removeClass("offcanvas"), $(".js-colorlib-nav-toggle").removeClass("active"))
        }), $(window).scroll(function (t) {
            t.stopPropagation(), t.preventDefault(), $("body").hasClass("offcanvas") && ($("body").removeClass("offcanvas"), $(".js-colorlib-nav-toggle").removeClass("active"))
        })
    }, c = function () {
        $('#navbar a:not([class="external"])').click(function (t) {
            var e = $(this).data("nav-section"), i = $("#navbar");
            return $('[data-section="' + e + '"]').length && $("html, body").animate({scrollTop: $('[data-section="' + e + '"]').offset().top - 55}, 500), i.is(":visible") && (i.removeClass("in"), i.attr("aria-expanded", "false"), $(".js-colorlib-nav-toggle").removeClass("active")), t.preventDefault(), !1
        })
    }, r = function (t) {
        var e = $("#navbar > ul");
        e.find("li").removeClass("active"), e.each(function () {
            $(this).find('a[data-nav-section="' + t + '"]').closest("li").addClass("active")
        })
    }, l = function () {
        var t = $("section[data-section]");
        t.waypoint(function (t) {
            "down" === t && r($(this.element).data("section"))
        }, {offset: "150px"}), t.waypoint(function (t) {
            "up" === t && r($(this.element).data("section"))
        }, {
            offset: function () {
                return -$(this.element).height() + 155
            }
        })
    }, d = function () {
        $("#colorlib-hero .flexslider").flexslider({
            animation: "fade",
            slideshowSpeed: 5e3,
            directionNav: !0,
            start: function () {
                setTimeout(function () {
                    $(".slider-text").removeClass("animated fadeInUp"), $(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")
                }, 500)
            },
            before: function () {
                setTimeout(function () {
                    $(".slider-text").removeClass("animated fadeInUp"), $(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")
                }, 500)
            }
        })
    }, f = function () {
        var t = $(".image-content").outerHeight();
        992 >= $(window).width() ? $("#sticky_item").trigger("sticky_kit:detach") : ($(".sticky-parent").removeClass("stick-detach"), $("#sticky_item").trigger("sticky_kit:detach"), $("#sticky_item").trigger("sticky_kit:unstick")), $(window).resize(function () {
            var t = $(".image-content").outerHeight();
            $(".sticky-parent").css("height", t), 992 >= $(window).width() ? $("#sticky_item").trigger("sticky_kit:detach") : ($(".sticky-parent").removeClass("stick-detach"), $("#sticky_item").trigger("sticky_kit:detach"), $("#sticky_item").trigger("sticky_kit:unstick"), $("#sticky_item").stick_in_parent())
        }), $(".sticky-parent").css("height", t), $("#sticky_item").stick_in_parent()
    }, u = function () {
        $(".owl-carousel").owlCarousel({
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            autoplay: !0,
            loop: !0,
            margin: 0,
            nav: !0,
            dots: !1,
            autoHeight: !0,
            items: 1,
            navText: ["<i class='icon-arrow-left3 owl-direction'></i>", "<i class='icon-arrow-right3 owl-direction'></i>"]
        })
    };
    $(function () {
        e(), i(), a(), n(), s(), c(), l(), o(), d(), f(), u()
    })
}();