var Revealator = void 0 !== Revealator ? Revealator : {};
$(function () {
  function a() {
    Revealator.busy ||
      ((Revealator.busy = !0),
      setTimeout(function () {
        (Revealator.busy = !1), Revealator.refresh();
      }, 150));
  }
  ((Revealator = $.extend(
    {},
    {
      timer: null,
      busy: !1,
      scroll_padding: 0,
      effects_padding: 0,
      refresh: function () {},
    },
    void 0 !== Revealator ? Revealator : {}
  )).refresh = function () {
    var a = $(window),
      e = $(document),
      o = $(document.body),
      t = Revealator.effects_padding,
      l = a.height() - Revealator.effects_padding,
      r = Revealator.scroll_padding,
      s = e.height() - Revealator.scroll_padding;
    0 === a.scrollTop()
      ? o.hasClass("at-top") ||
        o
          .addClass("at-top")
          .removeClass("at-bottom")
          .removeClass("near-top")
          .removeClass("near-bottom")
      : a.scrollTop() + a.height() === e.height()
      ? o.hasClass("at-bottom") ||
        o
          .addClass("at-bottom")
          .removeClass("at-top")
          .removeClass("near-top")
          .removeClass("near-bottom")
      : a.scrollTop() <= r
      ? o.hasClass("near-top") ||
        o
          .addClass("near-top")
          .removeClass("near-bottom")
          .removeClass("at-top")
          .removeClass("at-bottom")
      : a.scrollTop() + a.height() >= s
      ? o.hasClass("near-bottom") ||
        o
          .addClass("near-bottom")
          .removeClass("near-top")
          .removeClass("at-top")
          .removeClass("at-bottom")
      : (o.hasClass("at-top") ||
          o.hasClass("at-bottom") ||
          o.hasClass("near-top") ||
          o.hasClass("near-bottom")) &&
        o
          .removeClass("at-top")
          .removeClass("at-bottom")
          .removeClass("near-top")
          .removeClass("near-bottom"),
      $('*[class*="revealator"]').each(function () {
        0;
        var a = $(this),
          e = this.getBoundingClientRect(),
          o = void 0;
        (o =
          e.top > l && e.bottom > l
            ? "revealator-below"
            : e.top < l && e.bottom > l
            ? "revealator-partially-below"
            : e.top < t && e.bottom > t
            ? "revealator-partially-above"
            : e.top < t && e.bottom < t
            ? "revealator-above"
            : "revealator-within"),
          a.hasClass("revealator-load") &&
            !a.hasClass("revealator-within") &&
            (a.removeClass(
              "revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above"
            ),
            a.addClass("revealator-within")),
          a.hasClass(o) ||
            a.hasClass("revealator-load") ||
            (a.hasClass("revealator-once")
              ? (a.hasClass("revealator-within") ||
                  (a.removeClass(
                    "revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above"
                  ),
                  a.addClass(o)),
                (a.hasClass("revealator-partially-above") ||
                  a.hasClass("revealator-above")) &&
                  a.addClass("revealator-within"))
              : (a.removeClass(
                  "revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above"
                ),
                a.addClass(o)));
      });
  }),
    $(window).on("scroll resize load", function () {
      a();
    }),
    $(document).ready(function () {
      a();
    });
});
