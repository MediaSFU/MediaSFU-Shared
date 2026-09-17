import { a, b, d, c, e, f, j, m, p, u } from "./joinLocalRoom-7ibqv7zZ.js";
import { Y, Z, a as a2, _, $, b as b2, W, d as d2, e as e2, f as f2, g, h, aa, i, j as j2, k, l, m as m2, a8, c as c2, a0, n, o, p as p2, q, a9, r, s, a1, a2 as a22, a3, t, X, T, v, U, w, x, y, V, C, G, z, A, a4, B, D, E, F, a5, N, H, I, J, K, L, M, O, P, Q, R, S, u as u2, a6, a7 } from "./updateParticipantAudioDecibels-C_MygF6q.js";
import { Q as Q2, u as u3, m as m3, A as A2, f as f3, e as e3, a as a10, c as c3, b as b3, d as d3, l as l2, y as y2, p as p3, D as D2, g as g2, k as k2, x as x2, o as o2, C as C2, h as h2, j as j3, q as q2, z as z2, r as r2, E as E2, F as F2, s as s2, i as i2, w as w2, n as n2, B as B2, t as t2, v as v2 } from "./joinRoomOnMediaSFU-y6vJ1OBo.js";
import { b as b4, d as d4, c as c4, f as f4, e as e4, k as k3, j as j4, h as h3, i as i3, p as p4, a as a11, r as r3, g as g3, s as s3, l as l3 } from "./translationConsumerSwitch-zKuS5wgH.js";
import { _ as getCurrentParams, W as getLocalVideoStream } from "./getParticipantMedia-CGqnSb93.js";
import { aD, aR, w as w3, x as x3, f as f5, y as y3, aP, ar, aU, aS, ab, at, aI, a4 as a42, Z as Z2, au, aV, aL, az, X as X2, aG, a7 as a72, N as N2, a8 as a82, b0, a2 as a23, aM, aQ, aq, aO, aw, av, ai, V as V2, U as U2, T as T2, Y as Y2, a6 as a62, aN, ax, aA, an, q as q3, t as t3, h as h4, Q as Q3, a as a12, R as R2, u as u4, l as l4, b as b5, c as c5, S as S2, g as g4, d as d5, i as i4, j as j5, k as k4, n as n3, v as v3, z as z3, H as H2, J as J2, O as O2, $ as $2, a5 as a52, a3 as a32, o as o3, m as m4, e as e5, ad, aa as aa2, p as p5, ak, aY, a_, aZ, aW, aT, aF, A as A3, B as B3, C as C3, D as D3, ae, r as r4, a$, ag, I as I2, P as P2, af, al, a1 as a13, a0 as a02, s as s4, aC, ah, a9 as a92, aB, aK, ay, E as E3, aj, ao, aE, ac, aX, F as F3, am, ap, K as K2, aH, aJ, L as L2, M as M2, G as G2, as } from "./getParticipantMedia-CGqnSb93.js";
import { COMMON_LANGUAGE_CODES, MediaStream as MediaStream2, MediaStreamTrack, RTCView, SUPPORTED_LANGUAGE_CODES, SoundPlayer, TTS_PROVIDERS, addPanelist, addedAsPanelist, allMembers, allMembersRest, allWaitingRoomMembers, banParticipant, bulkUpdateParticipantPermissions, clickChat, controlMediaHost, createLiveSubtitle, createResponseJoinRoom, createRoomOnMediaSFU, disconnect, disconnectUserSelf, fetchLanguagesViaSocket, fetchVoicesViaSocket, focusPanelists, formatNumber, generateRandomMessages, generateRandomParticipants, generateRandomPolls, generateRandomRequestList, generateRandomWaitingRoomList, getAvailableVoices, getCommonLanguages, getDomains, getLanguageMetadata, getLanguageName, getLanguageNativeName, getOverlayPosition, getSubtitleForSpeaker, getSupportedLanguages, handleCreateRoom, handleJoinRoom, handleWelcomeRequest, initialValuesState, isLanguageSupported, isSubtitleExpired, launchPanelists, launchPermissions, mediaDevices, meetingEnded, meetingStillThere, meetingTimeRemaining, normalizeLanguageCode, panelistControlMedia, panelistFocusChanged, panelistsUpdated, participantRequested, permissionConfigUpdated, permissionUpdated, personJoined, pollUpdated, producerMediaClosed, producerMediaPaused, producerMediaResumed, pruneExpiredSubtitles, reInitiateRecording, receiveMessage, recordingNotice, registerGlobals, removePanelist, removedFromPanelists, roomRecordParams, screenProducerId, sleep, startMeetingProgressTimer, startRecords, stoppedRecording, translationChannelsAvailable, translationConfigUpdated, translationError, translationLanguageSet, translationMemberState, translationProducerClosed, translationProducerReady, translationRoomConfig, translationSpeakerOutputChanged, translationSubscribed, translationTranscript, translationUnsubscribed, unfocusPanelists, updateConsumingDomains, updateLiveSubtitlesFromTranscript, updateMediaSettings, updatePanelists, updateParticipantPermission, updatePermissionConfig, updatedCoHost, userWaiting, validateWelcomeAlphanumeric, validateWelcomeInputs } from "./methods/index.js";
import { v as v4 } from "./validateAlphanumeric-Dk1JB80W.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var selfie_segmentation = {};
var hasRequiredSelfie_segmentation;
function requireSelfie_segmentation() {
  if (hasRequiredSelfie_segmentation) return selfie_segmentation;
  hasRequiredSelfie_segmentation = 1;
  (function() {
    var x4;
    function aa3(a14) {
      var b6 = 0;
      return function() {
        return b6 < a14.length ? { done: false, value: a14[b6++] } : { done: true };
      };
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a14, b6, c6) {
      if (a14 == Array.prototype || a14 == Object.prototype) return a14;
      a14[b6] = c6.value;
      return a14;
    };
    function ca(a14) {
      a14 = ["object" == typeof globalThis && globalThis, a14, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof commonjsGlobal && commonjsGlobal];
      for (var b6 = 0; b6 < a14.length; ++b6) {
        var c6 = a14[b6];
        if (c6 && c6.Math == Math) return c6;
      }
      throw Error("Cannot find global object");
    }
    var y4 = ca(this);
    function z4(a14, b6) {
      if (b6) a: {
        var c6 = y4;
        a14 = a14.split(".");
        for (var d6 = 0; d6 < a14.length - 1; d6++) {
          var e6 = a14[d6];
          if (!(e6 in c6)) break a;
          c6 = c6[e6];
        }
        a14 = a14[a14.length - 1];
        d6 = c6[a14];
        b6 = b6(d6);
        b6 != d6 && null != b6 && ba(c6, a14, { configurable: true, writable: true, value: b6 });
      }
    }
    z4("Symbol", function(a14) {
      function b6(g5) {
        if (this instanceof b6) throw new TypeError("Symbol is not a constructor");
        return new c6(d6 + (g5 || "") + "_" + e6++, g5);
      }
      function c6(g5, f6) {
        this.h = g5;
        ba(this, "description", { configurable: true, writable: true, value: f6 });
      }
      if (a14) return a14;
      c6.prototype.toString = function() {
        return this.h;
      };
      var d6 = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", e6 = 0;
      return b6;
    });
    z4("Symbol.iterator", function(a14) {
      if (a14) return a14;
      a14 = Symbol("Symbol.iterator");
      for (var b6 = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c6 = 0; c6 < b6.length; c6++) {
        var d6 = y4[b6[c6]];
        "function" === typeof d6 && "function" != typeof d6.prototype[a14] && ba(d6.prototype, a14, { configurable: true, writable: true, value: function() {
          return da(aa3(this));
        } });
      }
      return a14;
    });
    function da(a14) {
      a14 = { next: a14 };
      a14[Symbol.iterator] = function() {
        return this;
      };
      return a14;
    }
    function A4(a14) {
      var b6 = "undefined" != typeof Symbol && Symbol.iterator && a14[Symbol.iterator];
      return b6 ? b6.call(a14) : { next: aa3(a14) };
    }
    function ea(a14) {
      if (!(a14 instanceof Array)) {
        a14 = A4(a14);
        for (var b6, c6 = []; !(b6 = a14.next()).done; ) c6.push(b6.value);
        a14 = c6;
      }
      return a14;
    }
    var fa = "function" == typeof Object.assign ? Object.assign : function(a14, b6) {
      for (var c6 = 1; c6 < arguments.length; c6++) {
        var d6 = arguments[c6];
        if (d6) for (var e6 in d6) Object.prototype.hasOwnProperty.call(d6, e6) && (a14[e6] = d6[e6]);
      }
      return a14;
    };
    z4("Object.assign", function(a14) {
      return a14 || fa;
    });
    var ha = "function" == typeof Object.create ? Object.create : function(a14) {
      function b6() {
      }
      b6.prototype = a14;
      return new b6();
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
        } catch (a14) {
        }
        ja = false;
      }
      ia = ja ? function(a14, b6) {
        a14.__proto__ = b6;
        if (a14.__proto__ !== b6) throw new TypeError(a14 + " is not extensible");
        return a14;
      } : null;
    }
    var ma = ia;
    function na(a14, b6) {
      a14.prototype = ha(b6.prototype);
      a14.prototype.constructor = a14;
      if (ma) ma(a14, b6);
      else for (var c6 in b6) if ("prototype" != c6) if (Object.defineProperties) {
        var d6 = Object.getOwnPropertyDescriptor(b6, c6);
        d6 && Object.defineProperty(a14, c6, d6);
      } else a14[c6] = b6[c6];
      a14.za = b6.prototype;
    }
    function oa() {
      this.m = false;
      this.j = null;
      this.i = void 0;
      this.h = 1;
      this.v = this.s = 0;
      this.l = null;
    }
    function pa(a14) {
      if (a14.m) throw new TypeError("Generator is already running");
      a14.m = true;
    }
    oa.prototype.u = function(a14) {
      this.i = a14;
    };
    function qa(a14, b6) {
      a14.l = { ma: b6, na: true };
      a14.h = a14.s || a14.v;
    }
    oa.prototype.return = function(a14) {
      this.l = { return: a14 };
      this.h = this.v;
    };
    function D4(a14, b6, c6) {
      a14.h = c6;
      return { value: b6 };
    }
    function ra(a14) {
      this.h = new oa();
      this.i = a14;
    }
    function sa(a14, b6) {
      pa(a14.h);
      var c6 = a14.h.j;
      if (c6) return ta(a14, "return" in c6 ? c6["return"] : function(d6) {
        return { value: d6, done: true };
      }, b6, a14.h.return);
      a14.h.return(b6);
      return ua(a14);
    }
    function ta(a14, b6, c6, d6) {
      try {
        var e6 = b6.call(a14.h.j, c6);
        if (!(e6 instanceof Object)) throw new TypeError("Iterator result " + e6 + " is not an object");
        if (!e6.done) return a14.h.m = false, e6;
        var g5 = e6.value;
      } catch (f6) {
        return a14.h.j = null, qa(a14.h, f6), ua(a14);
      }
      a14.h.j = null;
      d6.call(a14.h, g5);
      return ua(a14);
    }
    function ua(a14) {
      for (; a14.h.h; ) try {
        var b6 = a14.i(a14.h);
        if (b6) return a14.h.m = false, { value: b6.value, done: false };
      } catch (c6) {
        a14.h.i = void 0, qa(a14.h, c6);
      }
      a14.h.m = false;
      if (a14.h.l) {
        b6 = a14.h.l;
        a14.h.l = null;
        if (b6.na) throw b6.ma;
        return { value: b6.return, done: true };
      }
      return { value: void 0, done: true };
    }
    function va(a14) {
      this.next = function(b6) {
        pa(a14.h);
        a14.h.j ? b6 = ta(a14, a14.h.j.next, b6, a14.h.u) : (a14.h.u(b6), b6 = ua(a14));
        return b6;
      };
      this.throw = function(b6) {
        pa(a14.h);
        a14.h.j ? b6 = ta(a14, a14.h.j["throw"], b6, a14.h.u) : (qa(a14.h, b6), b6 = ua(a14));
        return b6;
      };
      this.return = function(b6) {
        return sa(a14, b6);
      };
      this[Symbol.iterator] = function() {
        return this;
      };
    }
    function wa(a14) {
      function b6(d6) {
        return a14.next(d6);
      }
      function c6(d6) {
        return a14.throw(d6);
      }
      return new Promise(function(d6, e6) {
        function g5(f6) {
          f6.done ? d6(f6.value) : Promise.resolve(f6.value).then(b6, c6).then(g5, e6);
        }
        g5(a14.next());
      });
    }
    function E4(a14) {
      return wa(new va(new ra(a14)));
    }
    z4("Promise", function(a14) {
      function b6(f6) {
        this.i = 0;
        this.j = void 0;
        this.h = [];
        this.u = false;
        var h5 = this.l();
        try {
          f6(h5.resolve, h5.reject);
        } catch (k5) {
          h5.reject(k5);
        }
      }
      function c6() {
        this.h = null;
      }
      function d6(f6) {
        return f6 instanceof b6 ? f6 : new b6(function(h5) {
          h5(f6);
        });
      }
      if (a14) return a14;
      c6.prototype.i = function(f6) {
        if (null == this.h) {
          this.h = [];
          var h5 = this;
          this.j(function() {
            h5.m();
          });
        }
        this.h.push(f6);
      };
      var e6 = y4.setTimeout;
      c6.prototype.j = function(f6) {
        e6(f6, 0);
      };
      c6.prototype.m = function() {
        for (; this.h && this.h.length; ) {
          var f6 = this.h;
          this.h = [];
          for (var h5 = 0; h5 < f6.length; ++h5) {
            var k5 = f6[h5];
            f6[h5] = null;
            try {
              k5();
            } catch (l5) {
              this.l(l5);
            }
          }
        }
        this.h = null;
      };
      c6.prototype.l = function(f6) {
        this.j(function() {
          throw f6;
        });
      };
      b6.prototype.l = function() {
        function f6(l5) {
          return function(m5) {
            k5 || (k5 = true, l5.call(h5, m5));
          };
        }
        var h5 = this, k5 = false;
        return { resolve: f6(this.I), reject: f6(this.m) };
      };
      b6.prototype.I = function(f6) {
        if (f6 === this) this.m(new TypeError("A Promise cannot resolve to itself"));
        else if (f6 instanceof b6) this.L(f6);
        else {
          a: switch (typeof f6) {
            case "object":
              var h5 = null != f6;
              break a;
            case "function":
              h5 = true;
              break a;
            default:
              h5 = false;
          }
          h5 ? this.F(f6) : this.s(f6);
        }
      };
      b6.prototype.F = function(f6) {
        var h5 = void 0;
        try {
          h5 = f6.then;
        } catch (k5) {
          this.m(k5);
          return;
        }
        "function" == typeof h5 ? this.M(h5, f6) : this.s(f6);
      };
      b6.prototype.m = function(f6) {
        this.v(2, f6);
      };
      b6.prototype.s = function(f6) {
        this.v(1, f6);
      };
      b6.prototype.v = function(f6, h5) {
        if (0 != this.i) throw Error("Cannot settle(" + f6 + ", " + h5 + "): Promise already settled in state" + this.i);
        this.i = f6;
        this.j = h5;
        2 === this.i && this.K();
        this.H();
      };
      b6.prototype.K = function() {
        var f6 = this;
        e6(function() {
          if (f6.D()) {
            var h5 = y4.console;
            "undefined" !== typeof h5 && h5.error(f6.j);
          }
        }, 1);
      };
      b6.prototype.D = function() {
        if (this.u) return false;
        var f6 = y4.CustomEvent, h5 = y4.Event, k5 = y4.dispatchEvent;
        if ("undefined" === typeof k5) return true;
        "function" === typeof f6 ? f6 = new f6("unhandledrejection", { cancelable: true }) : "function" === typeof h5 ? f6 = new h5("unhandledrejection", { cancelable: true }) : (f6 = y4.document.createEvent("CustomEvent"), f6.initCustomEvent("unhandledrejection", false, true, f6));
        f6.promise = this;
        f6.reason = this.j;
        return k5(f6);
      };
      b6.prototype.H = function() {
        if (null != this.h) {
          for (var f6 = 0; f6 < this.h.length; ++f6) g5.i(this.h[f6]);
          this.h = null;
        }
      };
      var g5 = new c6();
      b6.prototype.L = function(f6) {
        var h5 = this.l();
        f6.T(h5.resolve, h5.reject);
      };
      b6.prototype.M = function(f6, h5) {
        var k5 = this.l();
        try {
          f6.call(h5, k5.resolve, k5.reject);
        } catch (l5) {
          k5.reject(l5);
        }
      };
      b6.prototype.then = function(f6, h5) {
        function k5(p6, n4) {
          return "function" == typeof p6 ? function(q4) {
            try {
              l5(p6(q4));
            } catch (t4) {
              m5(t4);
            }
          } : n4;
        }
        var l5, m5, r5 = new b6(function(p6, n4) {
          l5 = p6;
          m5 = n4;
        });
        this.T(k5(f6, l5), k5(h5, m5));
        return r5;
      };
      b6.prototype.catch = function(f6) {
        return this.then(void 0, f6);
      };
      b6.prototype.T = function(f6, h5) {
        function k5() {
          switch (l5.i) {
            case 1:
              f6(l5.j);
              break;
            case 2:
              h5(l5.j);
              break;
            default:
              throw Error("Unexpected state: " + l5.i);
          }
        }
        var l5 = this;
        null == this.h ? g5.i(k5) : this.h.push(k5);
        this.u = true;
      };
      b6.resolve = d6;
      b6.reject = function(f6) {
        return new b6(function(h5, k5) {
          k5(f6);
        });
      };
      b6.race = function(f6) {
        return new b6(function(h5, k5) {
          for (var l5 = A4(f6), m5 = l5.next(); !m5.done; m5 = l5.next()) d6(m5.value).T(h5, k5);
        });
      };
      b6.all = function(f6) {
        var h5 = A4(f6), k5 = h5.next();
        return k5.done ? d6([]) : new b6(function(l5, m5) {
          function r5(q4) {
            return function(t4) {
              p6[q4] = t4;
              n4--;
              0 == n4 && l5(p6);
            };
          }
          var p6 = [], n4 = 0;
          do
            p6.push(void 0), n4++, d6(k5.value).T(r5(p6.length - 1), m5), k5 = h5.next();
          while (!k5.done);
        });
      };
      return b6;
    });
    function xa(a14, b6) {
      a14 instanceof String && (a14 += "");
      var c6 = 0, d6 = false, e6 = { next: function() {
        if (!d6 && c6 < a14.length) {
          var g5 = c6++;
          return { value: b6(g5, a14[g5]), done: false };
        }
        d6 = true;
        return { done: true, value: void 0 };
      } };
      e6[Symbol.iterator] = function() {
        return e6;
      };
      return e6;
    }
    z4("Array.prototype.keys", function(a14) {
      return a14 ? a14 : function() {
        return xa(this, function(b6) {
          return b6;
        });
      };
    });
    z4("Array.prototype.fill", function(a14) {
      return a14 ? a14 : function(b6, c6, d6) {
        var e6 = this.length || 0;
        0 > c6 && (c6 = Math.max(0, e6 + c6));
        if (null == d6 || d6 > e6) d6 = e6;
        d6 = Number(d6);
        0 > d6 && (d6 = Math.max(0, e6 + d6));
        for (c6 = Number(c6 || 0); c6 < d6; c6++) this[c6] = b6;
        return this;
      };
    });
    function F4(a14) {
      return a14 ? a14 : Array.prototype.fill;
    }
    z4("Int8Array.prototype.fill", F4);
    z4("Uint8Array.prototype.fill", F4);
    z4("Uint8ClampedArray.prototype.fill", F4);
    z4("Int16Array.prototype.fill", F4);
    z4("Uint16Array.prototype.fill", F4);
    z4("Int32Array.prototype.fill", F4);
    z4("Uint32Array.prototype.fill", F4);
    z4("Float32Array.prototype.fill", F4);
    z4("Float64Array.prototype.fill", F4);
    z4("Object.is", function(a14) {
      return a14 ? a14 : function(b6, c6) {
        return b6 === c6 ? 0 !== b6 || 1 / b6 === 1 / c6 : b6 !== b6 && c6 !== c6;
      };
    });
    z4("Array.prototype.includes", function(a14) {
      return a14 ? a14 : function(b6, c6) {
        var d6 = this;
        d6 instanceof String && (d6 = String(d6));
        var e6 = d6.length;
        c6 = c6 || 0;
        for (0 > c6 && (c6 = Math.max(c6 + e6, 0)); c6 < e6; c6++) {
          var g5 = d6[c6];
          if (g5 === b6 || Object.is(g5, b6)) return true;
        }
        return false;
      };
    });
    z4("String.prototype.includes", function(a14) {
      return a14 ? a14 : function(b6, c6) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
        if (b6 instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        return -1 !== this.indexOf(b6, c6 || 0);
      };
    });
    var ya = this || self;
    function Aa(a14, b6) {
      a14 = a14.split(".");
      var c6 = ya;
      a14[0] in c6 || "undefined" == typeof c6.execScript || c6.execScript("var " + a14[0]);
      for (var d6; a14.length && (d6 = a14.shift()); ) a14.length || void 0 === b6 ? c6[d6] && c6[d6] !== Object.prototype[d6] ? c6 = c6[d6] : c6 = c6[d6] = {} : c6[d6] = b6;
    }
    function Ba(a14) {
      var b6;
      a: {
        if (b6 = ya.navigator) {
          if (b6 = b6.userAgent) break a;
        }
        b6 = "";
      }
      return -1 != b6.indexOf(a14);
    }
    var Ca = Array.prototype.map ? function(a14, b6) {
      return Array.prototype.map.call(a14, b6, void 0);
    } : function(a14, b6) {
      for (var c6 = a14.length, d6 = Array(c6), e6 = "string" === typeof a14 ? a14.split("") : a14, g5 = 0; g5 < c6; g5++) g5 in e6 && (d6[g5] = b6.call(void 0, e6[g5], g5, a14));
      return d6;
    };
    var Da = {}, Ea = null;
    function Fa(a14) {
      var b6 = a14.length, c6 = 3 * b6 / 4;
      c6 % 3 ? c6 = Math.floor(c6) : -1 != "=.".indexOf(a14[b6 - 1]) && (c6 = -1 != "=.".indexOf(a14[b6 - 2]) ? c6 - 2 : c6 - 1);
      var d6 = new Uint8Array(c6), e6 = 0;
      Ga(a14, function(g5) {
        d6[e6++] = g5;
      });
      return e6 !== c6 ? d6.subarray(0, e6) : d6;
    }
    function Ga(a14, b6) {
      function c6(k5) {
        for (; d6 < a14.length; ) {
          var l5 = a14.charAt(d6++), m5 = Ea[l5];
          if (null != m5) return m5;
          if (!/^[\s\xa0]*$/.test(l5)) throw Error("Unknown base64 encoding at char: " + l5);
        }
        return k5;
      }
      Ha();
      for (var d6 = 0; ; ) {
        var e6 = c6(-1), g5 = c6(0), f6 = c6(64), h5 = c6(64);
        if (64 === h5 && -1 === e6) break;
        b6(e6 << 2 | g5 >> 4);
        64 != f6 && (b6(g5 << 4 & 240 | f6 >> 2), 64 != h5 && b6(f6 << 6 & 192 | h5));
      }
    }
    function Ha() {
      if (!Ea) {
        Ea = {};
        for (var a14 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b6 = ["+/=", "+/", "-_=", "-_.", "-_"], c6 = 0; 5 > c6; c6++) {
          var d6 = a14.concat(b6[c6].split(""));
          Da[c6] = d6;
          for (var e6 = 0; e6 < d6.length; e6++) {
            var g5 = d6[e6];
            void 0 === Ea[g5] && (Ea[g5] = e6);
          }
        }
      }
    }
    var Ia = "undefined" !== typeof Uint8Array, Ja = !(Ba("Trident") || Ba("MSIE")) && "function" === typeof ya.btoa;
    function Ka(a14) {
      if (!Ja) {
        var b6;
        void 0 === b6 && (b6 = 0);
        Ha();
        b6 = Da[b6];
        for (var c6 = Array(Math.floor(a14.length / 3)), d6 = b6[64] || "", e6 = 0, g5 = 0; e6 < a14.length - 2; e6 += 3) {
          var f6 = a14[e6], h5 = a14[e6 + 1], k5 = a14[e6 + 2], l5 = b6[f6 >> 2];
          f6 = b6[(f6 & 3) << 4 | h5 >> 4];
          h5 = b6[(h5 & 15) << 2 | k5 >> 6];
          k5 = b6[k5 & 63];
          c6[g5++] = l5 + f6 + h5 + k5;
        }
        l5 = 0;
        k5 = d6;
        switch (a14.length - e6) {
          case 2:
            l5 = a14[e6 + 1], k5 = b6[(l5 & 15) << 2] || d6;
          case 1:
            a14 = a14[e6], c6[g5] = b6[a14 >> 2] + b6[(a14 & 3) << 4 | l5 >> 4] + k5 + d6;
        }
        return c6.join("");
      }
      for (b6 = ""; 10240 < a14.length; ) b6 += String.fromCharCode.apply(null, a14.subarray(0, 10240)), a14 = a14.subarray(10240);
      b6 += String.fromCharCode.apply(
        null,
        a14
      );
      return btoa(b6);
    }
    var La = RegExp("[-_.]", "g");
    function Ma(a14) {
      switch (a14) {
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
    function Na(a14) {
      if (!Ja) return Fa(a14);
      La.test(a14) && (a14 = a14.replace(La, Ma));
      a14 = atob(a14);
      for (var b6 = new Uint8Array(a14.length), c6 = 0; c6 < a14.length; c6++) b6[c6] = a14.charCodeAt(c6);
      return b6;
    }
    var Oa;
    function Pa() {
      return Oa || (Oa = new Uint8Array(0));
    }
    var Qa = {};
    var Ra = "function" === typeof Uint8Array.prototype.slice, G3 = 0, H3 = 0;
    function Sa(a14) {
      var b6 = 0 > a14;
      a14 = Math.abs(a14);
      var c6 = a14 >>> 0;
      a14 = Math.floor((a14 - c6) / 4294967296);
      b6 && (c6 = A4(Ta(c6, a14)), b6 = c6.next().value, a14 = c6.next().value, c6 = b6);
      G3 = c6 >>> 0;
      H3 = a14 >>> 0;
    }
    var Ua = "function" === typeof BigInt;
    function Ta(a14, b6) {
      b6 = ~b6;
      a14 ? a14 = ~a14 + 1 : b6 += 1;
      return [a14, b6];
    }
    function Va(a14, b6) {
      this.i = a14 >>> 0;
      this.h = b6 >>> 0;
    }
    function Wa(a14) {
      if (!a14) return Xa || (Xa = new Va(0, 0));
      if (!/^-?\d+$/.test(a14)) return null;
      if (16 > a14.length) Sa(Number(a14));
      else if (Ua) a14 = BigInt(a14), G3 = Number(a14 & BigInt(4294967295)) >>> 0, H3 = Number(a14 >> BigInt(32) & BigInt(4294967295));
      else {
        var b6 = +("-" === a14[0]);
        H3 = G3 = 0;
        for (var c6 = a14.length, d6 = b6, e6 = (c6 - b6) % 6 + b6; e6 <= c6; d6 = e6, e6 += 6) d6 = Number(a14.slice(d6, e6)), H3 *= 1e6, G3 = 1e6 * G3 + d6, 4294967296 <= G3 && (H3 += G3 / 4294967296 | 0, G3 %= 4294967296);
        b6 && (b6 = A4(Ta(G3, H3)), a14 = b6.next().value, b6 = b6.next().value, G3 = a14, H3 = b6);
      }
      return new Va(G3, H3);
    }
    var Xa;
    function Ya(a14, b6) {
      return Error("Invalid wire type: " + a14 + " (at position " + b6 + ")");
    }
    function Za() {
      return Error("Failed to read varint, encoding is invalid.");
    }
    function $a(a14, b6) {
      return Error("Tried to read past the end of the data " + b6 + " > " + a14);
    }
    function K3() {
      throw Error("Invalid UTF8");
    }
    function ab2(a14, b6) {
      b6 = String.fromCharCode.apply(null, b6);
      return null == a14 ? b6 : a14 + b6;
    }
    var bb = void 0, cb, db = "undefined" !== typeof TextDecoder, eb, fb = "undefined" !== typeof TextEncoder;
    var gb;
    function hb(a14) {
      if (a14 !== Qa) throw Error("illegal external caller");
    }
    function ib(a14, b6) {
      hb(b6);
      this.V = a14;
      if (null != a14 && 0 === a14.length) throw Error("ByteString should be constructed with non-empty values");
    }
    function jb() {
      return gb || (gb = new ib(null, Qa));
    }
    function kb(a14) {
      hb(Qa);
      var b6 = a14.V;
      b6 = null == b6 || Ia && null != b6 && b6 instanceof Uint8Array ? b6 : "string" === typeof b6 ? Na(b6) : null;
      return null == b6 ? b6 : a14.V = b6;
    }
    function lb(a14) {
      if ("string" === typeof a14) return { buffer: Na(a14), C: false };
      if (Array.isArray(a14)) return { buffer: new Uint8Array(a14), C: false };
      if (a14.constructor === Uint8Array) return { buffer: a14, C: false };
      if (a14.constructor === ArrayBuffer) return { buffer: new Uint8Array(a14), C: false };
      if (a14.constructor === ib) return { buffer: kb(a14) || Pa(), C: true };
      if (a14 instanceof Uint8Array) return { buffer: new Uint8Array(a14.buffer, a14.byteOffset, a14.byteLength), C: false };
      throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
    }
    function mb(a14, b6) {
      this.i = null;
      this.m = false;
      this.h = this.j = this.l = 0;
      nb(this, a14, b6);
    }
    function nb(a14, b6, c6) {
      c6 = void 0 === c6 ? {} : c6;
      a14.S = void 0 === c6.S ? false : c6.S;
      b6 && (b6 = lb(b6), a14.i = b6.buffer, a14.m = b6.C, a14.l = 0, a14.j = a14.i.length, a14.h = a14.l);
    }
    mb.prototype.reset = function() {
      this.h = this.l;
    };
    function L3(a14, b6) {
      a14.h = b6;
      if (b6 > a14.j) throw $a(a14.j, b6);
    }
    function ob(a14) {
      var b6 = a14.i, c6 = a14.h, d6 = b6[c6++], e6 = d6 & 127;
      if (d6 & 128 && (d6 = b6[c6++], e6 |= (d6 & 127) << 7, d6 & 128 && (d6 = b6[c6++], e6 |= (d6 & 127) << 14, d6 & 128 && (d6 = b6[c6++], e6 |= (d6 & 127) << 21, d6 & 128 && (d6 = b6[c6++], e6 |= d6 << 28, d6 & 128 && b6[c6++] & 128 && b6[c6++] & 128 && b6[c6++] & 128 && b6[c6++] & 128 && b6[c6++] & 128))))) throw Za();
      L3(a14, c6);
      return e6;
    }
    function pb(a14, b6) {
      if (0 > b6) throw Error("Tried to read a negative byte length: " + b6);
      var c6 = a14.h, d6 = c6 + b6;
      if (d6 > a14.j) throw $a(b6, a14.j - c6);
      a14.h = d6;
      return c6;
    }
    var qb = [];
    function rb() {
      this.h = [];
    }
    rb.prototype.length = function() {
      return this.h.length;
    };
    rb.prototype.end = function() {
      var a14 = this.h;
      this.h = [];
      return a14;
    };
    function sb(a14, b6, c6) {
      for (; 0 < c6 || 127 < b6; ) a14.h.push(b6 & 127 | 128), b6 = (b6 >>> 7 | c6 << 25) >>> 0, c6 >>>= 7;
      a14.h.push(b6);
    }
    function M3(a14, b6) {
      for (; 127 < b6; ) a14.h.push(b6 & 127 | 128), b6 >>>= 7;
      a14.h.push(b6);
    }
    function tb(a14, b6) {
      if (qb.length) {
        var c6 = qb.pop();
        nb(c6, a14, b6);
        a14 = c6;
      } else a14 = new mb(a14, b6);
      this.h = a14;
      this.j = this.h.h;
      this.i = this.l = -1;
      this.setOptions(b6);
    }
    tb.prototype.setOptions = function(a14) {
      a14 = void 0 === a14 ? {} : a14;
      this.ca = void 0 === a14.ca ? false : a14.ca;
    };
    tb.prototype.reset = function() {
      this.h.reset();
      this.j = this.h.h;
      this.i = this.l = -1;
    };
    function ub(a14) {
      var b6 = a14.h;
      if (b6.h == b6.j) return false;
      a14.j = a14.h.h;
      var c6 = ob(a14.h) >>> 0;
      b6 = c6 >>> 3;
      c6 &= 7;
      if (!(0 <= c6 && 5 >= c6)) throw Ya(c6, a14.j);
      if (1 > b6) throw Error("Invalid field number: " + b6 + " (at position " + a14.j + ")");
      a14.l = b6;
      a14.i = c6;
      return true;
    }
    function vb(a14) {
      switch (a14.i) {
        case 0:
          if (0 != a14.i) vb(a14);
          else a: {
            a14 = a14.h;
            for (var b6 = a14.h, c6 = b6 + 10, d6 = a14.i; b6 < c6; ) if (0 === (d6[b6++] & 128)) {
              L3(a14, b6);
              break a;
            }
            throw Za();
          }
          break;
        case 1:
          a14 = a14.h;
          L3(a14, a14.h + 8);
          break;
        case 2:
          2 != a14.i ? vb(a14) : (b6 = ob(a14.h) >>> 0, a14 = a14.h, L3(a14, a14.h + b6));
          break;
        case 5:
          a14 = a14.h;
          L3(a14, a14.h + 4);
          break;
        case 3:
          b6 = a14.l;
          do {
            if (!ub(a14)) throw Error("Unmatched start-group tag: stream EOF");
            if (4 == a14.i) {
              if (a14.l != b6) throw Error("Unmatched end-group tag");
              break;
            }
            vb(a14);
          } while (1);
          break;
        default:
          throw Ya(a14.i, a14.j);
      }
    }
    var wb = [];
    function xb() {
      this.j = [];
      this.i = 0;
      this.h = new rb();
    }
    function N3(a14, b6) {
      0 !== b6.length && (a14.j.push(b6), a14.i += b6.length);
    }
    function yb(a14, b6) {
      if (b6 = b6.R) {
        N3(a14, a14.h.end());
        for (var c6 = 0; c6 < b6.length; c6++) N3(a14, kb(b6[c6]) || Pa());
      }
    }
    var O3 = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
    function P3(a14, b6) {
      if (O3) return a14[O3] |= b6;
      if (void 0 !== a14.A) return a14.A |= b6;
      Object.defineProperties(a14, { A: { value: b6, configurable: true, writable: true, enumerable: false } });
      return b6;
    }
    function zb(a14, b6) {
      O3 ? a14[O3] && (a14[O3] &= ~b6) : void 0 !== a14.A && (a14.A &= ~b6);
    }
    function Q4(a14) {
      var b6;
      O3 ? b6 = a14[O3] : b6 = a14.A;
      return null == b6 ? 0 : b6;
    }
    function R3(a14, b6) {
      O3 ? a14[O3] = b6 : void 0 !== a14.A ? a14.A = b6 : Object.defineProperties(a14, { A: { value: b6, configurable: true, writable: true, enumerable: false } });
    }
    function Ab(a14) {
      P3(a14, 1);
      return a14;
    }
    function Bb(a14, b6) {
      R3(b6, (a14 | 0) & -51);
    }
    function Cb(a14, b6) {
      R3(b6, (a14 | 18) & -41);
    }
    var Db = {};
    function Eb(a14) {
      return null !== a14 && "object" === typeof a14 && !Array.isArray(a14) && a14.constructor === Object;
    }
    var Fb, Gb = [];
    R3(Gb, 23);
    Fb = Object.freeze(Gb);
    function Hb(a14) {
      if (Q4(a14.o) & 2) throw Error("Cannot mutate an immutable Message");
    }
    function Ib(a14) {
      var b6 = a14.length;
      (b6 = b6 ? a14[b6 - 1] : void 0) && Eb(b6) ? b6.g = 1 : (b6 = {}, a14.push((b6.g = 1, b6)));
    }
    function Jb(a14) {
      var b6 = a14.i + a14.G;
      return a14.B || (a14.B = a14.o[b6] = {});
    }
    function S3(a14, b6) {
      return -1 === b6 ? null : b6 >= a14.i ? a14.B ? a14.B[b6] : void 0 : a14.o[b6 + a14.G];
    }
    function U3(a14, b6, c6, d6) {
      Hb(a14);
      Kb(a14, b6, c6, d6);
    }
    function Kb(a14, b6, c6, d6) {
      a14.j && (a14.j = void 0);
      b6 >= a14.i || d6 ? Jb(a14)[b6] = c6 : (a14.o[b6 + a14.G] = c6, (a14 = a14.B) && b6 in a14 && delete a14[b6]);
    }
    function Lb(a14, b6, c6, d6) {
      var e6 = S3(a14, b6);
      Array.isArray(e6) || (e6 = Fb);
      var g5 = Q4(e6);
      g5 & 1 || Ab(e6);
      if (d6) g5 & 2 || P3(e6, 2), c6 & 1 || Object.freeze(e6);
      else {
        d6 = !(c6 & 2);
        var f6 = g5 & 2;
        c6 & 1 || !f6 ? d6 && g5 & 16 && !f6 && zb(e6, 16) : (e6 = Ab(Array.prototype.slice.call(e6)), Kb(a14, b6, e6));
      }
      return e6;
    }
    function Mb(a14, b6) {
      var c6 = S3(a14, b6);
      var d6 = null == c6 ? c6 : "number" === typeof c6 || "NaN" === c6 || "Infinity" === c6 || "-Infinity" === c6 ? Number(c6) : void 0;
      null != d6 && d6 !== c6 && Kb(a14, b6, d6);
      return d6;
    }
    function Nb(a14, b6, c6, d6, e6) {
      a14.h || (a14.h = {});
      var g5 = a14.h[c6], f6 = Lb(a14, c6, 3, e6);
      if (!g5) {
        var h5 = f6;
        g5 = [];
        var k5 = !!(Q4(a14.o) & 16);
        f6 = !!(Q4(h5) & 2);
        var l5 = h5;
        !e6 && f6 && (h5 = Array.prototype.slice.call(h5));
        for (var m5 = f6, r5 = 0; r5 < h5.length; r5++) {
          var p6 = h5[r5];
          var n4 = b6, q4 = false;
          q4 = void 0 === q4 ? false : q4;
          p6 = Array.isArray(p6) ? new n4(p6) : q4 ? new n4() : void 0;
          if (void 0 !== p6) {
            n4 = p6.o;
            var t4 = q4 = Q4(n4);
            f6 && (t4 |= 2);
            k5 && (t4 |= 16);
            t4 != q4 && R3(n4, t4);
            n4 = t4;
            m5 = m5 || !!(2 & n4);
            g5.push(p6);
          }
        }
        a14.h[c6] = g5;
        k5 = Q4(h5);
        b6 = k5 | 33;
        b6 = m5 ? b6 & -9 : b6 | 8;
        k5 != b6 && (m5 = h5, Object.isFrozen(m5) && (m5 = Array.prototype.slice.call(m5)), R3(m5, b6), h5 = m5);
        l5 !== h5 && Kb(
          a14,
          c6,
          h5
        );
        (e6 || d6 && f6) && P3(g5, 2);
        d6 && Object.freeze(g5);
        return g5;
      }
      e6 || (e6 = Object.isFrozen(g5), d6 && !e6 ? Object.freeze(g5) : !d6 && e6 && (g5 = Array.prototype.slice.call(g5), a14.h[c6] = g5));
      return g5;
    }
    function Ob(a14, b6, c6) {
      var d6 = !!(Q4(a14.o) & 2);
      b6 = Nb(a14, b6, c6, d6, d6);
      a14 = Lb(a14, c6, 3, d6);
      if (!(d6 || Q4(a14) & 8)) {
        for (d6 = 0; d6 < b6.length; d6++) {
          c6 = b6[d6];
          if (Q4(c6.o) & 2) {
            var e6 = Pb(c6, false);
            e6.j = c6;
          } else e6 = c6;
          c6 !== e6 && (b6[d6] = e6, a14[d6] = e6.o);
        }
        P3(a14, 8);
      }
      return b6;
    }
    function V3(a14, b6, c6) {
      if (null != c6 && "number" !== typeof c6) throw Error("Value of float/double field must be a number|null|undefined, found " + typeof c6 + ": " + c6);
      U3(a14, b6, c6);
    }
    function Qb(a14, b6, c6, d6, e6) {
      Hb(a14);
      var g5 = Nb(a14, c6, b6, false, false);
      c6 = null != d6 ? d6 : new c6();
      a14 = Lb(a14, b6, 2, false);
      void 0 != e6 ? (g5.splice(e6, 0, c6), a14.splice(e6, 0, c6.o)) : (g5.push(c6), a14.push(c6.o));
      c6.C() && zb(a14, 8);
      return c6;
    }
    function Rb(a14, b6) {
      return null == a14 ? b6 : a14;
    }
    function W2(a14, b6, c6) {
      c6 = void 0 === c6 ? 0 : c6;
      return Rb(Mb(a14, b6), c6);
    }
    var Sb;
    function Tb(a14) {
      switch (typeof a14) {
        case "number":
          return isFinite(a14) ? a14 : String(a14);
        case "object":
          if (a14) if (Array.isArray(a14)) {
            if (0 !== (Q4(a14) & 128)) return a14 = Array.prototype.slice.call(a14), Ib(a14), a14;
          } else {
            if (Ia && null != a14 && a14 instanceof Uint8Array) return Ka(a14);
            if (a14 instanceof ib) {
              var b6 = a14.V;
              return null == b6 ? "" : "string" === typeof b6 ? b6 : a14.V = Ka(b6);
            }
          }
      }
      return a14;
    }
    function Ub(a14, b6, c6, d6) {
      if (null != a14) {
        if (Array.isArray(a14)) a14 = Vb(a14, b6, c6, void 0 !== d6);
        else if (Eb(a14)) {
          var e6 = {}, g5;
          for (g5 in a14) e6[g5] = Ub(a14[g5], b6, c6, d6);
          a14 = e6;
        } else a14 = b6(a14, d6);
        return a14;
      }
    }
    function Vb(a14, b6, c6, d6) {
      var e6 = Q4(a14);
      d6 = d6 ? !!(e6 & 16) : void 0;
      a14 = Array.prototype.slice.call(a14);
      for (var g5 = 0; g5 < a14.length; g5++) a14[g5] = Ub(a14[g5], b6, c6, d6);
      c6(e6, a14);
      return a14;
    }
    function Wb(a14) {
      return a14.ja === Db ? a14.toJSON() : Tb(a14);
    }
    function Xb(a14, b6) {
      a14 & 128 && Ib(b6);
    }
    function Yb(a14, b6, c6) {
      c6 = void 0 === c6 ? Cb : c6;
      if (null != a14) {
        if (Ia && a14 instanceof Uint8Array) return a14.length ? new ib(new Uint8Array(a14), Qa) : jb();
        if (Array.isArray(a14)) {
          var d6 = Q4(a14);
          if (d6 & 2) return a14;
          if (b6 && !(d6 & 32) && (d6 & 16 || 0 === d6)) return R3(a14, d6 | 2), a14;
          a14 = Vb(a14, Yb, d6 & 4 ? Cb : c6, true);
          b6 = Q4(a14);
          b6 & 4 && b6 & 2 && Object.freeze(a14);
          return a14;
        }
        return a14.ja === Db ? Zb(a14) : a14;
      }
    }
    function $b(a14, b6, c6, d6, e6, g5, f6) {
      if (a14 = a14.h && a14.h[c6]) {
        d6 = Q4(a14);
        d6 & 2 ? d6 = a14 : (g5 = Ca(a14, Zb), Cb(d6, g5), Object.freeze(g5), d6 = g5);
        Hb(b6);
        f6 = null == d6 ? Fb : Ab([]);
        if (null != d6) {
          g5 = !!d6.length;
          for (a14 = 0; a14 < d6.length; a14++) {
            var h5 = d6[a14];
            g5 = g5 && !(Q4(h5.o) & 2);
            f6[a14] = h5.o;
          }
          g5 = (g5 ? 8 : 0) | 1;
          a14 = Q4(f6);
          (a14 & g5) !== g5 && (Object.isFrozen(f6) && (f6 = Array.prototype.slice.call(f6)), R3(f6, a14 | g5));
          b6.h || (b6.h = {});
          b6.h[c6] = d6;
        } else b6.h && (b6.h[c6] = void 0);
        Kb(b6, c6, f6, e6);
      } else U3(b6, c6, Yb(d6, g5, f6), e6);
    }
    function Zb(a14) {
      if (Q4(a14.o) & 2) return a14;
      a14 = Pb(a14, true);
      P3(a14.o, 2);
      return a14;
    }
    function Pb(a14, b6) {
      var c6 = a14.o, d6 = [];
      P3(d6, 16);
      var e6 = a14.constructor.h;
      e6 && d6.push(e6);
      e6 = a14.B;
      if (e6) {
        d6.length = c6.length;
        d6.fill(void 0, d6.length, c6.length);
        var g5 = {};
        d6[d6.length - 1] = g5;
      }
      0 !== (Q4(c6) & 128) && Ib(d6);
      b6 = b6 || a14.C() ? Cb : Bb;
      g5 = a14.constructor;
      Sb = d6;
      d6 = new g5(d6);
      Sb = void 0;
      a14.R && (d6.R = a14.R.slice());
      g5 = !!(Q4(c6) & 16);
      for (var f6 = e6 ? c6.length - 1 : c6.length, h5 = 0; h5 < f6; h5++) $b(a14, d6, h5 - a14.G, c6[h5], false, g5, b6);
      if (e6) for (var k5 in e6) $b(a14, d6, +k5, e6[k5], true, g5, b6);
      return d6;
    }
    function X3(a14, b6, c6) {
      null == a14 && (a14 = Sb);
      Sb = void 0;
      var d6 = this.constructor.i || 0, e6 = 0 < d6, g5 = this.constructor.h, f6 = false;
      if (null == a14) {
        a14 = g5 ? [g5] : [];
        var h5 = 48;
        var k5 = true;
        e6 && (d6 = 0, h5 |= 128);
        R3(a14, h5);
      } else {
        if (!Array.isArray(a14)) throw Error();
        if (g5 && g5 !== a14[0]) throw Error();
        var l5 = h5 = P3(a14, 0);
        if (k5 = 0 !== (16 & l5)) (f6 = 0 !== (32 & l5)) || (l5 |= 32);
        if (e6) if (128 & l5) d6 = 0;
        else {
          if (0 < a14.length) {
            var m5 = a14[a14.length - 1];
            if (Eb(m5) && "g" in m5) {
              d6 = 0;
              l5 |= 128;
              delete m5.g;
              var r5 = true, p6;
              for (p6 in m5) {
                r5 = false;
                break;
              }
              r5 && a14.pop();
            }
          }
        }
        else if (128 & l5) throw Error();
        h5 !== l5 && R3(a14, l5);
      }
      this.G = (g5 ? 0 : -1) - d6;
      this.h = void 0;
      this.o = a14;
      a: {
        g5 = this.o.length;
        d6 = g5 - 1;
        if (g5 && (g5 = this.o[d6], Eb(g5))) {
          this.B = g5;
          this.i = d6 - this.G;
          break a;
        }
        void 0 !== b6 && -1 < b6 ? (this.i = Math.max(b6, d6 + 1 - this.G), this.B = void 0) : this.i = Number.MAX_VALUE;
      }
      if (!e6 && this.B && "g" in this.B) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
      if (c6) {
        b6 = k5 && !f6 && true;
        e6 = this.i;
        var n4;
        for (k5 = 0; k5 < c6.length; k5++) f6 = c6[k5], f6 < e6 ? (f6 += this.G, (d6 = a14[f6]) ? ac2(d6, b6) : a14[f6] = Fb) : (n4 || (n4 = Jb(this)), (d6 = n4[f6]) ? ac2(d6, b6) : n4[f6] = Fb);
      }
    }
    X3.prototype.toJSON = function() {
      return Vb(this.o, Wb, Xb);
    };
    X3.prototype.C = function() {
      return !!(Q4(this.o) & 2);
    };
    function ac2(a14, b6) {
      if (Array.isArray(a14)) {
        var c6 = Q4(a14), d6 = 1;
        !b6 || c6 & 2 || (d6 |= 16);
        (c6 & d6) !== d6 && R3(a14, c6 | d6);
      }
    }
    X3.prototype.ja = Db;
    X3.prototype.toString = function() {
      return this.o.toString();
    };
    function bc(a14, b6, c6) {
      if (c6) {
        var d6 = {}, e6;
        for (e6 in c6) {
          var g5 = c6[e6], f6 = g5.ra;
          f6 || (d6.J = g5.xa || g5.oa.W, g5.ia ? (d6.aa = cc(g5.ia), f6 = /* @__PURE__ */ (function(h5) {
            return function(k5, l5, m5) {
              return h5.J(k5, l5, m5, h5.aa);
            };
          })(d6)) : g5.ka ? (d6.Z = dc(g5.da.P, g5.ka), f6 = /* @__PURE__ */ (function(h5) {
            return function(k5, l5, m5) {
              return h5.J(k5, l5, m5, h5.Z);
            };
          })(d6)) : f6 = d6.J, g5.ra = f6);
          f6(b6, a14, g5.da);
          d6 = { J: d6.J, aa: d6.aa, Z: d6.Z };
        }
      }
      yb(b6, a14);
    }
    var ec = Symbol();
    function fc(a14, b6, c6) {
      return a14[ec] || (a14[ec] = function(d6, e6) {
        return b6(d6, e6, c6);
      });
    }
    function gc(a14) {
      var b6 = a14[ec];
      if (!b6) {
        var c6 = hc(a14);
        b6 = function(d6, e6) {
          return ic(d6, e6, c6);
        };
        a14[ec] = b6;
      }
      return b6;
    }
    function jc(a14) {
      var b6 = a14.ia;
      if (b6) return gc(b6);
      if (b6 = a14.wa) return fc(a14.da.P, b6, a14.ka);
    }
    function kc(a14) {
      var b6 = jc(a14), c6 = a14.da, d6 = a14.oa.U;
      return b6 ? function(e6, g5) {
        return d6(e6, g5, c6, b6);
      } : function(e6, g5) {
        return d6(e6, g5, c6);
      };
    }
    function lc(a14, b6) {
      var c6 = a14[b6];
      "function" == typeof c6 && 0 === c6.length && (c6 = c6(), a14[b6] = c6);
      return Array.isArray(c6) && (mc in c6 || nc in c6 || 0 < c6.length && "function" == typeof c6[0]) ? c6 : void 0;
    }
    function oc(a14, b6, c6, d6, e6, g5) {
      b6.P = a14[0];
      var f6 = 1;
      if (a14.length > f6 && "number" !== typeof a14[f6]) {
        var h5 = a14[f6++];
        c6(b6, h5);
      }
      for (; f6 < a14.length; ) {
        c6 = a14[f6++];
        for (var k5 = f6 + 1; k5 < a14.length && "number" !== typeof a14[k5]; ) k5++;
        h5 = a14[f6++];
        k5 -= f6;
        switch (k5) {
          case 0:
            d6(b6, c6, h5);
            break;
          case 1:
            (k5 = lc(a14, f6)) ? (f6++, e6(b6, c6, h5, k5)) : d6(b6, c6, h5, a14[f6++]);
            break;
          case 2:
            k5 = f6++;
            k5 = lc(a14, k5);
            e6(b6, c6, h5, k5, a14[f6++]);
            break;
          case 3:
            g5(b6, c6, h5, a14[f6++], a14[f6++], a14[f6++]);
            break;
          case 4:
            g5(b6, c6, h5, a14[f6++], a14[f6++], a14[f6++], a14[f6++]);
            break;
          default:
            throw Error("unexpected number of binary field arguments: " + k5);
        }
      }
      return b6;
    }
    var pc = Symbol();
    function cc(a14) {
      var b6 = a14[pc];
      if (!b6) {
        var c6 = qc(a14);
        b6 = function(d6, e6) {
          return rc(d6, e6, c6);
        };
        a14[pc] = b6;
      }
      return b6;
    }
    function dc(a14, b6) {
      var c6 = a14[pc];
      c6 || (c6 = function(d6, e6) {
        return bc(d6, e6, b6);
      }, a14[pc] = c6);
      return c6;
    }
    var nc = Symbol();
    function sc(a14, b6) {
      a14.push(b6);
    }
    function tc(a14, b6, c6) {
      a14.push(b6, c6.W);
    }
    function uc(a14, b6, c6, d6) {
      var e6 = cc(d6), g5 = qc(d6).P, f6 = c6.W;
      a14.push(b6, function(h5, k5, l5) {
        return f6(h5, k5, l5, g5, e6);
      });
    }
    function vc(a14, b6, c6, d6, e6, g5) {
      var f6 = dc(d6, g5), h5 = c6.W;
      a14.push(b6, function(k5, l5, m5) {
        return h5(k5, l5, m5, d6, f6);
      });
    }
    function qc(a14) {
      var b6 = a14[nc];
      if (b6) return b6;
      b6 = oc(a14, a14[nc] = [], sc, tc, uc, vc);
      mc in a14 && nc in a14 && (a14.length = 0);
      return b6;
    }
    var mc = Symbol();
    function wc(a14, b6) {
      a14[0] = b6;
    }
    function xc(a14, b6, c6, d6) {
      var e6 = c6.U;
      a14[b6] = d6 ? function(g5, f6, h5) {
        return e6(g5, f6, h5, d6);
      } : e6;
    }
    function yc(a14, b6, c6, d6, e6) {
      var g5 = c6.U, f6 = gc(d6), h5 = hc(d6).P;
      a14[b6] = function(k5, l5, m5) {
        return g5(k5, l5, m5, h5, f6, e6);
      };
    }
    function zc(a14, b6, c6, d6, e6, g5, f6) {
      var h5 = c6.U, k5 = fc(d6, e6, g5);
      a14[b6] = function(l5, m5, r5) {
        return h5(l5, m5, r5, d6, k5, f6);
      };
    }
    function hc(a14) {
      var b6 = a14[mc];
      if (b6) return b6;
      b6 = oc(a14, a14[mc] = {}, wc, xc, yc, zc);
      mc in a14 && nc in a14 && (a14.length = 0);
      return b6;
    }
    function ic(a14, b6, c6) {
      for (; ub(b6) && 4 != b6.i; ) {
        var d6 = b6.l, e6 = c6[d6];
        if (!e6) {
          var g5 = c6[0];
          g5 && (g5 = g5[d6]) && (e6 = c6[d6] = kc(g5));
        }
        if (!e6 || !e6(b6, a14, d6)) {
          e6 = b6;
          d6 = a14;
          g5 = e6.j;
          vb(e6);
          var f6 = e6;
          if (!f6.ca) {
            e6 = f6.h.h - g5;
            f6.h.h = g5;
            f6 = f6.h;
            if (0 == e6) e6 = jb();
            else {
              g5 = pb(f6, e6);
              if (f6.S && f6.m) e6 = f6.i.subarray(g5, g5 + e6);
              else {
                f6 = f6.i;
                var h5 = g5;
                e6 = g5 + e6;
                e6 = h5 === e6 ? Pa() : Ra ? f6.slice(h5, e6) : new Uint8Array(f6.subarray(h5, e6));
              }
              e6 = 0 == e6.length ? jb() : new ib(e6, Qa);
            }
            (g5 = d6.R) ? g5.push(e6) : d6.R = [e6];
          }
        }
      }
      return a14;
    }
    function rc(a14, b6, c6) {
      for (var d6 = c6.length, e6 = 1 == d6 % 2, g5 = e6 ? 1 : 0; g5 < d6; g5 += 2) (0, c6[g5 + 1])(b6, a14, c6[g5]);
      bc(a14, b6, e6 ? c6[0] : void 0);
    }
    function Ac(a14, b6) {
      return { U: a14, W: b6 };
    }
    var Y3 = Ac(function(a14, b6, c6) {
      if (5 !== a14.i) return false;
      a14 = a14.h;
      var d6 = a14.i, e6 = a14.h, g5 = d6[e6];
      var f6 = d6[e6 + 1];
      var h5 = d6[e6 + 2];
      d6 = d6[e6 + 3];
      L3(a14, a14.h + 4);
      f6 = (g5 << 0 | f6 << 8 | h5 << 16 | d6 << 24) >>> 0;
      a14 = 2 * (f6 >> 31) + 1;
      g5 = f6 >>> 23 & 255;
      f6 &= 8388607;
      U3(b6, c6, 255 == g5 ? f6 ? NaN : Infinity * a14 : 0 == g5 ? a14 * Math.pow(2, -149) * f6 : a14 * Math.pow(2, g5 - 150) * (f6 + Math.pow(2, 23)));
      return true;
    }, function(a14, b6, c6) {
      b6 = Mb(b6, c6);
      if (null != b6) {
        M3(a14.h, 8 * c6 + 5);
        a14 = a14.h;
        var d6 = +b6;
        0 === d6 ? 0 < 1 / d6 ? G3 = H3 = 0 : (H3 = 0, G3 = 2147483648) : isNaN(d6) ? (H3 = 0, G3 = 2147483647) : (d6 = (c6 = 0 > d6 ? -2147483648 : 0) ? -d6 : d6, 34028234663852886e22 < d6 ? (H3 = 0, G3 = (c6 | 2139095040) >>> 0) : 11754943508222875e-54 > d6 ? (d6 = Math.round(d6 / Math.pow(2, -149)), H3 = 0, G3 = (c6 | d6) >>> 0) : (b6 = Math.floor(Math.log(d6) / Math.LN2), d6 *= Math.pow(2, -b6), d6 = Math.round(8388608 * d6), 16777216 <= d6 && ++b6, H3 = 0, G3 = (c6 | b6 + 127 << 23 | d6 & 8388607) >>> 0));
        c6 = G3;
        a14.h.push(c6 >>> 0 & 255);
        a14.h.push(c6 >>> 8 & 255);
        a14.h.push(c6 >>> 16 & 255);
        a14.h.push(c6 >>> 24 & 255);
      }
    }), Bc = Ac(function(a14, b6, c6) {
      if (0 !== a14.i) return false;
      var d6 = a14.h, e6 = 0, g5 = a14 = 0, f6 = d6.i, h5 = d6.h;
      do {
        var k5 = f6[h5++];
        e6 |= (k5 & 127) << g5;
        g5 += 7;
      } while (32 > g5 && k5 & 128);
      32 < g5 && (a14 |= (k5 & 127) >> 4);
      for (g5 = 3; 32 > g5 && k5 & 128; g5 += 7) k5 = f6[h5++], a14 |= (k5 & 127) << g5;
      L3(
        d6,
        h5
      );
      if (128 > k5) {
        d6 = e6 >>> 0;
        k5 = a14 >>> 0;
        if (a14 = k5 & 2147483648) d6 = ~d6 + 1 >>> 0, k5 = ~k5 >>> 0, 0 == d6 && (k5 = k5 + 1 >>> 0);
        d6 = 4294967296 * k5 + (d6 >>> 0);
      } else throw Za();
      U3(b6, c6, a14 ? -d6 : d6);
      return true;
    }, function(a14, b6, c6) {
      b6 = S3(b6, c6);
      null != b6 && ("string" === typeof b6 && Wa(b6), null != b6 && (M3(a14.h, 8 * c6), "number" === typeof b6 ? (a14 = a14.h, Sa(b6), sb(a14, G3, H3)) : (c6 = Wa(b6), sb(a14.h, c6.i, c6.h))));
    }), Cc = Ac(function(a14, b6, c6) {
      if (0 !== a14.i) return false;
      U3(b6, c6, ob(a14.h));
      return true;
    }, function(a14, b6, c6) {
      b6 = S3(b6, c6);
      if (null != b6 && null != b6) if (M3(a14.h, 8 * c6), a14 = a14.h, c6 = b6, 0 <= c6) M3(a14, c6);
      else {
        for (b6 = 0; 9 > b6; b6++) a14.h.push(c6 & 127 | 128), c6 >>= 7;
        a14.h.push(1);
      }
    }), Dc = Ac(function(a14, b6, c6) {
      if (2 !== a14.i) return false;
      var d6 = ob(a14.h) >>> 0;
      a14 = a14.h;
      var e6 = pb(a14, d6);
      a14 = a14.i;
      if (db) {
        var g5 = a14, f6;
        (f6 = cb) || (f6 = cb = new TextDecoder("utf-8", { fatal: true }));
        a14 = e6 + d6;
        g5 = 0 === e6 && a14 === g5.length ? g5 : g5.subarray(e6, a14);
        try {
          var h5 = f6.decode(g5);
        } catch (r5) {
          if (void 0 === bb) {
            try {
              f6.decode(new Uint8Array([128]));
            } catch (p6) {
            }
            try {
              f6.decode(new Uint8Array([97])), bb = true;
            } catch (p6) {
              bb = false;
            }
          }
          !bb && (cb = void 0);
          throw r5;
        }
      } else {
        h5 = e6;
        d6 = h5 + d6;
        e6 = [];
        for (var k5 = null, l5, m5; h5 < d6; ) l5 = a14[h5++], 128 > l5 ? e6.push(l5) : 224 > l5 ? h5 >= d6 ? K3() : (m5 = a14[h5++], 194 > l5 || 128 !== (m5 & 192) ? (h5--, K3()) : e6.push((l5 & 31) << 6 | m5 & 63)) : 240 > l5 ? h5 >= d6 - 1 ? K3() : (m5 = a14[h5++], 128 !== (m5 & 192) || 224 === l5 && 160 > m5 || 237 === l5 && 160 <= m5 || 128 !== ((g5 = a14[h5++]) & 192) ? (h5--, K3()) : e6.push((l5 & 15) << 12 | (m5 & 63) << 6 | g5 & 63)) : 244 >= l5 ? h5 >= d6 - 2 ? K3() : (m5 = a14[h5++], 128 !== (m5 & 192) || 0 !== (l5 << 28) + (m5 - 144) >> 30 || 128 !== ((g5 = a14[h5++]) & 192) || 128 !== ((f6 = a14[h5++]) & 192) ? (h5--, K3()) : (l5 = (l5 & 7) << 18 | (m5 & 63) << 12 | (g5 & 63) << 6 | f6 & 63, l5 -= 65536, e6.push((l5 >> 10 & 1023) + 55296, (l5 & 1023) + 56320))) : K3(), 8192 <= e6.length && (k5 = ab2(k5, e6), e6.length = 0);
        h5 = ab2(k5, e6);
      }
      U3(b6, c6, h5);
      return true;
    }, function(a14, b6, c6) {
      b6 = S3(b6, c6);
      if (null != b6) {
        var d6 = false;
        d6 = void 0 === d6 ? false : d6;
        if (fb) {
          if (d6 && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b6)) throw Error("Found an unpaired surrogate");
          b6 = (eb || (eb = new TextEncoder())).encode(b6);
        } else {
          for (var e6 = 0, g5 = new Uint8Array(3 * b6.length), f6 = 0; f6 < b6.length; f6++) {
            var h5 = b6.charCodeAt(f6);
            if (128 > h5) g5[e6++] = h5;
            else {
              if (2048 > h5) g5[e6++] = h5 >> 6 | 192;
              else {
                if (55296 <= h5 && 57343 >= h5) {
                  if (56319 >= h5 && f6 < b6.length) {
                    var k5 = b6.charCodeAt(++f6);
                    if (56320 <= k5 && 57343 >= k5) {
                      h5 = 1024 * (h5 - 55296) + k5 - 56320 + 65536;
                      g5[e6++] = h5 >> 18 | 240;
                      g5[e6++] = h5 >> 12 & 63 | 128;
                      g5[e6++] = h5 >> 6 & 63 | 128;
                      g5[e6++] = h5 & 63 | 128;
                      continue;
                    } else f6--;
                  }
                  if (d6) throw Error("Found an unpaired surrogate");
                  h5 = 65533;
                }
                g5[e6++] = h5 >> 12 | 224;
                g5[e6++] = h5 >> 6 & 63 | 128;
              }
              g5[e6++] = h5 & 63 | 128;
            }
          }
          b6 = e6 === g5.length ? g5 : g5.subarray(0, e6);
        }
        M3(a14.h, 8 * c6 + 2);
        M3(a14.h, b6.length);
        N3(a14, a14.h.end());
        N3(a14, b6);
      }
    }), Ec = Ac(function(a14, b6, c6, d6, e6) {
      if (2 !== a14.i) return false;
      b6 = Qb(b6, c6, d6);
      c6 = a14.h.j;
      d6 = ob(a14.h) >>> 0;
      var g5 = a14.h.h + d6, f6 = g5 - c6;
      0 >= f6 && (a14.h.j = g5, e6(b6, a14, void 0, void 0, void 0), f6 = g5 - a14.h.h);
      if (f6) throw Error("Message parsing ended unexpectedly. Expected to read " + (d6 + " bytes, instead read " + (d6 - f6) + " bytes, either the data ended unexpectedly or the message misreported its own length"));
      a14.h.h = g5;
      a14.h.j = c6;
      return true;
    }, function(a14, b6, c6, d6, e6) {
      b6 = Ob(b6, d6, c6);
      if (null != b6) for (d6 = 0; d6 < b6.length; d6++) {
        var g5 = a14;
        M3(g5.h, 8 * c6 + 2);
        var f6 = g5.h.end();
        N3(g5, f6);
        f6.push(g5.i);
        g5 = f6;
        e6(b6[d6], a14);
        f6 = a14;
        var h5 = g5.pop();
        for (h5 = f6.i + f6.h.length() - h5; 127 < h5; ) g5.push(h5 & 127 | 128), h5 >>>= 7, f6.i++;
        g5.push(h5);
        f6.i++;
      }
    });
    function Fc(a14) {
      return function(b6, c6) {
        a: {
          if (wb.length) {
            var d6 = wb.pop();
            d6.setOptions(c6);
            nb(d6.h, b6, c6);
            b6 = d6;
          } else b6 = new tb(b6, c6);
          try {
            var e6 = hc(a14);
            var g5 = ic(new e6.P(), b6, e6);
            break a;
          } finally {
            e6 = b6.h, e6.i = null, e6.m = false, e6.l = 0, e6.j = 0, e6.h = 0, e6.S = false, b6.l = -1, b6.i = -1, 100 > wb.length && wb.push(b6);
          }
          g5 = void 0;
        }
        return g5;
      };
    }
    function Gc(a14) {
      return function() {
        var b6 = new xb();
        rc(this, b6, qc(a14));
        N3(b6, b6.h.end());
        for (var c6 = new Uint8Array(b6.i), d6 = b6.j, e6 = d6.length, g5 = 0, f6 = 0; f6 < e6; f6++) {
          var h5 = d6[f6];
          c6.set(h5, g5);
          g5 += h5.length;
        }
        b6.j = [c6];
        return c6;
      };
    }
    function Z3(a14) {
      X3.call(this, a14);
    }
    na(Z3, X3);
    var Hc = [Z3, 1, Cc, 2, Y3, 3, Dc, 4, Dc];
    Z3.prototype.l = Gc(Hc);
    function Ic(a14) {
      X3.call(this, a14, -1, Jc);
    }
    na(Ic, X3);
    Ic.prototype.addClassification = function(a14, b6) {
      Qb(this, 1, Z3, a14, b6);
      return this;
    };
    var Jc = [1], Kc = Fc([Ic, 1, Ec, Hc]);
    function Lc(a14) {
      X3.call(this, a14);
    }
    na(Lc, X3);
    var Mc = [Lc, 1, Y3, 2, Y3, 3, Y3, 4, Y3, 5, Y3];
    Lc.prototype.l = Gc(Mc);
    function Nc(a14) {
      X3.call(this, a14, -1, Oc);
    }
    na(Nc, X3);
    var Oc = [1], Pc = Fc([Nc, 1, Ec, Mc]);
    function Qc(a14) {
      X3.call(this, a14);
    }
    na(Qc, X3);
    var Rc = [Qc, 1, Y3, 2, Y3, 3, Y3, 4, Y3, 5, Y3, 6, Bc], Sc = Fc(Rc);
    Qc.prototype.l = Gc(Rc);
    function Tc(a14, b6, c6) {
      c6 = a14.createShader(0 === c6 ? a14.VERTEX_SHADER : a14.FRAGMENT_SHADER);
      a14.shaderSource(c6, b6);
      a14.compileShader(c6);
      if (!a14.getShaderParameter(c6, a14.COMPILE_STATUS)) throw Error("Could not compile WebGL shader.\n\n" + a14.getShaderInfoLog(c6));
      return c6;
    }
    function Uc(a14) {
      return Ob(a14, Z3, 1).map(function(b6) {
        var c6 = S3(b6, 1);
        return { index: null == c6 ? 0 : c6, qa: W2(b6, 2), label: null != S3(b6, 3) ? Rb(S3(b6, 3), "") : void 0, displayName: null != S3(b6, 4) ? Rb(S3(b6, 4), "") : void 0 };
      });
    }
    function Vc(a14) {
      return { x: W2(a14, 1), y: W2(a14, 2), z: W2(a14, 3), visibility: null != Mb(a14, 4) ? W2(a14, 4) : void 0 };
    }
    function Wc(a14, b6) {
      this.i = a14;
      this.h = b6;
      this.m = 0;
    }
    function Xc(a14, b6, c6) {
      Yc(a14, b6);
      if ("function" === typeof a14.h.canvas.transferToImageBitmap) return Promise.resolve(a14.h.canvas.transferToImageBitmap());
      if (c6) return Promise.resolve(a14.h.canvas);
      if ("function" === typeof createImageBitmap) return createImageBitmap(a14.h.canvas);
      void 0 === a14.j && (a14.j = document.createElement("canvas"));
      return new Promise(function(d6) {
        a14.j.height = a14.h.canvas.height;
        a14.j.width = a14.h.canvas.width;
        a14.j.getContext("2d", {}).drawImage(a14.h.canvas, 0, 0, a14.h.canvas.width, a14.h.canvas.height);
        d6(a14.j);
      });
    }
    function Yc(a14, b6) {
      var c6 = a14.h;
      if (void 0 === a14.s) {
        var d6 = Tc(c6, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", 0), e6 = Tc(c6, "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }", 1), g5 = c6.createProgram();
        c6.attachShader(g5, d6);
        c6.attachShader(g5, e6);
        c6.linkProgram(g5);
        if (!c6.getProgramParameter(g5, c6.LINK_STATUS)) throw Error("Could not compile WebGL program.\n\n" + c6.getProgramInfoLog(g5));
        d6 = a14.s = g5;
        c6.useProgram(d6);
        e6 = c6.getUniformLocation(d6, "sampler0");
        a14.l = { O: c6.getAttribLocation(d6, "aVertex"), N: c6.getAttribLocation(d6, "aTex"), ya: e6 };
        a14.v = c6.createBuffer();
        c6.bindBuffer(c6.ARRAY_BUFFER, a14.v);
        c6.enableVertexAttribArray(a14.l.O);
        c6.vertexAttribPointer(a14.l.O, 2, c6.FLOAT, false, 0, 0);
        c6.bufferData(c6.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), c6.STATIC_DRAW);
        c6.bindBuffer(c6.ARRAY_BUFFER, null);
        a14.u = c6.createBuffer();
        c6.bindBuffer(c6.ARRAY_BUFFER, a14.u);
        c6.enableVertexAttribArray(a14.l.N);
        c6.vertexAttribPointer(
          a14.l.N,
          2,
          c6.FLOAT,
          false,
          0,
          0
        );
        c6.bufferData(c6.ARRAY_BUFFER, new Float32Array([0, 1, 0, 0, 1, 0, 1, 1]), c6.STATIC_DRAW);
        c6.bindBuffer(c6.ARRAY_BUFFER, null);
        c6.uniform1i(e6, 0);
      }
      d6 = a14.l;
      c6.useProgram(a14.s);
      c6.canvas.width = b6.width;
      c6.canvas.height = b6.height;
      c6.viewport(0, 0, b6.width, b6.height);
      c6.activeTexture(c6.TEXTURE0);
      a14.i.bindTexture2d(b6.glName);
      c6.enableVertexAttribArray(d6.O);
      c6.bindBuffer(c6.ARRAY_BUFFER, a14.v);
      c6.vertexAttribPointer(d6.O, 2, c6.FLOAT, false, 0, 0);
      c6.enableVertexAttribArray(d6.N);
      c6.bindBuffer(c6.ARRAY_BUFFER, a14.u);
      c6.vertexAttribPointer(
        d6.N,
        2,
        c6.FLOAT,
        false,
        0,
        0
      );
      c6.bindFramebuffer(c6.DRAW_FRAMEBUFFER ? c6.DRAW_FRAMEBUFFER : c6.FRAMEBUFFER, null);
      c6.clearColor(0, 0, 0, 0);
      c6.clear(c6.COLOR_BUFFER_BIT);
      c6.colorMask(true, true, true, true);
      c6.drawArrays(c6.TRIANGLE_FAN, 0, 4);
      c6.disableVertexAttribArray(d6.O);
      c6.disableVertexAttribArray(d6.N);
      c6.bindBuffer(c6.ARRAY_BUFFER, null);
      a14.i.bindTexture2d(0);
    }
    function Zc(a14) {
      this.h = a14;
    }
    var $c = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]);
    function ad2(a14, b6) {
      return b6 + a14;
    }
    function bd(a14, b6) {
      window[a14] = b6;
    }
    function cd(a14) {
      var b6 = document.createElement("script");
      b6.setAttribute("src", a14);
      b6.setAttribute("crossorigin", "anonymous");
      return new Promise(function(c6) {
        b6.addEventListener("load", function() {
          c6();
        }, false);
        b6.addEventListener("error", function() {
          c6();
        }, false);
        document.body.appendChild(b6);
      });
    }
    function dd() {
      return E4(function(a14) {
        switch (a14.h) {
          case 1:
            return a14.s = 2, D4(a14, WebAssembly.instantiate($c), 4);
          case 4:
            a14.h = 3;
            a14.s = 0;
            break;
          case 2:
            return a14.s = 0, a14.l = null, a14.return(false);
          case 3:
            return a14.return(true);
        }
      });
    }
    function ed(a14) {
      this.h = a14;
      this.listeners = {};
      this.l = {};
      this.L = {};
      this.s = {};
      this.v = {};
      this.M = this.u = this.ga = true;
      this.I = Promise.resolve();
      this.fa = "";
      this.D = {};
      this.locateFile = a14 && a14.locateFile || ad2;
      if ("object" === typeof window) var b6 = window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/";
      else if ("undefined" !== typeof location) b6 = location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/";
      else throw Error("solutions can only be loaded on a web page or in a web worker");
      this.ha = b6;
      if (a14.options) {
        b6 = A4(Object.keys(a14.options));
        for (var c6 = b6.next(); !c6.done; c6 = b6.next()) {
          c6 = c6.value;
          var d6 = a14.options[c6].default;
          void 0 !== d6 && (this.l[c6] = "function" === typeof d6 ? d6() : d6);
        }
      }
    }
    x4 = ed.prototype;
    x4.close = function() {
      this.j && this.j.delete();
      return Promise.resolve();
    };
    function fd(a14) {
      var b6, c6, d6, e6, g5, f6, h5, k5, l5, m5, r5;
      return E4(function(p6) {
        switch (p6.h) {
          case 1:
            if (!a14.ga) return p6.return();
            b6 = void 0 === a14.h.files ? [] : "function" === typeof a14.h.files ? a14.h.files(a14.l) : a14.h.files;
            return D4(p6, dd(), 2);
          case 2:
            c6 = p6.i;
            if ("object" === typeof window) return bd("createMediapipeSolutionsWasm", { locateFile: a14.locateFile }), bd("createMediapipeSolutionsPackedAssets", { locateFile: a14.locateFile }), f6 = b6.filter(function(n4) {
              return void 0 !== n4.data;
            }), h5 = b6.filter(function(n4) {
              return void 0 === n4.data;
            }), k5 = Promise.all(f6.map(function(n4) {
              var q4 = gd(a14, n4.url);
              if (void 0 !== n4.path) {
                var t4 = n4.path;
                q4 = q4.then(function(w4) {
                  a14.overrideFile(t4, w4);
                  return Promise.resolve(w4);
                });
              }
              return q4;
            })), l5 = Promise.all(h5.map(function(n4) {
              return void 0 === n4.simd || n4.simd && c6 || !n4.simd && !c6 ? cd(a14.locateFile(n4.url, a14.ha)) : Promise.resolve();
            })).then(function() {
              var n4, q4, t4;
              return E4(function(w4) {
                if (1 == w4.h) return n4 = window.createMediapipeSolutionsWasm, q4 = window.createMediapipeSolutionsPackedAssets, t4 = a14, D4(w4, n4(q4), 2);
                t4.i = w4.i;
                w4.h = 0;
              });
            }), m5 = (function() {
              return E4(function(n4) {
                a14.h.graph && a14.h.graph.url ? n4 = D4(
                  n4,
                  gd(a14, a14.h.graph.url),
                  0
                ) : (n4.h = 0, n4 = void 0);
                return n4;
              });
            })(), D4(p6, Promise.all([l5, k5, m5]), 7);
            if ("function" !== typeof importScripts) throw Error("solutions can only be loaded on a web page or in a web worker");
            d6 = b6.filter(function(n4) {
              return void 0 === n4.simd || n4.simd && c6 || !n4.simd && !c6;
            }).map(function(n4) {
              return a14.locateFile(n4.url, a14.ha);
            });
            importScripts.apply(null, ea(d6));
            e6 = a14;
            return D4(p6, createMediapipeSolutionsWasm(Module), 6);
          case 6:
            e6.i = p6.i;
            a14.m = new OffscreenCanvas(1, 1);
            a14.i.canvas = a14.m;
            g5 = a14.i.GL.createContext(a14.m, {
              antialias: false,
              alpha: false,
              va: "undefined" !== typeof WebGL2RenderingContext ? 2 : 1
            });
            a14.i.GL.makeContextCurrent(g5);
            p6.h = 4;
            break;
          case 7:
            a14.m = document.createElement("canvas");
            r5 = a14.m.getContext("webgl2", {});
            if (!r5 && (r5 = a14.m.getContext("webgl", {}), !r5)) return alert("Failed to create WebGL canvas context when passing video frame."), p6.return();
            a14.K = r5;
            a14.i.canvas = a14.m;
            a14.i.createContext(a14.m, true, true, {});
          case 4:
            a14.j = new a14.i.SolutionWasm(), a14.ga = false, p6.h = 0;
        }
      });
    }
    function hd(a14) {
      var b6, c6, d6, e6, g5, f6, h5, k5;
      return E4(function(l5) {
        if (1 == l5.h) {
          if (a14.h.graph && a14.h.graph.url && a14.fa === a14.h.graph.url) return l5.return();
          a14.u = true;
          if (!a14.h.graph || !a14.h.graph.url) {
            l5.h = 2;
            return;
          }
          a14.fa = a14.h.graph.url;
          return D4(l5, gd(a14, a14.h.graph.url), 3);
        }
        2 != l5.h && (b6 = l5.i, a14.j.loadGraph(b6));
        c6 = A4(Object.keys(a14.D));
        for (d6 = c6.next(); !d6.done; d6 = c6.next()) e6 = d6.value, a14.j.overrideFile(e6, a14.D[e6]);
        a14.D = {};
        if (a14.h.listeners) for (g5 = A4(a14.h.listeners), f6 = g5.next(); !f6.done; f6 = g5.next()) h5 = f6.value, id(a14, h5);
        k5 = a14.l;
        a14.l = {};
        a14.setOptions(k5);
        l5.h = 0;
      });
    }
    x4.reset = function() {
      var a14 = this;
      return E4(function(b6) {
        a14.j && (a14.j.reset(), a14.s = {}, a14.v = {});
        b6.h = 0;
      });
    };
    x4.setOptions = function(a14, b6) {
      var c6 = this;
      if (b6 = b6 || this.h.options) {
        for (var d6 = [], e6 = [], g5 = {}, f6 = A4(Object.keys(a14)), h5 = f6.next(); !h5.done; g5 = { X: g5.X, Y: g5.Y }, h5 = f6.next()) if (h5 = h5.value, !(h5 in this.l && this.l[h5] === a14[h5])) {
          this.l[h5] = a14[h5];
          var k5 = b6[h5];
          void 0 !== k5 && (k5.onChange && (g5.X = k5.onChange, g5.Y = a14[h5], d6.push(/* @__PURE__ */ (function(l5) {
            return function() {
              var m5;
              return E4(function(r5) {
                if (1 == r5.h) return D4(r5, l5.X(l5.Y), 2);
                m5 = r5.i;
                true === m5 && (c6.u = true);
                r5.h = 0;
              });
            };
          })(g5))), k5.graphOptionXref && (h5 = Object.assign(
            {},
            { calculatorName: "", calculatorIndex: 0 },
            k5.graphOptionXref,
            { valueNumber: 1 === k5.type ? a14[h5] : 0, valueBoolean: 0 === k5.type ? a14[h5] : false, valueString: 2 === k5.type ? a14[h5] : "" }
          ), e6.push(h5)));
        }
        if (0 !== d6.length || 0 !== e6.length) this.u = true, this.H = (void 0 === this.H ? [] : this.H).concat(e6), this.F = (void 0 === this.F ? [] : this.F).concat(d6);
      }
    };
    function jd(a14) {
      var b6, c6, d6, e6, g5, f6, h5;
      return E4(function(k5) {
        switch (k5.h) {
          case 1:
            if (!a14.u) return k5.return();
            if (!a14.F) {
              k5.h = 2;
              break;
            }
            b6 = A4(a14.F);
            c6 = b6.next();
          case 3:
            if (c6.done) {
              k5.h = 5;
              break;
            }
            d6 = c6.value;
            return D4(k5, d6(), 4);
          case 4:
            c6 = b6.next();
            k5.h = 3;
            break;
          case 5:
            a14.F = void 0;
          case 2:
            if (a14.H) {
              e6 = new a14.i.GraphOptionChangeRequestList();
              g5 = A4(a14.H);
              for (f6 = g5.next(); !f6.done; f6 = g5.next()) h5 = f6.value, e6.push_back(h5);
              a14.j.changeOptions(e6);
              e6.delete();
              a14.H = void 0;
            }
            a14.u = false;
            k5.h = 0;
        }
      });
    }
    x4.initialize = function() {
      var a14 = this;
      return E4(function(b6) {
        return 1 == b6.h ? D4(b6, fd(a14), 2) : 3 != b6.h ? D4(b6, hd(a14), 3) : D4(b6, jd(a14), 0);
      });
    };
    function gd(a14, b6) {
      var c6, d6;
      return E4(function(e6) {
        if (b6 in a14.L) return e6.return(a14.L[b6]);
        c6 = a14.locateFile(b6, "");
        d6 = fetch(c6).then(function(g5) {
          return g5.arrayBuffer();
        });
        a14.L[b6] = d6;
        return e6.return(d6);
      });
    }
    x4.overrideFile = function(a14, b6) {
      this.j ? this.j.overrideFile(a14, b6) : this.D[a14] = b6;
    };
    x4.clearOverriddenFiles = function() {
      this.D = {};
      this.j && this.j.clearOverriddenFiles();
    };
    x4.send = function(a14, b6) {
      var c6 = this, d6, e6, g5, f6, h5, k5, l5, m5, r5;
      return E4(function(p6) {
        switch (p6.h) {
          case 1:
            if (!c6.h.inputs) return p6.return();
            d6 = 1e3 * (void 0 === b6 || null === b6 ? performance.now() : b6);
            return D4(p6, c6.I, 2);
          case 2:
            return D4(p6, c6.initialize(), 3);
          case 3:
            e6 = new c6.i.PacketDataList();
            g5 = A4(Object.keys(a14));
            for (f6 = g5.next(); !f6.done; f6 = g5.next()) if (h5 = f6.value, k5 = c6.h.inputs[h5]) {
              a: {
                var n4 = a14[h5];
                switch (k5.type) {
                  case "video":
                    var q4 = c6.s[k5.stream];
                    q4 || (q4 = new Wc(c6.i, c6.K), c6.s[k5.stream] = q4);
                    0 === q4.m && (q4.m = q4.i.createTexture());
                    if ("undefined" !== typeof HTMLVideoElement && n4 instanceof HTMLVideoElement) {
                      var t4 = n4.videoWidth;
                      var w4 = n4.videoHeight;
                    } else "undefined" !== typeof HTMLImageElement && n4 instanceof HTMLImageElement ? (t4 = n4.naturalWidth, w4 = n4.naturalHeight) : (t4 = n4.width, w4 = n4.height);
                    w4 = { glName: q4.m, width: t4, height: w4 };
                    t4 = q4.h;
                    t4.canvas.width = w4.width;
                    t4.canvas.height = w4.height;
                    t4.activeTexture(t4.TEXTURE0);
                    q4.i.bindTexture2d(q4.m);
                    t4.texImage2D(t4.TEXTURE_2D, 0, t4.RGBA, t4.RGBA, t4.UNSIGNED_BYTE, n4);
                    q4.i.bindTexture2d(0);
                    q4 = w4;
                    break a;
                  case "detections":
                    q4 = c6.s[k5.stream];
                    q4 || (q4 = new Zc(c6.i), c6.s[k5.stream] = q4);
                    q4.data || (q4.data = new q4.h.DetectionListData());
                    q4.data.reset(n4.length);
                    for (w4 = 0; w4 < n4.length; ++w4) {
                      t4 = n4[w4];
                      var v5 = q4.data, B4 = v5.setBoundingBox, J3 = w4;
                      var I3 = t4.la;
                      var u5 = new Qc();
                      V3(u5, 1, I3.sa);
                      V3(u5, 2, I3.ta);
                      V3(u5, 3, I3.height);
                      V3(u5, 4, I3.width);
                      V3(u5, 5, I3.rotation);
                      U3(u5, 6, I3.pa);
                      I3 = u5.l();
                      B4.call(v5, J3, I3);
                      if (t4.ea) for (v5 = 0; v5 < t4.ea.length; ++v5) {
                        u5 = t4.ea[v5];
                        B4 = q4.data;
                        J3 = B4.addNormalizedLandmark;
                        I3 = w4;
                        u5 = Object.assign({}, u5, { visibility: u5.visibility ? u5.visibility : 0 });
                        var C4 = new Lc();
                        V3(C4, 1, u5.x);
                        V3(C4, 2, u5.y);
                        V3(C4, 3, u5.z);
                        u5.visibility && V3(C4, 4, u5.visibility);
                        u5 = C4.l();
                        J3.call(
                          B4,
                          I3,
                          u5
                        );
                      }
                      if (t4.ba) for (v5 = 0; v5 < t4.ba.length; ++v5) B4 = q4.data, J3 = B4.addClassification, I3 = w4, u5 = t4.ba[v5], C4 = new Z3(), V3(C4, 2, u5.qa), u5.index && U3(C4, 1, u5.index), u5.label && U3(C4, 3, u5.label), u5.displayName && U3(C4, 4, u5.displayName), u5 = C4.l(), J3.call(B4, I3, u5);
                    }
                    q4 = q4.data;
                    break a;
                  default:
                    q4 = {};
                }
              }
              l5 = q4;
              m5 = k5.stream;
              switch (k5.type) {
                case "video":
                  e6.pushTexture2d(Object.assign({}, l5, { stream: m5, timestamp: d6 }));
                  break;
                case "detections":
                  r5 = l5;
                  r5.stream = m5;
                  r5.timestamp = d6;
                  e6.pushDetectionList(r5);
                  break;
                default:
                  throw Error("Unknown input config type: '" + k5.type + "'");
              }
            }
            c6.j.send(e6);
            return D4(p6, c6.I, 4);
          case 4:
            e6.delete(), p6.h = 0;
        }
      });
    };
    function kd(a14, b6, c6) {
      var d6, e6, g5, f6, h5, k5, l5, m5, r5, p6, n4, q4, t4, w4;
      return E4(function(v5) {
        switch (v5.h) {
          case 1:
            if (!c6) return v5.return(b6);
            d6 = {};
            e6 = 0;
            g5 = A4(Object.keys(c6));
            for (f6 = g5.next(); !f6.done; f6 = g5.next()) h5 = f6.value, k5 = c6[h5], "string" !== typeof k5 && "texture" === k5.type && void 0 !== b6[k5.stream] && ++e6;
            1 < e6 && (a14.M = false);
            l5 = A4(Object.keys(c6));
            f6 = l5.next();
          case 2:
            if (f6.done) {
              v5.h = 4;
              break;
            }
            m5 = f6.value;
            r5 = c6[m5];
            if ("string" === typeof r5) return t4 = d6, w4 = m5, D4(v5, ld(a14, m5, b6[r5]), 14);
            p6 = b6[r5.stream];
            if ("detection_list" === r5.type) {
              if (p6) {
                var B4 = p6.getRectList();
                for (var J3 = p6.getLandmarksList(), I3 = p6.getClassificationsList(), u5 = [], C4 = 0; C4 < B4.size(); ++C4) {
                  var T3 = Sc(B4.get(C4)), od = W2(T3, 1), pd = W2(T3, 2), qd = W2(T3, 3), rd = W2(T3, 4), sd = W2(T3, 5, 0), za = void 0;
                  za = void 0 === za ? 0 : za;
                  T3 = { la: { sa: od, ta: pd, height: qd, width: rd, rotation: sd, pa: Rb(S3(T3, 6), za) }, ea: Ob(Pc(J3.get(C4)), Lc, 1).map(Vc), ba: Uc(Kc(I3.get(C4))) };
                  u5.push(T3);
                }
                B4 = u5;
              } else B4 = [];
              d6[m5] = B4;
              v5.h = 7;
              break;
            }
            if ("proto_list" === r5.type) {
              if (p6) {
                B4 = Array(p6.size());
                for (J3 = 0; J3 < p6.size(); J3++) B4[J3] = p6.get(J3);
                p6.delete();
              } else B4 = [];
              d6[m5] = B4;
              v5.h = 7;
              break;
            }
            if (void 0 === p6) {
              v5.h = 3;
              break;
            }
            if ("float_list" === r5.type) {
              d6[m5] = p6;
              v5.h = 7;
              break;
            }
            if ("proto" === r5.type) {
              d6[m5] = p6;
              v5.h = 7;
              break;
            }
            if ("texture" !== r5.type) throw Error("Unknown output config type: '" + r5.type + "'");
            n4 = a14.v[m5];
            n4 || (n4 = new Wc(a14.i, a14.K), a14.v[m5] = n4);
            return D4(v5, Xc(n4, p6, a14.M), 13);
          case 13:
            q4 = v5.i, d6[m5] = q4;
          case 7:
            r5.transform && d6[m5] && (d6[m5] = r5.transform(d6[m5]));
            v5.h = 3;
            break;
          case 14:
            t4[w4] = v5.i;
          case 3:
            f6 = l5.next();
            v5.h = 2;
            break;
          case 4:
            return v5.return(d6);
        }
      });
    }
    function ld(a14, b6, c6) {
      var d6;
      return E4(function(e6) {
        return "number" === typeof c6 || c6 instanceof Uint8Array || c6 instanceof a14.i.Uint8BlobList ? e6.return(c6) : c6 instanceof a14.i.Texture2dDataOut ? (d6 = a14.v[b6], d6 || (d6 = new Wc(a14.i, a14.K), a14.v[b6] = d6), e6.return(Xc(d6, c6, a14.M))) : e6.return(void 0);
      });
    }
    function id(a14, b6) {
      for (var c6 = b6.name || "$", d6 = [].concat(ea(b6.wants)), e6 = new a14.i.StringList(), g5 = A4(b6.wants), f6 = g5.next(); !f6.done; f6 = g5.next()) e6.push_back(f6.value);
      g5 = a14.i.PacketListener.implement({ onResults: function(h5) {
        for (var k5 = {}, l5 = 0; l5 < b6.wants.length; ++l5) k5[d6[l5]] = h5.get(l5);
        var m5 = a14.listeners[c6];
        m5 && (a14.I = kd(a14, k5, b6.outs).then(function(r5) {
          r5 = m5(r5);
          for (var p6 = 0; p6 < b6.wants.length; ++p6) {
            var n4 = k5[d6[p6]];
            "object" === typeof n4 && n4.hasOwnProperty && n4.hasOwnProperty("delete") && n4.delete();
          }
          r5 && (a14.I = r5);
        }));
      } });
      a14.j.attachMultiListener(e6, g5);
      e6.delete();
    }
    x4.onResults = function(a14, b6) {
      this.listeners[b6 || "$"] = a14;
    };
    Aa("Solution", ed);
    Aa("OptionType", { BOOL: 0, NUMBER: 1, ua: 2, 0: "BOOL", 1: "NUMBER", 2: "STRING" });
    function md(a14) {
      void 0 === a14 && (a14 = 0);
      switch (a14) {
        case 1:
          return "selfie_segmentation_landscape.tflite";
        default:
          return "selfie_segmentation.tflite";
      }
    }
    function nd(a14) {
      var b6 = this;
      a14 = a14 || {};
      this.h = new ed({ locateFile: a14.locateFile, files: function(c6) {
        return [{ simd: true, url: "selfie_segmentation_solution_simd_wasm_bin.js" }, { simd: false, url: "selfie_segmentation_solution_wasm_bin.js" }, { data: true, url: md(c6.modelSelection) }];
      }, graph: { url: "selfie_segmentation.binarypb" }, listeners: [{ wants: ["segmentation_mask", "image_transformed"], outs: { image: { type: "texture", stream: "image_transformed" }, segmentationMask: { type: "texture", stream: "segmentation_mask" } } }], inputs: { image: {
        type: "video",
        stream: "input_frames_gpu"
      } }, options: { useCpuInference: { type: 0, graphOptionXref: { calculatorType: "InferenceCalculator", fieldName: "use_cpu_inference" }, default: "object" !== typeof window || void 0 === window.navigator ? false : "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document }, selfieMode: { type: 0, graphOptionXref: { calculatorType: "GlScalerCalculator", calculatorIndex: 1, fieldName: "flip_horizontal" } }, modelSelection: {
        type: 1,
        graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorModelSelection", fieldName: "int_value" },
        onChange: function(c6) {
          var d6, e6, g5;
          return E4(function(f6) {
            if (1 == f6.h) return d6 = md(c6), e6 = "third_party/mediapipe/modules/selfie_segmentation/" + d6, D4(f6, gd(b6.h, d6), 2);
            g5 = f6.i;
            b6.h.overrideFile(e6, g5);
            return f6.return(true);
          });
        }
      } } });
    }
    x4 = nd.prototype;
    x4.close = function() {
      this.h.close();
      return Promise.resolve();
    };
    x4.onResults = function(a14) {
      this.h.onResults(a14);
    };
    x4.initialize = function() {
      var a14 = this;
      return E4(function(b6) {
        return D4(b6, a14.h.initialize(), 0);
      });
    };
    x4.reset = function() {
      this.h.reset();
    };
    x4.send = function(a14) {
      var b6 = this;
      return E4(function(c6) {
        return D4(c6, b6.h.send(a14), 0);
      });
    };
    x4.setOptions = function(a14) {
      this.h.setOptions(a14);
    };
    Aa("SelfieSegmentation", nd);
    Aa("VERSION", "0.1.1675465747");
  }).call(selfie_segmentation);
  return selfie_segmentation;
}
var selfie_segmentationExports = /* @__PURE__ */ requireSelfie_segmentation();
function compositeVirtualBackgroundFrame({
  ctx,
  segmentationMask,
  sourceImage,
  backgroundImage = null,
  width,
  height,
  repeatPattern = "repeat",
  blurFallbackPixels = 0
}) {
  const previousFilter = ctx.filter;
  ctx.save();
  try {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(segmentationMask, 0, 0, width, height);
    ctx.globalCompositeOperation = "source-in";
    ctx.drawImage(sourceImage, 0, 0, width, height);
    ctx.globalCompositeOperation = "destination-over";
    if (backgroundImage) {
      const pattern = ctx.createPattern(backgroundImage, repeatPattern);
      ctx.fillStyle = pattern || "transparent";
      ctx.fillRect(0, 0, width, height);
    } else if (blurFallbackPixels > 0) {
      ctx.filter = `blur(${blurFallbackPixels}px)`;
      ctx.drawImage(sourceImage, 0, 0, width, height);
    }
  } finally {
    ctx.filter = previousFilter || "none";
    ctx.globalCompositeOperation = "source-over";
    ctx.restore();
  }
}
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
  const previousSession = session;
  let candidateStop = null;
  try {
    const settings = sourceTrack.getSettings ? sourceTrack.getSettings() : {};
    const width = Number(settings.width) || 640;
    const height = Number(settings.height) || 360;
    const backgroundImage = typeof image === "string" ? await loadImage(image) : image;
    const producer = publish ? live.videoProducer || live.localVideoProducer : null;
    const processingTrack = sourceTrack.clone?.();
    if (!processingTrack) throw new Error("This camera cannot create the isolated track required for a virtual background.");
    const restoreTrack = producer ? sourceTrack.clone?.() : sourceTrack;
    if (!restoreTrack) {
      processingTrack.stop();
      throw new Error("This camera cannot preserve a track for restoring the original view.");
    }
    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.srcObject = new MediaStream([processingTrack]);
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
        compositeVirtualBackgroundFrame({
          ctx,
          segmentationMask: results.segmentationMask,
          sourceImage: results.image,
          backgroundImage,
          width: canvas.width,
          height: canvas.height
        });
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
      processingTrack.stop();
      video.srcObject = null;
    };
    candidateStop = stop;
    if (producer) {
      const track = processed.getVideoTracks()[0];
      if (producer && typeof producer.replaceTrack === "function" && track) {
        await producer.replaceTrack({ track });
      }
      if (camera?.removeTrack && camera?.addTrack && restoreTrack !== sourceTrack) {
        camera.removeTrack(sourceTrack);
        camera.addTrack(restoreTrack);
        if (sourceTrack.readyState === "live") sourceTrack.stop();
      }
    }
    previousSession?.stop();
    session = { stop, stream: processed, restoreTrack };
    candidateStop = null;
    live.updateVirtualStream?.(processed);
    live.updateProcessedStream?.(processed);
    live.updateKeepBackground?.(true);
    return { ok: true, error: "", stream: processed };
  } catch (error) {
    candidateStop?.();
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
    const original = active.restoreTrack;
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
  COMMON_LANGUAGE_CODES,
  MediaStream2 as MediaStream,
  MediaStreamTrack,
  Q2 as QnHDCons,
  u3 as QnHDConsNeu,
  m3 as QnHDConsPort,
  A2 as QnHDFrameRate,
  RTCView,
  SUPPORTED_LANGUAGE_CODES,
  SoundPlayer,
  TTS_PROVIDERS,
  f3 as aParams,
  addPanelist,
  a as addVideosGrid,
  addedAsPanelist,
  allMembers,
  allMembersRest,
  allWaitingRoomMembers,
  applyVirtualBackground,
  aD as assignParticipantToBreakoutRoom,
  aR as attachPlayback,
  Y as autoAdjust,
  banParticipant,
  b as breakoutRoomUpdated,
  b4 as buildAddVideosGridPlan,
  d4 as buildMainHostCardPlan,
  c4 as buildMainScreenState,
  f4 as buildPrepopulateUserMediaPlan,
  e4 as buildScreenShareHostCardPlan,
  bulkUpdateParticipantPermissions,
  Z as calculateRowsAndColumns,
  e3 as captureCanvasStream,
  a2 as changeVids,
  _ as checkGrid,
  a10 as checkLimitsAndMakeRequest,
  c3 as checkLimitsAndMakeRequestWithStorage,
  d as checkMediasfuURL,
  w3 as checkPauseState,
  $ as checkPermission,
  x3 as checkResumeState,
  b2 as checkScreenShare,
  clearVirtualBackground,
  b3 as clickAudio,
  clickChat,
  d3 as clickScreenShare,
  W as clickVideo,
  d2 as closeAndResize,
  e2 as compareActiveNames,
  f2 as compareScreenStates,
  compositeVirtualBackgroundFrame,
  f5 as confirmExit,
  y3 as confirmRecording,
  aP as confirmStillHere,
  g as connectIps,
  h as connectLocalIps,
  aa as connectLocalSocket,
  i as connectRecvTransport,
  j2 as connectSendTransport,
  k as connectSendTransportAudio,
  l as connectSendTransportScreen,
  m2 as connectSendTransportVideo,
  a8 as connectSocket,
  c2 as consumerResume,
  a0 as controlMedia,
  controlMediaHost,
  c as createDeviceClient,
  createLiveSubtitle,
  createResponseJoinRoom,
  createRoomOnMediaSFU,
  ar as createRoomPoll,
  n as createSendTransport,
  aU as createViewerSession,
  aS as detachPlayback,
  ab as disableParticipantVideo,
  disconnect,
  o as disconnectSendTransportAudio,
  p2 as disconnectSendTransportScreen,
  q as disconnectSendTransportVideo,
  a9 as disconnectSocket,
  disconnectUserSelf,
  r as dispStreams,
  at as endRoomPoll,
  fetchLanguagesViaSocket,
  fetchVoicesViaSocket,
  l2 as fhdCons,
  y2 as fhdConsNeu,
  p3 as fhdConsPort,
  D2 as fhdFrameRate,
  k3 as findOriginalProducerForSpeaker,
  aI as flipCamera,
  focusPanelists,
  formatNumber,
  s as generatePageContent,
  generateRandomMessages,
  generateRandomParticipants,
  generateRandomPolls,
  generateRandomRequestList,
  generateRandomWaitingRoomList,
  a42 as getActiveSpeaker,
  j4 as getActiveTranslationConsumers,
  Z2 as getAudioGridComponents,
  getAvailableVoices,
  au as getBreakoutState,
  aV as getCaptureLimits,
  aL as getChatMessages,
  getCommonLanguages,
  getCurrentParams,
  getDomains,
  a1 as getEstimate,
  az as getFocusModeState,
  getLanguageMetadata,
  getLanguageName,
  getLanguageNativeName,
  X2 as getLocalAudioStream,
  getLocalVideoStream,
  aG as getLocallyPausedProducerIds,
  a72 as getMediaPermissions,
  N2 as getModalPosition,
  a82 as getModerationPermissions,
  getOverlayPosition,
  b0 as getParticipantMedia,
  a23 as getParticipantMediaState,
  aM as getPendingApprovals,
  a22 as getPipedProducersAlt,
  aQ as getPlaybackSources,
  aq as getPollState,
  aO as getPresenceCheck,
  a3 as getProducersPiped,
  aw as getRecordingCapabilities,
  av as getRecordingNotice,
  ai as getRecordingState,
  V2 as getRemoteAudioStreams,
  U2 as getRemoteVideoStreams,
  T2 as getRoomReadiness,
  Y2 as getScreenShareStream,
  a62 as getSelectedDevices,
  aN as getSessionTimer,
  getSubtitleForSpeaker,
  getSupportedLanguages,
  ax as getTranslationState,
  t as getVideos,
  aA as getVirtualBackgroundState,
  an as getWhiteboardState,
  g2 as hParams,
  q3 as handleCreatePoll,
  handleCreateRoom,
  t3 as handleEndPoll,
  handleJoinRoom,
  h4 as handleStartBreakout,
  Q3 as handleStartWhiteboard,
  a12 as handleStopBreakout,
  R2 as handleStopWhiteboard,
  u4 as handleVotePoll,
  handleWelcomeRequest,
  k2 as hdCons,
  x2 as hdConsNeu,
  o2 as hdConsPort,
  C2 as hdFrameRate,
  h2 as hostRequestResponse,
  initialValuesState,
  h3 as isConsumingTranslationForSpeaker,
  isLanguageSupported,
  i3 as isSpeakerInMyBreakoutRoom,
  isSubtitleExpired,
  isVirtualBackgroundRunning,
  X as joinConRoom,
  T as joinConsumeRoom,
  e as joinLocalRoom,
  f as joinRoom,
  j as joinRoomClient,
  j3 as joinRoomOnMediaSFU,
  l4 as launchBackground,
  b5 as launchBreakoutRooms,
  c5 as launchCoHost,
  S2 as launchConfigureWhiteboard,
  g4 as launchConfirmExit,
  d5 as launchDisplaySettings,
  i4 as launchMediaSettings,
  j5 as launchMenuModal,
  k4 as launchMessages,
  launchPanelists,
  n3 as launchParticipants,
  launchPermissions,
  v3 as launchPoll,
  z3 as launchRecording,
  H2 as launchRequests,
  J2 as launchSettings,
  O2 as launchWaiting,
  $2 as leaveRoom,
  a52 as listMediaDevices,
  a32 as listParticipantMediaStates,
  mediaDevices,
  meetingEnded,
  meetingStillThere,
  meetingTimeRemaining,
  o3 as messageParticipants,
  v as mixStreams,
  m4 as modifyCoHostSettings,
  e5 as modifyDisplaySettings,
  m as modifySettings,
  ad as muteEveryone,
  aa2 as muteParticipant,
  p5 as muteParticipants,
  U as newPipeProducer,
  normalizeLanguageCode,
  w as onScreenChanges,
  panelistControlMedia,
  panelistFocusChanged,
  panelistsUpdated,
  participantRequested,
  p4 as pauseOriginalProducer,
  ak as pauseRoomRecording,
  permissionConfigUpdated,
  permissionUpdated,
  personJoined,
  pollUpdated,
  p as prepopulateUserMedia,
  x as processConsumerTransports,
  y as processConsumerTransportsAudio,
  aY as produceCanvas,
  a_ as produceDisplay,
  aZ as produceElement,
  aW as produceMedia,
  V as producerClosed,
  producerMediaClosed,
  producerMediaPaused,
  producerMediaResumed,
  pruneExpiredSubtitles,
  aT as publishWhip,
  q2 as qhdCons,
  z2 as qhdConsNeu,
  r2 as qhdConsPort,
  E2 as qhdFrameRate,
  reInitiateRecording,
  C as rePort,
  G as reUpdateInter,
  z as readjust,
  aF as reapplyLocalPlayback,
  A as receiveAllPipedTransports,
  receiveMessage,
  a4 as receiveRoomMessages,
  A3 as recordPauseTimer,
  B3 as recordResumeTimer,
  C3 as recordStartTimer,
  D3 as recordUpdateTimer,
  recordingNotice,
  registerGlobals,
  removePanelist,
  ae as removeParticipant,
  r4 as removeParticipants,
  removedFromPanelists,
  B as reorderStreams,
  a$ as replaceProducerTrack,
  D as requestScreenShare,
  a11 as resolveHostVideoStream,
  r3 as resolveMainHostRenderMode,
  ag as respondToParticipantRequest,
  I2 as respondToRequests,
  P2 as respondToWaiting,
  af as respondToWaitingParticipant,
  g3 as resumeOriginalProducer,
  E as resumePauseAudioStreams,
  F as resumePauseStreams,
  al as resumeRoomRecording,
  a5 as resumeSendTransportAudio,
  roomRecordParams,
  a13 as runMediaControl,
  F2 as screenFrameRate,
  s2 as screenParams,
  screenProducerId,
  i2 as sdCons,
  w2 as sdConsNeu,
  n2 as sdConsPort,
  B2 as sdFrameRate,
  N as selectVideoProducerCodec,
  a02 as sendChatMessage,
  s4 as sendMessage,
  aC as setBreakoutRooms,
  ah as setCoHost,
  a92 as setParticipantMedia,
  aB as setParticipantPlayback,
  aK as setRoomMediaPolicy,
  ay as setTranslationPreference,
  H as signalNewConsumerTransport,
  sleep,
  startMeetingProgressTimer,
  E3 as startRecording,
  startRecords,
  aj as startRoomRecording,
  I as startShareScreen,
  ao as startWhiteboard,
  aE as stopBreakoutRooms,
  s3 as stopConsumingTranslation,
  ac as stopParticipantScreenShare,
  aX as stopProducing,
  F3 as stopRecording,
  am as stopRoomRecording,
  J as stopShareScreen,
  ap as stopWhiteboard,
  stoppedRecording,
  K as streamSuccessAudio,
  L as streamSuccessAudioSwitch,
  M as streamSuccessScreen,
  O as streamSuccessVideo,
  K2 as switchAudio,
  aH as switchCamera,
  aJ as switchMicrophone,
  P as switchUserAudio,
  Q as switchUserVideo,
  R as switchUserVideoAlt,
  L2 as switchVideo,
  M2 as switchVideoAlt,
  l3 as syncTranslationStateAfterBreakoutChange,
  t2 as timeLeftRecording,
  translationChannelsAvailable,
  translationConfigUpdated,
  translationError,
  translationLanguageSet,
  translationMemberState,
  translationProducerClosed,
  translationProducerReady,
  translationRoomConfig,
  translationSpeakerOutputChanged,
  translationSubscribed,
  translationTranscript,
  translationUnsubscribed,
  S as trigger,
  unfocusPanelists,
  updateConsumingDomains,
  updateLiveSubtitlesFromTranscript,
  updateMediaSettings,
  u2 as updateMicLevel,
  a6 as updateMiniCardsGrid,
  updatePanelists,
  a7 as updateParticipantAudioDecibels,
  updateParticipantPermission,
  updatePermissionConfig,
  G2 as updateRecording,
  u as updateRoomParametersClient,
  updatedCoHost,
  userWaiting,
  v2 as vParams,
  v4 as validateAlphanumeric,
  validateWelcomeAlphanumeric,
  validateWelcomeInputs,
  as as voteInRoomPoll
};
//# sourceMappingURL=index.js.map
