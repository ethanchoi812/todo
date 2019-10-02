!(function(e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var r = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 6));
})([
  function(e, t, n) {
    /* flatpickr v4.6.1, @license MIT */
    e.exports = (function() {
      "use strict";
      /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */ var e = function() {
          return (e =
            Object.assign ||
            function(e) {
              for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        t = [
          "onChange",
          "onClose",
          "onDayCreate",
          "onDestroy",
          "onKeyDown",
          "onMonthChange",
          "onOpen",
          "onParseConfig",
          "onReady",
          "onValueUpdate",
          "onYearChange",
          "onPreCalendarPosition"
        ],
        n = {
          _disable: [],
          _enable: [],
          allowInput: !1,
          altFormat: "F j, Y",
          altInput: !1,
          altInputClass: "form-control input",
          animate:
            "object" == typeof window &&
            -1 === window.navigator.userAgent.indexOf("MSIE"),
          ariaDateFormat: "F j, Y",
          clickOpens: !0,
          closeOnSelect: !0,
          conjunction: ", ",
          dateFormat: "Y-m-d",
          defaultHour: 12,
          defaultMinute: 0,
          defaultSeconds: 0,
          disable: [],
          disableMobile: !1,
          enable: [],
          enableSeconds: !1,
          enableTime: !1,
          errorHandler: function(e) {
            return "undefined" != typeof console && console.warn(e);
          },
          getWeek: function(e) {
            var t = new Date(e.getTime());
            t.setHours(0, 0, 0, 0),
              t.setDate(t.getDate() + 3 - ((t.getDay() + 6) % 7));
            var n = new Date(t.getFullYear(), 0, 4);
            return (
              1 +
              Math.round(
                ((t.getTime() - n.getTime()) / 864e5 -
                  3 +
                  ((n.getDay() + 6) % 7)) /
                  7
              )
            );
          },
          hourIncrement: 1,
          ignoredFocusElements: [],
          inline: !1,
          locale: "default",
          minuteIncrement: 5,
          mode: "single",
          nextArrow:
            "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
          noCalendar: !1,
          now: new Date(),
          onChange: [],
          onClose: [],
          onDayCreate: [],
          onDestroy: [],
          onKeyDown: [],
          onMonthChange: [],
          onOpen: [],
          onParseConfig: [],
          onReady: [],
          onValueUpdate: [],
          onYearChange: [],
          onPreCalendarPosition: [],
          plugins: [],
          position: "auto",
          positionElement: void 0,
          prevArrow:
            "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
          shorthandCurrentMonth: !1,
          showMonths: 1,
          static: !1,
          time_24hr: !1,
          weekNumbers: !1,
          wrap: !1
        },
        a = {
          weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ]
          },
          months: {
            shorthand: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            longhand: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ]
          },
          daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          firstDayOfWeek: 0,
          ordinal: function(e) {
            var t = e % 100;
            if (t > 3 && t < 21) return "th";
            switch (t % 10) {
              case 1:
                return "st";
              case 2:
                return "nd";
              case 3:
                return "rd";
              default:
                return "th";
            }
          },
          rangeSeparator: " to ",
          weekAbbreviation: "Wk",
          scrollTitle: "Scroll to increment",
          toggleTitle: "Click to toggle",
          amPM: ["AM", "PM"],
          yearAriaLabel: "Year",
          time_24hr: !1
        },
        r = function(e) {
          return ("0" + e).slice(-2);
        },
        i = function(e) {
          return !0 === e ? 1 : 0;
        };
      function o(e, t, n) {
        var a;
        return (
          void 0 === n && (n = !1),
          function() {
            var r = this,
              i = arguments;
            null !== a && clearTimeout(a),
              (a = window.setTimeout(function() {
                (a = null), n || e.apply(r, i);
              }, t)),
              n && !a && e.apply(r, i);
          }
        );
      }
      var l = function(e) {
        return e instanceof Array ? e : [e];
      };
      function c(e, t, n) {
        if (!0 === n) return e.classList.add(t);
        e.classList.remove(t);
      }
      function d(e, t, n) {
        var a = window.document.createElement(e);
        return (
          (t = t || ""),
          (n = n || ""),
          (a.className = t),
          void 0 !== n && (a.textContent = n),
          a
        );
      }
      function s(e) {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
      }
      function f(e, t) {
        var n = d("div", "numInputWrapper"),
          a = d("input", "numInput " + e),
          r = d("span", "arrowUp"),
          i = d("span", "arrowDown");
        if (
          (-1 === navigator.userAgent.indexOf("MSIE 9.0")
            ? (a.type = "number")
            : ((a.type = "text"), (a.pattern = "\\d*")),
          void 0 !== t)
        )
          for (var o in t) a.setAttribute(o, t[o]);
        return n.appendChild(a), n.appendChild(r), n.appendChild(i), n;
      }
      var p = function() {},
        u = function(e, t, n) {
          return n.months[t ? "shorthand" : "longhand"][e];
        },
        m = {
          D: p,
          F: function(e, t, n) {
            e.setMonth(n.months.longhand.indexOf(t));
          },
          G: function(e, t) {
            e.setHours(parseFloat(t));
          },
          H: function(e, t) {
            e.setHours(parseFloat(t));
          },
          J: function(e, t) {
            e.setDate(parseFloat(t));
          },
          K: function(e, t, n) {
            e.setHours(
              (e.getHours() % 12) + 12 * i(new RegExp(n.amPM[1], "i").test(t))
            );
          },
          M: function(e, t, n) {
            e.setMonth(n.months.shorthand.indexOf(t));
          },
          S: function(e, t) {
            e.setSeconds(parseFloat(t));
          },
          U: function(e, t) {
            return new Date(1e3 * parseFloat(t));
          },
          W: function(e, t, n) {
            var a = parseInt(t),
              r = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
            return r.setDate(r.getDate() - r.getDay() + n.firstDayOfWeek), r;
          },
          Y: function(e, t) {
            e.setFullYear(parseFloat(t));
          },
          Z: function(e, t) {
            return new Date(t);
          },
          d: function(e, t) {
            e.setDate(parseFloat(t));
          },
          h: function(e, t) {
            e.setHours(parseFloat(t));
          },
          i: function(e, t) {
            e.setMinutes(parseFloat(t));
          },
          j: function(e, t) {
            e.setDate(parseFloat(t));
          },
          l: p,
          m: function(e, t) {
            e.setMonth(parseFloat(t) - 1);
          },
          n: function(e, t) {
            e.setMonth(parseFloat(t) - 1);
          },
          s: function(e, t) {
            e.setSeconds(parseFloat(t));
          },
          u: function(e, t) {
            return new Date(parseFloat(t));
          },
          w: p,
          y: function(e, t) {
            e.setFullYear(2e3 + parseFloat(t));
          }
        },
        g = {
          D: "(\\w+)",
          F: "(\\w+)",
          G: "(\\d\\d|\\d)",
          H: "(\\d\\d|\\d)",
          J: "(\\d\\d|\\d)\\w+",
          K: "",
          M: "(\\w+)",
          S: "(\\d\\d|\\d)",
          U: "(.+)",
          W: "(\\d\\d|\\d)",
          Y: "(\\d{4})",
          Z: "(.+)",
          d: "(\\d\\d|\\d)",
          h: "(\\d\\d|\\d)",
          i: "(\\d\\d|\\d)",
          j: "(\\d\\d|\\d)",
          l: "(\\w+)",
          m: "(\\d\\d|\\d)",
          n: "(\\d\\d|\\d)",
          s: "(\\d\\d|\\d)",
          u: "(.+)",
          w: "(\\d\\d|\\d)",
          y: "(\\d{2})"
        },
        h = {
          Z: function(e) {
            return e.toISOString();
          },
          D: function(e, t, n) {
            return t.weekdays.shorthand[h.w(e, t, n)];
          },
          F: function(e, t, n) {
            return u(h.n(e, t, n) - 1, !1, t);
          },
          G: function(e, t, n) {
            return r(h.h(e, t, n));
          },
          H: function(e) {
            return r(e.getHours());
          },
          J: function(e, t) {
            return void 0 !== t.ordinal
              ? e.getDate() + t.ordinal(e.getDate())
              : e.getDate();
          },
          K: function(e, t) {
            return t.amPM[i(e.getHours() > 11)];
          },
          M: function(e, t) {
            return u(e.getMonth(), !0, t);
          },
          S: function(e) {
            return r(e.getSeconds());
          },
          U: function(e) {
            return e.getTime() / 1e3;
          },
          W: function(e, t, n) {
            return n.getWeek(e);
          },
          Y: function(e) {
            return e.getFullYear();
          },
          d: function(e) {
            return r(e.getDate());
          },
          h: function(e) {
            return e.getHours() % 12 ? e.getHours() % 12 : 12;
          },
          i: function(e) {
            return r(e.getMinutes());
          },
          j: function(e) {
            return e.getDate();
          },
          l: function(e, t) {
            return t.weekdays.longhand[e.getDay()];
          },
          m: function(e) {
            return r(e.getMonth() + 1);
          },
          n: function(e) {
            return e.getMonth() + 1;
          },
          s: function(e) {
            return e.getSeconds();
          },
          u: function(e) {
            return e.getTime();
          },
          w: function(e) {
            return e.getDay();
          },
          y: function(e) {
            return String(e.getFullYear()).substring(2);
          }
        },
        b = function(e) {
          var t = e.config,
            r = void 0 === t ? n : t,
            i = e.l10n,
            o = void 0 === i ? a : i;
          return function(e, t, n) {
            var a = n || o;
            return void 0 !== r.formatDate
              ? r.formatDate(e, t, a)
              : t
                  .split("")
                  .map(function(t, n, i) {
                    return h[t] && "\\" !== i[n - 1]
                      ? h[t](e, a, r)
                      : "\\" !== t
                      ? t
                      : "";
                  })
                  .join("");
          };
        },
        v = function(e) {
          var t = e.config,
            r = void 0 === t ? n : t,
            i = e.l10n,
            o = void 0 === i ? a : i;
          return function(e, t, a, i) {
            if (0 === e || e) {
              var l,
                c = i || o,
                d = e;
              if (e instanceof Date) l = new Date(e.getTime());
              else if ("string" != typeof e && void 0 !== e.toFixed)
                l = new Date(e);
              else if ("string" == typeof e) {
                var s = t || (r || n).dateFormat,
                  f = String(e).trim();
                if ("today" === f) (l = new Date()), (a = !0);
                else if (/Z$/.test(f) || /GMT$/.test(f)) l = new Date(e);
                else if (r && r.parseDate) l = r.parseDate(e, s);
                else {
                  l =
                    r && r.noCalendar
                      ? new Date(new Date().setHours(0, 0, 0, 0))
                      : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
                  for (
                    var p = void 0, u = [], h = 0, b = 0, v = "";
                    h < s.length;
                    h++
                  ) {
                    var y = s[h],
                      w = "\\" === y,
                      k = "\\" === s[h - 1] || w;
                    if (g[y] && !k) {
                      v += g[y];
                      var x = new RegExp(v).exec(e);
                      x &&
                        (p = !0) &&
                        u["Y" !== y ? "push" : "unshift"]({
                          fn: m[y],
                          val: x[++b]
                        });
                    } else w || (v += ".");
                    u.forEach(function(e) {
                      var t = e.fn,
                        n = e.val;
                      return (l = t(l, n, c) || l);
                    });
                  }
                  l = p ? l : void 0;
                }
              }
              if (l instanceof Date && !isNaN(l.getTime()))
                return !0 === a && l.setHours(0, 0, 0, 0), l;
              r.errorHandler(new Error("Invalid date provided: " + d));
            }
          };
        };
      function y(e, t, n) {
        return (
          void 0 === n && (n = !0),
          !1 !== n
            ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
              new Date(t.getTime()).setHours(0, 0, 0, 0)
            : e.getTime() - t.getTime()
        );
      }
      var w = function(e, t, n) {
          return e > Math.min(t, n) && e < Math.max(t, n);
        },
        k = { DAY: 864e5 };
      "function" != typeof Object.assign &&
        (Object.assign = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          if (!e) throw TypeError("Cannot convert undefined or null to object");
          for (
            var a = function(t) {
                t &&
                  Object.keys(t).forEach(function(n) {
                    return (e[n] = t[n]);
                  });
              },
              r = 0,
              i = t;
            r < i.length;
            r++
          ) {
            var o = i[r];
            a(o);
          }
          return e;
        });
      var x = 300;
      function D(p, m) {
        var h = { config: e({}, n, C.defaultConfig), l10n: a };
        function D(e) {
          return e.bind(h);
        }
        function M() {
          var e = h.config;
          (!1 === e.weekNumbers && 1 === e.showMonths) ||
            (!0 !== e.noCalendar &&
              window.requestAnimationFrame(function() {
                if (
                  (void 0 !== h.calendarContainer &&
                    ((h.calendarContainer.style.visibility = "hidden"),
                    (h.calendarContainer.style.display = "block")),
                  void 0 !== h.daysContainer)
                ) {
                  var t = (h.days.offsetWidth + 1) * e.showMonths;
                  (h.daysContainer.style.width = t + "px"),
                    (h.calendarContainer.style.width =
                      t +
                      (void 0 !== h.weekWrapper
                        ? h.weekWrapper.offsetWidth
                        : 0) +
                      "px"),
                    h.calendarContainer.style.removeProperty("visibility"),
                    h.calendarContainer.style.removeProperty("display");
                }
              }));
        }
        function E(e) {
          0 === h.selectedDates.length && oe(),
            void 0 !== e &&
              "blur" !== e.type &&
              (function(e) {
                e.preventDefault();
                var t = "keydown" === e.type,
                  n = e.target;
                void 0 !== h.amPM &&
                  e.target === h.amPM &&
                  (h.amPM.textContent =
                    h.l10n.amPM[i(h.amPM.textContent === h.l10n.amPM[0])]);
                var a = parseFloat(n.getAttribute("min")),
                  o = parseFloat(n.getAttribute("max")),
                  l = parseFloat(n.getAttribute("step")),
                  c = parseInt(n.value, 10),
                  d = e.delta || (t ? (38 === e.which ? 1 : -1) : 0),
                  s = c + l * d;
                if (void 0 !== n.value && 2 === n.value.length) {
                  var f = n === h.hourElement,
                    p = n === h.minuteElement;
                  s < a
                    ? ((s = o + s + i(!f) + (i(f) && i(!h.amPM))),
                      p && R(void 0, -1, h.hourElement))
                    : s > o &&
                      ((s = n === h.hourElement ? s - o - i(!h.amPM) : a),
                      p && R(void 0, 1, h.hourElement)),
                    h.amPM &&
                      f &&
                      (1 === l ? s + c === 23 : Math.abs(s - c) > l) &&
                      (h.amPM.textContent =
                        h.l10n.amPM[i(h.amPM.textContent === h.l10n.amPM[0])]),
                    (n.value = r(s));
                }
              })(e);
          var t = h._input.value;
          I(), ke(), h._input.value !== t && h._debouncedChange();
        }
        function I() {
          if (void 0 !== h.hourElement && void 0 !== h.minuteElement) {
            var e,
              t,
              n = (parseInt(h.hourElement.value.slice(-2), 10) || 0) % 24,
              a = (parseInt(h.minuteElement.value, 10) || 0) % 60,
              r =
                void 0 !== h.secondElement
                  ? (parseInt(h.secondElement.value, 10) || 0) % 60
                  : 0;
            void 0 !== h.amPM &&
              ((e = n),
              (t = h.amPM.textContent),
              (n = (e % 12) + 12 * i(t === h.l10n.amPM[1])));
            var o =
                void 0 !== h.config.minTime ||
                (h.config.minDate &&
                  h.minDateHasTime &&
                  h.latestSelectedDateObj &&
                  0 === y(h.latestSelectedDateObj, h.config.minDate, !0)),
              l =
                void 0 !== h.config.maxTime ||
                (h.config.maxDate &&
                  h.maxDateHasTime &&
                  h.latestSelectedDateObj &&
                  0 === y(h.latestSelectedDateObj, h.config.maxDate, !0));
            if (l) {
              var c =
                void 0 !== h.config.maxTime
                  ? h.config.maxTime
                  : h.config.maxDate;
              (n = Math.min(n, c.getHours())) === c.getHours() &&
                (a = Math.min(a, c.getMinutes())),
                a === c.getMinutes() && (r = Math.min(r, c.getSeconds()));
            }
            if (o) {
              var d =
                void 0 !== h.config.minTime
                  ? h.config.minTime
                  : h.config.minDate;
              (n = Math.max(n, d.getHours())) === d.getHours() &&
                (a = Math.max(a, d.getMinutes())),
                a === d.getMinutes() && (r = Math.max(r, d.getSeconds()));
            }
            O(n, a, r);
          }
        }
        function T(e) {
          var t = e || h.latestSelectedDateObj;
          t && O(t.getHours(), t.getMinutes(), t.getSeconds());
        }
        function S() {
          var e = h.config.defaultHour,
            t = h.config.defaultMinute,
            n = h.config.defaultSeconds;
          if (void 0 !== h.config.minDate) {
            var a = h.config.minDate.getHours(),
              r = h.config.minDate.getMinutes();
            (e = Math.max(e, a)) === a && (t = Math.max(r, t)),
              e === a && t === r && (n = h.config.minDate.getSeconds());
          }
          if (void 0 !== h.config.maxDate) {
            var i = h.config.maxDate.getHours(),
              o = h.config.maxDate.getMinutes();
            (e = Math.min(e, i)) === i && (t = Math.min(o, t)),
              e === i && t === o && (n = h.config.maxDate.getSeconds());
          }
          O(e, t, n);
        }
        function O(e, t, n) {
          void 0 !== h.latestSelectedDateObj &&
            h.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0),
            h.hourElement &&
              h.minuteElement &&
              !h.isMobile &&
              ((h.hourElement.value = r(
                h.config.time_24hr ? e : ((12 + e) % 12) + 12 * i(e % 12 == 0)
              )),
              (h.minuteElement.value = r(t)),
              void 0 !== h.amPM &&
                (h.amPM.textContent = h.l10n.amPM[i(e >= 12)]),
              void 0 !== h.secondElement && (h.secondElement.value = r(n)));
        }
        function j(e) {
          var t = parseInt(e.target.value) + (e.delta || 0);
          (t / 1e3 > 1 || ("Enter" === e.key && !/[^\d]/.test(t.toString()))) &&
            ee(t);
        }
        function N(e, t, n, a) {
          return t instanceof Array
            ? t.forEach(function(t) {
                return N(e, t, n, a);
              })
            : e instanceof Array
            ? e.forEach(function(e) {
                return N(e, t, n, a);
              })
            : (e.addEventListener(t, n, a),
              void h._handlers.push({
                element: e,
                event: t,
                handler: n,
                options: a
              }));
        }
        function _(e) {
          return function(t) {
            1 === t.which && e(t);
          };
        }
        function A() {
          he("onChange");
        }
        function F() {
          if (
            (h.config.wrap &&
              ["open", "close", "toggle", "clear"].forEach(function(e) {
                Array.prototype.forEach.call(
                  h.element.querySelectorAll("[data-" + e + "]"),
                  function(t) {
                    return N(t, "click", h[e]);
                  }
                );
              }),
            h.isMobile)
          )
            !(function() {
              var e = h.config.enableTime
                ? h.config.noCalendar
                  ? "time"
                  : "datetime-local"
                : "date";
              (h.mobileInput = d(
                "input",
                h.input.className + " flatpickr-mobile"
              )),
                (h.mobileInput.step = h.input.getAttribute("step") || "any"),
                (h.mobileInput.tabIndex = 1),
                (h.mobileInput.type = e),
                (h.mobileInput.disabled = h.input.disabled),
                (h.mobileInput.required = h.input.required),
                (h.mobileInput.placeholder = h.input.placeholder),
                (h.mobileFormatStr =
                  "datetime-local" === e
                    ? "Y-m-d\\TH:i:S"
                    : "date" === e
                    ? "Y-m-d"
                    : "H:i:S"),
                h.selectedDates.length > 0 &&
                  (h.mobileInput.defaultValue = h.mobileInput.value = h.formatDate(
                    h.selectedDates[0],
                    h.mobileFormatStr
                  )),
                h.config.minDate &&
                  (h.mobileInput.min = h.formatDate(h.config.minDate, "Y-m-d")),
                h.config.maxDate &&
                  (h.mobileInput.max = h.formatDate(h.config.maxDate, "Y-m-d")),
                (h.input.type = "hidden"),
                void 0 !== h.altInput && (h.altInput.type = "hidden");
              try {
                h.input.parentNode &&
                  h.input.parentNode.insertBefore(
                    h.mobileInput,
                    h.input.nextSibling
                  );
              } catch (e) {}
              N(h.mobileInput, "change", function(e) {
                h.setDate(e.target.value, !1, h.mobileFormatStr),
                  he("onChange"),
                  he("onClose");
              });
            })();
          else {
            var e = o(ie, 50);
            (h._debouncedChange = o(A, x)),
              h.daysContainer &&
                !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                N(h.daysContainer, "mouseover", function(e) {
                  "range" === h.config.mode && re(e.target);
                }),
              N(window.document.body, "keydown", ae),
              h.config.inline || h.config.static || N(window, "resize", e),
              void 0 !== window.ontouchstart
                ? N(window.document, "touchstart", X)
                : N(window.document, "mousedown", _(X)),
              N(window.document, "focus", X, { capture: !0 }),
              !0 === h.config.clickOpens &&
                (N(h._input, "focus", h.open),
                N(h._input, "mousedown", _(h.open))),
              void 0 !== h.daysContainer &&
                (N(h.monthNav, "mousedown", _(xe)),
                N(h.monthNav, ["keyup", "increment"], j),
                N(h.daysContainer, "mousedown", _(pe))),
              void 0 !== h.timeContainer &&
                void 0 !== h.minuteElement &&
                void 0 !== h.hourElement &&
                (N(h.timeContainer, ["increment"], E),
                N(h.timeContainer, "blur", E, { capture: !0 }),
                N(h.timeContainer, "mousedown", _(P)),
                N(
                  [h.hourElement, h.minuteElement],
                  ["focus", "click"],
                  function(e) {
                    return e.target.select();
                  }
                ),
                void 0 !== h.secondElement &&
                  N(h.secondElement, "focus", function() {
                    return h.secondElement && h.secondElement.select();
                  }),
                void 0 !== h.amPM &&
                  N(
                    h.amPM,
                    "mousedown",
                    _(function(e) {
                      E(e), A();
                    })
                  ));
          }
        }
        function L(e, t) {
          var n =
              void 0 !== e
                ? h.parseDate(e)
                : h.latestSelectedDateObj ||
                  (h.config.minDate && h.config.minDate > h.now
                    ? h.config.minDate
                    : h.config.maxDate && h.config.maxDate < h.now
                    ? h.config.maxDate
                    : h.now),
            a = h.currentYear,
            r = h.currentMonth;
          try {
            void 0 !== n &&
              ((h.currentYear = n.getFullYear()),
              (h.currentMonth = n.getMonth()));
          } catch (e) {
            (e.message = "Invalid date supplied: " + n),
              h.config.errorHandler(e);
          }
          t && h.currentYear !== a && (he("onYearChange"), $()),
            !t ||
              (h.currentYear === a && h.currentMonth === r) ||
              he("onMonthChange"),
            h.redraw();
        }
        function P(e) {
          ~e.target.className.indexOf("arrow") &&
            R(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        function R(e, t, n) {
          var a = e && e.target,
            r = n || (a && a.parentNode && a.parentNode.firstChild),
            i = be("increment");
          (i.delta = t), r && r.dispatchEvent(i);
        }
        function Y() {
          var e = window.document.createDocumentFragment();
          if (
            ((h.calendarContainer = d("div", "flatpickr-calendar")),
            (h.calendarContainer.tabIndex = -1),
            !h.config.noCalendar)
          ) {
            if (
              (e.appendChild(
                ((h.monthNav = d("div", "flatpickr-months")),
                (h.yearElements = []),
                (h.monthElements = []),
                (h.prevMonthNav = d("span", "flatpickr-prev-month")),
                (h.prevMonthNav.innerHTML = h.config.prevArrow),
                (h.nextMonthNav = d("span", "flatpickr-next-month")),
                (h.nextMonthNav.innerHTML = h.config.nextArrow),
                K(),
                Object.defineProperty(h, "_hidePrevMonthArrow", {
                  get: function() {
                    return h.__hidePrevMonthArrow;
                  },
                  set: function(e) {
                    h.__hidePrevMonthArrow !== e &&
                      (c(h.prevMonthNav, "flatpickr-disabled", e),
                      (h.__hidePrevMonthArrow = e));
                  }
                }),
                Object.defineProperty(h, "_hideNextMonthArrow", {
                  get: function() {
                    return h.__hideNextMonthArrow;
                  },
                  set: function(e) {
                    h.__hideNextMonthArrow !== e &&
                      (c(h.nextMonthNav, "flatpickr-disabled", e),
                      (h.__hideNextMonthArrow = e));
                  }
                }),
                (h.currentYearElement = h.yearElements[0]),
                ye(),
                h.monthNav)
              ),
              (h.innerContainer = d("div", "flatpickr-innerContainer")),
              h.config.weekNumbers)
            ) {
              var t = (function() {
                  h.calendarContainer.classList.add("hasWeeks");
                  var e = d("div", "flatpickr-weekwrapper");
                  e.appendChild(
                    d("span", "flatpickr-weekday", h.l10n.weekAbbreviation)
                  );
                  var t = d("div", "flatpickr-weeks");
                  return e.appendChild(t), { weekWrapper: e, weekNumbers: t };
                })(),
                n = t.weekWrapper,
                a = t.weekNumbers;
              h.innerContainer.appendChild(n),
                (h.weekNumbers = a),
                (h.weekWrapper = n);
            }
            (h.rContainer = d("div", "flatpickr-rContainer")),
              h.rContainer.appendChild(G()),
              h.daysContainer ||
                ((h.daysContainer = d("div", "flatpickr-days")),
                (h.daysContainer.tabIndex = -1)),
              J(),
              h.rContainer.appendChild(h.daysContainer),
              h.innerContainer.appendChild(h.rContainer),
              e.appendChild(h.innerContainer);
          }
          h.config.enableTime &&
            e.appendChild(
              (function() {
                h.calendarContainer.classList.add("hasTime"),
                  h.config.noCalendar &&
                    h.calendarContainer.classList.add("noCalendar"),
                  (h.timeContainer = d("div", "flatpickr-time")),
                  (h.timeContainer.tabIndex = -1);
                var e = d("span", "flatpickr-time-separator", ":"),
                  t = f("flatpickr-hour");
                h.hourElement = t.getElementsByTagName("input")[0];
                var n = f("flatpickr-minute");
                if (
                  ((h.minuteElement = n.getElementsByTagName("input")[0]),
                  (h.hourElement.tabIndex = h.minuteElement.tabIndex = -1),
                  (h.hourElement.value = r(
                    h.latestSelectedDateObj
                      ? h.latestSelectedDateObj.getHours()
                      : h.config.time_24hr
                      ? h.config.defaultHour
                      : (function(e) {
                          switch (e % 24) {
                            case 0:
                            case 12:
                              return 12;
                            default:
                              return e % 12;
                          }
                        })(h.config.defaultHour)
                  )),
                  (h.minuteElement.value = r(
                    h.latestSelectedDateObj
                      ? h.latestSelectedDateObj.getMinutes()
                      : h.config.defaultMinute
                  )),
                  h.hourElement.setAttribute(
                    "step",
                    h.config.hourIncrement.toString()
                  ),
                  h.minuteElement.setAttribute(
                    "step",
                    h.config.minuteIncrement.toString()
                  ),
                  h.hourElement.setAttribute(
                    "min",
                    h.config.time_24hr ? "0" : "1"
                  ),
                  h.hourElement.setAttribute(
                    "max",
                    h.config.time_24hr ? "23" : "12"
                  ),
                  h.minuteElement.setAttribute("min", "0"),
                  h.minuteElement.setAttribute("max", "59"),
                  h.timeContainer.appendChild(t),
                  h.timeContainer.appendChild(e),
                  h.timeContainer.appendChild(n),
                  h.config.time_24hr &&
                    h.timeContainer.classList.add("time24hr"),
                  h.config.enableSeconds)
                ) {
                  h.timeContainer.classList.add("hasSeconds");
                  var a = f("flatpickr-second");
                  (h.secondElement = a.getElementsByTagName("input")[0]),
                    (h.secondElement.value = r(
                      h.latestSelectedDateObj
                        ? h.latestSelectedDateObj.getSeconds()
                        : h.config.defaultSeconds
                    )),
                    h.secondElement.setAttribute(
                      "step",
                      h.minuteElement.getAttribute("step")
                    ),
                    h.secondElement.setAttribute("min", "0"),
                    h.secondElement.setAttribute("max", "59"),
                    h.timeContainer.appendChild(
                      d("span", "flatpickr-time-separator", ":")
                    ),
                    h.timeContainer.appendChild(a);
                }
                return (
                  h.config.time_24hr ||
                    ((h.amPM = d(
                      "span",
                      "flatpickr-am-pm",
                      h.l10n.amPM[
                        i(
                          (h.latestSelectedDateObj
                            ? h.hourElement.value
                            : h.config.defaultHour) > 11
                        )
                      ]
                    )),
                    (h.amPM.title = h.l10n.toggleTitle),
                    (h.amPM.tabIndex = -1),
                    h.timeContainer.appendChild(h.amPM)),
                  h.timeContainer
                );
              })()
            ),
            c(h.calendarContainer, "rangeMode", "range" === h.config.mode),
            c(h.calendarContainer, "animate", !0 === h.config.animate),
            c(h.calendarContainer, "multiMonth", h.config.showMonths > 1),
            h.calendarContainer.appendChild(e);
          var o =
            void 0 !== h.config.appendTo &&
            void 0 !== h.config.appendTo.nodeType;
          if (
            (h.config.inline || h.config.static) &&
            (h.calendarContainer.classList.add(
              h.config.inline ? "inline" : "static"
            ),
            h.config.inline &&
              (!o && h.element.parentNode
                ? h.element.parentNode.insertBefore(
                    h.calendarContainer,
                    h._input.nextSibling
                  )
                : void 0 !== h.config.appendTo &&
                  h.config.appendTo.appendChild(h.calendarContainer)),
            h.config.static)
          ) {
            var l = d("div", "flatpickr-wrapper");
            h.element.parentNode &&
              h.element.parentNode.insertBefore(l, h.element),
              l.appendChild(h.element),
              h.altInput && l.appendChild(h.altInput),
              l.appendChild(h.calendarContainer);
          }
          h.config.static ||
            h.config.inline ||
            (void 0 !== h.config.appendTo
              ? h.config.appendTo
              : window.document.body
            ).appendChild(h.calendarContainer);
        }
        function H(e, t, n, a) {
          var r = te(t, !0),
            i = d("span", "flatpickr-day " + e, t.getDate().toString());
          return (
            (i.dateObj = t),
            (i.$i = a),
            i.setAttribute(
              "aria-label",
              h.formatDate(t, h.config.ariaDateFormat)
            ),
            -1 === e.indexOf("hidden") &&
              0 === y(t, h.now) &&
              ((h.todayDateElem = i),
              i.classList.add("today"),
              i.setAttribute("aria-current", "date")),
            r
              ? ((i.tabIndex = -1),
                ve(t) &&
                  (i.classList.add("selected"),
                  (h.selectedDateElem = i),
                  "range" === h.config.mode &&
                    (c(
                      i,
                      "startRange",
                      h.selectedDates[0] && 0 === y(t, h.selectedDates[0], !0)
                    ),
                    c(
                      i,
                      "endRange",
                      h.selectedDates[1] && 0 === y(t, h.selectedDates[1], !0)
                    ),
                    "nextMonthDay" === e && i.classList.add("inRange"))))
              : i.classList.add("flatpickr-disabled"),
            "range" === h.config.mode &&
              (function(e) {
                return (
                  !("range" !== h.config.mode || h.selectedDates.length < 2) &&
                  y(e, h.selectedDates[0]) >= 0 &&
                  y(e, h.selectedDates[1]) <= 0
                );
              })(t) &&
              !ve(t) &&
              i.classList.add("inRange"),
            h.weekNumbers &&
              1 === h.config.showMonths &&
              "prevMonthDay" !== e &&
              n % 7 == 1 &&
              h.weekNumbers.insertAdjacentHTML(
                "beforeend",
                "<span class='flatpickr-day'>" + h.config.getWeek(t) + "</span>"
              ),
            he("onDayCreate", i),
            i
          );
        }
        function W(e) {
          e.focus(), "range" === h.config.mode && re(e);
        }
        function B(e) {
          for (
            var t = e > 0 ? 0 : h.config.showMonths - 1,
              n = e > 0 ? h.config.showMonths : -1,
              a = t;
            a != n;
            a += e
          )
            for (
              var r = h.daysContainer.children[a],
                i = e > 0 ? 0 : r.children.length - 1,
                o = e > 0 ? r.children.length : -1,
                l = i;
              l != o;
              l += e
            ) {
              var c = r.children[l];
              if (-1 === c.className.indexOf("hidden") && te(c.dateObj))
                return c;
            }
        }
        function z(e, t) {
          var n = ne(document.activeElement || document.body),
            a =
              void 0 !== e
                ? e
                : n
                ? document.activeElement
                : void 0 !== h.selectedDateElem && ne(h.selectedDateElem)
                ? h.selectedDateElem
                : void 0 !== h.todayDateElem && ne(h.todayDateElem)
                ? h.todayDateElem
                : B(t > 0 ? 1 : -1);
          return void 0 === a
            ? h._input.focus()
            : n
            ? void (function(e, t) {
                for (
                  var n =
                      -1 === e.className.indexOf("Month")
                        ? e.dateObj.getMonth()
                        : h.currentMonth,
                    a = t > 0 ? h.config.showMonths : -1,
                    r = t > 0 ? 1 : -1,
                    i = n - h.currentMonth;
                  i != a;
                  i += r
                )
                  for (
                    var o = h.daysContainer.children[i],
                      l =
                        n - h.currentMonth === i
                          ? e.$i + t
                          : t < 0
                          ? o.children.length - 1
                          : 0,
                      c = o.children.length,
                      d = l;
                    d >= 0 && d < c && d != (t > 0 ? c : -1);
                    d += r
                  ) {
                    var s = o.children[d];
                    if (
                      -1 === s.className.indexOf("hidden") &&
                      te(s.dateObj) &&
                      Math.abs(e.$i - d) >= Math.abs(t)
                    )
                      return W(s);
                  }
                h.changeMonth(r), z(B(r), 0);
              })(a, t)
            : W(a);
        }
        function U(e, t) {
          for (
            var n =
                (new Date(e, t, 1).getDay() - h.l10n.firstDayOfWeek + 7) % 7,
              a = h.utils.getDaysInMonth((t - 1 + 12) % 12),
              r = h.utils.getDaysInMonth(t),
              i = window.document.createDocumentFragment(),
              o = h.config.showMonths > 1,
              l = o ? "prevMonthDay hidden" : "prevMonthDay",
              c = o ? "nextMonthDay hidden" : "nextMonthDay",
              s = a + 1 - n,
              f = 0;
            s <= a;
            s++, f++
          )
            i.appendChild(H(l, new Date(e, t - 1, s), s, f));
          for (s = 1; s <= r; s++, f++)
            i.appendChild(H("", new Date(e, t, s), s, f));
          for (
            var p = r + 1;
            p <= 42 - n && (1 === h.config.showMonths || f % 7 != 0);
            p++, f++
          )
            i.appendChild(H(c, new Date(e, t + 1, p % r), p, f));
          var u = d("div", "dayContainer");
          return u.appendChild(i), u;
        }
        function J() {
          if (void 0 !== h.daysContainer) {
            s(h.daysContainer), h.weekNumbers && s(h.weekNumbers);
            for (
              var e = document.createDocumentFragment(), t = 0;
              t < h.config.showMonths;
              t++
            ) {
              var n = new Date(h.currentYear, h.currentMonth, 1);
              n.setMonth(h.currentMonth + t),
                e.appendChild(U(n.getFullYear(), n.getMonth()));
            }
            h.daysContainer.appendChild(e),
              (h.days = h.daysContainer.firstChild),
              "range" === h.config.mode && 1 === h.selectedDates.length && re();
          }
        }
        function $() {
          if (!(h.config.showMonths > 1)) {
            var e = function(e) {
              return !(
                (void 0 !== h.config.minDate &&
                  h.currentYear === h.config.minDate.getFullYear() &&
                  e < h.config.minDate.getMonth()) ||
                (void 0 !== h.config.maxDate &&
                  h.currentYear === h.config.maxDate.getFullYear() &&
                  e > h.config.maxDate.getMonth())
              );
            };
            (h.monthsDropdownContainer.tabIndex = -1),
              (h.monthsDropdownContainer.innerHTML = "");
            for (var t = 0; t < 12; t++)
              if (e(t)) {
                var n = d("option", "flatpickr-monthDropdown-month");
                (n.value = new Date(h.currentYear, t).getMonth().toString()),
                  (n.textContent = u(t, !1, h.l10n)),
                  (n.tabIndex = -1),
                  h.currentMonth === t && (n.selected = !0),
                  h.monthsDropdownContainer.appendChild(n);
              }
          }
        }
        function q() {
          var e,
            t = d("div", "flatpickr-month"),
            n = window.document.createDocumentFragment();
          h.config.showMonths > 1
            ? (e = d("span", "cur-month"))
            : ((h.monthsDropdownContainer = d(
                "select",
                "flatpickr-monthDropdown-months"
              )),
              N(h.monthsDropdownContainer, "change", function(e) {
                var t = e.target,
                  n = parseInt(t.value, 10);
                h.changeMonth(n - h.currentMonth), he("onMonthChange");
              }),
              $(),
              (e = h.monthsDropdownContainer));
          var a = f("cur-year", { tabindex: "-1" }),
            r = a.getElementsByTagName("input")[0];
          r.setAttribute("aria-label", h.l10n.yearAriaLabel),
            h.config.minDate &&
              r.setAttribute("min", h.config.minDate.getFullYear().toString()),
            h.config.maxDate &&
              (r.setAttribute("max", h.config.maxDate.getFullYear().toString()),
              (r.disabled =
                !!h.config.minDate &&
                h.config.minDate.getFullYear() ===
                  h.config.maxDate.getFullYear()));
          var i = d("div", "flatpickr-current-month");
          return (
            i.appendChild(e),
            i.appendChild(a),
            n.appendChild(i),
            t.appendChild(n),
            { container: t, yearElement: r, monthElement: e }
          );
        }
        function K() {
          s(h.monthNav),
            h.monthNav.appendChild(h.prevMonthNav),
            h.config.showMonths &&
              ((h.yearElements = []), (h.monthElements = []));
          for (var e = h.config.showMonths; e--; ) {
            var t = q();
            h.yearElements.push(t.yearElement),
              h.monthElements.push(t.monthElement),
              h.monthNav.appendChild(t.container);
          }
          h.monthNav.appendChild(h.nextMonthNav);
        }
        function G() {
          h.weekdayContainer
            ? s(h.weekdayContainer)
            : (h.weekdayContainer = d("div", "flatpickr-weekdays"));
          for (var e = h.config.showMonths; e--; ) {
            var t = d("div", "flatpickr-weekdaycontainer");
            h.weekdayContainer.appendChild(t);
          }
          return V(), h.weekdayContainer;
        }
        function V() {
          var e = h.l10n.firstDayOfWeek,
            t = h.l10n.weekdays.shorthand.slice();
          e > 0 &&
            e < t.length &&
            (t = t.splice(e, t.length).concat(t.splice(0, e)));
          for (var n = h.config.showMonths; n--; )
            h.weekdayContainer.children[n].innerHTML =
              "\n      <span class='flatpickr-weekday'>\n        " +
              t.join("</span><span class='flatpickr-weekday'>") +
              "\n      </span>\n      ";
        }
        function Z(e, t) {
          void 0 === t && (t = !0);
          var n = t ? e : e - h.currentMonth;
          (n < 0 && !0 === h._hidePrevMonthArrow) ||
            (n > 0 && !0 === h._hideNextMonthArrow) ||
            ((h.currentMonth += n),
            (h.currentMonth < 0 || h.currentMonth > 11) &&
              ((h.currentYear += h.currentMonth > 11 ? 1 : -1),
              (h.currentMonth = (h.currentMonth + 12) % 12),
              he("onYearChange"),
              $()),
            J(),
            he("onMonthChange"),
            ye());
        }
        function Q(e) {
          return (
            !(!h.config.appendTo || !h.config.appendTo.contains(e)) ||
            h.calendarContainer.contains(e)
          );
        }
        function X(e) {
          if (h.isOpen && !h.config.inline) {
            var t = (function(e) {
                if ("function" == typeof e.composedPath) {
                  var t = e.composedPath();
                  return t[0];
                }
                return e.target;
              })(e),
              n = Q(t),
              a =
                t === h.input ||
                t === h.altInput ||
                h.element.contains(t) ||
                (e.path &&
                  e.path.indexOf &&
                  (~e.path.indexOf(h.input) || ~e.path.indexOf(h.altInput))),
              r =
                "blur" === e.type
                  ? a && e.relatedTarget && !Q(e.relatedTarget)
                  : !a && !n && !Q(e.relatedTarget),
              i = !h.config.ignoredFocusElements.some(function(e) {
                return e.contains(t);
              });
            r &&
              i &&
              (h.close(),
              "range" === h.config.mode &&
                1 === h.selectedDates.length &&
                (h.clear(!1), h.redraw()));
          }
        }
        function ee(e) {
          if (
            !(
              !e ||
              (h.config.minDate && e < h.config.minDate.getFullYear()) ||
              (h.config.maxDate && e > h.config.maxDate.getFullYear())
            )
          ) {
            var t = e,
              n = h.currentYear !== t;
            (h.currentYear = t || h.currentYear),
              h.config.maxDate &&
              h.currentYear === h.config.maxDate.getFullYear()
                ? (h.currentMonth = Math.min(
                    h.config.maxDate.getMonth(),
                    h.currentMonth
                  ))
                : h.config.minDate &&
                  h.currentYear === h.config.minDate.getFullYear() &&
                  (h.currentMonth = Math.max(
                    h.config.minDate.getMonth(),
                    h.currentMonth
                  )),
              n && (h.redraw(), he("onYearChange"), $());
          }
        }
        function te(e, t) {
          void 0 === t && (t = !0);
          var n = h.parseDate(e, void 0, t);
          if (
            (h.config.minDate &&
              n &&
              y(n, h.config.minDate, void 0 !== t ? t : !h.minDateHasTime) <
                0) ||
            (h.config.maxDate &&
              n &&
              y(n, h.config.maxDate, void 0 !== t ? t : !h.maxDateHasTime) > 0)
          )
            return !1;
          if (0 === h.config.enable.length && 0 === h.config.disable.length)
            return !0;
          if (void 0 === n) return !1;
          for (
            var a = h.config.enable.length > 0,
              r = a ? h.config.enable : h.config.disable,
              i = 0,
              o = void 0;
            i < r.length;
            i++
          ) {
            if ("function" == typeof (o = r[i]) && o(n)) return a;
            if (
              o instanceof Date &&
              void 0 !== n &&
              o.getTime() === n.getTime()
            )
              return a;
            if ("string" == typeof o && void 0 !== n) {
              var l = h.parseDate(o, void 0, !0);
              return l && l.getTime() === n.getTime() ? a : !a;
            }
            if (
              "object" == typeof o &&
              void 0 !== n &&
              o.from &&
              o.to &&
              n.getTime() >= o.from.getTime() &&
              n.getTime() <= o.to.getTime()
            )
              return a;
          }
          return !a;
        }
        function ne(e) {
          return (
            void 0 !== h.daysContainer &&
            -1 === e.className.indexOf("hidden") &&
            h.daysContainer.contains(e)
          );
        }
        function ae(e) {
          var t = e.target === h._input,
            n = h.config.allowInput,
            a = h.isOpen && (!n || !t),
            r = h.config.inline && t && !n;
          if (13 === e.keyCode && t) {
            if (n)
              return (
                h.setDate(
                  h._input.value,
                  !0,
                  e.target === h.altInput
                    ? h.config.altFormat
                    : h.config.dateFormat
                ),
                e.target.blur()
              );
            h.open();
          } else if (Q(e.target) || a || r) {
            var i = !!h.timeContainer && h.timeContainer.contains(e.target);
            switch (e.keyCode) {
              case 13:
                i ? (e.preventDefault(), E(), fe()) : pe(e);
                break;
              case 27:
                e.preventDefault(), fe();
                break;
              case 8:
              case 46:
                t && !h.config.allowInput && (e.preventDefault(), h.clear());
                break;
              case 37:
              case 39:
                if (i || t) h.hourElement && h.hourElement.focus();
                else if (
                  (e.preventDefault(),
                  void 0 !== h.daysContainer &&
                    (!1 === n ||
                      (document.activeElement && ne(document.activeElement))))
                ) {
                  var o = 39 === e.keyCode ? 1 : -1;
                  e.ctrlKey
                    ? (e.stopPropagation(), Z(o), z(B(1), 0))
                    : z(void 0, o);
                }
                break;
              case 38:
              case 40:
                e.preventDefault();
                var l = 40 === e.keyCode ? 1 : -1;
                (h.daysContainer && void 0 !== e.target.$i) ||
                e.target === h.input
                  ? e.ctrlKey
                    ? (e.stopPropagation(), ee(h.currentYear - l), z(B(1), 0))
                    : i || z(void 0, 7 * l)
                  : e.target === h.currentYearElement
                  ? ee(h.currentYear - l)
                  : h.config.enableTime &&
                    (!i && h.hourElement && h.hourElement.focus(),
                    E(e),
                    h._debouncedChange());
                break;
              case 9:
                if (i) {
                  var c = [
                      h.hourElement,
                      h.minuteElement,
                      h.secondElement,
                      h.amPM
                    ]
                      .concat(h.pluginElements)
                      .filter(function(e) {
                        return e;
                      }),
                    d = c.indexOf(e.target);
                  if (-1 !== d) {
                    var s = c[d + (e.shiftKey ? -1 : 1)];
                    e.preventDefault(), (s || h._input).focus();
                  }
                } else
                  !h.config.noCalendar &&
                    h.daysContainer &&
                    h.daysContainer.contains(e.target) &&
                    e.shiftKey &&
                    (e.preventDefault(), h._input.focus());
            }
          }
          if (void 0 !== h.amPM && e.target === h.amPM)
            switch (e.key) {
              case h.l10n.amPM[0].charAt(0):
              case h.l10n.amPM[0].charAt(0).toLowerCase():
                (h.amPM.textContent = h.l10n.amPM[0]), I(), ke();
                break;
              case h.l10n.amPM[1].charAt(0):
              case h.l10n.amPM[1].charAt(0).toLowerCase():
                (h.amPM.textContent = h.l10n.amPM[1]), I(), ke();
            }
          (t || Q(e.target)) && he("onKeyDown", e);
        }
        function re(e) {
          if (
            1 === h.selectedDates.length &&
            (!e ||
              (e.classList.contains("flatpickr-day") &&
                !e.classList.contains("flatpickr-disabled")))
          ) {
            for (
              var t = e
                  ? e.dateObj.getTime()
                  : h.days.firstElementChild.dateObj.getTime(),
                n = h.parseDate(h.selectedDates[0], void 0, !0).getTime(),
                a = Math.min(t, h.selectedDates[0].getTime()),
                r = Math.max(t, h.selectedDates[0].getTime()),
                i = !1,
                o = 0,
                l = 0,
                c = a;
              c < r;
              c += k.DAY
            )
              te(new Date(c), !0) ||
                ((i = i || (c > a && c < r)),
                c < n && (!o || c > o)
                  ? (o = c)
                  : c > n && (!l || c < l) && (l = c));
            for (var d = 0; d < h.config.showMonths; d++)
              for (
                var s = h.daysContainer.children[d],
                  f = function(a, r) {
                    var c = s.children[a],
                      d = c.dateObj,
                      f = d.getTime(),
                      p = (o > 0 && f < o) || (l > 0 && f > l);
                    return p
                      ? (c.classList.add("notAllowed"),
                        ["inRange", "startRange", "endRange"].forEach(function(
                          e
                        ) {
                          c.classList.remove(e);
                        }),
                        "continue")
                      : i && !p
                      ? "continue"
                      : ([
                          "startRange",
                          "inRange",
                          "endRange",
                          "notAllowed"
                        ].forEach(function(e) {
                          c.classList.remove(e);
                        }),
                        void (
                          void 0 !== e &&
                          (e.classList.add(
                            t <= h.selectedDates[0].getTime()
                              ? "startRange"
                              : "endRange"
                          ),
                          n < t && f === n
                            ? c.classList.add("startRange")
                            : n > t && f === n && c.classList.add("endRange"),
                          f >= o &&
                            (0 === l || f <= l) &&
                            w(f, n, t) &&
                            c.classList.add("inRange"))
                        ));
                  },
                  p = 0,
                  u = s.children.length;
                p < u;
                p++
              )
                f(p);
          }
        }
        function ie() {
          !h.isOpen || h.config.static || h.config.inline || de();
        }
        function oe() {
          h.setDate(
            void 0 !== h.config.minDate
              ? new Date(h.config.minDate.getTime())
              : new Date(),
            !0
          ),
            S(),
            ke();
        }
        function le(e) {
          return function(t) {
            var n = (h.config["_" + e + "Date"] = h.parseDate(
                t,
                h.config.dateFormat
              )),
              a = h.config["_" + ("min" === e ? "max" : "min") + "Date"];
            void 0 !== n &&
              (h["min" === e ? "minDateHasTime" : "maxDateHasTime"] =
                n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0),
              h.selectedDates &&
                ((h.selectedDates = h.selectedDates.filter(function(e) {
                  return te(e);
                })),
                h.selectedDates.length || "min" !== e || T(n),
                ke()),
              h.daysContainer &&
                (se(),
                void 0 !== n
                  ? (h.currentYearElement[e] = n.getFullYear().toString())
                  : h.currentYearElement.removeAttribute(e),
                (h.currentYearElement.disabled =
                  !!a && void 0 !== n && a.getFullYear() === n.getFullYear()));
          };
        }
        function ce() {
          "object" != typeof h.config.locale &&
            void 0 === C.l10ns[h.config.locale] &&
            h.config.errorHandler(
              new Error("flatpickr: invalid locale " + h.config.locale)
            ),
            (h.l10n = e(
              {},
              C.l10ns.default,
              "object" == typeof h.config.locale
                ? h.config.locale
                : "default" !== h.config.locale
                ? C.l10ns[h.config.locale]
                : void 0
            )),
            (g.K =
              "(" +
              h.l10n.amPM[0] +
              "|" +
              h.l10n.amPM[1] +
              "|" +
              h.l10n.amPM[0].toLowerCase() +
              "|" +
              h.l10n.amPM[1].toLowerCase() +
              ")");
          var t = e({}, m, JSON.parse(JSON.stringify(p.dataset || {})));
          void 0 === t.time_24hr &&
            void 0 === C.defaultConfig.time_24hr &&
            (h.config.time_24hr = h.l10n.time_24hr),
            (h.formatDate = b(h)),
            (h.parseDate = v({ config: h.config, l10n: h.l10n }));
        }
        function de(e) {
          if (void 0 !== h.calendarContainer) {
            he("onPreCalendarPosition");
            var t = e || h._positionElement,
              n = Array.prototype.reduce.call(
                h.calendarContainer.children,
                function(e, t) {
                  return e + t.offsetHeight;
                },
                0
              ),
              a = h.calendarContainer.offsetWidth,
              r = h.config.position.split(" "),
              i = r[0],
              o = r.length > 1 ? r[1] : null,
              l = t.getBoundingClientRect(),
              d = window.innerHeight - l.bottom,
              s = "above" === i || ("below" !== i && d < n && l.top > n),
              f =
                window.pageYOffset + l.top + (s ? -n - 2 : t.offsetHeight + 2);
            if (
              (c(h.calendarContainer, "arrowTop", !s),
              c(h.calendarContainer, "arrowBottom", s),
              !h.config.inline)
            ) {
              var p =
                  window.pageXOffset +
                  l.left -
                  (null != o && "center" === o ? (a - l.width) / 2 : 0),
                u = window.document.body.offsetWidth - l.right,
                m = p + a > window.document.body.offsetWidth,
                g = u + a > window.document.body.offsetWidth;
              if ((c(h.calendarContainer, "rightMost", m), !h.config.static))
                if (((h.calendarContainer.style.top = f + "px"), m))
                  if (g) {
                    var b = document.styleSheets[0];
                    if (void 0 === b) return;
                    var v = window.document.body.offsetWidth,
                      y = Math.max(0, v / 2 - a / 2),
                      w = b.cssRules.length,
                      k = "{left:" + l.left + "px;right:auto;}";
                    c(h.calendarContainer, "rightMost", !1),
                      c(h.calendarContainer, "centerMost", !0),
                      b.insertRule(
                        ".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" +
                          k,
                        w
                      ),
                      (h.calendarContainer.style.left = y + "px"),
                      (h.calendarContainer.style.right = "auto");
                  } else
                    (h.calendarContainer.style.left = "auto"),
                      (h.calendarContainer.style.right = u + "px");
                else
                  (h.calendarContainer.style.left = p + "px"),
                    (h.calendarContainer.style.right = "auto");
            }
          }
        }
        function se() {
          h.config.noCalendar || h.isMobile || (ye(), J());
        }
        function fe() {
          h._input.focus(),
            -1 !== window.navigator.userAgent.indexOf("MSIE") ||
            void 0 !== navigator.msMaxTouchPoints
              ? setTimeout(h.close, 0)
              : h.close();
        }
        function pe(e) {
          e.preventDefault(), e.stopPropagation();
          var t = (function e(t, n) {
            return n(t) ? t : t.parentNode ? e(t.parentNode, n) : void 0;
          })(e.target, function(e) {
            return (
              e.classList &&
              e.classList.contains("flatpickr-day") &&
              !e.classList.contains("flatpickr-disabled") &&
              !e.classList.contains("notAllowed")
            );
          });
          if (void 0 !== t) {
            var n = t,
              a = (h.latestSelectedDateObj = new Date(n.dateObj.getTime())),
              r =
                (a.getMonth() < h.currentMonth ||
                  a.getMonth() > h.currentMonth + h.config.showMonths - 1) &&
                "range" !== h.config.mode;
            if (((h.selectedDateElem = n), "single" === h.config.mode))
              h.selectedDates = [a];
            else if ("multiple" === h.config.mode) {
              var i = ve(a);
              i
                ? h.selectedDates.splice(parseInt(i), 1)
                : h.selectedDates.push(a);
            } else
              "range" === h.config.mode &&
                (2 === h.selectedDates.length && h.clear(!1, !1),
                (h.latestSelectedDateObj = a),
                h.selectedDates.push(a),
                0 !== y(a, h.selectedDates[0], !0) &&
                  h.selectedDates.sort(function(e, t) {
                    return e.getTime() - t.getTime();
                  }));
            if ((I(), r)) {
              var o = h.currentYear !== a.getFullYear();
              (h.currentYear = a.getFullYear()),
                (h.currentMonth = a.getMonth()),
                o && (he("onYearChange"), $()),
                he("onMonthChange");
            }
            if (
              (ye(),
              J(),
              ke(),
              h.config.enableTime &&
                setTimeout(function() {
                  return (h.showTimeInput = !0);
                }, 50),
              r || "range" === h.config.mode || 1 !== h.config.showMonths
                ? void 0 !== h.selectedDateElem &&
                  void 0 === h.hourElement &&
                  h.selectedDateElem &&
                  h.selectedDateElem.focus()
                : W(n),
              void 0 !== h.hourElement &&
                void 0 !== h.hourElement &&
                h.hourElement.focus(),
              h.config.closeOnSelect)
            ) {
              var l = "single" === h.config.mode && !h.config.enableTime,
                c =
                  "range" === h.config.mode &&
                  2 === h.selectedDates.length &&
                  !h.config.enableTime;
              (l || c) && fe();
            }
            A();
          }
        }
        (h.parseDate = v({ config: h.config, l10n: h.l10n })),
          (h._handlers = []),
          (h.pluginElements = []),
          (h.loadedPlugins = []),
          (h._bind = N),
          (h._setHoursFromDate = T),
          (h._positionCalendar = de),
          (h.changeMonth = Z),
          (h.changeYear = ee),
          (h.clear = function(e, t) {
            void 0 === e && (e = !0),
              void 0 === t && (t = !0),
              (h.input.value = ""),
              void 0 !== h.altInput && (h.altInput.value = ""),
              void 0 !== h.mobileInput && (h.mobileInput.value = ""),
              (h.selectedDates = []),
              (h.latestSelectedDateObj = void 0),
              !0 === t &&
                ((h.currentYear = h._initialDate.getFullYear()),
                (h.currentMonth = h._initialDate.getMonth())),
              (h.showTimeInput = !1),
              !0 === h.config.enableTime && S(),
              h.redraw(),
              e && he("onChange");
          }),
          (h.close = function() {
            (h.isOpen = !1),
              h.isMobile ||
                (void 0 !== h.calendarContainer &&
                  h.calendarContainer.classList.remove("open"),
                void 0 !== h._input && h._input.classList.remove("active")),
              he("onClose");
          }),
          (h._createElement = d),
          (h.destroy = function() {
            void 0 !== h.config && he("onDestroy");
            for (var e = h._handlers.length; e--; ) {
              var t = h._handlers[e];
              t.element.removeEventListener(t.event, t.handler, t.options);
            }
            if (((h._handlers = []), h.mobileInput))
              h.mobileInput.parentNode &&
                h.mobileInput.parentNode.removeChild(h.mobileInput),
                (h.mobileInput = void 0);
            else if (h.calendarContainer && h.calendarContainer.parentNode)
              if (h.config.static && h.calendarContainer.parentNode) {
                var n = h.calendarContainer.parentNode;
                if ((n.lastChild && n.removeChild(n.lastChild), n.parentNode)) {
                  for (; n.firstChild; )
                    n.parentNode.insertBefore(n.firstChild, n);
                  n.parentNode.removeChild(n);
                }
              } else
                h.calendarContainer.parentNode.removeChild(h.calendarContainer);
            h.altInput &&
              ((h.input.type = "text"),
              h.altInput.parentNode &&
                h.altInput.parentNode.removeChild(h.altInput),
              delete h.altInput),
              h.input &&
                ((h.input.type = h.input._type),
                h.input.classList.remove("flatpickr-input"),
                h.input.removeAttribute("readonly"),
                (h.input.value = "")),
              [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config"
              ].forEach(function(e) {
                try {
                  delete h[e];
                } catch (e) {}
              });
          }),
          (h.isEnabled = te),
          (h.jumpToDate = L),
          (h.open = function(e, t) {
            if ((void 0 === t && (t = h._positionElement), !0 === h.isMobile))
              return (
                e && (e.preventDefault(), e.target && e.target.blur()),
                void 0 !== h.mobileInput &&
                  (h.mobileInput.focus(), h.mobileInput.click()),
                void he("onOpen")
              );
            if (!h._input.disabled && !h.config.inline) {
              var n = h.isOpen;
              (h.isOpen = !0),
                n ||
                  (h.calendarContainer.classList.add("open"),
                  h._input.classList.add("active"),
                  he("onOpen"),
                  de(t)),
                !0 === h.config.enableTime &&
                  !0 === h.config.noCalendar &&
                  (0 === h.selectedDates.length && oe(),
                  !1 !== h.config.allowInput ||
                    (void 0 !== e &&
                      h.timeContainer.contains(e.relatedTarget)) ||
                    setTimeout(function() {
                      return h.hourElement.select();
                    }, 50));
            }
          }),
          (h.redraw = se),
          (h.set = function(e, n) {
            if (null !== e && "object" == typeof e)
              for (var a in (Object.assign(h.config, e), e))
                void 0 !== ue[a] &&
                  ue[a].forEach(function(e) {
                    return e();
                  });
            else
              (h.config[e] = n),
                void 0 !== ue[e]
                  ? ue[e].forEach(function(e) {
                      return e();
                    })
                  : t.indexOf(e) > -1 && (h.config[e] = l(n));
            h.redraw(), ke(!1);
          }),
          (h.setDate = function(e, t, n) {
            if (
              (void 0 === t && (t = !1),
              void 0 === n && (n = h.config.dateFormat),
              (0 !== e && !e) || (e instanceof Array && 0 === e.length))
            )
              return h.clear(t);
            me(e, n),
              (h.showTimeInput = h.selectedDates.length > 0),
              (h.latestSelectedDateObj =
                h.selectedDates[h.selectedDates.length - 1]),
              h.redraw(),
              L(),
              T(),
              0 === h.selectedDates.length && h.clear(!1),
              ke(t),
              t && he("onChange");
          }),
          (h.toggle = function(e) {
            if (!0 === h.isOpen) return h.close();
            h.open(e);
          });
        var ue = {
          locale: [ce, V],
          showMonths: [K, M, G],
          minDate: [L],
          maxDate: [L]
        };
        function me(e, t) {
          var n = [];
          if (e instanceof Array)
            n = e.map(function(e) {
              return h.parseDate(e, t);
            });
          else if (e instanceof Date || "number" == typeof e)
            n = [h.parseDate(e, t)];
          else if ("string" == typeof e)
            switch (h.config.mode) {
              case "single":
              case "time":
                n = [h.parseDate(e, t)];
                break;
              case "multiple":
                n = e.split(h.config.conjunction).map(function(e) {
                  return h.parseDate(e, t);
                });
                break;
              case "range":
                n = e.split(h.l10n.rangeSeparator).map(function(e) {
                  return h.parseDate(e, t);
                });
            }
          else
            h.config.errorHandler(
              new Error("Invalid date supplied: " + JSON.stringify(e))
            );
          (h.selectedDates = n.filter(function(e) {
            return e instanceof Date && te(e, !1);
          })),
            "range" === h.config.mode &&
              h.selectedDates.sort(function(e, t) {
                return e.getTime() - t.getTime();
              });
        }
        function ge(e) {
          return e
            .slice()
            .map(function(e) {
              return "string" == typeof e ||
                "number" == typeof e ||
                e instanceof Date
                ? h.parseDate(e, void 0, !0)
                : e && "object" == typeof e && e.from && e.to
                ? {
                    from: h.parseDate(e.from, void 0),
                    to: h.parseDate(e.to, void 0)
                  }
                : e;
            })
            .filter(function(e) {
              return e;
            });
        }
        function he(e, t) {
          if (void 0 !== h.config) {
            var n = h.config[e];
            if (void 0 !== n && n.length > 0)
              for (var a = 0; n[a] && a < n.length; a++)
                n[a](h.selectedDates, h.input.value, h, t);
            "onChange" === e &&
              (h.input.dispatchEvent(be("change")),
              h.input.dispatchEvent(be("input")));
          }
        }
        function be(e) {
          var t = document.createEvent("Event");
          return t.initEvent(e, !0, !0), t;
        }
        function ve(e) {
          for (var t = 0; t < h.selectedDates.length; t++)
            if (0 === y(h.selectedDates[t], e)) return "" + t;
          return !1;
        }
        function ye() {
          h.config.noCalendar ||
            h.isMobile ||
            !h.monthNav ||
            (h.yearElements.forEach(function(e, t) {
              var n = new Date(h.currentYear, h.currentMonth, 1);
              n.setMonth(h.currentMonth + t),
                h.config.showMonths > 1
                  ? (h.monthElements[t].textContent =
                      u(n.getMonth(), h.config.shorthandCurrentMonth, h.l10n) +
                      " ")
                  : (h.monthsDropdownContainer.value = n.getMonth().toString()),
                (e.value = n.getFullYear().toString());
            }),
            (h._hidePrevMonthArrow =
              void 0 !== h.config.minDate &&
              (h.currentYear === h.config.minDate.getFullYear()
                ? h.currentMonth <= h.config.minDate.getMonth()
                : h.currentYear < h.config.minDate.getFullYear())),
            (h._hideNextMonthArrow =
              void 0 !== h.config.maxDate &&
              (h.currentYear === h.config.maxDate.getFullYear()
                ? h.currentMonth + 1 > h.config.maxDate.getMonth()
                : h.currentYear > h.config.maxDate.getFullYear())));
        }
        function we(e) {
          return h.selectedDates
            .map(function(t) {
              return h.formatDate(t, e);
            })
            .filter(function(e, t, n) {
              return (
                "range" !== h.config.mode ||
                h.config.enableTime ||
                n.indexOf(e) === t
              );
            })
            .join(
              "range" !== h.config.mode
                ? h.config.conjunction
                : h.l10n.rangeSeparator
            );
        }
        function ke(e) {
          void 0 === e && (e = !0),
            void 0 !== h.mobileInput &&
              h.mobileFormatStr &&
              (h.mobileInput.value =
                void 0 !== h.latestSelectedDateObj
                  ? h.formatDate(h.latestSelectedDateObj, h.mobileFormatStr)
                  : ""),
            (h.input.value = we(h.config.dateFormat)),
            void 0 !== h.altInput &&
              (h.altInput.value = we(h.config.altFormat)),
            !1 !== e && he("onValueUpdate");
        }
        function xe(e) {
          var t = h.prevMonthNav.contains(e.target),
            n = h.nextMonthNav.contains(e.target);
          t || n
            ? Z(t ? -1 : 1)
            : h.yearElements.indexOf(e.target) >= 0
            ? e.target.select()
            : e.target.classList.contains("arrowUp")
            ? h.changeYear(h.currentYear + 1)
            : e.target.classList.contains("arrowDown") &&
              h.changeYear(h.currentYear - 1);
        }
        return (
          (function() {
            (h.element = h.input = p),
              (h.isOpen = !1),
              (function() {
                var a = [
                    "wrap",
                    "weekNumbers",
                    "allowInput",
                    "clickOpens",
                    "time_24hr",
                    "enableTime",
                    "noCalendar",
                    "altInput",
                    "shorthandCurrentMonth",
                    "inline",
                    "static",
                    "enableSeconds",
                    "disableMobile"
                  ],
                  r = e({}, m, JSON.parse(JSON.stringify(p.dataset || {}))),
                  i = {};
                (h.config.parseDate = r.parseDate),
                  (h.config.formatDate = r.formatDate),
                  Object.defineProperty(h.config, "enable", {
                    get: function() {
                      return h.config._enable;
                    },
                    set: function(e) {
                      h.config._enable = ge(e);
                    }
                  }),
                  Object.defineProperty(h.config, "disable", {
                    get: function() {
                      return h.config._disable;
                    },
                    set: function(e) {
                      h.config._disable = ge(e);
                    }
                  });
                var o = "time" === r.mode;
                if (!r.dateFormat && (r.enableTime || o)) {
                  var c = C.defaultConfig.dateFormat || n.dateFormat;
                  i.dateFormat =
                    r.noCalendar || o
                      ? "H:i" + (r.enableSeconds ? ":S" : "")
                      : c + " H:i" + (r.enableSeconds ? ":S" : "");
                }
                if (r.altInput && (r.enableTime || o) && !r.altFormat) {
                  var d = C.defaultConfig.altFormat || n.altFormat;
                  i.altFormat =
                    r.noCalendar || o
                      ? "h:i" + (r.enableSeconds ? ":S K" : " K")
                      : d + " h:i" + (r.enableSeconds ? ":S" : "") + " K";
                }
                r.altInputClass ||
                  (h.config.altInputClass =
                    h.input.className + " " + h.config.altInputClass),
                  Object.defineProperty(h.config, "minDate", {
                    get: function() {
                      return h.config._minDate;
                    },
                    set: le("min")
                  }),
                  Object.defineProperty(h.config, "maxDate", {
                    get: function() {
                      return h.config._maxDate;
                    },
                    set: le("max")
                  });
                var s = function(e) {
                  return function(t) {
                    h.config[
                      "min" === e ? "_minTime" : "_maxTime"
                    ] = h.parseDate(t, "H:i");
                  };
                };
                Object.defineProperty(h.config, "minTime", {
                  get: function() {
                    return h.config._minTime;
                  },
                  set: s("min")
                }),
                  Object.defineProperty(h.config, "maxTime", {
                    get: function() {
                      return h.config._maxTime;
                    },
                    set: s("max")
                  }),
                  "time" === r.mode &&
                    ((h.config.noCalendar = !0), (h.config.enableTime = !0)),
                  Object.assign(h.config, i, r);
                for (var f = 0; f < a.length; f++)
                  h.config[a[f]] =
                    !0 === h.config[a[f]] || "true" === h.config[a[f]];
                t
                  .filter(function(e) {
                    return void 0 !== h.config[e];
                  })
                  .forEach(function(e) {
                    h.config[e] = l(h.config[e] || []).map(D);
                  }),
                  (h.isMobile =
                    !h.config.disableMobile &&
                    !h.config.inline &&
                    "single" === h.config.mode &&
                    !h.config.disable.length &&
                    !h.config.enable.length &&
                    !h.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    ));
                for (var f = 0; f < h.config.plugins.length; f++) {
                  var u = h.config.plugins[f](h) || {};
                  for (var g in u)
                    t.indexOf(g) > -1
                      ? (h.config[g] = l(u[g])
                          .map(D)
                          .concat(h.config[g]))
                      : void 0 === r[g] && (h.config[g] = u[g]);
                }
                he("onParseConfig");
              })(),
              ce(),
              (h.input = h.config.wrap ? p.querySelector("[data-input]") : p),
              h.input
                ? ((h.input._type = h.input.type),
                  (h.input.type = "text"),
                  h.input.classList.add("flatpickr-input"),
                  (h._input = h.input),
                  h.config.altInput &&
                    ((h.altInput = d(h.input.nodeName, h.config.altInputClass)),
                    (h._input = h.altInput),
                    (h.altInput.placeholder = h.input.placeholder),
                    (h.altInput.disabled = h.input.disabled),
                    (h.altInput.required = h.input.required),
                    (h.altInput.tabIndex = h.input.tabIndex),
                    (h.altInput.type = "text"),
                    h.input.setAttribute("type", "hidden"),
                    !h.config.static &&
                      h.input.parentNode &&
                      h.input.parentNode.insertBefore(
                        h.altInput,
                        h.input.nextSibling
                      )),
                  h.config.allowInput ||
                    h._input.setAttribute("readonly", "readonly"),
                  (h._positionElement = h.config.positionElement || h._input))
                : h.config.errorHandler(
                    new Error("Invalid input element specified")
                  ),
              (function() {
                (h.selectedDates = []),
                  (h.now = h.parseDate(h.config.now) || new Date());
                var e =
                  h.config.defaultDate ||
                  (("INPUT" !== h.input.nodeName &&
                    "TEXTAREA" !== h.input.nodeName) ||
                  !h.input.placeholder ||
                  h.input.value !== h.input.placeholder
                    ? h.input.value
                    : null);
                e && me(e, h.config.dateFormat),
                  (h._initialDate =
                    h.selectedDates.length > 0
                      ? h.selectedDates[0]
                      : h.config.minDate &&
                        h.config.minDate.getTime() > h.now.getTime()
                      ? h.config.minDate
                      : h.config.maxDate &&
                        h.config.maxDate.getTime() < h.now.getTime()
                      ? h.config.maxDate
                      : h.now),
                  (h.currentYear = h._initialDate.getFullYear()),
                  (h.currentMonth = h._initialDate.getMonth()),
                  h.selectedDates.length > 0 &&
                    (h.latestSelectedDateObj = h.selectedDates[0]),
                  void 0 !== h.config.minTime &&
                    (h.config.minTime = h.parseDate(h.config.minTime, "H:i")),
                  void 0 !== h.config.maxTime &&
                    (h.config.maxTime = h.parseDate(h.config.maxTime, "H:i")),
                  (h.minDateHasTime =
                    !!h.config.minDate &&
                    (h.config.minDate.getHours() > 0 ||
                      h.config.minDate.getMinutes() > 0 ||
                      h.config.minDate.getSeconds() > 0)),
                  (h.maxDateHasTime =
                    !!h.config.maxDate &&
                    (h.config.maxDate.getHours() > 0 ||
                      h.config.maxDate.getMinutes() > 0 ||
                      h.config.maxDate.getSeconds() > 0)),
                  Object.defineProperty(h, "showTimeInput", {
                    get: function() {
                      return h._showTimeInput;
                    },
                    set: function(e) {
                      (h._showTimeInput = e),
                        h.calendarContainer &&
                          c(h.calendarContainer, "showTimeInput", e),
                        h.isOpen && de();
                    }
                  });
              })(),
              (h.utils = {
                getDaysInMonth: function(e, t) {
                  return (
                    void 0 === e && (e = h.currentMonth),
                    void 0 === t && (t = h.currentYear),
                    1 === e && ((t % 4 == 0 && t % 100 != 0) || t % 400 == 0)
                      ? 29
                      : h.l10n.daysInMonth[e]
                  );
                }
              }),
              h.isMobile || Y(),
              F(),
              (h.selectedDates.length || h.config.noCalendar) &&
                (h.config.enableTime &&
                  T(
                    h.config.noCalendar
                      ? h.latestSelectedDateObj || h.config.minDate
                      : void 0
                  ),
                ke(!1)),
              M(),
              (h.showTimeInput =
                h.selectedDates.length > 0 || h.config.noCalendar);
            var a = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            !h.isMobile && a && de(), he("onReady");
          })(),
          h
        );
      }
      function M(e, t) {
        for (
          var n = Array.prototype.slice.call(e).filter(function(e) {
              return e instanceof HTMLElement;
            }),
            a = [],
            r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r];
          try {
            if (null !== i.getAttribute("data-fp-omit")) continue;
            void 0 !== i._flatpickr &&
              (i._flatpickr.destroy(), (i._flatpickr = void 0)),
              (i._flatpickr = D(i, t || {})),
              a.push(i._flatpickr);
          } catch (e) {
            console.error(e);
          }
        }
        return 1 === a.length ? a[0] : a;
      }
      "undefined" != typeof HTMLElement &&
        "undefined" != typeof HTMLCollection &&
        "undefined" != typeof NodeList &&
        ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(
          e
        ) {
          return M(this, e);
        }),
        (HTMLElement.prototype.flatpickr = function(e) {
          return M([this], e);
        }));
      var C = function(e, t) {
        return "string" == typeof e
          ? M(window.document.querySelectorAll(e), t)
          : e instanceof Node
          ? M([e], t)
          : M(e, t);
      };
      return (
        (C.defaultConfig = {}),
        (C.l10ns = { en: e({}, a), default: e({}, a) }),
        (C.localize = function(t) {
          C.l10ns.default = e({}, C.l10ns.default, t);
        }),
        (C.setDefaults = function(t) {
          C.defaultConfig = e({}, C.defaultConfig, t);
        }),
        (C.parseDate = v({})),
        (C.formatDate = b({})),
        (C.compareDates = y),
        "undefined" != typeof jQuery &&
          void 0 !== jQuery.fn &&
          (jQuery.fn.flatpickr = function(e) {
            return M(this, e);
          }),
        (Date.prototype.fp_incr = function(e) {
          return new Date(
            this.getFullYear(),
            this.getMonth(),
            this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e)
          );
        }),
        "undefined" != typeof window && (window.flatpickr = C),
        C
      );
    })();
  },
  function(e, t, n) {
    var a = n(2);
    "string" == typeof a && (a = [[e.i, a, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(4)(a, r);
    a.locals && (e.exports = a.locals);
  },
  function(e, t, n) {
    (e.exports = n(3)(!1)).push([
      e.i,
      '.flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px);}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:\'\';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.rightMost:after{left:auto;right:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:28px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;line-height:16px;height:28px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{/*\n      /*rtl:begin:ignore*/left:0;/*\n      /*rtl:end:ignore*/}/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{/*\n      /*rtl:begin:ignore*/right:0;/*\n      /*rtl:end:ignore*/}/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9;}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px;}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto;}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%;}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);-webkit-box-sizing:border-box;box-sizing:border-box;}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:"";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0;}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%;}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto;}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05);}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:6.16px 0 0 0;line-height:1;height:28px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0;}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block;}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:22px;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto;}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px;}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px;}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1;}.dayContainer + .dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9;}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left;}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-time:after{content:"";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left;}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}',
      ""
    ]);
  },
  function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || "",
                a = e[3];
              if (!a) return n;
              if (t && "function" == typeof btoa) {
                var r =
                    ((o = a),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                      " */"),
                  i = a.sources.map(function(e) {
                    return "/*# sourceURL=" + a.sourceRoot + e + " */";
                  });
                return [n]
                  .concat(i)
                  .concat([r])
                  .join("\n");
              }
              var o;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
          }).join("");
        }),
        (t.i = function(e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var a = {}, r = 0; r < this.length; r++) {
            var i = this[r][0];
            null != i && (a[i] = !0);
          }
          for (r = 0; r < e.length; r++) {
            var o = e[r];
            (null != o[0] && a[o[0]]) ||
              (n && !o[2]
                ? (o[2] = n)
                : n && (o[2] = "(" + o[2] + ") and (" + n + ")"),
              t.push(o));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    var a,
      r,
      i = {},
      o =
        ((a = function() {
          return window && document && document.all && !window.atob;
        }),
        function() {
          return void 0 === r && (r = a.apply(this, arguments)), r;
        }),
      l = (function(e) {
        var t = {};
        return function(e, n) {
          if ("function" == typeof e) return e();
          if (void 0 === t[e]) {
            var a = function(e, t) {
              return t ? t.querySelector(e) : document.querySelector(e);
            }.call(this, e, n);
            if (
              window.HTMLIFrameElement &&
              a instanceof window.HTMLIFrameElement
            )
              try {
                a = a.contentDocument.head;
              } catch (e) {
                a = null;
              }
            t[e] = a;
          }
          return t[e];
        };
      })(),
      c = null,
      d = 0,
      s = [],
      f = n(5);
    function p(e, t) {
      for (var n = 0; n < e.length; n++) {
        var a = e[n],
          r = i[a.id];
        if (r) {
          r.refs++;
          for (var o = 0; o < r.parts.length; o++) r.parts[o](a.parts[o]);
          for (; o < a.parts.length; o++) r.parts.push(v(a.parts[o], t));
        } else {
          var l = [];
          for (o = 0; o < a.parts.length; o++) l.push(v(a.parts[o], t));
          i[a.id] = { id: a.id, refs: 1, parts: l };
        }
      }
    }
    function u(e, t) {
      for (var n = [], a = {}, r = 0; r < e.length; r++) {
        var i = e[r],
          o = t.base ? i[0] + t.base : i[0],
          l = { css: i[1], media: i[2], sourceMap: i[3] };
        a[o] ? a[o].parts.push(l) : n.push((a[o] = { id: o, parts: [l] }));
      }
      return n;
    }
    function m(e, t) {
      var n = l(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var a = s[s.length - 1];
      if ("top" === e.insertAt)
        a
          ? a.nextSibling
            ? n.insertBefore(t, a.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          s.push(t);
      else if ("bottom" === e.insertAt) n.appendChild(t);
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var r = l(e.insertAt.before, n);
        n.insertBefore(t, r);
      }
    }
    function g(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = s.indexOf(e);
      t >= 0 && s.splice(t, 1);
    }
    function h(e) {
      var t = document.createElement("style");
      if (
        (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
        void 0 === e.attrs.nonce)
      ) {
        var a = (function() {
          0;
          return n.nc;
        })();
        a && (e.attrs.nonce = a);
      }
      return b(t, e.attrs), m(e, t), t;
    }
    function b(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n]);
      });
    }
    function v(e, t) {
      var n, a, r, i;
      if (t.transform && e.css) {
        if (
          !(i =
            "function" == typeof t.transform
              ? t.transform(e.css)
              : t.transform.default(e.css))
        )
          return function() {};
        e.css = i;
      }
      if (t.singleton) {
        var o = d++;
        (n = c || (c = h(t))),
          (a = k.bind(null, n, o, !1)),
          (r = k.bind(null, n, o, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = (function(e) {
              var t = document.createElement("link");
              return (
                void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                (e.attrs.rel = "stylesheet"),
                b(t, e.attrs),
                m(e, t),
                t
              );
            })(t)),
            (a = function(e, t, n) {
              var a = n.css,
                r = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && r;
              (t.convertToAbsoluteUrls || i) && (a = f(a));
              r &&
                (a +=
                  "\n/*# sourceMappingURL=data:application/json;base64," +
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                  " */");
              var o = new Blob([a], { type: "text/css" }),
                l = e.href;
              (e.href = URL.createObjectURL(o)), l && URL.revokeObjectURL(l);
            }.bind(null, n, t)),
            (r = function() {
              g(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = h(t)),
            (a = function(e, t) {
              var n = t.css,
                a = t.media;
              a && e.setAttribute("media", a);
              if (e.styleSheet) e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }.bind(null, n)),
            (r = function() {
              g(n);
            }));
      return (
        a(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            a((e = t));
          } else r();
        }
      );
    }
    e.exports = function(e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = o()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
      var n = u(e, t);
      return (
        p(n, t),
        function(e) {
          for (var a = [], r = 0; r < n.length; r++) {
            var o = n[r];
            (l = i[o.id]).refs--, a.push(l);
          }
          e && p(u(e, t), t);
          for (r = 0; r < a.length; r++) {
            var l;
            if (0 === (l = a[r]).refs) {
              for (var c = 0; c < l.parts.length; c++) l.parts[c]();
              delete i[l.id];
            }
          }
        }
      );
    };
    var y,
      w =
        ((y = []),
        function(e, t) {
          return (y[e] = t), y.filter(Boolean).join("\n");
        });
    function k(e, t, n, a) {
      var r = n ? "" : a.css;
      if (e.styleSheet) e.styleSheet.cssText = w(t, r);
      else {
        var i = document.createTextNode(r),
          o = e.childNodes;
        o[t] && e.removeChild(o[t]),
          o.length ? e.insertBefore(i, o[t]) : e.appendChild(i);
      }
    }
  },
  function(e, t) {
    e.exports = function(e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
        a = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
          var r,
            i = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? e
            : ((r =
                0 === i.indexOf("//")
                  ? i
                  : 0 === i.indexOf("/")
                  ? n + i
                  : a + i.replace(/^\.\//, "")),
              "url(" + JSON.stringify(r) + ")");
        }
      );
    };
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var a = () => {
      return localStorage.getItem("projects")
        ? JSON.parse(localStorage.getItem("projects"))
        : [];
    };
    var r = e => {
      const t = document.getElementById("display-projects");
      (t.innerHTML = ""),
        e.length > 0
          ? e.forEach(e => {
              t.innerHTML += `<div class='project' data-id=${e.id}>${e.name}</div>`;
            })
          : (t.innerHTML = "No projects yet! Add one");
    };
    var i = () => {
      document.querySelectorAll(".todo-title h3").forEach(function(e) {
        e.addEventListener("click", function() {
          let t = e.parentElement.nextElementSibling;
          "none" === t.style.display
            ? (t.style.display = "block")
            : (t.style.display = "none");
        });
      });
    };
    var o = e => {
      let t = a(),
        n = t.find(t => t.id === e),
        r = n.todo;
      document
        .querySelectorAll('.todo-title input[type="checkbox"]')
        .forEach(function(e) {
          e.addEventListener("click", () => {
            let a = e.parentNode.parentNode.id,
              i = r.findIndex(e => e.id === a);
            return (
              r.splice(i, 1),
              (n.todo = r),
              localStorage.setItem("projects", JSON.stringify(t)),
              l(n),
              n
            );
          });
        });
    };
    var l = e => {
      const t = document.getElementById("todo-form"),
        n = document.getElementById("display-todos"),
        a = document.getElementById("show-todo-form");
      (t.style.display = "none"),
        "none" === a.style.display
          ? (a.style.display = "block")
          : a.style.display,
        (n.innerHTML = "");
      let r = "";
      e.todo.length > 0
        ? e.todo.forEach(e => {
            r += `<div id="${e.id}" class="todo-row ${e.priority}">\n                <div class="todo-title">\n                    <h3>${e.title}</h3><span>${e.duedate}</span>\n                    <input type="checkbox" name="done" id="checkbox-${e.id}"><label for="checkbox-${e.id}">Done?</label>\n                </div>\n                <div class="todo-details" style="display:none;">\n                    <p class="todo-description">${e.description}</p>\n                </div>\n            </div>`;
          })
        : (r = "No Todo yet!"),
        (n.innerHTML += r);
      let l = e.id;
      o(l), i();
    };
    var c = () => {
      (document.getElementById("title").value = ""),
        (document.getElementById("description").value = ""),
        (document.getElementById("priority").checked = !1),
        (document.getElementById("duedate").value = "");
    };
    var d = () => {
      const e = document.getElementById("show-todo-form"),
        t = document.getElementById("hide-todo-form"),
        n = document.getElementById("todo-form");
      e.addEventListener("click", function() {
        n.style.display = "block";
      }),
        t.addEventListener("click", function() {
          c(), (n.style.display = "none");
        });
    };
    const s = () => {
      let e,
        t = document.getElementById("title").value,
        n = document.getElementById("description").value,
        a = document.getElementById("duedate").value,
        r = t.replace(/\W/g, "").toLowerCase();
      return ((e, t, n, a, r) => ({
        title: e,
        description: t,
        priority: n,
        duedate: a,
        id: r
      }))(
        t,
        n.replace(/\n\r?/g, "<br>"),
        (e =
          !0 === document.getElementById("priority").checked
            ? "priority-on"
            : "priority-off"),
        a,
        r
      );
    };
    var f = e => {
      document
        .getElementById("todo-form")
        .addEventListener("submit", function() {
          event.preventDefault();
          let t = a(),
            n = t.find(t => t.id === e),
            r = s();
          return (
            n.todo.push(r),
            localStorage.setItem("projects", JSON.stringify(t)),
            l(n),
            c(),
            t
          );
        });
    };
    var p = () => {
      document.getElementById("go-home").addEventListener("click", () => {
        location.reload(!0);
      });
    };
    var u = e => {
        let t = a(),
          n = t.findIndex(t => t.id === e);
        document
          .getElementById("delete-project")
          .addEventListener("click", () => {
            window.confirm("Delete this project?") &&
              (t.splice(n, 1),
              localStorage.setItem("projects", JSON.stringify(t)),
              location.reload(!0));
          });
      },
      m = n(0),
      g = n.n(m);
    n(1);
    g()("#duedate", {
      disableMobile: !0,
      dateFormat: "d/m/Y",
      minDate: new Date()
    });
    var h = () => {
      let e = a();
      const t = document.getElementById("display-projects");
      document.querySelectorAll(".project").forEach(n => {
        n.addEventListener("click", function() {
          document.getElementById("project-form").style.display = "none";
          let a = n.dataset.id,
            r = e.find(e => e.id === a);
          (t.innerHTML = `<div>${r.name}</div>\n                <div class='btn-container'>\n                    <button id='show-todo-form'>Add a Todo</button>\n                    <button id='go-home' class='btn-alt'>Go Home</button>\n                    <div id='delete-project'>Delete project</div>\n                </div>`),
            l(r),
            d(),
            f(a),
            u(a),
            p();
        });
      });
    };
    const b = () => {
      let e = document.getElementById("project-name").value;
      return ((e, t, n) => ({ id: e, name: t, todo: n }))(
        e.replace(/\W/g, "").toLowerCase(),
        e,
        []
      );
    };
    var v = () => {
      let e = a();
      document
        .getElementById("project-form")
        .addEventListener("submit", function() {
          event.preventDefault();
          let t = b();
          return (
            e.push(t),
            localStorage.setItem("projects", JSON.stringify(e)),
            r(e),
            h(),
            (document.getElementById("project-name").value = ""),
            e
          );
        });
    };
    var y = () => {
      let e;
      document.querySelectorAll(".form-field input").forEach(e => {
        e.addEventListener("blur", () => {
          t(e);
        }),
          e.addEventListener("focus", () => {
            a(e);
          });
      });
      const t = t => {
          t.validity.valueMissing
            ? (n(t, "This field is required!"), (e = !1))
            : (a(t), (e = !0));
        },
        n = (e, t) => {
          e.classList.add("has-error");
          let n = document.createElement("span");
          n.classList.add("error-msg"),
            (n.innerHTML = t),
            e.nextElementSibling || e.parentNode.appendChild(n);
        },
        a = e => {
          let t = e.parentNode.querySelector(".error-msg");
          t && e.parentNode.removeChild(t), e.classList.remove("has-error");
        };
      return e;
    };
    let w = a();
    v(), r(w), h(), y();
  }
]);
