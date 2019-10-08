!(function(e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var i = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
        for (var i in e)
          n.d(
            a,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
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
    n((n.s = 8));
})([
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
                var i =
                    ((r = a),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                      " */"),
                  o = a.sources.map(function(e) {
                    return "/*# sourceURL=" + a.sourceRoot + e + " */";
                  });
                return [n]
                  .concat(o)
                  .concat([i])
                  .join("\n");
              }
              var r;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
          }).join("");
        }),
        (t.i = function(e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var a = {}, i = 0; i < this.length; i++) {
            var o = this[i][0];
            null != o && (a[o] = !0);
          }
          for (i = 0; i < e.length; i++) {
            var r = e[i];
            (null != r[0] && a[r[0]]) ||
              (n && !r[2]
                ? (r[2] = n)
                : n && (r[2] = "(" + r[2] + ") and (" + n + ")"),
              t.push(r));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    var a,
      i,
      o = {},
      r =
        ((a = function() {
          return window && document && document.all && !window.atob;
        }),
        function() {
          return void 0 === i && (i = a.apply(this, arguments)), i;
        }),
      l = function(e, t) {
        return t ? t.querySelector(e) : document.querySelector(e);
      },
      c = (function(e) {
        var t = {};
        return function(e, n) {
          if ("function" == typeof e) return e();
          if (void 0 === t[e]) {
            var a = l.call(this, e, n);
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
      d = null,
      s = 0,
      f = [],
      p = n(5);
    function u(e, t) {
      for (var n = 0; n < e.length; n++) {
        var a = e[n],
          i = o[a.id];
        if (i) {
          i.refs++;
          for (var r = 0; r < i.parts.length; r++) i.parts[r](a.parts[r]);
          for (; r < a.parts.length; r++) i.parts.push(y(a.parts[r], t));
        } else {
          var l = [];
          for (r = 0; r < a.parts.length; r++) l.push(y(a.parts[r], t));
          o[a.id] = { id: a.id, refs: 1, parts: l };
        }
      }
    }
    function m(e, t) {
      for (var n = [], a = {}, i = 0; i < e.length; i++) {
        var o = e[i],
          r = t.base ? o[0] + t.base : o[0],
          l = { css: o[1], media: o[2], sourceMap: o[3] };
        a[r] ? a[r].parts.push(l) : n.push((a[r] = { id: r, parts: [l] }));
      }
      return n;
    }
    function g(e, t) {
      var n = c(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var a = f[f.length - 1];
      if ("top" === e.insertAt)
        a
          ? a.nextSibling
            ? n.insertBefore(t, a.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          f.push(t);
      else if ("bottom" === e.insertAt) n.appendChild(t);
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var i = c(e.insertAt.before, n);
        n.insertBefore(t, i);
      }
    }
    function h(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = f.indexOf(e);
      t >= 0 && f.splice(t, 1);
    }
    function b(e) {
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
      return v(t, e.attrs), g(e, t), t;
    }
    function v(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n]);
      });
    }
    function y(e, t) {
      var n, a, i, o;
      if (t.transform && e.css) {
        if (
          !(o =
            "function" == typeof t.transform
              ? t.transform(e.css)
              : t.transform.default(e.css))
        )
          return function() {};
        e.css = o;
      }
      if (t.singleton) {
        var r = s++;
        (n = d || (d = b(t))),
          (a = k.bind(null, n, r, !1)),
          (i = k.bind(null, n, r, !0));
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
                v(t, e.attrs),
                g(e, t),
                t
              );
            })(t)),
            (a = M.bind(null, n, t)),
            (i = function() {
              h(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = b(t)),
            (a = D.bind(null, n)),
            (i = function() {
              h(n);
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
          } else i();
        }
      );
    }
    e.exports = function(e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = r()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
      var n = m(e, t);
      return (
        u(n, t),
        function(e) {
          for (var a = [], i = 0; i < n.length; i++) {
            var r = n[i];
            (l = o[r.id]).refs--, a.push(l);
          }
          e && u(m(e, t), t);
          for (i = 0; i < a.length; i++) {
            var l;
            if (0 === (l = a[i]).refs) {
              for (var c = 0; c < l.parts.length; c++) l.parts[c]();
              delete o[l.id];
            }
          }
        }
      );
    };
    var w,
      x =
        ((w = []),
        function(e, t) {
          return (w[e] = t), w.filter(Boolean).join("\n");
        });
    function k(e, t, n, a) {
      var i = n ? "" : a.css;
      if (e.styleSheet) e.styleSheet.cssText = x(t, i);
      else {
        var o = document.createTextNode(i),
          r = e.childNodes;
        r[t] && e.removeChild(r[t]),
          r.length ? e.insertBefore(o, r[t]) : e.appendChild(o);
      }
    }
    function D(e, t) {
      var n = t.css,
        a = t.media;
      if ((a && e.setAttribute("media", a), e.styleSheet))
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    function M(e, t, n) {
      var a = n.css,
        i = n.sourceMap,
        o = void 0 === t.convertToAbsoluteUrls && i;
      (t.convertToAbsoluteUrls || o) && (a = p(a)),
        i &&
          (a +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            " */");
      var r = new Blob([a], { type: "text/css" }),
        l = e.href;
      (e.href = URL.createObjectURL(r)), l && URL.revokeObjectURL(l);
    }
  },
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
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
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
        i = function(e) {
          return ("0" + e).slice(-2);
        },
        o = function(e) {
          return !0 === e ? 1 : 0;
        };
      function r(e, t, n) {
        var a;
        return (
          void 0 === n && (n = !1),
          function() {
            var i = this,
              o = arguments;
            null !== a && clearTimeout(a),
              (a = window.setTimeout(function() {
                (a = null), n || e.apply(i, o);
              }, t)),
              n && !a && e.apply(i, o);
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
          i = d("span", "arrowUp"),
          o = d("span", "arrowDown");
        if (
          (-1 === navigator.userAgent.indexOf("MSIE 9.0")
            ? (a.type = "number")
            : ((a.type = "text"), (a.pattern = "\\d*")),
          void 0 !== t)
        )
          for (var r in t) a.setAttribute(r, t[r]);
        return n.appendChild(a), n.appendChild(i), n.appendChild(o), n;
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
              (e.getHours() % 12) + 12 * o(new RegExp(n.amPM[1], "i").test(t))
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
              i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
            return i.setDate(i.getDate() - i.getDay() + n.firstDayOfWeek), i;
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
            return i(h.h(e, t, n));
          },
          H: function(e) {
            return i(e.getHours());
          },
          J: function(e, t) {
            return void 0 !== t.ordinal
              ? e.getDate() + t.ordinal(e.getDate())
              : e.getDate();
          },
          K: function(e, t) {
            return t.amPM[o(e.getHours() > 11)];
          },
          M: function(e, t) {
            return u(e.getMonth(), !0, t);
          },
          S: function(e) {
            return i(e.getSeconds());
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
            return i(e.getDate());
          },
          h: function(e) {
            return e.getHours() % 12 ? e.getHours() % 12 : 12;
          },
          i: function(e) {
            return i(e.getMinutes());
          },
          j: function(e) {
            return e.getDate();
          },
          l: function(e, t) {
            return t.weekdays.longhand[e.getDay()];
          },
          m: function(e) {
            return i(e.getMonth() + 1);
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
            i = void 0 === t ? n : t,
            o = e.l10n,
            r = void 0 === o ? a : o;
          return function(e, t, n) {
            var a = n || r;
            return void 0 !== i.formatDate
              ? i.formatDate(e, t, a)
              : t
                  .split("")
                  .map(function(t, n, o) {
                    return h[t] && "\\" !== o[n - 1]
                      ? h[t](e, a, i)
                      : "\\" !== t
                      ? t
                      : "";
                  })
                  .join("");
          };
        },
        v = function(e) {
          var t = e.config,
            i = void 0 === t ? n : t,
            o = e.l10n,
            r = void 0 === o ? a : o;
          return function(e, t, a, o) {
            if (0 === e || e) {
              var l,
                c = o || r,
                d = e;
              if (e instanceof Date) l = new Date(e.getTime());
              else if ("string" != typeof e && void 0 !== e.toFixed)
                l = new Date(e);
              else if ("string" == typeof e) {
                var s = t || (i || n).dateFormat,
                  f = String(e).trim();
                if ("today" === f) (l = new Date()), (a = !0);
                else if (/Z$/.test(f) || /GMT$/.test(f)) l = new Date(e);
                else if (i && i.parseDate) l = i.parseDate(e, s);
                else {
                  l =
                    i && i.noCalendar
                      ? new Date(new Date().setHours(0, 0, 0, 0))
                      : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
                  for (
                    var p = void 0, u = [], h = 0, b = 0, v = "";
                    h < s.length;
                    h++
                  ) {
                    var y = s[h],
                      w = "\\" === y,
                      x = "\\" === s[h - 1] || w;
                    if (g[y] && !x) {
                      v += g[y];
                      var k = new RegExp(v).exec(e);
                      k &&
                        (p = !0) &&
                        u["Y" !== y ? "push" : "unshift"]({
                          fn: m[y],
                          val: k[++b]
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
              i.errorHandler(new Error("Invalid date provided: " + d));
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
        x = { DAY: 864e5 };
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
              i = 0,
              o = t;
            i < o.length;
            i++
          ) {
            var r = o[i];
            a(r);
          }
          return e;
        });
      var k = 300;
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
          0 === h.selectedDates.length && ie(),
            void 0 !== e &&
              "blur" !== e.type &&
              (function(e) {
                e.preventDefault();
                var t = "keydown" === e.type,
                  n = e.target;
                void 0 !== h.amPM &&
                  e.target === h.amPM &&
                  (h.amPM.textContent =
                    h.l10n.amPM[o(h.amPM.textContent === h.l10n.amPM[0])]);
                var a = parseFloat(n.getAttribute("min")),
                  r = parseFloat(n.getAttribute("max")),
                  l = parseFloat(n.getAttribute("step")),
                  c = parseInt(n.value, 10),
                  d = e.delta || (t ? (38 === e.which ? 1 : -1) : 0),
                  s = c + l * d;
                if (void 0 !== n.value && 2 === n.value.length) {
                  var f = n === h.hourElement,
                    p = n === h.minuteElement;
                  s < a
                    ? ((s = r + s + o(!f) + (o(f) && o(!h.amPM))),
                      p && P(void 0, -1, h.hourElement))
                    : s > r &&
                      ((s = n === h.hourElement ? s - r - o(!h.amPM) : a),
                      p && P(void 0, 1, h.hourElement)),
                    h.amPM &&
                      f &&
                      (1 === l ? s + c === 23 : Math.abs(s - c) > l) &&
                      (h.amPM.textContent =
                        h.l10n.amPM[o(h.amPM.textContent === h.l10n.amPM[0])]),
                    (n.value = i(s));
                }
              })(e);
          var t = h._input.value;
          I(), ye(), h._input.value !== t && h._debouncedChange();
        }
        function I() {
          if (void 0 !== h.hourElement && void 0 !== h.minuteElement) {
            var e,
              t,
              n = (parseInt(h.hourElement.value.slice(-2), 10) || 0) % 24,
              a = (parseInt(h.minuteElement.value, 10) || 0) % 60,
              i =
                void 0 !== h.secondElement
                  ? (parseInt(h.secondElement.value, 10) || 0) % 60
                  : 0;
            void 0 !== h.amPM &&
              ((e = n),
              (t = h.amPM.textContent),
              (n = (e % 12) + 12 * o(t === h.l10n.amPM[1])));
            var r =
              void 0 !== h.config.minTime ||
              (h.config.minDate &&
                h.minDateHasTime &&
                h.latestSelectedDateObj &&
                0 === y(h.latestSelectedDateObj, h.config.minDate, !0));
            if (
              void 0 !== h.config.maxTime ||
              (h.config.maxDate &&
                h.maxDateHasTime &&
                h.latestSelectedDateObj &&
                0 === y(h.latestSelectedDateObj, h.config.maxDate, !0))
            ) {
              var l =
                void 0 !== h.config.maxTime
                  ? h.config.maxTime
                  : h.config.maxDate;
              (n = Math.min(n, l.getHours())) === l.getHours() &&
                (a = Math.min(a, l.getMinutes())),
                a === l.getMinutes() && (i = Math.min(i, l.getSeconds()));
            }
            if (r) {
              var c =
                void 0 !== h.config.minTime
                  ? h.config.minTime
                  : h.config.minDate;
              (n = Math.max(n, c.getHours())) === c.getHours() &&
                (a = Math.max(a, c.getMinutes())),
                a === c.getMinutes() && (i = Math.max(i, c.getSeconds()));
            }
            O(n, a, i);
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
              i = h.config.minDate.getMinutes();
            (e = Math.max(e, a)) === a && (t = Math.max(i, t)),
              e === a && t === i && (n = h.config.minDate.getSeconds());
          }
          if (void 0 !== h.config.maxDate) {
            var o = h.config.maxDate.getHours(),
              r = h.config.maxDate.getMinutes();
            (e = Math.min(e, o)) === o && (t = Math.min(r, t)),
              e === o && t === r && (n = h.config.maxDate.getSeconds());
          }
          O(e, t, n);
        }
        function O(e, t, n) {
          void 0 !== h.latestSelectedDateObj &&
            h.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0),
            h.hourElement &&
              h.minuteElement &&
              !h.isMobile &&
              ((h.hourElement.value = i(
                h.config.time_24hr ? e : ((12 + e) % 12) + 12 * o(e % 12 == 0)
              )),
              (h.minuteElement.value = i(t)),
              void 0 !== h.amPM &&
                (h.amPM.textContent = h.l10n.amPM[o(e >= 12)]),
              void 0 !== h.secondElement && (h.secondElement.value = i(n)));
        }
        function j(e) {
          var t = parseInt(e.target.value) + (e.delta || 0);
          (t / 1e3 > 1 || ("Enter" === e.key && !/[^\d]/.test(t.toString()))) &&
            Q(t);
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
          me("onChange");
        }
        function F(e, t) {
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
            i = h.currentMonth;
          try {
            void 0 !== n &&
              ((h.currentYear = n.getFullYear()),
              (h.currentMonth = n.getMonth()));
          } catch (e) {
            (e.message = "Invalid date supplied: " + n),
              h.config.errorHandler(e);
          }
          t && h.currentYear !== a && (me("onYearChange"), U()),
            !t ||
              (h.currentYear === a && h.currentMonth === i) ||
              me("onMonthChange"),
            h.redraw();
        }
        function L(e) {
          ~e.target.className.indexOf("arrow") &&
            P(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        function P(e, t, n) {
          var a = e && e.target,
            i = n || (a && a.parentNode && a.parentNode.firstChild),
            o = ge("increment");
          (o.delta = t), i && i.dispatchEvent(o);
        }
        function R(e, t, n, a) {
          var i = X(t, !0),
            o = d("span", "flatpickr-day " + e, t.getDate().toString());
          return (
            (o.dateObj = t),
            (o.$i = a),
            o.setAttribute(
              "aria-label",
              h.formatDate(t, h.config.ariaDateFormat)
            ),
            -1 === e.indexOf("hidden") &&
              0 === y(t, h.now) &&
              ((h.todayDateElem = o),
              o.classList.add("today"),
              o.setAttribute("aria-current", "date")),
            i
              ? ((o.tabIndex = -1),
                he(t) &&
                  (o.classList.add("selected"),
                  (h.selectedDateElem = o),
                  "range" === h.config.mode &&
                    (c(
                      o,
                      "startRange",
                      h.selectedDates[0] && 0 === y(t, h.selectedDates[0], !0)
                    ),
                    c(
                      o,
                      "endRange",
                      h.selectedDates[1] && 0 === y(t, h.selectedDates[1], !0)
                    ),
                    "nextMonthDay" === e && o.classList.add("inRange"))))
              : o.classList.add("flatpickr-disabled"),
            "range" === h.config.mode &&
              (function(e) {
                return (
                  !("range" !== h.config.mode || h.selectedDates.length < 2) &&
                  y(e, h.selectedDates[0]) >= 0 &&
                  y(e, h.selectedDates[1]) <= 0
                );
              })(t) &&
              !he(t) &&
              o.classList.add("inRange"),
            h.weekNumbers &&
              1 === h.config.showMonths &&
              "prevMonthDay" !== e &&
              n % 7 == 1 &&
              h.weekNumbers.insertAdjacentHTML(
                "beforeend",
                "<span class='flatpickr-day'>" + h.config.getWeek(t) + "</span>"
              ),
            me("onDayCreate", o),
            o
          );
        }
        function Y(e) {
          e.focus(), "range" === h.config.mode && ne(e);
        }
        function H(e) {
          for (
            var t = e > 0 ? 0 : h.config.showMonths - 1,
              n = e > 0 ? h.config.showMonths : -1,
              a = t;
            a != n;
            a += e
          )
            for (
              var i = h.daysContainer.children[a],
                o = e > 0 ? 0 : i.children.length - 1,
                r = e > 0 ? i.children.length : -1,
                l = o;
              l != r;
              l += e
            ) {
              var c = i.children[l];
              if (-1 === c.className.indexOf("hidden") && X(c.dateObj))
                return c;
            }
        }
        function W(e, t) {
          var n = ee(document.activeElement || document.body),
            a =
              void 0 !== e
                ? e
                : n
                ? document.activeElement
                : void 0 !== h.selectedDateElem && ee(h.selectedDateElem)
                ? h.selectedDateElem
                : void 0 !== h.todayDateElem && ee(h.todayDateElem)
                ? h.todayDateElem
                : H(t > 0 ? 1 : -1);
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
                    i = t > 0 ? 1 : -1,
                    o = n - h.currentMonth;
                  o != a;
                  o += i
                )
                  for (
                    var r = h.daysContainer.children[o],
                      l =
                        n - h.currentMonth === o
                          ? e.$i + t
                          : t < 0
                          ? r.children.length - 1
                          : 0,
                      c = r.children.length,
                      d = l;
                    d >= 0 && d < c && d != (t > 0 ? c : -1);
                    d += i
                  ) {
                    var s = r.children[d];
                    if (
                      -1 === s.className.indexOf("hidden") &&
                      X(s.dateObj) &&
                      Math.abs(e.$i - d) >= Math.abs(t)
                    )
                      return Y(s);
                  }
                h.changeMonth(i), W(H(i), 0);
              })(a, t)
            : Y(a);
        }
        function B(e, t) {
          for (
            var n =
                (new Date(e, t, 1).getDay() - h.l10n.firstDayOfWeek + 7) % 7,
              a = h.utils.getDaysInMonth((t - 1 + 12) % 12),
              i = h.utils.getDaysInMonth(t),
              o = window.document.createDocumentFragment(),
              r = h.config.showMonths > 1,
              l = r ? "prevMonthDay hidden" : "prevMonthDay",
              c = r ? "nextMonthDay hidden" : "nextMonthDay",
              s = a + 1 - n,
              f = 0;
            s <= a;
            s++, f++
          )
            o.appendChild(R(l, new Date(e, t - 1, s), s, f));
          for (s = 1; s <= i; s++, f++)
            o.appendChild(R("", new Date(e, t, s), s, f));
          for (
            var p = i + 1;
            p <= 42 - n && (1 === h.config.showMonths || f % 7 != 0);
            p++, f++
          )
            o.appendChild(R(c, new Date(e, t + 1, p % i), p, f));
          var u = d("div", "dayContainer");
          return u.appendChild(o), u;
        }
        function z() {
          if (void 0 !== h.daysContainer) {
            s(h.daysContainer), h.weekNumbers && s(h.weekNumbers);
            for (
              var e = document.createDocumentFragment(), t = 0;
              t < h.config.showMonths;
              t++
            ) {
              var n = new Date(h.currentYear, h.currentMonth, 1);
              n.setMonth(h.currentMonth + t),
                e.appendChild(B(n.getFullYear(), n.getMonth()));
            }
            h.daysContainer.appendChild(e),
              (h.days = h.daysContainer.firstChild),
              "range" === h.config.mode && 1 === h.selectedDates.length && ne();
          }
        }
        function U() {
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
        function J() {
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
                h.changeMonth(n - h.currentMonth), me("onMonthChange");
              }),
              U(),
              (e = h.monthsDropdownContainer));
          var a = f("cur-year", { tabindex: "-1" }),
            i = a.getElementsByTagName("input")[0];
          i.setAttribute("aria-label", h.l10n.yearAriaLabel),
            h.config.minDate &&
              i.setAttribute("min", h.config.minDate.getFullYear().toString()),
            h.config.maxDate &&
              (i.setAttribute("max", h.config.maxDate.getFullYear().toString()),
              (i.disabled =
                !!h.config.minDate &&
                h.config.minDate.getFullYear() ===
                  h.config.maxDate.getFullYear()));
          var o = d("div", "flatpickr-current-month");
          return (
            o.appendChild(e),
            o.appendChild(a),
            n.appendChild(o),
            t.appendChild(n),
            { container: t, yearElement: i, monthElement: e }
          );
        }
        function q() {
          s(h.monthNav),
            h.monthNav.appendChild(h.prevMonthNav),
            h.config.showMonths &&
              ((h.yearElements = []), (h.monthElements = []));
          for (var e = h.config.showMonths; e--; ) {
            var t = J();
            h.yearElements.push(t.yearElement),
              h.monthElements.push(t.monthElement),
              h.monthNav.appendChild(t.container);
          }
          h.monthNav.appendChild(h.nextMonthNav);
        }
        function K() {
          h.weekdayContainer
            ? s(h.weekdayContainer)
            : (h.weekdayContainer = d("div", "flatpickr-weekdays"));
          for (var e = h.config.showMonths; e--; ) {
            var t = d("div", "flatpickr-weekdaycontainer");
            h.weekdayContainer.appendChild(t);
          }
          return $(), h.weekdayContainer;
        }
        function $() {
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
        function G(e, t) {
          void 0 === t && (t = !0);
          var n = t ? e : e - h.currentMonth;
          (n < 0 && !0 === h._hidePrevMonthArrow) ||
            (n > 0 && !0 === h._hideNextMonthArrow) ||
            ((h.currentMonth += n),
            (h.currentMonth < 0 || h.currentMonth > 11) &&
              ((h.currentYear += h.currentMonth > 11 ? 1 : -1),
              (h.currentMonth = (h.currentMonth + 12) % 12),
              me("onYearChange"),
              U()),
            z(),
            me("onMonthChange"),
            be());
        }
        function V(e) {
          return (
            !(!h.config.appendTo || !h.config.appendTo.contains(e)) ||
            h.calendarContainer.contains(e)
          );
        }
        function Z(e) {
          if (h.isOpen && !h.config.inline) {
            var t = (function(e) {
                return "function" == typeof e.composedPath
                  ? e.composedPath()[0]
                  : e.target;
              })(e),
              n = V(t),
              a =
                t === h.input ||
                t === h.altInput ||
                h.element.contains(t) ||
                (e.path &&
                  e.path.indexOf &&
                  (~e.path.indexOf(h.input) || ~e.path.indexOf(h.altInput))),
              i =
                "blur" === e.type
                  ? a && e.relatedTarget && !V(e.relatedTarget)
                  : !a && !n && !V(e.relatedTarget),
              o = !h.config.ignoredFocusElements.some(function(e) {
                return e.contains(t);
              });
            i &&
              o &&
              (h.close(),
              "range" === h.config.mode &&
                1 === h.selectedDates.length &&
                (h.clear(!1), h.redraw()));
          }
        }
        function Q(e) {
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
              n && (h.redraw(), me("onYearChange"), U());
          }
        }
        function X(e, t) {
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
              i = a ? h.config.enable : h.config.disable,
              o = 0,
              r = void 0;
            o < i.length;
            o++
          ) {
            if ("function" == typeof (r = i[o]) && r(n)) return a;
            if (
              r instanceof Date &&
              void 0 !== n &&
              r.getTime() === n.getTime()
            )
              return a;
            if ("string" == typeof r && void 0 !== n) {
              var l = h.parseDate(r, void 0, !0);
              return l && l.getTime() === n.getTime() ? a : !a;
            }
            if (
              "object" == typeof r &&
              void 0 !== n &&
              r.from &&
              r.to &&
              n.getTime() >= r.from.getTime() &&
              n.getTime() <= r.to.getTime()
            )
              return a;
          }
          return !a;
        }
        function ee(e) {
          return (
            void 0 !== h.daysContainer &&
            -1 === e.className.indexOf("hidden") &&
            h.daysContainer.contains(e)
          );
        }
        function te(e) {
          var t = e.target === h._input,
            n = h.config.allowInput,
            a = h.isOpen && (!n || !t),
            i = h.config.inline && t && !n;
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
          } else if (V(e.target) || a || i) {
            var o = !!h.timeContainer && h.timeContainer.contains(e.target);
            switch (e.keyCode) {
              case 13:
                o ? (e.preventDefault(), E(), de()) : se(e);
                break;
              case 27:
                e.preventDefault(), de();
                break;
              case 8:
              case 46:
                t && !h.config.allowInput && (e.preventDefault(), h.clear());
                break;
              case 37:
              case 39:
                if (o || t) h.hourElement && h.hourElement.focus();
                else if (
                  (e.preventDefault(),
                  void 0 !== h.daysContainer &&
                    (!1 === n ||
                      (document.activeElement && ee(document.activeElement))))
                ) {
                  var r = 39 === e.keyCode ? 1 : -1;
                  e.ctrlKey
                    ? (e.stopPropagation(), G(r), W(H(1), 0))
                    : W(void 0, r);
                }
                break;
              case 38:
              case 40:
                e.preventDefault();
                var l = 40 === e.keyCode ? 1 : -1;
                (h.daysContainer && void 0 !== e.target.$i) ||
                e.target === h.input
                  ? e.ctrlKey
                    ? (e.stopPropagation(), Q(h.currentYear - l), W(H(1), 0))
                    : o || W(void 0, 7 * l)
                  : e.target === h.currentYearElement
                  ? Q(h.currentYear - l)
                  : h.config.enableTime &&
                    (!o && h.hourElement && h.hourElement.focus(),
                    E(e),
                    h._debouncedChange());
                break;
              case 9:
                if (o) {
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
                (h.amPM.textContent = h.l10n.amPM[0]), I(), ye();
                break;
              case h.l10n.amPM[1].charAt(0):
              case h.l10n.amPM[1].charAt(0).toLowerCase():
                (h.amPM.textContent = h.l10n.amPM[1]), I(), ye();
            }
          (t || V(e.target)) && me("onKeyDown", e);
        }
        function ne(e) {
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
                i = Math.max(t, h.selectedDates[0].getTime()),
                o = !1,
                r = 0,
                l = 0,
                c = a;
              c < i;
              c += x.DAY
            )
              X(new Date(c), !0) ||
                ((o = o || (c > a && c < i)),
                c < n && (!r || c > r)
                  ? (r = c)
                  : c > n && (!l || c < l) && (l = c));
            for (var d = 0; d < h.config.showMonths; d++)
              for (
                var s = h.daysContainer.children[d],
                  f = function(a, i) {
                    var c = s.children[a],
                      d = c.dateObj.getTime(),
                      f = (r > 0 && d < r) || (l > 0 && d > l);
                    return f
                      ? (c.classList.add("notAllowed"),
                        ["inRange", "startRange", "endRange"].forEach(function(
                          e
                        ) {
                          c.classList.remove(e);
                        }),
                        "continue")
                      : o && !f
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
                          n < t && d === n
                            ? c.classList.add("startRange")
                            : n > t && d === n && c.classList.add("endRange"),
                          d >= r &&
                            (0 === l || d <= l) &&
                            w(d, n, t) &&
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
        function ae() {
          !h.isOpen || h.config.static || h.config.inline || le();
        }
        function ie() {
          h.setDate(
            void 0 !== h.config.minDate
              ? new Date(h.config.minDate.getTime())
              : new Date(),
            !0
          ),
            S(),
            ye();
        }
        function oe(e) {
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
                  return X(e);
                })),
                h.selectedDates.length || "min" !== e || T(n),
                ye()),
              h.daysContainer &&
                (ce(),
                void 0 !== n
                  ? (h.currentYearElement[e] = n.getFullYear().toString())
                  : h.currentYearElement.removeAttribute(e),
                (h.currentYearElement.disabled =
                  !!a && void 0 !== n && a.getFullYear() === n.getFullYear()));
          };
        }
        function re() {
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
              ")"),
            void 0 ===
              e({}, m, JSON.parse(JSON.stringify(p.dataset || {}))).time_24hr &&
              void 0 === C.defaultConfig.time_24hr &&
              (h.config.time_24hr = h.l10n.time_24hr),
            (h.formatDate = b(h)),
            (h.parseDate = v({ config: h.config, l10n: h.l10n }));
        }
        function le(e) {
          if (void 0 !== h.calendarContainer) {
            me("onPreCalendarPosition");
            var t = e || h._positionElement,
              n = Array.prototype.reduce.call(
                h.calendarContainer.children,
                function(e, t) {
                  return e + t.offsetHeight;
                },
                0
              ),
              a = h.calendarContainer.offsetWidth,
              i = h.config.position.split(" "),
              o = i[0],
              r = i.length > 1 ? i[1] : null,
              l = t.getBoundingClientRect(),
              d = window.innerHeight - l.bottom,
              s = "above" === o || ("below" !== o && d < n && l.top > n),
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
                  (null != r && "center" === r ? (a - l.width) / 2 : 0),
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
                      x = "{left:" + l.left + "px;right:auto;}";
                    c(h.calendarContainer, "rightMost", !1),
                      c(h.calendarContainer, "centerMost", !0),
                      b.insertRule(
                        ".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" +
                          x,
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
        function ce() {
          h.config.noCalendar || h.isMobile || (be(), z());
        }
        function de() {
          h._input.focus(),
            -1 !== window.navigator.userAgent.indexOf("MSIE") ||
            void 0 !== navigator.msMaxTouchPoints
              ? setTimeout(h.close, 0)
              : h.close();
        }
        function se(e) {
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
              i =
                (a.getMonth() < h.currentMonth ||
                  a.getMonth() > h.currentMonth + h.config.showMonths - 1) &&
                "range" !== h.config.mode;
            if (((h.selectedDateElem = n), "single" === h.config.mode))
              h.selectedDates = [a];
            else if ("multiple" === h.config.mode) {
              var o = he(a);
              o
                ? h.selectedDates.splice(parseInt(o), 1)
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
            if ((I(), i)) {
              var r = h.currentYear !== a.getFullYear();
              (h.currentYear = a.getFullYear()),
                (h.currentMonth = a.getMonth()),
                r && (me("onYearChange"), U()),
                me("onMonthChange");
            }
            if (
              (be(),
              z(),
              ye(),
              h.config.enableTime &&
                setTimeout(function() {
                  return (h.showTimeInput = !0);
                }, 50),
              i || "range" === h.config.mode || 1 !== h.config.showMonths
                ? void 0 !== h.selectedDateElem &&
                  void 0 === h.hourElement &&
                  h.selectedDateElem &&
                  h.selectedDateElem.focus()
                : Y(n),
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
              (l || c) && de();
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
          (h._positionCalendar = le),
          (h.changeMonth = G),
          (h.changeYear = Q),
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
              e && me("onChange");
          }),
          (h.close = function() {
            (h.isOpen = !1),
              h.isMobile ||
                (void 0 !== h.calendarContainer &&
                  h.calendarContainer.classList.remove("open"),
                void 0 !== h._input && h._input.classList.remove("active")),
              me("onClose");
          }),
          (h._createElement = d),
          (h.destroy = function() {
            void 0 !== h.config && me("onDestroy");
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
          (h.isEnabled = X),
          (h.jumpToDate = F),
          (h.open = function(e, t) {
            if ((void 0 === t && (t = h._positionElement), !0 === h.isMobile))
              return (
                e && (e.preventDefault(), e.target && e.target.blur()),
                void 0 !== h.mobileInput &&
                  (h.mobileInput.focus(), h.mobileInput.click()),
                void me("onOpen")
              );
            if (!h._input.disabled && !h.config.inline) {
              var n = h.isOpen;
              (h.isOpen = !0),
                n ||
                  (h.calendarContainer.classList.add("open"),
                  h._input.classList.add("active"),
                  me("onOpen"),
                  le(t)),
                !0 === h.config.enableTime &&
                  !0 === h.config.noCalendar &&
                  (0 === h.selectedDates.length && ie(),
                  !1 !== h.config.allowInput ||
                    (void 0 !== e &&
                      h.timeContainer.contains(e.relatedTarget)) ||
                    setTimeout(function() {
                      return h.hourElement.select();
                    }, 50));
            }
          }),
          (h.redraw = ce),
          (h.set = function(e, n) {
            if (null !== e && "object" == typeof e)
              for (var a in (Object.assign(h.config, e), e))
                void 0 !== fe[a] &&
                  fe[a].forEach(function(e) {
                    return e();
                  });
            else
              (h.config[e] = n),
                void 0 !== fe[e]
                  ? fe[e].forEach(function(e) {
                      return e();
                    })
                  : t.indexOf(e) > -1 && (h.config[e] = l(n));
            h.redraw(), ye(!1);
          }),
          (h.setDate = function(e, t, n) {
            if (
              (void 0 === t && (t = !1),
              void 0 === n && (n = h.config.dateFormat),
              (0 !== e && !e) || (e instanceof Array && 0 === e.length))
            )
              return h.clear(t);
            pe(e, n),
              (h.showTimeInput = h.selectedDates.length > 0),
              (h.latestSelectedDateObj =
                h.selectedDates[h.selectedDates.length - 1]),
              h.redraw(),
              F(),
              T(),
              0 === h.selectedDates.length && h.clear(!1),
              ye(t),
              t && me("onChange");
          }),
          (h.toggle = function(e) {
            if (!0 === h.isOpen) return h.close();
            h.open(e);
          });
        var fe = {
          locale: [re, $],
          showMonths: [q, M, K],
          minDate: [F],
          maxDate: [F]
        };
        function pe(e, t) {
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
            return e instanceof Date && X(e, !1);
          })),
            "range" === h.config.mode &&
              h.selectedDates.sort(function(e, t) {
                return e.getTime() - t.getTime();
              });
        }
        function ue(e) {
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
        function me(e, t) {
          if (void 0 !== h.config) {
            var n = h.config[e];
            if (void 0 !== n && n.length > 0)
              for (var a = 0; n[a] && a < n.length; a++)
                n[a](h.selectedDates, h.input.value, h, t);
            "onChange" === e &&
              (h.input.dispatchEvent(ge("change")),
              h.input.dispatchEvent(ge("input")));
          }
        }
        function ge(e) {
          var t = document.createEvent("Event");
          return t.initEvent(e, !0, !0), t;
        }
        function he(e) {
          for (var t = 0; t < h.selectedDates.length; t++)
            if (0 === y(h.selectedDates[t], e)) return "" + t;
          return !1;
        }
        function be() {
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
        function ve(e) {
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
        function ye(e) {
          void 0 === e && (e = !0),
            void 0 !== h.mobileInput &&
              h.mobileFormatStr &&
              (h.mobileInput.value =
                void 0 !== h.latestSelectedDateObj
                  ? h.formatDate(h.latestSelectedDateObj, h.mobileFormatStr)
                  : ""),
            (h.input.value = ve(h.config.dateFormat)),
            void 0 !== h.altInput &&
              (h.altInput.value = ve(h.config.altFormat)),
            !1 !== e && me("onValueUpdate");
        }
        function we(e) {
          var t = h.prevMonthNav.contains(e.target),
            n = h.nextMonthNav.contains(e.target);
          t || n
            ? G(t ? -1 : 1)
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
                  i = e({}, m, JSON.parse(JSON.stringify(p.dataset || {}))),
                  o = {};
                (h.config.parseDate = i.parseDate),
                  (h.config.formatDate = i.formatDate),
                  Object.defineProperty(h.config, "enable", {
                    get: function() {
                      return h.config._enable;
                    },
                    set: function(e) {
                      h.config._enable = ue(e);
                    }
                  }),
                  Object.defineProperty(h.config, "disable", {
                    get: function() {
                      return h.config._disable;
                    },
                    set: function(e) {
                      h.config._disable = ue(e);
                    }
                  });
                var r = "time" === i.mode;
                if (!i.dateFormat && (i.enableTime || r)) {
                  var c = C.defaultConfig.dateFormat || n.dateFormat;
                  o.dateFormat =
                    i.noCalendar || r
                      ? "H:i" + (i.enableSeconds ? ":S" : "")
                      : c + " H:i" + (i.enableSeconds ? ":S" : "");
                }
                if (i.altInput && (i.enableTime || r) && !i.altFormat) {
                  var d = C.defaultConfig.altFormat || n.altFormat;
                  o.altFormat =
                    i.noCalendar || r
                      ? "h:i" + (i.enableSeconds ? ":S K" : " K")
                      : d + " h:i" + (i.enableSeconds ? ":S" : "") + " K";
                }
                i.altInputClass ||
                  (h.config.altInputClass =
                    h.input.className + " " + h.config.altInputClass),
                  Object.defineProperty(h.config, "minDate", {
                    get: function() {
                      return h.config._minDate;
                    },
                    set: oe("min")
                  }),
                  Object.defineProperty(h.config, "maxDate", {
                    get: function() {
                      return h.config._maxDate;
                    },
                    set: oe("max")
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
                  "time" === i.mode &&
                    ((h.config.noCalendar = !0), (h.config.enableTime = !0)),
                  Object.assign(h.config, o, i);
                for (var f = 0; f < a.length; f++)
                  h.config[a[f]] =
                    !0 === h.config[a[f]] || "true" === h.config[a[f]];
                for (
                  t
                    .filter(function(e) {
                      return void 0 !== h.config[e];
                    })
                    .forEach(function(e) {
                      h.config[e] = l(h.config[e] || []).map(D);
                    }),
                    h.isMobile =
                      !h.config.disableMobile &&
                      !h.config.inline &&
                      "single" === h.config.mode &&
                      !h.config.disable.length &&
                      !h.config.enable.length &&
                      !h.config.weekNumbers &&
                      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      ),
                    f = 0;
                  f < h.config.plugins.length;
                  f++
                ) {
                  var u = h.config.plugins[f](h) || {};
                  for (var g in u)
                    t.indexOf(g) > -1
                      ? (h.config[g] = l(u[g])
                          .map(D)
                          .concat(h.config[g]))
                      : void 0 === i[g] && (h.config[g] = u[g]);
                }
                me("onParseConfig");
              })(),
              re(),
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
                e && pe(e, h.config.dateFormat),
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
                        h.isOpen && le();
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
              h.isMobile ||
                (function() {
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
                        q(),
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
                        be(),
                        h.monthNav)
                      ),
                      (h.innerContainer = d("div", "flatpickr-innerContainer")),
                      h.config.weekNumbers)
                    ) {
                      var t = (function() {
                          h.calendarContainer.classList.add("hasWeeks");
                          var e = d("div", "flatpickr-weekwrapper");
                          e.appendChild(
                            d(
                              "span",
                              "flatpickr-weekday",
                              h.l10n.weekAbbreviation
                            )
                          );
                          var t = d("div", "flatpickr-weeks");
                          return (
                            e.appendChild(t), { weekWrapper: e, weekNumbers: t }
                          );
                        })(),
                        n = t.weekWrapper,
                        a = t.weekNumbers;
                      h.innerContainer.appendChild(n),
                        (h.weekNumbers = a),
                        (h.weekWrapper = n);
                    }
                    (h.rContainer = d("div", "flatpickr-rContainer")),
                      h.rContainer.appendChild(K()),
                      h.daysContainer ||
                        ((h.daysContainer = d("div", "flatpickr-days")),
                        (h.daysContainer.tabIndex = -1)),
                      z(),
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
                          ((h.minuteElement = n.getElementsByTagName(
                            "input"
                          )[0]),
                          (h.hourElement.tabIndex = h.minuteElement.tabIndex = -1),
                          (h.hourElement.value = i(
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
                          (h.minuteElement.value = i(
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
                          (h.secondElement = a.getElementsByTagName(
                            "input"
                          )[0]),
                            (h.secondElement.value = i(
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
                                o(
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
                    c(
                      h.calendarContainer,
                      "rangeMode",
                      "range" === h.config.mode
                    ),
                    c(h.calendarContainer, "animate", !0 === h.config.animate),
                    c(
                      h.calendarContainer,
                      "multiMonth",
                      h.config.showMonths > 1
                    ),
                    h.calendarContainer.appendChild(e);
                  var r =
                    void 0 !== h.config.appendTo &&
                    void 0 !== h.config.appendTo.nodeType;
                  if (
                    (h.config.inline || h.config.static) &&
                    (h.calendarContainer.classList.add(
                      h.config.inline ? "inline" : "static"
                    ),
                    h.config.inline &&
                      (!r && h.element.parentNode
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
                })(),
              (function() {
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
                      (h.mobileInput.step =
                        h.input.getAttribute("step") || "any"),
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
                        (h.mobileInput.min = h.formatDate(
                          h.config.minDate,
                          "Y-m-d"
                        )),
                      h.config.maxDate &&
                        (h.mobileInput.max = h.formatDate(
                          h.config.maxDate,
                          "Y-m-d"
                        )),
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
                        me("onChange"),
                        me("onClose");
                    });
                  })();
                else {
                  var e = r(ae, 50);
                  (h._debouncedChange = r(A, k)),
                    h.daysContainer &&
                      !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                      N(h.daysContainer, "mouseover", function(e) {
                        "range" === h.config.mode && ne(e.target);
                      }),
                    N(window.document.body, "keydown", te),
                    h.config.inline ||
                      h.config.static ||
                      N(window, "resize", e),
                    void 0 !== window.ontouchstart
                      ? N(window.document, "touchstart", Z)
                      : N(window.document, "mousedown", _(Z)),
                    N(window.document, "focus", Z, { capture: !0 }),
                    !0 === h.config.clickOpens &&
                      (N(h._input, "focus", h.open),
                      N(h._input, "mousedown", _(h.open))),
                    void 0 !== h.daysContainer &&
                      (N(h.monthNav, "mousedown", _(we)),
                      N(h.monthNav, ["keyup", "increment"], j),
                      N(h.daysContainer, "mousedown", _(se))),
                    void 0 !== h.timeContainer &&
                      void 0 !== h.minuteElement &&
                      void 0 !== h.hourElement &&
                      (N(h.timeContainer, ["increment"], E),
                      N(h.timeContainer, "blur", E, { capture: !0 }),
                      N(h.timeContainer, "mousedown", _(L)),
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
              })(),
              (h.selectedDates.length || h.config.noCalendar) &&
                (h.config.enableTime &&
                  T(
                    h.config.noCalendar
                      ? h.latestSelectedDateObj || h.config.minDate
                      : void 0
                  ),
                ye(!1)),
              M(),
              (h.showTimeInput =
                h.selectedDates.length > 0 || h.config.noCalendar);
            var a = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            !h.isMobile && a && le(), me("onReady");
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
            i = 0;
          i < n.length;
          i++
        ) {
          var o = n[i];
          try {
            if (null !== o.getAttribute("data-fp-omit")) continue;
            void 0 !== o._flatpickr &&
              (o._flatpickr.destroy(), (o._flatpickr = void 0)),
              (o._flatpickr = D(o, t || {})),
              a.push(o._flatpickr);
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
    var a = n(4);
    "string" == typeof a && (a = [[e.i, a, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(a, i);
    a.locals && (e.exports = a.locals);
  },
  function(e, t, n) {
    (e.exports = n(0)(!1)).push([
      e.i,
      '.flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px);}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:\'\';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.rightMost:after{left:auto;right:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:28px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;line-height:16px;height:28px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{/*\n      /*rtl:begin:ignore*/left:0;/*\n      /*rtl:end:ignore*/}/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{/*\n      /*rtl:begin:ignore*/right:0;/*\n      /*rtl:end:ignore*/}/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9;}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px;}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto;}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%;}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);-webkit-box-sizing:border-box;box-sizing:border-box;}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:"";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0;}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%;}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto;}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05);}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:6.16px 0 0 0;line-height:1;height:28px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0;}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block;}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:22px;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto;}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px;}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px;}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1;}.dayContainer + .dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9;}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left;}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-time:after{content:"";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left;}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}',
      ""
    ]);
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
          var i,
            o = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
            ? e
            : ((i =
                0 === o.indexOf("//")
                  ? o
                  : 0 === o.indexOf("/")
                  ? n + o
                  : a + o.replace(/^\.\//, "")),
              "url(" + JSON.stringify(i) + ")");
        }
      );
    };
  },
  function(e, t, n) {
    var a = n(7);
    "string" == typeof a && (a = [[e.i, a, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(a, i);
    a.locals && (e.exports = a.locals);
  },
  function(e, t, n) {
    (e.exports = n(0)(!1)).push([
      e.i,
      'body {\n  font-family: "Open Sans", Arial, sans-serif;\n}\n\n.form-field {\n  margin: 0 auto;\n  width: 40%;\n}\n\n.form-field input[type="text"],\n.form-field textarea {\n  padding: 8px 10px;\n  font-size: 18px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.form-field textarea {\n  height: 60px;\n}\n\n.btn-container {\n  position: fixed;\n  bottom: 50px;\n  width: 100%;\n}\n\n#add-project {\n  position: static;\n  margin-top: 20px;\n}\n\n.btn-container button {\n  display: inline-block;\n  background-color: #ff4800;\n  color: #fff;\n  font-size: 18px;\n  padding: 10px 15px;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton.btn-alt {\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333;\n}\n\n/* Project styles */\n\n#project-form {\n  font-size: 18px;\n  margin-top: 40px;\n  text-align: center;\n}\n\n#display-projects {\n  text-align: center;\n  font-size: 28px;\n  margin-top: 30px;\n}\n\ndiv.project {\n  background: #fff000;\n  display: inline-block;\n  position: relative;\n  padding: 15px 18px;\n  margin-right: 25px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\ndiv.project:last-child {\n  margin-right: 0px;\n}\n\n/* Todo styles */\n\n#todo-form {\n  background: #fff;\n  position: absolute;\n  font-size: 16px;\n  top: 0;\n  padding: 20px 15px;\n  vertical-align: top;\n  text-align: left;\n  height: 100%;\n  width: 100%;\n}\n\n#todo-form label {\n  display: block;\n  width: 50%;\n}\n\n#todo-form .inline-label {\n  display: inline;\n}\n\n#todo-form .form-field {\n  margin-bottom: 18px;\n}\n\n#todo-form .btn-container {\n  margin-top: 50px;\n  text-align: center;\n}\n\n.todo-row {\n  border-bottom: 2px solid #ccc;\n}\n\n.todo-title {\n  background: #eee;\n  padding-left: 10px;\n}\n\n.todo-title h3 {\n  display: inline-block;\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.todo-title span {\n  color: #333;\n  font-weight: 400;\n  margin-left: 25px;\n  text-align: right;\n}\n\n.todo-title label {\n  color: #333;\n  vertical-align: middle;\n}\n\n.priority-on .todo-title {\n  border-left: 5px solid #ff4800;\n}\n\n.todo-description {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.todo-details {\n  background: #fff9c9;\n  padding: 10px 10px 10px 25px;\n}\n\n#delete-project {\n  color: #ff6b31;\n  display: inline-block;\n  font-size: 18px;\n  text-align: right;\n}\n\n.has-error {\n  border: 1px solid #ff0000;\n}\n\n.error-msg {\n  color: #ff0000;\n}\n',
      ""
    ]);
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var a = function() {
        var e = localStorage.getItem("projects")
          ? JSON.parse(localStorage.getItem("projects"))
          : [];
        return e;
      },
      i = function(e) {
        var t = document.getElementById("display-projects");
        (t.innerHTML = ""),
          e.length > 0
            ? e.forEach(function(e) {
                t.innerHTML += "<div class='project' data-id="
                  .concat(e.id, ">")
                  .concat(e.name, "</div>");
              })
            : (t.innerHTML = "No projects yet! Add one");
      },
      o = function() {
        document.querySelectorAll(".todo-title h3").forEach(function(e) {
          e.addEventListener("click", function() {
            var t = e.parentElement.nextElementSibling;
            "none" === t.style.display
              ? (t.style.display = "block")
              : (t.style.display = "none");
          });
        });
      },
      r = function(e) {
        var t = a(),
          n = t.find(function(t) {
            return t.id === e;
          }),
          i = n.todo;
        document
          .querySelectorAll('.todo-title input[type="checkbox"]')
          .forEach(function(e) {
            e.addEventListener("click", function() {
              var a = e.parentNode.parentNode.id,
                o = i.findIndex(function(e) {
                  return e.id === a;
                });
              return (
                i.splice(o, 1),
                (n.todo = i),
                localStorage.setItem("projects", JSON.stringify(t)),
                l(n),
                n
              );
            });
          });
      },
      l = function(e) {
        var t = document.getElementById("todo-form"),
          n = document.getElementById("display-todos"),
          a = document.getElementById("show-todo-form");
        (t.style.display = "none"),
          "none" === a.style.display
            ? (a.style.display = "block")
            : a.style.display,
          (n.innerHTML = "");
        var i = "";
        e.todo.length > 0
          ? e.todo.forEach(function(e) {
              i += '<div id="'
                .concat(e.id, '" class="todo-row ')
                .concat(
                  e.priority,
                  '">\n                <div class="todo-title">\n                    <h3>'
                )
                .concat(e.title, "</h3><span>")
                .concat(
                  e.duedate,
                  '</span>\n                    <input type="checkbox" name="done" id="checkbox-'
                )
                .concat(e.id, '"><label for="checkbox-')
                .concat(
                  e.id,
                  '">Done?</label>\n                </div>\n                <div class="todo-details" style="display:none;">\n                    <p class="todo-description">'
                )
                .concat(
                  e.description,
                  "</p>\n                </div>\n            </div>"
                );
            })
          : (i = "No Todo yet!"),
          (n.innerHTML += i);
        var l = e.id;
        r(l), o();
      },
      c = function() {
        (document.getElementById("title").value = ""),
          (document.getElementById("description").value = ""),
          (document.getElementById("priority").checked = !1),
          (document.getElementById("duedate").value = "");
      },
      d = function() {
        var e = document.getElementById("show-todo-form"),
          t = document.getElementById("hide-todo-form"),
          n = document.getElementById("todo-form");
        e.addEventListener("click", function() {
          n.style.display = "block";
        }),
          t.addEventListener("click", function() {
            c(), (n.style.display = "none");
          });
      },
      s = function(e, t) {
        e.classList.add("has-error");
        var n = document.createElement("span");
        n.classList.add("error-msg"),
          (n.innerHTML = t),
          e.nextElementSibling || e.parentNode.appendChild(n);
      },
      f = function(e) {
        var t = e.parentNode.querySelector(".error-msg");
        t && e.parentNode.removeChild(t), e.classList.remove("has-error");
      },
      p = function(e) {
        if (e.validity.valueMissing) {
          return s(e, "This field is required!"), !1;
        }
        if (!e.validity.valueMissing) return f(e), !0;
      },
      u = function() {
        var e = document.getElementById("title").value,
          t = document.getElementById("description").value,
          n = document.getElementById("duedate").value,
          a = new Date().getTime(),
          i = e.replace(/\W/g, "").toLowerCase() + a,
          o = (function(e, t, n, a, i) {
            return { title: e, description: t, priority: n, duedate: a, id: i };
          })(
            e,
            "" === t
              ? '<span style="color: #ccc"><i>No description</i></span>'
              : t.replace(/\n\r?/g, "<br>"),
            !0 === document.getElementById("priority").checked
              ? "priority-on"
              : "priority-off",
            n,
            i
          );
        return o;
      },
      m = function(e) {
        var t = document.querySelector('input[type="text"]#title');
        t.addEventListener("blur", function() {
          p(t);
        }),
          document
            .getElementById("todo-form")
            .addEventListener("submit", function() {
              if ((event.preventDefault(), p(t))) {
                var n = a(),
                  i = n.find(function(t) {
                    return t.id === e;
                  }),
                  o = u();
                return (
                  i.todo.push(o),
                  localStorage.setItem("projects", JSON.stringify(n)),
                  l(i),
                  c(),
                  n
                );
              }
              return !1;
            });
      },
      g = function() {
        document
          .getElementById("go-home")
          .addEventListener("click", function() {
            location.reload(!0);
          });
      },
      h = function(e) {
        var t = a(),
          n = t.findIndex(function(t) {
            return t.id === e;
          });
        document
          .getElementById("delete-project")
          .addEventListener("click", function() {
            window.confirm("Delete this project?") &&
              (t.splice(n, 1),
              localStorage.setItem("projects", JSON.stringify(t)),
              location.reload(!0));
          });
      },
      b = n(2),
      v = n.n(b),
      y =
        (n(3),
        v()("#duedate", {
          disableMobile: !0,
          dateFormat: "d/m/Y",
          minDate: new Date()
        }),
        function() {
          var e = a(),
            t = document.getElementById("display-projects");
          document.querySelectorAll(".project").forEach(function(n) {
            n.addEventListener("click", function() {
              document.getElementById("project-form").style.display = "none";
              var a = n.dataset.id,
                i = e.find(function(e) {
                  return e.id === a;
                });
              (t.innerHTML = "<div>".concat(
                i.name,
                "</div>\n                <div class='btn-container'>\n                    <button id='show-todo-form'>Add a Todo</button>\n                    <button id='go-home' class='btn-alt'>Go Home</button>\n                    <div id='delete-project'>Delete project</div>\n                </div>"
              )),
                l(i),
                d(),
                m(a),
                h(a),
                g();
            });
          });
        }),
      w = function() {
        var e = document.getElementById("project-name").value,
          t = new Date().getTime(),
          n = (function(e, t, n) {
            return { id: e, name: t, todo: n };
          })(e.replace(/\W/g, "").toLowerCase() + t, e, []);
        return n;
      };
    var x = function() {
        var e = document.querySelector('input[type="text"]#project-name');
        e.addEventListener("blur", function() {
          p(e);
        }),
          document
            .getElementById("project-form")
            .addEventListener("submit", function() {
              if ((event.preventDefault(), p(e))) {
                var t = a(),
                  n = w();
                return (
                  t.push(n),
                  localStorage.setItem("projects", JSON.stringify(t)),
                  i(t),
                  y(),
                  (document.getElementById("project-name").value = ""),
                  t
                );
              }
              return !1;
            });
      },
      k = (n(6), a());
    x(), i(k), y();
  }
]);
