import { du as getCurrentParams, dq as getLocalVideoStream } from "./getParticipantMedia-D9ChmEqq.js";
import { bN, c4, c5, cg, cq, cl, cv, c6, bG, bT, bP, cc, b4, e, c, cD, cE, cC, e7, el, al, cF, a4, ax, aB, aA, aD, aC, ba, am, ad, g, an, a7, a6, ai, bj, ao, bk, i, a9, bA, aa, ab, j, k, l, aU, bl, ej, m, n, dl, o, q, s, t, w, dj, f, ap, cG, ae, bB, c7, c9, dX, x, eo, em, dH, cH, y, z, A, dk, cI, B, dZ, bS, bR, cj, ct, co, cy, aJ, ec, b6, bX, C, bY, bZ, b_, b$, c0, dA, aI, dt, bQ, d_, ep, ef, bO, cJ, aq, e3, bL, bJ, bK, dr, ea, dD, bV, dE, bU, ew, dy, eg, ar, ek, dW, ei, as, e0, d$, dO, dp, dn, dm, ds, dC, eh, bF, bM, e1, D, e4, dT, cd, bc, bh, bd, bi, aN, dg, aO, dh, be, h, ci, cs, cn, cx, a8, c1, aH, bI, aE, bC, ah, a1, aj, ak, af, c8, aM, aP, aQ, di, aV, aS, aW, aX, aY, b2, a_, b8, bf, bm, bu, bw, de, dv, dB, dz, c2, cK, cL, cb, a$, E, aR, aT, a5, dJ, dG, b0, a2, bH, F, b, a, p, cM, aF, dQ, cO, cN, cP, bg, G, H, I, es, eu, et, eq, a3, cQ, cR, cS, bD, en, ck, cu, cp, cz, cV, M, Q, J, e9, K, cT, at, bn, bo, bp, bq, cU, c3, b5, dK, b1, r, L, ev, N, az, ay, dM, bv, df, dL, aG, O, P, dR, au, cW, dx, cA, cf, cX, ch, cr, cm, cw, X, dw, aZ, e6, dN, dF, e5, ee, e2, R, bW, ca, br, cY, dP, S, dU, e8, aK, dI, er, bs, dS, T, dV, cZ, U, V, W, Y, bx, eb, ed, Z, _, $, by, bz, aL, ac, d5, c$, d7, d0, d6, d4, d3, c_, d9, d1, d8, d2, a0, b7, db, bE, da, u, av, b3, aw, b9, bb, bt, ag, dc, dd, ce, cB, v, d, dY } from "./getParticipantMedia-D9ChmEqq.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var selfie_segmentation = {};
var hasRequiredSelfie_segmentation;
function requireSelfie_segmentation() {
  if (hasRequiredSelfie_segmentation) return selfie_segmentation;
  hasRequiredSelfie_segmentation = 1;
  (function() {
    var x2;
    function aa2(a10) {
      var b10 = 0;
      return function() {
        return b10 < a10.length ? { done: false, value: a10[b10++] } : { done: true };
      };
    }
    var ba2 = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a10, b10, c10) {
      if (a10 == Array.prototype || a10 == Object.prototype) return a10;
      a10[b10] = c10.value;
      return a10;
    };
    function ca2(a10) {
      a10 = ["object" == typeof globalThis && globalThis, a10, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof commonjsGlobal && commonjsGlobal];
      for (var b10 = 0; b10 < a10.length; ++b10) {
        var c10 = a10[b10];
        if (c10 && c10.Math == Math) return c10;
      }
      throw Error("Cannot find global object");
    }
    var y2 = ca2(this);
    function z2(a10, b10) {
      if (b10) a: {
        var c10 = y2;
        a10 = a10.split(".");
        for (var d10 = 0; d10 < a10.length - 1; d10++) {
          var e10 = a10[d10];
          if (!(e10 in c10)) break a;
          c10 = c10[e10];
        }
        a10 = a10[a10.length - 1];
        d10 = c10[a10];
        b10 = b10(d10);
        b10 != d10 && null != b10 && ba2(c10, a10, { configurable: true, writable: true, value: b10 });
      }
    }
    z2("Symbol", function(a10) {
      function b10(g2) {
        if (this instanceof b10) throw new TypeError("Symbol is not a constructor");
        return new c10(d10 + (g2 || "") + "_" + e10++, g2);
      }
      function c10(g2, f2) {
        this.h = g2;
        ba2(this, "description", { configurable: true, writable: true, value: f2 });
      }
      if (a10) return a10;
      c10.prototype.toString = function() {
        return this.h;
      };
      var d10 = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", e10 = 0;
      return b10;
    });
    z2("Symbol.iterator", function(a10) {
      if (a10) return a10;
      a10 = Symbol("Symbol.iterator");
      for (var b10 = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c10 = 0; c10 < b10.length; c10++) {
        var d10 = y2[b10[c10]];
        "function" === typeof d10 && "function" != typeof d10.prototype[a10] && ba2(d10.prototype, a10, { configurable: true, writable: true, value: function() {
          return da2(aa2(this));
        } });
      }
      return a10;
    });
    function da2(a10) {
      a10 = { next: a10 };
      a10[Symbol.iterator] = function() {
        return this;
      };
      return a10;
    }
    function A2(a10) {
      var b10 = "undefined" != typeof Symbol && Symbol.iterator && a10[Symbol.iterator];
      return b10 ? b10.call(a10) : { next: aa2(a10) };
    }
    function ea2(a10) {
      if (!(a10 instanceof Array)) {
        a10 = A2(a10);
        for (var b10, c10 = []; !(b10 = a10.next()).done; ) c10.push(b10.value);
        a10 = c10;
      }
      return a10;
    }
    var fa = "function" == typeof Object.assign ? Object.assign : function(a10, b10) {
      for (var c10 = 1; c10 < arguments.length; c10++) {
        var d10 = arguments[c10];
        if (d10) for (var e10 in d10) Object.prototype.hasOwnProperty.call(d10, e10) && (a10[e10] = d10[e10]);
      }
      return a10;
    };
    z2("Object.assign", function(a10) {
      return a10 || fa;
    });
    var ha = "function" == typeof Object.create ? Object.create : function(a10) {
      function b10() {
      }
      b10.prototype = a10;
      return new b10();
    }, ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
      var ja;
      a: {
        var ka = { a: true }, la = {};
        try {
          la.__proto__ = ka;
          ja = la.a;
          break a;
        } catch (a10) {
        }
        ja = false;
      }
      ia = ja ? function(a10, b10) {
        a10.__proto__ = b10;
        if (a10.__proto__ !== b10) throw new TypeError(a10 + " is not extensible");
        return a10;
      } : null;
    }
    var ma = ia;
    function na(a10, b10) {
      a10.prototype = ha(b10.prototype);
      a10.prototype.constructor = a10;
      if (ma) ma(a10, b10);
      else for (var c10 in b10) if ("prototype" != c10) if (Object.defineProperties) {
        var d10 = Object.getOwnPropertyDescriptor(b10, c10);
        d10 && Object.defineProperty(a10, c10, d10);
      } else a10[c10] = b10[c10];
      a10.za = b10.prototype;
    }
    function oa() {
      this.m = false;
      this.j = null;
      this.i = void 0;
      this.h = 1;
      this.v = this.s = 0;
      this.l = null;
    }
    function pa(a10) {
      if (a10.m) throw new TypeError("Generator is already running");
      a10.m = true;
    }
    oa.prototype.u = function(a10) {
      this.i = a10;
    };
    function qa(a10, b10) {
      a10.l = { ma: b10, na: true };
      a10.h = a10.s || a10.v;
    }
    oa.prototype.return = function(a10) {
      this.l = { return: a10 };
      this.h = this.v;
    };
    function D2(a10, b10, c10) {
      a10.h = c10;
      return { value: b10 };
    }
    function ra(a10) {
      this.h = new oa();
      this.i = a10;
    }
    function sa(a10, b10) {
      pa(a10.h);
      var c10 = a10.h.j;
      if (c10) return ta(a10, "return" in c10 ? c10["return"] : function(d10) {
        return { value: d10, done: true };
      }, b10, a10.h.return);
      a10.h.return(b10);
      return ua(a10);
    }
    function ta(a10, b10, c10, d10) {
      try {
        var e10 = b10.call(a10.h.j, c10);
        if (!(e10 instanceof Object)) throw new TypeError("Iterator result " + e10 + " is not an object");
        if (!e10.done) return a10.h.m = false, e10;
        var g2 = e10.value;
      } catch (f2) {
        return a10.h.j = null, qa(a10.h, f2), ua(a10);
      }
      a10.h.j = null;
      d10.call(a10.h, g2);
      return ua(a10);
    }
    function ua(a10) {
      for (; a10.h.h; ) try {
        var b10 = a10.i(a10.h);
        if (b10) return a10.h.m = false, { value: b10.value, done: false };
      } catch (c10) {
        a10.h.i = void 0, qa(a10.h, c10);
      }
      a10.h.m = false;
      if (a10.h.l) {
        b10 = a10.h.l;
        a10.h.l = null;
        if (b10.na) throw b10.ma;
        return { value: b10.return, done: true };
      }
      return { value: void 0, done: true };
    }
    function va(a10) {
      this.next = function(b10) {
        pa(a10.h);
        a10.h.j ? b10 = ta(a10, a10.h.j.next, b10, a10.h.u) : (a10.h.u(b10), b10 = ua(a10));
        return b10;
      };
      this.throw = function(b10) {
        pa(a10.h);
        a10.h.j ? b10 = ta(a10, a10.h.j["throw"], b10, a10.h.u) : (qa(a10.h, b10), b10 = ua(a10));
        return b10;
      };
      this.return = function(b10) {
        return sa(a10, b10);
      };
      this[Symbol.iterator] = function() {
        return this;
      };
    }
    function wa(a10) {
      function b10(d10) {
        return a10.next(d10);
      }
      function c10(d10) {
        return a10.throw(d10);
      }
      return new Promise(function(d10, e10) {
        function g2(f2) {
          f2.done ? d10(f2.value) : Promise.resolve(f2.value).then(b10, c10).then(g2, e10);
        }
        g2(a10.next());
      });
    }
    function E2(a10) {
      return wa(new va(new ra(a10)));
    }
    z2("Promise", function(a10) {
      function b10(f2) {
        this.i = 0;
        this.j = void 0;
        this.h = [];
        this.u = false;
        var h2 = this.l();
        try {
          f2(h2.resolve, h2.reject);
        } catch (k2) {
          h2.reject(k2);
        }
      }
      function c10() {
        this.h = null;
      }
      function d10(f2) {
        return f2 instanceof b10 ? f2 : new b10(function(h2) {
          h2(f2);
        });
      }
      if (a10) return a10;
      c10.prototype.i = function(f2) {
        if (null == this.h) {
          this.h = [];
          var h2 = this;
          this.j(function() {
            h2.m();
          });
        }
        this.h.push(f2);
      };
      var e10 = y2.setTimeout;
      c10.prototype.j = function(f2) {
        e10(f2, 0);
      };
      c10.prototype.m = function() {
        for (; this.h && this.h.length; ) {
          var f2 = this.h;
          this.h = [];
          for (var h2 = 0; h2 < f2.length; ++h2) {
            var k2 = f2[h2];
            f2[h2] = null;
            try {
              k2();
            } catch (l2) {
              this.l(l2);
            }
          }
        }
        this.h = null;
      };
      c10.prototype.l = function(f2) {
        this.j(function() {
          throw f2;
        });
      };
      b10.prototype.l = function() {
        function f2(l2) {
          return function(m2) {
            k2 || (k2 = true, l2.call(h2, m2));
          };
        }
        var h2 = this, k2 = false;
        return { resolve: f2(this.I), reject: f2(this.m) };
      };
      b10.prototype.I = function(f2) {
        if (f2 === this) this.m(new TypeError("A Promise cannot resolve to itself"));
        else if (f2 instanceof b10) this.L(f2);
        else {
          a: switch (typeof f2) {
            case "object":
              var h2 = null != f2;
              break a;
            case "function":
              h2 = true;
              break a;
            default:
              h2 = false;
          }
          h2 ? this.F(f2) : this.s(f2);
        }
      };
      b10.prototype.F = function(f2) {
        var h2 = void 0;
        try {
          h2 = f2.then;
        } catch (k2) {
          this.m(k2);
          return;
        }
        "function" == typeof h2 ? this.M(h2, f2) : this.s(f2);
      };
      b10.prototype.m = function(f2) {
        this.v(2, f2);
      };
      b10.prototype.s = function(f2) {
        this.v(1, f2);
      };
      b10.prototype.v = function(f2, h2) {
        if (0 != this.i) throw Error("Cannot settle(" + f2 + ", " + h2 + "): Promise already settled in state" + this.i);
        this.i = f2;
        this.j = h2;
        2 === this.i && this.K();
        this.H();
      };
      b10.prototype.K = function() {
        var f2 = this;
        e10(function() {
          if (f2.D()) {
            var h2 = y2.console;
            "undefined" !== typeof h2 && h2.error(f2.j);
          }
        }, 1);
      };
      b10.prototype.D = function() {
        if (this.u) return false;
        var f2 = y2.CustomEvent, h2 = y2.Event, k2 = y2.dispatchEvent;
        if ("undefined" === typeof k2) return true;
        "function" === typeof f2 ? f2 = new f2("unhandledrejection", { cancelable: true }) : "function" === typeof h2 ? f2 = new h2("unhandledrejection", { cancelable: true }) : (f2 = y2.document.createEvent("CustomEvent"), f2.initCustomEvent("unhandledrejection", false, true, f2));
        f2.promise = this;
        f2.reason = this.j;
        return k2(f2);
      };
      b10.prototype.H = function() {
        if (null != this.h) {
          for (var f2 = 0; f2 < this.h.length; ++f2) g2.i(this.h[f2]);
          this.h = null;
        }
      };
      var g2 = new c10();
      b10.prototype.L = function(f2) {
        var h2 = this.l();
        f2.T(h2.resolve, h2.reject);
      };
      b10.prototype.M = function(f2, h2) {
        var k2 = this.l();
        try {
          f2.call(h2, k2.resolve, k2.reject);
        } catch (l2) {
          k2.reject(l2);
        }
      };
      b10.prototype.then = function(f2, h2) {
        function k2(p2, n2) {
          return "function" == typeof p2 ? function(q2) {
            try {
              l2(p2(q2));
            } catch (t2) {
              m2(t2);
            }
          } : n2;
        }
        var l2, m2, r2 = new b10(function(p2, n2) {
          l2 = p2;
          m2 = n2;
        });
        this.T(k2(f2, l2), k2(h2, m2));
        return r2;
      };
      b10.prototype.catch = function(f2) {
        return this.then(void 0, f2);
      };
      b10.prototype.T = function(f2, h2) {
        function k2() {
          switch (l2.i) {
            case 1:
              f2(l2.j);
              break;
            case 2:
              h2(l2.j);
              break;
            default:
              throw Error("Unexpected state: " + l2.i);
          }
        }
        var l2 = this;
        null == this.h ? g2.i(k2) : this.h.push(k2);
        this.u = true;
      };
      b10.resolve = d10;
      b10.reject = function(f2) {
        return new b10(function(h2, k2) {
          k2(f2);
        });
      };
      b10.race = function(f2) {
        return new b10(function(h2, k2) {
          for (var l2 = A2(f2), m2 = l2.next(); !m2.done; m2 = l2.next()) d10(m2.value).T(h2, k2);
        });
      };
      b10.all = function(f2) {
        var h2 = A2(f2), k2 = h2.next();
        return k2.done ? d10([]) : new b10(function(l2, m2) {
          function r2(q2) {
            return function(t2) {
              p2[q2] = t2;
              n2--;
              0 == n2 && l2(p2);
            };
          }
          var p2 = [], n2 = 0;
          do
            p2.push(void 0), n2++, d10(k2.value).T(r2(p2.length - 1), m2), k2 = h2.next();
          while (!k2.done);
        });
      };
      return b10;
    });
    function xa(a10, b10) {
      a10 instanceof String && (a10 += "");
      var c10 = 0, d10 = false, e10 = { next: function() {
        if (!d10 && c10 < a10.length) {
          var g2 = c10++;
          return { value: b10(g2, a10[g2]), done: false };
        }
        d10 = true;
        return { done: true, value: void 0 };
      } };
      e10[Symbol.iterator] = function() {
        return e10;
      };
      return e10;
    }
    z2("Array.prototype.keys", function(a10) {
      return a10 ? a10 : function() {
        return xa(this, function(b10) {
          return b10;
        });
      };
    });
    z2("Array.prototype.fill", function(a10) {
      return a10 ? a10 : function(b10, c10, d10) {
        var e10 = this.length || 0;
        0 > c10 && (c10 = Math.max(0, e10 + c10));
        if (null == d10 || d10 > e10) d10 = e10;
        d10 = Number(d10);
        0 > d10 && (d10 = Math.max(0, e10 + d10));
        for (c10 = Number(c10 || 0); c10 < d10; c10++) this[c10] = b10;
        return this;
      };
    });
    function F2(a10) {
      return a10 ? a10 : Array.prototype.fill;
    }
    z2("Int8Array.prototype.fill", F2);
    z2("Uint8Array.prototype.fill", F2);
    z2("Uint8ClampedArray.prototype.fill", F2);
    z2("Int16Array.prototype.fill", F2);
    z2("Uint16Array.prototype.fill", F2);
    z2("Int32Array.prototype.fill", F2);
    z2("Uint32Array.prototype.fill", F2);
    z2("Float32Array.prototype.fill", F2);
    z2("Float64Array.prototype.fill", F2);
    z2("Object.is", function(a10) {
      return a10 ? a10 : function(b10, c10) {
        return b10 === c10 ? 0 !== b10 || 1 / b10 === 1 / c10 : b10 !== b10 && c10 !== c10;
      };
    });
    z2("Array.prototype.includes", function(a10) {
      return a10 ? a10 : function(b10, c10) {
        var d10 = this;
        d10 instanceof String && (d10 = String(d10));
        var e10 = d10.length;
        c10 = c10 || 0;
        for (0 > c10 && (c10 = Math.max(c10 + e10, 0)); c10 < e10; c10++) {
          var g2 = d10[c10];
          if (g2 === b10 || Object.is(g2, b10)) return true;
        }
        return false;
      };
    });
    z2("String.prototype.includes", function(a10) {
      return a10 ? a10 : function(b10, c10) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
        if (b10 instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        return -1 !== this.indexOf(b10, c10 || 0);
      };
    });
    var ya = this || self;
    function Aa(a10, b10) {
      a10 = a10.split(".");
      var c10 = ya;
      a10[0] in c10 || "undefined" == typeof c10.execScript || c10.execScript("var " + a10[0]);
      for (var d10; a10.length && (d10 = a10.shift()); ) a10.length || void 0 === b10 ? c10[d10] && c10[d10] !== Object.prototype[d10] ? c10 = c10[d10] : c10 = c10[d10] = {} : c10[d10] = b10;
    }
    function Ba(a10) {
      var b10;
      a: {
        if (b10 = ya.navigator) {
          if (b10 = b10.userAgent) break a;
        }
        b10 = "";
      }
      return -1 != b10.indexOf(a10);
    }
    var Ca = Array.prototype.map ? function(a10, b10) {
      return Array.prototype.map.call(a10, b10, void 0);
    } : function(a10, b10) {
      for (var c10 = a10.length, d10 = Array(c10), e10 = "string" === typeof a10 ? a10.split("") : a10, g2 = 0; g2 < c10; g2++) g2 in e10 && (d10[g2] = b10.call(void 0, e10[g2], g2, a10));
      return d10;
    };
    var Da = {}, Ea = null;
    function Fa(a10) {
      var b10 = a10.length, c10 = 3 * b10 / 4;
      c10 % 3 ? c10 = Math.floor(c10) : -1 != "=.".indexOf(a10[b10 - 1]) && (c10 = -1 != "=.".indexOf(a10[b10 - 2]) ? c10 - 2 : c10 - 1);
      var d10 = new Uint8Array(c10), e10 = 0;
      Ga(a10, function(g2) {
        d10[e10++] = g2;
      });
      return e10 !== c10 ? d10.subarray(0, e10) : d10;
    }
    function Ga(a10, b10) {
      function c10(k2) {
        for (; d10 < a10.length; ) {
          var l2 = a10.charAt(d10++), m2 = Ea[l2];
          if (null != m2) return m2;
          if (!/^[\s\xa0]*$/.test(l2)) throw Error("Unknown base64 encoding at char: " + l2);
        }
        return k2;
      }
      Ha();
      for (var d10 = 0; ; ) {
        var e10 = c10(-1), g2 = c10(0), f2 = c10(64), h2 = c10(64);
        if (64 === h2 && -1 === e10) break;
        b10(e10 << 2 | g2 >> 4);
        64 != f2 && (b10(g2 << 4 & 240 | f2 >> 2), 64 != h2 && b10(f2 << 6 & 192 | h2));
      }
    }
    function Ha() {
      if (!Ea) {
        Ea = {};
        for (var a10 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b10 = ["+/=", "+/", "-_=", "-_.", "-_"], c10 = 0; 5 > c10; c10++) {
          var d10 = a10.concat(b10[c10].split(""));
          Da[c10] = d10;
          for (var e10 = 0; e10 < d10.length; e10++) {
            var g2 = d10[e10];
            void 0 === Ea[g2] && (Ea[g2] = e10);
          }
        }
      }
    }
    var Ia = "undefined" !== typeof Uint8Array, Ja = !(Ba("Trident") || Ba("MSIE")) && "function" === typeof ya.btoa;
    function Ka(a10) {
      if (!Ja) {
        var b10;
        void 0 === b10 && (b10 = 0);
        Ha();
        b10 = Da[b10];
        for (var c10 = Array(Math.floor(a10.length / 3)), d10 = b10[64] || "", e10 = 0, g2 = 0; e10 < a10.length - 2; e10 += 3) {
          var f2 = a10[e10], h2 = a10[e10 + 1], k2 = a10[e10 + 2], l2 = b10[f2 >> 2];
          f2 = b10[(f2 & 3) << 4 | h2 >> 4];
          h2 = b10[(h2 & 15) << 2 | k2 >> 6];
          k2 = b10[k2 & 63];
          c10[g2++] = l2 + f2 + h2 + k2;
        }
        l2 = 0;
        k2 = d10;
        switch (a10.length - e10) {
          case 2:
            l2 = a10[e10 + 1], k2 = b10[(l2 & 15) << 2] || d10;
          case 1:
            a10 = a10[e10], c10[g2] = b10[a10 >> 2] + b10[(a10 & 3) << 4 | l2 >> 4] + k2 + d10;
        }
        return c10.join("");
      }
      for (b10 = ""; 10240 < a10.length; ) b10 += String.fromCharCode.apply(null, a10.subarray(0, 10240)), a10 = a10.subarray(10240);
      b10 += String.fromCharCode.apply(
        null,
        a10
      );
      return btoa(b10);
    }
    var La = RegExp("[-_.]", "g");
    function Ma(a10) {
      switch (a10) {
        case "-":
          return "+";
        case "_":
          return "/";
        case ".":
          return "=";
        default:
          return "";
      }
    }
    function Na(a10) {
      if (!Ja) return Fa(a10);
      La.test(a10) && (a10 = a10.replace(La, Ma));
      a10 = atob(a10);
      for (var b10 = new Uint8Array(a10.length), c10 = 0; c10 < a10.length; c10++) b10[c10] = a10.charCodeAt(c10);
      return b10;
    }
    var Oa;
    function Pa() {
      return Oa || (Oa = new Uint8Array(0));
    }
    var Qa = {};
    var Ra = "function" === typeof Uint8Array.prototype.slice, G2 = 0, H2 = 0;
    function Sa(a10) {
      var b10 = 0 > a10;
      a10 = Math.abs(a10);
      var c10 = a10 >>> 0;
      a10 = Math.floor((a10 - c10) / 4294967296);
      b10 && (c10 = A2(Ta(c10, a10)), b10 = c10.next().value, a10 = c10.next().value, c10 = b10);
      G2 = c10 >>> 0;
      H2 = a10 >>> 0;
    }
    var Ua = "function" === typeof BigInt;
    function Ta(a10, b10) {
      b10 = ~b10;
      a10 ? a10 = ~a10 + 1 : b10 += 1;
      return [a10, b10];
    }
    function Va(a10, b10) {
      this.i = a10 >>> 0;
      this.h = b10 >>> 0;
    }
    function Wa(a10) {
      if (!a10) return Xa || (Xa = new Va(0, 0));
      if (!/^-?\d+$/.test(a10)) return null;
      if (16 > a10.length) Sa(Number(a10));
      else if (Ua) a10 = BigInt(a10), G2 = Number(a10 & BigInt(4294967295)) >>> 0, H2 = Number(a10 >> BigInt(32) & BigInt(4294967295));
      else {
        var b10 = +("-" === a10[0]);
        H2 = G2 = 0;
        for (var c10 = a10.length, d10 = b10, e10 = (c10 - b10) % 6 + b10; e10 <= c10; d10 = e10, e10 += 6) d10 = Number(a10.slice(d10, e10)), H2 *= 1e6, G2 = 1e6 * G2 + d10, 4294967296 <= G2 && (H2 += G2 / 4294967296 | 0, G2 %= 4294967296);
        b10 && (b10 = A2(Ta(G2, H2)), a10 = b10.next().value, b10 = b10.next().value, G2 = a10, H2 = b10);
      }
      return new Va(G2, H2);
    }
    var Xa;
    function Ya(a10, b10) {
      return Error("Invalid wire type: " + a10 + " (at position " + b10 + ")");
    }
    function Za() {
      return Error("Failed to read varint, encoding is invalid.");
    }
    function $a(a10, b10) {
      return Error("Tried to read past the end of the data " + b10 + " > " + a10);
    }
    function K2() {
      throw Error("Invalid UTF8");
    }
    function ab2(a10, b10) {
      b10 = String.fromCharCode.apply(null, b10);
      return null == a10 ? b10 : a10 + b10;
    }
    var bb2 = void 0, cb2, db2 = "undefined" !== typeof TextDecoder, eb2, fb = "undefined" !== typeof TextEncoder;
    var gb;
    function hb(a10) {
      if (a10 !== Qa) throw Error("illegal external caller");
    }
    function ib(a10, b10) {
      hb(b10);
      this.V = a10;
      if (null != a10 && 0 === a10.length) throw Error("ByteString should be constructed with non-empty values");
    }
    function jb() {
      return gb || (gb = new ib(null, Qa));
    }
    function kb(a10) {
      hb(Qa);
      var b10 = a10.V;
      b10 = null == b10 || Ia && null != b10 && b10 instanceof Uint8Array ? b10 : "string" === typeof b10 ? Na(b10) : null;
      return null == b10 ? b10 : a10.V = b10;
    }
    function lb(a10) {
      if ("string" === typeof a10) return { buffer: Na(a10), C: false };
      if (Array.isArray(a10)) return { buffer: new Uint8Array(a10), C: false };
      if (a10.constructor === Uint8Array) return { buffer: a10, C: false };
      if (a10.constructor === ArrayBuffer) return { buffer: new Uint8Array(a10), C: false };
      if (a10.constructor === ib) return { buffer: kb(a10) || Pa(), C: true };
      if (a10 instanceof Uint8Array) return { buffer: new Uint8Array(a10.buffer, a10.byteOffset, a10.byteLength), C: false };
      throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
    }
    function mb(a10, b10) {
      this.i = null;
      this.m = false;
      this.h = this.j = this.l = 0;
      nb(this, a10, b10);
    }
    function nb(a10, b10, c10) {
      c10 = void 0 === c10 ? {} : c10;
      a10.S = void 0 === c10.S ? false : c10.S;
      b10 && (b10 = lb(b10), a10.i = b10.buffer, a10.m = b10.C, a10.l = 0, a10.j = a10.i.length, a10.h = a10.l);
    }
    mb.prototype.reset = function() {
      this.h = this.l;
    };
    function L2(a10, b10) {
      a10.h = b10;
      if (b10 > a10.j) throw $a(a10.j, b10);
    }
    function ob(a10) {
      var b10 = a10.i, c10 = a10.h, d10 = b10[c10++], e10 = d10 & 127;
      if (d10 & 128 && (d10 = b10[c10++], e10 |= (d10 & 127) << 7, d10 & 128 && (d10 = b10[c10++], e10 |= (d10 & 127) << 14, d10 & 128 && (d10 = b10[c10++], e10 |= (d10 & 127) << 21, d10 & 128 && (d10 = b10[c10++], e10 |= d10 << 28, d10 & 128 && b10[c10++] & 128 && b10[c10++] & 128 && b10[c10++] & 128 && b10[c10++] & 128 && b10[c10++] & 128))))) throw Za();
      L2(a10, c10);
      return e10;
    }
    function pb(a10, b10) {
      if (0 > b10) throw Error("Tried to read a negative byte length: " + b10);
      var c10 = a10.h, d10 = c10 + b10;
      if (d10 > a10.j) throw $a(b10, a10.j - c10);
      a10.h = d10;
      return c10;
    }
    var qb = [];
    function rb() {
      this.h = [];
    }
    rb.prototype.length = function() {
      return this.h.length;
    };
    rb.prototype.end = function() {
      var a10 = this.h;
      this.h = [];
      return a10;
    };
    function sb(a10, b10, c10) {
      for (; 0 < c10 || 127 < b10; ) a10.h.push(b10 & 127 | 128), b10 = (b10 >>> 7 | c10 << 25) >>> 0, c10 >>>= 7;
      a10.h.push(b10);
    }
    function M2(a10, b10) {
      for (; 127 < b10; ) a10.h.push(b10 & 127 | 128), b10 >>>= 7;
      a10.h.push(b10);
    }
    function tb(a10, b10) {
      if (qb.length) {
        var c10 = qb.pop();
        nb(c10, a10, b10);
        a10 = c10;
      } else a10 = new mb(a10, b10);
      this.h = a10;
      this.j = this.h.h;
      this.i = this.l = -1;
      this.setOptions(b10);
    }
    tb.prototype.setOptions = function(a10) {
      a10 = void 0 === a10 ? {} : a10;
      this.ca = void 0 === a10.ca ? false : a10.ca;
    };
    tb.prototype.reset = function() {
      this.h.reset();
      this.j = this.h.h;
      this.i = this.l = -1;
    };
    function ub(a10) {
      var b10 = a10.h;
      if (b10.h == b10.j) return false;
      a10.j = a10.h.h;
      var c10 = ob(a10.h) >>> 0;
      b10 = c10 >>> 3;
      c10 &= 7;
      if (!(0 <= c10 && 5 >= c10)) throw Ya(c10, a10.j);
      if (1 > b10) throw Error("Invalid field number: " + b10 + " (at position " + a10.j + ")");
      a10.l = b10;
      a10.i = c10;
      return true;
    }
    function vb(a10) {
      switch (a10.i) {
        case 0:
          if (0 != a10.i) vb(a10);
          else a: {
            a10 = a10.h;
            for (var b10 = a10.h, c10 = b10 + 10, d10 = a10.i; b10 < c10; ) if (0 === (d10[b10++] & 128)) {
              L2(a10, b10);
              break a;
            }
            throw Za();
          }
          break;
        case 1:
          a10 = a10.h;
          L2(a10, a10.h + 8);
          break;
        case 2:
          2 != a10.i ? vb(a10) : (b10 = ob(a10.h) >>> 0, a10 = a10.h, L2(a10, a10.h + b10));
          break;
        case 5:
          a10 = a10.h;
          L2(a10, a10.h + 4);
          break;
        case 3:
          b10 = a10.l;
          do {
            if (!ub(a10)) throw Error("Unmatched start-group tag: stream EOF");
            if (4 == a10.i) {
              if (a10.l != b10) throw Error("Unmatched end-group tag");
              break;
            }
            vb(a10);
          } while (1);
          break;
        default:
          throw Ya(a10.i, a10.j);
      }
    }
    var wb = [];
    function xb() {
      this.j = [];
      this.i = 0;
      this.h = new rb();
    }
    function N2(a10, b10) {
      0 !== b10.length && (a10.j.push(b10), a10.i += b10.length);
    }
    function yb(a10, b10) {
      if (b10 = b10.R) {
        N2(a10, a10.h.end());
        for (var c10 = 0; c10 < b10.length; c10++) N2(a10, kb(b10[c10]) || Pa());
      }
    }
    var O2 = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
    function P2(a10, b10) {
      if (O2) return a10[O2] |= b10;
      if (void 0 !== a10.A) return a10.A |= b10;
      Object.defineProperties(a10, { A: { value: b10, configurable: true, writable: true, enumerable: false } });
      return b10;
    }
    function zb(a10, b10) {
      O2 ? a10[O2] && (a10[O2] &= ~b10) : void 0 !== a10.A && (a10.A &= ~b10);
    }
    function Q2(a10) {
      var b10;
      O2 ? b10 = a10[O2] : b10 = a10.A;
      return null == b10 ? 0 : b10;
    }
    function R2(a10, b10) {
      O2 ? a10[O2] = b10 : void 0 !== a10.A ? a10.A = b10 : Object.defineProperties(a10, { A: { value: b10, configurable: true, writable: true, enumerable: false } });
    }
    function Ab(a10) {
      P2(a10, 1);
      return a10;
    }
    function Bb(a10, b10) {
      R2(b10, (a10 | 0) & -51);
    }
    function Cb(a10, b10) {
      R2(b10, (a10 | 18) & -41);
    }
    var Db = {};
    function Eb(a10) {
      return null !== a10 && "object" === typeof a10 && !Array.isArray(a10) && a10.constructor === Object;
    }
    var Fb, Gb = [];
    R2(Gb, 23);
    Fb = Object.freeze(Gb);
    function Hb(a10) {
      if (Q2(a10.o) & 2) throw Error("Cannot mutate an immutable Message");
    }
    function Ib(a10) {
      var b10 = a10.length;
      (b10 = b10 ? a10[b10 - 1] : void 0) && Eb(b10) ? b10.g = 1 : (b10 = {}, a10.push((b10.g = 1, b10)));
    }
    function Jb(a10) {
      var b10 = a10.i + a10.G;
      return a10.B || (a10.B = a10.o[b10] = {});
    }
    function S2(a10, b10) {
      return -1 === b10 ? null : b10 >= a10.i ? a10.B ? a10.B[b10] : void 0 : a10.o[b10 + a10.G];
    }
    function U2(a10, b10, c10, d10) {
      Hb(a10);
      Kb(a10, b10, c10, d10);
    }
    function Kb(a10, b10, c10, d10) {
      a10.j && (a10.j = void 0);
      b10 >= a10.i || d10 ? Jb(a10)[b10] = c10 : (a10.o[b10 + a10.G] = c10, (a10 = a10.B) && b10 in a10 && delete a10[b10]);
    }
    function Lb(a10, b10, c10, d10) {
      var e10 = S2(a10, b10);
      Array.isArray(e10) || (e10 = Fb);
      var g2 = Q2(e10);
      g2 & 1 || Ab(e10);
      if (d10) g2 & 2 || P2(e10, 2), c10 & 1 || Object.freeze(e10);
      else {
        d10 = !(c10 & 2);
        var f2 = g2 & 2;
        c10 & 1 || !f2 ? d10 && g2 & 16 && !f2 && zb(e10, 16) : (e10 = Ab(Array.prototype.slice.call(e10)), Kb(a10, b10, e10));
      }
      return e10;
    }
    function Mb(a10, b10) {
      var c10 = S2(a10, b10);
      var d10 = null == c10 ? c10 : "number" === typeof c10 || "NaN" === c10 || "Infinity" === c10 || "-Infinity" === c10 ? Number(c10) : void 0;
      null != d10 && d10 !== c10 && Kb(a10, b10, d10);
      return d10;
    }
    function Nb(a10, b10, c10, d10, e10) {
      a10.h || (a10.h = {});
      var g2 = a10.h[c10], f2 = Lb(a10, c10, 3, e10);
      if (!g2) {
        var h2 = f2;
        g2 = [];
        var k2 = !!(Q2(a10.o) & 16);
        f2 = !!(Q2(h2) & 2);
        var l2 = h2;
        !e10 && f2 && (h2 = Array.prototype.slice.call(h2));
        for (var m2 = f2, r2 = 0; r2 < h2.length; r2++) {
          var p2 = h2[r2];
          var n2 = b10, q2 = false;
          q2 = void 0 === q2 ? false : q2;
          p2 = Array.isArray(p2) ? new n2(p2) : q2 ? new n2() : void 0;
          if (void 0 !== p2) {
            n2 = p2.o;
            var t2 = q2 = Q2(n2);
            f2 && (t2 |= 2);
            k2 && (t2 |= 16);
            t2 != q2 && R2(n2, t2);
            n2 = t2;
            m2 = m2 || !!(2 & n2);
            g2.push(p2);
          }
        }
        a10.h[c10] = g2;
        k2 = Q2(h2);
        b10 = k2 | 33;
        b10 = m2 ? b10 & -9 : b10 | 8;
        k2 != b10 && (m2 = h2, Object.isFrozen(m2) && (m2 = Array.prototype.slice.call(m2)), R2(m2, b10), h2 = m2);
        l2 !== h2 && Kb(
          a10,
          c10,
          h2
        );
        (e10 || d10 && f2) && P2(g2, 2);
        d10 && Object.freeze(g2);
        return g2;
      }
      e10 || (e10 = Object.isFrozen(g2), d10 && !e10 ? Object.freeze(g2) : !d10 && e10 && (g2 = Array.prototype.slice.call(g2), a10.h[c10] = g2));
      return g2;
    }
    function Ob(a10, b10, c10) {
      var d10 = !!(Q2(a10.o) & 2);
      b10 = Nb(a10, b10, c10, d10, d10);
      a10 = Lb(a10, c10, 3, d10);
      if (!(d10 || Q2(a10) & 8)) {
        for (d10 = 0; d10 < b10.length; d10++) {
          c10 = b10[d10];
          if (Q2(c10.o) & 2) {
            var e10 = Pb(c10, false);
            e10.j = c10;
          } else e10 = c10;
          c10 !== e10 && (b10[d10] = e10, a10[d10] = e10.o);
        }
        P2(a10, 8);
      }
      return b10;
    }
    function V2(a10, b10, c10) {
      if (null != c10 && "number" !== typeof c10) throw Error("Value of float/double field must be a number|null|undefined, found " + typeof c10 + ": " + c10);
      U2(a10, b10, c10);
    }
    function Qb(a10, b10, c10, d10, e10) {
      Hb(a10);
      var g2 = Nb(a10, c10, b10, false, false);
      c10 = null != d10 ? d10 : new c10();
      a10 = Lb(a10, b10, 2, false);
      void 0 != e10 ? (g2.splice(e10, 0, c10), a10.splice(e10, 0, c10.o)) : (g2.push(c10), a10.push(c10.o));
      c10.C() && zb(a10, 8);
      return c10;
    }
    function Rb(a10, b10) {
      return null == a10 ? b10 : a10;
    }
    function W2(a10, b10, c10) {
      c10 = void 0 === c10 ? 0 : c10;
      return Rb(Mb(a10, b10), c10);
    }
    var Sb;
    function Tb(a10) {
      switch (typeof a10) {
        case "number":
          return isFinite(a10) ? a10 : String(a10);
        case "object":
          if (a10) if (Array.isArray(a10)) {
            if (0 !== (Q2(a10) & 128)) return a10 = Array.prototype.slice.call(a10), Ib(a10), a10;
          } else {
            if (Ia && null != a10 && a10 instanceof Uint8Array) return Ka(a10);
            if (a10 instanceof ib) {
              var b10 = a10.V;
              return null == b10 ? "" : "string" === typeof b10 ? b10 : a10.V = Ka(b10);
            }
          }
      }
      return a10;
    }
    function Ub(a10, b10, c10, d10) {
      if (null != a10) {
        if (Array.isArray(a10)) a10 = Vb(a10, b10, c10, void 0 !== d10);
        else if (Eb(a10)) {
          var e10 = {}, g2;
          for (g2 in a10) e10[g2] = Ub(a10[g2], b10, c10, d10);
          a10 = e10;
        } else a10 = b10(a10, d10);
        return a10;
      }
    }
    function Vb(a10, b10, c10, d10) {
      var e10 = Q2(a10);
      d10 = d10 ? !!(e10 & 16) : void 0;
      a10 = Array.prototype.slice.call(a10);
      for (var g2 = 0; g2 < a10.length; g2++) a10[g2] = Ub(a10[g2], b10, c10, d10);
      c10(e10, a10);
      return a10;
    }
    function Wb(a10) {
      return a10.ja === Db ? a10.toJSON() : Tb(a10);
    }
    function Xb(a10, b10) {
      a10 & 128 && Ib(b10);
    }
    function Yb(a10, b10, c10) {
      c10 = void 0 === c10 ? Cb : c10;
      if (null != a10) {
        if (Ia && a10 instanceof Uint8Array) return a10.length ? new ib(new Uint8Array(a10), Qa) : jb();
        if (Array.isArray(a10)) {
          var d10 = Q2(a10);
          if (d10 & 2) return a10;
          if (b10 && !(d10 & 32) && (d10 & 16 || 0 === d10)) return R2(a10, d10 | 2), a10;
          a10 = Vb(a10, Yb, d10 & 4 ? Cb : c10, true);
          b10 = Q2(a10);
          b10 & 4 && b10 & 2 && Object.freeze(a10);
          return a10;
        }
        return a10.ja === Db ? Zb(a10) : a10;
      }
    }
    function $b(a10, b10, c10, d10, e10, g2, f2) {
      if (a10 = a10.h && a10.h[c10]) {
        d10 = Q2(a10);
        d10 & 2 ? d10 = a10 : (g2 = Ca(a10, Zb), Cb(d10, g2), Object.freeze(g2), d10 = g2);
        Hb(b10);
        f2 = null == d10 ? Fb : Ab([]);
        if (null != d10) {
          g2 = !!d10.length;
          for (a10 = 0; a10 < d10.length; a10++) {
            var h2 = d10[a10];
            g2 = g2 && !(Q2(h2.o) & 2);
            f2[a10] = h2.o;
          }
          g2 = (g2 ? 8 : 0) | 1;
          a10 = Q2(f2);
          (a10 & g2) !== g2 && (Object.isFrozen(f2) && (f2 = Array.prototype.slice.call(f2)), R2(f2, a10 | g2));
          b10.h || (b10.h = {});
          b10.h[c10] = d10;
        } else b10.h && (b10.h[c10] = void 0);
        Kb(b10, c10, f2, e10);
      } else U2(b10, c10, Yb(d10, g2, f2), e10);
    }
    function Zb(a10) {
      if (Q2(a10.o) & 2) return a10;
      a10 = Pb(a10, true);
      P2(a10.o, 2);
      return a10;
    }
    function Pb(a10, b10) {
      var c10 = a10.o, d10 = [];
      P2(d10, 16);
      var e10 = a10.constructor.h;
      e10 && d10.push(e10);
      e10 = a10.B;
      if (e10) {
        d10.length = c10.length;
        d10.fill(void 0, d10.length, c10.length);
        var g2 = {};
        d10[d10.length - 1] = g2;
      }
      0 !== (Q2(c10) & 128) && Ib(d10);
      b10 = b10 || a10.C() ? Cb : Bb;
      g2 = a10.constructor;
      Sb = d10;
      d10 = new g2(d10);
      Sb = void 0;
      a10.R && (d10.R = a10.R.slice());
      g2 = !!(Q2(c10) & 16);
      for (var f2 = e10 ? c10.length - 1 : c10.length, h2 = 0; h2 < f2; h2++) $b(a10, d10, h2 - a10.G, c10[h2], false, g2, b10);
      if (e10) for (var k2 in e10) $b(a10, d10, +k2, e10[k2], true, g2, b10);
      return d10;
    }
    function X2(a10, b10, c10) {
      null == a10 && (a10 = Sb);
      Sb = void 0;
      var d10 = this.constructor.i || 0, e10 = 0 < d10, g2 = this.constructor.h, f2 = false;
      if (null == a10) {
        a10 = g2 ? [g2] : [];
        var h2 = 48;
        var k2 = true;
        e10 && (d10 = 0, h2 |= 128);
        R2(a10, h2);
      } else {
        if (!Array.isArray(a10)) throw Error();
        if (g2 && g2 !== a10[0]) throw Error();
        var l2 = h2 = P2(a10, 0);
        if (k2 = 0 !== (16 & l2)) (f2 = 0 !== (32 & l2)) || (l2 |= 32);
        if (e10) if (128 & l2) d10 = 0;
        else {
          if (0 < a10.length) {
            var m2 = a10[a10.length - 1];
            if (Eb(m2) && "g" in m2) {
              d10 = 0;
              l2 |= 128;
              delete m2.g;
              var r2 = true, p2;
              for (p2 in m2) {
                r2 = false;
                break;
              }
              r2 && a10.pop();
            }
          }
        }
        else if (128 & l2) throw Error();
        h2 !== l2 && R2(a10, l2);
      }
      this.G = (g2 ? 0 : -1) - d10;
      this.h = void 0;
      this.o = a10;
      a: {
        g2 = this.o.length;
        d10 = g2 - 1;
        if (g2 && (g2 = this.o[d10], Eb(g2))) {
          this.B = g2;
          this.i = d10 - this.G;
          break a;
        }
        void 0 !== b10 && -1 < b10 ? (this.i = Math.max(b10, d10 + 1 - this.G), this.B = void 0) : this.i = Number.MAX_VALUE;
      }
      if (!e10 && this.B && "g" in this.B) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (c10) {
        b10 = k2 && !f2 && true;
        e10 = this.i;
        var n2;
        for (k2 = 0; k2 < c10.length; k2++) f2 = c10[k2], f2 < e10 ? (f2 += this.G, (d10 = a10[f2]) ? ac2(d10, b10) : a10[f2] = Fb) : (n2 || (n2 = Jb(this)), (d10 = n2[f2]) ? ac2(d10, b10) : n2[f2] = Fb);
      }
    }
    X2.prototype.toJSON = function() {
      return Vb(this.o, Wb, Xb);
    };
    X2.prototype.C = function() {
      return !!(Q2(this.o) & 2);
    };
    function ac2(a10, b10) {
      if (Array.isArray(a10)) {
        var c10 = Q2(a10), d10 = 1;
        !b10 || c10 & 2 || (d10 |= 16);
        (c10 & d10) !== d10 && R2(a10, c10 | d10);
      }
    }
    X2.prototype.ja = Db;
    X2.prototype.toString = function() {
      return this.o.toString();
    };
    function bc2(a10, b10, c10) {
      if (c10) {
        var d10 = {}, e10;
        for (e10 in c10) {
          var g2 = c10[e10], f2 = g2.ra;
          f2 || (d10.J = g2.xa || g2.oa.W, g2.ia ? (d10.aa = cc2(g2.ia), f2 = /* @__PURE__ */ (function(h2) {
            return function(k2, l2, m2) {
              return h2.J(k2, l2, m2, h2.aa);
            };
          })(d10)) : g2.ka ? (d10.Z = dc2(g2.da.P, g2.ka), f2 = /* @__PURE__ */ (function(h2) {
            return function(k2, l2, m2) {
              return h2.J(k2, l2, m2, h2.Z);
            };
          })(d10)) : f2 = d10.J, g2.ra = f2);
          f2(b10, a10, g2.da);
          d10 = { J: d10.J, aa: d10.aa, Z: d10.Z };
        }
      }
      yb(b10, a10);
    }
    var ec2 = Symbol();
    function fc(a10, b10, c10) {
      return a10[ec2] || (a10[ec2] = function(d10, e10) {
        return b10(d10, e10, c10);
      });
    }
    function gc(a10) {
      var b10 = a10[ec2];
      if (!b10) {
        var c10 = hc(a10);
        b10 = function(d10, e10) {
          return ic(d10, e10, c10);
        };
        a10[ec2] = b10;
      }
      return b10;
    }
    function jc(a10) {
      var b10 = a10.ia;
      if (b10) return gc(b10);
      if (b10 = a10.wa) return fc(a10.da.P, b10, a10.ka);
    }
    function kc(a10) {
      var b10 = jc(a10), c10 = a10.da, d10 = a10.oa.U;
      return b10 ? function(e10, g2) {
        return d10(e10, g2, c10, b10);
      } : function(e10, g2) {
        return d10(e10, g2, c10);
      };
    }
    function lc(a10, b10) {
      var c10 = a10[b10];
      "function" == typeof c10 && 0 === c10.length && (c10 = c10(), a10[b10] = c10);
      return Array.isArray(c10) && (mc in c10 || nc in c10 || 0 < c10.length && "function" == typeof c10[0]) ? c10 : void 0;
    }
    function oc(a10, b10, c10, d10, e10, g2) {
      b10.P = a10[0];
      var f2 = 1;
      if (a10.length > f2 && "number" !== typeof a10[f2]) {
        var h2 = a10[f2++];
        c10(b10, h2);
      }
      for (; f2 < a10.length; ) {
        c10 = a10[f2++];
        for (var k2 = f2 + 1; k2 < a10.length && "number" !== typeof a10[k2]; ) k2++;
        h2 = a10[f2++];
        k2 -= f2;
        switch (k2) {
          case 0:
            d10(b10, c10, h2);
            break;
          case 1:
            (k2 = lc(a10, f2)) ? (f2++, e10(b10, c10, h2, k2)) : d10(b10, c10, h2, a10[f2++]);
            break;
          case 2:
            k2 = f2++;
            k2 = lc(a10, k2);
            e10(b10, c10, h2, k2, a10[f2++]);
            break;
          case 3:
            g2(b10, c10, h2, a10[f2++], a10[f2++], a10[f2++]);
            break;
          case 4:
            g2(b10, c10, h2, a10[f2++], a10[f2++], a10[f2++], a10[f2++]);
            break;
          default:
            throw Error("unexpected number of binary field arguments: " + k2);
        }
      }
      return b10;
    }
    var pc = Symbol();
    function cc2(a10) {
      var b10 = a10[pc];
      if (!b10) {
        var c10 = qc(a10);
        b10 = function(d10, e10) {
          return rc(d10, e10, c10);
        };
        a10[pc] = b10;
      }
      return b10;
    }
    function dc2(a10, b10) {
      var c10 = a10[pc];
      c10 || (c10 = function(d10, e10) {
        return bc2(d10, e10, b10);
      }, a10[pc] = c10);
      return c10;
    }
    var nc = Symbol();
    function sc(a10, b10) {
      a10.push(b10);
    }
    function tc(a10, b10, c10) {
      a10.push(b10, c10.W);
    }
    function uc(a10, b10, c10, d10) {
      var e10 = cc2(d10), g2 = qc(d10).P, f2 = c10.W;
      a10.push(b10, function(h2, k2, l2) {
        return f2(h2, k2, l2, g2, e10);
      });
    }
    function vc(a10, b10, c10, d10, e10, g2) {
      var f2 = dc2(d10, g2), h2 = c10.W;
      a10.push(b10, function(k2, l2, m2) {
        return h2(k2, l2, m2, d10, f2);
      });
    }
    function qc(a10) {
      var b10 = a10[nc];
      if (b10) return b10;
      b10 = oc(a10, a10[nc] = [], sc, tc, uc, vc);
      mc in a10 && nc in a10 && (a10.length = 0);
      return b10;
    }
    var mc = Symbol();
    function wc(a10, b10) {
      a10[0] = b10;
    }
    function xc(a10, b10, c10, d10) {
      var e10 = c10.U;
      a10[b10] = d10 ? function(g2, f2, h2) {
        return e10(g2, f2, h2, d10);
      } : e10;
    }
    function yc(a10, b10, c10, d10, e10) {
      var g2 = c10.U, f2 = gc(d10), h2 = hc(d10).P;
      a10[b10] = function(k2, l2, m2) {
        return g2(k2, l2, m2, h2, f2, e10);
      };
    }
    function zc(a10, b10, c10, d10, e10, g2, f2) {
      var h2 = c10.U, k2 = fc(d10, e10, g2);
      a10[b10] = function(l2, m2, r2) {
        return h2(l2, m2, r2, d10, k2, f2);
      };
    }
    function hc(a10) {
      var b10 = a10[mc];
      if (b10) return b10;
      b10 = oc(a10, a10[mc] = {}, wc, xc, yc, zc);
      mc in a10 && nc in a10 && (a10.length = 0);
      return b10;
    }
    function ic(a10, b10, c10) {
      for (; ub(b10) && 4 != b10.i; ) {
        var d10 = b10.l, e10 = c10[d10];
        if (!e10) {
          var g2 = c10[0];
          g2 && (g2 = g2[d10]) && (e10 = c10[d10] = kc(g2));
        }
        if (!e10 || !e10(b10, a10, d10)) {
          e10 = b10;
          d10 = a10;
          g2 = e10.j;
          vb(e10);
          var f2 = e10;
          if (!f2.ca) {
            e10 = f2.h.h - g2;
            f2.h.h = g2;
            f2 = f2.h;
            if (0 == e10) e10 = jb();
            else {
              g2 = pb(f2, e10);
              if (f2.S && f2.m) e10 = f2.i.subarray(g2, g2 + e10);
              else {
                f2 = f2.i;
                var h2 = g2;
                e10 = g2 + e10;
                e10 = h2 === e10 ? Pa() : Ra ? f2.slice(h2, e10) : new Uint8Array(f2.subarray(h2, e10));
              }
              e10 = 0 == e10.length ? jb() : new ib(e10, Qa);
            }
            (g2 = d10.R) ? g2.push(e10) : d10.R = [e10];
          }
        }
      }
      return a10;
    }
    function rc(a10, b10, c10) {
      for (var d10 = c10.length, e10 = 1 == d10 % 2, g2 = e10 ? 1 : 0; g2 < d10; g2 += 2) (0, c10[g2 + 1])(b10, a10, c10[g2]);
      bc2(a10, b10, e10 ? c10[0] : void 0);
    }
    function Ac(a10, b10) {
      return { U: a10, W: b10 };
    }
    var Y2 = Ac(function(a10, b10, c10) {
      if (5 !== a10.i) return false;
      a10 = a10.h;
      var d10 = a10.i, e10 = a10.h, g2 = d10[e10];
      var f2 = d10[e10 + 1];
      var h2 = d10[e10 + 2];
      d10 = d10[e10 + 3];
      L2(a10, a10.h + 4);
      f2 = (g2 << 0 | f2 << 8 | h2 << 16 | d10 << 24) >>> 0;
      a10 = 2 * (f2 >> 31) + 1;
      g2 = f2 >>> 23 & 255;
      f2 &= 8388607;
      U2(b10, c10, 255 == g2 ? f2 ? NaN : Infinity * a10 : 0 == g2 ? a10 * Math.pow(2, -149) * f2 : a10 * Math.pow(2, g2 - 150) * (f2 + Math.pow(2, 23)));
      return true;
    }, function(a10, b10, c10) {
      b10 = Mb(b10, c10);
      if (null != b10) {
        M2(a10.h, 8 * c10 + 5);
        a10 = a10.h;
        var d10 = +b10;
        0 === d10 ? 0 < 1 / d10 ? G2 = H2 = 0 : (H2 = 0, G2 = 2147483648) : isNaN(d10) ? (H2 = 0, G2 = 2147483647) : (d10 = (c10 = 0 > d10 ? -2147483648 : 0) ? -d10 : d10, 34028234663852886e22 < d10 ? (H2 = 0, G2 = (c10 | 2139095040) >>> 0) : 11754943508222875e-54 > d10 ? (d10 = Math.round(d10 / Math.pow(2, -149)), H2 = 0, G2 = (c10 | d10) >>> 0) : (b10 = Math.floor(Math.log(d10) / Math.LN2), d10 *= Math.pow(2, -b10), d10 = Math.round(8388608 * d10), 16777216 <= d10 && ++b10, H2 = 0, G2 = (c10 | b10 + 127 << 23 | d10 & 8388607) >>> 0));
        c10 = G2;
        a10.h.push(c10 >>> 0 & 255);
        a10.h.push(c10 >>> 8 & 255);
        a10.h.push(c10 >>> 16 & 255);
        a10.h.push(c10 >>> 24 & 255);
      }
    }), Bc = Ac(function(a10, b10, c10) {
      if (0 !== a10.i) return false;
      var d10 = a10.h, e10 = 0, g2 = a10 = 0, f2 = d10.i, h2 = d10.h;
      do {
        var k2 = f2[h2++];
        e10 |= (k2 & 127) << g2;
        g2 += 7;
      } while (32 > g2 && k2 & 128);
      32 < g2 && (a10 |= (k2 & 127) >> 4);
      for (g2 = 3; 32 > g2 && k2 & 128; g2 += 7) k2 = f2[h2++], a10 |= (k2 & 127) << g2;
      L2(
        d10,
        h2
      );
      if (128 > k2) {
        d10 = e10 >>> 0;
        k2 = a10 >>> 0;
        if (a10 = k2 & 2147483648) d10 = ~d10 + 1 >>> 0, k2 = ~k2 >>> 0, 0 == d10 && (k2 = k2 + 1 >>> 0);
        d10 = 4294967296 * k2 + (d10 >>> 0);
      } else throw Za();
      U2(b10, c10, a10 ? -d10 : d10);
      return true;
    }, function(a10, b10, c10) {
      b10 = S2(b10, c10);
      null != b10 && ("string" === typeof b10 && Wa(b10), null != b10 && (M2(a10.h, 8 * c10), "number" === typeof b10 ? (a10 = a10.h, Sa(b10), sb(a10, G2, H2)) : (c10 = Wa(b10), sb(a10.h, c10.i, c10.h))));
    }), Cc = Ac(function(a10, b10, c10) {
      if (0 !== a10.i) return false;
      U2(b10, c10, ob(a10.h));
      return true;
    }, function(a10, b10, c10) {
      b10 = S2(b10, c10);
      if (null != b10 && null != b10) if (M2(a10.h, 8 * c10), a10 = a10.h, c10 = b10, 0 <= c10) M2(a10, c10);
      else {
        for (b10 = 0; 9 > b10; b10++) a10.h.push(c10 & 127 | 128), c10 >>= 7;
        a10.h.push(1);
      }
    }), Dc = Ac(function(a10, b10, c10) {
      if (2 !== a10.i) return false;
      var d10 = ob(a10.h) >>> 0;
      a10 = a10.h;
      var e10 = pb(a10, d10);
      a10 = a10.i;
      if (db2) {
        var g2 = a10, f2;
        (f2 = cb2) || (f2 = cb2 = new TextDecoder("utf-8", { fatal: true }));
        a10 = e10 + d10;
        g2 = 0 === e10 && a10 === g2.length ? g2 : g2.subarray(e10, a10);
        try {
          var h2 = f2.decode(g2);
        } catch (r2) {
          if (void 0 === bb2) {
            try {
              f2.decode(new Uint8Array([128]));
            } catch (p2) {
            }
            try {
              f2.decode(new Uint8Array([97])), bb2 = true;
            } catch (p2) {
              bb2 = false;
            }
          }
          !bb2 && (cb2 = void 0);
          throw r2;
        }
      } else {
        h2 = e10;
        d10 = h2 + d10;
        e10 = [];
        for (var k2 = null, l2, m2; h2 < d10; ) l2 = a10[h2++], 128 > l2 ? e10.push(l2) : 224 > l2 ? h2 >= d10 ? K2() : (m2 = a10[h2++], 194 > l2 || 128 !== (m2 & 192) ? (h2--, K2()) : e10.push((l2 & 31) << 6 | m2 & 63)) : 240 > l2 ? h2 >= d10 - 1 ? K2() : (m2 = a10[h2++], 128 !== (m2 & 192) || 224 === l2 && 160 > m2 || 237 === l2 && 160 <= m2 || 128 !== ((g2 = a10[h2++]) & 192) ? (h2--, K2()) : e10.push((l2 & 15) << 12 | (m2 & 63) << 6 | g2 & 63)) : 244 >= l2 ? h2 >= d10 - 2 ? K2() : (m2 = a10[h2++], 128 !== (m2 & 192) || 0 !== (l2 << 28) + (m2 - 144) >> 30 || 128 !== ((g2 = a10[h2++]) & 192) || 128 !== ((f2 = a10[h2++]) & 192) ? (h2--, K2()) : (l2 = (l2 & 7) << 18 | (m2 & 63) << 12 | (g2 & 63) << 6 | f2 & 63, l2 -= 65536, e10.push((l2 >> 10 & 1023) + 55296, (l2 & 1023) + 56320))) : K2(), 8192 <= e10.length && (k2 = ab2(k2, e10), e10.length = 0);
        h2 = ab2(k2, e10);
      }
      U2(b10, c10, h2);
      return true;
    }, function(a10, b10, c10) {
      b10 = S2(b10, c10);
      if (null != b10) {
        var d10 = false;
        d10 = void 0 === d10 ? false : d10;
        if (fb) {
          if (d10 && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b10)) throw Error("Found an unpaired surrogate");
          b10 = (eb2 || (eb2 = new TextEncoder())).encode(b10);
        } else {
          for (var e10 = 0, g2 = new Uint8Array(3 * b10.length), f2 = 0; f2 < b10.length; f2++) {
            var h2 = b10.charCodeAt(f2);
            if (128 > h2) g2[e10++] = h2;
            else {
              if (2048 > h2) g2[e10++] = h2 >> 6 | 192;
              else {
                if (55296 <= h2 && 57343 >= h2) {
                  if (56319 >= h2 && f2 < b10.length) {
                    var k2 = b10.charCodeAt(++f2);
                    if (56320 <= k2 && 57343 >= k2) {
                      h2 = 1024 * (h2 - 55296) + k2 - 56320 + 65536;
                      g2[e10++] = h2 >> 18 | 240;
                      g2[e10++] = h2 >> 12 & 63 | 128;
                      g2[e10++] = h2 >> 6 & 63 | 128;
                      g2[e10++] = h2 & 63 | 128;
                      continue;
                    } else f2--;
                  }
                  if (d10) throw Error("Found an unpaired surrogate");
                  h2 = 65533;
                }
                g2[e10++] = h2 >> 12 | 224;
                g2[e10++] = h2 >> 6 & 63 | 128;
              }
              g2[e10++] = h2 & 63 | 128;
            }
          }
          b10 = e10 === g2.length ? g2 : g2.subarray(0, e10);
        }
        M2(a10.h, 8 * c10 + 2);
        M2(a10.h, b10.length);
        N2(a10, a10.h.end());
        N2(a10, b10);
      }
    }), Ec = Ac(function(a10, b10, c10, d10, e10) {
      if (2 !== a10.i) return false;
      b10 = Qb(b10, c10, d10);
      c10 = a10.h.j;
      d10 = ob(a10.h) >>> 0;
      var g2 = a10.h.h + d10, f2 = g2 - c10;
      0 >= f2 && (a10.h.j = g2, e10(b10, a10, void 0, void 0, void 0), f2 = g2 - a10.h.h);
      if (f2) throw Error("Message parsing ended unexpectedly. Expected to read " + (d10 + " bytes, instead read " + (d10 - f2) + " bytes, either the data ended unexpectedly or the message misreported its own length"));
      a10.h.h = g2;
      a10.h.j = c10;
      return true;
    }, function(a10, b10, c10, d10, e10) {
      b10 = Ob(b10, d10, c10);
      if (null != b10) for (d10 = 0; d10 < b10.length; d10++) {
        var g2 = a10;
        M2(g2.h, 8 * c10 + 2);
        var f2 = g2.h.end();
        N2(g2, f2);
        f2.push(g2.i);
        g2 = f2;
        e10(b10[d10], a10);
        f2 = a10;
        var h2 = g2.pop();
        for (h2 = f2.i + f2.h.length() - h2; 127 < h2; ) g2.push(h2 & 127 | 128), h2 >>>= 7, f2.i++;
        g2.push(h2);
        f2.i++;
      }
    });
    function Fc(a10) {
      return function(b10, c10) {
        a: {
          if (wb.length) {
            var d10 = wb.pop();
            d10.setOptions(c10);
            nb(d10.h, b10, c10);
            b10 = d10;
          } else b10 = new tb(b10, c10);
          try {
            var e10 = hc(a10);
            var g2 = ic(new e10.P(), b10, e10);
            break a;
          } finally {
            e10 = b10.h, e10.i = null, e10.m = false, e10.l = 0, e10.j = 0, e10.h = 0, e10.S = false, b10.l = -1, b10.i = -1, 100 > wb.length && wb.push(b10);
          }
          g2 = void 0;
        }
        return g2;
      };
    }
    function Gc(a10) {
      return function() {
        var b10 = new xb();
        rc(this, b10, qc(a10));
        N2(b10, b10.h.end());
        for (var c10 = new Uint8Array(b10.i), d10 = b10.j, e10 = d10.length, g2 = 0, f2 = 0; f2 < e10; f2++) {
          var h2 = d10[f2];
          c10.set(h2, g2);
          g2 += h2.length;
        }
        b10.j = [c10];
        return c10;
      };
    }
    function Z2(a10) {
      X2.call(this, a10);
    }
    na(Z2, X2);
    var Hc = [Z2, 1, Cc, 2, Y2, 3, Dc, 4, Dc];
    Z2.prototype.l = Gc(Hc);
    function Ic(a10) {
      X2.call(this, a10, -1, Jc);
    }
    na(Ic, X2);
    Ic.prototype.addClassification = function(a10, b10) {
      Qb(this, 1, Z2, a10, b10);
      return this;
    };
    var Jc = [1], Kc = Fc([Ic, 1, Ec, Hc]);
    function Lc(a10) {
      X2.call(this, a10);
    }
    na(Lc, X2);
    var Mc = [Lc, 1, Y2, 2, Y2, 3, Y2, 4, Y2, 5, Y2];
    Lc.prototype.l = Gc(Mc);
    function Nc(a10) {
      X2.call(this, a10, -1, Oc);
    }
    na(Nc, X2);
    var Oc = [1], Pc = Fc([Nc, 1, Ec, Mc]);
    function Qc(a10) {
      X2.call(this, a10);
    }
    na(Qc, X2);
    var Rc = [Qc, 1, Y2, 2, Y2, 3, Y2, 4, Y2, 5, Y2, 6, Bc], Sc = Fc(Rc);
    Qc.prototype.l = Gc(Rc);
    function Tc(a10, b10, c10) {
      c10 = a10.createShader(0 === c10 ? a10.VERTEX_SHADER : a10.FRAGMENT_SHADER);
      a10.shaderSource(c10, b10);
      a10.compileShader(c10);
      if (!a10.getShaderParameter(c10, a10.COMPILE_STATUS)) throw Error("Could not compile WebGL shader.\n\n" + a10.getShaderInfoLog(c10));
      return c10;
    }
    function Uc(a10) {
      return Ob(a10, Z2, 1).map(function(b10) {
        var c10 = S2(b10, 1);
        return { index: null == c10 ? 0 : c10, qa: W2(b10, 2), label: null != S2(b10, 3) ? Rb(S2(b10, 3), "") : void 0, displayName: null != S2(b10, 4) ? Rb(S2(b10, 4), "") : void 0 };
      });
    }
    function Vc(a10) {
      return { x: W2(a10, 1), y: W2(a10, 2), z: W2(a10, 3), visibility: null != Mb(a10, 4) ? W2(a10, 4) : void 0 };
    }
    function Wc(a10, b10) {
      this.i = a10;
      this.h = b10;
      this.m = 0;
    }
    function Xc(a10, b10, c10) {
      Yc(a10, b10);
      if ("function" === typeof a10.h.canvas.transferToImageBitmap) return Promise.resolve(a10.h.canvas.transferToImageBitmap());
      if (c10) return Promise.resolve(a10.h.canvas);
      if ("function" === typeof createImageBitmap) return createImageBitmap(a10.h.canvas);
      void 0 === a10.j && (a10.j = document.createElement("canvas"));
      return new Promise(function(d10) {
        a10.j.height = a10.h.canvas.height;
        a10.j.width = a10.h.canvas.width;
        a10.j.getContext("2d", {}).drawImage(a10.h.canvas, 0, 0, a10.h.canvas.width, a10.h.canvas.height);
        d10(a10.j);
      });
    }
    function Yc(a10, b10) {
      var c10 = a10.h;
      if (void 0 === a10.s) {
        var d10 = Tc(c10, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", 0), e10 = Tc(c10, "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }", 1), g2 = c10.createProgram();
        c10.attachShader(g2, d10);
        c10.attachShader(g2, e10);
        c10.linkProgram(g2);
        if (!c10.getProgramParameter(g2, c10.LINK_STATUS)) throw Error("Could not compile WebGL program.\n\n" + c10.getProgramInfoLog(g2));
        d10 = a10.s = g2;
        c10.useProgram(d10);
        e10 = c10.getUniformLocation(d10, "sampler0");
        a10.l = { O: c10.getAttribLocation(d10, "aVertex"), N: c10.getAttribLocation(d10, "aTex"), ya: e10 };
        a10.v = c10.createBuffer();
        c10.bindBuffer(c10.ARRAY_BUFFER, a10.v);
        c10.enableVertexAttribArray(a10.l.O);
        c10.vertexAttribPointer(a10.l.O, 2, c10.FLOAT, false, 0, 0);
        c10.bufferData(c10.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), c10.STATIC_DRAW);
        c10.bindBuffer(c10.ARRAY_BUFFER, null);
        a10.u = c10.createBuffer();
        c10.bindBuffer(c10.ARRAY_BUFFER, a10.u);
        c10.enableVertexAttribArray(a10.l.N);
        c10.vertexAttribPointer(
          a10.l.N,
          2,
          c10.FLOAT,
          false,
          0,
          0
        );
        c10.bufferData(c10.ARRAY_BUFFER, new Float32Array([0, 1, 0, 0, 1, 0, 1, 1]), c10.STATIC_DRAW);
        c10.bindBuffer(c10.ARRAY_BUFFER, null);
        c10.uniform1i(e10, 0);
      }
      d10 = a10.l;
      c10.useProgram(a10.s);
      c10.canvas.width = b10.width;
      c10.canvas.height = b10.height;
      c10.viewport(0, 0, b10.width, b10.height);
      c10.activeTexture(c10.TEXTURE0);
      a10.i.bindTexture2d(b10.glName);
      c10.enableVertexAttribArray(d10.O);
      c10.bindBuffer(c10.ARRAY_BUFFER, a10.v);
      c10.vertexAttribPointer(d10.O, 2, c10.FLOAT, false, 0, 0);
      c10.enableVertexAttribArray(d10.N);
      c10.bindBuffer(c10.ARRAY_BUFFER, a10.u);
      c10.vertexAttribPointer(
        d10.N,
        2,
        c10.FLOAT,
        false,
        0,
        0
      );
      c10.bindFramebuffer(c10.DRAW_FRAMEBUFFER ? c10.DRAW_FRAMEBUFFER : c10.FRAMEBUFFER, null);
      c10.clearColor(0, 0, 0, 0);
      c10.clear(c10.COLOR_BUFFER_BIT);
      c10.colorMask(true, true, true, true);
      c10.drawArrays(c10.TRIANGLE_FAN, 0, 4);
      c10.disableVertexAttribArray(d10.O);
      c10.disableVertexAttribArray(d10.N);
      c10.bindBuffer(c10.ARRAY_BUFFER, null);
      a10.i.bindTexture2d(0);
    }
    function Zc(a10) {
      this.h = a10;
    }
    var $c = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]);
    function ad2(a10, b10) {
      return b10 + a10;
    }
    function bd2(a10, b10) {
      window[a10] = b10;
    }
    function cd2(a10) {
      var b10 = document.createElement("script");
      b10.setAttribute("src", a10);
      b10.setAttribute("crossorigin", "anonymous");
      return new Promise(function(c10) {
        b10.addEventListener("load", function() {
          c10();
        }, false);
        b10.addEventListener("error", function() {
          c10();
        }, false);
        document.body.appendChild(b10);
      });
    }
    function dd2() {
      return E2(function(a10) {
        switch (a10.h) {
          case 1:
            return a10.s = 2, D2(a10, WebAssembly.instantiate($c), 4);
          case 4:
            a10.h = 3;
            a10.s = 0;
            break;
          case 2:
            return a10.s = 0, a10.l = null, a10.return(false);
          case 3:
            return a10.return(true);
        }
      });
    }
    function ed2(a10) {
      this.h = a10;
      this.listeners = {};
      this.l = {};
      this.L = {};
      this.s = {};
      this.v = {};
      this.M = this.u = this.ga = true;
      this.I = Promise.resolve();
      this.fa = "";
      this.D = {};
      this.locateFile = a10 && a10.locateFile || ad2;
      if ("object" === typeof window) var b10 = window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/";
      else if ("undefined" !== typeof location) b10 = location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/";
      else throw Error("solutions can only be loaded on a web page or in a web worker");
      this.ha = b10;
      if (a10.options) {
        b10 = A2(Object.keys(a10.options));
        for (var c10 = b10.next(); !c10.done; c10 = b10.next()) {
          c10 = c10.value;
          var d10 = a10.options[c10].default;
          void 0 !== d10 && (this.l[c10] = "function" === typeof d10 ? d10() : d10);
        }
      }
    }
    x2 = ed2.prototype;
    x2.close = function() {
      this.j && this.j.delete();
      return Promise.resolve();
    };
    function fd(a10) {
      var b10, c10, d10, e10, g2, f2, h2, k2, l2, m2, r2;
      return E2(function(p2) {
        switch (p2.h) {
          case 1:
            if (!a10.ga) return p2.return();
            b10 = void 0 === a10.h.files ? [] : "function" === typeof a10.h.files ? a10.h.files(a10.l) : a10.h.files;
            return D2(p2, dd2(), 2);
          case 2:
            c10 = p2.i;
            if ("object" === typeof window) return bd2("createMediapipeSolutionsWasm", { locateFile: a10.locateFile }), bd2("createMediapipeSolutionsPackedAssets", { locateFile: a10.locateFile }), f2 = b10.filter(function(n2) {
              return void 0 !== n2.data;
            }), h2 = b10.filter(function(n2) {
              return void 0 === n2.data;
            }), k2 = Promise.all(f2.map(function(n2) {
              var q2 = gd(a10, n2.url);
              if (void 0 !== n2.path) {
                var t2 = n2.path;
                q2 = q2.then(function(w2) {
                  a10.overrideFile(t2, w2);
                  return Promise.resolve(w2);
                });
              }
              return q2;
            })), l2 = Promise.all(h2.map(function(n2) {
              return void 0 === n2.simd || n2.simd && c10 || !n2.simd && !c10 ? cd2(a10.locateFile(n2.url, a10.ha)) : Promise.resolve();
            })).then(function() {
              var n2, q2, t2;
              return E2(function(w2) {
                if (1 == w2.h) return n2 = window.createMediapipeSolutionsWasm, q2 = window.createMediapipeSolutionsPackedAssets, t2 = a10, D2(w2, n2(q2), 2);
                t2.i = w2.i;
                w2.h = 0;
              });
            }), m2 = (function() {
              return E2(function(n2) {
                a10.h.graph && a10.h.graph.url ? n2 = D2(
                  n2,
                  gd(a10, a10.h.graph.url),
                  0
                ) : (n2.h = 0, n2 = void 0);
                return n2;
              });
            })(), D2(p2, Promise.all([l2, k2, m2]), 7);
            if ("function" !== typeof importScripts) throw Error("solutions can only be loaded on a web page or in a web worker");
            d10 = b10.filter(function(n2) {
              return void 0 === n2.simd || n2.simd && c10 || !n2.simd && !c10;
            }).map(function(n2) {
              return a10.locateFile(n2.url, a10.ha);
            });
            importScripts.apply(null, ea2(d10));
            e10 = a10;
            return D2(p2, createMediapipeSolutionsWasm(Module), 6);
          case 6:
            e10.i = p2.i;
            a10.m = new OffscreenCanvas(1, 1);
            a10.i.canvas = a10.m;
            g2 = a10.i.GL.createContext(a10.m, {
              antialias: false,
              alpha: false,
              va: "undefined" !== typeof WebGL2RenderingContext ? 2 : 1
            });
            a10.i.GL.makeContextCurrent(g2);
            p2.h = 4;
            break;
          case 7:
            a10.m = document.createElement("canvas");
            r2 = a10.m.getContext("webgl2", {});
            if (!r2 && (r2 = a10.m.getContext("webgl", {}), !r2)) return alert("Failed to create WebGL canvas context when passing video frame."), p2.return();
            a10.K = r2;
            a10.i.canvas = a10.m;
            a10.i.createContext(a10.m, true, true, {});
          case 4:
            a10.j = new a10.i.SolutionWasm(), a10.ga = false, p2.h = 0;
        }
      });
    }
    function hd(a10) {
      var b10, c10, d10, e10, g2, f2, h2, k2;
      return E2(function(l2) {
        if (1 == l2.h) {
          if (a10.h.graph && a10.h.graph.url && a10.fa === a10.h.graph.url) return l2.return();
          a10.u = true;
          if (!a10.h.graph || !a10.h.graph.url) {
            l2.h = 2;
            return;
          }
          a10.fa = a10.h.graph.url;
          return D2(l2, gd(a10, a10.h.graph.url), 3);
        }
        2 != l2.h && (b10 = l2.i, a10.j.loadGraph(b10));
        c10 = A2(Object.keys(a10.D));
        for (d10 = c10.next(); !d10.done; d10 = c10.next()) e10 = d10.value, a10.j.overrideFile(e10, a10.D[e10]);
        a10.D = {};
        if (a10.h.listeners) for (g2 = A2(a10.h.listeners), f2 = g2.next(); !f2.done; f2 = g2.next()) h2 = f2.value, id(a10, h2);
        k2 = a10.l;
        a10.l = {};
        a10.setOptions(k2);
        l2.h = 0;
      });
    }
    x2.reset = function() {
      var a10 = this;
      return E2(function(b10) {
        a10.j && (a10.j.reset(), a10.s = {}, a10.v = {});
        b10.h = 0;
      });
    };
    x2.setOptions = function(a10, b10) {
      var c10 = this;
      if (b10 = b10 || this.h.options) {
        for (var d10 = [], e10 = [], g2 = {}, f2 = A2(Object.keys(a10)), h2 = f2.next(); !h2.done; g2 = { X: g2.X, Y: g2.Y }, h2 = f2.next()) if (h2 = h2.value, !(h2 in this.l && this.l[h2] === a10[h2])) {
          this.l[h2] = a10[h2];
          var k2 = b10[h2];
          void 0 !== k2 && (k2.onChange && (g2.X = k2.onChange, g2.Y = a10[h2], d10.push(/* @__PURE__ */ (function(l2) {
            return function() {
              var m2;
              return E2(function(r2) {
                if (1 == r2.h) return D2(r2, l2.X(l2.Y), 2);
                m2 = r2.i;
                true === m2 && (c10.u = true);
                r2.h = 0;
              });
            };
          })(g2))), k2.graphOptionXref && (h2 = Object.assign(
            {},
            { calculatorName: "", calculatorIndex: 0 },
            k2.graphOptionXref,
            { valueNumber: 1 === k2.type ? a10[h2] : 0, valueBoolean: 0 === k2.type ? a10[h2] : false, valueString: 2 === k2.type ? a10[h2] : "" }
          ), e10.push(h2)));
        }
        if (0 !== d10.length || 0 !== e10.length) this.u = true, this.H = (void 0 === this.H ? [] : this.H).concat(e10), this.F = (void 0 === this.F ? [] : this.F).concat(d10);
      }
    };
    function jd(a10) {
      var b10, c10, d10, e10, g2, f2, h2;
      return E2(function(k2) {
        switch (k2.h) {
          case 1:
            if (!a10.u) return k2.return();
            if (!a10.F) {
              k2.h = 2;
              break;
            }
            b10 = A2(a10.F);
            c10 = b10.next();
          case 3:
            if (c10.done) {
              k2.h = 5;
              break;
            }
            d10 = c10.value;
            return D2(k2, d10(), 4);
          case 4:
            c10 = b10.next();
            k2.h = 3;
            break;
          case 5:
            a10.F = void 0;
          case 2:
            if (a10.H) {
              e10 = new a10.i.GraphOptionChangeRequestList();
              g2 = A2(a10.H);
              for (f2 = g2.next(); !f2.done; f2 = g2.next()) h2 = f2.value, e10.push_back(h2);
              a10.j.changeOptions(e10);
              e10.delete();
              a10.H = void 0;
            }
            a10.u = false;
            k2.h = 0;
        }
      });
    }
    x2.initialize = function() {
      var a10 = this;
      return E2(function(b10) {
        return 1 == b10.h ? D2(b10, fd(a10), 2) : 3 != b10.h ? D2(b10, hd(a10), 3) : D2(b10, jd(a10), 0);
      });
    };
    function gd(a10, b10) {
      var c10, d10;
      return E2(function(e10) {
        if (b10 in a10.L) return e10.return(a10.L[b10]);
        c10 = a10.locateFile(b10, "");
        d10 = fetch(c10).then(function(g2) {
          return g2.arrayBuffer();
        });
        a10.L[b10] = d10;
        return e10.return(d10);
      });
    }
    x2.overrideFile = function(a10, b10) {
      this.j ? this.j.overrideFile(a10, b10) : this.D[a10] = b10;
    };
    x2.clearOverriddenFiles = function() {
      this.D = {};
      this.j && this.j.clearOverriddenFiles();
    };
    x2.send = function(a10, b10) {
      var c10 = this, d10, e10, g2, f2, h2, k2, l2, m2, r2;
      return E2(function(p2) {
        switch (p2.h) {
          case 1:
            if (!c10.h.inputs) return p2.return();
            d10 = 1e3 * (void 0 === b10 || null === b10 ? performance.now() : b10);
            return D2(p2, c10.I, 2);
          case 2:
            return D2(p2, c10.initialize(), 3);
          case 3:
            e10 = new c10.i.PacketDataList();
            g2 = A2(Object.keys(a10));
            for (f2 = g2.next(); !f2.done; f2 = g2.next()) if (h2 = f2.value, k2 = c10.h.inputs[h2]) {
              a: {
                var n2 = a10[h2];
                switch (k2.type) {
                  case "video":
                    var q2 = c10.s[k2.stream];
                    q2 || (q2 = new Wc(c10.i, c10.K), c10.s[k2.stream] = q2);
                    0 === q2.m && (q2.m = q2.i.createTexture());
                    if ("undefined" !== typeof HTMLVideoElement && n2 instanceof HTMLVideoElement) {
                      var t2 = n2.videoWidth;
                      var w2 = n2.videoHeight;
                    } else "undefined" !== typeof HTMLImageElement && n2 instanceof HTMLImageElement ? (t2 = n2.naturalWidth, w2 = n2.naturalHeight) : (t2 = n2.width, w2 = n2.height);
                    w2 = { glName: q2.m, width: t2, height: w2 };
                    t2 = q2.h;
                    t2.canvas.width = w2.width;
                    t2.canvas.height = w2.height;
                    t2.activeTexture(t2.TEXTURE0);
                    q2.i.bindTexture2d(q2.m);
                    t2.texImage2D(t2.TEXTURE_2D, 0, t2.RGBA, t2.RGBA, t2.UNSIGNED_BYTE, n2);
                    q2.i.bindTexture2d(0);
                    q2 = w2;
                    break a;
                  case "detections":
                    q2 = c10.s[k2.stream];
                    q2 || (q2 = new Zc(c10.i), c10.s[k2.stream] = q2);
                    q2.data || (q2.data = new q2.h.DetectionListData());
                    q2.data.reset(n2.length);
                    for (w2 = 0; w2 < n2.length; ++w2) {
                      t2 = n2[w2];
                      var v2 = q2.data, B2 = v2.setBoundingBox, J2 = w2;
                      var I2 = t2.la;
                      var u2 = new Qc();
                      V2(u2, 1, I2.sa);
                      V2(u2, 2, I2.ta);
                      V2(u2, 3, I2.height);
                      V2(u2, 4, I2.width);
                      V2(u2, 5, I2.rotation);
                      U2(u2, 6, I2.pa);
                      I2 = u2.l();
                      B2.call(v2, J2, I2);
                      if (t2.ea) for (v2 = 0; v2 < t2.ea.length; ++v2) {
                        u2 = t2.ea[v2];
                        B2 = q2.data;
                        J2 = B2.addNormalizedLandmark;
                        I2 = w2;
                        u2 = Object.assign({}, u2, { visibility: u2.visibility ? u2.visibility : 0 });
                        var C2 = new Lc();
                        V2(C2, 1, u2.x);
                        V2(C2, 2, u2.y);
                        V2(C2, 3, u2.z);
                        u2.visibility && V2(C2, 4, u2.visibility);
                        u2 = C2.l();
                        J2.call(
                          B2,
                          I2,
                          u2
                        );
                      }
                      if (t2.ba) for (v2 = 0; v2 < t2.ba.length; ++v2) B2 = q2.data, J2 = B2.addClassification, I2 = w2, u2 = t2.ba[v2], C2 = new Z2(), V2(C2, 2, u2.qa), u2.index && U2(C2, 1, u2.index), u2.label && U2(C2, 3, u2.label), u2.displayName && U2(C2, 4, u2.displayName), u2 = C2.l(), J2.call(B2, I2, u2);
                    }
                    q2 = q2.data;
                    break a;
                  default:
                    q2 = {};
                }
              }
              l2 = q2;
              m2 = k2.stream;
              switch (k2.type) {
                case "video":
                  e10.pushTexture2d(Object.assign({}, l2, { stream: m2, timestamp: d10 }));
                  break;
                case "detections":
                  r2 = l2;
                  r2.stream = m2;
                  r2.timestamp = d10;
                  e10.pushDetectionList(r2);
                  break;
                default:
                  throw Error("Unknown input config type: '" + k2.type + "'");
              }
            }
            c10.j.send(e10);
            return D2(p2, c10.I, 4);
          case 4:
            e10.delete(), p2.h = 0;
        }
      });
    };
    function kd(a10, b10, c10) {
      var d10, e10, g2, f2, h2, k2, l2, m2, r2, p2, n2, q2, t2, w2;
      return E2(function(v2) {
        switch (v2.h) {
          case 1:
            if (!c10) return v2.return(b10);
            d10 = {};
            e10 = 0;
            g2 = A2(Object.keys(c10));
            for (f2 = g2.next(); !f2.done; f2 = g2.next()) h2 = f2.value, k2 = c10[h2], "string" !== typeof k2 && "texture" === k2.type && void 0 !== b10[k2.stream] && ++e10;
            1 < e10 && (a10.M = false);
            l2 = A2(Object.keys(c10));
            f2 = l2.next();
          case 2:
            if (f2.done) {
              v2.h = 4;
              break;
            }
            m2 = f2.value;
            r2 = c10[m2];
            if ("string" === typeof r2) return t2 = d10, w2 = m2, D2(v2, ld(a10, m2, b10[r2]), 14);
            p2 = b10[r2.stream];
            if ("detection_list" === r2.type) {
              if (p2) {
                var B2 = p2.getRectList();
                for (var J2 = p2.getLandmarksList(), I2 = p2.getClassificationsList(), u2 = [], C2 = 0; C2 < B2.size(); ++C2) {
                  var T2 = Sc(B2.get(C2)), od = W2(T2, 1), pd = W2(T2, 2), qd = W2(T2, 3), rd = W2(T2, 4), sd = W2(T2, 5, 0), za = void 0;
                  za = void 0 === za ? 0 : za;
                  T2 = { la: { sa: od, ta: pd, height: qd, width: rd, rotation: sd, pa: Rb(S2(T2, 6), za) }, ea: Ob(Pc(J2.get(C2)), Lc, 1).map(Vc), ba: Uc(Kc(I2.get(C2))) };
                  u2.push(T2);
                }
                B2 = u2;
              } else B2 = [];
              d10[m2] = B2;
              v2.h = 7;
              break;
            }
            if ("proto_list" === r2.type) {
              if (p2) {
                B2 = Array(p2.size());
                for (J2 = 0; J2 < p2.size(); J2++) B2[J2] = p2.get(J2);
                p2.delete();
              } else B2 = [];
              d10[m2] = B2;
              v2.h = 7;
              break;
            }
            if (void 0 === p2) {
              v2.h = 3;
              break;
            }
            if ("float_list" === r2.type) {
              d10[m2] = p2;
              v2.h = 7;
              break;
            }
            if ("proto" === r2.type) {
              d10[m2] = p2;
              v2.h = 7;
              break;
            }
            if ("texture" !== r2.type) throw Error("Unknown output config type: '" + r2.type + "'");
            n2 = a10.v[m2];
            n2 || (n2 = new Wc(a10.i, a10.K), a10.v[m2] = n2);
            return D2(v2, Xc(n2, p2, a10.M), 13);
          case 13:
            q2 = v2.i, d10[m2] = q2;
          case 7:
            r2.transform && d10[m2] && (d10[m2] = r2.transform(d10[m2]));
            v2.h = 3;
            break;
          case 14:
            t2[w2] = v2.i;
          case 3:
            f2 = l2.next();
            v2.h = 2;
            break;
          case 4:
            return v2.return(d10);
        }
      });
    }
    function ld(a10, b10, c10) {
      var d10;
      return E2(function(e10) {
        return "number" === typeof c10 || c10 instanceof Uint8Array || c10 instanceof a10.i.Uint8BlobList ? e10.return(c10) : c10 instanceof a10.i.Texture2dDataOut ? (d10 = a10.v[b10], d10 || (d10 = new Wc(a10.i, a10.K), a10.v[b10] = d10), e10.return(Xc(d10, c10, a10.M))) : e10.return(void 0);
      });
    }
    function id(a10, b10) {
      for (var c10 = b10.name || "$", d10 = [].concat(ea2(b10.wants)), e10 = new a10.i.StringList(), g2 = A2(b10.wants), f2 = g2.next(); !f2.done; f2 = g2.next()) e10.push_back(f2.value);
      g2 = a10.i.PacketListener.implement({ onResults: function(h2) {
        for (var k2 = {}, l2 = 0; l2 < b10.wants.length; ++l2) k2[d10[l2]] = h2.get(l2);
        var m2 = a10.listeners[c10];
        m2 && (a10.I = kd(a10, k2, b10.outs).then(function(r2) {
          r2 = m2(r2);
          for (var p2 = 0; p2 < b10.wants.length; ++p2) {
            var n2 = k2[d10[p2]];
            "object" === typeof n2 && n2.hasOwnProperty && n2.hasOwnProperty("delete") && n2.delete();
          }
          r2 && (a10.I = r2);
        }));
      } });
      a10.j.attachMultiListener(e10, g2);
      e10.delete();
    }
    x2.onResults = function(a10, b10) {
      this.listeners[b10 || "$"] = a10;
    };
    Aa("Solution", ed2);
    Aa("OptionType", { BOOL: 0, NUMBER: 1, ua: 2, 0: "BOOL", 1: "NUMBER", 2: "STRING" });
    function md(a10) {
      void 0 === a10 && (a10 = 0);
      switch (a10) {
        case 1:
          return "selfie_segmentation_landscape.tflite";
        default:
          return "selfie_segmentation.tflite";
      }
    }
    function nd(a10) {
      var b10 = this;
      a10 = a10 || {};
      this.h = new ed2({ locateFile: a10.locateFile, files: function(c10) {
        return [{ simd: true, url: "selfie_segmentation_solution_simd_wasm_bin.js" }, { simd: false, url: "selfie_segmentation_solution_wasm_bin.js" }, { data: true, url: md(c10.modelSelection) }];
      }, graph: { url: "selfie_segmentation.binarypb" }, listeners: [{ wants: ["segmentation_mask", "image_transformed"], outs: { image: { type: "texture", stream: "image_transformed" }, segmentationMask: { type: "texture", stream: "segmentation_mask" } } }], inputs: { image: {
        type: "video",
        stream: "input_frames_gpu"
      } }, options: { useCpuInference: { type: 0, graphOptionXref: { calculatorType: "InferenceCalculator", fieldName: "use_cpu_inference" }, default: "object" !== typeof window || void 0 === window.navigator ? false : "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document }, selfieMode: { type: 0, graphOptionXref: { calculatorType: "GlScalerCalculator", calculatorIndex: 1, fieldName: "flip_horizontal" } }, modelSelection: {
        type: 1,
        graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorModelSelection", fieldName: "int_value" },
        onChange: function(c10) {
          var d10, e10, g2;
          return E2(function(f2) {
            if (1 == f2.h) return d10 = md(c10), e10 = "third_party/mediapipe/modules/selfie_segmentation/" + d10, D2(f2, gd(b10.h, d10), 2);
            g2 = f2.i;
            b10.h.overrideFile(e10, g2);
            return f2.return(true);
          });
        }
      } } });
    }
    x2 = nd.prototype;
    x2.close = function() {
      this.h.close();
      return Promise.resolve();
    };
    x2.onResults = function(a10) {
      this.h.onResults(a10);
    };
    x2.initialize = function() {
      var a10 = this;
      return E2(function(b10) {
        return D2(b10, a10.h.initialize(), 0);
      });
    };
    x2.reset = function() {
      this.h.reset();
    };
    x2.send = function(a10) {
      var b10 = this;
      return E2(function(c10) {
        return D2(c10, b10.h.send(a10), 0);
      });
    };
    x2.setOptions = function(a10) {
      this.h.setOptions(a10);
    };
    Aa("SelfieSegmentation", nd);
    Aa("VERSION", "0.1.1675465747");
  }).call(selfie_segmentation);
  return selfie_segmentation;
}
var selfie_segmentationExports = /* @__PURE__ */ requireSelfie_segmentation();
const MEDIAPIPE_CDN = "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation";
let session = null;
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("The background image could not be loaded."));
    image.src = src;
  });
}
async function applyVirtualBackground({
  parameters,
  image,
  frameRate = 30,
  modelSelection = 1,
  publish = true,
  assetPath = MEDIAPIPE_CDN
}) {
  const live = getCurrentParams({ parameters });
  if (live.audioOnlyRoom) {
    return { ok: false, error: "You cannot use a background in an audio-only event.", stream: null };
  }
  if (typeof document === "undefined" || typeof window === "undefined") {
    return { ok: false, error: "Virtual backgrounds require a browser environment.", stream: null };
  }
  const camera = live.localStreamVideo || getLocalVideoStream({ parameters: live });
  const sourceTrack = camera?.getVideoTracks?.()[0] || null;
  if (!sourceTrack || sourceTrack.readyState !== "live") {
    return { ok: false, error: "Turn your camera on before applying a background.", stream: null };
  }
  if (session) {
    session.stop();
    session = null;
  }
  try {
    const settings = sourceTrack.getSettings ? sourceTrack.getSettings() : {};
    const width = Number(settings.width) || 640;
    const height = Number(settings.height) || 360;
    const backgroundImage = typeof image === "string" ? await loadImage(image) : image;
    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.srcObject = new MediaStream([sourceTrack]);
    await video.play().catch(() => {
    });
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("This browser cannot composite a background.");
    const base = assetPath.endsWith("/") ? assetPath.slice(0, -1) : assetPath;
    const segmentation = new selfie_segmentationExports.SelfieSegmentation({
      locateFile: (file) => `${base}/${file}`
    });
    segmentation.setOptions({ modelSelection, selfieMode: false });
    await segmentation.initialize();
    segmentation.onResults((results) => {
      try {
        if (!canvas.width || !canvas.height) return;
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(results.segmentationMask, 0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-out";
        if (backgroundImage) {
          const pattern = ctx.createPattern(backgroundImage, "repeat");
          ctx.fillStyle = pattern || "transparent";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.globalCompositeOperation = "destination-atop";
        ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
        ctx.restore();
      } catch {
      }
    });
    let stopped = false;
    let frameHandle = 0;
    const pump = async () => {
      if (stopped) return;
      try {
        if (video.readyState >= 2) await segmentation.send({ image: video });
      } catch {
      }
      frameHandle = window.requestAnimationFrame(() => {
        void pump();
      });
    };
    void pump();
    const processed = canvas.captureStream(frameRate);
    if (!processed?.getVideoTracks?.().length) {
      throw new Error("The processed background stream produced no video track.");
    }
    const stop = () => {
      if (stopped) return;
      stopped = true;
      window.cancelAnimationFrame(frameHandle);
      try {
        segmentation.close();
      } catch {
      }
      processed.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
    };
    session = { stop, stream: processed, sourceTrack };
    live.updateVirtualStream?.(processed);
    live.updateProcessedStream?.(processed);
    live.updateKeepBackground?.(true);
    if (publish) {
      const producer = live.videoProducer || live.localVideoProducer;
      const track = processed.getVideoTracks()[0];
      if (producer && typeof producer.replaceTrack === "function" && track) {
        await producer.replaceTrack({ track });
      }
    }
    return { ok: true, error: "", stream: processed };
  } catch (error) {
    if (session) {
      session.stop();
      session = null;
    }
    return {
      ok: false,
      error: error?.message || "The virtual background could not be applied.",
      stream: null
    };
  }
}
async function clearVirtualBackground({
  parameters
}) {
  const live = getCurrentParams({ parameters });
  const active = session;
  if (!active) {
    live.updateKeepBackground?.(false);
    return { ok: true, error: "" };
  }
  try {
    const producer = live.videoProducer || live.localVideoProducer;
    const original = active.sourceTrack;
    if (producer && typeof producer.replaceTrack === "function" && original && original.readyState === "live") {
      await producer.replaceTrack({ track: original });
    }
    active.stop();
    session = null;
    live.updateVirtualStream?.(null);
    live.updateProcessedStream?.(null);
    live.updateKeepBackground?.(false);
    return { ok: true, error: "" };
  } catch (error) {
    return { ok: false, error: error?.message || "The virtual background could not be cleared." };
  }
}
function isVirtualBackgroundRunning() {
  return session !== null;
}
export {
  bN as COMMON_LANGUAGE_CODES,
  c4 as MediaStream,
  c5 as MediaStreamTrack,
  cg as QnHDCons,
  cq as QnHDConsNeu,
  cl as QnHDConsPort,
  cv as QnHDFrameRate,
  c6 as RTCView,
  bG as SUPPORTED_LANGUAGE_CODES,
  bT as SoundPlayer,
  bP as TTS_PROVIDERS,
  cc as aParams,
  b4 as addPanelist,
  e as addVideosGrid,
  c as addedAsPanelist,
  cD as allMembers,
  cE as allMembersRest,
  cC as allWaitingRoomMembers,
  applyVirtualBackground,
  e7 as assignParticipantToBreakoutRoom,
  el as attachPlayback,
  al as autoAdjust,
  cF as banParticipant,
  a4 as breakoutRoomUpdated,
  ax as buildAddVideosGridPlan,
  aB as buildMainHostCardPlan,
  aA as buildMainScreenState,
  aD as buildPrepopulateUserMediaPlan,
  aC as buildScreenShareHostCardPlan,
  ba as bulkUpdateParticipantPermissions,
  am as calculateRowsAndColumns,
  ad as captureCanvasStream,
  g as changeVids,
  an as checkGrid,
  a7 as checkLimitsAndMakeRequest,
  a6 as checkLimitsAndMakeRequestWithStorage,
  ai as checkMediasfuURL,
  bj as checkPauseState,
  ao as checkPermission,
  bk as checkResumeState,
  i as checkScreenShare,
  clearVirtualBackground,
  a9 as clickAudio,
  bA as clickChat,
  aa as clickScreenShare,
  ab as clickVideo,
  j as closeAndResize,
  k as compareActiveNames,
  l as compareScreenStates,
  aU as confirmExit,
  bl as confirmRecording,
  ej as confirmStillHere,
  m as connectIps,
  n as connectLocalIps,
  dl as connectLocalSocket,
  o as connectRecvTransport,
  q as connectSendTransport,
  s as connectSendTransportAudio,
  t as connectSendTransportScreen,
  w as connectSendTransportVideo,
  dj as connectSocket,
  f as consumerResume,
  ap as controlMedia,
  cG as controlMediaHost,
  ae as createDeviceClient,
  bB as createLiveSubtitle,
  c7 as createResponseJoinRoom,
  c9 as createRoomOnMediaSFU,
  dX as createRoomPoll,
  x as createSendTransport,
  eo as createViewerSession,
  em as detachPlayback,
  dH as disableParticipantVideo,
  cH as disconnect,
  y as disconnectSendTransportAudio,
  z as disconnectSendTransportScreen,
  A as disconnectSendTransportVideo,
  dk as disconnectSocket,
  cI as disconnectUserSelf,
  B as dispStreams,
  dZ as endRoomPoll,
  bS as fetchLanguagesViaSocket,
  bR as fetchVoicesViaSocket,
  cj as fhdCons,
  ct as fhdConsNeu,
  co as fhdConsPort,
  cy as fhdFrameRate,
  aJ as findOriginalProducerForSpeaker,
  ec as flipCamera,
  b6 as focusPanelists,
  bX as formatNumber,
  C as generatePageContent,
  bY as generateRandomMessages,
  bZ as generateRandomParticipants,
  b_ as generateRandomPolls,
  b$ as generateRandomRequestList,
  c0 as generateRandomWaitingRoomList,
  dA as getActiveSpeaker,
  aI as getActiveTranslationConsumers,
  dt as getAudioGridComponents,
  bQ as getAvailableVoices,
  d_ as getBreakoutState,
  ep as getCaptureLimits,
  ef as getChatMessages,
  bO as getCommonLanguages,
  getCurrentParams,
  cJ as getDomains,
  aq as getEstimate,
  e3 as getFocusModeState,
  bL as getLanguageMetadata,
  bJ as getLanguageName,
  bK as getLanguageNativeName,
  dr as getLocalAudioStream,
  getLocalVideoStream,
  ea as getLocallyPausedProducerIds,
  dD as getMediaPermissions,
  bV as getModalPosition,
  dE as getModerationPermissions,
  bU as getOverlayPosition,
  ew as getParticipantMedia,
  dy as getParticipantMediaState,
  eg as getPendingApprovals,
  ar as getPipedProducersAlt,
  ek as getPlaybackSources,
  dW as getPollState,
  ei as getPresenceCheck,
  as as getProducersPiped,
  e0 as getRecordingCapabilities,
  d$ as getRecordingNotice,
  dO as getRecordingState,
  dp as getRemoteAudioStreams,
  dn as getRemoteVideoStreams,
  dm as getRoomReadiness,
  ds as getScreenShareStream,
  dC as getSelectedDevices,
  eh as getSessionTimer,
  bF as getSubtitleForSpeaker,
  bM as getSupportedLanguages,
  e1 as getTranslationState,
  D as getVideos,
  e4 as getVirtualBackgroundState,
  dT as getWhiteboardState,
  cd as hParams,
  bc as handleCreatePoll,
  bh as handleCreateRoom,
  bd as handleEndPoll,
  bi as handleJoinRoom,
  aN as handleStartBreakout,
  dg as handleStartWhiteboard,
  aO as handleStopBreakout,
  dh as handleStopWhiteboard,
  be as handleVotePoll,
  h as handleWelcomeRequest,
  ci as hdCons,
  cs as hdConsNeu,
  cn as hdConsPort,
  cx as hdFrameRate,
  a8 as hostRequestResponse,
  c1 as initialValuesState,
  aH as isConsumingTranslationForSpeaker,
  bI as isLanguageSupported,
  aE as isSpeakerInMyBreakoutRoom,
  bC as isSubtitleExpired,
  isVirtualBackgroundRunning,
  ah as joinConRoom,
  a1 as joinConsumeRoom,
  aj as joinLocalRoom,
  ak as joinRoom,
  af as joinRoomClient,
  c8 as joinRoomOnMediaSFU,
  aM as launchBackground,
  aP as launchBreakoutRooms,
  aQ as launchCoHost,
  di as launchConfigureWhiteboard,
  aV as launchConfirmExit,
  aS as launchDisplaySettings,
  aW as launchMediaSettings,
  aX as launchMenuModal,
  aY as launchMessages,
  b2 as launchPanelists,
  a_ as launchParticipants,
  b8 as launchPermissions,
  bf as launchPoll,
  bm as launchRecording,
  bu as launchRequests,
  bw as launchSettings,
  de as launchWaiting,
  dv as leaveRoom,
  dB as listMediaDevices,
  dz as listParticipantMediaStates,
  c2 as mediaDevices,
  cK as meetingEnded,
  cL as meetingStillThere,
  cb as meetingTimeRemaining,
  a$ as messageParticipants,
  E as mixStreams,
  aR as modifyCoHostSettings,
  aT as modifyDisplaySettings,
  a5 as modifySettings,
  dJ as muteEveryone,
  dG as muteParticipant,
  b0 as muteParticipants,
  a2 as newPipeProducer,
  bH as normalizeLanguageCode,
  F as onScreenChanges,
  b as panelistControlMedia,
  a as panelistFocusChanged,
  p as panelistsUpdated,
  cM as participantRequested,
  aF as pauseOriginalProducer,
  dQ as pauseRoomRecording,
  cO as permissionConfigUpdated,
  cN as permissionUpdated,
  cP as personJoined,
  bg as pollUpdated,
  G as prepopulateUserMedia,
  H as processConsumerTransports,
  I as processConsumerTransportsAudio,
  es as produceCanvas,
  eu as produceDisplay,
  et as produceElement,
  eq as produceMedia,
  a3 as producerClosed,
  cQ as producerMediaClosed,
  cR as producerMediaPaused,
  cS as producerMediaResumed,
  bD as pruneExpiredSubtitles,
  en as publishWhip,
  ck as qhdCons,
  cu as qhdConsNeu,
  cp as qhdConsPort,
  cz as qhdFrameRate,
  cV as reInitiateRecording,
  M as rePort,
  Q as reUpdateInter,
  J as readjust,
  e9 as reapplyLocalPlayback,
  K as receiveAllPipedTransports,
  cT as receiveMessage,
  at as receiveRoomMessages,
  bn as recordPauseTimer,
  bo as recordResumeTimer,
  bp as recordStartTimer,
  bq as recordUpdateTimer,
  cU as recordingNotice,
  c3 as registerGlobals,
  b5 as removePanelist,
  dK as removeParticipant,
  b1 as removeParticipants,
  r as removedFromPanelists,
  L as reorderStreams,
  ev as replaceProducerTrack,
  N as requestScreenShare,
  az as resolveHostVideoStream,
  ay as resolveMainHostRenderMode,
  dM as respondToParticipantRequest,
  bv as respondToRequests,
  df as respondToWaiting,
  dL as respondToWaitingParticipant,
  aG as resumeOriginalProducer,
  O as resumePauseAudioStreams,
  P as resumePauseStreams,
  dR as resumeRoomRecording,
  au as resumeSendTransportAudio,
  cW as roomRecordParams,
  dx as runMediaControl,
  cA as screenFrameRate,
  cf as screenParams,
  cX as screenProducerId,
  ch as sdCons,
  cr as sdConsNeu,
  cm as sdConsPort,
  cw as sdFrameRate,
  X as selectVideoProducerCodec,
  dw as sendChatMessage,
  aZ as sendMessage,
  e6 as setBreakoutRooms,
  dN as setCoHost,
  dF as setParticipantMedia,
  e5 as setParticipantPlayback,
  ee as setRoomMediaPolicy,
  e2 as setTranslationPreference,
  R as signalNewConsumerTransport,
  bW as sleep,
  ca as startMeetingProgressTimer,
  br as startRecording,
  cY as startRecords,
  dP as startRoomRecording,
  S as startShareScreen,
  dU as startWhiteboard,
  e8 as stopBreakoutRooms,
  aK as stopConsumingTranslation,
  dI as stopParticipantScreenShare,
  er as stopProducing,
  bs as stopRecording,
  dS as stopRoomRecording,
  T as stopShareScreen,
  dV as stopWhiteboard,
  cZ as stoppedRecording,
  U as streamSuccessAudio,
  V as streamSuccessAudioSwitch,
  W as streamSuccessScreen,
  Y as streamSuccessVideo,
  bx as switchAudio,
  eb as switchCamera,
  ed as switchMicrophone,
  Z as switchUserAudio,
  _ as switchUserVideo,
  $ as switchUserVideoAlt,
  by as switchVideo,
  bz as switchVideoAlt,
  aL as syncTranslationStateAfterBreakoutChange,
  ac as timeLeftRecording,
  d5 as translationChannelsAvailable,
  c$ as translationConfigUpdated,
  d7 as translationError,
  d0 as translationLanguageSet,
  d6 as translationMemberState,
  d4 as translationProducerClosed,
  d3 as translationProducerReady,
  c_ as translationRoomConfig,
  d9 as translationSpeakerOutputChanged,
  d1 as translationSubscribed,
  d8 as translationTranscript,
  d2 as translationUnsubscribed,
  a0 as trigger,
  b7 as unfocusPanelists,
  db as updateConsumingDomains,
  bE as updateLiveSubtitlesFromTranscript,
  da as updateMediaSettings,
  u as updateMicLevel,
  av as updateMiniCardsGrid,
  b3 as updatePanelists,
  aw as updateParticipantAudioDecibels,
  b9 as updateParticipantPermission,
  bb as updatePermissionConfig,
  bt as updateRecording,
  ag as updateRoomParametersClient,
  dc as updatedCoHost,
  dd as userWaiting,
  ce as vParams,
  cB as validateAlphanumeric,
  v as validateWelcomeAlphanumeric,
  d as validateWelcomeInputs,
  dY as voteInRoomPoll
};
//# sourceMappingURL=index.js.map
