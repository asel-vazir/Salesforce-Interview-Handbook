! function(e) {
 var t = {};

 function n(r) {
  if (t[r]) return t[r].exports;
  var o = t[r] = {
   i: r,
   l: !1,
   exports: {}
  };
  return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
 }
 n.m = e, n.c = t, n.d = function(e, t, r) {
  n.o(e, t) || Object.defineProperty(e, t, {
   enumerable: !0,
   get: r
  })
 }, n.r = function(e) {
  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
   value: "Module"
  }), Object.defineProperty(e, "__esModule", {
   value: !0
  })
 }, n.t = function(e, t) {
  if (1 & t && (e = n(e)), 8 & t) return e;
  if (4 & t && "object" == typeof e && e && e.__esModule) return e;
  var r = Object.create(null);
  if (n.r(r), Object.defineProperty(r, "default", {
    enumerable: !0,
    value: e
   }), 2 & t && "string" != typeof e)
   for (var o in e) n.d(r, o, function(t) {
    return e[t]
   }.bind(null, o));
  return r
 }, n.n = function(e) {
  var t = e && e.__esModule ? function() {
   return e.default
  } : function() {
   return e
  };
  return n.d(t, "a", t), t
 }, n.o = function(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
 }, n.p = "", n(n.s = 7)
}([function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
  function e(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
   }
  }
  return function(t, n, r) {
   return n && e(t.prototype, n), r && e(t, r), t
  }
 }();
 var o = null,
  i = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), o || (o = this), o
   }
   return r(e, [{
    key: "variableList",
    value: function(e) {
     var t = o.getClosest(e, ".js-section"),
      n = t.getAttribute("data-section"),
      r = t.getAttribute("data-section-id"),
      i = o.getClosest(e, ".js-item "),
      a = void 0,
      u = void 0,
      l = void 0;
     return null !== i && (a = i.getAttribute("data-item-id"), u = i.getAttribute("data-item-check"), l = i.getAttribute("data-item-dropdown")), {
      sectionId: r,
      section: t,
      sectionName: n,
      item: i,
      itemId: a,
      itemCheck: u,
      itemDropdown: l
     }
    }
   }, {
    key: "visibityEl",
    value: function(e, t, n) {
     var r = e.querySelectorAll(t)[0];
     void 0 !== r && (r.style.display = "hide" === n ? "none" : "flex")
    }
   }, {
    key: "detailsContainer",
    value: function(e) {
     var t = e.classList[1],
      n = document.querySelectorAll("." + t)[0].querySelectorAll(".js-details");
     return n
    }
   }, {
    key: "getClosest",
    value: function(e, t) {
     for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
       for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this;);
       return n > -1
      }); e && e !== document; e = e.parentNode)
      if (e.matches(t)) return e;
     return null
    }
   }]), e
  }(),
  a = new i;
 Object.freeze(a), t.default = i
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
   function e(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
   }
   return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t
   }
  }(),
  o = u(n(4)),
  i = u(n(0)),
  a = u(n(10));

 function u(e) {
  return e && e.__esModule ? e : {
   default: e
  }
 }
 var l = null,
  c = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), l || (l = this), l
   }
   return r(e, [{
    key: "dropdownIcon",
    value: function(e) {
     var t = (new i.default).getClosest(e, ".js-item");
     "open" === t.getAttribute("data-item-dropdown") ? t.querySelector(".icon-arrow").classList.add("icon-rotate") : t.querySelector(".icon-arrow").classList.remove("icon-rotate")
    }
   }, {
    key: "allDropdown",
    value: function(e) {
     var t = e;
     (new i.default).getClosest(t.btn, ".js-section").querySelectorAll('.js-item[data-item-check="false"]').forEach(function(e) {
      !0 === t.btn.classList.value.includes("js-collapse-all") ? (e.setAttribute("data-item-dropdown", "close"), l.removeCode(e)) : "open" !== e.getAttributeNode("data-item-dropdown").value && (e.setAttribute("data-item-dropdown", "open"), l.loadCode(e), (new o.default).lazyLoadImg(e))
     })
    }
   }, {
    key: "removeCode",
    value: function(e) {
     var t = e.querySelector(".js-code"),
      n = e.querySelector(".js-loader");
     if (null !== t) {
      for (; t.hasChildNodes();) t.removeChild(t.lastChild);
      n.style.display = "inherit"
     }
    }
   }, {
    key: "loadCode",
    value: function(e) {
     var t = e.querySelector(".js-code");
     if (null !== t) {
      var n = t.getAttribute("data-code-url"),
       r = document.createElement("script");
      r.src = n, (0, a.default)(t, r.outerHTML, {
       done: function() {
        e.querySelector(".js-loader").style.display = "none"
       }
      })
     }
    }
   }, {
    key: "moveDropdown",
    value: function(e) {
     var t = e;
     if (null !== t.button) {
      var n = (new i.default).getClosest(t.button, ".js-item"),
       r = n.getAttribute("data-item-dropdown");
      "open" === r ? (n.setAttribute("data-item-dropdown", "close"), l.removeCode(n), l.dropdownIcon(t.button), gtag("event", "close-dropdown", {
       event_category: "Click",
       event_label: "Close dropdown"
      })) : "close" === r && (n.setAttribute("data-item-dropdown", "open"), l.dropdownIcon(t.button), l.loadCode(n), (new o.default).lazyLoadImg(n), gtag("event", "open-dropdown", {
       event_category: "Click",
       event_label: "Open dropdown"
      }))
     }
    }
   }, {
    key: "collapseAllDropdown",
    value: function(e) {
     var t = e;
     ((new i.default).getClosest(t.button, ".js-section") || t.section).querySelectorAll(".js-item").forEach(function(e) {
      e.setAttribute("data-item-dropdown", "close")
     })
    }
   }, {
    key: "enableDropdown",
    value: function(e) {
     e.forEach(function(e) {
      e.addEventListener("click", function(t) {
       t.preventDefault(), l.moveDropdown({
        button: e
       }), t.stopImmediatePropagation()
      }, !1)
     })
    }
   }]), e
  }(),
  s = new c;
 Object.freeze(s), t.default = c
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
   function e(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
   }
   return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t
   }
  }(),
  o = u(n(0)),
  i = u(n(5)),
  a = u(n(3));

 function u(e) {
  return e && e.__esModule ? e : {
   default: e
  }
 }
 var l = null,
  c = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), l || (l = this), this.body = document.querySelectorAll("[data-section-id]"), l
   }
   return r(e, [{
    key: "checkingOption",
    value: function(t, n) {
     var r = [];
     (r = null === localStorage.getItem(n) ? [] : JSON.parse(localStorage.getItem(n))) === [] ? r.forEach(function(e) {
      e.id === t.sectionId && null === t.itemId ? (new a.default).checkItem(t.sectionId, t.section, n, t.item, r, "visible") : console.log("error")
     }): void 0 === t.itemId ? ((new e).addItemStorage(t.sectionId, r, n), (new a.default).checkItem(t.sectionId, t.section, n, t.item, r, "visible")) : console.log("error")
    }
   }, {
    key: "checkingItem",
    value: function(t) {
     var n = [];
     null !== t.item ? n = null === localStorage.getItem(t.sectionName) ? [] : JSON.parse(localStorage.getItem(t.sectionName)) : console.log("error"), n === [] ? n.forEach(function(e) {
      e.id === t.itemId ? (new a.default).checkItem(t.itemId, t.section, t.sectionName, t.item, n, "state") : console.log("error")
     }) : void 0 !== t.itemId ? ((new e).addItemStorage(t.itemId, n, t.sectionName), (new a.default).checkItem(t.itemId, t.section, t.sectionName, t.item, n, "state")) : console.log("error")
    }
   }, {
    key: "loadItems",
    value: function(e, t) {
     var n = e,
      r = [];
     t.map(function(e) {
      return r.push(e.id)
     }), n.forEach(function(e) {
      if (r.indexOf(e.getAttribute("data-item-id")) > -1) {
       e.setAttribute("data-item-check", "true");
       var t = e.querySelectorAll("input[type=checkbox]");
       document.getElementById(t[0].id).checked = !0, (new o.default).visibityEl(e, ".c-tags", "hide"), (new o.default).visibityEl(e, ".js-dropdown", "hide")
      }
     })
    }
   }, {
    key: "readItems",
    value: function(e, t, n) {
     var r = e.getAttribute("data-section");
     if (null !== localStorage.getItem(r) || void 0 === localStorage.getItem(r)) {
      var o = localStorage.getItem(r),
       a = JSON.parse(o),
       u = a.length,
       c = e.querySelectorAll(".js-item");
      l.loadItems(c, a), (new i.default).updateProgressBar(n[t], u)
     }
    }
   }, {
    key: "readHideSections",
    value: function() {
     var e = void 0;
     null !== localStorage.getItem("hide-sections") && (e = JSON.parse(localStorage.getItem("hide-sections")), this.body.forEach(function(t) {
      e.forEach(function(e) {
       t.getAttribute("data-section-id") === e.id && (t.querySelectorAll(".js-checklist-body")[0].setAttribute("data-body-visibility", "hide"), t.querySelectorAll(".js-checklist-body")[0].setAttribute("aria-hidden", "true"), t.querySelectorAll(".js-hide-section")[0].querySelector(".icon-eye").classList.add("icon-eye-hide"), t.querySelectorAll(".js-hide-section")[0].classList.add("is-active"))
      })
     }))
    }
   }, {
    key: "addItemStorage",
    value: function(e, t, n) {
     for (var r = 0; r < t.length; r += 1) {
      if (t[r].id === e) return
     }
     var o = {
      id: e
     };
     t.push(o), localStorage.setItem(n, JSON.stringify(t))
    }
   }]), e
  }(),
  s = new c;
 Object.freeze(s), t.default = c
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
   function e(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
   }
   return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t
   }
  }(),
  o = c(n(0)),
  i = c(n(5)),
  a = c(n(2)),
  u = c(n(6)),
  l = c(n(1));

 function c(e) {
  return e && e.__esModule ? e : {
   default: e
  }
 }
 var s = null,
  f = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), s || (s = this), s
   }
   return r(e, [{
    key: "checkItem",
    value: function(e, t, n, r, a, c) {
     var s = a;
     if (s.forEach(function(t) {
       var n = t;
       if (e === n.id) switch (c) {
        case "state":
         n.state = "checked";
         break;
        case "dropdown":
         n.dropdown = "open";
         break;
        case "visible":
         n.visible = "hide"
       }
      }), s.forEach(function(e, t, r) {
       localStorage.setItem(n, JSON.stringify(r))
      }), "visible" !== c) {
      var f = JSON.parse(localStorage.getItem(n)).length;
      if ((new i.default).updateProgressBar(t, f), (new u.default).updateNotation(), (new o.default).visibityEl(r, ".c-tags", "hide"), (new o.default).visibityEl(r, ".js-dropdown", "hide"), r.setAttribute("data-item-check", "true"), (new u.default).updatePriority(), gtag("event", "check", {
        event_category: "Click",
        event_label: "Item checked"
       }), null !== r) {
       var d = r.querySelector(".js-dropdown");
       "open" === r.getAttribute("data-item-dropdown") && (new l.default).moveDropdown({
        button: d
       })
      }
     }
    }
   }, {
    key: "uncheckItem",
    value: function(e) {
     var t = void 0;
     if (void 0 !== e.itemId) {
      var n = localStorage.getItem(e.sectionName);
      t = JSON.parse(n)
     }
     t.forEach(function(n, r) {
      if (n.id === e.itemId) {
       t.splice(r, 1), localStorage.setItem(e.sectionName, JSON.stringify(t));
       var a = JSON.parse(localStorage.getItem(e.sectionName)).length;
       (new i.default).updateProgressBar(e.section, a), (new u.default).updateNotation(), (new o.default).visibityEl(e.item, ".c-tags"), (new o.default).visibityEl(e.item, ".js-dropdown"), e.item.setAttribute("data-item-check", "false"), (new u.default).updatePriority(), gtag("event", "uncheck", {
        event_category: "Click",
        event_label: "Item unchecked"
       })
      }
     })
    }
   }, {
    key: "checkboxDetection",
    value: function(e) {
     var t = (new o.default).variableList(e);
     e.checked ? (new a.default).checkingItem(t) : s.uncheckItem(t)
    }
   }, {
    key: "enableCheckbox",
    value: function() {
     document.querySelectorAll("input[type=checkbox]").forEach(function(e) {
      e.addEventListener("click", function() {
       return s.checkboxDetection(e)
      })
     })
    }
   }]), e
  }(),
  d = new f;
 Object.freeze(d), t.default = f
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
  function e(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
   }
  }
  return function(t, n, r) {
   return n && e(t.prototype, n), r && e(t, r), t
  }
 }();
 var o = null,
  i = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), o || (o = this), this.nav = document.querySelector(".c-nav"), this.scrollToggle = document.querySelectorAll(".js-scroll"), o
   }
   return r(e, [{
    key: "lazyLoadImg",
    value: function(e) {
     [].forEach.call(e.querySelectorAll("img[data-src]"), function(e) {
      e.setAttribute("src", e.getAttribute("data-src")), e.onload = function() {
       e.removeAttribute("data-src")
      }
     })
    }
   }, {
    key: "isScrolledIntoView",
    value: function(e) {
     var t = e.getBoundingClientRect().top,
      n = e.getBoundingClientRect().bottom;
     return t >= 0 && n <= window.innerHeight
    }
   }, {
    key: "smoothScroll",
    value: function(e, t) {
     var n = window.pageYOffset,
      r = e.offsetTop + 300,
      o = (r - n) / (t / 16),
      i = void 0,
      a = setInterval(function() {
       window.scrollBy(0, o), i()
      }, 16);
     i = o >= 0 ? function() {
      var e = window.pageYOffset;
      (e >= r - o || window.innerHeight + e >= document.body.offsetHeight) && clearInterval(a)
     } : function() {
      window.pageYOffset <= (r || 0) && clearInterval(a)
     }
    }
   }, {
    key: "scrollAnchor",
    value: function() {
     this.scrollToggle.forEach(function(e) {
      e.addEventListener("click", function(t) {
       t.preventDefault();
       var n = e.getAttribute("href"),
        r = document.querySelector(n),
        i = e.getAttribute("data-speed");
       r && (o.smoothScroll(r, i || 3e3), history.pushState ? history.pushState(null, null, "/" + n) : location.hash = "/" + n)
      }, !1)
     })
    }
   }, {
    key: "navScroll",
    value: function() {
     var e = this,
      t = !1;
     window.addEventListener("scroll", function() {
      window.scrollY, t || (window.requestAnimationFrame(function() {
		  
		    var $sticky = $('.c-nav__list.c-nav--inline');
			  var $stickyrStopper = $('.s-checklist__googling');
			  if (!!$sticky.offset()) { // make sure ".sticky" element exists

				var generalSidebarHeight = $sticky.innerHeight();
				var stickyTop = $sticky.offset().top;
				var stickOffset = 0;
				var stickyStopperPosition = $stickyrStopper.offset().top;
				var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
				var diff = stopPoint + stickOffset;

				$(window).scroll(function(){ // scroll event
				  var windowTop = $(window).scrollTop(); // returns number

				  if (stopPoint < windowTop) {
					  $sticky.css({ position: 'fixed', top: '15px' });
				  } else if (stickyTop < windowTop+stickOffset) {
					  $sticky.css({ position: 'fixed', top: '15px' });
				  } else {
					  $sticky.css({position: 'absolute', top: '50px'});
				  }
				});

			  }
		  
       //window.innerWidth > 1265 && (!1 === o.isScrolledIntoView(e.nav) ? e.nav.classList.add("c-nav__sidebar") : e.nav.classList.remove("c-nav__sidebar")), t = !1
      }), t = !0)
     }, {
      passive: !0
     })
    }
   }, {
    key: "enableUi",
    value: function() {
     o.navScroll()
    }
   }]), e
  }(),
  a = new i;
 Object.freeze(a), t.default = i
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
  function e(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
   }
  }
  return function(t, n, r) {
   return n && e(t.prototype, n), r && e(t, r), t
  }
 }();
 var o = null,
  i = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), o || (o = this), this.main = document.getElementById("js-main"), o
   }
   return r(e, [{
    key: "allItemsCounter",
    value: function(e) {
     return e.querySelectorAll(".js-item").length
    }
   }, {
    key: "updateMainProgressBar",
    value: function() {
     var t = this.main.querySelectorAll('[data-item-check="true"]').length;
     (new e).updateProgressBar(this.main, t, "main")
    }
   }, {
    key: "updateProgressBar",
    value: function(e, t, n) {
     var r = e,
      i = o.allItemsCounter(e),
      a = void 0;
     switch (n) {
      case "main":
       a = e.querySelector(".js-all-progress");
       break;
      default:
       a = e.querySelector(".js-progress")
     }
     var u = parseInt(t / i * 100, 10);
     a.setAttribute("value", u), r.querySelector(".c-progress__label").innerHTML = u + " %", document.querySelectorAll("#js-nav-" + e.getAttribute("data-section"))[0].setAttribute("data-notation", u)
    }
   }, {
    key: "updateAllProgressBars",
    value: function(t, n) {
     (new e).updateProgressBar(t, n)
    }
   }]), e
  }(),
  a = new i;
 Object.freeze(a), t.default = i
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
  function e(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
   }
  }
  return function(t, n, r) {
   return n && e(t.prototype, n), r && e(t, r), t
  }
 }();
 var o = null,
  i = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), o || (o = this), this.main = document.getElementById("js-main"), this.notationDetails = document.querySelector(".c-notation__details"), this.items = document.querySelectorAll(".js-item"), this.priority = [], o
   }
   return r(e, [{
    key: "updatePriority",
    value: function() {
     this.priority.forEach(function(e, t) {
      var n = document.querySelectorAll("[data-item-priority=" + e + "][data-item-check='true']").length;
      document.querySelectorAll(".js-detail-" + e)[0].querySelectorAll(".js-notation-checked")[0].innerHTML = n
     })
    }
   }, {
    key: "readPriority",
    value: function(e) {
     var t = this;
     this.items.forEach(function(e, n) {
      var r = e.getAttribute("data-item-priority"); - 1 === t.priority.indexOf(r) && t.priority.push(r)
     }), o.updatePriority()
    }
   }, {
    key: "updateNotation",
    value: function() {
     var e = this.main.querySelectorAll(".js-item").length,
      t = this.main.querySelectorAll('[data-item-check="true"]').length,
      n = parseInt(t / e * 100, 10),
      r = document.getElementById("js-notation"),
      o = r.getElementsByClassName("c-notation__letter")[0];
     switch (r.setAttribute("data-notation", n), !0) {
      case n <= 20:
       o.innerHTML = "F";
       break;
      case n <= 40:
       o.innerHTML = "E";
       break;
      case n <= 60:
       o.innerHTML = "D";
       break;
      case n <= 80:
       o.innerHTML = "C";
       break;
      case n < 100:
       o.innerHTML = "B";
       break;
      case 100 === n:
       o.innerHTML = "A"
     }
    }
   }]), e
  }(),
  a = new i;
 Object.freeze(a), t.default = i
}, function(e, t, n) {
 "use strict";
 var r = function(e) {
  return e && e.__esModule ? e : {
   default: e
  }
 }(n(8));
 document.addEventListener("DOMContentLoaded", function() {
  return new r.default
 })
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
   function e(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
   }
   return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t
   }
  }(),
  o = h(n(9)),
  i = h(n(1)),
  a = h(n(2)),
  u = h(n(3)),
  l = h(n(6)),
  c = h(n(11)),
  s = h(n(12)),
  f = h(n(4)),
  d = h(n(13));

 function h(e) {
  return e && e.__esModule ? e : {
   default: e
  }
 }
 var p = null,
  y = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), p || (p = this), this.sections = document.querySelectorAll(".js-section"), this.main = document.getElementById("js-main"), this.checkboxesInit(), this.dropdownInit(this.sections), this.filterInit(), this.itemsInit(this.sections), this.notationInit(), this.toolsInit(), this.reportInit(), this.uiInit(), this.AnalyticsInit(), p
   }
   return r(e, [{
    key: "reportInit",
    value: function() {
     (new s.default).enableReport()
    }
   }, {
    key: "itemsInit",
    value: function(e) {
     e.forEach(function(t, n) {
      (new a.default).readItems(t, n, e)
     }), (new a.default).readHideSections()
    }
   }, {
    key: "notationInit",
    value: function() {
     (new l.default).updateNotation(), (new l.default).readPriority()
    }
   }, {
    key: "toolsInit",
    value: function() {
     (new c.default).enableTools()
    }
   }, {
    key: "dropdownInit",
    value: function(e) {
     (new i.default).enableDropdown(document.querySelectorAll(".js-dropdown")), e.forEach(function(e) {
      (new i.default).collapseAllDropdown({
       section: e
      })
     })
    }
   }, {
    key: "checkboxesInit",
    value: function() {
     (new u.default).enableCheckbox()
    }
   }, {
    key: "filterInit",
    value: function() {
     (new o.default).readFilterStorage("tag"), (new o.default).enableFilter("tag", "data-tag", ".js-filter-tag")
    }
   }, {
    key: "uiInit",
    value: function() {
     (new f.default).enableUi()
    }
   }, {
    key: "AnalyticsInit",
    value: function() {
     (new d.default).enableAnalytics()
    }
   }]), e
  }(),
  v = new y;
 Object.freeze(v), t.default = y
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
  function e(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
   }
  }
  return function(t, n, r) {
   return n && e(t.prototype, n), r && e(t, r), t
  }
 }();
 var o = null,
  i = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), o || (o = this), o
   }
   return r(e, [{
    key: "highlightButton",
    value: function(e, t) {
     var n = document.querySelector("[data-" + t + '="' + e + '"]');
     document.querySelectorAll("[data-" + t + "]").forEach(function(e) {
      e.classList.remove("filter-active")
     }), n.classList.add("filter-active")
    }
   }, {
    key: "addFilter",
    value: function(e, t) {
     var n = [],
      r = t;
     if (null === localStorage.getItem(r)) n = [{
      filter: "all"
     }];
     else {
      var i = {
       filter: e
      };
      n.push(i), o.highlightButton(i.filter, t)
     }
     localStorage.setItem(r, JSON.stringify(n))
    }
   }, {
    key: "selectBy",
    value: function(e) {
     var t = document.querySelectorAll(".js-item");
     t.forEach(function(n, r) {
      (" " + t[r].className + " ").indexOf(" " + e + " ") < 0 ? (t[r].setAttribute("data-item-visible", !1), t[r].setAttribute("aria-hidden", !0)) : (t[r].setAttribute("data-item-visible", !0), t[r].setAttribute("aria-hidden", !1))
     })
    }
   }, {
    key: "readFilterStorage",
    value: function(e) {
     null !== localStorage.getItem(e) ? JSON.parse(localStorage.getItem(e)).forEach(function(t) {
      o.selectBy(t.filter), o.highlightButton(t.filter, e)
     }) : (localStorage.setItem(e, JSON.stringify([{
      filter: "all"
     }])), o.selectBy("all"), o.highlightButton("all", "tag"))
    }
   }, {
    key: "enableFilter",
    value: function(e, t, n) {
     document.querySelectorAll(n).forEach(function(n) {
      n.addEventListener("click", function(n) {
       n.preventDefault(), o.selectBy(n.target.getAttribute(t)), o.addFilter(n.target.getAttribute(t), e)
      }, !1)
     })
    }
   }]), e
  }(),
  a = new i;
 Object.freeze(a), t.default = i
}, function(e, t, n) {
 /**
  * @file postscribe
  * @description Asynchronously write javascript, even with document.write.
  * @version v2.0.8
  * @see {@link https://krux.github.io/postscribe}
  * @license MIT
  * @author Derek Brans
  * @copyright 2016 Krux Digital, Inc
  */
 ! function(t, n) {
  e.exports = n()
 }(0, function() {
  return function(e) {
   var t = {};

   function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
     exports: {},
     id: r,
     loaded: !1
    };
    return e[r].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
   }
   return n.m = e, n.c = t, n.p = "", n(0)
  }([function(e, t, n) {
   "use strict";
   var r = function(e) {
    return e && e.__esModule ? e : {
     default: e
    }
   }(n(1));
   e.exports = r.default
  }, function(e, t, n) {
   "use strict";
   t.__esModule = !0;
   var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = arguments[t];
     for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
   };
   t.default = d;
   var o = function(e) {
     return e && e.__esModule ? e : {
      default: e
     }
    }(n(2)),
    i = function(e) {
     if (e && e.__esModule) return e;
     var t = {};
     if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
     return t.default = e, t
    }(n(4));

   function a() {}
   var u = {
     afterAsync: a,
     afterDequeue: a,
     afterStreamStart: a,
     afterWrite: a,
     autoFix: !0,
     beforeEnqueue: a,
     beforeWriteToken: function(e) {
      return e
     },
     beforeWrite: function(e) {
      return e
     },
     done: a,
     error: function(e) {
      throw new Error(e.msg)
     },
     releaseAsync: !1
    },
    l = 0,
    c = [],
    s = null;

   function f() {
    var e = c.shift();
    if (e) {
     var t = i.last(e);
     t.afterDequeue(), e.stream = function(e, t, n) {
      (s = new o.default(e, n)).id = l++, s.name = n.name || s.id, d.streams[s.name] = s;
      var i = e.ownerDocument,
       u = {
        close: i.close,
        open: i.open,
        write: i.write,
        writeln: i.writeln
       };

      function c(e) {
       e = n.beforeWrite(e), s.write(e), n.afterWrite(e)
      }
      r(i, {
       close: a,
       open: a,
       write: function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return c(t.join(""))
       },
       writeln: function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return c(t.join("") + "\n")
       }
      });
      var h = s.win.onerror || a;
      return s.win.onerror = function(e, t, r) {
       n.error({
        msg: e + " - " + t + ": " + r
       }), h.apply(s.win, [e, t, r])
      }, s.write(t, function() {
       r(i, u), s.win.onerror = h, n.done(), s = null, f()
      }), s
     }.apply(void 0, e), t.afterStreamStart()
    }
   }

   function d(e, t, n) {
    if (i.isFunction(n)) n = {
     done: n
    };
    else if ("clear" === n) return c = [], s = null, void(l = 0);
    n = i.defaults(n, u);
    var r = [e = /^#/.test(e) ? window.document.getElementById(e.substr(1)) : e.jquery ? e[0] : e, t, n];
    return e.postscribe = {
     cancel: function() {
      r.stream ? r.stream.abort() : r[1] = a
     }
    }, n.beforeEnqueue(r), c.push(r), s || f(), e.postscribe
   }
   r(d, {
    streams: {},
    queue: c,
    WriteStream: o.default
   })
  }, function(e, t, n) {
   "use strict";
   t.__esModule = !0;
   var r = Object.assign || function(e) {
     for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
     }
     return e
    },
    o = function(e) {
     return e && e.__esModule ? e : {
      default: e
     }
    }(n(3)),
    i = function(e) {
     if (e && e.__esModule) return e;
     var t = {};
     if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
     return t.default = e, t
    }(n(4));
   var a = "data-ps-";

   function u(e, t) {
    var n = a + t,
     r = e.getAttribute(n);
    return i.existy(r) ? String(r) : r
   }

   function l(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
     r = a + t;
    i.existy(n) && "" !== n ? e.setAttribute(r, n) : e.removeAttribute(r)
   }
   var c = function() {
    function e(t) {
     var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
     ! function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }(this, e), this.root = t, this.options = n, this.doc = t.ownerDocument, this.win = this.doc.defaultView || this.doc.parentWindow, this.parser = new o.default("", {
      autoFix: n.autoFix
     }), this.actuals = [t], this.proxyHistory = "", this.proxyRoot = this.doc.createElement(t.nodeName), this.scriptStack = [], this.writeQueue = [], l(this.proxyRoot, "proxyof", 0)
    }
    return e.prototype.write = function() {
     var e;
     for ((e = this.writeQueue).push.apply(e, arguments); !this.deferredRemote && this.writeQueue.length;) {
      var t = this.writeQueue.shift();
      i.isFunction(t) ? this._callFunction(t) : this._writeImpl(t)
     }
    }, e.prototype._callFunction = function(e) {
     var t = {
      type: "function",
      value: e.name || e.toString()
     };
     this._onScriptStart(t), e.call(this.win, this.doc), this._onScriptDone(t)
    }, e.prototype._writeImpl = function(e) {
     this.parser.append(e);
     for (var t = void 0, n = void 0, r = void 0, o = [];
      (t = this.parser.readToken()) && !(n = i.isScript(t)) && !(r = i.isStyle(t));)(t = this.options.beforeWriteToken(t)) && o.push(t);
     o.length > 0 && this._writeStaticTokens(o), n && this._handleScriptToken(t), r && this._handleStyleToken(t)
    }, e.prototype._writeStaticTokens = function(e) {
     var t = this._buildChunk(e);
     return t.actual ? (t.html = this.proxyHistory + t.actual, this.proxyHistory += t.proxy, this.proxyRoot.innerHTML = t.html, this._walkChunk(), t) : null
    }, e.prototype._buildChunk = function(e) {
     for (var t = this.actuals.length, n = [], r = [], o = [], i = e.length, u = 0; u < i; u++) {
      var l = e[u],
       c = l.toString();
      if (n.push(c), l.attrs) {
       if (!/^noscript$/i.test(l.tagName)) {
        var s = t++;
        r.push(c.replace(/(\/?>)/, " " + a + "id=" + s + " $1")), "ps-script" !== l.attrs.id && "ps-style" !== l.attrs.id && o.push("atomicTag" === l.type ? "" : "<" + l.tagName + " " + a + "proxyof=" + s + (l.unary ? " />" : ">"))
       }
      } else r.push(c), o.push("endTag" === l.type ? c : "")
     }
     return {
      tokens: e,
      raw: n.join(""),
      actual: r.join(""),
      proxy: o.join("")
     }
    }, e.prototype._walkChunk = function() {
     for (var e = void 0, t = [this.proxyRoot]; i.existy(e = t.shift());) {
      var n = 1 === e.nodeType;
      if (!(n && u(e, "proxyof"))) {
       n && (this.actuals[u(e, "id")] = e, l(e, "id"));
       var r = e.parentNode && u(e.parentNode, "proxyof");
       r && this.actuals[r].appendChild(e)
      }
      t.unshift.apply(t, i.toArray(e.childNodes))
     }
    }, e.prototype._handleScriptToken = function(e) {
     var t = this,
      n = this.parser.clear();
     n && this.writeQueue.unshift(n), e.src = e.attrs.src || e.attrs.SRC, (e = this.options.beforeWriteToken(e)) && (e.src && this.scriptStack.length ? this.deferredRemote = e : this._onScriptStart(e), this._writeScriptToken(e, function() {
      t._onScriptDone(e)
     }))
    }, e.prototype._handleStyleToken = function(e) {
     var t = this.parser.clear();
     t && this.writeQueue.unshift(t), e.type = e.attrs.type || e.attrs.TYPE || "text/css", (e = this.options.beforeWriteToken(e)) && this._writeStyleToken(e), t && this.write()
    }, e.prototype._writeStyleToken = function(e) {
     var t = this._buildStyle(e);
     this._insertCursor(t, "ps-style"), e.content && (t.styleSheet && !t.sheet ? t.styleSheet.cssText = e.content : t.appendChild(this.doc.createTextNode(e.content)))
    }, e.prototype._buildStyle = function(e) {
     var t = this.doc.createElement(e.tagName);
     return t.setAttribute("type", e.type), i.eachKey(e.attrs, function(e, n) {
      t.setAttribute(e, n)
     }), t
    }, e.prototype._insertCursor = function(e, t) {
     this._writeImpl('<span id="' + t + '"/>');
     var n = this.doc.getElementById(t);
     n && n.parentNode.replaceChild(e, n)
    }, e.prototype._onScriptStart = function(e) {
     e.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(e)
    }, e.prototype._onScriptDone = function(e) {
     e === this.scriptStack[0] ? (this.scriptStack.shift(), this.write.apply(this, e.outerWrites), !this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote), this.deferredRemote = null)) : this.options.error({
      msg: "Bad script nesting or script finished twice"
     })
    }, e.prototype._writeScriptToken = function(e, t) {
     var n = this._buildScript(e),
      r = this._shouldRelease(n),
      o = this.options.afterAsync;
     e.src && (n.src = e.src, this._scriptLoadHandler(n, r ? o : function() {
      t(), o()
     }));
     try {
      this._insertCursor(n, "ps-script"), n.src && !r || t()
     } catch (e) {
      this.options.error(e), t()
     }
    }, e.prototype._buildScript = function(e) {
     var t = this.doc.createElement(e.tagName);
     return i.eachKey(e.attrs, function(e, n) {
      t.setAttribute(e, n)
     }), e.content && (t.text = e.content), t
    }, e.prototype._scriptLoadHandler = function(e, t) {
     function n() {
      e = e.onload = e.onreadystatechange = e.onerror = null
     }
     var o = this.options.error;

     function i() {
      n(), null != t && t(), t = null
     }

     function a(e) {
      n(), o(e), null != t && t(), t = null
     }

     function u(e, t) {
      var n = e["on" + t];
      null != n && (e["_on" + t] = n)
     }
     u(e, "load"), u(e, "error"), r(e, {
      onload: function() {
       if (e._onload) try {
        e._onload.apply(this, Array.prototype.slice.call(arguments, 0))
       } catch (t) {
        a({
         msg: "onload handler failed " + t + " @ " + e.src
        })
       }
       i()
      },
      onerror: function() {
       if (e._onerror) try {
        e._onerror.apply(this, Array.prototype.slice.call(arguments, 0))
       } catch (t) {
        return void a({
         msg: "onerror handler failed " + t + " @ " + e.src
        })
       }
       a({
        msg: "remote script failed " + e.src
       })
      },
      onreadystatechange: function() {
       /^(loaded|complete)$/.test(e.readyState) && i()
      }
     })
    }, e.prototype._shouldRelease = function(e) {
     return !/^script$/i.test(e.nodeName) || !!(this.options.releaseAsync && e.src && e.hasAttribute("async"))
    }, e
   }();
   t.default = c
  }, function(e, t, n) {
   /**
    * @file prescribe
    * @description Tiny, forgiving HTML parser
    * @version vundefined
    * @see {@link https://github.com/krux/prescribe/}
    * @license MIT
    * @author Derek Brans
    * @copyright 2016 Krux Digital, Inc
    */
   ! function(t, n) {
    e.exports = n()
   }(0, function() {
    return function(e) {
     var t = {};

     function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
       exports: {},
       id: r,
       loaded: !1
      };
      return e[r].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
     }
     return n.m = e, n.c = t, n.p = "", n(0)
    }([function(e, t, n) {
     "use strict";
     var r = function(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }(n(1));
     e.exports = r.default
    }, function(e, t, n) {
     "use strict";
     t.__esModule = !0;
     var r = u(n(2)),
      o = u(n(3)),
      i = function(e) {
       return e && e.__esModule ? e : {
        default: e
       }
      }(n(6)),
      a = n(5);

     function u(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
       for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
     }
     var l = {
       comment: /^<!--/,
       endTag: /^<\//,
       atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
       startTag: /^</,
       chars: /^[^<]/
      },
      c = function() {
       function e() {
        var t = this,
         n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
         o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ! function(e, t) {
         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.stream = n;
        var a = !1,
         u = {};
        for (var l in r) r.hasOwnProperty(l) && (o.autoFix && (u[l + "Fix"] = !0), a = a || u[l + "Fix"]);
        a ? (this._readToken = (0, i.default)(this, u, function() {
         return t._readTokenImpl()
        }), this._peekToken = (0, i.default)(this, u, function() {
         return t._peekTokenImpl()
        })) : (this._readToken = this._readTokenImpl, this._peekToken = this._peekTokenImpl)
       }
       return e.prototype.append = function(e) {
        this.stream += e
       }, e.prototype.prepend = function(e) {
        this.stream = e + this.stream
       }, e.prototype._readTokenImpl = function() {
        var e = this._peekTokenImpl();
        if (e) return this.stream = this.stream.slice(e.length), e
       }, e.prototype._peekTokenImpl = function() {
        for (var e in l)
         if (l.hasOwnProperty(e) && l[e].test(this.stream)) {
          var t = o[e](this.stream);
          if (t) return "startTag" === t.type && /script|style/i.test(t.tagName) ? null : (t.text = this.stream.substr(0, t.length), t)
         }
       }, e.prototype.peekToken = function() {
        return this._peekToken()
       }, e.prototype.readToken = function() {
        return this._readToken()
       }, e.prototype.readTokens = function(e) {
        for (var t = void 0; t = this.readToken();)
         if (e[t.type] && !1 === e[t.type](t)) return
       }, e.prototype.clear = function() {
        var e = this.stream;
        return this.stream = "", e
       }, e.prototype.rest = function() {
        return this.stream
       }, e
      }();
     for (var s in t.default = c, c.tokenToString = function(e) {
       return e.toString()
      }, c.escapeAttributes = function(e) {
       var t = {};
       for (var n in e) e.hasOwnProperty(n) && (t[n] = (0, a.escapeQuotes)(e[n], null));
       return t
      }, c.supports = r, r) r.hasOwnProperty(s) && (c.browserHasFlaw = c.browserHasFlaw || !r[s] && s)
    }, function(e, t) {
     "use strict";
     t.__esModule = !0;
     var n = !1,
      r = !1,
      o = window.document.createElement("div");
     try {
      var i = "<P><I></P></I>";
      o.innerHTML = i, t.tagSoup = n = o.innerHTML !== i
     } catch (e) {
      t.tagSoup = n = !1
     }
     try {
      o.innerHTML = "<P><i><P></P></i></P>", t.selfClose = r = 2 === o.childNodes.length
     } catch (e) {
      t.selfClose = r = !1
     }
     o = null, t.tagSoup = n, t.selfClose = r
    }, function(e, t, n) {
     "use strict";
     t.__esModule = !0;
     var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
     } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
     };
     t.comment = function(e) {
      var t = e.indexOf("--\x3e");
      if (t >= 0) return new o.CommentToken(e.substr(4, t - 1), t + 3)
     }, t.chars = function(e) {
      var t = e.indexOf("<");
      return new o.CharsToken(t >= 0 ? t : e.length)
     }, t.startTag = a, t.atomicTag = function(e) {
      var t = a(e);
      if (t) {
       var n = e.slice(t.length);
       if (n.match(new RegExp("</\\s*" + t.tagName + "\\s*>", "i"))) {
        var r = n.match(new RegExp("([\\s\\S]*?)</\\s*" + t.tagName + "\\s*>", "i"));
        if (r) return new o.AtomicTagToken(t.tagName, r[0].length + t.length, t.attrs, t.booleanAttrs, r[1])
       }
      }
     }, t.endTag = function(e) {
      var t = e.match(i.endTag);
      if (t) return new o.EndTagToken(t[1], t[0].length)
     };
     var o = n(4),
      i = {
       startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
       endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
       attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
       fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
      };

     function a(e) {
      if (-1 !== e.indexOf(">")) {
       var t = e.match(i.startTag);
       if (t) {
        var n = function() {
         var e = {},
          n = {},
          r = t[2];
         return t[2].replace(i.attr, function(t, o) {
          arguments[2] || arguments[3] || arguments[4] || arguments[5] ? arguments[5] ? (e[arguments[5]] = "", n[arguments[5]] = !0) : e[o] = arguments[2] || arguments[3] || arguments[4] || i.fillAttr.test(o) && o || "" : e[o] = "", r = r.replace(t, "")
         }), {
          v: new o.StartTagToken(t[1], t[0].length, e, n, !!t[3], r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
         }
        }();
        if ("object" === (void 0 === n ? "undefined" : r(n))) return n.v
       }
      }
     }
    }, function(e, t, n) {
     "use strict";
     t.__esModule = !0, t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = void 0;
     var r = n(5);

     function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }
     t.Token = function e(t, n) {
      o(this, e), this.type = t, this.length = n, this.text = ""
     }, t.CommentToken = function() {
      function e(t, n) {
       o(this, e), this.type = "comment", this.length = n || (t ? t.length : 0), this.text = "", this.content = t
      }
      return e.prototype.toString = function() {
       return "\x3c!--" + this.content
      }, e
     }(), t.CharsToken = function() {
      function e(t) {
       o(this, e), this.type = "chars", this.length = t, this.text = ""
      }
      return e.prototype.toString = function() {
       return this.text
      }, e
     }();
     var i = t.TagToken = function() {
      function e(t, n, r, i, a) {
       o(this, e), this.type = t, this.length = r, this.text = "", this.tagName = n, this.attrs = i, this.booleanAttrs = a, this.unary = !1, this.html5Unary = !1
      }
      return e.formatTag = function(e) {
       var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = "<" + e.tagName;
       for (var o in e.attrs)
        if (e.attrs.hasOwnProperty(o)) {
         n += " " + o;
         var i = e.attrs[o];
         void 0 !== e.booleanAttrs && void 0 !== e.booleanAttrs[o] || (n += '="' + (0, r.escapeQuotes)(i) + '"')
        } return e.rest && (n += " " + e.rest), e.unary && !e.html5Unary ? n += "/>" : n += ">", void 0 !== t && null !== t && (n += t + "</" + e.tagName + ">"), n
      }, e
     }();
     t.StartTagToken = function() {
      function e(t, n, r, i, a, u) {
       o(this, e), this.type = "startTag", this.length = n, this.text = "", this.tagName = t, this.attrs = r, this.booleanAttrs = i, this.html5Unary = !1, this.unary = a, this.rest = u
      }
      return e.prototype.toString = function() {
       return i.formatTag(this)
      }, e
     }(), t.AtomicTagToken = function() {
      function e(t, n, r, i, a) {
       o(this, e), this.type = "atomicTag", this.length = n, this.text = "", this.tagName = t, this.attrs = r, this.booleanAttrs = i, this.unary = !1, this.html5Unary = !1, this.content = a
      }
      return e.prototype.toString = function() {
       return i.formatTag(this, this.content)
      }, e
     }(), t.EndTagToken = function() {
      function e(t, n) {
       o(this, e), this.type = "endTag", this.length = n, this.text = "", this.tagName = t
      }
      return e.prototype.toString = function() {
       return "</" + this.tagName + ">"
      }, e
     }()
    }, function(e, t) {
     "use strict";
     t.__esModule = !0, t.escapeQuotes = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return e ? e.replace(/([^"]*)"/g, function(e, t) {
       return /\\/.test(t) ? t + '"' : t + '\\"'
      }) : t
     }
    }, function(e, t) {
     "use strict";
     t.__esModule = !0, t.default = function(e, t, n) {
      var a = function() {
        var e = [];
        return e.last = function() {
         return this[this.length - 1]
        }, e.lastTagNameEq = function(e) {
         var t = this.last();
         return t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase()
        }, e.containsTagName = function(e) {
         for (var t, n = 0; t = this[n]; n++)
          if (t.tagName === e) return !0;
         return !1
        }, e
       }(),
       u = {
        startTag: function(n) {
         var o = n.tagName;
         "TR" === o.toUpperCase() && a.lastTagNameEq("TABLE") ? (e.prepend("<TBODY>"), l()) : t.selfCloseFix && r.test(o) && a.containsTagName(o) ? a.lastTagNameEq(o) ? i(e, a) : (e.prepend("</" + n.tagName + ">"), l()) : n.unary || a.push(n)
        },
        endTag: function(r) {
         var o = a.last();
         o ? t.tagSoupFix && !a.lastTagNameEq(r.tagName) ? i(e, a) : a.pop() : t.tagSoupFix && (n(), l())
        }
       };

      function l() {
       var t = function(e, t) {
        var n = e.stream,
         r = o(t());
        return e.stream = n, r
       }(e, n);
       t && u[t.type] && u[t.type](t)
      }
      return function() {
       return l(), o(n())
      }
     };
     var n = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
      r = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;

     function o(e) {
      return e && "startTag" === e.type && (e.unary = n.test(e.tagName) || e.unary, e.html5Unary = !/\/>$/.test(e.text)), e
     }

     function i(e, t) {
      var n = t.pop();
      e.prepend("</" + n.tagName + ">")
     }
    }])
   })
  }, function(e, t) {
   "use strict";
   t.__esModule = !0;
   var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
   } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
   };

   function r(e) {
    return void 0 !== e && null !== e
   }

   function o(e, t, n) {
    var r = void 0,
     o = e && e.length || 0;
    for (r = 0; r < o; r++) t.call(n, e[r], r)
   }

   function i(e, t, n) {
    for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r])
   }

   function a(e, t) {
    return !(!e || "startTag" !== e.type && "atomicTag" !== e.type || !("tagName" in e)) && !!~e.tagName.toLowerCase().indexOf(t)
   }
   t.existy = r, t.isFunction = function(e) {
    return "function" == typeof e
   }, t.each = o, t.eachKey = i, t.defaults = function(e, t) {
    return e = e || {}, i(t, function(t, n) {
     r(e[t]) || (e[t] = n)
    }), e
   }, t.toArray = function(e) {
    try {
     return Array.prototype.slice.call(e)
    } catch (r) {
     var t = function() {
      var t = [];
      return o(e, function(e) {
       t.push(e)
      }), {
       v: t
      }
     }();
     if ("object" === (void 0 === t ? "undefined" : n(t))) return t.v
    }
   }, t.last = function(e) {
    return e[e.length - 1]
   }, t.isTag = a, t.isScript = function(e) {
    return a(e, "script")
   }, t.isStyle = function(e) {
    return a(e, "style")
   }
  }])
 })
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
   function e(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
   }
   return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t
   }
  }(),
  o = l(n(0)),
  i = l(n(1)),
  a = l(n(3)),
  u = l(n(2));

 function l(e) {
  return e && e.__esModule ? e : {
   default: e
  }
 }
 var c = null,
  s = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), c || (c = this), this.checkAllButton = document.querySelectorAll(".js-check-all"), this.uncheckAllButton = document.querySelectorAll(".js-uncheck-all"), this.collapseAllButton = document.querySelectorAll(".js-collapse-all"), this.expandAllButton = document.querySelectorAll(".js-expand-all"), this.hideSectionButton = document.querySelectorAll(".js-hide-section"), c
   }
   return r(e, [{
    key: "checkUncheckAll",
    value: function(e, t) {
     (new o.default).variableList(e).section.querySelectorAll(".js-item").forEach(function(e) {
      if ("true" === t) {
       if ("true" !== e.getAttribute("data-item-check")) {
        e.setAttribute("data-item-check", t);
        var n = (new o.default).variableList(e);
        (new u.default).checkingItem(n)
       }
      } else {
       e.setAttribute("data-item-check", t);
       var r = (new o.default).variableList(e);
       (new a.default).uncheckItem(r)
      }
     })
    }
   }, {
    key: "uncheckOption",
    value: function(e, t) {
     var n = void 0;
     if (void 0 === e.itemId) {
      var r = localStorage.getItem(t);
      n = JSON.parse(r)
     }
     n.forEach(function(r, o) {
      r.id === e.sectionId && (n.splice(o, 1), localStorage.setItem(t, JSON.stringify(n)))
     })
    }
   }, {
    key: "hideShow",
    value: function(e) {
     var t = (new o.default).variableList(e),
      n = t.section.querySelectorAll(".js-checklist-body")[0];
     void 0 !== n && ("visible" === n.getAttribute("data-body-visibility") ? (e.classList.add("is-active"), e.querySelector(".icon-eye").classList.add("icon-eye-hide"), n.setAttribute("data-body-visibility", "hide"), n.setAttribute("aria-hidden", "true"), (new u.default).checkingOption(t, "hide-sections")) : (e.classList.remove("is-active"), e.querySelector(".icon-eye").classList.remove("icon-eye-hide"), n.setAttribute("data-body-visibility", "visible"), n.setAttribute("aria-hidden", "false"), c.uncheckOption(t, "hide-sections")))
    }
   }, {
    key: "enableTools",
    value: function() {
     this.checkAllButton.forEach(function(e) {
      e.addEventListener("click", function() {
       c.checkUncheckAll(e, "true")
      })
     }), this.uncheckAllButton.forEach(function(e) {
      e.addEventListener("click", function() {
       c.checkUncheckAll(e, "false")
      })
     }), this.collapseAllButton.forEach(function(e) {
      e.addEventListener("click", function() {
       (new i.default).allDropdown({
        btn: e
       })
      })
     }), this.expandAllButton.forEach(function(e) {
      e.addEventListener("click", function() {
       (new i.default).allDropdown({
        btn: e
       })
      })
     }), this.hideSectionButton.forEach(function(e) {
      e.addEventListener("click", function() {
       c.hideShow(e)
      })
     })
    }
   }]), e
  }(),
  f = new s;
 Object.freeze(f), t.default = s
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
  function e(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
   }
  }
  return function(t, n, r) {
   return n && e(t.prototype, n), r && e(t, r), t
  }
 }();
 var o = null,
  i = function() {
   function e() {
    ! function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), o || (o = this), this.form = document.querySelector(".s-form"), this.inputs = this.form.querySelectorAll("input")
   }
   return r(e, [{
    key: "readInputs",
    value: function() {
     this.inputs.forEach(function(e) {
      if (null !== localStorage.getItem(e.name)) {
       var t = JSON.parse(localStorage.getItem(e.name));
       e.value = t[0]
      } else localStorage.getItem(e.name)
     })
    }
   }, {
    key: "inputSave",
    value: function() {
     this.inputs.forEach(function(e) {
      window.addEventListener("beforeunload", function(e) {}, !1), e.addEventListener("blur", function(e) {
       var t = [],
        n = e.target.value,
        r = e.target.name;
       t.push(n), localStorage.setItem(r, JSON.stringify(t))
      })
     })
    }
   }, {
    key: "resetAll",
    value: function() {
     document.querySelector(".js-reset-all").addEventListener("click", function() {
      var e = localStorage.getItem("developer-name"),
       t = localStorage.getItem("project-name"),
       n = localStorage.getItem("page-title");
      localStorage.clear(), localStorage.setItem("developer-name", e), localStorage.setItem("project-name", t), localStorage.setItem("page-title", n), gtag("event", "reset-all", {
       event_category: "Click",
       event_label: "Star new checklist"
      }), window.location.reload(!1)
     })
    }
   }, {
    key: "print",
    value: function() {
     document.querySelector(".js-print").addEventListener("click", function() {
      window.print(), gtag("event", "generate-reports", {
       event_category: "Click",
       event_label: "Generate reports"
      })
     })
    }
   }, {
    key: "enableReport",
    value: function() {
     o.print(), o.resetAll(), o.inputSave(), o.readInputs(this.inputs)
    }
   }]), e
  }(),
  a = new i;
 Object.freeze(a), t.default = i
}, function(e, t, n) {
 "use strict";
 Object.defineProperty(t, "__esModule", {
  value: !0
 });
 var r = function() {
  function e(e, t) {
   for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
   }
  }
  return function(t, n, r) {
   return n && e(t.prototype, n), r && e(t, r), t
  }
 }();
 var o = null,
  i = function() {
   function e() {
    return function(e, t) {
     if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), o || (o = this), o
   }
   return r(e, [{
    key: "addRef",
    value: function() {
     document.querySelectorAll(".js-details").forEach(function(e) {
      e.querySelectorAll("a").forEach(function(e) {
       e.setAttribute("href", e.href + "?ref=frontendchecklist")
      })
     })
    }
   }, {
    key: "enableAnalytics",
    value: function() {
     o.addRef()
    }
   }]), e
  }(),
  a = new i;
 Object.freeze(a), t.default = i
}]);
