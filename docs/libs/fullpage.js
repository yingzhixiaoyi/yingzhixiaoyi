/*!
 * fullPage 3.0.8
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!(function(e, t, n, o, r) {
  "function" == typeof define && define.amd
    ? define(function() {
        return (e.fullpage = o(t, n)), e.fullpage;
      })
    : "object" == typeof exports
    ? (module.exports = o(t, n))
    : (t.fullpage = o(t, n));
})(this, window, document,
    function(Rt, Nt) {
  "use strict";
  var zt = "fullpage-wrapper",
    jt = "." + zt,
    Pt = "fp-responsive",
    Dt = "fp-notransition",
    Vt = "fp-destroyed",
    Wt = "fp-enabled",
    Yt = "fp-viewing",
    Ft = "active",
    Ut = "." + Ft,
    Xt = "fp-completely",
    Kt = "fp-section",
    _t = "." + Kt,
    $t = _t + Ut,
    qt = "fp-tableCell",
    Qt = "." + qt,
    Gt = "fp-auto-height",
    Jt = "fp-normal-scroll",
    Zt = "fp-nav",
    en = "#" + Zt,
    tn = "fp-tooltip",
    nn = "fp-slide",
    on = "." + nn,
    rn = on + Ut,
    ln = "fp-slides",
    an = "." + ln,
    sn = "fp-slidesContainer",
    cn = "." + sn,
    un = "fp-table",
    fn = "fp-slidesNav",
    dn = "." + fn,
    vn = dn + " a",
    e = "fp-controlArrow",
    pn = "." + e,
    hn = "fp-prev",
    gn = pn + ".fp-prev",
    mn = pn + ".fp-next";
  function Sn(e, t) {
    Rt.console && Rt.console[e] && Rt.console[e]("fullPage: " + t);
  }
  function wn(e, t) {
    return (t = 1 < arguments.length ? t : Nt) ? t.querySelectorAll(e) : null;
  }
  function bn(e) {
    e = e || {};
    for (var t = 1, n = arguments.length; t < n; ++t) {
      var o = arguments[t];
      if (o)
        for (var r in o)
          o.hasOwnProperty(r) &&
            ("[object Object]" !== Object.prototype.toString.call(o[r])
              ? (e[r] = o[r])
              : (e[r] = bn(e[r], o[r])));
    }
    return e;
  }
  function yn(e, t) {
    return (
      null != e &&
      (e.classList
        ? e.classList.contains(t)
        : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className))
    );
  }
  function En() {
    return "innerHeight" in Rt
      ? Rt.innerHeight
      : Nt.documentElement.offsetHeight;
  }
  function Ln() {
    return Rt.innerWidth;
  }
  function xn(e, t) {
    var n;
    for (n in ((e = l(e)), t))
      if (t.hasOwnProperty(n) && null !== n)
        for (var o = 0; o < e.length; o++) {
          e[o].style[n] = t[n];
        }
    return e;
  }
  function n(e, t, n) {
    for (var o = e[n]; o && !_n(o, t); ) o = o[n];
    return o;
  }
  function An(e, t) {
    return n(e, t, "previousElementSibling");
  }
  function Tn(e, t) {
    return n(e, t, "nextElementSibling");
  }
  function kn(e) {
    return e.previousElementSibling;
  }
  function On(e) {
    return e.nextElementSibling;
  }
  function Mn(e) {
    return e[e.length - 1];
  }
  function Cn(e, t) {
    e = i(e) ? e[0] : e;
    for (
      var n = null != t ? wn(t, e.parentNode) : e.parentNode.childNodes,
        o = 0,
        r = 0;
      r < n.length;
      r++
    ) {
      if (n[r] == e) return o;
      1 == n[r].nodeType && o++;
    }
    return -1;
  }
  function l(e) {
    return i(e) ? e : [e];
  }
  function Hn(e) {
    e = l(e);
    for (var t = 0; t < e.length; t++) e[t].style.display = "none";
    return e;
  }
  function In(e) {
    e = l(e);
    for (var t = 0; t < e.length; t++) e[t].style.display = "block";
    return e;
  }
  function i(e) {
    return (
      "[object Array]" === Object.prototype.toString.call(e) ||
      "[object NodeList]" === Object.prototype.toString.call(e)
    );
  }
  function Bn(e, t) {
    e = l(e);
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.classList ? o.classList.add(t) : (o.className += " " + t);
    }
    return e;
  }
  function Rn(e, t) {
    e = l(e);
    for (var n = t.split(" "), o = 0; o < n.length; o++) {
      t = n[o];
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        i.classList
          ? i.classList.remove(t)
          : (i.className = i.className.replace(
              new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"),
              " "
            ));
      }
    }
    return e;
  }
  function Nn(e, t) {
    t.appendChild(e);
  }
  function o(e, t, n) {
    var o;
    t = t || Nt.createElement("div");
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      ((n && !r) || !n) &&
        ((o = t.cloneNode(!0)), i.parentNode.insertBefore(o, i)),
        o.appendChild(i);
    }
    return e;
  }
  function zn(e, t) {
    o(e, t, !0);
  }
  function jn(e, t) {
    for (
      "string" == typeof t && (t = qn(t)), e.appendChild(t);
      e.firstChild !== t;

    )
      t.appendChild(e.firstChild);
  }
  function Pn(e) {
    for (var t = Nt.createDocumentFragment(); e.firstChild; )
      t.appendChild(e.firstChild);
    e.parentNode.replaceChild(t, e);
  }
  function Dn(e, t) {
    return e && 1 === e.nodeType ? (_n(e, t) ? e : Dn(e.parentNode, t)) : null;
  }
  function Vn(e, t) {
    r(e, e.nextSibling, t);
  }
  function Wn(e, t) {
    r(e, e, t);
  }
  function r(e, t, n) {
    i(n) || ("string" == typeof n && (n = qn(n)), (n = [n]));
    for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t);
  }
  function Yn() {
    var e = Nt.documentElement;
    return (Rt.pageYOffset || e.scrollTop) - (e.clientTop || 0);
  }
  function Fn(t) {
    return Array.prototype.filter.call(t.parentNode.children, function(e) {
      return e !== t;
    });
  }
  function Un(e) {
    e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
  }
  function Xn(e) {
    if ("function" == typeof e) return !0;
    var t = Object.prototype.toString(e);
    return "[object Function]" === t || "[object GeneratorFunction]" === t;
  }
  function Kn(e, t, n) {
    var o;
    (n = void 0 === n ? {} : n),
      "function" == typeof Rt.CustomEvent
        ? (o = new CustomEvent(t, { detail: n }))
        : (o = Nt.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n),
      e.dispatchEvent(o);
  }
  function _n(e, t) {
    return (
      e.matches ||
      e.matchesSelector ||
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      e.oMatchesSelector
    ).call(e, t);
  }
  function $n(e, t) {
    if ("boolean" == typeof t)
      for (var n = 0; n < e.length; n++)
        e[n].style.display = t ? "block" : "none";
    return e;
  }
  function qn(e) {
    var t = Nt.createElement("div");
    return (t.innerHTML = e.trim()), t.firstChild;
  }
  function Qn(e) {
    e = l(e);
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      n && n.parentElement && n.parentNode.removeChild(n);
    }
  }
  function a(e, t, n) {
    for (var o = e[n], r = []; o; )
      (_n(o, t) || null == t) && r.push(o), (o = o[n]);
    return r;
  }
  function Gn(e, t) {
    return a(e, t, "nextElementSibling");
  }
  function Jn(e, t) {
    return a(e, t, "previousElementSibling");
  }
  return (
    Rt.NodeList &&
      !NodeList.prototype.forEach &&
      (NodeList.prototype.forEach = function(e, t) {
        t = t || Rt;
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
      }),
    (Rt.fp_utils = {
      $: wn,
      deepExtend: bn,
      hasClass: yn,
      getWindowHeight: En,
      css: xn,
      until: n,
      prevUntil: An,
      nextUntil: Tn,
      prev: kn,
      next: On,
      last: Mn,
      index: Cn,
      getList: l,
      hide: Hn,
      show: In,
      isArrayOrList: i,
      addClass: Bn,
      removeClass: Rn,
      appendTo: Nn,
      wrap: o,
      wrapAll: zn,
      wrapInner: jn,
      unwrap: Pn,
      closest: Dn,
      after: Vn,
      before: Wn,
      insertBefore: r,
      getScrollTop: Yn,
      siblings: Fn,
      preventDefault: Un,
      isFunction: Xn,
      trigger: Kn,
      matches: _n,
      toggle: $n,
      createElementFromHTML: qn,
      remove: Qn,
      filter: function(e, t) {
        Array.prototype.filter.call(e, t);
      },
      untilAll: a,
      nextAll: Gn,
      prevAll: Jn,
      showError: Sn
    }),
    function(e, E) {
      var n =
          (E &&
            new RegExp(
              "([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$"
            ).test(E.licenseKey)) ||
          -1 < Nt.domain.indexOf("alvarotrigo.com"),
        r = wn("html, body"),
        u = wn("html")[0],
        L = wn("body")[0];
      if (!yn(u, Wt)) {
        var h = {};
        E = bn(
          {
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: Rt.fp_scrolloverflow
              ? Rt.fp_scrolloverflow.iscrollHandler
              : null,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            touchWrapper: "string" == typeof e ? wn(e)[0] : e,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
              type: "reveal",
              percentage: 62,
              property: "translate"
            },
            cards: !1,
            cardsOptions: {
              perspective: 100,
              fadeContent: !0,
              fadeBackground: !0
            },
            sectionSelector: ".section",
            slideSelector: ".slide",
            v2compatible: !1,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
          },
          E
        );
        var x,
          i,
          c,
          f,
          a = !1,
          o = navigator.userAgent.match(
            /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
          ),
          l =
            "ontouchstart" in Rt ||
            0 < navigator.msMaxTouchPoints ||
            navigator.maxTouchPoints,
          d = "string" == typeof e ? wn(e)[0] : e,
          A = En(),
          s = Ln(),
          g = !1,
          t = !0,
          T = !0,
          v = [],
          p = { m: { up: !0, down: !0, left: !0, right: !0 } };
        p.k = bn({}, p.m);
        var m,
          S,
          w,
          b,
          y,
          k,
          O,
          M,
          C,
          H = Rt.PointerEvent
            ? { down: "pointerdown", move: "pointermove" }
            : { down: "MSPointerDown", move: "MSPointerMove" },
          I = {
            touchmove: "ontouchmove" in Rt ? "touchmove" : H.move,
            touchstart: "ontouchstart" in Rt ? "touchstart" : H.down
          },
          B =
            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
          R = !1;
        try {
          var N = Object.defineProperty({}, "passive", {
            get: function() {
              R = !0;
            }
          });
          Rt.addEventListener("testPassive", null, N),
            Rt.removeEventListener("testPassive", null, N);
        } catch (e) {}
        var z,
          j,
          P = bn({}, E),
          D = !1,
          V = !0,
          W = [
            "parallax",
            "scrollOverflowReset",
            "dragAndMove",
            "offsetSections",
            "fadingEffect",
            "responsiveSlides",
            "continuousHorizontal",
            "interlockedSlides",
            "scrollHorizontally",
            "resetSliders",
            "cards"
          ];
        Ot(),
          (Rt.fp_easings = bn(Rt.fp_easings, {
            easeInOutCubic: function(e, t, n, o) {
              return (e /= o / 2) < 1
                ? (n / 2) * e * e * e + t
                : (n / 2) * ((e -= 2) * e * e + 2) + t;
            }
          })),
          d &&
            ((h.version = "3.0.8"),
            (h.setAutoScrolling = J),
            (h.setRecordHistory = Z),
            (h.setScrollingSpeed = ee),
            (h.setFitToSection = te),
            (h.setLockAnchors = function(e) {
              E.lockAnchors = e;
            }),
            (h.setMouseWheelScrolling = ne),
            (h.setAllowScrolling = oe),
            (h.setKeyboardScrolling = ie),
            (h.moveSectionUp = le),
            (h.moveSectionDown = ae),
            (h.silentMoveTo = se),
            (h.moveTo = ce),
            (h.moveSlideRight = ue),
            (h.moveSlideLeft = fe),
            (h.fitToSection = Le),
            (h.reBuild = de),
            (h.setResponsive = pe),
            (h.getFullpageData = function() {
              return E;
            }),
            (h.destroy = function(e) {
              J(!1, "internal"),
                oe(!0),
                re(!1),
                ie(!1),
                Bn(d, Vt),
                [y, b, S, k, O, C, w].forEach(function(e) {
                  clearTimeout(e);
                }),
                Rt.removeEventListener("scroll", Ee),
                Rt.removeEventListener("hashchange", $e),
                Rt.removeEventListener("resize", it),
                Nt.removeEventListener("keydown", Qe),
                Nt.removeEventListener("keyup", Ge),
                ["click", "touchstart"].forEach(function(e) {
                  Nt.removeEventListener(e, he);
                }),
                ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(
                  function(e) {
                    Nt.removeEventListener(e, me, !0);
                  }
                ),
                e &&
                  (xt(0),
                  wn(
                    "img[data-src], source[data-src], audio[data-src], iframe[data-src]",
                    d
                  ).forEach(function(e) {
                    De(e, "src");
                  }),
                  wn("img[data-srcset]").forEach(function(e) {
                    De(e, "srcset");
                  }),
                  Qn(wn(en + ", " + dn + ", " + pn)),
                  xn(wn(_t), {
                    height: "",
                    "background-color": "",
                    padding: ""
                  }),
                  xn(wn(on), { width: "" }),
                  xn(d, {
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                  }),
                  xn(r, { overflow: "", height: "" }),
                  Rn(u, Wt),
                  Rn(L, Pt),
                  L.className.split(/\s+/).forEach(function(e) {
                    0 === e.indexOf(Yt) && Rn(L, e);
                  }),
                  wn(_t + ", " + on).forEach(function(e) {
                    E.scrollOverflowHandler &&
                      E.scrollOverflow &&
                      E.scrollOverflowHandler.remove(e),
                      Rn(e, un + " " + Ft + " " + Xt);
                    var t = e.getAttribute("data-fp-styles");
                    t &&
                      e.setAttribute("style", e.getAttribute("data-fp-styles")),
                      yn(e, Kt) && !D && e.removeAttribute("data-anchor");
                  }),
                  ct(d),
                  [Qt, cn, an].forEach(function(e) {
                    wn(e, d).forEach(function(e) {
                      Pn(e);
                    });
                  }),
                  xn(d, { "-webkit-transition": "none", transition: "none" }),
                  Rt.scrollTo(0, 0),
                  [Kt, nn, sn].forEach(function(e) {
                    Rn(wn("." + e), e);
                  }));
            }),
            (h.getActiveSection = function() {
              return new It(wn($t)[0]);
            }),
            (h.getActiveSlide = function() {
              return ze(wn(rn, wn($t)[0])[0]);
            }),
            (h.test = {
              top: "0px",
              translate3d: "translate3d(0px, 0px, 0px)",
              translate3dH: (function() {
                for (
                  var e = [], t = 0;
                  t < wn(E.sectionSelector, d).length;
                  t++
                )
                  e.push("translate3d(0px, 0px, 0px)");
                return e;
              })(),
              left: (function() {
                for (
                  var e = [], t = 0;
                  t < wn(E.sectionSelector, d).length;
                  t++
                )
                  e.push(0);
                return e;
              })(),
              options: E,
              setAutoScrolling: J
            }),
            (h.shared = { afterRenderActions: ye, isNormalScrollElement: !1 }),
            (Rt.fullpage_api = h),
            E.$ &&
              Object.keys(h).forEach(function(e) {
                E.$.fn.fullpage[e] = h[e];
              }),
            E.css3 &&
              (E.css3 = (function() {
                var e,
                  t = Nt.createElement("p"),
                  n = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                  };
                for (var o in ((t.style.display = "block"),
                Nt.body.insertBefore(t, null),
                n))
                  void 0 !== t.style[o] &&
                    ((t.style[o] = "translate3d(1px,1px,1px)"),
                    (e = Rt.getComputedStyle(t).getPropertyValue(n[o])));
                return (
                  Nt.body.removeChild(t),
                  void 0 !== e && 0 < e.length && "none" !== e
                );
              })()),
            (E.scrollBar = E.scrollBar || E.hybrid),
            (function() {
              if (!E.anchors.length) {
                var e = "[data-anchor]",
                  t = wn(E.sectionSelector.split(",").join(e + ",") + e, d);
                t.length &&
                  ((D = !0),
                  t.forEach(function(e) {
                    E.anchors.push(e.getAttribute("data-anchor").toString());
                  }));
              }
              if (!E.navigationTooltips.length) {
                var n = "[data-tooltip]",
                  o = wn(E.sectionSelector.split(",").join(n + ",") + n, d);
                o.length &&
                  o.forEach(function(e) {
                    E.navigationTooltips.push(
                      e.getAttribute("data-tooltip").toString()
                    );
                  });
              }
            })(),
            (function() {
              xn(d, { height: "100%", position: "relative" }),
                Bn(d, zt),
                Bn(u, Wt),
                (A = En()),
                Rn(d, Vt),
                Bn(wn(E.sectionSelector, d), Kt),
                Bn(wn(E.slideSelector, d), nn);
              for (var e = wn(_t), t = 0; t < e.length; t++) {
                var n = t,
                  o = e[t],
                  r = wn(on, o),
                  i = r.length;
                o.setAttribute("data-fp-styles", o.getAttribute("style")),
                  (s = o),
                  (c = n) || null != wn($t)[0] || Bn(s, Ft),
                  (f = wn($t)[0]),
                  xn(s, { height: A + "px" }),
                  E.paddingTop && xn(s, { "padding-top": E.paddingTop }),
                  E.paddingBottom &&
                    xn(s, { "padding-bottom": E.paddingBottom }),
                  void 0 !== E.sectionsColor[c] &&
                    xn(s, { "background-color": E.sectionsColor[c] }),
                  void 0 !== E.anchors[c] &&
                    s.setAttribute("data-anchor", E.anchors[c]),
                  (l = o),
                  (a = n),
                  void 0 !== E.anchors[a] && yn(l, Ft) && ut(E.anchors[a], a),
                  E.menu &&
                    E.css3 &&
                    null != Dn(wn(E.menu)[0], jt) &&
                    wn(E.menu).forEach(function(e) {
                      L.appendChild(e);
                    }),
                  0 < i ? we(o, r, i) : E.verticalCentered && dt(o);
              }
              var l, a, s, c;
              E.fixedElements &&
                E.css3 &&
                wn(E.fixedElements).forEach(function(e) {
                  L.appendChild(e);
                }),
                E.navigation &&
                  (function() {
                    var e = Nt.createElement("div");
                    e.setAttribute("id", Zt);
                    var t = Nt.createElement("ul");
                    e.appendChild(t), Nn(e, L);
                    var n = wn(en)[0];
                    Bn(n, "fp-" + E.navigationPosition),
                      E.showActiveTooltip && Bn(n, "fp-show-active");
                    for (var o = "", r = 0; r < wn(_t).length; r++) {
                      var i = "";
                      E.anchors.length && (i = E.anchors[r]),
                        (o +=
                          '<li><a href="#' +
                          i +
                          '"><span class="fp-sr-only">' +
                          be(r, "Section") +
                          "</span><span></span></a>");
                      var l = E.navigationTooltips[r];
                      void 0 !== l &&
                        "" !== l &&
                        (o +=
                          '<div class="' +
                          tn +
                          " fp-" +
                          E.navigationPosition +
                          '">' +
                          l +
                          "</div>"),
                        (o += "</li>");
                    }
                    (wn("ul", n)[0].innerHTML = o),
                      xn(wn(en), {
                        "margin-top": "-" + wn(en)[0].offsetHeight / 2 + "px"
                      }),
                      Bn(wn("a", wn("li", wn(en)[0])[Cn(wn($t)[0], _t)]), Ft);
                  })(),
                wn('iframe[src*="youtube.com/embed/"]', d).forEach(function(e) {
                  var t, n, o;
                  (n = "enablejsapi=1"),
                    (o = (t = e).getAttribute("src")),
                    t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n);
                }),
                E.scrollOverflow && (m = E.scrollOverflowHandler.init(E));
            })(),
            oe(!0),
            re(!0),
            J(E.autoScrolling, "internal"),
            at(),
            yt(),
            "complete" === Nt.readyState && _e(),
            Rt.addEventListener("load", _e),
            E.scrollOverflow || ye(),
            (function() {
              for (var e = 1; e < 4; e++) C = setTimeout(Se, 350 * e);
            })(),
            Rt.addEventListener("scroll", Ee),
            Rt.addEventListener("hashchange", $e),
            Rt.addEventListener("blur", tt),
            Rt.addEventListener("resize", it),
            Nt.addEventListener("keydown", Qe),
            Nt.addEventListener("keyup", Ge),
            ["click", "touchstart"].forEach(function(e) {
              Nt.addEventListener(e, he);
            }),
            E.normalScrollElements &&
              (["mouseenter", "touchstart"].forEach(function(e) {
                ge(e, !1);
              }),
              ["mouseleave", "touchend"].forEach(function(e) {
                ge(e, !0);
              })));
        var Y = !1,
          F = 0,
          U = 0,
          X = 0,
          K = 0,
          _ = 0,
          $ = new Date().getTime(),
          q = 0,
          Q = 0,
          G = A;
        return h;
      }
      function J(e, t) {
        e || xt(0), kt("autoScrolling", e, t);
        var n = wn($t)[0];
        if (E.autoScrolling && !E.scrollBar)
          xn(r, { overflow: "hidden", height: "100%" }),
            Z(P.recordHistory, "internal"),
            xn(d, { "-ms-touch-action": "none", "touch-action": "none" }),
            null != n && xt(n.offsetTop);
        else if (
          (xn(r, { overflow: "visible", height: "initial" }),
          Z(!!E.autoScrolling && P.recordHistory, "internal"),
          xn(d, { "-ms-touch-action": "", "touch-action": "" }),
          null != n)
        ) {
          var o = je(n.offsetTop);
          o.element.scrollTo(0, o.options);
        }
      }
      function Z(e, t) {
        kt("recordHistory", e, t);
      }
      function ee(e, t) {
        kt("scrollingSpeed", e, t);
      }
      function te(e, t) {
        kt("fitToSection", e, t);
      }
      function ne(e) {
        e
          ? ((function() {
              var e,
                t = "";
              Rt.addEventListener
                ? (e = "addEventListener")
                : ((e = "attachEvent"), (t = "on"));
              var n =
                  "onwheel" in Nt.createElement("div")
                    ? "wheel"
                    : void 0 !== Nt.onmousewheel
                    ? "mousewheel"
                    : "DOMMouseScroll",
                o = !!R && { passive: !1 };
              "DOMMouseScroll" == n
                ? Nt[e](t + "MozMousePixelScroll", Ce, o)
                : Nt[e](t + n, Ce, o);
            })(),
            d.addEventListener("mousedown", Je),
            d.addEventListener("mouseup", Ze))
          : (Nt.addEventListener
              ? (Nt.removeEventListener("mousewheel", Ce, !1),
                Nt.removeEventListener("wheel", Ce, !1),
                Nt.removeEventListener("MozMousePixelScroll", Ce, !1))
              : Nt.detachEvent("onmousewheel", Ce),
            d.removeEventListener("mousedown", Je),
            d.removeEventListener("mouseup", Ze));
      }
      function oe(t, e) {
        void 0 !== e
          ? (e = e.replace(/ /g, "").split(",")).forEach(function(e) {
              Tt(t, e, "m");
            })
          : Tt(t, "all", "m");
      }
      function re(e) {
        e
          ? (ne(!0),
            (function() {
              if (o || l) {
                E.autoScrolling &&
                  (L.removeEventListener(I.touchmove, Ae, { passive: !1 }),
                  L.addEventListener(I.touchmove, Ae, { passive: !1 }));
                var e = E.touchWrapper;
                e.removeEventListener(I.touchstart, Oe),
                  e.removeEventListener(I.touchmove, Te, { passive: !1 }),
                  e.addEventListener(I.touchstart, Oe),
                  e.addEventListener(I.touchmove, Te, { passive: !1 });
              }
            })())
          : (ne(!1),
            (function() {
              if (o || l) {
                E.autoScrolling &&
                  (L.removeEventListener(I.touchmove, Te, { passive: !1 }),
                  L.removeEventListener(I.touchmove, Ae, { passive: !1 }));
                var e = E.touchWrapper;
                e.removeEventListener(I.touchstart, Oe),
                  e.removeEventListener(I.touchmove, Te, { passive: !1 });
              }
            })());
      }
      function ie(t, e) {
        void 0 !== e
          ? (e = e.replace(/ /g, "").split(",")).forEach(function(e) {
              Tt(t, e, "k");
            })
          : (Tt(t, "all", "k"), (E.keyboardScrolling = t));
      }
      function le() {
        var e = An(wn($t)[0], _t);
        e || (!E.loopTop && !E.continuousVertical) || (e = Mn(wn(_t))),
          null != e && Be(e, null, !0);
      }
      function ae() {
        var e = Tn(wn($t)[0], _t);
        e || (!E.loopBottom && !E.continuousVertical) || (e = wn(_t)[0]),
          null != e && Be(e, null, !1);
      }
      function se(e, t) {
        ee(0, "internal"), ce(e, t), ee(P.scrollingSpeed, "internal");
      }
      function ce(e, t) {
        var n = ht(e);
        void 0 !== t ? gt(e, t) : null != n && Be(n);
      }
      function ue(e) {
        He("right", e);
      }
      function fe(e) {
        He("left", e);
      }
      function de(e) {
        if (!yn(d, Vt)) {
          (g = !0), (A = En()), (s = Ln());
          for (var t = wn(_t), n = 0; n < t.length; ++n) {
            var o = t[n],
              r = wn(an, o)[0],
              i = wn(on, o);
            E.verticalCentered && xn(wn(Qt, o), { height: vt(o) + "px" }),
              xn(o, { height: A + "px" }),
              1 < i.length && ot(r, wn(rn, r)[0]);
          }
          E.scrollOverflow && m.createScrollBarForAll();
          var l = Cn(wn($t)[0], _t);
          l && se(l + 1),
            (g = !1),
            Xn(E.afterResize) &&
              e &&
              E.afterResize.call(d, Rt.innerWidth, Rt.innerHeight),
            Xn(E.afterReBuild) && !e && E.afterReBuild.call(d);
        }
      }
      function ve() {
        return yn(L, Pt);
      }
      function pe(e) {
        var t = ve();
        e
          ? t ||
            (J(!1, "internal"),
            te(!1, "internal"),
            Hn(wn(en)),
            Bn(L, Pt),
            Xn(E.afterResponsive) && E.afterResponsive.call(d, e),
            E.scrollOverflow && m.createScrollBarForAll())
          : t &&
            (J(P.autoScrolling, "internal"),
            te(P.autoScrolling, "internal"),
            In(wn(en)),
            Rn(L, Pt),
            Xn(E.afterResponsive) && E.afterResponsive.call(d, e));
      }
      function he(e) {
        var t = e.target;
        t && Dn(t, en + " a")
          ? function(e) {
              Un(e);
              var t = Cn(Dn(this, en + " li"));
              Be(wn(_t)[t]);
            }.call(t, e)
          : _n(t, ".fp-tooltip")
          ? function() {
              Kn(kn(this), "click");
            }.call(t)
          : _n(t, pn)
          ? function() {
              var e = Dn(this, _t);
              yn(this, hn) ? p.m.left && fe(e) : p.m.right && ue(e);
            }.call(t, e)
          : _n(t, vn) || null != Dn(t, vn)
          ? function(e) {
              Un(e);
              var t = wn(an, Dn(this, _t))[0],
                n = wn(on, t)[Cn(Dn(this, "li"))];
              ot(t, n);
            }.call(t, e)
          : Dn(t, E.menu + " [data-menuanchor]") &&
            function(e) {
              !wn(E.menu)[0] ||
                (!E.lockAnchors && E.anchors.length) ||
                (Un(e), ce(this.getAttribute("data-menuanchor")));
            }.call(t, e);
      }
      function ge(e, t) {
        (Nt["fp_" + e] = t), Nt.addEventListener(e, me, !0);
      }
      function me(e) {
        var t = e.type,
          o = !1,
          r = E.scrollOverflow,
          i = "mouseleave" === t ? e.toElement || e.relatedTarget : e.target;
        if (i == Nt || !i)
          return re(!0), void (r && E.scrollOverflowHandler.setIscroll(i, !0));
        "touchend" === t &&
          ((V = !1),
          setTimeout(function() {
            V = !0;
          }, 800)),
          ("mouseenter" !== t || V) &&
            (E.normalScrollElements.split(",").forEach(function(e) {
              if (!o) {
                var t = _n(i, e),
                  n = Dn(i, e);
                (t || n) &&
                  (h.shared.isNormalScrollElement ||
                    (re(!1), r && E.scrollOverflowHandler.setIscroll(i, !1)),
                  (h.shared.isNormalScrollElement = !0),
                  (o = !0));
              }
            }),
            !o &&
              h.shared.isNormalScrollElement &&
              (re(!0),
              r && E.scrollOverflowHandler.setIscroll(i, !0),
              (h.shared.isNormalScrollElement = !1)));
      }
      function Se() {
        var e = En(),
          t = Ln();
        (A === e && s === t) || ((A = e), (s = t), de(!0));
      }
      function we(e, t, n) {
        var o = 100 * n,
          r = 100 / n,
          i = Nt.createElement("div");
        (i.className = ln), zn(t, i);
        var l,
          a,
          s = Nt.createElement("div");
        (s.className = sn),
          zn(t, s),
          xn(wn(cn, e), { width: o + "%" }),
          1 < n &&
            (E.controlArrows &&
              ((l = e),
              (a = [
                qn('<div class="fp-controlArrow fp-prev"></div>'),
                qn('<div class="fp-controlArrow fp-next"></div>')
              ]),
              Vn(wn(an, l)[0], a),
              "#fff" !== E.controlArrowColor &&
                (xn(wn(mn, l), {
                  "border-color":
                    "transparent transparent transparent " + E.controlArrowColor
                }),
                xn(wn(gn, l), {
                  "border-color":
                    "transparent " +
                    E.controlArrowColor +
                    " transparent transparent"
                })),
              E.loopHorizontal || Hn(wn(gn, l))),
            E.slidesNavigation &&
              (function(e, t) {
                Nn(qn('<div class="' + fn + '"><ul></ul></div>'), e);
                var n = wn(dn, e)[0];
                Bn(n, "fp-" + E.slidesNavPosition);
                for (var o = 0; o < t; o++)
                  Nn(
                    qn(
                      '<li><a href="#"><span class="fp-sr-only">' +
                        be(o, "Slide") +
                        "</span><span></span></a></li>"
                    ),
                    wn("ul", n)[0]
                  );
                xn(n, { "margin-left": "-" + n.innerWidth / 2 + "px" }),
                  Bn(wn("a", wn("li", n)[0]), Ft);
              })(e, n)),
          t.forEach(function(e) {
            xn(e, { width: r + "%" }), E.verticalCentered && dt(e);
          });
        var c = wn(rn, e)[0];
        null != c &&
        (0 !== Cn(wn($t), _t) || (0 === Cn(wn($t), _t) && 0 !== Cn(c)))
          ? Lt(c, "internal")
          : Bn(t[0], Ft);
      }
      function be(e, t) {
        return E.navigationTooltips[e] || E.anchors[e] || t + " " + (e + 1);
      }
      function ye() {
        var e,
          t,
          n = wn($t)[0];
        Bn(n, Xt),
          We(n),
          Ve(),
          Fe(n),
          E.scrollOverflow && E.scrollOverflowHandler.afterLoad(),
          (e = qe()),
          (t = ht(e.section)),
          (e.section && t && (void 0 === t || Cn(t) !== Cn(f))) ||
            !Xn(E.afterLoad) ||
            Re("afterLoad", {
              activeSection: n,
              element: n,
              direction: null,
              anchorLink: n.getAttribute("data-anchor"),
              sectionIndex: Cn(n, _t)
            }),
          Xn(E.afterRender) && Re("afterRender");
      }
      function Ee() {
        var e, t, n, o, r, i;
        if (!E.autoScrolling || E.scrollBar) {
          var l = Yn(),
            a = ((i = F < (r = l) ? "down" : "up"), (q = F = r), i),
            s = 0,
            c = l + En() / 2,
            u = L.offsetHeight - En() === l,
            f = wn(_t);
          if (u) s = f.length - 1;
          else if (l)
            for (var d = 0; d < f.length; ++d) f[d].offsetTop <= c && (s = d);
          else s = 0;
          if (
            ((t = a),
            (n = wn($t)[0].offsetTop),
            (o = n + En()),
            ("up" != t ? n <= Yn() : o >= Yn() + En()) &&
              (yn(wn($t)[0], Xt) || (Bn(wn($t)[0], Xt), Rn(Fn(wn($t)[0]), Xt))),
            !yn((e = f[s]), Ft))
          ) {
            Y = !0;
            var v,
              p,
              h = wn($t)[0],
              g = Cn(h, _t) + 1,
              m = ft(e),
              S = e.getAttribute("data-anchor"),
              w = Cn(e, _t) + 1,
              b = wn(rn, e)[0],
              y = {
                activeSection: h,
                sectionIndex: w - 1,
                anchorLink: S,
                element: e,
                leavingSection: g,
                direction: m
              };
            b && ((p = b.getAttribute("data-anchor")), (v = Cn(b))),
              T &&
                (Bn(e, Ft),
                Rn(Fn(e), Ft),
                Xn(E.onLeave) && Re("onLeave", y),
                Xn(E.afterLoad) && Re("afterLoad", y),
                Xe(h),
                We(e),
                Fe(e),
                ut(S, w - 1),
                E.anchors.length && (x = S),
                St(v, p, S)),
              clearTimeout(k),
              (k = setTimeout(function() {
                Y = !1;
              }, 100));
          }
          E.fitToSection &&
            (clearTimeout(O),
            (O = setTimeout(function() {
              E.fitToSection && wn($t)[0].offsetHeight <= A && Le();
            }, E.fitToSectionDelay)));
        }
      }
      function Le() {
        T && ((g = !0), Be(wn($t)[0]), (g = !1));
      }
      function xe(e) {
        if (p.m[e]) {
          var t = "down" === e ? ae : le;
          if (E.scrollOverflow) {
            var n = E.scrollOverflowHandler.scrollable(wn($t)[0]),
              o = "down" === e ? "bottom" : "top";
            if (null != n) {
              if (!E.scrollOverflowHandler.isScrolled(o, n)) return !0;
              t();
            } else t();
          } else t();
        }
      }
      function Ae(e) {
        E.autoScrolling && ke(e) && p.m.up && Un(e);
      }
      function Te(e) {
        var t = Dn(e.target, _t) || wn($t)[0];
        if (ke(e)) {
          E.autoScrolling && Un(e);
          var n = Et(e);
          (K = n.y),
            (_ = n.x),
            wn(an, t).length && Math.abs(X - _) > Math.abs(U - K)
              ? !a &&
                Math.abs(X - _) > (Ln() / 100) * E.touchSensitivity &&
                (_ < X ? p.m.right && ue(t) : p.m.left && fe(t))
              : E.autoScrolling &&
                T &&
                Math.abs(U - K) > (Rt.innerHeight / 100) * E.touchSensitivity &&
                (K < U ? xe("down") : U < K && xe("up"));
        }
      }
      function ke(e) {
        return void 0 === e.pointerType || "mouse" != e.pointerType;
      }
      function Oe(e) {
        if ((E.fitToSection && (z = !1), ke(e))) {
          var t = Et(e);
          (U = t.y), (X = t.x);
        }
      }
      function Me(e, t) {
        for (
          var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0;
          r < o.length;
          r++
        )
          n += o[r];
        return Math.ceil(n / t);
      }
      function Ce(e) {
        var t = new Date().getTime(),
          n = yn(wn(".fp-completely")[0], Jt);
        if (!p.m.down && !p.m.up) return Un(e), !1;
        if (E.autoScrolling && !c && !n) {
          var o = (e = e || Rt.event).wheelDelta || -e.deltaY || -e.detail,
            r = Math.max(-1, Math.min(1, o)),
            i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
            l =
              Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) ||
              Math.abs(e.deltaX) < Math.abs(e.deltaY) ||
              !i;
          149 < v.length && v.shift(),
            v.push(Math.abs(o)),
            E.scrollBar && Un(e);
          var a = t - $;
          if ((($ = t), 200 < a && (v = []), T)) {
            var s = Me(v, 10);
            Me(v, 70) <= s && l && xe(r < 0 ? "down" : "up");
          }
          return !1;
        }
        E.fitToSection && (z = !1);
      }
      function He(e, t) {
        var n = null == t ? wn($t)[0] : t,
          o = wn(an, n)[0];
        if (!(null == o || a || wn(on, o).length < 2)) {
          var r = wn(rn, o)[0],
            i = null;
          if (null == (i = "left" === e ? An(r, on) : Tn(r, on))) {
            if (!E.loopHorizontal) return;
            var l = Fn(r);
            i = "left" === e ? l[l.length - 1] : l[0];
          }
          (a = !h.test.isTesting), ot(o, i, e);
        }
      }
      function Ie() {
        for (var e = wn(rn), t = 0; t < e.length; t++) Lt(e[t], "internal");
      }
      function Be(e, t, n) {
        if (null != e) {
          var o,
            r,
            i,
            l,
            a,
            s,
            c,
            u,
            f,
            d = {
              element: e,
              callback: t,
              isMovementUp: n,
              dtop:
                ((r = (o = e).offsetHeight),
                (i = o.offsetTop),
                (a = q < (l = i)),
                (s = l - A + r),
                (c = E.bigSectionsDestination),
                A < r
                  ? ((a || c) && "bottom" !== c) || (l = s)
                  : (a || (g && null == On(o))) && (l = s),
                (q = l)),
              yMovement: ft(e),
              anchorLink: e.getAttribute("data-anchor"),
              sectionIndex: Cn(e, _t),
              activeSlide: wn(rn, e)[0],
              activeSection: wn($t)[0],
              leavingSection: Cn(wn($t), _t) + 1,
              localIsResizing: g
            };
          if (
            !(
              (d.activeSection == e && !g) ||
              (E.scrollBar && Yn() === d.dtop && !yn(e, Gt))
            )
          ) {
            if (
              (null != d.activeSlide &&
                ((u = d.activeSlide.getAttribute("data-anchor")),
                (f = Cn(d.activeSlide))),
              !d.localIsResizing)
            ) {
              var v = d.yMovement;
              if (
                (void 0 !== n && (v = n ? "up" : "down"),
                (d.direction = v),
                Xn(E.onLeave) && !1 === Re("onLeave", d))
              )
                return;
            }
            E.autoScrolling &&
              E.continuousVertical &&
              void 0 !== d.isMovementUp &&
              ((!d.isMovementUp && "up" == d.yMovement) ||
                (d.isMovementUp && "down" == d.yMovement)) &&
              ((p = d).isMovementUp
                ? Wn(wn($t)[0], Gn(p.activeSection, _t))
                : Vn(wn($t)[0], Jn(p.activeSection, _t).reverse()),
              xt(wn($t)[0].offsetTop),
              Ie(),
              (p.wrapAroundElements = p.activeSection),
              (p.dtop = p.element.offsetTop),
              (p.yMovement = ft(p.element)),
              (d = p)),
              d.localIsResizing || Xe(d.activeSection),
              E.scrollOverflow && E.scrollOverflowHandler.beforeLeave(),
              Bn(e, Ft),
              Rn(Fn(e), Ft),
              We(e),
              E.scrollOverflow && E.scrollOverflowHandler.onLeave(),
              (T = h.test.isTesting),
              St(f, u, d.anchorLink, d.sectionIndex),
              (function(e) {
                if (E.css3 && E.autoScrolling && !E.scrollBar) {
                  var t =
                    "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                  pt(t, !0),
                    E.scrollingSpeed
                      ? (clearTimeout(b),
                        (b = setTimeout(function() {
                          Pe(e);
                        }, E.scrollingSpeed)))
                      : Pe(e);
                } else {
                  var n = je(e.dtop);
                  (h.test.top = -e.dtop + "px"),
                    Mt(n.element, n.options, E.scrollingSpeed, function() {
                      E.scrollBar
                        ? setTimeout(function() {
                            Pe(e);
                          }, 30)
                        : Pe(e);
                    });
                }
              })(d),
              (x = d.anchorLink),
              ut(d.anchorLink, d.sectionIndex);
          }
        }
        var p;
      }
      function Re(e, t) {
        var n,
          o,
          r,
          i,
          l =
            ((o = e),
            (r = t),
            (i = E.v2compatible
              ? {
                  afterRender: function() {
                    return [d];
                  },
                  onLeave: function() {
                    return [
                      r.activeSection,
                      r.leavingSection,
                      r.sectionIndex + 1,
                      r.direction
                    ];
                  },
                  afterLoad: function() {
                    return [r.element, r.anchorLink, r.sectionIndex + 1];
                  },
                  afterSlideLoad: function() {
                    return [
                      r.destiny,
                      r.anchorLink,
                      r.sectionIndex + 1,
                      r.slideAnchor,
                      r.slideIndex
                    ];
                  },
                  onSlideLeave: function() {
                    return [
                      r.prevSlide,
                      r.anchorLink,
                      r.sectionIndex + 1,
                      r.prevSlideIndex,
                      r.direction,
                      r.slideIndex
                    ];
                  }
                }
              : {
                  afterRender: function() {
                    return {
                      section: Ne(wn($t)[0]),
                      slide: ze(wn(rn, wn($t)[0])[0])
                    };
                  },
                  onLeave: function() {
                    return {
                      origin: Ne(r.activeSection),
                      destination: Ne(r.element),
                      direction: r.direction
                    };
                  },
                  afterLoad: function() {
                    return i.onLeave();
                  },
                  afterSlideLoad: function() {
                    return {
                      section: Ne(r.section),
                      origin: ze(r.prevSlide),
                      destination: ze(r.destiny),
                      direction: r.direction
                    };
                  },
                  onSlideLeave: function() {
                    return i.afterSlideLoad();
                  }
                })[o]());
        if (E.v2compatible) {
          if (!1 === E[e].apply(l[0], l.slice(1))) return !1;
        } else if (
          (Kn(d, e, l),
          !1 ===
            E[e].apply(
              l[Object.keys(l)[0]],
              ((n = l),
              Object.keys(n).map(function(e) {
                return n[e];
              }))
            ))
        )
          return !1;
        return !0;
      }
      function Ne(e) {
        return e ? new It(e) : null;
      }
      function ze(e) {
        return e ? new Bt(e) : null;
      }
      function je(e) {
        var t = {};
        return (
          E.autoScrolling && !E.scrollBar
            ? ((t.options = -e), (t.element = wn(jt)[0]))
            : ((t.options = e), (t.element = Rt)),
          t
        );
      }
      function Pe(e) {
        var t;
        null != (t = e).wrapAroundElements &&
          (t.isMovementUp
            ? Wn(wn(_t)[0], t.wrapAroundElements)
            : Vn(wn(_t)[wn(_t).length - 1], t.wrapAroundElements),
          xt(wn($t)[0].offsetTop),
          Ie()),
          Xn(E.afterLoad) && !e.localIsResizing && Re("afterLoad", e),
          E.scrollOverflow && E.scrollOverflowHandler.afterLoad(),
          e.localIsResizing || Fe(e.element),
          Bn(e.element, Xt),
          Rn(Fn(e.element), Xt),
          Ve(),
          (T = !0),
          Xn(e.callback) && e.callback();
      }
      function De(e, t) {
        e.setAttribute(t, e.getAttribute("data-" + t)),
          e.removeAttribute("data-" + t);
      }
      function Ve() {
        var e =
          wn(".fp-auto-height")[0] ||
          (ve() && wn(".fp-auto-height-responsive")[0]);
        E.lazyLoading &&
          e &&
          wn(_t + ":not(" + Ut + ")").forEach(function(e) {
            var t, n, o;
            (t = e.getBoundingClientRect()),
              (n = t.top),
              (o = t.bottom),
              ((n + 2 < A && 0 < n) || (2 < o && o < A)) && We(e);
          });
      }
      function We(o) {
        E.lazyLoading &&
          wn(
            "img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",
            Ke(o)
          ).forEach(function(n) {
            if (
              (["src", "srcset"].forEach(function(e) {
                var t = n.getAttribute("data-" + e);
                null != t &&
                  t &&
                  (De(n, e),
                  n.addEventListener("load", function() {
                    Ye(o);
                  }));
              }),
              _n(n, "source"))
            ) {
              var e = Dn(n, "video, audio");
              e &&
                (e.load(),
                (e.onloadeddata = function() {
                  Ye(o);
                }));
            }
          });
      }
      function Ye(e) {
        E.scrollOverflow &&
          (clearTimeout(j),
          (j = setTimeout(function() {
            m.createScrollBar(e);
          }, 200)));
      }
      function Fe(e) {
        var t = Ke(e);
        wn("video, audio", t).forEach(function(e) {
          e.hasAttribute("data-autoplay") &&
            "function" == typeof e.play &&
            e.play();
        }),
          wn('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) {
            e.hasAttribute("data-autoplay") && Ue(e),
              (e.onload = function() {
                e.hasAttribute("data-autoplay") && Ue(e);
              });
          });
      }
      function Ue(e) {
        e.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
      function Xe(e) {
        var t = Ke(e);
        wn("video, audio", t).forEach(function(e) {
          e.hasAttribute("data-keepplaying") ||
            "function" != typeof e.pause ||
            e.pause();
        }),
          wn('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) {
            /youtube\.com\/embed\//.test(e.getAttribute("src")) &&
              !e.hasAttribute("data-keepplaying") &&
              e.contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
          });
      }
      function Ke(e) {
        var t = wn(rn, e);
        return t.length && (e = t[0]), e;
      }
      function _e() {
        var e = qe(),
          t = e.section,
          n = e.slide;
        t && (E.animateAnchor ? gt(t, n) : se(t, n));
      }
      function $e() {
        if (!Y && !E.lockAnchors) {
          var e = qe(),
            t = e.section,
            n = e.slide,
            o = void 0 === x,
            r = void 0 === x && void 0 === n && !a;
          t &&
            t.length &&
            ((t && t !== x && !o) || r || (!a && i != n)) &&
            gt(t, n);
        }
      }
      function qe() {
        var e,
          t,
          n = Rt.location.hash;
        if (n.length) {
          var o = n.replace("#", "").split("/"),
            r = -1 < n.indexOf("#/");
          e = r ? "/" + o[1] : decodeURIComponent(o[0]);
          var i = r ? o[2] : o[1];
          i && i.length && (t = decodeURIComponent(i));
        }
        return { section: e, slide: t };
      }
      function Qe(e) {
        clearTimeout(M);
        var t = Nt.activeElement,
          n = e.keyCode;
        9 === n
          ? (function(e) {
              var t,
                n,
                o,
                r,
                i,
                l,
                a,
                s = e.shiftKey,
                c = Nt.activeElement,
                u = et(Ke(wn($t)[0]));
              function f(e) {
                return Un(e), u[0] ? u[0].focus() : null;
              }
              ((t = e),
              (n = et(Nt)),
              (o = n.indexOf(Nt.activeElement)),
              (r = t.shiftKey ? o - 1 : o + 1),
              (i = n[r]),
              (l = ze(Dn(i, on))),
              (a = Ne(Dn(i, _t))),
              l || a) &&
                (c
                  ? null == Dn(c, $t + "," + $t + " " + rn) && (c = f(e))
                  : f(e),
                ((!s && c == u[u.length - 1]) || (s && c == u[0])) && Un(e));
            })(e)
          : _n(t, "textarea") ||
            _n(t, "input") ||
            _n(t, "select") ||
            "true" === t.getAttribute("contentEditable") ||
            "" === t.getAttribute("contentEditable") ||
            !E.keyboardScrolling ||
            !E.autoScrolling ||
            (-1 < [40, 38, 32, 33, 34].indexOf(n) && Un(e),
            (c = e.ctrlKey),
            (M = setTimeout(function() {
              !(function(e) {
                var t = e.shiftKey,
                  n = Nt.activeElement,
                  o = _n(n, "video") || _n(n, "audio");
                if (T || !([37, 39].indexOf(e.keyCode) < 0))
                  switch (e.keyCode) {
                    case 38:
                    case 33:
                      p.k.up && le();
                      break;
                    case 32:
                      if (t && p.k.up && !o) {
                        le();
                        break;
                      }
                    case 40:
                    case 34:
                      p.k.down && ((32 === e.keyCode && o) || ae());
                      break;
                    case 36:
                      p.k.up && ce(1);
                      break;
                    case 35:
                      p.k.down && ce(wn(_t).length);
                      break;
                    case 37:
                      p.k.left && fe();
                      break;
                    case 39:
                      p.k.right && ue();
                  }
              })(e);
            }, 150)));
      }
      function Ge(e) {
        t && (c = e.ctrlKey);
      }
      function Je(e) {
        2 == e.which && ((Q = e.pageY), d.addEventListener("mousemove", nt));
      }
      function Ze(e) {
        2 == e.which && d.removeEventListener("mousemove", nt);
      }
      function et(e) {
        return [].slice.call(wn(B, e)).filter(function(e) {
          return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent;
        });
      }
      function tt() {
        c = t = !1;
      }
      function nt(e) {
        E.autoScrolling &&
          (T &&
            (e.pageY < Q && p.m.up ? le() : e.pageY > Q && p.m.down && ae()),
          (Q = e.pageY));
      }
      function ot(e, t, n) {
        var o,
          r,
          i = Dn(e, _t),
          l = {
            slides: e,
            destiny: t,
            direction: n,
            destinyPos: { left: t.offsetLeft },
            slideIndex: Cn(t),
            section: i,
            sectionIndex: Cn(i, _t),
            anchorLink: i.getAttribute("data-anchor"),
            slidesNav: wn(dn, i)[0],
            slideAnchor: bt(t),
            prevSlide: wn(rn, i)[0],
            prevSlideIndex: Cn(wn(rn, i)[0]),
            localIsResizing: g
          };
        (l.xMovement =
          ((o = l.prevSlideIndex),
          (r = l.slideIndex),
          o == r ? "none" : r < o ? "left" : "right")),
          (l.direction = l.direction ? l.direction : l.xMovement),
          l.localIsResizing || (T = !1),
          E.onSlideLeave &&
          !l.localIsResizing &&
          "none" !== l.xMovement &&
          Xn(E.onSlideLeave) &&
          !1 === Re("onSlideLeave", l)
            ? (a = !1)
            : (Bn(t, Ft),
              Rn(Fn(t), Ft),
              l.localIsResizing || (Xe(l.prevSlide), We(t)),
              !E.loopHorizontal &&
                E.controlArrows &&
                ($n(wn(gn, i), 0 !== l.slideIndex),
                $n(wn(mn, i), null != On(t))),
              yn(i, Ft) &&
                !l.localIsResizing &&
                St(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex),
              (function(e, t, n) {
                var o = t.destinyPos;
                if (E.css3) {
                  var r =
                    "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                  (h.test.translate3dH[t.sectionIndex] = r),
                    xn(st(wn(cn, e)), At(r)),
                    (y = setTimeout(function() {
                      n && rt(t);
                    }, E.scrollingSpeed));
                } else
                  (h.test.left[t.sectionIndex] = Math.round(o.left)),
                    Mt(e, Math.round(o.left), E.scrollingSpeed, function() {
                      n && rt(t);
                    });
              })(e, l, !0));
      }
      function rt(e) {
        var t, n;
        (t = e.slidesNav),
          (n = e.slideIndex),
          E.slidesNavigation &&
            null != t &&
            (Rn(wn(Ut, t), Ft), Bn(wn("a", wn("li", t)[n]), Ft)),
          e.localIsResizing ||
            (Xn(E.afterSlideLoad) && Re("afterSlideLoad", e),
            (T = !0),
            Fe(e.destiny)),
          (a = !1);
      }
      function it() {
        clearTimeout(S),
          (S = setTimeout(function() {
            for (var e = 0; e < 4; e++) w = setTimeout(lt, 200 * e);
          }, 200));
      }
      function lt() {
        if ((at(), o)) {
          var e = Nt.activeElement;
          if (!_n(e, "textarea") && !_n(e, "input") && !_n(e, "select")) {
            var t = En();
            Math.abs(t - G) > (20 * Math.max(G, t)) / 100 && (de(!0), (G = t));
          }
        } else Se();
      }
      function at() {
        var e = E.responsive || E.responsiveWidth,
          t = E.responsiveHeight,
          n = e && Rt.innerWidth < e,
          o = t && Rt.innerHeight < t;
        e && t ? pe(n || o) : e ? pe(n) : t && pe(o);
      }
      function st(e) {
        var t = "all " + E.scrollingSpeed + "ms " + E.easingcss3;
        return Rn(e, Dt), xn(e, { "-webkit-transition": t, transition: t });
      }
      function ct(e) {
        return Bn(e, Dt);
      }
      function ut(e, t) {
        var n, o, r;
        (n = e),
          wn(E.menu).forEach(function(e) {
            E.menu &&
              null != e &&
              (Rn(wn(Ut, e), Ft),
              Bn(wn('[data-menuanchor="' + n + '"]', e), Ft));
          }),
          (o = e),
          (r = t),
          E.navigation &&
            null != wn(en)[0] &&
            (Rn(wn(Ut, wn(en)[0]), Ft),
            Bn(
              o
                ? wn('a[href="#' + o + '"]', wn(en)[0])
                : wn("a", wn("li", wn(en)[0])[r]),
              Ft
            ));
      }
      function ft(e) {
        var t = Cn(wn($t)[0], _t),
          n = Cn(e, _t);
        return t == n ? "none" : n < t ? "up" : "down";
      }
      function dt(e) {
        if (!yn(e, un)) {
          var t = Nt.createElement("div");
          (t.className = qt),
            (t.style.height = vt(e) + "px"),
            Bn(e, un),
            jn(e, t);
        }
      }
      function vt(e) {
        var t = A;
        if (E.paddingTop || E.paddingBottom) {
          var n = e;
          yn(n, Kt) || (n = Dn(e, _t));
          var o =
            parseInt(getComputedStyle(n)["padding-top"]) +
            parseInt(getComputedStyle(n)["padding-bottom"]);
          t = A - o;
        }
        return t;
      }
      function pt(e, t) {
        t ? st(d) : ct(d),
          xn(d, At(e)),
          (h.test.translate3d = e),
          setTimeout(function() {
            Rn(d, Dt);
          }, 10);
      }
      function ht(e) {
        var t = wn(_t + '[data-anchor="' + e + '"]', d)[0];
        if (!t) {
          var n = void 0 !== e ? e - 1 : 0;
          t = wn(_t)[n];
        }
        return t;
      }
      function gt(e, t) {
        var n = ht(e);
        if (null != n) {
          var o,
            r,
            i,
            l =
              (null ==
                (i = wn(on + '[data-anchor="' + (o = t) + '"]', (r = n))[0]) &&
                ((o = void 0 !== o ? o : 0), (i = wn(on, r)[o])),
              i);
          bt(n) === x || yn(n, Ft)
            ? mt(l)
            : Be(n, function() {
                mt(l);
              });
        }
      }
      function mt(e) {
        null != e && ot(Dn(e, an), e);
      }
      function St(e, t, n, o) {
        var r = "";
        E.anchors.length &&
          !E.lockAnchors &&
          (e
            ? (null != n && (r = n),
              null == t && (t = e),
              wt(r + "/" + (i = t)))
            : (null != e && (i = t), wt(n))),
          yt();
      }
      function wt(e) {
        if (E.recordHistory) location.hash = e;
        else if (o || l) Rt.history.replaceState(void 0, void 0, "#" + e);
        else {
          var t = Rt.location.href.split("#")[0];
          Rt.location.replace(t + "#" + e);
        }
      }
      function bt(e) {
        if (!e) return null;
        var t = e.getAttribute("data-anchor"),
          n = Cn(e);
        return null == t && (t = n), t;
      }
      function yt() {
        var e = wn($t)[0],
          t = wn(rn, e)[0],
          n = bt(e),
          o = bt(t),
          r = String(n);
        t && (r = r + "-" + o), (r = r.replace("/", "-").replace("#", ""));
        var i = new RegExp("\\b\\s?" + Yt + "-[^\\s]+\\b", "g");
        (L.className = L.className.replace(i, "")), Bn(L, Yt + "-" + r);
      }
      function Et(e) {
        var t = [];
        return (
          (t.y =
            void 0 !== e.pageY && (e.pageY || e.pageX)
              ? e.pageY
              : e.touches[0].pageY),
          (t.x =
            void 0 !== e.pageX && (e.pageY || e.pageX)
              ? e.pageX
              : e.touches[0].pageX),
          l &&
            ke(e) &&
            E.scrollBar &&
            void 0 !== e.touches &&
            ((t.y = e.touches[0].pageY), (t.x = e.touches[0].pageX)),
          t
        );
      }
      function Lt(e, t) {
        ee(0, "internal"),
          void 0 !== t && (g = !0),
          ot(Dn(e, an), e),
          void 0 !== t && (g = !1),
          ee(P.scrollingSpeed, "internal");
      }
      function xt(e) {
        var t = Math.round(e);
        if (E.css3 && E.autoScrolling && !E.scrollBar)
          pt("translate3d(0px, -" + t + "px, 0px)", !1);
        else if (E.autoScrolling && !E.scrollBar)
          xn(d, { top: -t + "px" }), (h.test.top = -t + "px");
        else {
          var n = je(t);
          Ct(n.element, n.options);
        }
      }
      function At(e) {
        return {
          "-webkit-transform": e,
          "-moz-transform": e,
          "-ms-transform": e,
          transform: e
        };
      }
      function Tt(t, e, n) {
        "all" !== e
          ? (p[n][e] = t)
          : Object.keys(p[n]).forEach(function(e) {
              p[n][e] = t;
            });
      }
      function kt(e, t, n) {
        (E[e] = t), "internal" !== n && (P[e] = t);
      }
      function Ot() {
        var e = E.licenseKey,
          t = "font-size: 15px;background:yellow;";
        n
          ? e &&
            e.length < 20 &&
            (console.warn(
              "%c This website was made using fullPage.js slider. More info on the following website:",
              t
            ),
            console.warn("%c https://alvarotrigo.com/fullPage/", t))
          : (Sn(
              "error",
              "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"
            ),
            Sn("error", "https://github.com/alvarotrigo/fullPage.js#options.")),
          yn(u, Wt)
            ? Sn(
                "error",
                "Fullpage.js can only be initialized once and you are doing it multiple times!"
              )
            : (E.continuousVertical &&
                (E.loopTop || E.loopBottom) &&
                ((E.continuousVertical = !1),
                Sn(
                  "warn",
                  "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                )),
              !E.scrollOverflow ||
                (!E.scrollBar && E.autoScrolling) ||
                Sn(
                  "warn",
                  "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"
                ),
              !E.continuousVertical ||
                (!E.scrollBar && E.autoScrolling) ||
                ((E.continuousVertical = !1),
                Sn(
                  "warn",
                  "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                )),
              E.scrollOverflow &&
                null == E.scrollOverflowHandler &&
                ((E.scrollOverflow = !1),
                Sn(
                  "error",
                  "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js."
                )),
              W.forEach(function(e) {
                E[e] &&
                  Sn(
                    "warn",
                    "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " +
                      e
                  );
              }),
              E.anchors.forEach(function(t) {
                var e = [].slice.call(wn("[name]")).filter(function(e) {
                    return (
                      e.getAttribute("name") &&
                      e.getAttribute("name").toLowerCase() == t.toLowerCase()
                    );
                  }),
                  n = [].slice.call(wn("[id]")).filter(function(e) {
                    return (
                      e.getAttribute("id") &&
                      e.getAttribute("id").toLowerCase() == t.toLowerCase()
                    );
                  });
                if (n.length || e.length) {
                  Sn(
                    "error",
                    "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
                  );
                  var o = n.length ? "id" : "name";
                  (n.length || e.length) &&
                    Sn(
                      "error",
                      '"' +
                        t +
                        '" is is being used by another element `' +
                        o +
                        "` property"
                    );
                }
              }));
      }
      function Mt(t, n, o, r) {
        var e,
          i =
            (e = t).self != Rt && yn(e, ln)
              ? e.scrollLeft
              : !E.autoScrolling || E.scrollBar
              ? Yn()
              : e.offsetTop,
          l = n - i,
          a = 0;
        z = !0;
        var s = function() {
          if (z) {
            var e = n;
            (a += 20),
              o && (e = Rt.fp_easings[E.easing](a, i, l, o)),
              Ct(t, e),
              a < o ? setTimeout(s, 20) : void 0 !== r && r();
          } else a < o && r();
        };
        s();
      }
      function Ct(e, t) {
        !E.autoScrolling || E.scrollBar || (e.self != Rt && yn(e, ln))
          ? e.self != Rt && yn(e, ln)
            ? (e.scrollLeft = t)
            : e.scrollTo(0, t)
          : (e.style.top = t + "px");
      }
      function Ht(e, t) {
        (this.anchor = e.getAttribute("data-anchor")),
          (this.item = e),
          (this.index = Cn(e, t)),
          (this.isLast =
            this.index === e.parentElement.querySelectorAll(t).length - 1),
          (this.isFirst = !this.index);
      }
      function It(e) {
        Ht.call(this, e, _t);
      }
      function Bt(e) {
        Ht.call(this, e, on);
      }
      Ot();
    }
  );
}),
    console.log(window.jQuery,window.fullpage,2134)
  window.jQuery &&
    window.fullpage &&
    (function(t, n) {
      "use strict";
      t && n
        ? (t.fn.fullpage = function(e) {
            e = t.extend({}, e, { $: t });
            new n(this[0], e);
          })
        : window.fp_utils.showError(
            "error",
            "jQuery is required to use the jQuery fullpage adapter!"
          );
    })(window.jQuery, window.fullpage);
//# sourceMappingURL=fullpage.min.js.map
