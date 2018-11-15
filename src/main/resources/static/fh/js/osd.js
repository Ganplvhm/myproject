(function () {
    var k;

    function aa(a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }

    function ba(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {next: aa(a)}
    }

    function p(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done;)c.push(b.value);
            a = c
        }
        return a
    }

    var ca = "function" == typeof Object.create ? Object.create : function (a) {
        function b() {
        }

        b.prototype = a;
        return new b
    }, da;
    if ("function" == typeof Object.setPrototypeOf)da = Object.setPrototypeOf; else {
        var ea;
        a:{
            var ha = {Pb: !0}, ia = {};
            try {
                ia.__proto__ = ha;
                ea = ia.Pb;
                break a
            } catch (a) {
            }
            ea = !1
        }
        da = ea ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = da;

    function q(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (ja)ja(a, b); else for (var c in b)if ("prototype" != c)if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.Db = b.prototype
    }

    var ka = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }, la = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function ma(a, b) {
        if (b) {
            var c = la;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ka(c, a, {configurable: !0, writable: !0, value: b})
        }
    }

    var na = "function" == typeof Object.assign ? Object.assign : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)for (var e in d)Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    ma("Object.assign", function (a) {
        return a || na
    });
    ma("Math.trunc", function (a) {
        return a ? a : function (a) {
            a = Number(a);
            if (isNaN(a) || Infinity === a || -Infinity === a || 0 === a)return a;
            var b = Math.floor(Math.abs(a));
            return 0 > a ? -b : b
        }
    });
    var r = this;

    function t(a) {
        return "string" == typeof a
    }

    function u(a) {
        return "number" == typeof a
    }

    function oa() {
    }

    function pa(a) {
        a.Xa = void 0;
        a.h = function () {
            return a.Xa ? a.Xa : a.Xa = new a
        }
    }

    function qa(a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null"; else if ("function" == b && "undefined" == typeof a.call)return "object";
        return b
    }

    function ra(a) {
        var b = qa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function sa(a) {
        return "function" == qa(a)
    }

    function ta(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ua(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function va(a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function wa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa = ua : wa = va;
        return wa.apply(null, arguments)
    }

    function xa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }

    function ya(a, b) {
        a = a.split(".");
        var c = r;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function za(a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.Db = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.rc = function (a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var v = document, w = window;
    var Aa;

    function Ba(a, b) {
        if (t(a))return t(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)if (c in a && a[c] === b)return c;
        return -1
    }

    function y(a, b, c) {
        for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    }

    function Ca(a, b) {
        for (var c = a.length, d = [], e = 0, f = t(a) ? a.split("") : a, g = 0; g < c; g++)if (g in f) {
            var h = f[g];
            b.call(void 0, h, g, a) && (d[e++] = h)
        }
        return d
    }

    function Da(a, b) {
        for (var c = a.length, d = Array(c), e = t(a) ? a.split("") : a, f = 0; f < c; f++)f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ea(a, b, c) {
        var d = c;
        y(a, function (c, f) {
            d = b.call(void 0, d, c, f, a)
        });
        return d
    }

    function Fa(a, b) {
        for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a))return !0;
        return !1
    }

    function Ga(a, b) {
        var c = 0;
        y(a, function (a, e, f) {
            b.call(void 0, a, e, f) && ++c
        }, void 0);
        return c
    }

    function Ha(a, b) {
        b = Ia(a, b, void 0);
        return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
    }

    function Ia(a, b, c) {
        for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return f;
        return -1
    }

    function Ja(a, b) {
        return 0 <= Ba(a, b)
    }

    function Ka(a, b) {
        b = Ba(a, b);
        0 <= b && Array.prototype.splice.call(a, b, 1)
    }

    function La(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ma(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
            return c
        }
        return []
    }

    function Na(a, b) {
        a.sort(b || Oa)
    }

    function Oa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Pa(a) {
        if (!arguments.length)return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++)e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    };
    function Qa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ra(a) {
        if (!Sa.test(a))return a;
        -1 != a.indexOf("&") && (a = a.replace(Ta, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Ua, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Va, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Wa, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Xa, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Ya, "&#0;"));
        return a
    }

    var Ta = /&/g, Ua = /</g, Va = />/g, Wa = /"/g, Xa = /'/g, Ya = /\x00/g, Sa = /[\x00&<>"']/;

    function Za(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function $a(a) {
        return String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        })
    }

    function ab(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function bb(a) {
        var b = t(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
            return b + e.toUpperCase()
        })
    };
    var cb;
    a:{
        var db = r.navigator;
        if (db) {
            var eb = db.userAgent;
            if (eb) {
                cb = eb;
                break a
            }
        }
        cb = ""
    }
    function z(a) {
        return -1 != cb.indexOf(a)
    };
    function fb(a, b, c) {
        for (var d in a)b.call(c, a[d], d, a)
    }

    function gb(a, b) {
        var c = {}, d;
        for (d in a)b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function hb(a) {
        var b = ib, c;
        for (c in b)if (!a.call(void 0, b[c], c, b))return !1;
        return !0
    }

    function jb(a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = a[d];
        return b
    }

    function kb(a, b) {
        for (var c in a)if (a[c] == b)return !0;
        return !1
    }

    var lb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function A(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)a[c] = d[c];
            for (var f = 0; f < lb.length; f++)c = lb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    function mb() {
        return z("Safari") && !(nb() || z("Coast") || z("Opera") || z("Edge") || z("Silk") || z("Android"))
    }

    function nb() {
        return (z("Chrome") || z("CriOS")) && !z("Edge")
    };
    function ob(a) {
        ob[" "](a);
        return a
    }

    ob[" "] = oa;
    function pb(a, b) {
        try {
            return ob(a[b]), !0
        } catch (c) {
        }
        return !1
    }

    function qb(a, b) {
        var c = rb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var sb = z("Opera"), B = z("Trident") || z("MSIE"), tb = z("Edge"), ub = z("Gecko") && !(-1 != cb.toLowerCase().indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"), vb = -1 != cb.toLowerCase().indexOf("webkit") && !z("Edge"), wb = vb && z("Mobile");

    function xb() {
        var a = r.document;
        return a ? a.documentMode : void 0
    }

    var yb;
    a:{
        var zb = "", Ab = function () {
            var a = cb;
            if (ub)return /rv:([^\);]+)(\)|;)/.exec(a);
            if (tb)return /Edge\/([\d\.]+)/.exec(a);
            if (B)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (vb)return /WebKit\/(\S+)/.exec(a);
            if (sb)return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Ab && (zb = Ab ? Ab[1] : "");
        if (B) {
            var Bb = xb();
            if (null != Bb && Bb > parseFloat(zb)) {
                yb = String(Bb);
                break a
            }
        }
        yb = zb
    }
    var Cb = yb, rb = {};

    function Db(a) {
        return qb(a, function () {
            for (var b = 0, c = Qa(String(Cb)).split("."), d = Qa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length)break;
                    b = Za(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Za(0 == g[2].length, 0 == h[2].length) || Za(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }

    var Eb;
    var Fb = r.document;
    Eb = Fb && B ? xb() || ("CSS1Compat" == Fb.compatMode ? parseInt(Cb, 10) : 5) : void 0;
    function Gb(a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Hb = !B || 9 <= Number(Eb), Ib = B || sb || vb;

    function C(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }

    C.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    C.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    C.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    function D(a, b) {
        this.width = a;
        this.height = b
    }

    D.prototype.aspectRatio = function () {
        return this.width / this.height
    };
    D.prototype.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    D.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    D.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    function Jb(a) {
        return a ? new Kb(E(a)) : Aa || (Aa = new Kb)
    }

    function Lb() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document, a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : Mb(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }

    function Mb(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++)b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++)b = g.className, "function" == typeof b.split && Ja(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }

    function Nb(a, b) {
        fb(b, function (b, d) {
            b && "object" == typeof b && b.tc && (b = b.sc());
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Ob.hasOwnProperty(d) ? a.setAttribute(Ob[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }

    var Ob = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Pb(a) {
        var b = a.scrollingElement ? a.scrollingElement : vb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return B && Db("10") && a.pageYOffset != b.scrollTop ? new C(b.scrollLeft, b.scrollTop) : new C(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Qb(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Rb(a, b, c) {
        var d = arguments, e = document, f = String(d[0]), g = d[1];
        if (!Hb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', Ra(g.name), '"');
            if (g.type) {
                f.push(' type="', Ra(g.type), '"');
                var h = {};
                A(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        g && (t(g) ? f.className = g : "array" == qa(g) ? f.className = g.join(" ") : Nb(f, g));
        2 < d.length && Sb(e, f, d);
        return f
    }

    function Sb(a, b, c) {
        function d(c) {
            c && b.appendChild(t(c) ? a.createTextNode(c) : c)
        }

        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !ra(f) || ta(f) && 0 < f.nodeType ? d(f) : y(Tb(f) ? Ma(f) : f, d)
        }
    }

    function Ub(a) {
        var b;
        if (Ib && !(B && Db("9") && !Db("10") && r.SVGElement && a instanceof r.SVGElement) && (b = a.parentElement))return b;
        b = a.parentNode;
        return ta(b) && 1 == b.nodeType ? b : null
    }

    function Vb(a) {
        var b, c = arguments.length;
        if (!c)return null;
        if (1 == c)return arguments[0];
        var d = [], e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;)f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)if (g != d[h][b])return f;
            f = g
        }
        return f
    }

    function E(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Wb(a) {
        try {
            return a.contentWindow || (a.contentDocument ? Qb(a.contentDocument) : null)
        } catch (b) {
        }
        return null
    }

    function Tb(a) {
        if (a && "number" == typeof a.length) {
            if (ta(a))return "function" == typeof a.item || "string" == typeof a.item;
            if (sa(a))return "function" == typeof a.item
        }
        return !1
    }

    function Xb(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a))return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Kb(a) {
        this.a = a || r.document || document
    };
    function Yb() {
        return z("iPad") || z("Android") && !z("Mobile") || z("Silk")
    };
    function Zb(a) {
        try {
            return !!a && null != a.location.href && pb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function $b(a, b) {
        if (a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function ac(a) {
        var b = [];
        $b(a, function (a, d) {
            b.push(d)
        });
        return b
    }

    function bc() {
        var a = cc;
        if (!a)return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c)return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {
        }
        return ""
    };
    var dc = Gb(function () {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
            r.addEventListener("test", null, b)
        } catch (c) {
        }
        return a
    });

    function ec(a) {
        return a ? a.passive && dc() ? a : a.capture || !1 : !1
    }

    function fc(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, ec(d))
    }

    function gc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, ec(void 0))
    };
    function hc(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = a.document.createElement("img");
        if (d) {
            var f = function () {
                d && Ka(a.google_image_requests, e);
                gc(e, "load", f);
                gc(e, "error", f)
            };
            fc(e, "load", f);
            fc(e, "error", f)
        }
        c && (e.referrerPolicy = "no-referrer");
        e.src = b;
        a.google_image_requests.push(e)
    }

    var ic = Gb(function () {
        return "referrerPolicy"in r.document.createElement("img")
    });
    var jc, kc = parseFloat("");
    jc = isNaN(kc) || 1 < kc || 0 > kc ? 0 : kc;
    var lc;
    lc = /^true$/.test("false");
    function F(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }

    k = F.prototype;
    k.F = function () {
        return this.right - this.left
    };
    k.D = function () {
        return this.bottom - this.top
    };
    function mc(a) {
        return new F(a.top, a.right, a.bottom, a.left)
    }

    function nc(a, b) {
        return a == b ? !0 : a && b ? a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left : !1
    }

    k.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    function oc(a, b, c) {
        b instanceof C ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, u(c) && (a.top += c, a.bottom += c));
        return a
    };
    var pc = {};

    function qc(a, b) {
        var c = a.style[$a(b)];
        if ("undefined" !== typeof c)a = c; else {
            c = a.style;
            var d = pc[b];
            if (!d) {
                var e = $a(b);
                d = e;
                void 0 === a.style[e] && (e = (vb ? "Webkit" : ub ? "Moz" : B ? "ms" : sb ? "O" : null) + bb(e), void 0 !== a.style[e] && (d = e));
                pc[b] = d
            }
            a = c[d] || ""
        }
        return a
    }

    function rc(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
        B && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function sc(a, b) {
        var c = new C(0, 0), d = Qb(E(a));
        if (!pb(d, "parent"))return c;
        do {
            if (d == b) {
                var e = a, f = E(e);
                var g = new C(0, 0);
                var h = f ? E(f) : document;
                h = !B || 9 <= Number(Eb) || "CSS1Compat" == Jb(h).a.compatMode ? h.documentElement : h.body;
                e != h && (e = rc(e), f = Pb(Jb(f).a), g.x = e.left + f.x, g.y = e.top + f.y)
            } else g = rc(a), g = new C(g.left, g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    function tc(a) {
        a = void 0 === a ? r : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {
        }
        try {
            if (b && b.pageViewId && b.canonicalUrl)return b
        } catch (c) {
        }
        return null
    };
    function uc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function vc() {
        var a = v.documentElement, b = G();
        try {
            if (v.createEvent) {
                var c = v.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (uc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load", {bubbles: !0, cancelable: !0, detail: ""});
                a.dispatchEvent(d)
            } else if (uc(b.Event)) {
                var e = new Event("osd_load", {bubbles: !0, cancelable: !0});
                a.dispatchEvent(e)
            }
        } catch (f) {
        }
    }

    function wc() {
        var a = G();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }

    var xc = !!window.google_async_iframe_id, yc = xc && window.parent || window;

    function G() {
        if (xc && !Zb(yc)) {
            var a = "." + v.domain;
            try {
                for (; 2 < a.split(".").length && !Zb(yc);)v.domain = a = a.substr(a.indexOf(".") + 1), yc = window.parent
            } catch (b) {
            }
            Zb(yc) || (yc = window)
        }
        return yc
    };
    function zc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c)var f = (new D(e.innerWidth, e.innerHeight)).round(); else {
                    var g = (e || window).document, h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new D(h.clientWidth, h.clientHeight)).round()
                }
                d = f
            } catch (x) {
                d = new D(-12245933, -12245933)
            }
            a = d;
            var l = Pb(Jb(b.document).a);
            if (-12245933 == a.width) {
                var n = a.width;
                var m = new F(n, n, n, n)
            } else m = new F(l.y, l.x + a.width, l.y + a.height, l.x);
            return m
        } catch (x) {
            return new F(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Ac = {NONE: 0, $b: 1}, Bc = {qc: 1};

    function Cc() {
        this.o = 0;
        this.f = !1;
        this.c = -1;
        this.b = !1;
        this.a = 0
    }

    function Dc(a) {
        return a.b ? .3 <= a.o : .5 <= a.o
    };
    var I = {Nb: 0, bc: 1}, Ec = {oc: 0, lc: 1, nc: 2}, Fc = {
        953563515: 0,
        953563516: 1,
        953563517: 2
    }, Gc = {370204018: 0, 370204019: 1, 370204052: 2, 370204026: 0, 370204027: 1, 370204053: 2}, Hc = {
        668123008: 0,
        668123009: 1
    }, Ic = {668123028: 0, 668123029: 1}, Jc = {NONE: 0, hc: 1}, Kc = {480596784: 0, 480596785: 1}, Lc = {
        Nb: 0,
        jc: 1,
        ic: 2
    }, Mc = {21061799: 0, 21061800: 1, 21061801: 2}, Nc = {53887176: 0, 53887177: 1};

    function Oc(a) {
        this.f = a;
        this.a = null;
        this.b = !1;
        this.c = null
    }

    function J(a) {
        a.b = !0;
        return a
    }

    function Pc(a, b) {
        a.c = void 0 === b ? null : b
    }

    function Qc(a, b) {
        null === a.a && kb(a.f, b) && (a.a = b)
    }

    function Rc(a, b) {
        a.c && y(b, function (b) {
            b = a.c[b];
            void 0 !== b && Qc(a, b)
        })
    };
    var Sc = {NONE: "none", ac: "iemv", cc: "xdev", kc: "mppv"};

    function Tc() {
        this.a = {};
        this.c = !0;
        this.b = {}
    }

    Tc.prototype.reset = function () {
        this.a = {};
        this.c = !0;
        this.b = {}
    };
    function K(a, b, c) {
        a.a[b] || (a.a[b] = new Oc(c));
        return a.a[b]
    }

    function Uc(a, b, c) {
        (a = a.a[b]) && Qc(a, c)
    }

    function L(a, b) {
        var c = a.b;
        if (null !== c && b in c)return a.b[b];
        if (a = a.a[b])return a.a
    }

    function Vc(a) {
        var b = {}, c = gb(a.a, function (a) {
            return a.b
        });
        fb(c, function (c, e) {
            c = void 0 !== a.b[e] ? String(a.b[e]) : c.b && null !== c.a ? String(c.a) : "";
            0 < c.length && (b[e] = c)
        }, a);
        return b
    }

    function Wc(a, b) {
        if (!a.c)return b;
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="), e = 1 < d.length ? parseInt(d[1], 10) : 1;
            (d = a.a[d[0]]) && Qc(d, e)
        }
        return b.join("&")
    }

    function Xc(a, b) {
        a.c && y(jb(a.a), function (a) {
            return Rc(a, b)
        })
    }

    function Yc(a, b) {
        a.c && b && t(b) && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = Da(b, function (a) {
            return Number(a)
        }), Xc(a, b))
    };
    var Zc = +new Date, $c = -1, ad = -1, bd = !1;

    function M() {
        return +new Date - Zc
    }

    function cd() {
        var a = N.h().l, b = 0 <= ad ? M() - ad : -1, c = bd ? M() - $c : -1;
        if (79463068 == a)return 500;
        if (947190542 == a)return 100;
        if (79463069 == a)return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        var e = b;
        -1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)if (e < a[b]) {
            var f = d[b];
            break
        }
        void 0 === f && (f = d[a.length]);
        return f
    };
    function dd(a, b) {
        this.b = (void 0 === a ? 0 : a) || 0;
        this.a = (void 0 === b ? "" : b) || ""
    }

    dd.prototype.toString = function () {
        return this.b + (this.a ? "-" : "") + this.a
    };
    function ed(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var fd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    var gd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function hd() {
        var a = r, b = [], c = null;
        do {
            var d = a;
            if (Zb(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new id(e || "", d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d)b[d].depth = a - d;
        d = r;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)for (a = 1; a < b.length; ++a)e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.rb = !0);
        return b
    }

    function jd(a, b) {
        this.a = a;
        this.b = b
    }

    function id(a, b, c) {
        this.url = a;
        this.a = b;
        this.rb = !!c;
        this.depth = u(void 0) ? void 0 : null
    };
    function kd() {
        this.c = "&";
        this.f = !1;
        this.b = {};
        this.g = 0;
        this.a = []
    }

    function ld(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function md(a, b, c, d, e) {
        var f = [];
        $b(a, function (a, h) {
            (a = nd(a, b, c, d, e)) && f.push(h + "=" + a)
        });
        return f.join(b)
    }

    function nd(a, b, c, d, e) {
        if (null == a)return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)f.push(nd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)return e = e || 0, 2 > e ? encodeURIComponent(md(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function od(a, b, c, d) {
        a.a.push(b);
        a.b[b] = ld(c, d)
    }

    function pd(a, b, c, d) {
        b = b + "//" + c + d;
        var e = qd(a) - d.length;
        if (0 > e)return "";
        a.a.sort(function (a, b) {
            return a - b
        });
        d = null;
        c = "";
        for (var f = 0; f < a.a.length; f++)for (var g = a.a[f], h = a.b[g], l = 0; l < h.length; l++) {
            if (!e) {
                d = null == d ? g : d;
                break
            }
            var n = md(h[l], a.c, ",$");
            if (n) {
                n = c + n;
                if (e >= n.length) {
                    e -= n.length;
                    b += n;
                    c = a.c;
                    break
                } else a.f && (c = e, n[c - 1] == a.c && --c, b += n.substr(0, c), c = a.c, e = 0);
                d = null == d ? g : d
            }
        }
        a = "";
        null != d && (a = c + "trn=" + d);
        return b + a
    }

    function qd(a) {
        var b = 1, c;
        for (c in a.b)b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };
    function rd(a, b, c, d) {
        if (Math.random() < (d || a.a))try {
            if (c instanceof kd)var e = c; else e = new kd, $b(c, function (a, b) {
                var c = e, d = c.g++;
                a = ld(b, a);
                c.a.push(d);
                c.b[d] = a
            });
            var f = pd(e, a.f, a.b, a.c + b + "&");
            f && hc(r, f, !1, !1)
        } catch (g) {
        }
    };
    var sd = null;

    function td() {
        var a = r.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function ud() {
        var a = void 0 === a ? r : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    function vd(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
        this.slotId = void 0
    };
    var O = r.performance, wd = !!(O && O.mark && O.measure && O.clearMarks), xd = Gb(function () {
        var a;
        if (a = wd) {
            var b;
            if (null === sd) {
                sd = "";
                try {
                    a = "";
                    try {
                        a = r.top.location.hash
                    } catch (c) {
                        a = r.location.hash
                    }
                    a && (sd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                } catch (c) {
                }
            }
            b = sd;
            a = !!b.indexOf && 0 <= b.indexOf("1337")
        }
        return a
    });

    function yd() {
        var a = zd;
        this.b = [];
        this.c = a || r;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = xd() || (null != b ? b : 1 > Math.random())
    }

    function Ad(a) {
        a && O && xd() && (O.clearMarks("goog_" + a.uniqueId + "_start"), O.clearMarks("goog_" + a.uniqueId + "_end"))
    }

    yd.prototype.start = function (a, b) {
        if (!this.a)return null;
        var c = ud() || td();
        a = new vd(a, b, c);
        b = "goog_" + a.uniqueId + "_start";
        O && xd() && O.mark(b);
        return a
    };
    function Bd() {
        var a = Cd;
        this.j = Dd;
        this.g = "jserror";
        this.f = !0;
        this.c = null;
        this.l = this.a;
        this.b = void 0 === a ? null : a
    }

    function Ed(a, b, c, d) {
        try {
            if (a.b && a.b.a) {
                var e = a.b.start(b.toString(), 3);
                var f = c();
                var g = a.b;
                c = e;
                if (g.a && u(c.value)) {
                    var h = ud() || td();
                    c.duration = h - c.value;
                    var l = "goog_" + c.uniqueId + "_end";
                    O && xd() && O.mark(l);
                    g.a && g.b.push(c)
                }
            } else f = c()
        } catch (n) {
            g = a.f;
            try {
                Ad(e), g = (d || a.l).call(a, b, new Fd(Gd(n), n.fileName, n.lineNumber), void 0, void 0)
            } catch (m) {
                a.a(217, m)
            }
            if (!g)throw n;
        }
        return f
    }

    function Hd(a, b) {
        var c = Id;
        return function (d) {
            for (var e = [], f = 0; f < arguments.length; ++f)e[f] = arguments[f];
            return Ed(c, a, function () {
                return b.apply(void 0, e)
            }, void 0)
        }
    }

    Bd.prototype.a = function (a, b, c, d, e) {
        e = e || this.g;
        try {
            var f = new kd;
            f.f = !0;
            od(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new Fd(Gd(b), b.fileName, b.lineNumber));
            b.msg && od(f, 2, "msg", b.msg.substring(0, 512));
            b.file && od(f, 3, "file", b.file);
            0 < b.line && od(f, 4, "line", b.line);
            var g = b.meta || {};
            if (this.c)try {
                this.c(g)
            } catch (fa) {
            }
            if (d)try {
                d(g)
            } catch (fa) {
            }
            b = [g];
            f.a.push(5);
            f.b[5] = b;
            var h = hd(), l = new id(r.location.href, r, !1);
            b = null;
            var n = h.length - 1;
            for (d = n; 0 <= d; --d) {
                var m = h[d];
                !b && gd.test(m.url) && (b = m);
                if (m.url && !m.rb) {
                    l = m;
                    break
                }
            }
            m = null;
            var x = h.length && h[n].url;
            0 != l.depth && x && (m = h[n]);
            var H = new jd(l, m);
            H.b && od(f, 6, "top", H.b.url || "");
            od(f, 7, "url", H.a.url || "");
            rd(this.j, e, f, c)
        } catch (fa) {
            try {
                rd(this.j, e, {context: "ecmserr", rctx: a, msg: Gd(fa), url: H && H.a.url}, c)
            } catch (Fh) {
            }
        }
        return this.f
    };
    function Gd(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;)d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    }

    function Fd(a, b, c) {
        ed.call(this, Error(a), {message: a, file: void 0 === b ? "" : b, line: void 0 === c ? -1 : c})
    }

    q(Fd, ed);
    var Dd, Id, zd = G(), Cd = new yd;

    function Jd() {
        if (!zd.google_measure_js_timing) {
            var a = Cd;
            a.a = !1;
            a.b != a.c.google_js_reporting_queue && (xd() && y(a.b, Ad), a.b.length = 0)
        }
    }

    Dd = new function () {
        var a = void 0 === a ? w : a;
        this.f = "http:" === a.location.protocol ? "http:" : "https:";
        this.b = "pagead2.googlesyndication.com";
        this.c = "/pagead/gen_204?id=";
        this.a = .01
    };
    Id = new Bd;
    "complete" == zd.document.readyState ? Jd() : Cd.a && fc(zd, "load", function () {
        Jd()
    });
    function Kd(a) {
        Id.c = function (b) {
            y(a, function (a) {
                a(b)
            })
        }
    }

    function Ld(a, b) {
        return Ed(Id, a, b, Md)
    }

    function P(a, b) {
        return Hd(a, b)
    }

    var Md = Id.a;

    function Q(a, b) {
        Id.a(a, b, void 0, void 0)
    };
    lc && (Dd.a = 1);
    if (v && v.URL) {
        var Nd, cc = v.URL;
        Nd = !!cc && 0 < bc().length;
        Id.f = !Nd
    }
    function R(a, b, c, d, e) {
        c = Hd(d, c);
        fc(a, b, c, {capture: void 0 === e ? !1 : e});
        return c
    }

    function Od(a) {
        var b = ["IMG", "FRAME", "IFRAME"];
        return Fa(b, function (b) {
            return a.nodeName == String(b)
        }) ? [a] : Ea(b, function (b, d) {
            return b.concat(Ma((a || document).getElementsByTagName(String(d))))
        }, [])
    }

    function Pd(a, b) {
        if (a) {
            var c = 0, d = null;
            a = Od(a);
            for (var e = 0; e < a.length; e++) {
                var f = !1;
                d = a[e];
                switch (d.nodeName) {
                    case "IMG":
                        var g = d;
                        if (g.complete || g.naturalWidth)f = !0;
                        break;
                    case "FRAME":
                    case "IFRAME":
                        g = d;
                        try {
                            if (g.readyState)f = "complete" == g.readyState; else {
                                var h = g.contentWindow || g.contentDocument;
                                h.document && (h = h.document);
                                f = h && h.readyState ? "complete" == h.readyState : !1
                            }
                        } catch (l) {
                            f = !1
                        }
                }
                f || (c++, R(d, "load", function () {
                    c--;
                    c || b(null)
                }, 130))
            }
            a = d = null;
            !c && b(null)
        }
    }

    function Qd(a, b) {
        function c(d) {
            gc(a, d, c);
            b(d)
        }

        return R(a, "DOMNodeRemoved", c, 156, !1)
    };
    function Rd(a) {
        var b = [];
        fb(a, function (a, d) {
            d = encodeURIComponent(d);
            t(a) && (a = encodeURIComponent(a));
            b.push(d + "=" + a)
        });
        b.push("24=" + +new Date);
        return b.join("\n")
    };
    function Sd() {
        this.a = null;
        this.status = 0
    };
    var Td = !B && !mb();

    function Ud(a, b) {
        if (/-[a-z]/.test(b))return null;
        if (Td && a.dataset) {
            if (!(!z("Android") || nb() || z("Firefox") || z("Opera") || z("Silk") || b in a.dataset))return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + ab(b))
    }

    function Vd(a, b) {
        return /-[a-z]/.test(b) ? !1 : Td && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + ab(b)) : !!a.getAttribute("data-" + ab(b))
    };
    function Wd() {
        return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[v.visibilityState || v.webkitVisibilityState || v.mozVisibilityState || ""] || 0
    };
    var Xd = 0;

    function Yd(a, b) {
        try {
            Xd++, b.postMessage(a, "*")
        } catch (c) {
        }
    }

    function Zd(a, b) {
        b && (a(b), b.frames && y(b.frames, function (b) {
            Zd(a, b)
        }))
    }

    function $d(a, b, c, d) {
        if (!a)return {value: d, done: !1};
        d = b(d, a);
        var e = c(d, a);
        return !e && pb(a, "parentElement") ? $d(Ub(a), b, c, d) : {done: e, value: d}
    }

    function ae(a, b, c, d) {
        if (!a)return d;
        d = $d(a, b, c, d);
        if (!d.done)try {
            var e = E(a), f = e && Qb(e);
            return ae(f && f.frameElement, b, c, d.value)
        } catch (g) {
        }
        return d.value
    }

    function be(a) {
        var b = !B || Db(8);
        return ae(a, function (a, d) {
            a = pb(d, "style") && d.style && qc(d, "visibility");
            return {hidden: "hidden" === a, visible: b && "visible" === a}
        }, function (a) {
            return a.hidden || a.visible
        }, {hidden: !1, visible: !1}).hidden
    }

    function ce(a) {
        return ae(a, function (a, c) {
            return !(!pb(c, "style") || !c.style || "none" !== qc(c, "display"))
        }, function (a) {
            return a
        }, !1) ? !0 : be(a)
    }

    function de(a, b, c) {
        a = a.exec(b);
        if (!(b = !a || !a[1])) {
            a = a[1];
            b = a.length;
            if (0 == b)a = 0; else {
                for (var d = 305419896, e = 0; e < b; e++)d ^= (d << 5) + (d >> 2) + a.charCodeAt(e) & 4294967295;
                a = 0 < d ? d : 4294967296 + d
            }
            b = c != a
        }
        return !b
    }

    function ee(a, b) {
        0 == a.length ? (b.a = null, b.status = 1) : (a = Vb.apply(null, a), !a || a.tagName ? b.a = a : b.a = a.parentElement, b.a || (b.status = -2))
    }

    function fe(a, b, c) {
        var d = new RegExp("(?:(?:[?&]|%26|&3[f]|%2526|%253[f])" + b + "(?:=|%3[d]|%253[d]))([a-z0-9-_]*)", "i"), e = new Sd;
        if ("" == b || -1 == c)return e.status = -1, e;
        try {
            b = [];
            for (var f = ba((a.document || document).getElementsByTagName("A")), g = f.next(); !g.done; g = f.next()) {
                var h = g.value;
                de(d, h.href, c) && (e.status = 3, b.push(h))
            }
            if (0 < b.length)return ee(b, e), e;
            var l = ba((a.document || document).getElementsByTagName("EMBED"));
            for (g = l.next(); !g.done; g = l.next()) {
                var n = g.value;
                de(d, n.src, c) && (0 == n.getBoundingClientRect().height && n.parentElement && "OBJECT" == n.parentElement.tagName ? (e.status = 5, b.push(n.parentElement)) : (e.status = 4, b.push(n)))
            }
            if (0 < b.length)return ee(b, e), e
        } catch (m) {
            return e.status = 7, e
        }
        e.status = 1;
        return e
    }

    function ge(a) {
        return new F(a.top, a.right, a.bottom, a.left)
    }

    function he() {
        var a = Wd();
        return 0 == a ? -1 : 1 == a ? 0 : 1
    }

    function ie(a) {
        return [a.top, a.left, a.bottom, a.right].join("-")
    }

    function je(a, b, c) {
        if (b && a)if (c && 0 < c.length)for (c = Ca(c, function (a) {
            var b = a.parent && a.parent !== a;
            return a === w.top || b
        }), a = ba(c), c = a.next(); !c.done; c = a.next())Yd(b, c.value); else {
            c = [];
            var d = Wb(a);
            d && c.push(d);
            if (0 === c.length)try {
                c = Da(Mb(document, "IFRAME".toString().toLowerCase(), void 0, a), function (a) {
                    return Wb(a)
                })
            } catch (e) {
            }
            a = ba(c);
            for (c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                try {
                    b && Zd(xa(Yd, b), c)
                } catch (e) {
                }
            }
        }
    }

    function ke(a, b, c) {
        try {
            var d = Rd(b);
            je(a, d, c)
        } catch (e) {
        }
    };
    function le(a, b, c) {
        this.time = a;
        this.volume = null;
        this.b = b;
        this.a = null;
        this.c = c
    };
    function me(a, b, c, d, e, f, g, h, l) {
        this.l = a;
        this.m = b;
        this.a = c;
        this.f = d;
        this.g = e;
        this.b = f;
        this.c = g;
        this.s = h;
        this.j = l
    };
    function S() {
        this.c = !Zb(w.top);
        this.f = Yb() || !Yb() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"));
        var a = hd();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(fd)[3] || null) && decodeURI(a);
        this.g = this.m = this.a = null;
        this.b = new F(0, 0, 0, 0);
        this.l = !1;
        this.j = null
    }

    function ne(a, b) {
        a.m = b.screen ? new D(b.screen.width, b.screen.height) : null
    }

    function oe(a, b) {
        var c = a.a ? new D(a.a.F(), a.a.D()) : new D(0, 0);
        b = void 0 === b ? w : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0, e = 0;
        try {
            var f = b.document, g = f.body, h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight)d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth; else {
                var l = h.scrollHeight, n = h.scrollWidth, m = h.offsetHeight, x = h.offsetWidth;
                h.clientHeight != m && (l = g.scrollHeight, n = g.scrollWidth, m = g.offsetHeight, x = g.offsetWidth);
                l > c.height ? l > m ? (d = l, e = n) : (d = m, e = x) : l < m ? (d = l, e = n) : (d = m, e = x)
            }
            var H = new D(e, d)
        } catch (fa) {
            H = new D(-12245933, -12245933)
        }
        a.g = H
    }

    pa(S);
    function N() {
        this.l = void 0;
        this.f = this.m = 0;
        this.c = !1;
        this.b = "ns";
        this.j = this.g = -1;
        this.a = new Tc;
        Pc(J(K(this.a, "nio_mode", Ec)), Fc);
        Pc(J(K(this.a, "mv", Jc)), Kc);
        K(this.a, "omid", I);
        J(K(this.a, "osd", I));
        J(K(this.a, "epoh", I));
        J(K(this.a, "epph", I));
        J(K(this.a, "me", I));
        Pc(J(K(this.a, "umt", I)), Hc);
        Pc(J(K(this.a, "gmpd", I)), Ic);
        Pc(J(K(this.a, "sel", I)), Gc);
        Pc(J(K(this.a, "cll", Lc)), Mc);
        Pc(J(K(this.a, "mce", I)), Nc);
        J(K(this.a, "inapp", Bc));
        J(K(this.a, "phel", I));
        J(K(this.a, "li", I))
    }

    pa(N);
    function pe(a) {
        this.c = a;
        this.b = 0;
        this.a = null
    }

    pe.prototype.cancel = function () {
        w.clearTimeout(this.a);
        this.a = null
    };
    function qe(a) {
        w && (a.a = w.setTimeout(P(143, function () {
            a.b++;
            a.c.Cb()
        }), cd()))
    };
    function re(a, b, c) {
        this.a = a;
        this.U = void 0 === c ? "na" : c;
        this.g = [];
        this.H = !1;
        this.b = new le(-1, !0, this);
        this.f = this;
        this.w = this.l = b;
        this.A = this.u = !1;
        this.I = "uk";
        this.J = !1
    }

    k = re.prototype;
    k.ia = function () {
        return this.O()
    };
    k.O = function () {
        return !0
    };
    k.qb = function () {
        this.H = !0
    };
    k.ea = function () {
        return this.I
    };
    k.Z = function () {
        return this.A
    };
    function se(a, b) {
        a.A || (a.A = !0, a.I = b, a.w = 0, a.f == a && (a.l = 0, te(a)))
    }

    k.T = function () {
        return this.f == this ? this.U : this.f.T()
    };
    k.R = function () {
        return {}
    };
    k.V = function () {
        return this.l
    };
    function ue(a, b) {
        Ja(a.g, b) || (a.g.push(b), b.Y(a.f), b.W(a.b), b.X() && (a.u = !0))
    }

    k.vb = function () {
        var a = S.h();
        a.a = zc(!0, this.a, a.f)
    };
    k.wb = function () {
        ne(S.h(), this.a)
    };
    k.Cb = function () {
    };
    function ve(a) {
        a.u = a.g.length ? Fa(a.g, function (a) {
            return a.X()
        }) : !1
    }

    function we(a) {
        var b = Ma(a.g);
        y(b, function (b) {
            b.W(a.b)
        })
    }

    function te(a) {
        var b = Ma(a.g);
        y(b, function (b) {
            b.Y(a.f)
        });
        a.f != a || we(a)
    }

    k.Y = function (a) {
        var b = this.l, c = a.V();
        this.f = c < this.w ? this : a;
        this.l = this.f != this ? c : this.w;
        this.l != b && te(this)
    };
    function xe(a, b) {
        var c = a.b, d = a.u;
        c = !(b && (void 0 === d || !d || c.volume == b.volume) && c.b == b.b && nc(c.a, b.a));
        a.b = b;
        c && we(a)
    }

    k.W = function (a) {
        this.f != this && xe(this, a)
    };
    k.X = function () {
        return this.u
    };
    k.K = function () {
        this.J = !0
    };
    k.Fa = function () {
        return this.J
    };
    k.ub = function () {
        var a = Wd(), b = 1 === a;
        a = 0 === a;
        return N.h().c ? b : b || a
    };
    function ye(a, b, c, d) {
        this.a = a;
        this.g = this.b = b;
        this.u = c;
        this.s = d;
        this.m = !1;
        this.c = new me(b.b, this.a, new F(0, 0, 0, 0), null, this.ta(), 0, 0, M(), 0)
    }

    k = ye.prototype;
    k.ab = function () {
    };
    k.bb = function () {
    };
    k.da = function () {
        this.c = new me(this.b.b, this.a, this.c.a, this.c.f, this.ta(), this.c.b, this.c.c, this.c.s, this.c.j)
    };
    k.K = function () {
        if (!this.Fa()) {
            var a = this.b;
            Ka(a.g, this);
            a.u && this.X() && ve(a);
            this.m = !0
        }
    };
    k.Fa = function () {
        return this.m
    };
    k.R = function () {
        return this.g.R()
    };
    k.V = function () {
        return this.g.V()
    };
    k.ea = function () {
        return this.g.ea()
    };
    k.Z = function () {
        return this.g.Z()
    };
    k.Y = function (a) {
        this.g = a;
        this.s.Y(this)
    };
    k.W = function () {
        this.da()
    };
    k.X = function () {
        return this.s.X()
    };
    function ze(a) {
        this.g = !1;
        this.b = a
    }

    k = ze.prototype;
    k.V = function () {
        return this.b.V()
    };
    k.ea = function () {
        return this.b.ea()
    };
    k.Z = function () {
        return this.b.Z()
    };
    k.create = function (a, b, c) {
        var d = null;
        this.b && (d = this.Pa(a, b, c), ue(this.b, d));
        return d
    };
    k.ia = function () {
        return this.O()
    };
    k.O = function () {
        return !1
    };
    k.tb = function () {
        return !0
    };
    k.K = function () {
        this.g = !0
    };
    k.Fa = function () {
        return this.g
    };
    k.R = function () {
        return {}
    };
    function Ae(a, b, c) {
        this.c = void 0 === c ? 0 : c;
        this.b = a;
        this.a = null == b ? "" : b
    }

    function Be(a) {
        switch (Math.trunc(a.c)) {
            case -16:
                return -16;
            case -8:
                return -8;
            case 0:
                return 0;
            case 8:
                return 8;
            case 16:
                return 16;
            default:
                return 16
        }
    }

    function Ce(a, b) {
        return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
    };
    function De() {
        this.c = 0;
        this.a = [];
        this.b = !1
    }

    De.prototype.add = function (a, b, c) {
        ++this.c;
        a = new Ae(a, b, c);
        this.a.push(new Ae(a.b, a.a, a.c + this.c / 4096));
        this.b = !0;
        return this
    };
    function Ee(a, b) {
        y(b.a, function (b) {
            a.add(b.b, b.a, Be(b))
        })
    }

    function Fe(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        $b(b, function (b, f) {
            d && void 0 === b || a.add(f, b, c)
        })
    }

    function Ge(a) {
        var b = He;
        a.b && (Na(a.a, function (a, b) {
            return Ce(b, a) ? 1 : Ce(a, b) ? -1 : 0
        }), a.b = !1);
        return Ea(a.a, function (a, d) {
            d = b(d);
            return "" + a + ("" != a && "" != d ? "&" : "") + d
        }, "")
    };
    var Ie;
    Ie = ["av.key", "js", "unreleased"].slice(-1)[0];
    function He(a) {
        var b = a.b;
        a = a.a;
        return "" === a ? b : "boolean" == typeof a ? a ? b : "" : "array" == qa(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ja(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    function Je(a) {
        var b = void 0 === b ? !0 : b;
        this.a = new De;
        void 0 !== a && Ee(this.a, a);
        b && this.a.add("v", Ie, -16)
    }

    Je.prototype.toString = function () {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204", b = Ge(this.a);
        0 < b.length && (a += "?" + b);
        return a
    };
    function Ke(a) {
        var b = [], c = [];
        fb(a, function (a, e) {
            if (!(e in Object.prototype) && "undefined" != typeof a)switch ("array" == qa(a) && (a = a.join(",")), a = [e, "=", a].join(""), e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                case "aio":
                case "nio":
                case "iem":
                    b.unshift(a);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(a);
                    break;
                default:
                    b.push(a)
            }
        });
        return b.concat(c)
    }

    function Le() {
        if (/r\d{8}/.test("r20181010"))return "r20181010";
        if (Ie && "unreleased" !== Ie)return Ie
    };
    function Me() {
        this.a = 0
    }

    pa(Me);
    function Ne(a) {
        this.s = a;
        this.m = !1
    }

    Ne.prototype.j = function (a, b) {
        this.a = a;
        this.b = b
    };
    function Oe() {
        Ne.call(this, "capability")
    }

    q(Oe, Ne);
    Oe.prototype.l = function () {
        return !0
    };
    Oe.prototype.g = function () {
        var a = {};
        return a.b_name = this.a.$, a.v_name = this.b.$, a
    };
    function Pe() {
        Ne.call(this, "diff")
    }

    q(Pe, Ne);
    Pe.prototype.l = function () {
        return !(.02 >= Math.abs(this.b.o - this.a.o))
    };
    Pe.prototype.g = function () {
        var a = {};
        return a.b_name = this.a.$, a.v_name = this.b.$, a.b_vp_off = JSON.stringify(this.a.L), a.v_vp_off = JSON.stringify(this.b.L), a.b_vp_sz = JSON.stringify(this.a.gb), a.v_vp_sz = JSON.stringify(this.b.gb), a.b_exp = this.a.o, a.v_exp = this.b.o, a.efp_occ = this.a.Hb, a.exp_meas = this.b.mb, a.sbv = this.a.ja, a
    };
    function Qe() {
        Ne.call(this, "capt");
        this.f = [];
        this.c = []
    }

    q(Qe, Ne);
    Qe.prototype.j = function (a, b) {
        Ne.prototype.j.call(this, a, b);
        20 <= this.c.length || (this.f.push(a.o), this.c.push(b.o))
    };
    Qe.prototype.l = function () {
        return 20 === this.c.length
    };
    Qe.prototype.g = function () {
        var a = Re(this.f, this.c), b = Se(this.f, this.c), c = {};
        return c.b_name = this.a.$, c.v_name = this.b.$, c.b_exp = this.f.join(","), c.v_exp = this.c.join(","), c.diff = a, c.diff_buckets = b, c
    };
    function Re(a, b) {
        return Ga(Pa(a, b), function (a) {
            return a[0] !== a[1]
        })
    }

    function Se(a, b) {
        function c(a) {
            return .25 * Math.floor(a / .25)
        }

        return Re(Da(a, c), Da(b, c))
    };
    function Te(a, b, c, d) {
        var e = void 0 === e ? [new Oe, new Pe, new Qe] : e;
        this.a = a.Pa(b, c, this);
        this.a.ab();
        this.c = e;
        this.b = d
    }

    function Ue(a, b, c) {
        y(a.c, function (d) {
            var e = a.b;
            if (!d.m && (d.j(b, c), d.l())) {
                d.m = !0;
                var f = d.g(), g = new De;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.s);
                d = Me.h();
                g.add("i", d.a++);
                g.add("adk", e);
                Fe(g, f);
                e = new Je(g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = Le()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                h = G() || w;
                hc(h, e, !1, !1)
            }
        })
    }

    Te.prototype.W = function () {
    };
    Te.prototype.Y = function () {
    };
    Te.prototype.X = function () {
        return !1
    };
    function Ve(a) {
        for (var b = a !== a.top, c = a.top, d = a, e = d, f = 0; d && d != d.parent;)d = d.parent, f++, Zb(d) && (e = d);
        c = c === e;
        d = a.mraid;
        return null != d ? b ? c ? {Ia: d, Ka: 2} : {Ia: d, Ka: 1} : {
            Ia: d,
            Ka: 0
        } : b && c && (d = a.top.mraid, null != d) ? {Ia: d, Ka: 3} : null
    };
    var T = {}, We = null;
    T.le = 0;
    T.nt = 2;
    T.Fr = 3;
    T.Po = 5;
    T.me = 1;
    T.om = 4;
    function Xe(a) {
        a = tc(a);
        return !(!a || !a.observeIntersection)
    }

    function Ye(a) {
        T.e = -1;
        T.i = 6;
        T.n = 7;
        T.t = 8;
        if (!We) {
            var b = [];
            $b(T, function (a, c) {
                b[a + 1] = c
            });
            var c = b.join(""), d = a && a[c];
            We = d && function (b, c) {
                    return d.call(a, b, c)
                }
        }
        return We
    };
    function Ze() {
        this.a = this.b = this.c = 0
    }

    function $e(a, b, c, d) {
        b && (a.c += c, a.b += c, a.a = Math.max(a.a, a.b));
        if (void 0 === d ? !b : d)a.b = 0
    };
    var af = [1, .75, .5, .3, 0];

    function bf(a) {
        this.a = a = void 0 === a ? af : a;
        this.b = Da(this.a, function () {
            return new Ze
        })
    }

    function cf(a) {
        return df(a, function (a) {
            return a.c
        }, !1)
    }

    function ef(a) {
        return df(a, function (a) {
            return a.a
        }, !0)
    }

    function ff(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.a.length; f++) {
            var h = a.a[f], l = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            $e(a.b[f], g && l, e, !g || h)
        }
    }

    function df(a, b, c) {
        a = Da(a.b, function (a) {
            return b(a)
        });
        return c ? a : gf(a)
    }

    function gf(a) {
        return Da(a, function (a, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };
    function hf() {
        this.b = new bf;
        this.c = new Ze;
        this.a = -1;
        this.f = new bf([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    };
    function jf(a, b, c, d) {
        ye.call(this, a, b, c, d);
        this.f = new F(0, 0, 0, 0)
    }

    q(jf, ye);
    function kf(a, b, c, d) {
        return 0 >= a.F() || 0 >= a.D() ? !0 : c && d ? Ld(208, function () {
            return lf(a, b, c)
        }) : !1
    }

    function mf(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new F(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new F(0, 0, 0, 0)
    }

    function nf(a, b) {
        b = of(b);
        return 0 === b ? 0 : of(a) / b
    }

    function of(a) {
        return Math.max(a.D() * a.F(), 0)
    }

    function lf(a, b, c) {
        if (!a || !b)return !1;
        b = oc(mc(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = G();
        Zb(d.top) && d.top && d.top.document && (d = d.top);
        d = Ye(d && d.document);
        if (!d)return !1;
        a = d(a, b);
        if (!a)return !1;
        b = (b = (b = E(c)) && b.defaultView && b.defaultView.frameElement) && pf(b, a);
        d = a === c;
        a = !d && a && Xb(a, function (a) {
                return a === c
            });
        return !(b || d || a)
    }

    function pf(a, b) {
        if (!a || !b)return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b)return !0;
            try {
                if (a = Ub(a) || a) {
                    var d = E(a), e = d && Qb(d), f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }

    k = jf.prototype;
    k.ta = function () {
        return !0
    };
    k.da = function () {
        if (this.a) {
            var a = this.a.getBoundingClientRect(), b = a.right - a.left;
            a = a.bottom - a.top;
            var c = sc(this.a, this.b.a), d = c.x;
            c = c.y;
            this.f = new F(Math.round(c), Math.round(d + b), Math.round(c + a), Math.round(d))
        }
        (b = this.b.b.a) ? (b = mf(this.f, b), b = b.top >= b.bottom || b.left >= b.right ? new F(0, 0, 0, 0) : oc(b, -this.f.left, -this.f.top)) : b = new F(0, 0, 0, 0);
        var e = this.b.b.a;
        c = d = a = 0;
        var f = 1 == L(this.u, "od"), g = (this.f.bottom - this.f.top) * (this.f.right - this.f.left);
        e && b && 0 < g && (kf(b, e, this.a, f) ? b = new F(0, 0, 0, 0) : (c = new F(0, window.screen.height, window.screen.width, 0), a = nf(b, this.f), d = nf(b, e), c = nf(b, c)));
        e = this.b.b;
        f = -1 === e.time ? M() : e.time;
        this.c = new me(e, this.a, this.f, b, this.ta(), a, d, f, c)
    };
    k.Z = function () {
        return this.g.Z()
    };
    k.T = function () {
        return this.g.T()
    };
    k.W = function (a) {
        if (null == this.a) {
            var b = S.h().b;
            this.f = null != b ? b : new F(0, 0, 0, 0)
        }
        ye.prototype.W.call(this, a)
    };
    function U() {
        this.na = this.na;
        this.Ca = this.Ca
    }

    U.prototype.na = !1;
    U.prototype.Fa = function () {
        return this.na
    };
    U.prototype.K = function () {
        this.na || (this.na = !0, this.P())
    };
    U.prototype.P = function () {
        if (this.Ca)for (; this.Ca.length;)this.Ca.shift()()
    };
    var qf = new F(0, 0, 0, 0), rf = {threshold: [0, .3, .5, .75, 1]};

    function V(a, b, c) {
        U.call(this);
        this.b = mc(qf);
        this.B = 0;
        this.A = new hf;
        this.Aa = -2;
        this.ib = -1;
        this.Ra = b;
        this.ma = -1 != b;
        this.L = null;
        this.ba = -1;
        this.ca = c;
        this.Ya = this.Ib = oa;
        this.l = this.a = a;
        this.qa = !1;
        this.H = {Ha: null, Ga: null};
        this.C = !0;
        this.Ta = null;
        this.Qa = !1;
        N.h().m++;
        this.Fb = 0;
        this.c = new Cc;
        this.hb = this.va = -1;
        this.Oa = 0;
        this.oa = -1;
        this.I = new F(0, 0, 0, 0);
        this.Bb = !1;
        a = this.j = new Tc;
        K(a, "od", Ac);
        J(K(a, "opac", I));
        K(a, "ud", I);
        J(K(a, "mkm", I));
        J(K(a, "cm", I));
        J(K(a, "sela", I));
        J(K(a, "sbeos", I));
        K(a, "neh", I);
        J(K(a, "mwt", I));
        a = null != Ve(G());
        (this.a && this.a.getAttribute && Vd(this.a, "googleAvInapp") || a) && Uc(N.h().a, "inapp", 1);
        1 == this.ca ? Uc(this.j, "od", 1) : Uc(this.j, "od", 0)
    }

    q(V, U);
    k = V.prototype;
    k.P = function () {
        this.a && (this.H.Ha && (gc(this.a, "mouseover", this.H.Ha), this.H.Ha = null), this.H.Ga && (gc(this.a, "mouseout", this.H.Ga), this.H.Ga = null));
        U.prototype.P.call(this)
    };
    k.W = function () {
    };
    k.Y = function (a) {
        a.Z() && this.Ya(this, a.ea(), a)
    };
    k.X = function () {
        return !1
    };
    k.$a = function () {
        this.ma = !0
    };
    k.G = function () {
        return this.ma
    };
    k.cb = function () {
        this.c.o = 0
    };
    k.eb = function () {
        this.A = new hf
    };
    function sf(a, b, c) {
        if (a.G()) {
            var d = Ye(w && w.document);
            d && (c || a.M(w, !0), d = tf(a, d), a.aa(a.b, d, b, c, !0, !0))
        }
    }

    function W(a, b, c) {
        if (c(b))return b;
        for (; ;) {
            var d = Math.floor((a + b) / 2);
            if (d == a || d == b)return a;
            c(d) ? a = d : b = d
        }
    }

    function tf(a, b) {
        var c = Pb(document), d = Math.floor(a.b.left - c.x) + 1, e = Math.floor(a.b.top - c.y) + 1, f = Math.floor(a.b.right - c.x) - 1, g = Math.floor(a.b.bottom - c.y) - 1;
        a = (g - e) * (f - d);
        if (e > g || d > f)return 0;
        c = !!b(d, e);
        var h = !!b(f, g);
        if (c && h)return 1;
        var l = !!b(f, e), n = !!b(d, g);
        if (c)g = W(e, g, function (a) {
            return !!b(d, a)
        }), f = W(d, f, function (a) {
            return !!b(a, e)
        }); else if (l)g = W(e, g, function (a) {
            return !!b(f, a)
        }), d = W(f, d, function (a) {
            return !!b(a, e)
        }); else if (n)e = W(g, e, function (a) {
            return !!b(d, a)
        }), f = W(d, f, function (a) {
            return !!b(a, g)
        }); else if (h)e = W(g, e, function (a) {
            return !!b(f, a)
        }), d = W(f, d, function (a) {
            return !!b(a, g)
        }); else {
            var m = Math.floor((d + f) / 2), x = Math.floor((e + g) / 2);
            if (!b(m, x))return 0;
            e = W(x, e, function (a) {
                return !!b(m, a)
            });
            g = W(x, g, function (a) {
                return !!b(m, a)
            });
            d = W(m, d, function (a) {
                return !!b(a, x)
            });
            f = W(m, f, function (a) {
                return !!b(a, x)
            })
        }
        return (g - e) * (f - d) / a
    }

    k.Gb = function (a, b, c, d, e) {
        this.G() && (c || this.M(d, e), this.aa(this.b, b, a, c, !1, !0))
    };
    function uf(a, b, c) {
        if (a.G()) {
            var d = a.c.a, e = c ? a.c.o : a.Fb;
            a.I && !nc(a.I, new F(0, 0, 0, 0)) && (e = oc(mc(a.I), a.b.left, a.b.top));
            a.aa(a.b, e, b, c, !0, !0, {}, void 0, d)
        }
    }

    function vf(a) {
        return a.w ? a.w.T() : N.h().b
    }

    function wf(a, b, c) {
        if (a.G() && a.w) {
            var d = G(), e = S.h();
            a.M(d, e.c);
            a.w.da();
            d = a.w.c;
            var f = d.l.a;
            e = !(!d.g && !f);
            if (null != d.f && f) {
                var g = d.a;
                a.L = new C(g.left - f.left, g.top - f.top)
            }
            f = a.ja() ? d.c : d.b;
            a.aa(a.b, f, b, c, !0, e, void 0, void 0, d.j)
        }
    }

    function xf(a) {
        if (a.G() && a.Ta) {
            var b = 1 == L(a.j, "od"), c = -1 !== a.A.a, d = S.h().b, e = a.Ta, f = vf(a), g = new D(d.F(), d.D());
            d = a.ja();
            a = {$: f, L: a.L, gb: g, ja: d, o: a.c.o, Hb: b, mb: c};
            if (b = e.a) {
                b.da();
                c = b.c;
                f = c.l.a;
                g = !(!c.g && !f);
                var h = null, l = null;
                null != c.f && f && (h = c.a, h = new C(h.left - f.left, h.top - f.top), l = new D(f.right - f.left, f.bottom - f.top));
                d = {$: b.T(), L: h, gb: l, ja: d, Hb: !1, o: d ? c.c : c.b, mb: g}
            } else d = null;
            d && Ue(e, a, d)
        }
    }

    k.aa = function (a, b, c, d, e, f, g, h, l) {
        void 0 === h && (-1 == this.Ra ? h = 0 : (h = c - this.Ra || 1, h = 1E4 < h ? 1 : h));
        g = void 0 === l ? -1 : l;
        g = void 0 === g ? -1 : g;
        l = new Cc;
        l.f = d;
        l.c = he();
        u(b) ? (l.o = yf(this, b), l.a = g) : (l.o = yf(this, a, b), l.a = 0 <= g ? g : l.o * of(a) / (w.screen.height * w.screen.width));
        l.b = this.ga();
        u(b) || (this.L = new C(a.left - b.left, a.top - b.top));
        g = this.A;
        var n = this.c;
        e = e && this.c.o >= (this.ga() ? .3 : .5);
        f && (g.a = Math.max(g.a, l.o));
        ff(g.f, l.a, n.a, l.f, h, e);
        ff(g.b, l.o, n.o, l.f, h, e);
        $e(g.c, e || n.b != l.b ? Dc(n) && Dc(l) : Dc(n), h, !Dc(l) || l.f);
        this.Ra = c;
        0 < l.o && (-1 === this.va && (this.va = c), this.hb = c);
        -1 == this.ib && X(this) && (this.ib = c);
        if (-2 == this.Aa)try {
            a:{
                var m = u(b) ? null : b;
                if (a && a != qf && 0 != this.B) {
                    var x = S.h();
                    if (!m) {
                        if (!x.a) {
                            var H = -1;
                            break a
                        }
                        m = new F(0, x.a.F(), x.a.D(), 0)
                    }
                    H = m.F && 0 < m.F() && m.D && 0 < m.D() ? yf(this, a, m) : -1
                } else H = -1
            }
            this.Aa = H
        } catch (fa) {
            Q(207, fa)
        }
        this.c = l;
        d && (this.c.o = 0);
        this.Ib(this)
    };
    function yf(a, b, c) {
        if (0 === a.ba && 1 === L(a.j, "opac"))return 0;
        if (u(b))return b;
        b = mf(b, c);
        var d = 1 == L(a.j, "od");
        if (0 >= a.B || kf(b, c, a.l, d))return 0;
        d = of(b) / a.B;
        c = nf(b, c);
        return a.ja() ? Math.max(d, c) : d
    }

    k.ga = function () {
        return !1
    };
    k.ja = function () {
        return this.Bb || this.Qa
    };
    k.M = function (a, b, c) {
        if (c)this.b = c; else {
            a = b ? a : a.top;
            try {
                var d = mc(qf), e = new C(0, 0);
                if (this.l) {
                    var f = 1 == this.ca;
                    !b && f && ce(this.l) || (d = this.l.getBoundingClientRect());
                    e = sc(this.l, a)
                }
                b = e;
                var g = b.x, h = b.y;
                this.b = new F(Math.round(h), Math.round(g + (d.right - d.left)), Math.round(h + (d.bottom - d.top)), Math.round(g))
            } catch (l) {
                this.b = mc(qf)
            }
        }
        this.B = (this.b.bottom - this.b.top) * (this.b.right - this.b.left)
    };
    function X(a) {
        return 1E3 <= a.A.c.a
    }

    function zf(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function Af(a) {
        a.a && (a.H.Ha = R(a.a, "mouseover", function () {
            var b = M();
            a.oa = b
        }, 149), a.H.Ga = R(a.a, "mouseout", function () {
            var b = M();
            -1 == a.oa || b < a.oa || (a.Oa += b - a.oa);
            a.oa = -1
        }, 150))
    }

    k.ka = function () {
        this.w && this.w.bb()
    };
    function Bf(a, b) {
        var c = !1, d = a.l;
        if (null === d)return !1;
        Ld(152, function () {
            var e = new b.IntersectionObserver(function (c) {
                try {
                    Cf(b, c, a)
                } catch (g) {
                    try {
                        e.unobserve(d), Q("osd_adblock::nioc", g)
                    } catch (h) {
                    }
                }
            }, rf);
            e.observe(d);
            c = !0
        });
        return c
    }

    function Df(a, b) {
        var c = !1;
        Ld(151, function () {
            var d = tc(b).observeIntersection(function (c) {
                try {
                    Cf(b, c, a)
                } catch (f) {
                    try {
                        d(), Q("osd_adblock::aioc", f)
                    } catch (g) {
                    }
                }
            });
            c = !0
        });
        return c
    }

    function Cf(a, b, c) {
        if (!b || !b.length || 0 >= b.length)b = null; else {
            for (var d = b[0], e = 1; e < b.length; e++)b[e].time > d.time && (d = b[e]);
            b = d
        }
        if (e = b) {
            b = e.intersectionRect.width * e.intersectionRect.height / (e.boundingClientRect.width * e.boundingClientRect.height);
            d = ge(e.boundingClientRect);
            e = ge(e.intersectionRect);
            var f = b * of(d) / (a.screen.height * a.screen.width);
            c.c.o = Math.min(Math.max(b, 0), 1);
            c.Fb = c.c.o;
            c.c.a = Math.min(Math.max(f, 0), 1);
            c.M(a, !0, d);
            Ef(c, d, e)
        }
    }

    function Ef(a, b, c) {
        c = mf(b, c);
        a.I = 0 >= a.B || c.top >= c.bottom || c.left >= c.right ? new F(0, 0, 0, 0) : oc(c, -b.left, -b.top)
    };
    function Ff() {
        Gf(this)
    }

    function Gf(a) {
        !a.a && sa(w.Goog_AdSense_getAdAdapterInstance) && (a.a = Goog_AdSense_getAdAdapterInstance());
        !a.b && sa(w.Goog_Common_getAdAdapterInstance) && (a.b = Goog_Common_getAdAdapterInstance());
        !a.c && Lb() && (a.c = !0)
    }

    function Hf(a, b, c, d) {
        Gf(a);
        var e = S.h().l;
        a.a && a.a.getNewBlocks(b, e);
        a.b && a.b.getNewBlocks(b, e);
        a.c && !c() && (d(!0), b(Lb(), "", 13, !0))
    }

    function If(a) {
        Gf(a);
        return (a.a ? a.a.numBlocks() : 0) + (a.b ? a.b.numBlocks() : 0) + (a.c ? 1 : 0)
    }

    function Jf(a) {
        Gf(a);
        return a.a ? a.a.getOseId() : a.b ? a.b.getOseId() : 0
    };
    function Kf() {
        U.call(this);
        this.l = null;
        this.b = "none";
        this.f = !1;
        this.a = null;
        this.g = 0;
        this.c = !1;
        this.j = null
    }

    q(Kf, U);
    Kf.prototype.P = function () {
        w.clearInterval(this.a);
        this.a = null;
        U.prototype.P.call(this)
    };
    function Lf(a, b) {
        switch (a.b) {
            case "iemv":
                b.clearInterval(a.a), a.a = null, a.f = !1
        }
    }

    function Mf(a, b, c) {
        a.l = c;
        a.f = !0;
        a.b = "iemv";
        Nf(a, b);
        a.j = "u"
    }

    function Nf(a, b, c) {
        c = void 0 === c ? !1 : c;
        a.a = b.setInterval(P(252, wa(a.m, a, b, 1E3)), 1E3);
        c && a.m(b)
    }

    Kf.prototype.m = function (a, b) {
        b = void 0 === b ? 0 : b;
        Ye(a && a.document) ? (this.l(a) ? (this.g += this.c ? b : 0, this.c = !0) : (this.g = 0, this.c = !1), 1E3 <= this.g && (Lf(this, a), this.j = "v")) : (Lf(this, a), this.j = "i")
    };
    function Of(a) {
        return mb() ? (a = (a = E(a)) && Qb(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var Pf = "StopIteration"in r ? r.StopIteration : {message: "StopIteration", stack: ""};

    function Qf() {
    }

    Qf.prototype.next = function () {
        throw Pf;
    };
    Qf.prototype.jb = function () {
        return this
    };
    function Rf(a) {
        if (a instanceof Qf)return a;
        if ("function" == typeof a.jb)return a.jb(!1);
        if (ra(a)) {
            var b = 0, c = new Qf;
            c.next = function () {
                for (; ;) {
                    if (b >= a.length)throw Pf;
                    if (b in a)return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function Sf(a, b) {
        if (ra(a))try {
            y(a, b, void 0)
        } catch (c) {
            if (c !== Pf)throw c;
        } else {
            a = Rf(a);
            try {
                for (; ;)b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== Pf)throw c;
            }
        }
    }

    function Tf(a, b) {
        var c = 1;
        Sf(a, function (a) {
            c = b.call(void 0, c, a)
        });
        return c
    }

    function Uf(a, b) {
        var c = Rf(a);
        a = new Qf;
        a.next = function () {
            var a = c.next();
            if (b.call(void 0, a, void 0, c))return a;
            throw Pf;
        };
        return a
    };
    function Vf(a, b) {
        this.c = b;
        this.b = null == a;
        this.a = a
    }

    q(Vf, Qf);
    Vf.prototype.next = function () {
        if (this.b)throw Pf;
        var a = this.a || null;
        this.b = null == a;
        var b;
        if (b = a) {
            b = this.c;
            if (pb(a, "parentElement") && null != a.parentElement && a != a.parentElement)var c = a.parentElement; else if (b) {
                var d = void 0 === d ? Of : d;
                if (d(a))try {
                    var e = E(a), f = e && Qb(e), g = f && f.frameElement;
                    c = null == g ? null : g
                } catch (h) {
                    c = null
                } else c = null
            } else c = null;
            b = c
        }
        this.a = b;
        return a
    };
    function Wf(a) {
        var b = 1;
        a = Uf(new Vf(a, !0), function () {
            return 0 < b
        });
        return Tf(a, function (a, d) {
            var c = 1;
            if (pb(d, "style") && d.style) {
                var f = parseFloat;
                a:{
                    var g = E(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                g || (g = qc(d, "opacity"));
                d = f(g);
                u(d) && !isNaN(d) && (c = d)
            }
            return b = a * c
        })
    };
    function Xf(a, b, c, d, e, f, g) {
        f = void 0 === f ? oa : f;
        g = void 0 === g ? [] : g;
        V.call(this, c, d, e);
        this.m = b;
        this.a ? (b = this.a._adk_, b || (b = (b = Ud(this.a, "googleAvAdk")) && !/[^0-9]/.test(b) ? parseInt(b, 10) : 0)) : b = 0;
        this.s = b;
        this.xa = 0;
        this.ya = null;
        c && (c._avicxn_ || Ud(c, "googleAvCxn"));
        c && (c._aviextcxn_ || Ud(c, "googleAvExtCxn"));
        c && (c._imm_ || Vd(c, "googleAvImmediate"));
        this.f = 0;
        this.Kb = !1;
        this.ra = [];
        this.g = null;
        this.Za = "none";
        this.La = c ? String(c._cvu_ || Ud(c, "googleAvCpmav") || "") : "";
        this.Eb = this.wa = this.zb = !1;
        this.Mb = -1;
        this.xb = "";
        this.sb = -1;
        this.N = 0;
        this.Ua = -1;
        this.za = 0;
        this.sa = this.yb = he();
        this.u = 0;
        this.Ob = f;
        c && Yf(this, String(c._avm_ || Ud(c, "googleAvMetadata") || ""));
        this.m && t(this.m) && (c = this.m.match(/fa=([^&;]+)/)) && 2 == c.length && c[1] == (30).toString() && (this.Qa = !0);
        Yc(N.h().a, this.m);
        this.m && t(this.m) && (c = this.m.match(/[&;?]eid=([^&;]+)/)) && 2 == c.length && c[1].match("111541704") && (N.h().c = !0);
        c = S.h();
        this.M(a, c.c);
        this.Lb = !1;
        this.Ba = this.Sa = this.Wa = this.Da = this.J = -1;
        this.U = {};
        this.Jb = g
    }

    q(Xf, V);
    k = Xf.prototype;
    k.P = function () {
        this.g && this.g.K();
        Zf(this);
        V.prototype.P.call(this)
    };
    function $f(a, b, c) {
        y(a.Jb, function (d) {
            return d.a(a, c, b)
        })
    }

    k.G = function () {
        return this.ma && 1 !== this.u
    };
    function Zf(a) {
        a.Ab && gc(a.a, "DOMNodeRemoved", a.Ab);
        a.Na && a.Na.disconnect()
    }

    function ag(a) {
        a.a && (Zf(a), r.MutationObserver ? (a.Na = new r.MutationObserver(function (b, c) {
            for (var d = 0; d < b.length; d++)if ("childList" == b[d].type && b[d].removedNodes.length) {
                a.Ua = M();
                c.disconnect();
                break
            }
        }), a.Na.observe(a.a, {childList: !0, subtree: !0})) : a.Ab = Qd(a.a, function () {
            a.Ua = M()
        }))
    }

    k.cb = function () {
        V.prototype.cb.call(this);
        this.I = new F(0, 0, 0, 0)
    };
    k.eb = function () {
        V.prototype.eb.call(this);
        this.I = new F(0, 0, 0, 0)
    };
    k.$a = function () {
        this.ma || (this.Wa = td(), bg(this, !1, this.Aa));
        V.prototype.$a.call(this);
        cg(this)
    };
    function cg(a) {
        if (L(N.h().a, "cll") && a.ma && r == r.top) {
            var b = r.pageYOffset;
            null != b && (a.Ba = Math.max(b, a.Ba))
        }
    }

    function Yf(a, b) {
        if (t(b) && 0 != b.length) {
            var c = new Tc;
            J(K(c, "omid", I));
            Wc(c, b);
            c = L(c, "omid");
            null !== c && (N.h().a.b.omid = c);
            b = Wc(a.j, b).split("&");
            for (c = 0; c < b.length; c++) {
                var d = b[c];
                "ts=0" == d ? a.C = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? a.za = 2 : "1" == d && (a.za = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (a.Bb = !0) : 0 == d.lastIndexOf("alp=", 0) ? a.xb = d.split("=")[1] : 0 == d.lastIndexOf("alh=", 0) ? (d = parseInt(d.split("=")[1], 10), isNaN(d) || (a.sb = d)) : 0 == d.lastIndexOf("ve=", 0) ? (d = d.split("=")[1], kb(Sc, d) && (a.Za = d)) : "adf=1" == d && (a.Lb = !0)
            }
            a.c.b = a.ga()
        }
    }

    k.Gb = function (a, b, c, d, e) {
        if (this.G()) {
            c || this.M(d, e);
            if (dg(this) && c)switch (e = this.g, e.b) {
                case "iemv":
                    d.clearInterval(e.a), e.a = null, e.c = !1
            } else if (dg(this))switch (e = this.g, e.b) {
                case "iemv":
                    e.f && !e.a && Nf(e, d, !0)
            }
            this.aa(this.b, b, a, c, !1, !0)
        }
    };
    k.aa = function (a, b, c, d, e, f, g) {
        g = void 0 === g ? {} : g;
        var h = X(this), l = Math.floor(100 * this.c.o);
        this.za = 242500 <= (a.right - a.left) * (a.bottom - a.top) ? 1 : 2;
        V.prototype.aa.call(this, a, b, c, d, e, f, g);
        -1 == this.sa && -1 != this.c.c ? this.sa = this.c.c : 0 == this.sa && 1 == this.c.c && (this.sa = 1);
        u(b) || (0 < this.c.o ? Ef(this, a, b) : this.I = new F(0, 0, 0, 0));
        a = X(this);
        b = Math.floor(100 * this.c.o);
        (!h && a || b != l) && bg(this, a, b);
        var n = this;
        P(157, function () {
            n.ba = Wf(n.l)
        })();
        cg(this)
    };
    k.ga = function () {
        return wb || dg(this) ? !1 : 1 == this.za
    };
    function eg(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {}, f = fg(a);
        d && A(f, d);
        f.adk = a.s;
        a.Lb && a.xa && (f.adf = a.xa);
        c && (f.r = c);
        0 === a.ba && (f.invis = 1);
        c = Ke(f).join("&");
        e[3] = c;
        e[11] = 4 != a.f && a.qa;
        e[29] = N.h().f;
        e[0] = b;
        e[7] = a.c.o;
        e[9] = ie(a.I);
        e[28] = a.ca;
        e[32] = vf(a);
        e[5] = X(a) && 4 != a.f;
        e[15] = dg(a);
        e[13] = ef(a.A.b).join(",");
        e[18] = 0 == a.B;
        null != a.L && (e[20] = a.L.y, e[21] = a.L.x);
        b = S.h();
        null != b.b && (e[22] = b.b.F(), e[23] = b.b.D());
        null != b.a && (e[22] = b.a.F(), e[23] = b.a.D(), e[30] = b.a.F(), e[31] = b.a.D(), e[38] = ie(b.a));
        c = b.b;
        e[37] = ie(new F(a.b.top + c.top, a.b.right + c.left, a.b.bottom + c.top, a.b.left + c.left));
        b.g && (b = b.g, e[39] = b.width + "-" + b.height);
        -1 != a.ba && (e[25] = a.ba);
        a = new dd(a.s, a.ya);
        a.b && (e[4] = a.b);
        a.a && (e[12] = a.a);
        return e
    }

    function gg(a, b, c, d) {
        var e = X(a) && 4 != a.f;
        0 != a.f && (1 != a.f || e && !a.Kb) && (b = eg(a, c, d, b), ke(a.a, b, a.ra), a.Kb = e)
    }

    k.M = function (a, b, c) {
        if (!b && (-1 != this.Mb || -1 != this.Ua) && 2 != this.N && 1 != this.N && -1 != this.N && 7 != this.N) {
            var d = null;
            try {
                d = this.l && this.l.getBoundingClientRect()
            } catch (e) {
            }
            d && 0 != d.width && 0 != d.height || (d = fe(a.top, this.xb, this.sb), this.N = d.status, d.a && (d.a == this.l ? this.N = 2 : hg(this, d.a, a.top)))
        }
        V.prototype.M.call(this, a, b, c)
    };
    function fg(a) {
        var b = S.h(), c = Vc(a.j), d = b.b;
        c.p = [a.b.top + d.top, a.b.left + d.left, a.b.bottom + d.top, a.b.right + d.left];
        d = a.A;
        c.tos = cf(d.b);
        c.mtos = ef(d.b);
        c.mcvt = d.c.a;
        c.rs = a.ca;
        var e = 5 == a.ca;
        e || (c.ht = a.Oa);
        0 <= a.va && (c.tfs = a.va, c.tls = a.hb);
        c.mc = zf(d.a);
        c.lte = zf(a.Aa);
        c.bas = a.yb;
        c.bac = a.sa;
        d = N.h();
        b.c && (c["if"] = a.qa ? 0 : 1);
        if (null !== a.g) {
            b = a.g;
            var f = {};
            "none" != b.b && (f[b.b] = String(b.j));
            A(c, f)
        }
        e && a.m && (c.req = encodeURIComponent(a.m).substring(0, 100));
        a.Eb && (c.ci = "1");
        a.ga() && (c.la = "1");
        a.Qa && (c.pa = "1");
        c.avms = vf(a);
        a.w && A(c, a.w.R());
        0 != a.u && (c.md = a.u);
        null != L(d.a, "nio_mode") && (c.avms_sel = d.g, c.first_poll = d.j);
        e = a.J;
        0 < e && (c.rst = e);
        e = a.J;
        e = -1 == e || a.Da < e ? -1 : a.Da - e;
        0 <= e && (c.dlt = e);
        e = -1 == a.J || a.Wa < a.J ? -1 : a.Wa - a.J;
        0 <= e && (c.rpt = e);
        L(d.a, "cll") && (0 <= a.Sa && (c.isd = a.Sa), 0 <= a.Ba && (c.msd = a.Ba));
        (a = ig(a)) && (c.ext = a);
        return c
    }

    k.ka = function (a) {
        V.prototype.ka.call(this, a);
        null === this.g || Lf(this.g, a)
    };
    function hg(a, b, c) {
        a.l = b;
        a.ka(c)
    }

    function dg(a) {
        return null !== a.g && a.g.f
    }

    function jg(a, b) {
        if (null === a.g)switch (a.g = new Kf, a.Za) {
            case "iemv":
                Mf(a.g, b, function (b) {
                    var c = Ye(b && b.document);
                    null === c ? b = !1 : (a.M(b, !0), c = tf(a, c) >= (a.ga() ? .3 : .5), a.M(b, !1), b = c);
                    return b
                })
        }
    }

    function ig(a) {
        return a.U && 0 < ac(a.U).length ? encodeURIComponent(Da(ac(a.U), function (b) {
            return b + "=" + a.U[b]
        }).join("&")) : null
    }

    function kg(a, b) {
        b && $b(b, function (b, d) {
            null == b ? delete a.U[d] : a.U[d] = b
        })
    }

    function bg(a, b, c) {
        (b = a.Ob(b, c)) && kg(a, b)
    };
    function lg() {
        this.key = "goog_update_data";
        this.c = 0;
        this.b = !1
    }

    lg.prototype.a = function (a, b, c) {
        if (c != this.c || !a.s)return !1;
        c = {};
        c = (c[0] = this.key, c);
        A(c, b);
        b = X(a);
        if (1 == a.f)return b && !this.b ? (this.b = b, mg(a, c)) : !1;
        this.b = b;
        return mg(a, c)
    };
    function ng(a) {
        lg.call(this, a);
        this.key = "goog_image_request";
        this.c = 2
    }

    q(ng, lg);
    function og(a) {
        lg.call(this, a);
        this.key = "goog_image_request";
        this.c = 1
    }

    q(og, lg);
    og.prototype.a = function (a, b, c) {
        var d = !a.wa;
        if (X(a) && a.C || d) {
            if (b = lg.prototype.a.call(this, a, b, c))if (X(a) || (a.wa = !0), X(a) || a.C)a.C = !1;
            return b
        }
        return !1
    };
    function pg() {
        this.b = [];
        this.a = []
    }

    function qg() {
        var a = Y;
        return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : La(a.a, a.b)
    }

    pg.prototype.reset = function () {
        this.b = [];
        this.a = []
    };
    function rg() {
        return Fa(qg(), function () {
            return !1
        })
    }

    pa(pg);
    var Y = pg.h();

    function sg() {
        this.a = this.b = null
    }

    function tg(a, b) {
        function c(c, e) {
            a.a = null;
            b(c, e)
        }

        if (null == a.b)return !1;
        a.a = Ha(a.b, function (a) {
            return null != a && a.ia() && a.tb(c)
        });
        return null != a.a
    }

    pa(sg);
    var ug = {threshold: [0, .01, .02, .03, .04, .05, .06, .07, .08, .09, .1, .11, .12, .13, .14, .15, .16, .17, .18, .19, .2, .21, .22, .23, .24, .25, .26, .27, .28, .29, .3, .31, .32, .33, .34, .35, .36, .37, .38, .39, .4, .41, .42, .43, .44, .45, .46, .47, .48, .49, .5, .51, .52, .53, .54, .55, .56, .57, .58, .59, .6, .61, .62, .63, .64, .65, .66, .67, .68, .69, .7, .71, .72, .73, .74, .75, .76, .77, .78, .79, .8, .81, .82, .83, .84, .85, .86, .87, .88, .89, .9, .91, .92, .93, .94, .95, .96, .97, .98, .99, 1]};

    function vg(a, b, c, d) {
        ye.call(this, a, b, c, d);
        this.l = this.j = this.f = null
    }

    q(vg, ye);
    k = vg.prototype;
    k.T = function () {
        return "nio"
    };
    k.ta = function () {
        return !0
    };
    k.ab = function () {
        var a = this;
        this.l || (this.l = M());
        Ld(298, function () {
            return wg(a)
        }) || se(this.b, "msf")
    };
    k.bb = function () {
        if (this.f && this.a)try {
            this.f.unobserve(this.a)
        } catch (a) {
        }
    };
    function wg(a) {
        if (!a.a)return !1;
        var b = a.a;
        a.f = new a.b.a.IntersectionObserver(function (b) {
            return xg(a, b)
        }, ug);
        a.f.observe(b);
        2 === L(N.h().a, "nio_mode") && xg(a, a.f && a.f.takeRecords ? a.f.takeRecords() : []);
        return !0
    }

    k.da = function () {
        ye.prototype.da.call(this);
        if (2 === L(N.h().a, "nio_mode")) {
            var a = this.f && this.f.takeRecords ? this.f.takeRecords() : [];
            0 < a.length ? xg(this, a) : this.c = new me(this.c.l, this.c.m, this.c.a, this.c.f, this.c.g, this.c.b, this.c.c, this.b.a.performance.now(), this.c.j)
        }
    };
    function xg(a, b) {
        try {
            if (b.length) {
                a.j || (a.j = M());
                var c = yg(b), d = ge(c.boundingClientRect), e = oc(ge(c.intersectionRect), -d.left, -d.top), f = M(), g = c.boundingClientRect.width * c.boundingClientRect.height, h = c.intersectionRect.width * c.intersectionRect.height;
                var l = g ? h / g : 0;
                b = 0;
                var n = c.intersectionRect.width * c.intersectionRect.height, m = a.b.b.a;
                m && (b = (m.bottom - m.top) * (m.right - m.left));
                var x = c.intersectionRect.width * c.intersectionRect.height, H = window.screen.height * window.screen.width;
                a.c = new me(a.b.b, a.a, d, e, a.ta(), l, b ? n / b : 0, f, x && H ? x / H : 0)
            }
        } catch (fa) {
            a.bb(), Q(299, fa)
        }
    }

    function yg(a) {
        return Ea(a, function (a, c) {
            return a.time > c.time ? a : c
        }, a[0])
    }

    k.R = function () {
        var a = {};
        return Object.assign(this.b.R(), (a.niot_obs = this.l, a.niot_cbk = this.j, a))
    };
    function zg(a) {
        a = void 0 === a ? w : a;
        ze.call(this, new re(a, 2))
    }

    q(zg, ze);
    zg.prototype.T = function () {
        return "nio"
    };
    zg.prototype.ia = function () {
        var a = L(N.h().a, "nio_mode"), b = 2 === a;
        a = 1 === a;
        var c = S.h().c;
        return (b || a && c) && this.O()
    };
    zg.prototype.O = function () {
        return "exc" !== N.h().b && 1 != L(N.h().a, "inapp") && null != this.b.a.IntersectionObserver
    };
    zg.prototype.Pa = function (a, b, c) {
        return new vg(a, this.b, b, c)
    };
    var Ag = {}, Bg = (Ag[1] = function () {
        return new zg
    }, Ag);

    function Cg() {
        a:{
            var a = N.h().a;
            a = L(a, "mv");
            if (null != a && (a = Bg[a]) && (a = a()) && a.O())break a;
            a = null
        }
        this.a = a
    };
    function Dg(a, b, c) {
        U.call(this);
        this.f = null != c ? wa(a, c) : a;
        this.c = b;
        this.b = wa(this.Tb, this);
        this.a = []
    }

    za(Dg, U);
    k = Dg.prototype;
    k.Ja = !1;
    k.fa = null;
    k.nb = function (a) {
        this.a = arguments;
        this.fa ? this.Ja = !0 : Eg(this)
    };
    k.stop = function () {
        this.fa && (r.clearTimeout(this.fa), this.fa = null, this.Ja = !1, this.a = [])
    };
    k.P = function () {
        Dg.Db.P.call(this);
        this.stop()
    };
    k.Tb = function () {
        this.fa = null;
        this.Ja && (this.Ja = !1, Eg(this))
    };
    function Eg(a) {
        var b = a.b;
        var c = a.c;
        if (!sa(b))if (b && "function" == typeof b.handleEvent)b = wa(b.handleEvent, b); else throw Error("Invalid listener argument");
        b = 2147483647 < Number(c) ? -1 : r.setTimeout(b, c || 0);
        a.fa = b;
        a.f.apply(null, a.a)
    };
    function Fg() {
        this.done = !1;
        this.a = {kb: 0, Ma: 0, fb: 0, lb: 0, ua: -1};
        this.m = this.f = this.j = this.g = this.l = null;
        this.u = !1;
        this.s = "";
        this.b = null;
        this.w = 0;
        this.c = new pe(this)
    }

    function Gg() {
        var a = N.h().b;
        return "nio" == a || "aio" == a
    }

    function Hg(a, b) {
        var c = Z;
        if (!c.u) {
            c.u = !0;
            c.l || Gg() || (c.g = new Dg(P(137, function (a) {
                for (var b = [], d = 0; d < arguments.length; ++d)b[d] = arguments[d];
                return c.ob.apply(c, p(b))
            }), 100), c.l = R(a, "scroll", function (a) {
                for (var b = [], d = 0; d < arguments.length; ++d)b[d] = arguments[d];
                null !== c.g && c.g.nb.apply(c.g, p(b))
            }, 138));
            c.j || Gg() || (c.f = new Dg(P(140, function (a) {
                for (var b = [], d = 0; d < arguments.length; ++d)b[d] = arguments[d];
                return c.ob.apply(c, p(b))
            }), 100), c.j = R(a, "resize", function (a) {
                for (var b = [], d = 0; d < arguments.length; ++d)b[d] = arguments[d];
                null !== c.f && c.f.nb.apply(c.f, p(b))
            }, 141));
            if (b) {
                a = qg();
                for (var d = 0; d < a.length; ++d)b = a[d], b.a && Af(b)
            }
            Ig(c, function (a) {
                for (var b = [], d = 0; d < arguments.length; ++d)b[d] = arguments[d];
                return c.Ea.apply(c, p(b))
            });
            c.Ea()
        }
    }

    k = Fg.prototype;
    k.ob = function () {
        Jg(this, qg(), !1)
    };
    k.Cb = function () {
        Jg(this, qg(), !1)
    };
    function Kg() {
        var a = sg.h();
        null != a.a && a.a.b || (a = S.h(), a.b = zc(!1, w, a.f), a.a = zc(!0, w, a.f), a.j = a.a)
    }

    function Jg(a, b, c) {
        if (!a.done && (a.c.cancel(), 0 != b.length)) {
            a.b = null;
            var d = S.h();
            Kg();
            try {
                var e = M(), f = N.h();
                f.j = e;
                if (null != sg.h().a)for (d = 0; d < b.length; d++)wf(b[d], e, c); else switch (f.b) {
                    case "exc":
                        for (d = 0; d < b.length; d++)uf(b[d], e, c);
                        break;
                    case "nis":
                        for (d = 0; d < b.length; d++);
                        break;
                    case "gsv":
                        for (d = 0; d < b.length; d++);
                        break;
                    case "aio":
                    case "nio":
                        for (d = 0; d < b.length; d++)uf(b[d], e, c);
                        break;
                    case "iem":
                        for (d = 0; d < b.length; d++)sf(b[d], e, c);
                        break;
                    case "geo":
                        if (d.j)for (f = 0; f < b.length; f++)b[f].Gb(e, d.j, c, w, d.c)
                }
                for (d = 0; d < b.length; d++)xf(b[d]);
                a.a.fb += M() - e;
                ++a.a.lb;
                Lg(a)
            } finally {
                c ? y(b, function (a) {
                    return a.cb()
                }) : qe(a.c)
            }
        }
    }

    function Ig(a, b) {
        var c;
        v.visibilityState ? c = "visibilitychange" : v.mozVisibilityState ? c = "mozvisibilitychange" : v.webkitVisibilityState && (c = "webkitvisibilitychange");
        c && (a.m = a.m || R(v, c, b, 142))
    }

    k.Ea = function () {
        var a = Mg(), b = M();
        a ? (bd || ($c = b, y(Y.b, function (a) {
            return a.A.j(b, !a.f())
        })), bd = !0) : (this.w = Ng(this, b), bd = !1, y(Y.b, function (a) {
            a.G() && a.A.g(b)
        }));
        Jg(this, qg(), !a)
    };
    k.Yb = function (a) {
        var b;
        if (b = null != a.IntersectionObserver) {
            if (a = Og(a, "nio"))N.h().b = "nio";
            b = a
        }
        return b
    };
    k.Wb = function (a) {
        var b;
        if (b = Xe(a)) {
            if (a = Og(a, "aio"))N.h().b = "aio";
            b = a
        }
        return b
    };
    k.Xb = function (a) {
        return B && Db(8) && sa(Ye(a && a.document)) ? (N.h().b = "iem", !0) : !1
    };
    function Pg(a) {
        var b = Z;
        if (void 0 === c) {
            var c = N.h().a;
            var d = [];
            0 === (L(c, "nio_mode") || 0) && d.push(b.Yb);
            d.push(b.Wb);
            d.push(b.Xb);
            c = d
        }
        c = ba(c);
        for (d = c.next(); !d.done; d = c.next())if (d.value.call(b, a))return !0;
        return !1
    }

    function Mg() {
        if (rg())return !0;
        var a = Wd(), b = 1 === a;
        a = 0 === a;
        return N.h().c ? b : b || a
    }

    function Qg(a, b, c) {
        if (!a.b || c) {
            c = b.document;
            var d = 0 <= ad ? M() - ad : -1, e = M();
            -1 == a.a.ua && (d = e);
            var f = S.h(), g = Vc(N.h().a), h = qg();
            try {
                if (0 < h.length) {
                    var l = f.a;
                    l && (g.bs = [l.F(), l.D()]);
                    var n = f.g;
                    n && (g.ps = [n.width, n.height]);
                    b.screen && (g.ss = [b.screen.width, b.screen.height])
                } else g.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (g.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                g.tt = d;
                g.pt = ad;
                switch (N.h().b) {
                    case "iem":
                        g.iem = 1;
                        break;
                    case "aio":
                        g.aio = 1;
                        break;
                    case "nio":
                        g.nio = 1
                }
                g.deb = [1, a.a.kb, a.a.Ma, a.a.fb, a.a.lb, a.a.ua, Xd, a.c.b].join("-");
                g.tvt = Ng(a, e);
                if (null !== b && b != b.top) {
                    0 < h.length && (g.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var m = f.b;
                    g.is = [m.F(), m.D()]
                }
            } catch (H) {
                g.error = 1
            }
            a.b = g
        }
        a = a.b;
        b = {};
        for (var x in a)b[x] = a[x];
        return b
    }

    function Rg() {
        var a = new Cg;
        y(qg(), function (b) {
            if (b.a) {
                var c = a.a ? new Te(a.a, b.a, b.j, b.s || 0) : null;
                c && (b.Ta = c)
            }
        })
    }

    function Sg() {
        var a = sg.h();
        if (null != a.a) {
            var b = a.a;
            y(qg(), function (a) {
                var c = b.create(a.l, a.j, a);
                null != c && c.ab();
                c && (a.w = c)
            })
        }
    }

    function Og(a, b) {
        var c = qg();
        var d = void 0 === d ? oa : d;
        var e = !1;
        y(c, function (c) {
            a:{
                var f = d;
                if (f = void 0 === f ? oa : f)c.Ya = f;
                switch (b) {
                    case "nio":
                        c = Bf(c, a);
                        break a;
                    case "aio":
                        c = Df(c, a);
                        break a;
                    case "geo":
                    case "iem":
                        c = !0;
                        break a
                }
                c = !1
            }
            c && (e = !0)
        });
        return e
    }

    function Lg(a) {
        if ("osd" == a.s) {
            var b = Y.a, c = Qg(a, w), d = 1 == L(N.h().a, "mce");
            y(b, function (a) {
                if (d) {
                    var b = {};
                    $f(a, 0, (b.r = void 0, b))
                } else gg(a, c, "goog_update_data", void 0)
            })
        }
    }

    function Ng(a, b) {
        a = a.w;
        bd && (a += b - $c);
        return a
    }

    function Tg(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function Ug(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function Vg(a) {
        var b = Z;
        var c = void 0 === c ? function () {
            return {}
        } : c;
        1 === L(a, "neh") && (Id.g = "av-js", Dd.a = .01, Kd([function (a) {
            var d = N.h(), f = {};
            A(a, (f.bin = d.f, f.type = "error", f), Vc(d.a), Qg(b, w), c());
            if (d = Le())f = {}, A(a, (f.v = encodeURIComponent(d), f))
        }]))
    }

    pa(Fg);
    var Z = Fg.h();

    function Wg() {
    }

    function mg(a, b) {
        b = void 0 === b ? {} : b;
        var c = b.r, d = b[0], e = Qg(Z, G(), !1);
        A(e, gb(b, function (a, b) {
            return "r" != b && 0 != b
        }));
        b = eg(a, d, c, e);
        ke(a.a, b, a.ra);
        return !0
    };
    function Xg(a) {
        a = Yg(a);
        ze.call(this, a.length ? a[a.length - 1] : new re(window, 0));
        this.c = a;
        this.f = oa;
        this.a = null
    }

    q(Xg, ze);
    k = Xg.prototype;
    k.T = function () {
        return (this.a ? this.a : this.b).T()
    };
    k.R = function () {
        return (this.a ? this.a : this.b).R()
    };
    k.V = function () {
        return (this.a ? this.a : this.b).V()
    };
    k.tb = function (a) {
        this.f = a;
        y(this.c, function (a) {
            return a.qb()
        });
        ue(this.b, this);
        return !0
    };
    k.K = function () {
        y(this.c, function (a) {
            a.K()
        });
        ze.prototype.K.call(this)
    };
    k.ia = function () {
        return Fa(this.c, function (a) {
            return a.ia()
        })
    };
    k.O = function () {
        return Fa(this.c, function (a) {
            return a.O()
        })
    };
    k.Pa = function (a, b, c) {
        return new jf(a, this.b, b, c)
    };
    k.Y = function (a) {
        0 == a.V() && this.f(a.ea(), this)
    };
    k.W = function (a) {
        this.a = a.c
    };
    k.X = function () {
        return !1
    };
    function Yg(a) {
        if (!a.length)return [];
        a = Ca(a, function (a) {
            return null != a && a.ia()
        });
        for (var b = 1; b < a.length; b++)ue(a[b - 1], a[b]);
        return a
    };
    var ib = {
        Zb: "addEventListener",
        dc: "getMaxSize",
        ec: "getScreenSize",
        fc: "getState",
        gc: "getVersion",
        pc: "removeEventListener"
    };

    function Zg() {
        re.call(this, w, 2, "mraid");
        var a = this;
        this.N = 0;
        this.B = this.C = !1;
        this.m = null;
        this.j = 0;
        this.s = -1;
        this.c = null;
        var b = Ve(this.a);
        b && (this.c = b.Ia, this.s = b.Ka);
        this.c && !hb(function (b) {
            return sa(a.c[b])
        }) && (this.c = null, this.s = -1);
        this.b.a = new F(0, 0, 0, 0)
    }

    q(Zg, re);
    k = Zg.prototype;
    k.O = function () {
        return null != this.c
    };
    k.R = function () {
        var a = {};
        this.N && (a.mraid = this.N);
        this.C && (a.mlc = 1);
        this.s && (a.mtop = this.s);
        this.m && (a.mse = this.m);
        return a
    };
    k.ha = function (a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d];
        try {
            return this.c[a].apply(this.c, c)
        } catch (e) {
            Q("lidar::mraid_" + a, e)
        }
    };
    function $g(a, b, c) {
        a.ha("removeEventListener", b, c)
    }

    k.qb = function () {
        var a = this;
        if (!this.H) {
            this.H = !0;
            a:switch (this.s) {
                case 0:
                case 3:
                    var b = !0;
                    break a;
                default:
                    b = !1
            }
            b ? this.a.document.readyState && "complete" == this.a.document.readyState ? ah(this) : R(this.a, "load", function () {
                a.a.setTimeout(P(292, function () {
                    return ah(a)
                }), 100)
            }, 292) : se(this, "i")
        }
    };
    function ah(a) {
        "loading" === a.ha("getState") ? (bh(a), a.ha("addEventListener", "ready", ch)) : dh(a)
    }

    function bh(a) {
        0 == a.j && (a.j = w.setTimeout(P(293, function () {
            a.j = -1;
            $g(a, "ready", ch);
            Q("lidar::mraid_readyTimeout", Error());
            a.m = "rt";
            se(a, "w")
        }), 500))
    }

    function dh(a) {
        a.j = -1;
        t(a.c.AFMA_LIDAR) ? (a.C = !0, eh(a)) : (a.m = "nc", se(a, "w"))
    }

    function eh(a) {
        a.B = !1;
        w.setTimeout(P("lidar::measurementTimeout", function () {
            a.B || (fh(a), Q("lidar::mraid_measurementTimeout", Error()), a.m = "mt", se(a, "w"))
        }), 500);
        void 0 !== a.c.AFMA_LIDAR_EXP_1 && (a.c.AFMA_LIDAR_EXP_1 = !0);
        a.ha("addEventListener", a.c.AFMA_LIDAR, gh)
    }

    function fh(a) {
        $g(a, a.c.AFMA_LIDAR, gh);
        a.C = !1
    }

    k.ub = function () {
        return !0
    };
    k.vb = function () {
        var a = S.h(), b = hh(this, "getMaxSize");
        a.a = new F(0, b.width, b.height, 0)
    };
    k.wb = function () {
        S.h().m = hh(this, "getScreenSize")
    };
    function hh(a, b) {
        if ("loading" === a.ha("getState"))return new D(-1, -1);
        b = a.ha(b);
        if (!b)return new D(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new D(-1, -1) : new D(a, b)
    }

    k.K = function () {
        fh(this);
        re.prototype.K.call(this)
    };
    function ch() {
        try {
            var a = Zg.h();
            0 < a.j && w.clearTimeout(a.j);
            $g(a, "ready", ch);
            dh(a)
        } catch (b) {
            Q("lidar::onMraidReady", b)
        }
    }

    function gh(a, b) {
        try {
            var c = Zg.h();
            c.B = !0;
            var d = a ? new F(a.y, a.x + a.width, a.y + a.height, a.x) : new F(0, 0, 0, 0);
            var e = M();
            c.wb();
            c.vb();
            var f = S.h();
            f.b = zc(!1, c.a, f.f);
            oe(S.h(), c.a);
            var g = c.ub();
            var h = new le(e, g, c);
            h.a = d;
            h.volume = b;
            xe(c, h)
        } catch (l) {
            Q("lidar::mraid_measurementEvent", l)
        }
    }

    pa(Zg);
    function ih(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };
    var jh = Z.c;

    function kh() {
        this.b = null;
        this.f = this.j = this.c = this.g = !1;
        lh(this)
    }

    k = kh.prototype;
    k.Ub = function (a) {
        this.g = a
    };
    k.pb = function () {
        mh(this);
        G().clearTimeout(this.b);
        this.b = null;
        ad = M();
        nh(this)
    };
    function mh(a) {
        N.h().f = 1;
        if (!(0 < ad)) {
            try {
                if (!oh(a))return;
                Kg();
                ph(a)
            } catch (b) {
            }
            a.b = G().setTimeout(P(129, function () {
                return mh(a)
            }), 250)
        }
    }

    k.Vb = function (a, b, c, d, e, f, g, h, l) {
        var n = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        l = void 0 === l ? -1 : l;
        if (w && Date) {
            var m = new Xf(w, b, a, -1, c, g);
            e = N.h();
            -1 == e.g && (e.b = "ns");
            ag(m);
            0 < h && -1 == m.J && (m.J = h);
            0 <= l && (m.Sa = l);
            m.Ib = function (a) {
                for (var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
                return n.Qb.apply(n, p(b))
            };
            m.Ya = function (a) {
                for (var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
                return n.Va.apply(n, p(b))
            };
            13 != c && (m.s = Tg(b), m.ya = ih(b), m.xa = Ug(b));
            f && (m.Eb = !0);
            Vg(m.j);
            0 == Wd() ? this.Va(m, "pv") : (Y.a.push(m), ++Z.a.Ma, nh(this), b = L(e.a, "sel"), 1 == b ? Uc(m.j, "sela", d ? 1 : 0) : (2 == b && (d = Vd(a, "loadComplete")), d ? (qh(m), rh(m)) : a && Pd(a, function () {
                qh(m);
                rh(m)
            })))
        }
    };
    function ph(a) {
        sh(a);
        Hf(a.a, function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
            return a.Vb.apply(a, p(c))
        }, function () {
            return a.g
        }, function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
            return a.Ub.apply(a, p(c))
        })
    }

    function th(a) {
        N.h();
        var b = [Zg.h()];
        return [new Xg(b), new zg(a)]
    }

    function nh(a) {
        if (!a.f) {
            a.f = !0;
            try {
                var b = G(), c = S.h(), d = N.h();
                c.b = zc(!1, b, c.f);
                c.a = zc(!0, b, c.f);
                c.j = c.a;
                oe(c, b);
                ne(c, b);
                d.l = 947190542;
                if (d.c && 0 === Wd())uh(a, "pv"); else if (oh(a))if (Z.a.kb = If(a.a), c.l = !0, ph(a), 0 == Z.a.Ma)uh(a, "n"); else {
                    Rg();
                    d.g = M();
                    var e = sg.h();
                    if (null == e.b) {
                        var f = th(b);
                        e.b = f
                    }
                    tg(e, function (b) {
                        return uh(a, b)
                    }) ? Z.done || (Sg(), vh(a)) : ("ns" == d.b && (d.b = "geo"), c.c ? (Pg(b) || y(Y.a, function (b) {
                        a.Va(b, "i")
                    }), vh(a)) : (y(Y.a, function (a) {
                        var c = Math.random();
                        0 < jc && 0 > c - jc && B && Db(8) && sa(Ye(b && b.document)) && (a.Za = "iemv");
                        jg(a, b)
                    }), vh(a), vc()))
                } else uh(a, "c")
            } catch (g) {
                throw Y.reset(), uh(a, "x"), g;
            }
        }
    }

    function vh(a) {
        if (-1 == Z.a.ua) {
            var b = G(), c = 2 == Jf(a.a);
            Hg(b, c);
            b.setTimeout(P(131, function () {
                uh(a, "t")
            }), 36E5);
            Z.a.ua = M() - ad
        }
    }

    function uh(a, b) {
        if (!Z.done) {
            jh.cancel();
            a.a || (a.a = new Ff);
            if (2 == Jf(a.a) || a.c) {
                -1 == Z.a.ua && Y.reset();
                var c = Y.a;
                0 < c.length && Jg(Z, c, !0);
                a = 1 == L(N.h().a, "mce");
                c = ba(c);
                for (var d = c.next(); !d.done; d = c.next())if (d = d.value, a) {
                    var e = {};
                    $f(d, 1, (e.r = b, e))
                } else wh(d, b)
            }
            Z.done = !0
        }
    }

    function oh(a) {
        var b = G();
        if (!b.document.body || !b.document.body.getBoundingClientRect)return !1;
        b = new Ff;
        if (!(b.a || b.b || b.c))return !1;
        a.a = b;
        return !0
    }

    k.Va = function (a, b) {
        var c = 1 == L(N.h().a, "mce");
        a.qa = !0;
        c ? (c = {}, $f(a, 2, (c.r = b, c))) : 4 != a.f && 5 != a.f && wh(a, b, !0);
        a.ka(w)
    };
    k.Qb = function (a) {
        if (a && X(a) && (!a.b || 0 === a.b.left && 0 === a.b.right && 0 === a.b.top && 0 === a.b.bottom || 0 >= a.B ? 0 : null != a.La && null != a.La.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) && !a.zb)) {
            var b = a.La;
            if (ic())hc(window, b, !0); else {
                var c = r.document;
                if (c.body) {
                    var d = c.getElementById("goog-srcless-iframe");
                    d || (d = (new Kb(c)).a.createElement("IFRAME"), d.style.display = "none", d.id = "goog-srcless-iframe", c.body.appendChild(d));
                    c = d
                } else c = null;
                c && c.contentWindow && hc(c.contentWindow, b, !1)
            }
            a.zb = !0
        }
    };
    function rh(a) {
        if (!a.G()) {
            var b = M();
            a.Mb = b;
            a.$a();
            a.G() && Z.Ea()
        }
    }

    function xh(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if (t(c)) {
                var d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e], g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                            case 36:
                            case 26:
                            case 15:
                            case 8:
                            case 11:
                            case 16:
                            case 5:
                            case 18:
                                f = "true" == f;
                                break;
                            case 4:
                            case 33:
                            case 6:
                            case 25:
                            case 28:
                            case 29:
                            case 24:
                            case 31:
                            case 30:
                            case 23:
                            case 22:
                            case 7:
                            case 21:
                            case 20:
                                f = Number(f);
                                break;
                            case 19:
                            case 3:
                                if (sa(decodeURIComponent))try {
                                    f = decodeURIComponent(f)
                                } catch (m) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            } else d = null;
            if (c = d)if (e = c[0], Ja("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_av_measurement_hold_update goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = yh(new dd(c[4], c[12]))))if (0 < c[33] && -1 == d.Da && (d.Da = c[33]), "goog_stop_monitoring" === e)zh(d); else {
                h = c[26];
                void 0 === h || (h = !!h, f = Z, h && 1 == d.u) || !h && 1 != d.u || (h ? 1 != d.u && (d.u = 1, d.eb()) : d.G() || (1 === d.u && (d.u = 2), d.G() && f.Ea()));
                (c[35] || "goog_creative_loaded" === e) && rh(d);
                h = c[6];
                if (void 0 !== h) {
                    f = Ah(h, d.f);
                    d.f = f;
                    a:{
                        var l = new Wg;
                        g = new lg(l);
                        var n = new og(l);
                        l = new ng(l);
                        switch (f) {
                            case 0:
                            case 5:
                                f = [];
                                break a;
                            case 4:
                                f = [g];
                                break a;
                            default:
                                f = [g, n, l]
                        }
                    }
                    d.Jb = f
                }
                Ja(d.ra, b.source) || d.ra.push(b.source);
                void 0 !== c[16] && (d.C = !!c[16]);
                c[19] && (Yf(d, c[19]), Vg(d.j));
                if ("goog_request_monitoring" === e || 0 == d.f) {
                    if (5 == d.f) {
                        d.qa = !0;
                        zh(d);
                        return
                    }
                    b = S.h().c;
                    c = eg(d, "goog_acknowledge_monitoring");
                    c[8] = b;
                    c[36] = !b || Xe(w);
                    ke(d.a, c, d.ra);
                    4 == d.f && rh(d)
                }
                4 == d.f && S.h().c ? zh(d) : h && 0 != h && (a.c = !0)
            }
        }
    }

    function qh(a) {
        var b;
        if (b = a)b = new dd(a.s, a.ya), b = !!b.b || !!b.a;
        b && (b = eg(a, "goog_get_mode"), ke(a.a, b))
    }

    function sh(a) {
        if (!a.j) {
            R(w, "message", function (b) {
                return xh(a, b)
            }, 132);
            var b = Bh().contentWindow;
            b && R(b, "message", function (b) {
                return xh(a, b)
            }, 132);
            a.j = !0
        }
    }

    function Ch() {
        var a = Dh;
        R(G(), "unload", function () {
            uh(a, "u")
        }, 133)
    }

    function Ah(a, b) {
        return Ha([5, 4, 2, 3, 1, 0], function (c) {
                return c === a || c === b
            }) || 0
    }

    function wh(a, b, c) {
        if (4 != a.f) {
            var d = !c && X(a), e = d && a.C, f = !a.wa;
            a && a.s && (c || f || e) && (e = Qg(Z, G(), !1), gg(a, e, "goog_image_request", b), c || d || (a.wa = !0), d || !c && a.C) && (a.C = !1)
        }
    }

    k.Rb = function (a, b) {
        b = void 0 === b ? !1 : b;
        if (a = Eh(a)) {
            var c = G();
            a.ka(c);
            try {
                var d = a.a;
                if (null != d.contentWindow && 3 == a.ca && 4 != a.f) {
                    var e = fg(a);
                    e.adk = a.s;
                    e.adf = a.xa;
                    0 === a.ba && (e.invis = 1);
                    e.r = "u";
                    var f = Qg(Z, c, !1);
                    A(e, f);
                    if (b)1 == L(N.h().a, "mce") ? (b = {}, $f(a, 1, (b.r = "u", b))) : wh(a, "u"); else try {
                        c.google_image_requests || (c.google_image_requests = []), d.contentWindow.osdsir(c, e, a.qa || 0 >= a.B ? 2 : X(a) ? 4 : 3)
                    } catch (g) {
                    }
                }
            } finally {
                zh(a)
            }
        }
    };
    k.Sb = function (a, b) {
        if (a && b && ta(a) && 1 == a.nodeType && ta(b) && 1 == b.nodeType) {
            var c = Ha(Y.a, function (b) {
                return b.a == a
            });
            c && hg(c, b, G())
        }
    };
    function yh(a) {
        return Ha(Y.a, function (b) {
            b = new dd(b.s, b.ya);
            return a.a || b.a ? a.a == b.a : a.b || b.b ? a.b == b.b : !1
        })
    }

    function zh(a) {
        var b = Ia(Y.a, function (b) {
            return b == a
        });
        -1 != b && (Y.a.splice(b, 1), a.ka(w), a.K())
    }

    function Eh(a) {
        if (!a)return null;
        var b = Ia(Y.a, function (b) {
            return b.a == a
        });
        return -1 === b ? null : Y.a[b]
    }

    function Bh() {
        var a = Rb("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        w.document.body.appendChild(a);
        return a
    }

    function lh(a) {
        ya("Goog_Osd_UnloadAdBlock", P(134, function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
            return a.Rb.apply(a, p(c))
        }));
        ya("Goog_Osd_UpdateElementToMeasure", P(135, function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
            return a.Sb.apply(a, p(c))
        }))
    };
    var Dh = new kh;
    Ld(155, function () {
        Z.s = "osd";
        Ch();
        wc() ? Dh.pb() : (mh(Dh), R(G(), "load", function () {
            window.setTimeout(P(153, function (a) {
                for (var b = [], c = 0; c < arguments.length; ++c)b[c] = arguments[c];
                return Dh.pb.apply(Dh, p(b))
            }), 100)
        }, 154))
    });
}).call(this);
