(function (_) {
    var window = this, document = this.document;
    var ca, fa, ha, ka, la, ma, oa, pa, ta, za, ya, xa, Ba, Ca, Ia, Ga, Ha, Ja, Ka, Ma, Na;
    _.l = function (a) {
        return function () {
            return _.aa[a].apply(this, arguments)
        }
    };
    ca = function (a) {
        return a ? a.passive && ba() ? a : a.capture || !1 : !1
    };
    fa = function (a) {
        return da(_.q.top, a) || da(ea(), a)
    };
    ha = function (a) {
        a = _.r(a.split(/\s+/), function (a) {
            return (a = /^(-?\d+)(px|%)$/.exec(a)) ? {value: (0, window.parseFloat)(a[1]), type: a[2]} : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    ka = function (a) {
        if (!a)return [0];
        a = _.t(a) ? [a] : a;
        a = _.u(a, function (a) {
            return _.t(a) && 0 <= a && 1 >= a ? !0 : !1
        });
        _.ia(a);
        ja(a, function (a, c) {
            return a - c
        });
        return a
    };
    la = function (a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
        }
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0}
    };
    _.aa = [];
    ma = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    };
    _.na = function (a) {
        if (!(a instanceof Array)) {
            var b = "undefined" != typeof window.Symbol && window.Symbol.iterator && a[window.Symbol.iterator];
            a = b ? b.call(a) : {next: ma(a)};
            for (var c = []; !(b = a.next()).done;)c.push(b.value);
            a = c
        }
        return a
    };
    oa = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    };
    if ("function" == typeof Object.setPrototypeOf)pa = Object.setPrototypeOf; else {
        var qa;
        a:{
            var ra = {a: !0}, sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {
            }
            qa = !1
        }
        pa = qa ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    ta = pa;
    _.v = function (a, b) {
        a.prototype = oa(b.prototype);
        a.prototype.constructor = a;
        if (ta)ta(a, b); else for (var c in b)if ("prototype" != c)if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.va = b.prototype
    };
    _.q = this;
    _.ua = function (a) {
        return void 0 !== a
    };
    _.w = function (a) {
        return "string" == typeof a
    };
    _.wa = function (a) {
        return "boolean" == typeof a
    };
    _.t = function (a) {
        return "number" == typeof a
    };
    za = function () {
        if (null === xa) {
            a:{
                var a = _.q.document;
                if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ya.test(a))break a;
                a = null
            }
            xa = a || ""
        }
        return xa
    };
    ya = /^[\w+/_-]+[=]{0,2}$/;
    xa = null;
    _.Aa = function () {
    };
    Ba = function (a) {
        a.Da = void 0;
        a.L = function () {
            return a.Da ? a.Da : a.Da = new a
        }
    };
    Ca = function (a) {
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
    };
    _.y = function (a) {
        return "array" == Ca(a)
    };
    _.Da = function (a) {
        var b = Ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.Ea = function (a) {
        return "function" == Ca(a)
    };
    _.Fa = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    Ia = function (a) {
        return a[Ga] || (a[Ga] = ++Ha)
    };
    Ga = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Ha = 0;
    Ja = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Ka = function (a, b, c) {
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
    };
    _.La = function (a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.La = Ja : _.La = Ka;
        return _.La.apply(null, arguments)
    };
    Ma = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    };
    Na = function (a, b) {
        for (var c in b)a[c] = b[c]
    };
    _.Oa = function () {
        return +new Date
    };
    _.Pa = function (a, b) {
        a = a.split(".");
        var c = _.q;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)!a.length && _.ua(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    };
    _.Qa = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.va = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.te = function (a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var Ra = window.document, Sa = window;
    var Ta;
    var Ua, Va, Wa, Xa, Za, Ya, ab, $a, cb, fb, hb, ja, kb, ib, lb, mb, pb;
    Ua = function (a, b) {
        if (_.w(a))return _.w(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)if (c in a && a[c] === b)return c;
        return -1
    };
    _.z = function (a, b, c) {
        for (var d = a.length, e = _.w(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    };
    _.u = function (a, b) {
        for (var c = a.length, d = [], e = 0, f = _.w(a) ? a.split("") : a, g = 0; g < c; g++)if (g in f) {
            var k = f[g];
            b.call(void 0, k, g, a) && (d[e++] = k)
        }
        return d
    };
    _.r = function (a, b) {
        for (var c = a.length, d = Array(c), e = _.w(a) ? a.split("") : a, f = 0; f < c; f++)f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };
    Va = function (a, b, c) {
        var d = c;
        _.z(a, function (c, f) {
            d = b.call(void 0, d, c, f, a)
        });
        return d
    };
    Wa = function (a, b) {
        for (var c = a.length, d = _.w(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a))return !0;
        return !1
    };
    Xa = function (a, b) {
        for (var c = a.length, d = _.w(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && !b.call(void 0, d[e], e, a))return !1;
        return !0
    };
    Za = function (a, b) {
        b = Ya(a, b);
        return 0 > b ? null : _.w(a) ? a.charAt(b) : a[b]
    };
    Ya = function (a, b) {
        for (var c = a.length, d = _.w(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a))return e;
        return -1
    };
    ab = function (a, b) {
        b = $a(a, b, void 0);
        return 0 > b ? null : _.w(a) ? a.charAt(b) : a[b]
    };
    $a = function (a, b, c) {
        var d = a.length, e = _.w(a) ? a.split("") : a;
        for (--d; 0 <= d; d--)if (d in e && b.call(c, e[d], d, a))return d;
        return -1
    };
    _.bb = function (a, b) {
        return 0 <= Ua(a, b)
    };
    cb = function (a, b) {
        _.bb(a, b) || a.push(b)
    };
    _.eb = function (a, b) {
        b = Ua(a, b);
        0 <= b && _.db(a, b)
    };
    _.db = function (a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    };
    fb = function (a, b) {
        b = Ya(a, b);
        0 <= b && _.db(a, b)
    };
    _.gb = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
            return c
        }
        return []
    };
    hb = function (a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    _.ia = function (a, b, c) {
        b = b || a;
        var d = function (a) {
            return _.Fa(a) ? "o" + Ia(a) : (typeof a).charAt(0) + a
        };
        c = c || d;
        d = {};
        for (var e = 0, f = 0; f < a.length;) {
            var g = a[f++], k = c(g);
            Object.prototype.hasOwnProperty.call(d, k) || (d[k] = !0, b[e++] = g)
        }
        b.length = e
    };
    ja = function (a, b) {
        a.sort(b || ib)
    };
    kb = function (a) {
        for (var b = jb, c = Array(a.length), d = 0; d < a.length; d++)c[d] = {index: d, value: a[d]};
        var e = b || ib;
        ja(c, function (a, b) {
            return e(a.value, b.value) || a.index - b.index
        });
        for (d = 0; d < a.length; d++)a[d] = c[d].value
    };
    ib = function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    lb = function (a, b) {
        return a === b
    };
    mb = function (a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d], f = b.call(void 0, e, d, a);
            _.ua(f) && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    pb = function () {
        for (var a = nb(ob).length, b = [], c = 0; c < a; c++)b[c] = 0;
        return b
    };
    var qb, rb, tb, ub, vb, wb, xb, yb, sb, Bb, Cb;
    qb = function (a) {
        return /^[\s\xa0]*$/.test(a)
    };
    rb = function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    _.Ab = function (a) {
        if (!sb.test(a))return a;
        -1 != a.indexOf("&") && (a = a.replace(tb, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(ub, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(vb, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(wb, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(xb, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(yb, "&#0;"));
        return a
    };
    tb = /&/g;
    ub = /</g;
    vb = />/g;
    wb = /"/g;
    xb = /'/g;
    yb = /\x00/g;
    sb = /[\x00&<>"']/;
    Bb = function (a) {
        return null == a ? "" : String(a)
    };
    _.Db = function (a, b) {
        var c = 0;
        a = rb(String(a)).split(".");
        b = rb(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "", g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length)break;
                c = Cb(0 == f[1].length ? 0 : (0, window.parseInt)(f[1], 10), 0 == g[1].length ? 0 : (0, window.parseInt)(g[1], 10)) || Cb(0 == f[2].length, 0 == g[2].length) || Cb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    };
    Cb = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Eb, Hb;
    a:{
        var Fb = _.q.navigator;
        if (Fb) {
            var Gb = Fb.userAgent;
            if (Gb) {
                Eb = Gb;
                break a
            }
        }
        Eb = ""
    }
    _.B = function (a) {
        return -1 != Eb.indexOf(a)
    };
    Hb = function (a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);)c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    var Jb, Kb, Lb, Mb, Nb, Ob;
    _.Ib = function (a, b) {
        for (var c in a)b.call(void 0, a[c], c, a)
    };
    Jb = function (a, b) {
        var c = {}, d;
        for (d in a)b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    };
    Kb = function (a, b) {
        for (var c in a)if (b.call(void 0, a[c], c, a))return !0;
        return !1
    };
    Lb = function (a, b) {
        return null !== a && b in a
    };
    Mb = function (a, b) {
        for (var c in a)if (a[c] == b)return !0;
        return !1
    };
    Nb = function (a, b) {
        for (var c in a)if (b.call(void 0, a[c], c, a))return c
    };
    Ob = function (a) {
        var b = {}, c;
        for (c in a)b[c] = a[c];
        return b
    };
    var Rb, Qb, Sb;
    _.Pb = function () {
        return _.B("Trident") || _.B("MSIE")
    };
    Rb = function () {
        return _.B("Safari") && !(Qb() || _.B("Coast") || _.B("Opera") || _.B("Edge") || _.B("Silk") || _.B("Android"))
    };
    Qb = function () {
        return (_.B("Chrome") || _.B("CriOS")) && !_.B("Edge")
    };
    _.Tb = function () {
        function a(a) {
            a = Za(a, d);
            return c[a] || ""
        }

        var b = Eb;
        if (_.Pb())return Sb(b);
        b = Hb(b);
        var c = {};
        _.z(b, function (a) {
            c[a[0]] = a[1]
        });
        var d = Ma(Lb, c);
        return _.B("Opera") ? a(["Version", "Opera"]) : _.B("Edge") ? a(["Edge"]) : Qb() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    };
    Sb = function (a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1])return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])if (a && a[1])switch (a[1]) {
            case "4.0":
                b = "8.0";
                break;
            case "5.0":
                b = "9.0";
                break;
            case "6.0":
                b = "10.0";
                break;
            case "7.0":
                b = "11.0"
        } else b = "7.0"; else b = c[1];
        return b
    };
    var Ub = function () {
        return _.B("iPhone") && !_.B("iPod") && !_.B("iPad")
    };
    var Vb = function (a) {
        Vb[" "](a);
        return a
    };
    Vb[" "] = _.Aa;
    var Wb = function (a, b) {
        try {
            return Vb(a[b]), !0
        } catch (c) {
        }
        return !1
    }, Yb = function (a, b) {
        var c = Xb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var ac, bc, gc, hc, ic, jc, kc, oc, Xb;
    _.Zb = _.B("Opera");
    _.$b = _.Pb();
    ac = _.B("Edge");
    bc = ac || _.$b;
    _.cc = _.B("Gecko") && !(-1 != Eb.toLowerCase().indexOf("webkit") && !_.B("Edge")) && !(_.B("Trident") || _.B("MSIE")) && !_.B("Edge");
    _.dc = -1 != Eb.toLowerCase().indexOf("webkit") && !_.B("Edge");
    _.ec = _.dc && _.B("Mobile");
    _.fc = _.B("Android");
    gc = Ub();
    hc = _.B("iPad");
    ic = _.B("iPod");
    jc = function () {
        var a = _.q.document;
        return a ? a.documentMode : void 0
    };
    a:{
        var lc = "", mc = function () {
            var a = Eb;
            if (_.cc)return /rv:([^\);]+)(\)|;)/.exec(a);
            if (ac)return /Edge\/([\d\.]+)/.exec(a);
            if (_.$b)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (_.dc)return /WebKit\/(\S+)/.exec(a);
            if (_.Zb)return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        mc && (lc = mc ? mc[1] : "");
        if (_.$b) {
            var nc = jc();
            if (null != nc && nc > (0, window.parseFloat)(lc)) {
                kc = String(nc);
                break a
            }
        }
        kc = lc
    }
    oc = kc;
    Xb = {};
    _.pc = function (a) {
        return Yb(a, function () {
            return 0 <= _.Db(oc, a)
        })
    };
    var rc = _.q.document;
    _.qc = rc && _.$b ? jc() || ("CSS1Compat" == rc.compatMode ? (0, window.parseInt)(oc, 10) : 5) : void 0;
    var sc = Qb(), tc = Rb() && !(Ub() || _.B("iPad") || _.B("iPod"));
    var uc = null, vc = null, wc = _.cc || _.dc && !tc || _.Zb || "function" == typeof _.q.btoa, xc = function (a, b) {
        if (!uc) {
            uc = {};
            vc = {};
            for (var c = 0; 65 > c; c++)uc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), vc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
        }
        b = b ? vc : uc;
        c = [];
        for (var d = 0; d < a.length; d += 3) {
            var e = a[d], f = d + 1 < a.length, g = f ? a[d + 1] : 0, k = d + 2 < a.length, m = k ? a[d + 2] : 0, p = e >> 2;
            e = (e & 3) << 4 | g >> 4;
            g = (g & 15) << 2 | m >> 6;
            m &= 63;
            k || (m = 64, f || (g = 64));
            c.push(b[p], b[e], b[g], b[m])
        }
        return c.join("")
    };
    var yc = 0, zc = 0;
    var Ac = function () {
        this.za = []
    };
    Ac.prototype.length = function () {
        return this.za.length
    };
    var Bc = function (a, b) {
        for (; 127 < b;)a.za.push(b & 127 | 128), b >>>= 7;
        a.za.push(b)
    };
    var Cc = function () {
        this.m = [];
        this.za = new Ac
    }, Dc = function (a, b, c) {
        if (null != c) {
            Bc(a.za, 8 * b);
            a = a.za;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            yc = b;
            zc = d;
            c = yc;
            for (b = zc; 0 < b || 127 < c;)a.za.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.za.push(c)
        }
    };
    var Fc, Gc, Hc, Kc, Lc, Mc, Ic, Oc, Pc;
    _.Ec = function () {
    };
    Fc = "function" == typeof window.Uint8Array;
    _.Jc = function (a, b, c, d) {
        a.za = null;
        b || (b = []);
        a.B = void 0;
        a.u = -1;
        a.m = b;
        a:{
            if (b = a.m.length) {
                --b;
                var e = a.m[b];
                if (!(null === e || "object" != typeof e || _.y(e) || Fc && e instanceof window.Uint8Array)) {
                    a.v = b - a.u;
                    a.o = e;
                    break a
                }
            }
            a.v = Number.MAX_VALUE
        }
        a.w = {};
        if (c)for (b = 0; b < c.length; b++)e = c[b], e < a.v ? (e += a.u, a.m[e] = a.m[e] || Gc) : (Hc(a), a.o[e] = a.o[e] || Gc);
        if (d && d.length)for (b = 0; b < d.length; b++)Ic(a, d[b])
    };
    Gc = [];
    Hc = function (a) {
        var b = a.v + a.u;
        a.m[b] || (a.o = a.m[b] = {})
    };
    Kc = function (a, b) {
        if (b < a.v) {
            b += a.u;
            var c = a.m[b];
            return c === Gc ? a.m[b] = [] : c
        }
        if (a.o)return c = a.o[b], c === Gc ? a.o[b] = [] : c
    };
    Lc = function (a, b) {
        if (b < a.v) {
            b += a.u;
            var c = a.m[b];
            return c === Gc ? a.m[b] = [] : c
        }
        c = a.o[b];
        return c === Gc ? a.o[b] = [] : c
    };
    Mc = function (a, b, c) {
        a = Kc(a, b);
        return null == a ? c : a
    };
    _.Nc = function (a, b, c) {
        b < a.v ? a.m[b + a.u] = c : (Hc(a), a.o[b] = c)
    };
    Ic = function (a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e], g = Kc(a, f);
            null != g && (c = f, d = g, _.Nc(a, f, void 0))
        }
        return c ? (_.Nc(a, c, d), c) : 0
    };
    Oc = function (a, b, c) {
        a.za || (a.za = {});
        if (!a.za[c]) {
            var d = Kc(a, c);
            d && (a.za[c] = new b(d))
        }
        return a.za[c]
    };
    Pc = function (a, b, c) {
        a.za || (a.za = {});
        if (!a.za[c]) {
            for (var d = Lc(a, c), e = [], f = 0; f < d.length; f++)e[f] = new b(d[f]);
            a.za[c] = e
        }
        b = a.za[c];
        b == Gc && (b = a.za[c] = []);
        return b
    };
    _.Qc = function (a) {
        if (a.za)for (var b in a.za) {
            var c = a.za[b];
            if (_.y(c))for (var d = 0; d < c.length; d++)c[d] && _.Qc(c[d]); else c && _.Qc(c)
        }
        return a.m
    };
    var Sc = function (a) {
        _.Jc(this, a, Rc, null)
    };
    _.Qa(Sc, _.Ec);
    var Rc = [1, 2, 3, 4];
    var Tc = function () {
        this.za = window.document || {cookie: ""}
    };
    Tc.prototype.set = function (a, b, c, d, e, f) {
        if (/[;=\s]/.test(a))throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))throw Error('Invalid cookie value "' + b + '"');
        _.ua(c) || (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(_.Oa() + 1E3 * c)).toUTCString();
        this.za.cookie = a + "=" + b + e + d + c + f
    };
    Tc.prototype.get = function (a, b) {
        for (var c = a + "=", d = (this.za.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = rb(d[e]);
            if (0 == f.lastIndexOf(c, 0))return f.substr(c.length);
            if (f == a)return ""
        }
        return b
    };
    var Uc = function () {
        this.za = new Tc
    };
    Uc.prototype.get = function (a) {
        a = this.za.get(a);
        return void 0 === a ? null : a
    };
    Uc.prototype.set = function (a, b) {
        this.za.set(a, b, 0, "", "")
    };
    var Vc = function () {
        var a = new Uc;
        try {
            var b = a.get("DATA_USE_CONSENT")
        } catch (c) {
        }
        if (!b)return null;
        try {
            return new Sc(b ? JSON.parse(b) : null)
        } catch (c) {
            return null
        }
    };
    _.C = {
        wa: function (a) {
            return function () {
                return a
            }
        }, qd: function () {
            return !1
        }, nb: function () {
            return !0
        }, Kd: function () {
            return null
        }, Cc: function (a) {
            return a
        }, error: function (a) {
            return function () {
                throw Error(a);
            }
        }, ye: function (a) {
            return function () {
                throw a;
            }
        }, lock: function (a, b) {
            b = b || 0;
            return function () {
                return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
            }
        }, Ae: function (a) {
            return function () {
                return arguments[a]
            }
        }, Be: function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
                var b = Array.prototype.slice.call(arguments);
                b.push.apply(b, c);
                return a.apply(this, b)
            }
        }, Fe: function (a, b) {
            return _.C.Nc(a, _.C.wa(b))
        }, xe: function (a, b) {
            return function (c) {
                return b ? a == c : a === c
            }
        }, ve: function (a, b) {
            var c = arguments, d = c.length;
            return function () {
                var a;
                d && (a = c[d - 1].apply(this, arguments));
                for (var b = d - 2; 0 <= b; b--)a = c[b].call(this, a);
                return a
            }
        }, Nc: function (a) {
            var b = arguments, c = b.length;
            return function () {
                for (var a, e = 0; e < c; e++)a = b[e].apply(this, arguments);
                return a
            }
        }, and: function (a) {
            var b = arguments, c = b.length;
            return function () {
                for (var a = 0; a < c; a++)if (!b[a].apply(this, arguments))return !1;
                return !0
            }
        }, or: function (a) {
            var b = arguments, c = b.length;
            return function () {
                for (var a = 0; a < c; a++)if (b[a].apply(this, arguments))return !0;
                return !1
            }
        }, ze: function (a) {
            return function () {
                return !a.apply(this, arguments)
            }
        }, create: function (a, b) {
            var c = function () {
            };
            c.prototype = a.prototype;
            c = new c;
            a.apply(c, Array.prototype.slice.call(arguments, 1));
            return c
        }, rc: !0, X: function (a) {
            var b = !1, c;
            return function () {
                if (!_.C.rc)return a();
                b || (c = a(), b = !0);
                return c
            }
        }, once: function (a) {
            var b = a;
            return function () {
                if (b) {
                    var a = b;
                    b = null;
                    a()
                }
            }
        }, we: function (a, b, c) {
            var d = 0;
            return function (e) {
                _.q.clearTimeout(d);
                var f = arguments;
                d = _.q.setTimeout(function () {
                    a.apply(c, f)
                }, b)
            }
        }, ib: function (a, b, c) {
            var d = 0, e = !1, f = [], g = function () {
                d = 0;
                e && (e = !1, k())
            }, k = function () {
                d = _.q.setTimeout(g, b);
                a.apply(c, f)
            };
            return function (a) {
                f = arguments;
                d ? e = !0 : k()
            }
        }, Ce: function (a, b, c) {
            var d = 0, e = function () {
                d = 0
            };
            return function (f) {
                d || (d = _.q.setTimeout(e, b), a.apply(c, arguments))
            }
        }
    };
    var Xc, Yc;
    _.Wc = !_.$b || 9 <= Number(_.qc);
    Xc = !_.cc && !_.$b || _.$b && 9 <= Number(_.qc) || _.cc && _.pc("1.9.1");
    Yc = _.$b || _.Zb || _.dc;
    var $c = function () {
        this.za = "";
        this.m = Zc
    };
    $c.prototype.vb = !0;
    $c.prototype.cb = function () {
        return this.za
    };
    var ad = function (a) {
        if (a instanceof $c && a.constructor === $c && a.m === Zc)return a.za;
        Ca(a);
        return "type_error:TrustedResourceUrl"
    }, Zc = {};
    var cd = function () {
        this.ub = "";
        this.xc = bd
    };
    cd.prototype.vb = !0;
    cd.prototype.cb = function () {
        return this.ub
    };
    var dd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, bd = {}, ed = function (a) {
        var b = new cd;
        b.ub = a;
        return b
    };
    ed("about:blank");
    var fd = function (a, b) {
        a.src = ad(b);
        (b = za()) && a.setAttribute("nonce", b)
    };
    _.gd = function (a, b) {
        this.x = _.ua(a) ? a : 0;
        this.y = _.ua(b) ? b : 0
    };
    _.gd.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.gd.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.gd.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.hd = function (a, b) {
        this.width = a;
        this.height = b
    };
    _.h = _.hd.prototype;
    _.h.Lb = _.l(29);
    _.h.aspectRatio = function () {
        return this.width / this.height
    };
    _.h.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.h.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.h.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var qd;
    _.kd = function (a) {
        return a ? new _.id(_.jd(a)) : Ta || (Ta = new _.id)
    };
    _.md = function (a) {
        a = a.document;
        a = _.ld(a) ? a.documentElement : a.body;
        return new _.hd(a.clientWidth, a.clientHeight)
    };
    _.nd = function (a) {
        return a.scrollingElement ? a.scrollingElement : !_.dc && _.ld(a) ? a.documentElement : a.body || a.documentElement
    };
    _.od = function (a) {
        return a.parentWindow || a.defaultView
    };
    _.ld = function (a) {
        return "CSS1Compat" == a.compatMode
    };
    _.pd = function (a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    qd = function (a) {
        return Xc && void 0 != a.children ? a.children : _.u(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    };
    _.rd = function (a) {
        var b;
        if (Yc && !(_.$b && _.pc("9") && !_.pc("10") && _.q.SVGElement && a instanceof _.q.SVGElement) && (b = a.parentElement))return b;
        b = a.parentNode;
        return _.Fa(b) && 1 == b.nodeType ? b : null
    };
    _.jd = function (a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.id = function (a) {
        this.za = a || _.q.document || window.document
    };
    _.id.prototype.m = _.l(30);
    _.sd = function (a, b) {
        return a.za.createElement(String(b))
    };
    var ud = function (a) {
        td();
        var b = new $c;
        b.za = a;
        return b
    }, td = _.Aa;
    var vd = function () {
        return _.B("iPad") || _.B("Android") && !_.B("Mobile") || _.B("Silk")
    };
    var wd, yd, ea, xd, zd, Fd, Ed, Hd, nb, Id, Kd, Dd, Cd, Ld, Nd, Od, Qd, Rd, Sd, Td, Ud, Vd, da, Wd, Yd;
    wd = function (a) {
        try {
            return !!a && null != a.location.href && Wb(a, "foo")
        } catch (b) {
            return !1
        }
    };
    yd = function (a) {
        for (var b = _.q, c = 0; b && 40 > c++ && (!wd(b) || !a(b));)b = xd(b)
    };
    ea = function () {
        var a = _.q;
        yd(function (b) {
            a = b;
            return !1
        });
        return a
    };
    xd = function (a) {
        try {
            var b = a.parent;
            if (b && b != a)return b
        } catch (c) {
        }
        return null
    };
    zd = function (a) {
        return wd(a.top) ? a.top : null
    };
    _.Ad = function (a, b) {
        var c = a.createElement("script");
        fd(c, ud(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    _.Bd = function (a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    Fd = function (a, b, c) {
        var d = !1;
        void 0 === c || c || (d = Cd());
        return !d && !Dd() && (c = Math.random(), c < b) ? (c = Ed(), a[Math.floor(c * a.length)]) : null
    };
    Ed = function () {
        if (!_.q.crypto)return Math.random();
        try {
            var a = new window.Uint32Array(1);
            _.q.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.D = function (a, b, c) {
        if (a)for (var d in a)Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
    };
    _.Gd = function (a) {
        for (var b in a)if (Object.prototype.hasOwnProperty.call(a, b))return !1;
        return !0
    };
    Hd = function (a) {
        var b = 0;
        _.D(a, function () {
            b++
        });
        return b
    };
    nb = function (a) {
        var b = [];
        _.D(a, function (a, d) {
            b.push(d)
        });
        return b
    };
    Id = function (a) {
        var b = [];
        _.D(a, function (a) {
            b.push(a)
        });
        return b
    };
    _.Jd = function (a, b) {
        return Nb(a, function (c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    Kd = function (a) {
        var b = a.length;
        if (0 == b)return 0;
        for (var c = 305419896, d = 0; d < b; d++)c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    Dd = _.C.X(function () {
        return -1 != Eb.indexOf("Google Web Preview") || 1E-4 > Math.random()
    });
    Cd = _.C.X(function () {
        return -1 != Eb.indexOf("MSIE")
    });
    Ld = /^(-?[0-9.]{1,30})$/;
    _.Md = function (a, b) {
        return Ld.test(a) && (a = Number(a), !(0, window.isNaN)(a)) ? a : void 0 == b ? null : b
    };
    Nd = function () {
        return /^true$/.test("false")
    };
    Od = function (a, b) {
        try {
            for (var c = null; c != a; c = a, a = a.parent)switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !!b;
                case "http:":
                    return !1
            }
        } catch (d) {
        }
        return !0
    };
    _.Pd = function (a) {
        if (!a)return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec((0, window.decodeURIComponent)(a));
            if (c)return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {
        }
        return ""
    };
    Qd = {
        Rc: "allow-forms",
        Sc: "allow-modals",
        Tc: "allow-orientation-lock",
        Uc: "allow-pointer-lock",
        Vc: "allow-popups",
        Wc: "allow-popups-to-escape-sandbox",
        Xc: "allow-presentation",
        Yc: "allow-same-origin",
        Zc: "allow-scripts",
        $c: "allow-top-navigation",
        ad: "allow-top-navigation-by-user-activation"
    };
    Rd = _.C.X(function () {
        return Id(Qd)
    });
    Sd = function (a) {
        var b = Rd();
        return a.length ? _.u(b, function (b) {
            return !_.bb(a, b)
        }) : b
    };
    Td = function () {
        var a = window.document.createElement("IFRAME").sandbox, b = a && a.supports;
        if (!b)return {};
        var c = {};
        _.z(Rd(), function (d) {
            b.call(a, d) && (c[d] = !0)
        });
        return c
    };
    Ud = function () {
        try {
            return za()
        } catch (a) {
        }
    };
    Vd = function (a) {
        a = a && a.toString && a.toString();
        return _.w(a) && -1 != a.indexOf("[native code]")
    };
    da = function (a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    };
    Wd = function () {
        for (var a = _.q, b = 0; 40 > b; ++b) {
            if (da(a, "__cmpLocator"))return a;
            if (!(a = xd(a)))break
        }
        return null
    };
    _.Xd = _.C.X(function () {
        return !vd() && (_.B("iPod") || _.B("iPhone") || _.B("Android") || _.B("IEMobile")) ? 2 : vd() ? 1 : 0
    });
    Yd = function (a) {
        return (/^(?:https?:\/\/)?([^\/\?:#]+)/i.exec(a) || [])[1]
    };
    _.Zd = Object.assign || function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)for (var e in d)Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
    var ob = {Cd: 0, xd: 1, wd: 2, vd: 3, Pd: 4, Qd: 5, zd: 6};
    var ba;
    ba = _.C.X(function () {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
            _.q.addEventListener("test", null, b)
        } catch (c) {
        }
        return a
    });
    _.E = function (a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ca(d)), !0) : !1
    };
    _.$d = function (a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ca(d)), !0) : !1
    };
    _.ae = function (a, b, c) {
        var d = !1, e = !1;
        e = void 0 === e ? !1 : e;
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var f = a.document.createElement("img");
        if (c || d) {
            var g = function (b) {
                c && c(b);
                d && _.eb(a.google_image_requests, f);
                _.$d(f, "load", g);
                _.$d(f, "error", g)
            };
            _.E(f, "load", g);
            _.E(f, "error", g)
        }
        e && (f.referrerPolicy = "no-referrer");
        f.src = b;
        a.google_image_requests.push(f);
        return f
    };
    var be = !1, ce = function (a) {
        var b = Vc();
        if (!b)return 0;
        if (Kc(b, 7))return 4;
        if (6048E5 < _.Oa() - Kc(b, 5))return 0;
        if (a) {
            if (_.bb(Lc(b, 3), a))return 2;
            if (_.bb(Lc(b, 4), a))return 3
        }
        return 1
    }, de = _.C.X(function () {
        var a = /[?&]fcconsent=alwaysshow([&#]|$)/;
        try {
            return a.test(_.q.top.location.href)
        } catch (b) {
        }
        return a.test(_.q.location.href)
    }), ee = {}, fe = null, ge = null, ie = function () {
        var a = he();
        a && _.q.setTimeout && .01 > Math.random() && _.q.setTimeout(function () {
            _.q.__cmp && _.q.__cmp("getConsentData", null, function (a) {
                a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=iabcmp&vcd=" + JSON.stringify(a);
                _.ae(_.q, a, void 0)
            })
        }, 1E4);
        return a
    }, he = function () {
        if (_.q.__cmp) {
            var a = !1;
            try {
                _.q.__cmp("ping", null, function () {
                    a = !0
                })
            } catch (b) {
            }
            if (a)return !0
        }
        ge = Wd();
        return !!ge
    }, je = 1, ke = function () {
        if (!_.q.__cmp && ge) {
            try {
                if (ge.__cmp) {
                    _.q.__cmp = ge.__cmp;
                    return
                }
            } catch (a) {
            }
            _.q.__cmp = function (a, b, c) {
                var d = "google_cmp_callback_" + je;
                je++;
                a = {__cmpCall: {command: a, parameter: b, callId: d}};
                ee[d] = c;
                ge.postMessage(a, "*")
            };
            _.E(_.q, "message", function (a) {
                a = a.data;
                if ("string" == typeof a)try {
                    a = JSON.parse(a)
                } catch (b) {
                }
                (a = a.__cmpReturn) && "function" == typeof ee[a.callId] && (ee[a.callId](a.returnValue, a.success), delete ee[a.callId])
            })
        }
    }, le = function (a, b) {
        var c = void 0 === b ? function () {
        } : b, d = fa("GoogleSetNPA"), e = pb();
        e[0] = a ? 1 : 2;
        e[6] = 1;
        e[5] = d ? 1 : 2;
        var f = !1;
        b = function (a, b) {
            b && a && (f = !!a.gdprAppliesGlobally)
        };
        _.q.__cmp && _.q.__cmp("ping", null, b);
        if (f || a) {
            var g = function (a) {
                a && (a.gdprApplies ? (e[6] = 8, fe = {
                    jb: 5,
                    Sa: d,
                    Wa: !1,
                    Ha: e.join("."),
                    Hb: a.consentData,
                    Vb: a.googleVendorIds
                }, c(fe)) : (fe = {jb: 5, Sa: d, Wa: !1, Ha: e.join(".")}, c(fe)))
            };
            a = ea().GoogleMostRecentCmpConsentData;
            var k = !!a;
            a && g(a);
            _.q.__cmp && _.q.__cmp("getConsentData", null, function (a, b) {
                b && (ea().GoogleMostRecentCmpConsentData = a, k || g(a))
            })
        } else fe = {jb: 5, Sa: d, Wa: !1, Ha: e.join(".")}, c(fe)
    }, me = function (a, b) {
        var c = pb();
        de() && (a = !0);
        c[0] = a ? 1 : 2;
        var d = fa("GoogleSetNPA");
        c[5] = d ? 1 : 2;
        if (be && ie())return ke(), le(a), fe || (c[6] = 7, fe = {
            jb: 5,
            Sa: d,
            Wa: !0,
            Ha: c.join("."),
            Hb: "NCS"
        }), fe;
        var e = fa("GooglePauseAdRequests");
        c[4] = e ? 1 : 2;
        var f = !!_.q.googlefc || da(_.q.top, "googlefcPresent");
        c[1] = f ? 1 : 2;
        var g = ce(b);
        0 != g ? b = {
            Ub: g,
            Wb: 3
        } : (g = _.q.top, b = {
            Ub: da(g, "googlefcInactive") ? 4 : b && da(g, "googlefcPA-" + b) ? 2 : da(g, "googlefcNPA") ? 3 : 0,
            Wb: 2
        });
        g = b;
        b = g.Ub;
        c[g.Wb] = b;
        if (!d)a:switch (b) {
            case 2:
            case 4:
                d = !1;
                break a;
            case 3:
                d = !0;
                break a;
            case 1:
                d = a;
                break a;
            default:
                d = (void 0 === f ? !1 : f) && a
        }
        return {jb: b, Sa: d, Wa: e || 0 == b && a && f, Ha: c.join(".")}
    }, ne = function (a, b, c) {
        if (be && ie())ke(), le(a, c); else {
            var d = me(a, b);
            d.Wa ? _.q.setTimeout(function () {
                ne(a, b, c)
            }, 1E3) : c(d)
        }
    };
    _.oe = function (a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    _.oe.prototype.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.oe.prototype.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.oe.prototype.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.pe = function (a, b) {
        var c = _.jd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    _.qe = function (a, b) {
        return _.pe(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    _.re = function (a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
        _.$b && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    };
    _.se = function (a) {
        var b = _.jd(a), c = new _.gd(0, 0);
        var d = b ? _.jd(b) : window.document;
        d = !_.$b || 9 <= Number(_.qc) || _.ld(_.kd(d).za) ? d.documentElement : d.body;
        if (a == d)return c;
        a = _.re(a);
        d = _.kd(b).za;
        b = _.nd(d);
        d = _.od(d);
        b = _.$b && _.pc("10") && d.pageYOffset != b.scrollTop ? new _.gd(b.scrollLeft, b.scrollTop) : new _.gd(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    _.te = function (a) {
        a = _.re(a);
        return new _.gd(a.left, a.top)
    };
    _.ue = function (a, b) {
        if ("none" != _.qe(b, "display"))return a(b);
        var c = b.style, d = c.display, e = c.visibility, f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.ve = function (a) {
        if (!a.getBoundingClientRect)return null;
        a = _.ue(_.re, a);
        return new _.hd(a.right - a.left, a.bottom - a.top)
    };
    var we = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    }, xe = function (a) {
        a = void 0 === a ? _.q : a;
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
    }, ye = function () {
        var a = xe();
        return a && a.mode ? +a.mode.version || null : null
    }, ze = function () {
        var a = xe();
        if (a && a.container) {
            a = a.container.split(",");
            for (var b = [], c = 0; c < a.length; c++)b.push(we[a[c]] || "x");
            return b.join()
        }
        return null
    }, Ae = function () {
        var a = xe();
        return a && a.initialIntersection
    }, Be = function (a) {
        return (a = a || xe()) ? wd(a.master) ? a.master : null : null
    }, Ce = !!xe() && _.q != _.q.top, De = function (a) {
        a = xe(a);
        if (!a || !_.Fa(a.data) || !_.w(a.data.type))return null;
        a = a.data.type.toLowerCase();
        return "doubleclick" == a || "adsense" == a ? null : a
    };
    var Ee, Fe, Ge, He, Je;
    Ee = function () {
        var a = void 0 === a ? Sa : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    };
    Fe = function (a) {
        a = Be(xe(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1;
        return a.google_unique_id
    };
    Ge = !!window.google_async_iframe_id;
    He = Ge && window.parent || window;
    _.Ie = function () {
        if (Ge && !wd(He)) {
            var a = "." + Ra.domain;
            try {
                for (; 2 < a.split(".").length && !wd(He);)Ra.domain = a = a.substr(a.indexOf(".") + 1), He = window.parent
            } catch (b) {
            }
            wd(He) || (He = window)
        }
        return He
    };
    Je = function () {
        var a, b = window.ActiveXObject;
        if (window.navigator.plugins && window.navigator.mimeTypes.length) {
            if ((a = window.navigator.plugins["Shockwave Flash"]) && a.description)return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (window.navigator.userAgent && 0 <= window.navigator.userAgent.indexOf("Windows CE")) {
                var c = 3;
                for (a = 1; a;)try {
                    a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)), c++
                } catch (d) {
                    a = null
                }
                return c.toString()
            }
            if (_.Pb()) {
                a = null;
                try {
                    a = new b("ShockwaveFlash.ShockwaveFlash.7")
                } catch (d) {
                    c = 0;
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash.6"), c = 6, a.AllowScriptAccess = "always"
                    } catch (e) {
                        if (6 === c)return c.toString()
                    }
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {
                    }
                }
                if (a)return c = a.GetVariable("$version").split(" ")[1], c.replace(/,/g, ".")
            }
        }
        return "0"
    };
    var Ke, Me;
    Ke = function (a) {
        return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    };
    _.Le = function (a) {
        try {
            var b = Ke(a.document);
            return new _.hd(b.clientWidth, b.clientHeight)
        } catch (c) {
            return new _.hd(-12245933, -12245933)
        }
    };
    Me = function (a, b) {
        b = void 0 === b ? _.q : b;
        a = a.scrollingElement || Ke(a);
        return new _.gd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    };
    _.Ne = function (a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var Oe = function (a, b, c) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return (void 0 === c ? 0 : c) ? (new _.hd(b.innerWidth, b.innerHeight)).round() : _.md(b || window).round()
        } catch (d) {
            return new _.hd(-12245933, -12245933)
        }
    };
    var Re, Se, Te;
    _.Pe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    _.Qe = function (a) {
        return a ? (0, window.decodeURI)(a) : a
    };
    Re = function (a, b, c) {
        if (_.y(b))for (var d = 0; d < b.length; d++)Re(a, String(b[d]), c); else null != b && c.push(a + ("" === b ? "" : "=" + (0, window.encodeURIComponent)(String(b))))
    };
    Se = /#|$/;
    Te = function (a, b) {
        var c = a.search(Se);
        a:{
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f)break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d)return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c)e = c;
        d += b.length + 1;
        return (0, window.decodeURIComponent)(a.substr(d, e - d).replace(/\+/g, " "))
    };
    var Ue = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i], Ve = function (a) {
        return Wa(Ue, function (b) {
            return b.test(a)
        })
    }, We = function (a) {
        if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
            a = a[0].toLowerCase();
            for (var b = 0, c = 0; c < a.length; ++c)b = 31 * b + a.charCodeAt(c) >>> 0;
            switch (b) {
                case 1967261364:
                    return 0;
                case 3147493546:
                    return 1;
                case 1567346461:
                    return 2;
                case 2183041838:
                    return 3;
                case 763236279:
                    return 4;
                case 1342279801:
                    return 5;
                case 526831769:
                    return 6;
                case 352806002:
                    return 7;
                case 2755048925:
                    return 8;
                case 3306848407:
                    return 9;
                case 2207000920:
                    return 10;
                case 484037040:
                    return 11;
                case 3506871055:
                    return 12;
                case 672143848:
                    return 13;
                case 2528751226:
                    return 14;
                case 2744854768:
                    return 15;
                case 3703278665:
                    return 16;
                case 2014749173:
                    return 17;
                case 133063824:
                    return 18;
                case 2749334602:
                    return 19;
                case 3131239845:
                    return 20;
                case 2074086763:
                    return 21;
                case 795772493:
                    return 22;
                case 290857819:
                    return 23;
                case 3035947606:
                    return 24;
                case 2983138003:
                    return 25;
                case 2197138676:
                    return 26;
                case 4216016165:
                    return 27;
                case 239803524:
                    return 28;
                case 975993579:
                    return 29;
                case 1794940339:
                    return 30;
                case 1314429186:
                    return 31;
                case 1643618937:
                    return 32;
                case 497159982:
                    return 33
            }
        }
        return -1
    }, Xe = function (a) {
        if (!a.length)return 0;
        for (var b = [], c = 0; 33 >= c; c++)b[c] = 0;
        for (c = a.length - 1; 0 <= c; c--) {
            var d = We(a[c]);
            0 <= d && (b[33 - d] = 1)
        }
        return (0, window.parseInt)(b.join(""), 2)
    };
    var Ze = function (a) {
        a = (this.m = a || _.q) || _.q;
        this.o = a.top == a ? 1 : wd(a.top) ? 2 : 3;
        3 != this.o && Date.parse(_.q.top.document.lastModified);
        var b = this.m, c = b || _.q;
        a = [];
        var d = null;
        do {
            var e = c;
            if (wd(e)) {
                var f = e.location.href;
                d = e.document && e.document.referrer || null
            } else f = d, d = null;
            a.push(new Ye(f || "", e));
            try {
                c = e.parent
            } catch (g) {
                c = null
            }
        } while (c && e != c);
        e = 0;
        for (c = a.length - 1; e <= c; ++e)a[e].depth = c - e;
        e = b || _.q;
        if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == a.length - 1)for (b = 1; b < a.length; ++b)c = a[b], c.url || (c.url = e.location.ancestorOrigins[b - 1] || "", c.Ec = !0);
        this.za = a
    }, $e = function (a, b) {
        for (var c = 0, d = (a = a.za[Math.max(a.za.length - 1, 0)].url || null) && _.Qe(a.match(_.Pe)[3] || null), e = Math.min(b.length, 26), f = 0; f < e; f++)a = null != b[f] && _.Qe(b[f].match(_.Pe)[3] || null) || "", c *= 4, a && (d && a == d ? c += 3 : Ve(b[f]) ? c += 2 : a && 0 <= We(a) && (c += 1));
        return c
    }, Ye = function (a, b) {
        this.url = a;
        this.td = b;
        this.Ec = !1;
        this.depth = _.t(void 0) ? void 0 : null
    };
    var af = !1, bf = null, cf = function (a) {
        this.m = {};
        this.za = {};
        this.o = !1;
        a = a || [];
        for (var b = 0, c = a.length; b < c; ++b)this.za[a[b]] = ""
    }, df = function () {
        if (null === bf) {
            bf = "";
            try {
                var a = "";
                try {
                    a = _.q.top.location.hash
                } catch (c) {
                    a = _.q.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    bf = b ? b[1] : ""
                }
            } catch (c) {
            }
        }
        return bf
    }, ef = function (a, b, c) {
        return "" == b ? "" : c ? a.za.hasOwnProperty(c) ? a.za[c] = b : "" : (a.m[b] = !0, b)
    }, ff = function (a, b, c, d) {
        if (a.o)return "";
        if (d ? a.za.hasOwnProperty(d) && "" == a.za[d] : 1) {
            var e;
            e = (e = df()) ? (e = e.match(new RegExp("\\b(" + b.join("|") + ")\\b"))) ? e[0] : null : null;
            if (b = e ? e : af ? null : Fd(b, c, !1))return ef(a, b, d)
        }
        return ""
    }, gf = function (a, b) {
        return a.za.hasOwnProperty(b) ? a.za[b] : ""
    }, jf = function () {
        var a = hf, b = [];
        _.D(a.m, function (a, d) {
            b.push(d)
        });
        _.D(a.za, function (a) {
            "" != a && b.push(a)
        });
        return b
    };
    var mf;
    _.kf = function () {
        var a = _.q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : _.Oa()
    };
    _.lf = function (a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    mf = function (a) {
        var b = _.q.performance;
        return b && b.timing && b.timing[a] || 0
    };
    var nf = function (a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
        this.slotId = e
    };
    var of = _.q.performance, pf = !!(of && of.mark && of.measure && of.clearMarks), qf = _.C.X(function () {
        var a;
        if (a = pf)a = df(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    }), rf = function (a, b) {
        this.events = [];
        this.m = b || _.q;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.za = qf() || (null != c ? c : Math.random() < a)
    }, sf = function (a) {
        a && of && qf() && (of.clearMarks("goog_" + a.uniqueId + "_start"), of.clearMarks("goog_" + a.uniqueId + "_end"))
    }, tf = function (a, b, c, d, e, f) {
        a.za && (b = new nf(b, c, d, void 0 === e ? 0 : e, f), a.za && a.events.push(b))
    };
    rf.prototype.start = function (a, b) {
        if (!this.za)return null;
        var c = _.lf() || _.kf();
        a = new nf(a, b, c);
        b = "goog_" + a.uniqueId + "_start";
        of && qf() && of.mark(b);
        return a
    };
    _.uf = function (a, b, c) {
        var d = _.lf();
        d && tf(a, b, 9, d, 0, c)
    };
    var vf = function (a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            for (var c; a != c;)c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (d) {
            return b
        }
    };
    var wf = _.Ie(), xf = new rf(1, wf), yf = function () {
        wf.google_measure_js_timing || (xf.za = !1, xf.events != xf.m.google_js_reporting_queue && (qf() && _.z(xf.events, sf), xf.events.length = 0))
    };
    "complete" == wf.document.readyState ? yf() : xf.za && _.E(wf, "load", function () {
        yf()
    });
    var zf = function (a) {
        cf.call(this, a);
        this.dfltBktExt = this.m;
        this.lrsExt = this.za
    };
    _.v(zf, cf);
    af = !1;
    var Af = function (a) {
        return !!a && a.top == a
    }, Bf = function (a, b, c, d) {
        c = c || a.google_ad_width;
        d = d || a.google_ad_height;
        if (Af(a))return !1;
        var e = b.documentElement;
        if (c && d) {
            var f = 1, g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
            if (g > 2 * d || f > 2 * c)return !1
        }
        return !0
    }, Cf = function () {
        var a = _.Ie();
        if (a != a.top)for (; a && a != a.top && wd(a) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; a = a.parent);
    };
    _.Df = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    var Ff = function (a, b) {
        var c = b || Ef;
        return function () {
            var b = this || _.q;
            b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
            var e = c(Ia(a), arguments);
            return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
        }
    }, Ef = function (a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c)a.push(typeof b[c], b[c]);
        return a.join("\x0B")
    };
    var Gf = function (a, b) {
        this.m = a;
        this.za = b
    };
    var Hf = !1, If = "", Jf = function (a) {
        a = a.match(/[\d]+/g);
        if (!a)return "";
        a.length = 3;
        return a.join(".")
    };
    (function () {
        if (window.navigator.plugins && window.navigator.plugins.length) {
            var a = window.navigator.plugins["Shockwave Flash"];
            if (a && (Hf = !0, a.description)) {
                If = Jf(a.description);
                return
            }
            if (window.navigator.plugins["Shockwave Flash 2.0"]) {
                Hf = !0;
                If = "2.0.0.11";
                return
            }
        }
        if (window.navigator.mimeTypes && window.navigator.mimeTypes.length && (a = window.navigator.mimeTypes["application/x-shockwave-flash"], Hf = !(!a || !a.enabledPlugin))) {
            If = Jf(a.enabledPlugin.description);
            return
        }
        try {
            var b = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            Hf = !0;
            If = Jf(b.GetVariable("$version"));
            return
        } catch (c) {
        }
        try {
            b = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            Hf = !0;
            If = "6.0.21";
            return
        } catch (c) {
        }
        try {
            b = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Hf = !0, If = Jf(b.GetVariable("$version"))
        } catch (c) {
        }
    })();
    _.Kf = Hf;
    _.Lf = If;
    var Nf = function (a) {
        _.Jc(this, a, Mf, null)
    };
    _.Qa(Nf, _.Ec);
    var Pf = function (a) {
        _.Jc(this, a, Of, null)
    };
    _.Qa(Pf, _.Ec);
    var Sf = function (a) {
        _.Jc(this, a, Qf, Rf)
    };
    _.Qa(Sf, _.Ec);
    var Tf = function (a) {
        _.Jc(this, a, null, null)
    };
    _.Qa(Tf, _.Ec);
    var Vf = function (a) {
        _.Jc(this, a, Uf, null)
    };
    _.Qa(Vf, _.Ec);
    var Yf = function (a) {
        _.Jc(this, a, Wf, Xf)
    };
    _.Qa(Yf, _.Ec);
    var Mf = [2], Of = [2];
    Pf.prototype.getId = function () {
        return Mc(this, 1, 0)
    };
    var Qf = [5], Rf = [[1, 2, 3, 6]], Uf = [4], Wf = [2, 8], Xf = [[3, 4, 5], [6, 7]];
    var Zf = function (a) {
        return null != a ? !a : a
    }, $f = function (a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d].call();
            if (e == b)return e;
            null == e && (c = !0)
        }
        if (!c)return !b
    }, bg = function (a, b) {
        var c = Pc(a, Yf, 2);
        if (!c.length)return ag(a, b);
        a = Mc(a, 1, 0);
        if (1 == a)return Zf(bg(c[0], b));
        c = _.r(c, function (a) {
            return function () {
                return bg(a, b)
            }
        });
        switch (a) {
            case 2:
                return $f(c, !1);
            case 3:
                return $f(c, !0)
        }
    }, ag = function (a, b) {
        var c = Ic(a, Xf[0]);
        a:{
            switch (c) {
                case 3:
                    var d = Mc(a, 3, 0);
                    break a;
                case 4:
                    d = Mc(a, 4, 0);
                    break a;
                case 5:
                    d = Mc(a, 5, 0);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, Lc(a, 8))
            } catch (f) {
                return
            }
            b = Mc(a, 1, 0);
            if (4 == b)return !!e;
            d = null != e;
            if (5 == b)return d;
            a:{
                switch (c) {
                    case 4:
                        a = +Mc(a, 6, 0);
                        break a;
                    case 5:
                        a = Mc(a, 7, "");
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 == b)return e === a;
                if (9 == b)return 0 == _.Db(e, a);
                if (d)switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return (new RegExp(a)).test(e);
                    case 10:
                        return -1 == _.Db(e, a);
                    case 11:
                        return 1 == _.Db(e, a)
                }
            }
        }
    }, cg = function (a, b) {
        return !a || !(!b || !bg(a, b))
    };
    var dg, eg, fg, hg, gg, kg, lg, mg;
    dg = function (a, b) {
        switch (b) {
            case 1:
                return Mc(a, 1, 0);
            case 2:
                return Mc(a, 2, 0);
            case 3:
                return Mc(a, 3, 0);
            case 6:
                return Mc(a, 6, 0);
            default:
                return null
        }
    };
    eg = function (a, b) {
        if (!a)return null;
        switch (b) {
            case 1:
                return Mc(a, 1, !1);
            case 2:
                return +Mc(a, 2, 0);
            case 3:
                return Mc(a, 3, "");
            case 6:
                return Lc(a, 4);
            default:
                return null
        }
    };
    fg = _.C.X(function () {
        var a = "";
        try {
            a = _.q.top.location.hash
        } catch (c) {
            a = _.q.location.hash
        }
        var b = {};
        if (a = (a = /\bdflags=({.*})(&|$)/.exec(a)) && a[1])try {
            b = JSON.parse((0, window.decodeURIComponent)(a))
        } catch (c) {
        }
        return b
    });
    _.ig = function (a, b, c) {
        var d = fg();
        if (d[a] && null != d[a][b])return d[a][b];
        b = gg.L().za[a][b];
        if (!b)return c;
        b = new Sf(b);
        b = hg(b);
        a = eg(b, a);
        return null != a ? a : c
    };
    hg = function (a) {
        var b = gg.L().m;
        if (b) {
            var c = ab(Pc(a, Tf, 5), function (a) {
                return cg(Oc(a, Yf, 1), b)
            });
            if (c)return Oc(c, Vf, 2)
        }
        return Oc(a, Vf, 4)
    };
    gg = function () {
        var a = {};
        this.za = (a[1] = {}, a[2] = {}, a[3] = {}, a[6] = {}, a);
        this.m = null
    };
    Ba(gg);
    _.F = function (a) {
        return _.ig(1, a, !1)
    };
    _.jg = function (a, b) {
        return _.ig(2, a, void 0 === b ? 0 : b)
    };
    kg = function (a) {
        var b = void 0 === b ? [] : b;
        return _.ig(6, a, b)
    };
    lg = function () {
        var a = _.H(230);
        Na(gg.L().za, a)
    };
    mg = function (a) {
        var b = gg.L().za;
        _.z(a, function (a) {
            var c = Ic(a, Rf[0]), e = dg(a, c);
            e && (b[c][e] = _.Qc(a))
        })
    };
    var ng, og, qg;
    ng = function (a, b) {
        var c = this, d = void 0 === b ? {} : b;
        b = void 0 === d.Rb ? !1 : d.Rb;
        var e = void 0 === d.bc ? {} : d.bc;
        d = void 0 === d.hc ? [] : d.hc;
        this.v = a;
        this.w = b;
        this.o = e;
        this.m = null;
        this.u = d;
        this.za = {};
        if (a = df())a = a.split(",") || [], _.z(a, function (a) {
            (a = (0, window.parseInt)(a, 10)) && (c.za[a] = !0)
        })
    };
    _.pg = function (a, b) {
        var c = a.v[b];
        c && (delete a.v[b], _.z(c, function (b) {
            b = new Nf(b);
            cg(Oc(b, Yf, 3), a.m) && (b = og(a, b)) && (a.u.push(b.getId()), (b = Pc(b, Sf, 2)) && mg(b))
        }))
    };
    og = function (a, b) {
        var c = Pc(b, Pf, 2), d = a.m, e = d ? _.u(c, function (a) {
            return cg(Oc(a, Yf, 3), d)
        }) : c, f = e.length;
        if (!f)return null;
        c = Mc(b, 4, 0);
        b = f * Mc(b, 1, 0);
        if (!c)return qg(a, e, b / 1E3);
        f = null != a.o[c] ? a.o[c] : 1E3;
        if (0 >= f)return null;
        e = qg(a, e, b / f);
        a.o[c] = e ? 0 : f - b;
        return e
    };
    qg = function (a, b, c) {
        var d = a.za, e = Za(b, function (a) {
            return !!d[a.getId()]
        });
        return e ? e : a.w ? null : Fd(b, c, !1)
    };
    var rg;
    rg = {};
    _.sg = (rg[1] = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/backdrop/resources/content_binder.js", rg[2] = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js", rg[3] = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js", rg);
    var tg = function (a, b) {
        b = void 0 === b ? {} : b;
        this.root = b.root ? b.root : null;
        this.B = b.rootMargin ? ha(b.rootMargin) : [{value: 0, type: "px"}, {value: 0, type: "px"}, {
            value: 0,
            type: "px"
        }, {value: 0, type: "px"}];
        this.rootMargin = _.r(this.B, function (a) {
            return "" + a.value + a.type
        }).join(" ");
        this.F = ka(b.threshold);
        this.D = a;
        this.za = [];
        this.u = [];
        this.v = !1;
        this.m = null;
        this.o = _.C.ib(this.w, 100, this)
    }, ug = function (a) {
        if (a.root)var b = la(a.root); else {
            var c = _.md(window);
            b = {top: 0, right: c.width, bottom: c.height, left: 0, width: c.width, height: c.height}
        }
        a = _.r(a.B, function (a, c) {
            return "px" == a.type ? a.value : a.value * (c % 2 ? b.width : b.height) / 100
        });
        return {
            top: b.top - a[0],
            right: b.right + a[1],
            bottom: b.bottom + a[2],
            left: b.left - a[3],
            width: b.width + a[1] + a[3],
            height: b.height + a[0] + a[2]
        }
    }, vg = function (a, b, c) {
        if (!b || b.isIntersecting != c.isIntersecting)return !0;
        var d = b.intersectionRatio, e = c.intersectionRatio;
        return d == e ? !1 : Wa(a.F, function (a) {
            return a < d != a < e
        })
    };
    tg.prototype.w = function () {
        var a = this, b = ug(this);
        _.z(this.za, function (c) {
            var d = c.target, e = la(d), f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var k = Math.min(b.right, e.right), m = Math.min(b.bottom, e.bottom), p = Math.max(b.left, e.left), n = k - p, x = m - g;
            g = 0 <= n && 0 <= x ? {top: g, right: k, bottom: m, left: p, width: n, height: x} : null;
            k = !!g;
            m = g ? g.width * g.height : 0;
            p = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? m / f : k ? 1 : 0,
                intersectionRect: g || {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0},
                isIntersecting: k,
                rootBounds: b,
                target: d,
                time: p && p.now ? p.now() : 0
            };
            vg(a, c.Qb, d) && a.u.push(d);
            c.Qb = d
        });
        this.u.length && this.D(wg(this), this)
    };
    tg.prototype.observe = function (a) {
        Wa(this.za, function (b) {
            return b.target == a
        }) || (this.za.push({
            target: a,
            Qb: null
        }), this.w(), this.v || (this.v = !0, _.E(_.q, "scroll", this.o), _.E(_.q, "resize", this.o), _.q.MutationObserver && !this.m && (this.m = new window.MutationObserver(this.o), this.m.observe(_.q.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    tg.prototype.unobserve = function (a) {
        this.za = _.u(this.za, function (b) {
            return b.target != a
        });
        0 == this.za.length && (this.v = !1, this.za.length = 0, _.$d(_.q, "scroll", this.o), _.$d(_.q, "resize", this.o), this.m && (this.m.disconnect(), this.m = null))
    };
    var wg = function (a) {
        var b = [].concat(_.na(a.u));
        a.u.length = 0;
        return b
    };
    var yg = function (a) {
        var b = this;
        this.m = !1;
        this.za = [];
        a(function (a) {
            xg(b, a)
        })
    }, xg = function (a, b) {
        if (!a.m)if (b instanceof yg)b.then(function (b) {
            xg(a, b)
        }); else {
            a.m = !0;
            a.o = b;
            for (b = 0; b < a.za.length; ++b)zg(a, a.za[b]);
            a.za = []
        }
    }, zg = function (a, b) {
        a.m ? b(a.o) : a.za.push(b)
    }, Dg, Cg;
    yg.prototype.then = function (a) {
        var b = this;
        return new yg(function (c) {
            zg(b, function (b) {
                c(a(b))
            })
        })
    };
    _.Bg = function (a, b) {
        return Va(a, function (a, d) {
            return a.then(function (a) {
                return d.then(function (c) {
                    b(c);
                    a.push(c);
                    return a
                })
            })
        }, _.Ag([]))
    };
    Dg = function () {
        var a, b = new yg(function (b) {
            a = b
        });
        return new Cg(b, a)
    };
    _.Ag = function (a) {
        return new yg(function (b) {
            return b(a)
        })
    };
    Cg = function (a, b) {
        this.m = a;
        this.za = b
    };
    var Eg = /^(true|false)$/i;
    var Fg, Gg;
    Fg = function (a) {
        return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    Gg = function (a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    _.Hg = function (a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    _.Ig = _.q.requestAnimationFrame || _.q.webkitRequestAnimationFrame;
    _.Jg = !!_.Ig && !/'iPhone'/.test(_.q.navigator.userAgent);
    var Kg;
    Kg = function () {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.adRegion = this.floatingAdsFillMessage = null;
        this.disablePageHeightCheck = !1
    };
    _.Lg = function (a) {
        a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new Kg);
        return a.google_reactive_ads_global_state
    };
    var Mg, Pg, Qg, Rg, Sg;
    Mg = 728 * 1.35;
    _.Og = function (a) {
        var b = _.Ng(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    Pg = function (a) {
        return (a = _.Og(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Ng = function (a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    Qg = function (a, b) {
        return a.adCount ? (a = a.adCount[b]) && 27 != b && 26 != b ? 1 <= a : !1 : !1
    };
    Rg = function (a) {
        var b = [];
        _.D(a, function (a, d) {
            a && b.push(d + ":" + a)
        });
        return b.join()
    };
    Sg = function (a) {
        return {name: a, Pe: {predicate: Eg, nullOnInvalid: !0}}
    };
    _.Tg = function (a) {
        for (var b = a.za.length - 1; 0 <= b; b--) {
            var c = a.za[b];
            c.m ? (c.o.style.removeProperty(c.za), c.o.style.setProperty(c.za, String(c.u), c.v)) : c.o.style[c.za] = c.u
        }
        a.za.length = 0
    };
    _.Ug = Sg("wd");
    _.Vg = Sg("ht");
    _.Wg = Sg("use_manual_view");
    _.Xg = Sg("use_important");
    _.Yg = Sg("af_l");
    _.Zg = Sg("wait_for_scroll");
    _.$g = function (a, b, c, d) {
        var e = c;
        e && (e = "?" + e);
        b = "//tpc.googlesyndication.com/safeframe/" + b + "/html/container.html" + e;
        e = a;
        for (var f = 0; e != e.parent;)f++, e = e.parent;
        (e = f) && (b += (c ? "&" : "?") + "n=" + e);
        return (d || Od(a) ? "https:" : "http:") + b
    };
    var ah = function (a) {
        return a._google_rum_ns_ = a._google_rum_ns_ || {}
    };
    var bh, ch, dh, eh;
    bh = function (a) {
        if (!a.Ea()) {
            2 == a.I && (_.Tg(a.o), a.I = 0);
            window.clearTimeout(a.M);
            a.M = -1;
            a.B = 3;
            if (a.m) {
                var b = a.m;
                b.m || (b.m = !0, b.v());
                a.m = null
            }
            a.F && a.za ? a.F.unobserve(a.za) : (_.$d(window, "resize", a.K), _.$d(window, "scroll", a.K));
            a.za && a.w == _.rd(a.za) && a.w.removeChild(a.za);
            a.za = null;
            a.w = null;
            a.F && (a.F.disconnect(), a.F = null);
            a.status = 100
        }
    };
    ch = ["allow-modals", "allow-orientation-lock", "allow-presentation"];
    dh = ["allow-top-navigation"];
    eh = ["allow-same-origin"];
    _.fh = Sd([].concat(_.na(ch), _.na(dh)));
    Sd([].concat(_.na(ch), _.na(eh)));
    Sd([].concat(_.na(ch), _.na(dh), _.na(eh)));
    var gh = function (a) {
        _.Jc(this, a, null, null)
    };
    _.Qa(gh, _.Ec);
    var hh;
    hh = function (a) {
        this.v = a.time;
        this.B = a.Ed;
        this.w = a.Dd;
        this.za = this.m = -1;
        this.u = this.o = 0
    };
    _.ih = function (a, b) {
        a.B && a.w ? (a.u += b - a.v, 1E3 <= a.u && (a.m = b), 0 < a.za || (a.o += b - a.v)) : a.u = 0;
        a.v = b
    };
    var jh, kh, lh, mh, qh, th, oh, uh, rh, ph;
    jh = [.05, .1, .2, .5];
    kh = [0, .5, 1];
    lh = function (a) {
        a = zd(a);
        if (!a)return -1;
        a = _.Le(a);
        return -12245933 == a.width || -12245933 == a.height ? -1 : a.width * a.height
    };
    mh = function (a, b) {
        return 0 > a ? [] : _.r(jh, function (c) {
            return Math.min(a / b * c, 1)
        })
    };
    _.nh = function () {
        return Math.round(window.performance.now())
    };
    qh = function (a) {
        this.m = a.td;
        this.o = a.rb;
        this.F = a.De;
        this.v = null;
        this.w = a.ra;
        this.B = !1;
        this.u = oh(this);
        this.G = a.ee || !1;
        this.D = a.Ld || !1;
        this.za = null;
        this.D && ph(this)
    };
    qh.prototype.getSlotId = function () {
        return this.v
    };
    _.sh = function (a) {
        try {
            rh(a, _.nh(), 0, 0, 0, !1)
        } catch (b) {
            a.w && a.w(b)
        }
        a.u && a.u.unobserve(a.o);
        a.B = !1;
        a.za = null
    };
    th = function (a, b) {
        if (a.u && (null != a.v && _.sh(a), a.v = b, a.u.observe(a.o), a.B = !0, a.D)) {
            b = _.nh();
            var c = a.o.getBoundingClientRect(), d = c.width * c.height;
            a:{
                var e = 0;
                if (!_.Hg(a.m.document)) {
                    e = zd(a.m);
                    if (!e) {
                        c = -1;
                        break a
                    }
                    var f = Ke(e.document);
                    e = Math.min(f.clientWidth, c.left + c.width) - Math.max(0, c.left);
                    c = Math.min(f.clientHeight, c.top + c.height) - Math.max(0, c.top);
                    e = 0 < e && 0 < c ? e * c : 0
                }
                c = e
            }
            a.za = new hh({time: b, Ed: 0 < d ? c / d > (242500 < d ? .3 : .5) : !1, Dd: 1 == Fg(a.m.document)})
        }
    };
    oh = function (a) {
        if (!_.q.IntersectionObserver)return null;
        var b = a.o.offsetWidth * a.o.offsetHeight, c = lh(a.m);
        b = [].concat(_.na(kh), _.na(mh(c, b)));
        _.ia(b);
        return new _.q.IntersectionObserver(function (b) {
            return uh(a, b)
        }, {threshold: b})
    };
    uh = function (a, b) {
        try {
            var c = lh(a.m);
            _.z(b, function (b) {
                var d = Math.round(b.time), f = b.boundingClientRect.width * b.boundingClientRect.height, g = b.intersectionRect.width * b.intersectionRect.height;
                b = b.isIntersecting;
                if (a.D && a.za) {
                    var k = a.za, m = 0 < f ? g / f > (242500 < f ? .3 : .5) : !1;
                    _.ih(k, d);
                    k.B = m
                }
                a.G && rh(a, d, f, g, c, b)
            })
        } catch (d) {
            a.w && a.w(d)
        }
    };
    rh = function (a, b, c, d, e, f) {
        if (null == a.v)throw Error("Not Attached.");
        var g = new gh;
        _.Nc(g, 1, c);
        _.Nc(g, 2, d);
        _.Nc(g, 3, e);
        _.Nc(g, 4, b);
        _.Nc(g, 5, f);
        b = new Cc;
        c = Kc(g, 4);
        null != c && null != c && Dc(b, 4, c);
        c = Kc(g, 2);
        null != c && null != c && Dc(b, 2, c);
        c = Kc(g, 1);
        null != c && null != c && Dc(b, 1, c);
        c = Kc(g, 3);
        null != c && null != c && Dc(b, 3, c);
        c = Kc(g, 5);
        null != c && (g = c, null != g && (Bc(b.za, 40), b.za.za.push(g ? 1 : 0)));
        g = new window.Uint8Array(b.za.length());
        d = b.m;
        e = d.length;
        for (f = c = 0; f < e; f++) {
            var k = d[f];
            g.set(k, c);
            c += k.length
        }
        d = b.za;
        e = d.za;
        d.za = [];
        g.set(e, c);
        b.m = [g];
        b = xc(g, !0).replace(/\.+$/, "");
        tf(a.F, "1", 10, b, void 0, a.v)
    };
    ph = function (a) {
        var b = Gg(a.m.document);
        b && _.E(a.m.document, b, function () {
            if (a.za) {
                var b = a.za, d = 1 == Fg(a.m.document);
                _.ih(b, _.nh());
                b.w = d
            }
        })
    };
    var vh = !1, wh = 0, xh = function (a, b, c) {
        if (!vh) {
            vh = !0;
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
            if (Vd(d)) {
                var e, f, g, k, m = a.requestIdleCallback;
                m && (k = function (a) {
                    f = a.timeRemaining();
                    g = 0
                });
                var p = function (a) {
                    vh && (b.push(a - e), e = a, m && (c.push(f || 0), g || (f = 0, g = m(k))), d(p))
                };
                d(function (a) {
                    e = a;
                    m && (g = m(k));
                    d(p)
                })
            }
        }
    }, yh = function () {
        vh = !1
    }, zh = function () {
        wh && _.q.clearTimeout(wh);
        wh = vh ? _.q.setTimeout(yh, 1E4) : 0
    };
    var Ah = function () {
        var a = window, b = a.google_ltobserver;
        b && (b.disconnect(), delete a.google_ltobserver);
        a.google_lt_queue && delete a.google_lt_queue
    };
    var Bh = function (a) {
        if (!a.performance || !a.performance.getEntriesByType)return null;
        var b = a.performance.getEntriesByType("resource");
        a = b.length;
        b = Va(b, function (a, b) {
            return a + (b.transferSize || 0)
        }, 0);
        return {Hc: a, Pc: b}
    };
    _.Ch = function () {
        this.m = [];
        this.za = -1
    };
    _.Ch.prototype.set = function (a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.m[a] != b && (this.m[a] = b, this.za = -1)
    };
    _.Ch.prototype.get = function (a) {
        return !!this.m[a]
    };
    _.Dh = function (a) {
        -1 == a.za && (a.za = Va(a.m, function (a, c, d) {
            return c ? a + Math.pow(2, d) : a
        }, 0));
        return a.za
    };
    var Eh = {
        yd: "loader_loaded_instant",
        Od: "impl_loaded_instant",
        Md: "page_load_time",
        Nd: "page_unload_time"
    }, Fh = [1, 2];
    var Hh, Jh;
    _.Gh = function () {
        return _.q.googletag || (_.q.googletag = {})
    };
    Hh = function (a, b) {
        var c = _.Gh();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    _.Ih = function (a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
    };
    Jh = function (a, b) {
        a.addEventListener ? a.addEventListener("beforeunload", b, !1) : a.attachEvent && a.attachEvent("onbeforeunload", b)
    };
    var Kh = {
        1: "pagead2.googlesyndication.com",
        173: "pubads.g.doubleclick.net",
        174: "securepubads.g.doubleclick.net",
        7: 0,
        13: 1500,
        23: .001,
        24: 200,
        33: "pagead2.googlesyndication.com",
        37: 0,
        38: .001,
        53: "",
        58: 1,
        65: 0,
        66: 0,
        67: 0,
        68: 0,
        69: 1,
        71: 0,
        162: 0,
        163: "",
        76: "",
        81: 0,
        99: 0,
        103: 0,
        104: "/pagead/js/rum.js",
        113: 1,
        118: 1,
        124: 0,
        208: 0,
        169: 0,
        207: 0,
        127: 0,
        129: 0,
        134: 0,
        135: 0,
        229: !1,
        143: 0,
        144: 0,
        187: 0,
        158: 0,
        150: "",
        179: 0,
        170: !1,
        211: !1,
        196: 0,
        234: 0,
        236: 0,
        197: 0,
        152: [],
        172: null,
        182: 1E3,
        191: "",
        192: "",
        190: "",
        231: 0,
        180: null,
        219: [],
        230: {},
        210: {},
        227: {},
        226: [],
        241: {},
        200: 0,
        202: "",
        239: 0,
        213: 0,
        214: 0,
        215: 0,
        217: 0,
        220: !1,
        228: "//www.googletagservices.com/pubconsole/",
        240: 0
    }, Mh, Nh;
    Kh[6] = Od(window);
    Kh[49] = (new Date).getTime();
    Kh[36] = Nd();
    Kh[46] = Nd();
    Kh[148] = Nd();
    Kh[221] = Nd();
    Kh[232] = Nd();
    Kh[204] = _.Md("-1", -1);
    var Lh = function () {
        Na(this, Kh)
    };
    Ba(Lh);
    _.H = function (a) {
        return Lh.L()[a]
    };
    Mh = _.Gh();
    Nh = Lh.L();
    Na(Nh, Mh._vars_);
    Mh._vars_ = Nh;
    var Oh = function () {
        ng.call(this, _.H(210), {Rb: _.H(211), bc: _.H(227), hc: _.H(226)})
    };
    _.v(Oh, ng);
    var Ph = function () {
        return _.H(36)
    };
    var Qh = Ff(function (a) {
        return a && a.src ? /^(?:https?:)?\/\/www\.googletagservices\.com\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2
    }, function (a, b) {
        return a + "\x0B" + (b[0] && b[0].src)
    }), Rh = function () {
        return 0 === Qh(_.H(172))
    };
    var Sh = function () {
        return _.Md("0") || 0
    };
    Hh("getVersion", function () {
        return "265"
    });
    var Th = function () {
        var a = {};
        this[3] = (a[2] = Ph, a[3] = Rh, a[1] = function () {
            return 0 == (0, _.Xd)()
        }, a[4] = function () {
            return !1
        }, a);
        a = {};
        this[4] = (a[1] = function () {
            return _.H(204)
        }, a[2] = function () {
            return 265
        }, a[3] = function () {
            return (0, _.Xd)()
        }, a[4] = Sh, a);
        this[5] = {}
    };
    Ba(Th);
    _.Uh = function () {
        Oh.call(this);
        var a = Th.L(), b = _.H(241);
        _.Ib(a, function (a, d) {
            Na(a, b[d])
        });
        this.m = a;
        lg();
        gg.L().m = a
    };
    _.v(_.Uh, Oh);
    Ba(_.Uh);
    var Vh, hf, Zh, $h, ai, I, fi, hi, ci, ei, ii, di, ki, mi, ni, oi, ri, ui, xi, yi, zi, Ai, Di, Fi, Gi, Ii, Li, Mi, Ni, Oi, Qi, Ri;
    var Wh = _.H(180), Xh = !1;
    Xh = void 0 === Xh ? !0 : Xh;
    if (Wh && Wh.dfltBktExt && Wh.lrsExt) {
        var Yh = new zf;
        Yh.m = Wh.dfltBktExt;
        Yh.dfltBktExt = Yh.m;
        Yh.za = Wh.lrsExt;
        Yh.lrsExt = Yh.za;
        Xh && (Yh.o = !0);
        Vh = Yh
    } else Vh = null;
    hf = Vh || new zf;
    Zh = [];
    $h = !1;
    ai = _.H(170);
    _.bi = {};
    I = function (a, b, c) {
        c = void 0 === c ? {} : c;
        var d = new ci(a);
        c.U && di(d, c.U);
        c.ia || ei(d, b, c.ta, c.Oc);
        c.Fc && _.z(Id(a), function (a) {
            _.bi[a] = !0
        });
        Zh.push(d);
        return d
    };
    fi = function (a) {
        a = new ci(a, !0);
        Zh.push(a);
        return a
    };
    _.gi = function () {
        var a = jf().concat(_.r(_.Uh.L().u, String));
        _.ia(a, null, _.C.Cc);
        return a
    };
    hi = function (a, b) {
        return b ? a / b : 0
    };
    ci = function (a, b) {
        var c = hf;
        b = void 0 === b ? !1 : b;
        this.o = a;
        this.m = c;
        this.za = "exp" + Ia(this);
        this.B = 0;
        this.u = this.m.za[this.za] = "";
        this.v = !1;
        this.w = b
    };
    ei = function (a, b, c, d) {
        c = void 0 === c ? [] : c;
        d = void 0 === d ? !1 : d;
        if (!a.v && !a.w && _.C.and.apply(_.C, _.na(c)).call()) {
            c = Id(a.o);
            var e = b;
            if (.5 < b && 1 >= b && a.u)e = .5 < b && 1 >= b ? 1 - b : 0; else if (ai) {
                a.B = 0;
                a.v = !0;
                return
            }
            ff(a.m, c, e * c.length, a.za);
            a.B = b;
            d && b && (gf(a.m, a.za) || .5 < b && 1 >= b) && !$h && !a.is("21061505") && (d = Hd(a.o), $h = a.is("21061506") || Math.random() * b * d < _.H(37));
            a.v = !0
        }
    };
    ii = function (a) {
        if (!a.w)return null;
        var b = Id(a.o);
        b = ff(a.m, b, 1, a.za);
        a.v = !0;
        return b
    };
    di = function (a, b) {
        Mb(a.o, b) && (a.u = b)
    };
    ci.prototype.is = function (a) {
        return Mb(this.o, a) && a == _.ji(this)
    };
    ki = function (a, b) {
        ai || a.w || !Mb(a.o, b) || ef(a.m, b, a.za)
    };
    _.ji = function (a) {
        var b = gf(a.m, a.za);
        if (b)a = b; else {
            if (b = a.u == a.u)b = a.B, b = .5 < b && 1 >= b;
            a = b ? a.u : ""
        }
        return a
    };
    _.li = function (a, b, c) {
        b = void 0 === b ? !1 : b;
        if (!ai || (void 0 === c ? 0 : c)) {
            for (c = 0; c < Zh.length; ++c) {
                var d = Zh[c], e = void 0, f = d.o, g = {};
                for (e in f)g[f[e]] = e;
                if (null != g[a]) {
                    b && gf(d.m, d.za) || ki(d, a);
                    return
                }
            }
            ef(hf, a)
        }
    };
    mi = _.C.wa(!!_.q.IntersectionObserver);
    ni = _.C.wa(!!_.q.Uint8Array);
    oi = I({H: "21060636", ed: "21060637", he: "21060638", bd: "21060639"}, _.H(144));
    I({H: "953563515", Id: "953563516", Hd: "953563517"}, _.H(187));
    I({H: "21061505", N: "21061506"}, _.H(37), {Oc: !0, U: "21061506"});
    _.pi = I({H: "21061645", N: "21061646"}, _.H(71), {U: "21061646"});
    I({xa: "21060375", md: "21060374"}, 0, {ia: !0, Fc: !0});
    var qi = I({H: "21060088", N: "21060089", kd: "21060094", ld: "21060095"}, _.H(81));
    qi.is("21060095") && ($h = !0);
    ri = I({H: "21060167", N: "21060168"}, _.H(103));
    _.si = I({H: "21061507", xa: "21061508"}, _.H(134), {U: "21061508"});
    _.ti = I({H: "21060610", xa: "21060611"}, hi(_.H(135), _.H(134)), {
        ta: [function () {
            return _.si.is("21061508")
        }]
    });
    ui = I({H: "21061497", xa: "21061498"}, hi(_.H(196), _.H(134)), {
        ta: [function () {
            return _.si.is("21061508")
        }, function () {
            return Vd(_.q.requestAnimationFrame)
        }]
    });
    _.vi = I({H: "22325465", N: "22325466"}, hi(_.H(234), _.H(135)), {
        U: "22325466", ta: [function () {
            return _.ti.is("21060611")
        }]
    });
    _.wi = I({H: "21061999", xa: "21062000"}, hi(_.H(236), _.H(134)), {
        ta: [function () {
            return _.si.is("21061508")
        }, function () {
            return _.q == _.q.top
        }]
    });
    xi = I({H: "21060334", N: "21060335"}, _.H(113), {
        ta: [function () {
            return !!_.Gh().enableSampledInstrumentation
        }]
    });
    xi.is("21060335") && ($h = !0);
    I({sd: "1337"}, 0).is("1337") && (Lh.L()[104] = "/pagead/js/rum_debug.js", $h = !0);
    yi = I({H: "21060361", N: "21060362"}, _.H(118), {U: "21060362"});
    zi = I({H: "21061673", xa: "21061674"}, 0, {ia: !0, U: "21061674"});
    Ai = I({H: "21061675", xa: "21061676"}, 0, {ia: !0, U: "21061676"});
    _.Bi = I({H: "21061161", hd: "21061259", pd: "21061162", od: "21061260"}, _.H(169), {ia: !0, U: "21061162"});
    _.Ci = I({H: "21060355", N: "21060356"}, 0);
    Di = I({H: "21061863", qe: "21061864", rd: "21061865"}, _.H(129));
    I({H: "21060923", pe: "21060924", se: "21060925", ud: "21060926", nd: "21060927", je: "21060928"}, 0, {ia: !0});
    _.Ei = I({H: "21061108", N: "21061109"}, 0, {ia: !0});
    Fi = I({H: "21060697", N: "21060698"}, hi(_.H(143), _.H(134)), {
        ta: [function () {
            return _.si.is("21061508")
        }, mi, ni, function () {
            return 0 != Fg(window.document)
        }], U: "21060698"
    });
    Gi = I({H: "21061300", N: "21061301"}, _.H(179), {U: "21061301"});
    _.Hi = I({H: "21061545", N: "21061546"}, hi(_.H(197), _.H(134)), {
        ta: [function () {
            return _.si.is("21061508")
        }, function () {
            return !!window.google_ltobserver
        }]
    });
    Ii = I({H: "21061720", N: "21061721"}, _.H(213), {U: "21061721"});
    _.Ji = I({H: "21061696", N: "21061698", ke: "21061699"}, 0, {ia: !0});
    _.Ki = I({
        H: "21061584",
        N: "21061585",
        Rd: "676982561",
        $d: "676982562",
        ae: "676982563",
        Sd: "676982564",
        Vd: "676982565",
        Wd: "676982566",
        Zd: "676982572",
        Ud: "676982573",
        be: "676982567",
        Xd: "676982571",
        Yd: "676982574",
        Td: "676982575"
    }, 0, {ia: !0});
    Li = I({H: "21062398", cd: "21062399", fe: "21062400", Le: "21062593"}, _.H(239), {U: "21062400"});
    Mi = I({
        jd: "21062408",
        gd: "21062409",
        fd: "21062410",
        dd: "21062411",
        ie: "21062412",
        ge: "21062413",
        Ne: "21062594",
        Me: "21062595"
    }, 0);
    Ni = fi({N: "21061726"});
    Oi = I({H: "21061742", N: "21061743"}, _.H(214), {U: "21061743"});
    I({H: "370204026", Ke: "370204027", Oe: "370204053"}, _.H(215), {U: "370204027"});
    _.Pi = I({H: "21061131", N: "21061132"}, _.H(217), {U: "21061132", ia: !0});
    Qi = fi({re: "21061606"});
    Ri = I({N: "21062379"}, 0);
    _.Ti = function () {
        var a = Si || _.si.is("21061508");
        _.q.google_measure_js_timing = a || _.q.google_measure_js_timing;
        rf.call(this, a ? 1 : 0, _.q)
    };
    _.v(_.Ti, rf);
    var Si = _.ti.is("21060611") || qi.is("21060089") || qi.is("21060095") || qi.is("21060094");
    Ba(_.Ti);
    var Vi, Xi, Zi, $i, cj, ej, fj, gj, hj, ij, jj, mj, oj, pj, rj;
    Vi = function (a, b) {
        var c = a.getPassbackPageUrl();
        if ("" != c)return c;
        a = b[_.J(a)];
        return null != a ? Ui(a) : null
    };
    Xi = function () {
        return Wi().replace(/[\W_]/g, function (a) {
            return "&#" + a.charCodeAt() + ";"
        })
    };
    _.Yi = function (a) {
        var b = a;
        "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
        return b
    };
    Zi = /\+/g;
    $i = function (a) {
        if (!(void 0 !== a && a || _.H(6)))return "http://pubads.g.doubleclick.net";
        switch (_.jg(4)) {
            case 1:
                return "https://adservice.google.com";
            case 2:
                return "https://adservice" + (_.H(150) || ".google.com");
            default:
                return "https://securepubads.g.doubleclick.net"
        }
    };
    _.bj = function () {
        var a = yi.is("21060362");
        return (_.aj(window, a) ? "http" : "https") + "://" + _.H(33)
    };
    cj = function (a) {
        var b = a.document;
        return Af(a) ? b.URL : b.referrer
    };
    ej = function (a, b) {
        var c = 0, d = [];
        a && (d.push(a.getAdUnitPath()), d.push(dj(a)), d.push(a.getSlotElementId()));
        if (b) {
            a = [];
            for (var e = 0; b && 25 > e; b = b.parentNode, ++e)9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && d.push(b)
        }
        0 < d.length && (c = Kd(d.join(":")));
        return c.toString()
    };
    fj = function (a, b) {
        if (null == b)return a;
        b = a.indexOf("google_preview=", a.lastIndexOf("?"));
        var c = a.indexOf("&", b);
        -1 == c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    gj = _.C.X(function () {
        return "XMLHttpRequest"in window && "withCredentials"in new window.XMLHttpRequest
    });
    hj = _.C.X(function () {
        return Vd(_.q.XMLHttpRequest) && Vd(window.XMLHttpRequest.prototype.open) && Vd(window.XMLHttpRequest.prototype.send)
    });
    ij = _.C.X(function () {
        return sc && Vd(_.q.fetch) && Vd(_.q.TextDecoder) && !!_.q.Promise
    });
    _.aj = function (a, b) {
        var c = !1;
        _.H(46) ? c = !0 : null != b && (c = !b);
        return c && !Od(a, b)
    };
    jj = _.C.X(function () {
        return !!_.Pd(_.q.location.href)
    });
    _.kj = Math.floor(Math.random() * Math.pow(2, 53));
    _.lj = function () {
        return _.si.is("21061508") || ri.is("21060168") || xi.is("21060335") || _.Ti.L().za
    };
    mj = function (a) {
        return 0 === a || _.t(a) && (0, window.isFinite)(a) && 0 == a % 1 && 0 < a
    };
    _.nj = function () {
        return _.H(6) ? "https:" : "http:"
    };
    oj = function (a) {
        var b = a.split("/");
        return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    pj = function (a) {
        var b = [];
        b = _.r(a, function (a) {
            return oj(a.getAdUnitPath())
        });
        _.ia(b);
        return b
    };
    _.qj = function (a) {
        return "complete" == a.readyState
    };
    rj = function (a) {
        return a ? (a = _.ve(a)) && a.floor() : null
    };
    var vj, wj, sj, yj;
    _.tj = function (a, b, c) {
        b = void 0 === b ? sj : b;
        c = void 0 === c ? -1 : c;
        if (0 > c || 1 < c)c = _.H(23);
        this.m = Math.random();
        this.u = this.m < c;
        this.o = a;
        this.za = b + "/pagead/gen_204?id=" + (0, window.encodeURIComponent)(a)
    };
    _.uj = [];
    vj = void 0;
    vj = void 0 === vj ? !1 : vj;
    wj = _.H(6);
    sj = vj || wj ? "https://" + _.H(33) : "http://" + _.H(33);
    _.K = function (a, b, c) {
        "string" != typeof c && (c = String(c));
        b && b.match(/^\w+$/) && c && (a.za += "&" + b + "=" + (0, window.encodeURIComponent)(c))
    };
    _.xj = function (a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        b = void 0 === b ? null : b;
        var d = a.u;
        b && 0 <= b && (d = ((void 0 === c ? 0 : c) ? a.m : Math.random()) < b);
        (a = (d || jj()) && a.o && a.za ? a.za : null) && _.ae(window, a, void 0)
    };
    yj = function (a, b) {
        0 < b.length && (3 >= b.length ? _.K(a, "nw_id", b.join(",")) : (b = hb(b, 0, 3), b.push("__extra__"), _.K(a, "nw_id", b.join(","))))
    };
    _.L = function (a, b) {
        b = void 0 === b ? null : b;
        var c = void 0 === c ? window.document : c;
        _.K(a, "vrg", "265");
        b ? (yj(a, zj(b)), _.K(a, "nslots", Aj(b).toString())) : (yj(a, pj(_.uj)), _.K(a, "nslots", _.uj.length.toString()));
        b = _.gi();
        0 < b.length && _.K(a, "eid", b.join());
        _.K(a, "pub_url", c.URL)
    };
    _.Bj = function (a, b, c) {
        c = void 0 === c ? {} : c;
        var d = c.ue || sj;
        c = c.$b;
        if (!_.ua(c) || 0 > c || 1 < c)c = _.H(23);
        Math.random() < c && (a = new _.tj(a, d), b(a), _.xj(a, 1, !0))
    };
    var Cj, Dj, Fj, Gj, Ij, Hj;
    Cj = _.H(38);
    Dj = function (a, b) {
        a = {methodId: a};
        b.name && (a.name = b.name);
        b.message && (a.message = b.message.substring(0, 512));
        b.fileName && (a.fileName = b.fileName);
        b.lineNumber && (a.lineNumber = b.lineNumber);
        b.stack && (a.stack = vf(b.stack, ""));
        return a
    };
    Fj = function (a, b, c) {
        c = void 0 === c ? !1 : c;
        _.Ej(a, b);
        if (!c)throw b;
    };
    Gj = function (a, b) {
        _.Ej(a, b);
        window.console && window.console.error && window.console.error(b)
    };
    _.Ej = function (a, b, c) {
        c = void 0 === c ? Cj : c;
        if (!b.isReported)try {
            b.isReported = !0;
            var d = Dj(a, b), e = new _.tj("gpt_exception");
            try {
                _.L(e)
            } catch (f) {
            }
            _.D(d, function (a, b) {
                return _.K(e, b, a)
            });
            _.xj(e, c)
        } catch (f) {
        }
    };
    _.M = function (a, b, c) {
        return function () {
            var d = !1, e = null, f = c || Fj, g = _.Ti.L();
            try {
                var k = g && Si;
                k && (e = g.start(a.toString(), 3));
                var m = b.apply(this, arguments);
                d = !0;
                if (k && (k = e, g.za && _.t(k.value))) {
                    var p = _.lf() || _.kf();
                    k.duration = p - k.value;
                    var n = "goog_" + k.uniqueId + "_end";
                    of && qf() && of.mark(n);
                    g.za && g.events.push(k)
                }
            } catch (x) {
                d ? _.Ej(110, x) : m = f.call(this, a, x), sf(e)
            }
            return m
        }
    };
    Ij = function () {
        var a, b = window;
        if (a = ui.is("21061498"))b._google_rum_ns_ ? (a = ah(b), a = !(!a.raf || !a.ric)) : a = !1, a = !a;
        if (a) {
            var c = ah(b);
            c.raf = c.raf || [];
            c.ric = c.ric || [];
            a = c.raf;
            c = c.ric;
            xh(b, a, c);
            _.Ih(b, Hj);
            b.setTimeout(yh, 6E4)
        }
    };
    Hj = function () {
        zh()
    };
    var Jj = function (a) {
        switch (a) {
            case 1:
                return 2;
            case 2:
                return 1;
            default:
                return null
        }
    }, Kj = (0, _.C.X)(function () {
        var a = {REWARDED: 3};
        _.F(35) && (a.TOP_ANCHOR = 1, a.BOTTOM_ANCHOR = 2);
        return a
    }), Lj = function () {
        var a = _.Gh();
        if (!a.enums) {
            var b = Kj();
            b && (a.enums = {OutOfPageFormat: b})
        }
    };
    var Mj = function (a, b) {
        b = void 0 === b ? [] : b;
        this.m = a;
        this.za = b
    };
    Mj.prototype.getMessageId = function () {
        return this.m
    };
    Mj.prototype.getMessageArgs = function () {
        return this.za
    };
    var Nj = function (a, b, c, d, e) {
        this.m = new Date;
        this.w = d && d.C();
        this.v = c;
        this.o = a;
        this.u = b;
        this.za = e
    };
    _.h = Nj.prototype;
    _.h.getSlot = function () {
        return this.w
    };
    _.h.getService = function () {
        return this.v
    };
    _.h.getLevel = function () {
        return this.o
    };
    _.h.getTimestamp = function () {
        return this.m
    };
    _.h.getMessage = function () {
        return this.u
    };
    _.h.getReference = function () {
        return this.za
    };
    _.h.toString = function () {
        var a = this.m.toTimeString() + ": " + Oj[this.o] + ": " + this.u;
        this.za && (a += " Duration: " + (this.m.getTime() - this.za.getTimestamp().getTime()) + "ms.");
        return a
    };
    var Oj = ["Debug", "Info", "Warning", "Error", "Fatal"];
    var Pj = null, Qj = !1, Rj = !1, Sj = function () {
        var a = void 0 === a ? _.q : a;
        if (!Rj) {
            var b = _.nj() + _.H(228) + "loader.js";
            _.Ad(a.document, b);
            Rj = !0
        }
    }, Tj = function () {
        var a = void 0 === a ? _.q : a;
        if (_.Gh()._pubconsole_disable_)return !1;
        var b = a.document;
        b = void 0 === b ? _.q.document : b;
        b = b.cookie.split("google_pubconsole=");
        if (b = 2 == b.length ? b[1].split(";")[0] : "")if (b = b.split("|"), 0 < b.length && ("1" == b[0] || "0" == b[0]))return !0;
        a = cj(a);
        return null !== Te(a, "google_debug") || null !== Te(a, "dfpdeb") || null !== Te(a, "google_console") || null !== Te(a, "google_force_console") || null !== Te(a, "googfc")
    }, Vj = _.M(94, function () {
        Tj() && Sj();
        _.E(_.q, "message", Uj)
    }), Wj = _.M(93, function () {
        _.Gh()._pubconsole_disable_ = !0
    }), Uj = function (a) {
        a.source == _.q && "gpt_open_pubconsole" == a.data.type && (a = a.data.slotDomId) && Xj(a)
    }, Xj = function (a) {
        a = void 0 === a ? "" : a;
        _.Gh && _.Gh().console ? _.Gh().console.openConsole(a) : (a && (Pj = a), Qj = !0, Sj())
    };
    "complete" === _.q.document.readyState ? Vj() : _.Ih(_.q, Vj);
    Hh("disablePublisherConsole", Wj);
    Hh("onPubConsoleJsLoad", function () {
        Qj && (_.Gh().console.openConsole(Pj), Pj = null, Qj = !1)
    });
    Hh("openConsole", Xj);
    var Yj = function () {
        this.za = []
    };
    _.h = Yj.prototype;
    _.h.getAllEvents = function () {
        return this.za
    };
    _.h.getEventsByService = function (a) {
        return _.u(this.za, function (b) {
            return b.getService() === a
        })
    };
    _.h.getEventsBySlot = function (a) {
        return _.u(this.za, function (b) {
            return b.getSlot() === a
        })
    };
    _.h.getEventsByLevel = function (a) {
        return _.u(this.za, function (b) {
            return b.getLevel() >= a
        })
    };
    _.h.log = function (a, b, c, d, e) {
        a = new Nj(a, b, void 0 === c ? null : c, void 0 === d ? null : d, void 0 === e ? null : e);
        _.F(47) && !Tj() || this.za.push(a);
        return a
    };
    _.h.info = function (a, b, c, d) {
        return this.log(1, a, b, c, d)
    };
    _.h.A = function (a, b, c, d) {
        return this.log(2, a, b, c, d)
    };
    _.h.error = function (a, b, c, d) {
        return this.log(3, a, b, c, d)
    };
    var Zj = function () {
        var a = _.Gh();
        return a.debug_log || (a.debug_log = new Yj)
    };
    Hh("getEventLog", Zj);
    var ak = _.C.X(function () {
        return _.F(32) && Vd(window.WeakMap) ? new window.WeakMap : null
    }), bk = {}, ck = function () {
    }, ek = function (a, b) {
        return a instanceof b || a instanceof ck && (a = dk(a), a instanceof b) ? a : null
    }, dk = function (a) {
        var b = ak();
        b ? a = b.get(a) : (a = a.Aa(), a = bk[a]);
        return a
    };
    var fk = function (a) {
        _.Bj("gpt_facade_pf", function (b) {
            _.K(b, "name", a);
            _.L(b)
        });
        if (_.F(56))throw Error(a + " on googletag.Slot is deprecated and will be removed. Do not call.");
    }, gk = function (a, b) {
        this.Aa = function () {
            return _.J(a)
        };
        this.set = function (b, d) {
            a.set(b, d);
            return a.C()
        };
        this.get = function (b) {
            return a.get(b)
        };
        this.getAttributeKeys = function () {
            return a.getAttributeKeys()
        };
        this.addService = function (c) {
            c = ek(c, b);
            a.addService(c);
            return a.C()
        };
        this.defineSizeMapping = function (b) {
            a.defineSizeMapping(b);
            return a.C()
        };
        this.setClickUrl = function (b) {
            a.setClickUrl(b);
            return a.C()
        };
        this.setCategoryExclusion = function (b) {
            a.setCategoryExclusion(b);
            return a.C()
        };
        this.clearCategoryExclusions = function () {
            a.clearCategoryExclusions();
            return a.C()
        };
        this.getCategoryExclusions = function () {
            return a.getCategoryExclusions()
        };
        this.setTargeting = function (b, d) {
            a.setTargeting(b, d);
            return a.C()
        };
        this.clearTargeting = function (b) {
            a.clearTargeting(b);
            return a.C()
        };
        this.getTargeting = function (b) {
            return a.getTargeting(b)
        };
        this.getTargetingKeys = function () {
            return a.getTargetingKeys()
        };
        this.setCollapseEmptyDiv = function (b, d) {
            a.setCollapseEmptyDiv(b, d);
            return a.C()
        };
        this.getAdUnitPath = function () {
            return a.getAdUnitPath()
        };
        this.getSlotElementId = function () {
            return a.getSlotElementId()
        };
        this.setForceSafeFrame = function (b) {
            a.setForceSafeFrame(b);
            return a.C()
        };
        this.setSafeFrameConfig = function (b) {
            a.setSafeFrameConfig(b);
            return a.C()
        };
        this.getResponseInformation = function () {
            return a.getResponseInformation()
        };
        this.getName = function () {
            return a.getName()
        };
        this.getSlotId = function () {
            return a.getSlotId().C()
        };
        this.getServices = function () {
            var b = a.getServices();
            return _.r(b, function (a) {
                return a.C()
            })
        };
        this.getSizes = function (b, d) {
            return a.getSizes(b, d)
        };
        this.hasWrapperDiv = function () {
            fk("hasWrapperDiv");
            return a.hasWrapperDiv()
        };
        this.getClickUrl = function () {
            return a.getClickUrl()
        };
        this.getTargetingMap = function () {
            return a.getTargetingMap()
        };
        this.getOutOfPage = function () {
            return a.getOutOfPage()
        };
        this.getAudExtId = function () {
            return a.getAudExtId()
        };
        this.gtfcd = function () {
            return a.gtfcd()
        };
        this.getCollapseEmptyDiv = function () {
            return a.getCollapseEmptyDiv()
        };
        this.getDivStartsCollapsed = function () {
            return a.getDivStartsCollapsed()
        };
        this.fetchStarted = function (b) {
            fk("fetchStarted");
            a.fetchStarted(b)
        };
        this.getContentUrl = function () {
            return a.getContentUrl()
        };
        this.fetchEnded = function () {
            fk("fetchEnded");
            a.fetchEnded()
        };
        this.renderStarted = function () {
            fk("renderStarted");
            a.renderStarted()
        };
        this.renderEnded = function (b) {
            fk("renderEnded");
            a.renderEnded(b)
        };
        this.loaded = function () {
            fk("loaded");
            a.loaded()
        };
        this.impressionViewable = function () {
            fk("impressionViewable");
            a.impressionViewable()
        };
        this.visibilityChanged = function (b) {
            fk("visibilityChanged");
            a.visibilityChanged(b)
        };
        this.getFirstLook = function () {
            return a.getFirstLook()
        };
        this.setFirstLook = function (b) {
            a.setFirstLook(b);
            return a.C()
        };
        this.getCsiId = function () {
            return a.getCsiId()
        };
        this.getPassbackPageUrl = function () {
            return a.getPassbackPageUrl()
        };
        this.getEscapedQemQueryId = function () {
            return a.getEscapedQemQueryId()
        };
        this.getHtml = function () {
            return a.getHtml()
        }
    };
    _.v(gk, ck);
    var jk = function (a, b) {
        if (!Vd(window.Proxy))return null;
        var c = _.F(26), d = 0 != _.jg(3);
        if (!c && !d)return null;
        var e = _.C.ib(hk, 1E3), f = _.C.ib(ik, 1E3);
        return new window.Proxy(a, {
            get: function (a, d) {
                if (c && !(d in a)) {
                    var f = dk(a);
                    d in f && e(a, d, b)
                }
                return a[d]
            }, ownKeys: function (a) {
                e(a, "keys", b);
                return Object.keys(a)
            }, set: function (a, c, e) {
                d && c in a && "function" == typeof a[c] && f(a, c, b);
                a[c] = e;
                return !0
            }
        })
    }, hk = function (a, b, c) {
        kk(_.jg(6), a, b, c, "gpt_api_misuse")
    }, ik = function (a, b, c) {
        kk(_.jg(3), a, b, c, "gpt_api_override")
    }, kk = function (a, b, c, d, e) {
        _.Bj(e, function (a) {
            var f = Error(e);
            _.K(a, "name", d);
            _.K(a, "prop", c);
            _.K(a, "uid", b.Aa());
            _.K(a, "stack", vf(f.stack, f.message));
            _.L(a)
        }, {$b: a})
    };
    var lk = function () {
    };
    lk.prototype.C = function () {
        var a = _.Gh().enableStrictApi;
        if (null != a && _.F(28) ? !a : !this.fb())return this;
        a = this.ya();
        a = jk(a, this.bb()) || a;
        var b = ak();
        b ? b.set(a, this) : (b = a.Aa(), bk[b] = this);
        return a
    };
    var mk = lk.prototype;
    mk.C = Ff(mk.C);
    var ok;
    _.nk = function () {
        this.za = this.o = this.m = null
    };
    ok = function (a) {
        return null != a.m && a.za && 0 != (0, _.Xd)() ? a.m * a.za : a.m
    };
    var N = function (a) {
        return function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
            return new Mj(a, [].concat(_.na(c)))
        }
    }, pk = function (a) {
        return "[" + _.r(a, function (a) {
                return _.w(a) ? "'" + a + "'" : _.y(a) ? pk(a) : String(a)
            }).join(", ") + "]"
    }, qk = function (a, b) {
        b = pk(b);
        b = b.substring(1, b.length - 1);
        return new Mj(96, [a, b])
    }, rk = N(1), sk = N(2), tk = N(3), uk = N(4), vk = N(5), wk = N(6), xk = N(8), yk = N(9), zk = N(10), Ak = N(12), Bk = N(13), Ck = N(14), Dk = N(16), Ek = N(17), Fk = N(19), Gk = N(20), Hk = N(21), Ik = N(22), Jk = N(23), Kk = N(26), Lk = N(27), Mk = N(28), Nk = N(30), Ok = N(31), Pk = N(34), Qk = N(35), Rk = N(36), Sk = N(37), Tk = N(38), Uk = N(39), Vk = N(40), Wk = N(42), Xk = N(43), Yk = N(44), Zk = N(45), $k = N(46), al = N(47), bl = N(48), cl = N(49), dl = N(50), el = N(52), fl = N(57), gl = N(58), hl = N(59), il = N(60), jl = N(61), kl = N(62), ll = N(63), ml = N(64), nl = N(65), ol = N(66), pl = N(67), ql = N(68), rl = N(69), sl = N(70), tl = N(71), ul = N(72), vl = N(74), wl = N(75), xl = N(77), yl = N(78), zl = N(79), Al = N(80), Bl = N(82), Cl = N(84), Dl = N(85), El = N(87), Fl = N(88), Gl = N(90), Hl = N(92), Il = N(93), Jl = N(94), Kl = N(95), Ll = N(97), Ml = N(98), Nl = N(99), Ol = N(100), Pl = N(101), Ql = N(102), Rl = N(103), Sl = N(104), Tl = N(105), Ul = N(106), Vl = N(107), Wl = N(108), Xl = N(109), Yl = N(110), Zl = N(111), $l = N(112), am = N(113);
    var bm = function (a, b, c, d, e, f, g, k, m, p) {
        this.advertiserId = a;
        this.campaignId = b;
        this.creativeId = c;
        this.labelIds = d;
        this.lineItemId = e;
        this.sourceAgnosticCreativeId = f;
        this.sourceAgnosticLineItemId = g;
        this.isBackfill = k;
        this.yieldGroupIds = m;
        this.companyIds = p
    };
    var cm, dm, gm;
    cm = "";
    dm = null;
    _.em = function () {
        cm || (cm = _.ig(3, 2, "") || "1-0-29");
        return cm
    };
    _.fm = function () {
        if (null == dm) {
            for (var a = kg(1), b = [], c = 0; c < a.length; c += 2)Re(a[c], a[c + 1], b);
            dm = b.join("&")
        }
        return dm
    };
    gm = function (a) {
        var b = Zj(), c = {};
        if (!a || !_.Fa(a))return null;
        var d = !1;
        _.D(a, function (e, f) {
            switch (f) {
                case "allowOverlayExpansion":
                    _.wa(e) ? c.allowOverlayExpansion = a.allowOverlayExpansion : (b.error(Pl("allowOverlayExpansion", String(a.allowOverlayExpansion))), d = !0);
                    break;
                case "allowPushExpansion":
                    _.wa(e) ? c.allowPushExpansion = a.allowPushExpansion : (b.error(Pl("allowPushExpansion", String(a.allowPushExpansion))), d = !0);
                    break;
                case "sandbox":
                    !0 === e ? c.sandbox = a.sandbox : (b.error(Pl("sandbox", String(a.sandbox))), d = !0);
                    break;
                default:
                    b.A(Ol(f))
            }
        });
        return d ? null : c
    };
    var hm, jm, km, lm, mm;
    hm = {
        ne: "slotRenderEnded",
        Ad: "impressionViewable",
        oe: "slotVisibilityChanged",
        me: "slotOnload",
        le: "slotAdded",
        de: "rewardedSlotReady",
        ce: "rewardedSlotGranted"
    };
    _.im = function (a, b, c) {
        this.slot = a;
        this.isEmpty = b;
        this.serviceName = c;
        this.slotContentChanged = !0;
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
        this.isBackfill = !1;
        this.companyIds = this.yieldGroupIds = null
    };
    jm = function (a) {
        this.slot = a;
        this.serviceName = "publisher_ads"
    };
    km = function (a, b) {
        this.slot = a;
        this.serviceName = "publisher_ads";
        this.inViewPercentage = b
    };
    lm = function (a) {
        this.slot = a;
        this.serviceName = "publisher_ads"
    };
    mm = function (a, b) {
        this.slot = a;
        this.serviceName = b
    };
    var nm = function () {
        this.u = [];
        this.pa = {};
        this.m = !1;
        this.F = {};
        this.log = Zj();
        this.log.info(Qk(this.getName()), this)
    };
    _.v(nm, lk);
    _.h = nm.prototype;
    _.h.getName = function () {
        return "unknown"
    };
    _.h.bb = function () {
        return this.getName()
    };
    _.h.fb = function () {
        return _.F(14)
    };
    _.h.getVersion = function () {
        return "unversioned"
    };
    _.h.getSlots = function () {
        return _.r(this.u, function (a) {
            return a.C()
        })
    };
    _.h.getSlotIdMap = function () {
        return this.pa
    };
    _.h.enable = function () {
        this.m ? this.log.info(Tk(), this) : (this.xb(), this.m = !0)
    };
    _.h.Gb = function (a) {
        this.u.push(a);
        var b = new mm(a.C(), this.getName());
        om(this, "slotAdded", b);
        this.pa[_.J(a)] = a;
        this.log.info(Vk(this.getName(), a.getAdUnitPath()), this, a)
    };
    _.h.destroySlots = function (a) {
        var b = this.u, c = _.u(b, function (b) {
            return _.bb(a, b)
        });
        _.z(c, function (a) {
            _.eb(b, a)
        });
        return c
    };
    var pm = function (a, b) {
        _.Bj("gpt_callback_usage", function (c) {
            _.L(c);
            _.K(c, "type", b);
            var d = 0, e = 0;
            _.z(a.u, function (a) {
                0 < a.B && d++;
                a.G && e++
            });
            _.K(c, "nfetch", d);
            _.K(c, "nrend", e)
        })
    };
    nm.prototype.addEventListener = function (a, b) {
        if (!_.Ea(b) || !_.w(a))return a = qk("Service.addEventListener", [a, b]), this.log.A(a, this), this;
        if (!Mb(hm, a))return this.log.A(Il(a), this), this;
        _.y(this.F[a]) || (this.F[a] = []);
        this.F[a].push(b);
        pm(this, a);
        return this
    };
    var qm = function (a, b) {
        a = a.F[b];
        return !!a && 0 < a.length
    }, om = function (a, b, c) {
        b = a.F[b];
        _.y(b) && _.z(b, function (b) {
            try {
                b(c)
            } catch (g) {
                b = g && _.w(g.name) ? g.name : null;
                var d = g && _.w(g.message) ? g.message : null, f = "";
                b && d ? f = b + ": " + d : b ? f = b : d && (f = d);
                a.log.A(Hl(f), a)
            }
        })
    };
    nm.prototype.Ba = function (a, b) {
        _.Ej(a, b);
        this.log.error(Uk(String(b)), this)
    };
    var rm = nm.prototype;
    rm.addEventListener = _.M(86, rm.addEventListener);
    rm.enable = _.M(87, rm.enable, rm.Ba);
    var sm, tm, um, vm, wm, zm, Cm, Dm, ym, Am, Hm, Gm, Bm, Im, Km, Lm;
    sm = {start_ad_fetch_period: !0, start_ad_render_period: !0};
    tm = {ad_fetch_period: "start_ad_fetch_period", ad_render_period: "start_ad_render_period"};
    um = function () {
        this.m = !1;
        _.q.GPT_jstiming && _.q.GPT_jstiming.load && ("http:" == _.q.location.protocol || "https:" == _.q.location.protocol) && $h && (this.m = !0);
        this.v = this.u = this.T = null;
        this.R = this.O = this.M = !1;
        this.F = window.GPT_jstiming.getTick(window.GPT_jstiming.load, "start", 0);
        this.o = window.GPT_jstiming.load;
        this.o.name = "global";
        if (!window.performance || !window.performance.timing) {
            var a = _.H(49);
            this.F = a;
            this.o.tick("start", void 0, a)
        }
        this.J = {};
        this.I = 500;
        this.P = [];
        this.K = {};
        this.G = this.W = !1;
        this.B = {};
        this.D = {};
        this.V = 0
    };
    vm = null;
    _.xm = function () {
        return vm || wm()
    };
    wm = function () {
        var a = window, b = new um;
        vm = b;
        if (!b.m)return b;
        ym(b);
        zm(b);
        _.Gh().fifWin && _.qj(window.document) ? a.performance && a.performance.timing && b.m && b.w("page_load_time", a.performance.timing.loadEventStart) : _.Ih(a, function () {
            b.m && b.w("page_load_time", void 0)
        });
        Jh(a, function () {
            b.w("page_unload_time");
            Am(b, !0)
        });
        Bm(b, "v265");
        return b
    };
    zm = function (a) {
        _.D(Eh, function (a) {
            this.J[a] = !1
        }, a)
    };
    Cm = function (a, b, c, d) {
        a.o || (a.o = new _.q.GPT_jstiming.Timer(a.F), a.o.name = "global");
        var e = "_" == b[0];
        if (c || e || window.performance && window.performance.timing)a.o.tick(b, c, d), e || (a.O = !0);
        a.W || Am(a)
    };
    Dm = function (a, b, c, d, e) {
        c ? a.v || (a.v = new _.q.GPT_jstiming.Timer(a.F), a.v.name = "ad_events_psbk") : a.u || (a.u = new _.q.GPT_jstiming.Timer(a.F), a.u.name = "ad_events");
        var f = "_" == b.charAt(0);
        c ? (a.v.tick(b, d, e), f || (a.R = !0)) : (a.u.tick(b, d, e), f || (a.M = !0))
    };
    um.prototype.w = function (a, b) {
        this.m && (Cm(this, a, void 0, b), this.J[a] = !0)
    };
    um.prototype.w = _.M(104, um.prototype.w);
    um.prototype.za = function (a, b, c) {
        a = a + "." + b;
        if (b = "_" + a)Cm(this, b, void 0, 0), Cm(this, a, b, c)
    };
    um.prototype.za = _.M(104, um.prototype.za);
    _.Em = function (a, b, c, d, e) {
        b = b + "." + c;
        c = "_" + b;
        Dm(a, c, d, void 0, 0);
        Dm(a, b, d, c, e)
    };
    _.Fm = function (a, b, c, d) {
        if (a.m && !(1E3 < c)) {
            var e = tm[b], f = e;
            e && (f += "." + c);
            c = b + ("." + c);
            f && a.K.hasOwnProperty("_" + f) && (f = "_" + f, Dm(a, f, d || !1, void 0, a.K[f] + a.F), delete a.K[f]);
            Dm(a, c, d || !1, f);
            d = d ? a.v : a.u;
            sm.hasOwnProperty(b) && (b = window.GPT_jstiming.getTick(d, c), a.K["_" + c] = b)
        }
    };
    ym = function (a) {
        window.setTimeout(_.M(105, function () {
            var b = Am(a);
            if (a.m) {
                var c = !1;
                a.u && a.M && (Gm(a, a.B), Hm(a.u, a.B), a.u = null, a.M = !1, a.B = {}, c = !0);
                a.v && a.R && (Gm(a, a.D), Hm(a.v, a.D), a.v = null, a.R = !1, a.D = {}, c = !0)
            } else c = !1;
            if (b || c)a.I = 32E3 < 2 * a.I ? 32E3 : 2 * a.I;
            ym(a)
        }), a.I)
    };
    Am = function (a, b) {
        if (!a.m)return !1;
        var c = !1;
        a.o && (b || null != a.o && a.O && (a.J.page_load_time || _.qj(window.document)) && a.J.loader_loaded_instant) && (b ? Bm(a, "page_unload") : Bm(a, "page_load"), b = {}, Gm(a, b), Hm(a.o, b), a.W = !0, a.O = !1, a.o = null, c = !0);
        return c
    };
    Hm = function (a, b) {
        _.q.GPT_jstiming.report(a, b, "https:" == _.q.location.protocol ? "https://www.google.com/csi" : "http://csi.gstatic.com/csi")
    };
    Gm = function (a, b) {
        b.vrg = "265";
        b.pl_id = _.kj;
        a = a.P.join();
        var c = _.gi().join();
        b.e = a.length && c.length ? a + "," + c : a + c
    };
    Bm = function (a, b) {
        0 < b.length && cb(a.P, b)
    };
    Im = function (a, b) {
        null === a.T && ((a.T = b) ? Bm(a, "sra") : Bm(a, "non-sra"))
    };
    _.Jm = function (a, b, c, d) {
        a.m && (d ? (a.D[b] = a.D[b] || [], a.D[b].push(c)) : (a.B[b] = a.B[b] || [], a.B[b].push(c)))
    };
    Km = function (a, b, c, d) {
        _.Fm(a, "start_ad_fetch_period", b, c);
        _.uf(_.Ti.L(), (3).toString(), b);
        d && _.D(d, function (d, f) {
            _.Jm(a, f, b + "_" + d, c)
        })
    };
    Lm = function (a, b, c, d) {
        if (a.m)try {
            var e = c && c.contentWindow;
            if (e) {
                var f = Bh(e);
                f && (_.Em(a, "nres", b, d, f.Hc), _.Em(a, "tts", b, d, f.Pc))
            }
        } catch (g) {
        }
    };
    _.Mm = function (a, b, c) {
        if (a.m) {
            var d = _.Gh().fifWin || window;
            d.performance && d.performance.getEntriesByName && (b = d.performance.getEntriesByName(b)[0]) && (a.za("rt_st", c, b.startTime), a.za("rt_fs", c, b.fetchStart), 0 < b.responseStart && (a.za("rt_dns", c, b.domainLookupEnd - b.domainLookupStart), a.za("rt_tcp", c, b.connectEnd - b.connectStart), b.secureConnectionStart && a.za("rt_ssl", c, b.connectEnd - b.secureConnectionStart), a.za("rt_rtt", c, b.responseStart - b.fetchStart), a.za("rt_tft", c, b.responseEnd - b.responseStart), void 0 !== b.transferSize && (a.za("rt_ts", c, b.transferSize), a.za("rt_eb", c, b.encodedBodySize), a.za("rt_db", c, b.decodedBodySize))), a.za("rt_duration", c, b.duration))
        }
    };
    var Nm, Om = function () {
        var a = this;
        this.za = {};
        this.u = !1;
        this.o = Zj();
        this.v = this.o.info(xk());
        _.Ih(window, function () {
            return _.M(92, a.m)
        })
    };
    Om.prototype.add = function (a) {
        this.za[a.getName()] = a
    };
    Om.prototype.find = function (a) {
        var b = null;
        a in this.za && (b = this.za[a]);
        return b
    };
    var Qm = function () {
        var a = Pm();
        _.pg(_.Uh.L(), 6);
        _.D(a.za, function (a, c) {
            a.enable();
            Bm(_.xm(), c)
        })
    };
    Om.prototype.destroySlots = function (a) {
        _.D(this.za, function (b) {
            return b.destroySlots(a)
        })
    };
    Om.prototype.m = function () {
        this.u = !0;
        this.o.info(rk(), null, null, this.v)
    };
    Om.prototype.m = _.M(92, Om.prototype.m);
    var Pm = function () {
        if (_.F(53))return Nm || (Nm = new Om);
        var a = _.Gh();
        return a.service_manager_instance || (a.service_manager_instance = new Om)
    };
    Hh("enableServices", _.M(91, function () {
        Qm()
    }));
    var Rm = function (a, b) {
        this.m = a;
        this.za = b
    };
    Rm.prototype.getWidth = function () {
        return this.m
    };
    Rm.prototype.getHeight = function () {
        return this.za
    };
    var Sm = function (a) {
        var b = _.y(a) && 2 == a.length && mj(a[0]) && mj(a[1]);
        a = _.w(a) && "fluid" == a;
        return b || a
    }, Tm = function (a) {
        return _.y(a) ? new Rm(a[0], a[1]) : a
    }, Vm = function (a) {
        var b = [];
        if (Um(a))b.push(Tm(a)); else if (_.y(a))for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            Um(d) && b.push(Tm(d));
            a:{
                var e = ["fluid"];
                if (_.Da(d) && _.Da(e) && d.length == e.length) {
                    for (var f = d.length, g = lb, k = 0; k < f; k++)if (!g(d[k], e[k])) {
                        d = !1;
                        break a
                    }
                    d = !0
                } else d = !1
            }
            d && b.push("fluid")
        }
        return b
    }, Um = function (a) {
        var b = _.y(a) && 1 < a.length && _.t(a[0]) && _.t(a[1]);
        a = _.w(a) && "fluid" == a;
        return b || a
    };
    var Wm = function (a) {
        this.za = a
    }, Xm = function (a, b) {
        a = Za(a.za, function (a) {
            a = a.m;
            return a.width <= b.width && a.height <= b.height
        });
        return null == a ? null : a.za
    }, Ym = function (a) {
        if (!_.y(a) || 2 != a.length)throw Error("Each mapping entry has to be an array of size 2");
        var b = a[0];
        if (!Sm(b) || "fluid" == b)throw Error("Size has to be an array of two non-negative integers");
        b = new _.hd(b[0], b[1]);
        if (_.y(a[1]) && 0 == a[1].length)a = []; else if (a = Vm(a[1]), 0 == a.length)throw Error("At least one slot size must be present");
        return new Gf(b, a)
    };
    var Zm = function (a) {
        this.Aa = function () {
            return "sid" + a.getId()
        };
        this.getId = function () {
            return a.getId()
        };
        this.getAdUnitPath = function () {
            return a.getAdUnitPath()
        };
        this.getName = function () {
            return a.getName()
        };
        this.toString = function () {
            return a.toString()
        };
        this.getDomId = function () {
            return a.getDomId()
        }
    };
    _.v(Zm, ck);
    var $m = function (a, b, c) {
        this.za = a;
        this.Da = void 0 === b ? 0 : b;
        this.m = this.za + "_" + this.Da;
        this.o = (void 0 === c ? "" : c) || "gpt_unit_" + this.m
    };
    _.v($m, lk);
    _.h = $m.prototype;
    _.h.getId = function () {
        return this.m
    };
    _.h.getAdUnitPath = function () {
        return this.za
    };
    _.h.getName = function () {
        var a = new _.tj("slot_id_get_name");
        _.L(a);
        _.xj(a);
        return this.za
    };
    _.h.L = function () {
        return this.Da
    };
    _.h.toString = function () {
        return this.getId()
    };
    _.h.getDomId = function () {
        return this.o
    };
    _.h.ya = function () {
        return new Zm(this)
    };
    _.h.fb = function () {
        return _.F(63)
    };
    _.h.bb = function () {
        return "slotId"
    };
    $m.prototype.getInstance = $m.prototype.L;
    var dj, cn, dn, kn, on;
    _.O = function (a, b, c, d) {
        this.O = a;
        this.Kb = Vm(c);
        this.Ka = null;
        this.u = new $m(a, b, d);
        this.M = [];
        this.Z = {};
        this.ea = null;
        this.za = Zj();
        this.za.info(sk(this.u.toString()), null, this);
        this.G = this.V = null;
        this.Oa = this.ma = this.Qa = "";
        this.Ca = !0;
        this.v = {};
        this.na = [];
        this.qa = !1;
        this.ca = 0;
        this.oa = this.Pa = null;
        this.Na = 0;
        this.kb = -1;
        this.lb = 2;
        this.Ta = 0;
        this.m = !1;
        this.ga = {};
        this.mb = "";
        this.Ya = !1;
        this.fa = null;
        this.K = !1;
        this.F = null;
        this.gb = _.C.ib(function () {
            null !== this.F && this.visibilityChanged(this.F)
        }, 200, this);
        this.w = oj(this.O);
        this.Ma = "";
        this.la = this.o = null;
        this.Ib = !1;
        this.j = null;
        this.Za = this.B = 0;
        this.D = this.pa = !1;
        this.pc = this.T = this.da = this.J = null;
        this.sa = !1;
        this.P = this.I = this.La = this.ha = null;
        this.ua = !1;
        this.Ra = ++_.xm().V;
        this.qc = this.Ja = null;
        this.Ba = new _.nk;
        this.R = this.ja = this.ka = this.W = null;
        this.Y = 0
    };
    _.v(_.O, lk);
    _.h = _.O.prototype;
    _.h.ya = function () {
        return new gk(this, nm)
    };
    _.h.fb = function () {
        return _.F(12)
    };
    _.h.bb = function () {
        return "slot"
    };
    _.h.getPassbackPageUrl = function () {
        return this.mb
    };
    _.h.set = function (a, b) {
        if (!_.w(a) || !b)return this.za.A(qk("Slot.set", [a, b]), null, this), this;
        var c = this.getAdUnitPath();
        this.Z[a] = b;
        this.V || this.G ? this.za.A(zk(a, String(b), c), null, this) : this.za.info(yk(a, String(b), c), null, this);
        return this
    };
    _.h.get = function (a) {
        return _.w(a) ? this.Z.hasOwnProperty(a) ? this.Z[a] : null : (this.za.A(qk("Slot.get", [a]), null, this), null)
    };
    _.h.getAttributeKeys = function () {
        return nb(this.Z)
    };
    _.h.addService = function (a) {
        var b = Pm();
        if (!Mb(b.za, a))return this.za.A(Jl(this.u.toString()), null, this), this;
        for (b = 0; b < this.M.length; ++b)if (a == this.M[b])return this.za.A(Ak(a.getName(), this.u.toString()), a, this), this;
        this.M.push(a);
        a.Gb(this);
        return this
    };
    _.h.getName = function () {
        window.console && window.console.error && window.console.error("getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.");
        var a = new _.tj("slot_get_name");
        _.L(a);
        _.xj(a);
        return this.O
    };
    _.h.getAdUnitPath = function () {
        return this.O
    };
    _.h.L = function () {
        return this.getSlotId().L()
    };
    _.h.getSlotElementId = function () {
        return this.u.getDomId()
    };
    _.P = function (a, b) {
        b = void 0 === b ? window.document : b;
        return a.J || b.getElementById(a.u.getDomId())
    };
    _.O.prototype.getSlotId = function () {
        return this.u
    };
    _.O.prototype.getServices = function () {
        return this.M
    };
    _.O.prototype.getSizes = function (a, b) {
        return _.t(a) && _.t(b) && this.Ka ? Xm(this.Ka, new _.hd(a, b)) : this.Kb
    };
    _.J = function (a) {
        return a.O + "_" + a.u.L()
    };
    _.O.prototype.defineSizeMapping = function (a) {
        if (!_.y(a))throw Error("Size mapping has to be an array");
        a = _.r(a, Ym);
        this.Ka = new Wm(a);
        return this
    };
    _.an = function (a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top == b && (b = Oe(!1, b), c = a.getSizes(b.width, b.height));
        null == c && (c = a.getSizes());
        return _.r(c, function (a) {
            return _.w(a) ? a : [a.getWidth(), a.getHeight()]
        })
    };
    dj = function (a) {
        var b = [], c = !1;
        _.z(_.an(a), function (a) {
            _.y(a) ? b.push(a.join("x")) : "fluid" == a ? c = !0 : b.push(a)
        });
        c && b.unshift("320x50");
        return b.join("|")
    };
    _.bn = function (a) {
        return _.bb(_.an(a), "fluid")
    };
    _.h = _.O.prototype;
    _.h.hasWrapperDiv = function () {
        return !!_.P(this)
    };
    _.h.setClickUrl = function (a) {
        if (!_.w(a))return this.za.A(qk("Slot.setClickUrl", [a]), null, this), this;
        this.Oa = a;
        return this
    };
    _.h.getClickUrl = function () {
        return this.Oa
    };
    _.h.setForceSafeFrame = function (a) {
        if (!_.wa(a))return this.za.A(qk("Slot.setForceSafeFrame", [a]), null, this), this;
        this.fa = a;
        return this
    };
    _.h.setCategoryExclusion = function (a) {
        _.w(a) && !qb(Bb(a)) ? (cb(this.na, a), this.za.info(Ck(a), null, this)) : this.za.A(qk("Slot.setCategoryExclusion", [a]), null, this);
        return this
    };
    _.h.clearCategoryExclusions = function () {
        this.za.info(Dk(), null, this);
        this.na = [];
        return this
    };
    _.h.getCategoryExclusions = function () {
        return _.gb(this.na)
    };
    _.h.setTargeting = function (a, b) {
        var c = [];
        _.y(b) ? c = b : b && c.push(b.toString());
        _.w(a) ? (this.za.info(Ek(a, c.join(), this.getAdUnitPath()), null, this), this.v[a] = c) : this.za.A(qk("Slot.setTargeting", [a, b]), null, this);
        return this
    };
    _.h.clearTargeting = function (a) {
        if ("undefined" != typeof a) {
            if (!_.w(a) || qb(Bb(a)))return this.za.A(qk("Slot.clearTargeting", [a]), null, this), this;
            if (!this.v[a])return this.za.A(Ql(a, this.getAdUnitPath()), null, this), this;
            delete this.v[a];
            this.za.info(Rl(a, this.getAdUnitPath()), null, this)
        } else this.za.info(Fk(), null, this), this.v = {};
        return this
    };
    _.h.getTargetingMap = function () {
        return Ob(this.v)
    };
    _.h.getTargeting = function (a) {
        return _.w(a) ? this.v.hasOwnProperty(a) ? _.gb(this.v[a]) : [] : (this.za.A(qk("Slot.getTargeting", [a]), null, this), [])
    };
    _.h.getTargetingKeys = function () {
        return nb(this.v)
    };
    _.h.getOutOfPage = function () {
        return this.qa
    };
    _.h.getAudExtId = function () {
        return this.Na
    };
    _.h.gtfcd = function () {
        return this.kb
    };
    _.h.setCollapseEmptyDiv = function (a, b) {
        var c = this;
        if (!_.wa(a) || b && !_.wa(b))return this.za.A(qk("Slot.setCollapseEmptyDiv", _.u([a, b], _.ua)), null, this), this;
        this.oa = (this.Pa = a) && !!b;
        _.Bj("gpt_ced", function (a) {
            _.K(a, "sc", c.oa ? "t" : "f");
            _.K(a, "level", "slot");
            _.L(a)
        });
        b && !a && this.za.A(Gk(this.u.toString()), null, this);
        return this
    };
    _.h.getCollapseEmptyDiv = function () {
        return this.Pa
    };
    _.h.getDivStartsCollapsed = function () {
        return this.oa
    };
    cn = function (a, b) {
        if (!a.hasWrapperDiv())return a.za.error(Hk(a.u.toString()), null, a), !1;
        var c = _.q.document, d = a.u.getDomId();
        c = _.P(a, c);
        if (!c)return a.za.error(Ik(d, a.u.toString()), null, a), !1;
        d = a.ea;
        return _.w(d) && 0 < d.length ? (a.renderStarted(), c.innerHTML = d, a.renderEnded(b), !0) : !1
    };
    dn = function (a, b) {
        a.Ib = !0;
        a.J = void 0 === b ? null : b;
        a.Ca && !a.hasWrapperDiv() ? a.za.A(Jk(a.O, a.u.getDomId()), null, a) : _.z(a.M, function (b) {
            b.m && b.Ab(a)
        })
    };
    _.en = function (a, b) {
        a = new _.im(a.C(), !0, "publisher_ads");
        if (_.Fa(b)) {
            var c = b._empty_;
            a.isEmpty = c;
            c || (a.size = [b._width_, b._height_], b._creative_ids_ && b._adgroup2_ids_ && (a.sourceAgnosticCreativeId = b._creative_ids_[0], a.sourceAgnosticLineItemId = b._adgroup2_ids_[0], c = !!b._is_afc_, a.isBackfill = c, c || (a.creativeId = b._creative_ids_[0], a.lineItemId = b._adgroup2_ids_[0], (c = b._creative_template_ids_) && c.length && (a.creativeTemplateId = c[0]))), b._advertiser_ids_ && (a.advertiserId = b._advertiser_ids_[0]), b._campaign_ids_ && (a.campaignId = b._campaign_ids_[0]), b._label_ids_ && b._label_ids_[0] && (a.labelIds = [b._label_ids_[0]]), b._yield_group_ids_ && (a.yieldGroupIds = b._yield_group_ids_), b._company_ids_ && (a.companyIds = b._company_ids_))
        }
        return a
    };
    _.h = _.O.prototype;
    _.h.fetchStarted = function (a) {
        this.V = this.za.info(tk(this.getAdUnitPath()), null, this);
        this.Qa = a;
        this.B++;
        a = this.getCsiId();
        var b = this.B;
        tf(_.Ti.L(), (7).toString(), 9, b, 0, a)
    };
    _.h.getContentUrl = function () {
        return this.Qa
    };
    _.h.fetchEnded = function () {
        this.za.info(uk(this.getAdUnitPath()), null, this, this.V)
    };
    _.h.renderStarted = function () {
        this.G = this.za.info(vk(this.getAdUnitPath()), null, this)
    };
    _.h.getResponseInformation = function () {
        return this.la
    };
    _.h.renderEnded = function (a) {
        a.isEmpty ? this.la = null : this.la = new bm(a.advertiserId, a.campaignId, a.creativeId, a.labelIds, a.lineItemId, a.sourceAgnosticCreativeId, a.sourceAgnosticLineItemId, a.isBackfill, a.yieldGroupIds, a.companyIds);
        this.za.info(wk(this.getAdUnitPath()), null, this, this.G);
        _.fn(this, "slotRenderEnded", a)
    };
    _.h.loaded = function () {
        var a = new lm(this.C());
        _.fn(this, "slotOnload", a);
        var b = _.xm(), c = this.getCsiId(), d = this.m;
        _.Fm(b, "ad_render_period", c, d);
        _.uf(_.Ti.L(), (6).toString(), c);
        if (!this.o) {
            var e = _.gn(this, window.document);
            Lm(b, c, e, d);
            window.setTimeout(function () {
                Lm(b, c, e, d)
            }, 1E3)
        }
        ui.is("21061498") && _.hn(this) && zh()
    };
    _.h.impressionViewable = function () {
        if (!this.K) {
            var a = new jm(this.C());
            _.fn(this, "impressionViewable", a);
            this.K = !0
        }
    };
    var jn = function (a) {
        a.K = !1;
        a.F = null;
        a.la = null;
        a.pa = !1;
        a.j = null;
        a.ja = null;
        a.R = null
    };
    _.h = _.O.prototype;
    _.h.Xb = _.l(2);
    _.h.visibilityChanged = function (a) {
        a = new km(this.C(), a);
        _.fn(this, "slotVisibilityChanged", a)
    };
    _.h.setFirstLook = function (a) {
        if (!_.wa(a))return this.za.A(qk("Slot.setFirstLook", [a]), null, this), this;
        this.Ta = a ? 1 : 2;
        return this
    };
    _.h.getFirstLook = function () {
        return this.Ta
    };
    _.h.getEscapedQemQueryId = function () {
        return this.j && this.j._qqid_ || ""
    };
    _.h.getHtml = function () {
        return _.hn(this)
    };
    _.hn = function (a) {
        return a.j && a.j._html_ || ""
    };
    _.fn = function (a, b, c) {
        _.z(a.M, function (a) {
            a.getName() == c.serviceName && om(a, b, c)
        })
    };
    _.O.prototype.setSafeFrameConfig = function (a) {
        if (a && _.Fa(a)) {
            if (a = gm(a))this.ga = a
        } else this.za.error(qk("Slot.setSafeFrameConfig", [a]), null, this);
        return this
    };
    _.O.prototype.Ea = function () {
        return this.Ya
    };
    _.O.prototype.Jb = function () {
        return this.w
    };
    kn = function (a, b) {
        a.Za = b
    };
    _.ln = function (a) {
        return "google_ads_iframe_" + _.J(a)
    };
    _.O.prototype.getCsiId = function () {
        return this.Ra
    };
    _.gn = function (a, b) {
        return a.da ? a.da : b.getElementById(_.ln(a))
    };
    _.mn = function (a, b) {
        if (a.T)return a.T;
        a = _.ln(a) + "__container__";
        return b.getElementById(a)
    };
    _.nn = function (a) {
        if (!a.ha) {
            var b = _.P(a);
            b = b && b.parentElement;
            if (_.F(50)) {
                if (b = b.getBoundingClientRect())a.ha = (new _.hd(b.right - b.left, b.bottom - b.top)).floor()
            } else b && b.getBoundingClientRect && (a.ha = rj(b))
        }
        return a.ha
    };
    on = function (a) {
        var b = _.nn(a);
        return b ? Wa(_.an(a), function (a) {
            if (_.w(a))return !0;
            var c = Math.floor(a[1]) == b.height;
            return Math.floor(a[0]) != b.width || !c
        }) : !1
    };
    _.h = _.O.prototype;
    _.h.set = _.M(40, _.O.prototype.set);
    _.h.get = _.M(41, _.O.prototype.get);
    _.h.getAttributeKeys = _.M(42, _.O.prototype.getAttributeKeys);
    _.h.addService = _.M(43, _.O.prototype.addService);
    _.h.getName = _.M(170, _.O.prototype.getName);
    _.h.getAdUnitPath = _.M(54, _.O.prototype.getAdUnitPath);
    _.h.defineSizeMapping = _.M(44, _.O.prototype.defineSizeMapping, function (a, b) {
        _.Ej(a, b);
        this.za.A(Bk(b.message), null, this);
        _.q.console && _.q.console.warn && _.q.console.warn("Incorrect usage of googletag.Slot defineSizeMapping: " + b.message);
        return this
    });
    _.h.setClickUrl = _.M(45, _.O.prototype.setClickUrl);
    _.h.setForceSafeFrame = _.M(55, _.O.prototype.setForceSafeFrame);
    _.h.setCategoryExclusion = _.M(46, _.O.prototype.setCategoryExclusion);
    _.h.clearCategoryExclusions = _.M(47, _.O.prototype.clearCategoryExclusions);
    _.h.getCategoryExclusions = _.M(48, _.O.prototype.getCategoryExclusions);
    _.h.setTargeting = _.M(49, _.O.prototype.setTargeting);
    _.h.clearTargeting = _.M(50, _.O.prototype.clearTargeting);
    _.h.getTargeting = _.M(51, _.O.prototype.getTargeting);
    _.h.getTargetingKeys = _.M(52, _.O.prototype.getTargetingKeys);
    _.h.setCollapseEmptyDiv = _.M(53, _.O.prototype.setCollapseEmptyDiv);
    _.h.setSafeFrameConfig = _.M(56, _.O.prototype.setSafeFrameConfig);
    _.h.getResponseInformation = _.M(355, _.O.prototype.getResponseInformation);
    _.pn = function (a) {
        this.slot = a;
        this.B = []
    };
    _.pn.prototype.m = _.l(6);
    _.pn.prototype.v = _.l(8);
    _.pn.prototype.o = _.l(12);
    _.pn.prototype.u = function () {
        _.z(this.B, function (a) {
            return a()
        });
        this.B = []
    };
    _.qn = function (a) {
        _.pn.call(this, a);
        this.za = !1;
        this.w = null
    };
    _.v(_.qn, _.pn);
    _.qn.prototype.m = _.l(5);
    _.qn.prototype.v = _.l(7);
    _.qn.prototype.o = _.l(11);
    _.qn.prototype.u = function () {
        _.pn.prototype.u.call(this);
        var a = _.gn(this.slot, window.document);
        try {
            _.q.AMP.inaboxUnregisterIframe(a)
        } catch (b) {
            _.Ej(493, b)
        }
    };
    _.rn = function (a) {
        _.pn.call(this, a);
        this.w = 1;
        this.za = null
    };
    _.v(_.rn, _.pn);
    _.rn.prototype.m = _.l(4);
    _.rn.prototype.o = _.l(10);
    _.rn.prototype.u = function () {
        if (3 != this.w)if (this.w = 3, this.slot.o && bh(this.slot.o), this.za) {
            var a = this.za;
            a.m && a.m.G(!0)
        } else _.pd(_.P(this.slot, _.q.document))
    };
    var sn, un, wn;
    sn = function (a) {
        a && (a.innerHTML = "", a.removeAttribute("data-google-query-id"))
    };
    _.tn = function (a, b) {
        a && (a.style.display = b ? "" : "none")
    };
    un = function (a, b) {
        var c = void 0 === c ? window.document : c;
        c.write('<script type="text/javascript" src="' + a + '" id="' + b + '">\x3c/script>')
    };
    wn = function (a, b, c, d) {
        var e = _.vn;
        d = void 0 === d ? window.document : d;
        d = _.sd(new _.id(d), "IFRAME");
        d.id = b;
        d.title = e;
        d.name = b;
        _.y(c) ? null != c[0] && null != c[1] && (d.width = String(c[0]), d.height = String(c[1])) : (d.width = "100%", d.height = "0");
        d.allowTransparency = "true";
        d.scrolling = "no";
        d.marginWidth = "0";
        d.marginHeight = "0";
        d.frameBorder = "0";
        d.style.border = "0";
        d.style.verticalAlign = "bottom";
        -1 == Eb.indexOf("iPhone") && (d.srcdoc = "");
        a.appendChild(d);
        return d
    };
    _.xn = function (a) {
        _.pn.call(this, a);
        this.za = 1;
        this.w = null
    };
    _.v(_.xn, _.pn);
    _.xn.prototype.m = _.l(3);
    _.xn.prototype.o = _.l(9);
    _.xn.prototype.u = function () {
        _.pn.prototype.u.call(this);
        _.yn(this)
    };
    _.yn = function (a) {
        5 != a.za && (a.za = 5, a.w && (a.w(), a.w = null), a.slot.o && bh(a.slot.o), _.pd(_.P(a.slot, _.q.document)))
    };
    var zn = {}, An = (zn[1] = _.xn, zn[2] = _.rn, zn[3] = _.qn, zn), Bn = function () {
        this.za = {};
        this.o = An;
        this.m = !1
    };
    Bn.prototype.load = function (a) {
        var b = Dg();
        this.za[a] = b;
        var c = this.o[a];
        if (_.w(c))a = Cn(c), this.m ? un(a, c) : _.Ad(window.document, a); else {
            var d = this.za[a];
            d || (d = Dg(), this.za[a] = d);
            d.za(c)
        }
        return b.m
    };
    var Cn = function (a) {
        var b = _.aj(window), c = b ? "http" : "https", d = _.H(b ? 173 : 174);
        b = _.ig(3, 6, "");
        a = c + "://" + d + "/gpt/" + a + "_265.js";
        b && (a += "?" + b);
        return a
    };
    Ba(Bn);
    Bn.prototype.load = Ff(Bn.prototype.load);
    var Dn, En, Fn;
    Dn = function (a) {
        window.googletag._ = _.M(340, function (a) {
            a(_);
            window.googletag._({});
            delete window.googletag._
        });
        var b = Cn("pubads_impl_rendering");
        a ? un(b, "gpt_rendering") : _.Ad(window.document, b)
    };
    En = _.C.once(function () {
        return Dn(!1)
    });
    Fn = _.C.once(function () {
        return Dn(!0)
    });
    _.Gn = [];
    var Hn = function (a) {
        this.Aa = function () {
            return "cmd"
        };
        this.push = function (b) {
            return a.push.apply(a, arguments)
        }
    };
    _.v(Hn, ck);
    var In = function () {
        this.m = this.za = 0
    };
    _.v(In, lk);
    _.h = In.prototype;
    _.h.ya = function () {
        return new Hn(this)
    };
    _.h.fb = function () {
        return _.F(27)
    };
    _.h.bb = function () {
        return "cmd"
    };
    _.h.push = function (a) {
        for (var b = Zj(), c = 0; c < arguments.length; ++c)try {
            _.Ea(arguments[c]) && (arguments[c](), this.za++)
        } catch (d) {
            this.m++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Nk(String(d.message)))
        }
        b.info(Ok(String(this.za), String(this.m)));
        return this.za
    };
    _.h.push = _.M(76, In.prototype.push);
    var Jn = function () {
        var a = _.Gh().cmd;
        if (!a || _.y(a)) {
            var b = new In;
            _.Gh().cmd = b.C();
            a && 0 < a.length && b.push.apply(b, a)
        }
    };
    Jn = _.M(77, Jn);
    (function () {
        function a(a) {
            this.t = {};
            this.tick = function (a, b, c) {
                this.t[a] = [void 0 != c ? c : (new Date).getTime(), b];
                if (void 0 == c)try {
                    window.console.timeStamp("CSI/" + a)
                } catch (m) {
                }
            };
            this.tick("start", null, a)
        }

        var b;
        if (window.performance)var c = (b = window.performance.timing) && b.responseStart;
        var d = 0 < c ? new a(c) : new a;
        window.GPT_jstiming = {Timer: a, load: d};
        b && (b = b.navigationStart, 0 < b && c >= b && (window.GPT_jstiming.srt = c - b));
        try {
            c = null, window.chrome && window.chrome.csi && (c = Math.floor(window.chrome.csi().pageT)), null == c && window.gtbExternal && (c = window.gtbExternal.pageT()), null == c && window.external && (c = window.external.pageT), c && (window.GPT_jstiming.pt = c)
        } catch (e) {
        }
    })();
    if (window.GPT_jstiming) {
        window.GPT_jstiming.Mb = {};
        window.GPT_jstiming.Jc = 1;
        var Kn = function (a, b, c) {
            var d = a.t[b], e = a.t.start;
            if (d && (e || c))return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
        };
        window.GPT_jstiming.getTick = Kn;
        var Ln = function (a, b, c) {
            var d = "";
            window.GPT_jstiming.srt && (d += "&srt=" + window.GPT_jstiming.srt);
            window.GPT_jstiming.pt && (d += "&tbsrt=" + window.GPT_jstiming.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (x) {
            }
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    d += "&npn=1";
                    var f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (window.encodeURIComponent || window.escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var g = a.t, k = g.start;
            e = [];
            f = [];
            for (var m in g)if ("start" != m && 0 != m.indexOf("_")) {
                var p = g[m][1];
                p ? g[p] && f.push(m + "." + Kn(a, m, g[p][0])) : k && e.push(m + "." + Kn(a, m))
            }
            if (b)for (var n in b)d += "&" + n + "=" + b[n];
            (b = c) || (b = "https:" == window.document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.GPT_jstiming.sn || "gpt") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        };
        window.GPT_jstiming.getReportUri = Ln;
        var Mn = function (a, b, c) {
            a = Ln(a, b, c);
            if (!a)return "";
            b = new window.Image;
            var d = window.GPT_jstiming.Jc++;
            window.GPT_jstiming.Mb[d] = b;
            b.onload = b.onerror = function () {
                window.GPT_jstiming && delete window.GPT_jstiming.Mb[d]
            };
            b.src = a;
            b = null;
            return a
        };
        window.GPT_jstiming.report = function (a, b, c) {
            var d = window.document.visibilityState, e = "visibilitychange";
            d || (d = window.document.webkitVisibilityState, e = "webkitvisibilitychange");
            if ("prerender" == d) {
                var f = !1, g = function () {
                    if (!f) {
                        b ? b.prerender = "1" : b = {prerender: "1"};
                        if ("prerender" == (window.document.visibilityState || window.document.webkitVisibilityState))var d = !1; else Mn(a, b, c), d = !0;
                        d && (f = !0, window.document.removeEventListener(e, g, !1))
                    }
                };
                window.document.addEventListener(e, g, !1);
                return ""
            }
            return Mn(a, b, c)
        }
    }
    ;
    var Nn = function () {
        this.o = [];
        this.m = [];
        this.za = {}
    }, On = function (a, b) {
        return a.za[b] || []
    };
    Ba(Nn);
    var Pn = function (a) {
        return !!_.Jd(Kj(), function (b) {
            return b == a
        })
    }, Qn, Rn = function () {
        var a = this;
        this.za = {};
        this.o = {};
        this.m = {};
        this.u = Zj();
        if (!_.F(57) && (this.l = this.m, Vd(Object.defineProperty))) {
            var b = _.C.once(function () {
                window.console && window.console.error && window.console.error("googletag.slot_manager_instance is deprecated and will be removed.")
            });
            Object.defineProperty(this, "l", {
                get: function () {
                    b();
                    return a.m
                }
            })
        }
    };
    Rn.prototype.add = function (a, b, c) {
        var d = void 0 === c ? {} : c;
        c = void 0 === d.rb ? void 0 : d.rb;
        var e = void 0 === d.lc ? _.O : d.lc;
        if (!_.w(a) || 0 >= a.length || !b)return null;
        d = Jj(void 0 === d.format ? 0 : d.format);
        if (null != d) {
            var f = _.Lg(window);
            if (Qg(f, d))return null;
            f.adCount = f.adCount || {};
            f.adCount[d] = f.adCount[d] + 1 || 1
        }
        a in this.za || (this.za[a] = [], this.o[a] = 0);
        b = new e(a, this.o[a], b, c);
        this.o[a]++;
        c = b.getSlotId().getDomId();
        if (this.m[c])return this.u.error(Mk(c)), null;
        this.za[a].push(b);
        this.m[b.getSlotId().getDomId()] = b;
        _.uj.push(b);
        a = _.xm();
        c = pj([b])[0];
        a.G || (a.G = !0, Bm(a, "n" + c));
        return b
    };
    var Sn = function (a) {
        var b = [];
        _.Ib(a.za, function (a) {
            _.z(a, function (a) {
                b.push(a)
            })
        });
        return b
    };
    Rn.prototype.v = function (a) {
        var b = [];
        a = On(Nn.L(), a);
        _.z(a, function (a) {
            (a = _.gn(a, window.document)) && b.push(a.contentWindow)
        });
        return b
    };
    var Tn = function (a, b) {
        _.z(b, function (a) {
            a.Ya = !0;
            a.za.info(Nl(a.u.toString()), null, a);
            var b = Jj(a.ca);
            if (null != b) {
                var c = _.Lg(window), f = c.adCount && c.adCount[b];
                f && (c.adCount[b] = f - 1)
            }
            b = a.getAdUnitPath();
            _.eb(this.za[b], a);
            0 == this.za[b].length && (c = this.za, b in c && delete c[b]);
            b = this.m;
            c = a.getSlotId().getDomId();
            c in b && delete b[c];
            _.eb(_.uj, a)
        }, a)
    }, Un = function (a, b) {
        if (b && !_.y(b))return a.u.A(qk("googletag.destroySlots", [b])), !1;
        b ? (_.ia(b), b = _.u(b, function (a) {
            return a && !a.Ea()
        })) : b = Sn(a);
        if (!b || 0 == b.length)return !1;
        Pm().destroySlots(b);
        Tn(a, b);
        return !0
    }, Vn = function (a, b) {
        return a.m[b] ? a.m[b] : null
    }, Xn = function (a) {
        var b = Wn(), c = ek(a, _.O);
        return !!c && Kb(b.za, function (a) {
                return _.bb(a, c)
            })
    }, Wn = function () {
        if (_.F(52))return Qn || (Qn = new Rn);
        var a = _.Gh();
        return a.slot_manager_instance || (a.slot_manager_instance = new Rn)
    }, Yn = function (a, b, c) {
        if (_.w(a) && (!_.ua(c) || _.w(c))) {
            var d = Wn();
            return d && d.add(a, b, {rb: c, lc: void 0})
        }
        return null
    }, Zn = function (a, b, c) {
        return (a = Yn(a, b, c)) && a.C()
    }, $n = function (a) {
        var b = Wn();
        return b && null == a ? Un(b) : b && _.y(a) ? (a = _.r(a, function (a) {
            return ek(a, _.O)
        }), Un(b, a)) : !1
    }, ao = function (a, b, c) {
        if (a = Wn().add(a, [1, 1], {rb: c, format: b}))a.qa = !0, a.ca = b;
        return a
    }, bo = function (a, b) {
        if (!_.w(a) || !(null == b || _.w(b) || _.t(b) && Pn(b)))return null;
        var c = _.w(b) ? b : void 0;
        b = _.t(b) ? b : 0;
        return 3 == b && _.q != _.q.top ? (Zj().A($l(String(a))), null) : (a = ao(a, b, c)) && a.C()
    };
    Zn = _.M(74, Zn);
    $n = _.M(75, $n);
    bo = _.M(73, bo);
    Hh("defineOutOfPageSlot", bo);
    Hh("defineSlot", Zn);
    Hh("defineUnit", Zn);
    Hh("destroySlots", $n);
    Hh("getWindowsThatCanCommunicateWithHostpageLibrary", Rn.prototype.v);
    var co = _.M(95, function (a) {
        var b, c = Zj(), d = b = null, e = "";
        _.w(a) ? (e = a, b = Vn(Wn(), e)) : _.Fa(a) && 1 == a.nodeType ? (d = a, e = d.id, b = Vn(Wn(), e)) : _.F(38) && (b = ek(a, _.O));
        b ? dn(b, d) : e ? c.error(Lk(String(e))) : c.error(Kk(String(a)))
    });
    Hh("display", co);
    var eo = window.navigator, fo = function () {
        try {
            return eo.javaEnabled()
        } catch (a) {
            return !1
        }
    }, go = function (a) {
        var b = 1, c;
        if (void 0 != a && "" != a)for (b = 0, c = a.length - 1; 0 <= c; c--) {
            var d = a.charCodeAt(c);
            b = (b << 6 & 268435455) + d + (d << 14);
            d = b & 266338304;
            b = 0 != d ? b ^ d >> 21 : b
        }
        return b
    }, ho = function (a, b) {
        if (!a || "none" == a)return 1;
        a = String(a);
        "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return go(a.toLowerCase())
    }, io = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/, jo = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/, ko = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    _.lo = function (a, b) {
        if (!(window && Math.random && window.navigator))return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId())return c.getOseId()
            } catch (e) {
            }
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            if (!0 === c)var d = 2; else!1 !== c && (d = Fd([0], a), null == d && ((d = Fd([2], b)) || (d = 3)));
            if (!d)return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };
    _.Oa();
    var mo = function (a, b, c) {
        var d = _.jg(11);
        c = void 0 === c ? 100 : c;
        d = void 0 === d ? 10 : d;
        for (var e = a, f = 0; f < c && e; f++) {
            var g = e.style;
            if (g && g.height && "auto" != g.height && "inherit" != g.height || g && g.maxHeight && "auto" != g.maxHeight && "inherit" != g.maxHeight)return !1;
            e = e.parentElement
        }
        e = a;
        for (f = 0; f < c && e; f++) {
            if ((g = _.Bd(e, b)) && "hidden" == g.overflowY)return !1;
            e = e.parentElement
        }
        e = a;
        for (a = 0; a < c && e; a++) {
            a:{
                f = e;
                g = d;
                var k = ["height", "max-height"];
                g = void 0 === g ? 10 : g;
                var m = b.document.styleSheets;
                if (m) {
                    var p = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.msMatchesSelector || f.oMatchesSelector;
                    g = -1 == g ? window.Infinity : g;
                    for (var n = 0; n < Math.min(m.length, 10); ++n) {
                        var x = void 0;
                        try {
                            var G = m[n], A = null;
                            try {
                                A = G.cssRules || G.rules
                            } catch (zb) {
                                if (15 == zb.code)throw zb.styleSheet = G, zb;
                            }
                            x = A
                        } catch (zb) {
                            continue
                        }
                        if (x && 0 < x.length)for (A = 0; A < Math.min(x.length, g); ++A)if (1 === x[A].type) {
                            var W = x[A];
                            if (p.call(f, W.selectorText))for (var va = 0; va < k.length; ++va)if (W.style[k[va]]) {
                                f = !0;
                                break a
                            }
                        }
                    }
                }
                f = !1
            }
            if (f)return !1;
            e = e.parentElement
        }
        return !0
    };
    var no = function (a) {
        a = void 0 === a ? window : a;
        return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers.tagSdk ? "afma-gpt-sdk-i" : null
    }, oo = function (a, b) {
        b = void 0 === b ? window : b;
        var c = no(b);
        if (!c)return null;
        var d = null;
        try {
            "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__google_tag_n || "5", b.webkit.messageHandlers.tagSdk.postMessage("GAM="))
        } catch (e) {
            return "3"
        }
        return _.w(d) ? d : "3"
    };
    var po, ro;
    po = _.C.X(function () {
        return !(hc || ic || gc) && (sc || _.cc || bc && _.pc(11))
    });
    _.qo = _.C.X(function () {
        return sc && _.pc(56)
    });
    ro = function (a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        var f = a.createElement("link");
        try {
            f.rel = c;
            if (-1 != c.toLowerCase().indexOf("stylesheet"))var g = ad(b); else {
                if (b instanceof $c)var k = ad(b); else {
                    if (b instanceof cd)if (b instanceof cd && b.constructor === cd && b.xc === bd)var m = b.ub; else Ca(b), m = "type_error:SafeUrl"; else {
                        if (b instanceof cd)var p = b; else b = "object" == typeof b && b.vb ? b.cb() : String(b), dd.test(b) || (b = "about:invalid#zClosurez"), p = ed(b);
                        m = p.cb()
                    }
                    k = m
                }
                g = k
            }
            f.href = g
        } catch (n) {
            return null
        }
        d && "preload" == c && (f.as = d);
        e && (f.nonce = e);
        a = a.getElementsByTagName("head")[0];
        if (!a)return null;
        try {
            a.appendChild(f)
        } catch (n) {
        }
        return f
    };
    var so = /^\.google\.(com?\.)?[a-z]{2,3}$/, to = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/, uo = function (a) {
        return so.test(a) && !to.test(a)
    }, vo = function (a) {
        return a.replace(/[\W]/g, function (a) {
            return "&#" + a.charCodeAt() + ";"
        })
    }, wo = _.q, yo = function (a, b) {
        a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
        b = ["domain=" + (0, window.encodeURIComponent)(_.q.location.hostname)];
        xo[3] >= _.Oa() && b.push("adsid=" + (0, window.encodeURIComponent)(xo[1]));
        return a + "?" + b.join("&")
    }, xo, zo, Ao = function () {
        wo = _.q;
        xo = wo.googleToken = wo.googleToken || {};
        var a = _.Oa();
        xo[1] && xo[3] > a && 0 < xo[2] || (xo[1] = "", xo[2] = -1, xo[3] = -1, xo[4] = "", xo[6] = "");
        zo = wo.googleIMState = wo.googleIMState || {};
        uo(zo[1]) || (zo[1] = ".google.com");
        _.y(zo[5]) || (zo[5] = []);
        _.wa(zo[6]) || (zo[6] = !1);
        _.y(zo[7]) || (zo[7] = []);
        _.t(zo[8]) || (zo[8] = 0)
    }, Bo = function (a) {
        try {
            a()
        } catch (b) {
            _.q.setTimeout(function () {
                throw b;
            }, 0)
        }
    }, Do = function (a) {
        "complete" == _.q.document.readyState || "loaded" == _.q.document.readyState || _.q.document.currentScript && _.q.document.currentScript.async ? Co(3) : a()
    }, Eo = 0, Fo = {
        Ga: function () {
            return 0 < zo[8]
        }, Eb: function () {
            zo[8]++
        }, ec: function () {
            0 < zo[8] && zo[8]--
        }, fc: function () {
            zo[8] = 0
        }, Fa: function () {
        }, kc: function () {
            return !1
        }, tb: function () {
            return zo[5]
        }, ob: Bo
    }, Go = {
        Ga: function () {
            return zo[6]
        }, Eb: function () {
            zo[6] = !0
        }, ec: function () {
            zo[6] = !1
        }, fc: function () {
            zo[6] = !1
        }, Fa: function () {
        }, kc: function () {
            return ".google.com" != zo[1] && 2 < ++Eo
        }, tb: function () {
            return zo[7]
        }, ob: function (a) {
            Do(function () {
                Bo(a)
            })
        }
    }, Co = function (a) {
        1E-5 > Math.random() && _.ae(_.q, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + a, void 0)
    };
    Fo.Fa = function () {
        if (!Fo.Ga()) {
            var a = _.q.document, b = function (b) {
                var c = yo("js", b), d = Ud();
                ro(a, c, "preload", "script", d);
                b = a.createElement("script");
                b.type = "text/javascript";
                d && (b.nonce = d);
                b.onerror = function () {
                    return _.q.processGoogleToken({}, 2)
                };
                c = ud(c);
                fd(b, c);
                try {
                    (a.head || a.body || a.documentElement).appendChild(b), Fo.Eb()
                } catch (k) {
                }
            }, c = zo[1];
            b(c);
            ".google.com" != c && b(".google.com");
            b = {};
            var d = (b.newToken = "FBT", b);
            _.q.setTimeout(function () {
                return _.q.processGoogleToken(d, 1)
            }, 1E3)
        }
    };
    Go.Fa = function () {
        if (!Go.Ga()) {
            var a = _.q.document, b = yo("sync.js", zo[1]);
            ro(a, b, "preload", "script");
            b = vo(b);
            var c = Vb("script"), d = "", e = Ud();
            e && (d = 'nonce="' + vo(e) + '"');
            var f = "<" + c + ' src="' + b + '" ' + d + "></" + c + ">" + ("<" + c + " " + d + '>processGoogleTokenSync({"newToken":"FBS"},5);</' + c + ">");
            Do(function () {
                a.write(f);
                Go.Eb()
            })
        }
    };
    var Ho = function (a, b) {
        Ao();
        var c = wo.googleToken[5] || 0;
        a && (0 != c || xo[3] >= _.Oa() ? b.ob(a) : (b.tb().push(a), b.Fa()));
        xo[3] >= _.Oa() && xo[2] >= _.Oa() || b.Fa()
    }, Jo = function (a) {
        _.q.processGoogleToken = _.q.processGoogleToken || function (a, c) {
                return Io(Fo, a, c)
            };
        Ho(a, Fo)
    }, Ko = function (a) {
        _.q.processGoogleTokenSync = _.q.processGoogleTokenSync || function (a, c) {
                return Io(Go, a, c)
            };
        Ho(a, Go)
    }, Io = function (a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? 0 : c;
        var d = b.newToken || "", e = "NT" == d, f = (0, window.parseInt)(b.freshLifetimeSecs || "", 10), g = (0, window.parseInt)(b.validLifetimeSecs || "", 10), k = b["1p_jar"] || "";
        b = b.pucrd || "";
        Ao();
        1 == c ? a.fc() : a.ec();
        if (!d && a.kc())uo(".google.com") && (zo[1] = ".google.com"), a.Fa(); else {
            var m = wo.googleToken = wo.googleToken || {}, p = 0 == c && d && _.w(d) && !e && _.t(f) && 0 < f && _.t(g) && 0 < g && _.w(k);
            e = e && !a.Ga() && (!(xo[3] >= _.Oa()) || "NT" == xo[1]);
            var n = !(xo[3] >= _.Oa()) && 0 != c;
            if (p || e || n)e = _.Oa(), f = e + 1E3 * f, g = e + 1E3 * g, Co(c), m[5] = c, m[1] = d, m[2] = f, m[3] = g, m[4] = k, m[6] = b, Ao();
            if (p || !a.Ga()) {
                c = a.tb();
                for (d = 0; d < c.length; d++)a.ob(c[d]);
                c.length = 0
            }
        }
    };
    var Lo = function (a) {
        this.o = oi.is("21060637") || oi.is("21060639");
        this.za = null;
        this.m = 0;
        this.u = a
    };
    Lo.prototype.getOseId = function () {
        this.m || (this.m = _.lo(0, _.H(7)));
        return this.m
    };
    var Mo = function (a) {
        a = void 0 === a ? {} : a;
        this.za = {};
        this.m = a
    }, No = function (a, b, c, d) {
        if (!(b && b in a.m))return !1;
        if (void 0 === d || d || !a.za[b])a.za[b] = c || "";
        return !0
    }, Oo = function (a, b) {
        _.D(b.za, function (a, b) {
            this.za[b] || (this.za[b] = a)
        }, a)
    }, Po = function (a) {
        var b = new Mo(a.m);
        b.za = Ob(a.za);
        delete b.za.page_url;
        return b
    }, Ui = function (a) {
        return a.za.page_url
    }, Qo = function (a) {
        var b = [];
        _.D(a.za, function (c, d) {
            (d = a.m[d]) && c && b.push(d + "=" + (0, window.encodeURIComponent)(c))
        });
        return b.join("&")
    }, Ro = function (a, b, c, d) {
        var e = [], f = [], g = b.za;
        _.D(d, function (b, d) {
            if (b) {
                var k = "";
                null != g[d] && (k = (0, window.encodeURIComponent)(g[d]));
                for (var m = [], x = -1, G = -1, A = 0; A < a.length; ++A) {
                    var W = _.J(a[A]);
                    ++x;
                    null == c[W] ? m.push("") : (W = c[W].za, null != W[d] ? (m.push((0, window.encodeURIComponent)((0, window.encodeURIComponent)(W[d]))), G = x) : m.push(""))
                }
                if (0 <= G) {
                    A = (0, window.encodeURIComponent)(k);
                    d = [];
                    d.push(A);
                    for (A = 0; A <= G; ++A)d.push(m[A]);
                    f.push(b + "," + d.join(","))
                } else k && e.push(b + "=" + k)
            }
        });
        b = [];
        b.push(e);
        b.push(f);
        return b
    };
    var To, Uo, Wo, Xo, Aj, Vo, zj, $o, ap, bp, cp, dp, ep, fp, hp;
    To = function () {
        var a = So();
        this.za = {};
        this.m = {};
        this.F = [];
        this.Y = a;
        this.u = new Mo(a);
        this.v = {};
        this.K = {};
        this.B = {};
        this.V = {};
        this.T = {};
        this.W = this.R = "";
        this.o = !1;
        this.G = -1;
        this.O = 0;
        this.P = 2;
        this.D = this.w = !1;
        this.J = {};
        this.M = !1;
        this.I = new _.nk
    };
    Uo = function (a, b) {
        var c = _.J(b);
        return a.za[c] ? a.za[c] : a.za[c] = b
    };
    Wo = function (a) {
        return _.u(Vo(a), function (a) {
            return !a.V
        })
    };
    Xo = function (a, b) {
        _.z(b, function (b) {
            _.J(b)in a.za && jn(b)
        })
    };
    _.Yo = function (a, b) {
        return !(_.J(b)in a.T)
    };
    _.Zo = function (a, b) {
        a.renderEnded(b)
    };
    Aj = function (a) {
        var b = 0;
        _.D(a.za, function () {
            b++
        });
        return b
    };
    To.prototype.toString = function () {
        var a = "[AdData:", b = [];
        _.D(this.za, function (a) {
            b.push(a.toString())
        });
        _.D(this.m, function (a, d) {
            b.push("[" + d + "," + a + "]")
        });
        a += b.join();
        return a + "]"
    };
    Vo = function (a) {
        var b = [];
        _.D(a.za, function (a) {
            b.push(a)
        });
        return b
    };
    zj = function (a) {
        a = Vo(a);
        a = _.r(a, function (a) {
            return a.w
        });
        _.ia(a);
        return a
    };
    $o = function (a, b, c) {
        if (!qb(Bb(b))) {
            qb(Bb(c)) && (c = "");
            var d = a.m[b];
            a.m[b] = d ? d + "," + c : c
        }
    };
    ap = function (a) {
        var b = [];
        _.D(a.m, function (a, d) {
            b.push((0, window.encodeURIComponent)(d) + "=" + (0, window.encodeURIComponent)(a))
        });
        0 < a.F.length && !("excl_cat"in a.m) && (a = a.F.join(","), b.push((0, window.encodeURIComponent)("excl_cat") + "=" + (0, window.encodeURIComponent)(a)));
        return b.join("&")
    };
    bp = function (a, b) {
        var c = a.B[_.J(b)];
        if (!c)return null;
        try {
            var d = window.top, e = new _.gd(0, 0), f = _.jd(c);
            var g = f ? _.od(f) : window;
            if (Wb(g, "parent")) {
                f = c;
                do {
                    var k = g == d ? _.se(f) : _.te(f);
                    e.x += k.x;
                    e.y += k.y
                } while (g && g != d && g != g.parent && (f = g.frameElement) && (g = g.parent))
            }
            var m = e
        } catch (p) {
            m = new _.gd(-12245933, -12245933)
        }
        c = m && _.Ne(c);
        d = _.ji(Li);
        if (c && (0 <= m.x || 0 <= m.y)) {
            if (a.V[_.J(b)] = m, 0 == m.x || 0 == m.y)switch (d) {
                case "21062398":
                    ki(Mi, "21062408");
                    break;
                case "21062399":
                    ki(Mi, "21062410");
                    break;
                case "21062400":
                    ki(Mi, "21062412");
                    break;
                case "21062593":
                    ki(Mi, "21062594"), 0 == m.x && (m.x = 1), 0 == m.y && (m.y = 1)
            }
        } else if (!c)switch (d) {
            case "21062398":
                ki(Mi, "21062409");
                break;
            case "21062399":
                return ki(Mi, "21062411"), new _.gd(-12245933, -12245933);
            case "21062400":
                return ki(Mi, "21062413"), new _.gd(-12245933, -12245933);
            case "21062593":
                ki(Mi, "21062595")
        }
        return m
    };
    cp = function (a) {
        return _.r(a, function (a) {
            return dj(a)
        }).join()
    };
    dp = function (a) {
        var b = !1;
        a = _.r(a, function (a) {
            a = a.getFirstLook();
            0 != a && (b = !0);
            return a
        });
        return b ? a.join() : void 0
    };
    ep = function (a, b) {
        _.z(b, function (b) {
            if (a.za[_.J(b)]) {
                var c = a.za;
                b = _.J(b);
                b in c && delete c[b]
            }
        })
    };
    fp = function (a, b) {
        var c = [];
        _.z(Vo(a), function (a) {
            a.Ja && !_.bb(b, a) && c.push(a.Ja)
        });
        return c
    };
    _.gp = function (a, b, c, d) {
        a = a.V[_.J(d)] || bp(a, d);
        if (!a || -12245933 == a.y)return !0;
        try {
            var e = Me(b.top.document, b.top).y, f = Oe(!0, b), g = e + f.height * (c + 1);
            return a.y >= e && a.y <= g
        } catch (k) {
            return !0
        }
    };
    hp = function (a, b) {
        if (!_.F(54))return 0;
        var c = $a(b, function (b) {
            return !!_.P(b) && _.gp(a, _.q, 2, b)
        });
        return b.length - 1 - c
    };
    var ip = function () {
        this.za = [];
        this.Y = !1;
        this.J = "";
        this.F = window.NaN;
        this.V = "json_html";
        this.v = "fif";
        this.o = 1;
        this.M = !1;
        this.m = "";
        this.K = [];
        this.persistentRoadblocksOnly = !1;
        this.videoPodNumber = this.videoPodPosition = window.NaN;
        this.P = this.T = "";
        this.R = !1;
        this.videoStreamCorrelator = window.NaN;
        this.B = 0;
        this.W = this.O = this.I = "";
        this.G = [];
        this.D = this.w = this.u = 0
    };
    _.jp = function (a, b) {
        b = b._reactive_config_;
        a:switch (b && b.adFormat) {
            case 2:
                b = 1;
                break a;
            case 1:
                b = 2;
                break a;
            default:
                b = null
        }
        if (!b)return null;
        (a = ao(a, b)) && (b = Pm().find("publisher_ads")) && a.addService(b);
        return a
    };
    var So = function () {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_content_section = "region", a.adsense_cpm = "cpm", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_font_size = "fs", a.adsense_hints = "hints", a.adsense_host = "host", a.adsense_host_channel = "h_ch", a.adsense_host_tier_id = "ht_id", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_relevant_content = "contents", a.adsense_targeting = "targeting", a.adsense_targeting_types = "targeting", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_ch = "cust_ch", a.demographic_gender = "cust_gender", a.demographic_interests = "cust_interests", a.demographic_job = "cust_job", a.demographic_l = "cust_l", a.demographic_lh = "cust_lh", a.demographic_u_url = "cust_u_url", a.demographic_unique_id = "cust_id", a.document_language = "hl", a.geography_override_city = "gcs", a.geography_override_country = "gl", a.google_content_recommendation_ad_positions = "ad_pos", a.matched_content_columns_num = "cr_col", a.matched_content_rows_num = "cr_row", a.matched_content_ui_type = "crui", a.matched_content_use_square_imgs = "cr_sq_img", a
    };
    var mp, lp, kp, op, pp;
    mp = function (a) {
        var b;
        this.u = b = void 0 === b ? window.document : b;
        this.za = void 0 === a ? 0 : a;
        this.o = kp(this, "__gads=");
        this.w = !1;
        this.m = null;
        this.v = !1;
        lp(this)
    };
    _.np = function (a, b) {
        b._cookies_ && b._cookies_.length && (a.m = b._cookies_[0], null != a.m && (a.o = a.m._value_, null != a.m && a.o && (b = new Date, b.setTime(1E3 * a.m._expires_), a.u.cookie = "__gads=" + a.o + "; expires=" + b.toGMTString() + "; path=" + a.m._path_ + "; domain=." + a.m._domain_)))
    };
    lp = function (a) {
        if (!a.o && !a.v && 1 != a.za) {
            a.u.cookie = "GoogleAdServingTest=Good";
            var b = "Good" == kp(a, "GoogleAdServingTest=");
            if (b) {
                var c = new Date;
                c.setTime((new Date).valueOf() + -1);
                a.u.cookie = "GoogleAdServingTest=; expires=" + c.toGMTString()
            }
            a.w = b;
            a.v = !0
        }
    };
    kp = function (a, b) {
        a = a.u.cookie;
        var c = a.indexOf(b), d = "";
        -1 != c && (b = c + b.length, c = a.indexOf(";", b), -1 == c && (c = a.length), d = a.substring(b, c));
        return d
    };
    op = null;
    pp = function (a) {
        null == op && (op = new mp(void 0 === a ? 0 : a));
        return op
    };
    var qp = function (a) {
        var b = "performance"in window && "now"in window.performance ? window.performance.now.bind(window.performance) : _.Oa;
        for (a = b() + a; b() < a;);
        b()
    }, rp = function (a, b) {
        b >= a.length || (qp(a[b]), window.requestAnimationFrame(function () {
            return rp(a, ++b)
        }))
    }, sp = function (a) {
        window.requestAnimationFrame(function () {
            return rp(a, 0)
        })
    }, tp = function () {
        if (_.Ea(window.requestAnimationFrame)) {
            var a = kg(2);
            a.length && (a = a.map(function (a) {
                return _.Md(a, 0)
            }), sp(a))
        }
    };
    var up = 0, vp = function () {
        try {
            var a = _.Uh.L(), b = _.H(152);
            b && b.length && _.z(b, function () {
                a.za[b] = !0
            });
            _.pg(a, 3)
        } catch (c) {
            Fj(408, c, !0)
        }
    }, wp = function () {
        _.z(window.document.getElementsByTagName("script"), function (a) {
            var b = a.src;
            !b || -1 == b.indexOf("/tag/js/gpt.js") && -1 == b.indexOf("/tag/js/gpt_mobile.js") || !a.innerHTML || a.googletag_executed || (a.googletag_executed = !0, eval(a.innerHTML))
        })
    }, xp = function () {
        up = _.kf();
        vp();
        try {
            jj() && ($h = !0);
            var a = _.H(152);
            a && a.length && _.z(a, function (a) {
                return _.li(a, !1)
            });
            _.Hi.is("21061546") || Ah();
            Gi.is("21061301") && En();
            _.F(61) && (_.Lg(window).disablePageHeightCheck = !0);
            var b = _.xm();
            tp();
            Hh("apiReady", !0);
            Lj();
            !_.Gh().fifWin || _.qj(window.document) ? Jn() : _.Ih(window, function () {
                window.setTimeout(function () {
                    Jn()
                }, 0)
            });
            _.M(297, function () {
                return wp()
            }, Gj).call();
            b.m && b.w("loader_loaded_instant");
            var c = _.nj() + "//www.googletagservices.com";
            _.Mm(b, c + "/tag/js/gpt.js", "gpt");
            _.Mm(b, c + "/tag/js/gpt_mobile.js", "gpt");
            Ij()
        } catch (d) {
            Fj(106, d)
        }
    };
    var zp, yp;
    zp = function () {
        var a = void 0 === a ? window.document : a;
        this.za = {};
        yp(a.URL, this.za)
    };
    _.Ap = function (a, b) {
        return a.za[b] || null
    };
    yp = function (a, b) {
        a = a.split("?");
        a = a[a.length - 1].split("&");
        _.z(a, function (a) {
            a = a.split("=");
            if (a[0]) {
                var c = a[0].toLowerCase();
                if ("google_domain_reset_url" != c)try {
                    if (1 < a.length) {
                        var e = a[1];
                        var f = window.decodeURIComponent ? (0, window.decodeURIComponent)(e.replace(Zi, " ")) : (0, window.unescape)(e)
                    } else f = "";
                    b[c] = f
                } catch (g) {
                }
            }
        })
    };
    var Bp = null, Cp = function (a, b, c, d) {
        try {
            var e;
            if (e = b) {
                var f;
                if (!(f = !mo(b, c, void 0 === d ? 100 : d))) {
                    a:{
                        do {
                            var g = _.Bd(b, c);
                            if (g && "fixed" == g.position) {
                                var k = !1;
                                break a
                            }
                        } while (b = b.parentElement);
                        k = !0
                    }
                    f = !k
                }
                e = f
            }
            e && (a.height = -1)
        } catch (m) {
            a.width = -1, a.height = -1
        }
    }, Dp = Ff(_.Bd, function (a, b) {
        return a + "_" + Ia(b[0])
    }), Ep = function (a, b, c) {
        c = void 0 === c ? "" : c;
        var d = void 0 === d ? function (a) {
            return !!a
        } : d;
        var e = [], f = !1;
        _.z(a, function (a) {
            a = b(a);
            var g = d(a);
            f = f || g;
            e.push(String(g ? a : c))
        });
        return f ? e.join() : null
    }, Fp = function (a) {
        var b = a.getTargetingMap();
        a = a.getCategoryExclusions();
        a.length && null == b.excl_cat && (b.excl_cat = a);
        return b
    }, Gp = function (a, b) {
        var c = {};
        _.D(a, function (a, e) {
            if (b[e]) {
                var d = _.u(b[e], function (b) {
                    return -1 < a.indexOf(b)
                });
                d.length && (c[e] = d)
            }
        });
        return c
    }, Hp = function (a, b) {
        b = void 0 === b ? function () {
            return !0
        } : b;
        a = Fp(a);
        var c = [];
        _.D(a, function (a, e) {
            a = _.u(a, function (a) {
                return b(a, e)
            });
            if (a.length) {
                a = _.r(a, window.encodeURIComponent);
                var d = (0, window.encodeURIComponent)(e);
                c.push(d + "=" + a.join())
            }
        });
        return c
    }, Ip = function (a, b, c, d, e) {
        this.za = b;
        this.v = c;
        this.o = d;
        this.mode = a;
        this.m = e;
        this.u = "";
        this.D = So();
        this.w = [];
        this.B = []
    }, Mp = function (a, b) {
        var c = void 0 === c ? window : c;
        if (!_.y(b))return "";
        if (Jp(a))0 == b.length && (b = Vo(a.za)); else {
            if (0 == b.length)return "";
            1 < b.length && (b = [b[0]])
        }
        var d = !!Pg(_.q);
        b = _.u(b, function (a) {
            return d && 3 == a.ca ? (Zj().A(am(String(a.getAdUnitPath()))), !1) : !0
        });
        if (!b.length)return "";
        30 < b.length && (Zj().A(Tl("30", String(b.length), String(b.length - 30))), b = hb(b, 0, 30));
        Kp(a);
        Lp(a, b, c);
        return a.u
    }, Np = function (a, b) {
        try {
            var c = b.top;
            var d = Me(c.document, c)
        } catch (e) {
            d = new _.gd(-12245933, -12245933)
        }
        Q(a, "scr_x", Math.round(d.x));
        Q(a, "scr_y", Math.round(d.y))
    }, Op = function (a) {
        var b = window;
        var c = b.document.domain;
        var d = b.document.cookie, e = b.history.length, f = b.screen, g = b.document.referrer;
        if (xe())c = _.Ie().gaGlobal || {}; else {
            var k = Math.round((new Date).getTime() / 1E3), m = b.google_analytics_domain_name;
            c = "undefined" == typeof m ? ho("auto", c) : ho(m, c);
            var p = -1 < d.indexOf("__utma=" + c + "."), n = -1 < d.indexOf("__utmb=" + c), x;
            (x = (Be() || _.Ie()).gaGlobal) || (x = {}, (Be() || _.Ie()).gaGlobal = x);
            var G = !1;
            if (p)g = d.split("__utma=" + c + ".")[1].split(";")[0].split("."), n ? x.sid = g[3] : x.sid || (x.sid = k + ""), x.vid = g[0] + "." + g[1], x.from_cookie = !0; else {
                x.sid || (x.sid = k + "");
                if (!x.vid) {
                    G = !0;
                    n = Math.round(2147483647 * Math.random());
                    p = [eo.appName, eo.version, eo.language ? eo.language : eo.browserLanguage, eo.platform, eo.userAgent, fo() ? 1 : 0].join("");
                    f ? p += f.width + "x" + f.height + f.colorDepth : _.q.java && _.q.java.awt && (f = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), p += f.screen.width + "x" + f.screen.height);
                    p = p + d + (g || "");
                    for (g = p.length; 0 < e;)p += e-- ^ g++;
                    x.vid = (n ^ go(p) & 2147483647) + "." + k
                }
                x.from_cookie = !1
            }
            if (!x.cid) {
                b:for (k = 999, m && (m = 0 == m.indexOf(".") ? m.substr(1) : m, k = m.split(".").length), m = 999, d = d.split(";"), g = 0; g < d.length; g++)if (f = io.exec(d[g]) || jo.exec(d[g]) || ko.exec(d[g])) {
                    e = f[1] || 0;
                    if (e == k) {
                        var A = f[2];
                        break b
                    }
                    e < m && (m = e, A = f[2])
                }
                G && A && -1 != A.search(/^\d+\.\d+$/) ? x.vid = A : A != x.vid && (x.cid = A)
            }
            x.dh = c;
            x.hid || (x.hid = Math.round(2147483647 * Math.random()));
            c = x
        }
        R(a, "ga_vid", c.vid);
        R(a, "ga_sid", c.sid);
        R(a, "ga_hid", c.hid);
        R(a, "ga_fc", c.from_cookie);
        R(a, "ga_cid", c.cid);
        Q(a, "ga_wpids", b.google_analytics_uacct)
    }, Pp = function (a) {
        if (a != a.top)return !1;
        a = Pm().find("publisher_ads");
        if (_.F(39) && a) {
            if (qm(a, "slotVisibilityChanged"))return !1;
            if (qm(a, "impressionViewable"))return _.F(62)
        }
        return !0
    }, Lp = function (a, b, c) {
        c = void 0 === c ? window : c;
        var d = c.document;
        kn(b[0], Fe(c));
        a.m.R && (R(a, "hxva", 1), Q(a, "cmsid", a.m.P), Q(a, "vid", a.m.T));
        (0, window.isNaN)(a.m.videoPodNumber) || R(a, "pod", a.m.videoPodNumber);
        (0, window.isNaN)(a.m.videoPodPosition) || R(a, "ppos", a.m.videoPodPosition);
        (0, window.isNaN)(a.m.videoStreamCorrelator) || R(a, "scor", a.m.videoStreamCorrelator);
        Qp(a);
        Q(a, "vrg", "265");
        a.o && 0 !== a.o.za && Q(a, "co", a.o.za);
        Rp(a);
        1 === a.za.O && Q(a, "kfa", 1);
        Sp(a, b[0].w);
        Tp(a);
        if (_.F(40)) {
            var e = Xa(b, function (a) {
                return 0 < a.B && !Jj(a.ca)
            });
            Up(a, c, e)
        }
        Q(a, "sc", _.H(6) ? 1 : 0);
        window.postMessage && Q(a, "sfv", _.em());
        Jp(a) ? (Vp(a, b), Wp(a), Xp(a, b)) : (Yp(a, b[0]), Zp(a, b[0]), $p(a, b[0]), Wp(a), aq(a, b[0]));
        bq(a, b);
        cq(a, c);
        null != _.Ap(a.v, "google_preview") && Q(a, "gct", _.Ap(a.v, "google_preview"));
        if (a.za.w) {
            Q(a, "is_amp", "1");
            Q(a, "amp_v", ye());
            Q(a, "act", ze());
            Ce && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(c.location.href) && Q(a, "ati", 1);
            (e = De(c)) && Q(a, "apn", e.substr(0, 10));
            try {
                var f = JSON.parse(c.context.cachedFrameName_);
                f.attributes && f.attributes.useSameDomainRenderingUntilDeprecated && Q(a, "asd", 1)
            } catch (k) {
            }
        } else dq(a);
        Pp(c) && Q(a, "abxe", 1);
        eq(a, b, c);
        f = {};
        f.u_tz = -(new Date).getTimezoneOffset();
        f.u_his = Ee();
        f.u_java = !!Sa.navigator && "unknown" !== typeof Sa.navigator.javaEnabled && !!Sa.navigator.javaEnabled && Sa.navigator.javaEnabled();
        Sa.screen && (f.u_h = Sa.screen.height, f.u_w = Sa.screen.width, f.u_ah = Sa.screen.availHeight, f.u_aw = Sa.screen.availWidth, f.u_cd = Sa.screen.colorDepth);
        Sa.navigator && Sa.navigator.plugins && (f.u_nplug = Sa.navigator.plugins.length);
        Sa.navigator && Sa.navigator.mimeTypes && (f.u_nmime = Sa.navigator.mimeTypes.length);
        fq(a, f);
        gq(a);
        try {
            var g = Je()
        } catch (k) {
            g = "0"
        }
        R(a, "flash", g);
        hq(a, b, c);
        _.F(2) || iq(a, c);
        ($h || _.lj()) && R(a, "rumc", _.kj);
        _.si.is("21061508") && R(a, "rume", 1);
        R(a, "vis", Fg(d));
        Rh() || R(a, "stss", Qh(_.H(172)));
        !a.za.w && jq(c) && R(a, "arp", 1);
        _.q.navigator && _.q.navigator.deviceMemory && R(a, "dmc", _.q.navigator.deviceMemory);
        Np(a, c);
        kq(a, b, c);
        0 < a.m.G.length && Q(a, "psts", a.m.G.join(","));
        Op(a);
        if (Ri.is("21062379") || _.F(23))Q(a, "js", no(c)), Q(a, "ms", oo(a.m.F.toString(), c));
        lq(a, c, b);
        a.m.D && Q(a, "optslots", a.m.D)
    }, kq = function (a, b, c) {
        if (!_.F(51)) {
            var d = [], e = [];
            _.z(b, function (b) {
                if (Jp(a) || on(b)) {
                    var f = _.P(b), k = f && f.parentElement, m = _.nn(b) || new _.hd(0, 0);
                    Cp(m, k, c);
                    d.push(m.width + "x" + m.height);
                    _.F(58) || (b.La || (b.La = rj(_.P(b))), b = b.La || new _.hd(0, 0), Cp(b, f, c, 1), -1 == m.height && (b.height = -1), e.push(b.width + "x" + b.height))
                }
            });
            Q(a, "psz", d.join("|"));
            Q(a, "msz", e.join("|"))
        }
    }, lq = function (a, b, c) {
        if (_.F(30)) {
            var d = _.F(31) ? Dp : _.Bd, e = [];
            _.z(c, function (a) {
                var c = new _.Ch, f = _.P(a);
                if (f) {
                    a = Oe(!0, b).width;
                    if (null !== b && b != b.top) {
                        var m = Oe(!1, b).width;
                        (-12245933 == a || -12245933 == m || m < a) && c.set(8)
                    }
                    for (m = 0; f && 100 > m; m++, f = f.parentElement) {
                        var p = d(f, b);
                        if (p) {
                            if (p.overflowY && "visible" != p.overflowY) {
                                c.set(2);
                                break
                            }
                            if ("none" == p.display) {
                                c.set(7);
                                break
                            }
                            "IFRAME" == f.nodeName && (0, window.parseInt)(p.width, 10) < a && c.set(8)
                        } else c.set(3)
                    }
                } else c.set(1);
                e.push(_.Dh(c))
            });
            Q(a, "fws", e.join(","))
        }
    }, dq = function (a) {
        switch (_.jg(10)) {
            case 1:
                var b = 190;
                break;
            case 3:
                b = 191;
                break;
            case 2:
                b = 192;
                break;
            default:
                return
        }
        Q(a, "amp_v", _.H(b))
    }, nq = function (a, b) {
        var c = [], d = [];
        _.z(b, function (b) {
            b = bp(a.za, b) || mq;
            c.push(Math.round(b.x));
            d.push(Math.round(b.y))
        });
        Q(a, "adxs", c.join(","));
        Q(a, "adys", d.join(","))
    }, oq = function (a, b) {
        b = _.r(b, function (a) {
            var b = ej(a);
            return a.Ma = b
        });
        Q(a, "adks", b.join(","))
    }, Up = function (a, b, c) {
        var d = {}, e = zd(b);
        _.z(Fh, function (a) {
            a:if (e)if (c)var b = 67108864; else {
                var f = 0, m = _.Lg(e);
                Qg(m, a) && (f |= 64);
                switch (a) {
                    case 2:
                    case 1:
                        m = 0;
                        try {
                            m |= e != e.top ? 512 : 0;
                            b = Math.min(e.screen.width || 0, e.screen.height || 0);
                            m |= b ? 320 > b ? 8192 : 0 : 2048;
                            var p;
                            if (p = e.navigator) {
                                var n = e.navigator.userAgent;
                                p = /Firefox/.test(n) || /Android 2/.test(n) || /iPhone OS [34]_/.test(n) || /Windows Phone (?:OS )?[67]/.test(n)
                            }
                            m |= p ? 1048576 : 0
                        } catch (va) {
                            m |= 32
                        }
                        b = m;
                        p = 0;
                        try {
                            p |= e.innerHeight >= e.innerWidth ? 0 : 8;
                            var x = _.Ng(e).clientWidth;
                            p |= x ? x > (void 0 === Mg ? 420 : Mg) ? 32768 : 320 > x ? 65536 : 0 : 16384;
                            p |= Pg(e)
                        } catch (va) {
                            p |= 32
                        }
                        if (2 == a) {
                            b:{
                                if (e) {
                                    x = e.document;
                                    m = e.innerWidth;
                                    var G = Math.round(e.innerWidth / 320 * 50 + 15);
                                    n = [];
                                    for (var A = 0; 3 > A; A++)for (var W = 0; 3 > W; W++)n.push({
                                        x: W / 2 * m,
                                        y: A / 2 * G
                                    });
                                    for (m = 0; m < n.length; m++)if ((G = x.elementFromPoint(n[m].x, n[m].y)) && "fixed" == _.qe(G, "position")) {
                                        x = !0;
                                        break b
                                    }
                                }
                                x = !1
                            }
                            x && (p |= 16777216);
                            !_.Lg(e).disablePageHeightCheck && (Math.max(0, _.Ng(e).offsetHeight - _.Ng(e).clientHeight) || 0) <= e.innerHeight + Math.round(e.innerWidth / 320 * 50 + 15) && (p |= 1024)
                        }
                        b = f | b | p;
                        break a;
                    default:
                        b = f | 32
                }
            } else b = 256;
            d[a] = b
        });
        Q(a, "plat", Rg(d) || null)
    }, hq = function (a, b, c) {
        c = void 0 === c ? window : c;
        var d = c.document;
        b = Jp(a) ? Ui(a.za.u) : Vi(b[0], a.za.v) || Ui(a.za.u);
        var e = fj(d.URL, _.Ap(a.v, "google_preview")), f = fj(d.referrer, _.Ap(a.v, "google_preview"));
        d = !1;
        if (null != b) {
            var g = e;
            Af(c) || (f = "", d = !0)
        } else b = e;
        a.za.w && (f = (f = xe()) && f.referrer);
        if (_.F(2))Q(a, "url", b), Q(a, "ref", f); else {
            e = new Ze(c);
            var k = e.za[0].depth, m = 0 < k;
            if (m && (Q(a, "nhd", k), c.location.ancestorOrigins)) {
                k = [];
                for (var p = Math.min(e.za.length, 27), n = 1; n < p; n++)e.za[n] && e.za[n].url && (k[n - 1] = e.za[n].url);
                k = $e(e, k.reverse());
                Q(a, "iag", k);
                k = e.za;
                p = [];
                for (n = k.length - 1; 0 < n; n--) {
                    var x = k[n];
                    x && null != x.url && p.push(_.Qe(x.url.match(_.Pe)[3] || null))
                }
                k = Xe(p);
                0 < k && Q(a, "mdo", k)
            }
            Q(a, "url", b);
            null != g && g != b && Q(a, "loc", g);
            Q(a, "ref", f);
            m && (g = e.za[Math.max(e.za.length - 1, 0)].url) && Q(a, "top", d ? _.Qe(g.match(_.Pe)[3] || null) : g);
            if (_.F(37)) {
                if (!c.location || !c.location.ancestorOrigins || 2 >= c.location.ancestorOrigins.length)c = ""; else {
                    g = [];
                    for (b = 1; 10 > g.length && b < c.location.ancestorOrigins.length - 1; b++)d = c.location.ancestorOrigins[b], g.push((Yd(d) || d).substr(0, 20));
                    c = g.join()
                }
                c && Q(a, "aor", c)
            }
        }
    }, iq = function (a, b) {
        b = void 0 === b ? window : b;
        var c = b.document, d = c.scripts;
        d && Q(a, "dssz", d.length);
        b = new Ze(b);
        if (d = b.m.document && b.m.document.scripts ? b.m.document.scripts : []) {
            for (var e = [], f = d.length - 1; 0 <= f && 26 > e.length;)d[f].src && e.unshift(d[f].src), f--;
            d = $e(b, e)
        } else d = 0;
        Q(a, "icsg", d);
        if (b = b.m.document && b.m.document.scripts ? b.m.document.scripts : []) {
            d = [];
            for (e = b.length - 1; 0 <= e; e--)(f = b[e]) && null != f.src && d.push(_.Qe(f.src.match(_.Pe)[3] || null));
            b = Xe(d)
        } else b = 0;
        0 < b && Q(a, "mso", b);
        b = Error();
        b.stack && (d = b.stack, e = d.split(/\r\n|\r|\n/).length, "Error" == d.slice(0, 5) && e--, d = e - 13, 0 > d && (d = 0, e = new _.tj("gpt_negative_stack_trace", _.bj(), _.H(23)), _.L(e, a.za), _.K(e, "stackTrace", b.stack), _.xj(e)), Q(a, "std", d));
        c.currentScript && c.currentScript.text && Q(a, "csl", c.currentScript.text.length)
    }, aq = function (a, b) {
        var c = Hp(b).join("&");
        Q(a, "scp", c);
        b = b.getAudExtId();
        0 < b && Q(a, "audextid", b)
    }, pq = function (a) {
        a = _.r(a, Fp);
        for (var b = a.shift() || {}; a.length;)b = Gp(b, a.shift());
        return b
    }, Xp = function (a, b) {
        var c;
        _.F(49) && 1 < b.length ? c = qq(a, b) : c = _.r(b, function (a) {
            return Hp(a).join("&")
        });
        b = c.join("|");
        b.length == c.length - 1 && (b = null);
        Q(a, "prev_scp", b)
    }, qq = function (a, b) {
        var c = [], d = pq(b);
        _.z(b, function (a) {
            a = Hp(a, function (a, b) {
                b = d[b];
                return !b || -1 == b.indexOf(a)
            });
            c.push(a.join("&"))
        });
        var e = [];
        _.D(d, function (a, b) {
            a = _.r(a, window.encodeURIComponent);
            b = (0, window.encodeURIComponent)(b);
            e.push(b + "=" + a.join())
        });
        e.length && Q(a, "csp", e.join("&"));
        return c
    }, fq = function (a, b) {
        _.D(b, function (b, d) {
            R(a, d, b)
        })
    }, Rp = function (a) {
        var b = a.za.G;
        -1 !== b && Q(a, "tfcd", b)
    }, Yp = function (a, b) {
        b = b.gtfcd();
        -1 !== b && Q(a, "tfcd", b)
    }, Sp = function (a, b) {
        var c = _.H(221);
        be = _.F(24);
        b = me(c, b);
        b.Sa && Q(a, "npa", 1);
        b.Hb && (Q(a, "vcd", b.Hb), b.Vb && Q(a, "gvcd", b.Vb));
        Q(a, "guci", b.Ha)
    }, Tp = function (a) {
        var b = a.za.P;
        2 !== b && Q(a, "tfua", b)
    }, Zp = function (a, b) {
        b = b.lb;
        2 !== b && Q(a, "tfua", b)
    }, Wp = function (a) {
        a.o && 1 == a.o.za || Q(a, "ppid", a.za.W)
    }, bq = function (a, b) {
        var c = 1 != a.m.o, d = b[0].m;
        var e = a.za.v;
        if (null != Ui(a.za.u))b = !0; else {
            for (var f = !1, g = 0; g < b.length && !f; g++)f = null != Vi(b[g], e);
            b = f
        }
        e = a.m.M;
        f = 3 == a.m.o;
        g = _.H(46);
        var k = new _.Ch;
        k.set(0, c);
        k.set(1, d);
        k.set(2, b);
        k.set(3, e);
        k.set(4, f);
        k.set(5, g);
        c = _.Dh(k);
        0 < c && Q(a, "eri", c)
    }, cq = function (a, b) {
        Q(a, "cust_params", ap(a.za));
        if (a.o && 1 != a.o.za) {
            var c = a.o;
            c = Oi.is("21061743") ? kp(c, "__gads=") : c.o;
            Q(a, "cookie", c);
            a.o.w && Q(a, "cookie_enabled", "1")
        }
        (c = a.za.R) && Q(a, "uule", c);
        a.o && 1 != a.o.za && (c = b.document, (b = (Ui(a.za.u) || cj(b)) != c.URL ? c.domain : "") && Q(a, "cdm", b));
        _.F(6) || (b = new _.Ch, _.q.SVGElement && _.q.document.createElementNS && b.set(0), c = Td(), c["allow-top-navigation-by-user-activation"] && b.set(1), c["allow-popups-to-escape-sandbox"] && b.set(2), b = _.Dh(b), Q(a, "bc", b))
    }, eq = function (a, b, c) {
        var d = c.document;
        0 < window.navigator.userAgent.indexOf("MSIE ") && No(a.za.u, "adsense_encoding", d.charset, !1);
        Q(a, "lmt", (Date.parse(c.document.lastModified) / 1E3).toString());
        var e = _.F(43) ? _.kf() : (new Date).getTime();
        R(a, "dt", e);
        try {
            e = up;
            var f = Math.min(mf("domLoading") || window.Infinity, mf("domInteractive") || window.Infinity);
            var g = window.Infinity == f ? Math.max(mf("responseEnd"), mf("navigationStart")) : f;
            0 < g && e >= g && (R(a, "dlt", g), R(a, "idt", e - g))
        } catch (x) {
            R(a, "idt", -9), _.Ej(479, x)
        }
        g = _.Ap(a.v, "deb");
        null != g && Q(a, "deb", g);
        g = _.Ap(a.v, "haonly");
        null != g && Q(a, "haonly", g);
        if (null == Bp) {
            a:{
                g = c.navigator;
                f = g.userAgent;
                e = g.platform;
                var k = /WebKit\/(\d+)/, m = /rv:(\d+\.\d+)/, p = /rv:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && !/^Opera/.test(f) && (k = (k.exec(f) || [0, 0])[1], m = (m.exec(f) || [0, 0])[1], /Win/.test(e) && /Trident/.test(f) && 11 <= d.documentMode || !k && "Gecko" === g.product && 27 <= m && !p.test(f) || 536 <= k)) {
                    g = !0;
                    break a
                }
                g = !1
            }
            f = Bf(c, c.document, 500, 300);
            Bp = g && !f
        }
        Bp || Q(a, "ea", "0");
        f = g = _.Ie();
        for (e = 0; g && g != g.parent;)g = g.parent, e++, wd(g) && (f = g);
        e = f;
        g = e.location.href;
        e == e.top ? g = {
            url: g,
            Zb: !0
        } : (f = !1, (p = e.document) && p.referrer && (g = p.referrer, e.parent == e.top && (f = !0)), (e = e.location.ancestorOrigins) && (e = e[e.length - 1]) && -1 == g.indexOf(e) && (f = !1, g = e), g = {
            url: g,
            Zb: f
        });
        d = Bf(_.Ie(), d, c.google_ad_width, c.google_ad_height);
        g = g.Zb;
        f = _.Ie();
        f = f.top == f ? 0 : wd(f.top) ? 1 : 2;
        e = 4;
        d || 1 != f ? d || 2 != f ? d && 1 == f ? e = 7 : d && 2 == f && (e = 8) : e = 6 : e = 5;
        g && (e |= 16);
        d = "" + e;
        Cf();
        d = d || null;
        null != d && Q(a, "frm", d);
        a.za.w ? d = (d = Ae()) && _.Fa(d.rootBounds) ? new _.hd(d.rootBounds.width, d.rootBounds.height) : null : d = Oe(!0, c);
        d && (Q(a, "biw", d.width), Q(a, "bih", d.height));
        !Af(c) && (d = Oe(!1, c)) && (Q(a, "isw", d.width), Q(a, "ish", d.height));
        a.m.B && Q(a, "oid", a.m.B);
        if (Jp(a))nq(a, b), oq(a, b); else {
            var n;
            a.za.w ? n = (d = (d = xe()) && (n = d.initialLayoutRect) && _.t(n.top) && _.t(n.left) && _.t(n.width) && _.t(n.height) ? new _.oe(n.left, n.top, n.width, n.height) : null) ? new _.gd(d.left, d.top) : (n = Ae()) && _.Fa(n.rootBounds) ? new _.gd(n.rootBounds.left + n.boundingClientRect.left, n.rootBounds.top + n.boundingClientRect.top) : null : n = null;
            if (n = n || bp(a.za, b[0]))Q(a, "adx", Math.round(n.x)), Q(a, "ady", Math.round(n.y));
            n = (n = b[0].Ma) || ej(b[0], a.za.K[_.J(b[0])]);
            Q(a, "adk", n)
        }
        n = 0;
        !_.ua(_.q.postMessage) && (n |= 1);
        0 < n && Q(a, "osd", n);
        b[0].m || R(a, "gut", "v2");
        d = a.za.u;
        Jp(a) ? (g = a.za.v, f = a.D, n = Ro(b, Po(d), g, f), d = Ro(b, d, g, f), g = [], n[0] && 0 < n[0].length && g.push(n[0].join("&")), d[1] && 0 < d[1].length && g.push("sps=" + d[1].join("|")), n = g.join("&")) : (n = a.za.v[_.J(b[0])], null == n ? n = d : Oo(n, d), n = Po(n), n = Qo(n));
        n && (a.u += "&" + n);
        Q(a, "ifi", b[0].Za);
        null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = Oe(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = Kd(b.join(""))) : c = 0;
        0 != c && Q(a, "ifk", c.toString())
    }, gq = function (a) {
        var b = _.q.devicePixelRatio;
        (b = _.t(b) ? +b.toFixed(3) : null) && R(a, "u_sd", b)
    }, Kp = function (a) {
        var b = a.za.R;
        b = _.H(46) && !b;
        b = $i(!b) + "/gampad/ads?";
        a.u = b;
        R(a, "gdfp_req", 1);
        Q(a, "pvsid", a.m.F);
        Q(a, "correlator", a.m.J);
        R(a, "output", a.m.V);
        R(a, "callback", a.m.m);
        R(a, "impl", a.m.v);
        _.jg(4) || (a.o && 1 == a.o.za || (Q(a, "adsid", a.m.I), Q(a, "pucrd", a.m.W)), Q(a, "jar", a.m.O));
        a.m.persistentRoadblocksOnly && Q(a, "per_only", 1);
        Jp(a) && Q(a, "json_a", 1)
    }, Qp = function (a) {
        Q(a, "eid", a.m.K.join());
        var b = df();
        b && Q(a, "debug_experiment_id", b)
    }, $p = function (a, b) {
        Q(a, "iu", b.getAdUnitPath());
        Q(a, "sz", dj(b));
        3 == b.ca && Q(a, "rbv", "1");
        _.bn(b) && Q(a, "fluid", "height");
        var c = b.getFirstLook();
        c && Q(a, "fl", c);
        c = b.fa;
        (c = (null === c ? a.za.D : c) ? 1 : 0) && Q(a, "fsf", c);
        rq(a, b) && Q(a, "fsb", "1");
        c = b.B;
        0 < c && Q(a, "rc", c);
        b.getClickUrl() && Q(a, "click", b.getClickUrl());
        b.getOutOfPage() && Q(a, "ists", "1");
        Q(a, "fa", Jj(b.ca));
        _.Yo(a.za, b) || Q(a, "logonly", "1")
    }, Vp = function (a, b) {
        _.z(b, function (b) {
            b = b.getAdUnitPath();
            var c = "";
            if ("" != b) {
                b = b.split("/");
                for (c = 0; c < b.length; c++)if ("" != b[c]) {
                    for (var d = !1, e = 0; e < a.w.length; e++)if (b[c] == a.w[e]) {
                        d = !0;
                        break
                    }
                    d || a.w.push(b[c])
                }
                c = "";
                for (d = 0; d < b.length; d++) {
                    if (0 < d)c += "/"; else if ("" == b[0])continue;
                    for (e = 0; e < a.w.length; e++)if (b[d] == a.w[e]) {
                        c += e;
                        break
                    }
                }
            }
            a.B.push(c)
        });
        Q(a, "iu_parts", a.w.join());
        Q(a, "enc_prev_ius", a.B.join());
        Q(a, "prev_iu_szs", cp(b));
        if (Wa(b, function (a) {
                return _.bn(a)
            })) {
            var c = _.r(b, function (a) {
                return _.bn(a) ? "height" : "0"
            }).join();
            Q(a, "fluid", c)
        }
        (c = dp(b)) && Q(a, "fla", c);
        Q(a, "fsfs", Ep(b, function (b) {
            b = b.fa;
            return (null === b ? a.za.D : b) ? 1 : 0
        }, 0));
        Q(a, "fsbs", Ep(b, function (b) {
            return rq(a, b) ? 1 : 0
        }, 0));
        Q(a, "rcs", Ep(b, function (a) {
            return a.B
        }, 0));
        (c = sq(b)) && Q(a, "ists", c);
        Q(a, "fas", Ep(b, function (a) {
            return Jj(a.ca)
        }));
        (c = tq(b, function (a) {
            return 3 == a.ca
        })) && Q(a, "rbvs", c);
        var d = {};
        _.z(b, function (a) {
            (a = a.getClickUrl()) && (d[a] = (d[a] || 0) + 1)
        });
        if (!_.Gd(d)) {
            b = new _.tj("gpt_sra_setclickurl");
            var e = [];
            _.D(d, function (a, b) {
                e.push(b.length + ":" + a)
            });
            _.K(b, "lenfreqs", e.join());
            _.L(b);
            _.xj(b, _.H(58))
        }
    }, rq = function (a, b) {
        b = b.ga;
        a = a.za.J;
        return null == b.sandbox ? a.sandbox : b.sandbox
    }, Jp = function (a) {
        return "sra" == a.mode
    }, Q = function (a, b, c) {
        null != c && R(a, b, (0, window.encodeURIComponent)("" + c))
    }, R = function (a, b, c) {
        null != c && "" != c && (a.u = "?" != a.u.charAt(a.u.length - 1) ? a.u + ("&" + b + "=" + c) : a.u + (b + "=" + c))
    }, sq = function (a) {
        return tq(a, function (a) {
            return a.getOutOfPage()
        })
    }, tq = function (a, b) {
        var c = new _.Ch;
        _.z(a, function (d, e) {
            c.set(a.length - e - 1, b(d))
        });
        return _.Dh(c)
    }, jq = function (a) {
        a = wd(a.top) ? a.top : a;
        return _.Fa(a.AMP) && !!_.Jd(a.AMP, function (a, c) {
                return !/^inabox/i.test(c)
            })
    }, mq = new _.gd(-9, -9);
    var wq;
    _.uq = function () {
        this.m = !1;
        this.za = {}
    };
    wq = function () {
        var a = _.uq.L(), b = window;
        if (!a.m) {
            a.m = !0;
            var c = _.Ci.is("21060356");
            c = !_.aj(b, c);
            c = _.$g(b, _.em(), _.fm(), c);
            a.za[c] = 1;
            po() ? _.vq(a, c, "prefetch") : _.Gh().fifWin || (b = b.document, a = _.sd(new _.id(b), "IFRAME"), a.src = c, a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), 0 < b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
    };
    _.vq = function (a, b, c, d) {
        var e = ro(window.document, b, c, void 0 === d ? "" : d);
        e && _.E(e, "load", function () {
            a.za[b] = 3;
            e && _.pd(e)
        })
    };
    Ba(_.uq);
    var xq, Bq, Cq, Dq, Fq, Eq, Oq;
    xq = [{
        Nb: 3, eb: function (a) {
            return a.j && a.j._is_amp_inabox_
        }
    }, {
        Nb: 1, eb: function (a) {
            return 3 == a.ca && a.j && 0 == a.j._empty_
        }
    }, {
        Nb: 2, eb: function (a) {
            var b = a.ca;
            a = a.j;
            return (1 == b || 2 == b) && a && 0 == a._empty_ && a._reactive_config_ && a._reactive_config_.fillMessage
        }
    }];
    _.S = function (a, b, c, d) {
        var e = _.Ap(c, "api_experiment");
        qb(Bb(e)) || _.z(_.r(e.split(","), rb), function (a) {
            _.li(a)
        });
        this.za = b;
        this.o = c;
        this.ja = d;
        this.da = Nn.L();
        this.O = yq();
        this.tc = yq();
        this.Qa = !1;
        this.m = a;
        this.Ba = _.xm();
        this.D = {};
        this.Y = Ff(this.Y);
        this.V = _.M(291, this.V);
        this.Ya = this.K = this.ma = this.R = this.Ka = !1;
        this.na = this.oa = "";
        this.videoStreamCorrelator = window.NaN;
        this.J = 0;
        this.ka = new Lo(this.O);
        this.uc = Math.random() < _.H(66);
        this.ua = {};
        this.P = 0
    };
    _.S.prototype.M = function () {
        return "json_html"
    };
    _.S.prototype.I = _.l(15);
    var zq = function (a, b) {
        b = void 0 === b ? 0 : b;
        var c = void 0 === c ? window : c;
        !b || Af(c) ? b = yq() : a.Qa = !0;
        a.O = Math.floor(b)
    }, yq = function () {
        return Math.floor(Math.random() * Math.pow(2, 52))
    };
    _.S.prototype.Za = function () {
        return null
    };
    _.S.prototype.Z = function (a) {
        if (!a.length)return !1;
        _.Gn.push({ba: this, aa: 16, $: [a]});
        return !1
    };
    _.S.prototype.pa = function (a) {
        this.qc(a)
    };
    _.S.prototype.loaded = function (a) {
        var b = _.gn(a, window.document);
        b && b.setAttribute("data-load-complete", !0);
        a.loaded()
    };
    _.Aq = function (a, b, c, d, e) {
        e = void 0 === e ? 0 : e;
        var f = new ip;
        f.V = a.M();
        f.v = a.W(a.m);
        f.F = a.tc;
        f.o = c;
        f.m = d;
        f.za = b;
        f.G = fp(a.za, b);
        f.w = e;
        f.D = e ? 0 : hp(a.za, b);
        return f
    };
    Bq = function (a, b) {
        a.ha(b);
        return Mp(new Ip(a.m ? "sra" : "single", a.za, a.o, a.ja, b), b.za)
    };
    _.S.prototype.Na = function () {
        return gj() ? 2 : 3
    };
    Cq = function (a, b) {
        var c = a.Oa();
        if (b.length <= c)return b;
        a = b;
        var d = c - 8;
        a.length > c && (c = a.lastIndexOf("&", d), -1 !== c ? a = a.substring(0, c) : (a = a.substring(0, d), a = a.replace(/%\w?$/, "")), a += "&trunc=1");
        tf(_.Ti.L(), (9).toString(), 9, b.length - a.length + 8);
        return a
    };
    Dq = function (a, b, c) {
        try {
            var d = new window.XMLHttpRequest;
            d.open("GET", a);
            d.withCredentials = !0;
            d.onload = _.M(403, function () {
                if (200 == d.status) {
                    var a = d.responseText;
                    a = a.substring(a.indexOf("(") + 1, a.lastIndexOf(")")).replace(/\\x/g, "\\u00");
                    try {
                        var c = window.JSON.parse(a)
                    } catch (g) {
                        _.Ej(403, g), c = null
                    }
                    c && b(c)
                }
            });
            d.onerror = c;
            d.send()
        } catch (e) {
            c()
        }
    };
    Fq = function (a, b, c, d, e) {
        e ? Eq(a, c, d) : c[0].fetchStarted(b)
    };
    Eq = function (a, b, c) {
        _.z(b, function (b) {
            var d = _.Aq(a, [b], 1, c);
            a.ha(d);
            d.v = a.W(!1);
            d = Cq(a, Mp(new Ip("single", a.za, a.o, a.ja, d), [b]));
            b.fetchStarted(d)
        })
    };
    _.Gq = function (a, b, c, d) {
        _.Yo(a.za, c) && (d && a.Z([c]), d = c.getCollapseEmptyDiv(), null == d && (d = "true" === _.Ap(a.o, "google_collapse_empty_div")), d && _.tn(_.P(c, b), !1))
    };
    _.S.prototype.pc = _.l(16);
    _.S.prototype.fa = _.l(17);
    _.S.prototype.qc = function (a) {
        var b = this;
        _.z(a, function (a) {
            _.Hq(b, a, function (a) {
                a.u()
            }).then(function () {
                delete b.ua[_.J(a)]
            })
        })
    };
    _.Hq = function (a, b, c, d) {
        return _.Bg(_.Iq(a, b, void 0 === d ? !1 : d), c)
    };
    _.S.prototype.Y = function (a, b) {
        var c = this;
        b = void 0 === b ? !1 : b;
        return _.q.IntersectionObserver ? new _.q.IntersectionObserver(function (a, e) {
            return c.V(a, e, b)
        }, {rootMargin: a}) : new tg(function (a, e) {
            return c.V(a, e, b)
        }, {rootMargin: a})
    };
    _.S.prototype.V = function (a, b, c) {
        var d = this;
        c = void 0 === c ? !1 : c;
        _.z(a, function (a) {
            if (c || !(0 >= a.intersectionRatio)) {
                b.unobserve(a.target);
                a = a.target.id;
                var e = d.D[a];
                e && (e.call(d), delete d.D[a])
            }
        })
    };
    var Jq = function (a, b, c) {
        if (b.length) {
            var d = _.r(b, function (a) {
                return a.getCsiId()
            });
            d = {req_len: c.length, req_s: d.join("-")};
            b = b[0];
            b.ma = c;
            Km(a.Ba, b.getCsiId(), b.m, d)
        }
    };
    _.S.prototype.Oa = function () {
        var a = gj() ? 8192 : 4096;
        switch (_.ji(Di)) {
            case "21061864":
                return 12288;
            case "21061865":
                return 15360
        }
        var b = zj(this.za);
        return _.bb(b, "7646") && !Di.is("21061863") ? 16384 : a
    };
    var Mq = function (a) {
        a.R = null != _.Ap(a.o, "google_nofetch") || !!window.google_noFetch || a.R;
        a.ma = null != _.Ap(a.o, "google_disable_initial_load") || !!window.google_DisableInitialLoad || a.ma;
        a.K = null != _.Ap(a.o, "google_norender") || a.K;
        Kq(function () {
            var b = new _.tj("gpt_req_disp_mismatch", _.bj(), _.H(23));
            _.K(b, "dslots", Lq(a).toString());
            _.K(b, "impl", a.W(a.m));
            _.K(b, "sra", a.m ? "1" : "0");
            _.K(b, "correlator", a.O.toString());
            _.L(b, a.za);
            _.xj(b)
        });
        a.J = a.ka.getOseId()
    };
    _.S.prototype.ha = function (a) {
        a.J = this.O + "";
        a.K = _.gi();
        a.M = this.Qa;
        a.R = this.Ya;
        a.P = this.na;
        a.T = this.oa;
        a.B = this.J;
        Ao();
        a.I = xo[1];
        Ao();
        a.O = xo[4];
        Ao();
        a.W = xo[6]
    };
    var Kq = function (a) {
        _.q.attachEvent ? _.q.attachEvent("onunload", a) : _.q.addEventListener && _.q.addEventListener("unload", a, !1)
    }, Lq = function (a) {
        return Va(Vo(a.za), function (a, c) {
            return c.Ib ? a + 1 : a
        }, 0)
    };
    _.S.prototype.kb = _.l(18);
    _.Nq = function (a, b, c) {
        _.Gn.push({ba: a, aa: 11, $: [b, c]})
    };
    _.S.prototype.w = function (a, b) {
        return a._is_amp_inabox_ && (b.fa || this.za.D) || !!a._use_safe_frame_
    };
    Oq = function (a) {
        var b = [];
        _.z(xq, function (c) {
            c.eb(a) && b.push(Bn.L().load(c.Nb).then(function (b) {
                return new b(a)
            }))
        });
        return b
    };
    _.Iq = function (a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = a.ua[_.J(b)];
        !d && c && (d = Oq(b), a.ua[_.J(b)] = d);
        return d || []
    };
    _.Pq = function (a) {
        return Wa(xq, function (b) {
            return b.eb(a)
        })
    };
    _.Qq = function (a, b, c) {
        var d = !1, e = function () {
            !d && b.G && (c(), d = !0)
        }, f = (b.j || {})._is_amp_inabox_ && a.contentWindow ? _.jg(5) : 0;
        f && 2 != f || _.E(a, "load", e);
        f && a.contentWindow && _.E(a.contentWindow, "amp-ini-load", e)
    };
    _.vn = "3rd party ad content";
    Hh("setAdIframeTitle", function (a) {
        _.vn = a
    });
    var Tq, Rq, Uq, Sq, Xq, Zq, pr, qr, rr, sr, tr, hr, or;
    _.T = function (a, b, c, d) {
        _.S.call(this, a, b, c, d);
        ei(_.Pi, _.H(217), []);
        this.B = [];
        this.F = {};
        this.Ib = {};
        this.Kb = this.Jb = window.NaN;
        this.la = !1;
        this.sa = window.NaN;
        this.mb = !1;
        this.gb = 0;
        this.u = {};
        this.T = {};
        this.G = !1;
        this.Ua = _.M(203, this.Ua)
    };
    _.v(_.T, _.S);
    _.T.prototype.I = _.l(14);
    _.T.prototype.W = function (a) {
        return a ? "fifs" : "fif"
    };
    _.T.prototype.ha = function (a) {
        _.S.prototype.ha.call(this, a);
        a.persistentRoadblocksOnly = this.mb;
        a.videoPodNumber = this.Jb;
        a.videoPodPosition = this.Kb;
        a.videoStreamCorrelator = this.videoStreamCorrelator
    };
    Tq = function (a, b) {
        Rq(a, b) || Sq(a, b)
    };
    Rq = function (a, b) {
        if (!_.F(19) || !_.Hg(window.document))return Uq(a, b);
        var c = b.za;
        if (!Xa(c, function (b) {
                return !_.gp(a.za, window, 0, b)
            }))return !1;
        _.Vq(a);
        if (!a.G)return !1;
        _.z(c, function (c) {
            var d = c.getSlotElementId();
            a.T[d] = b;
            a.u[d] = function () {
                var b = a.T[d];
                b && (Uq(a, b) || Sq(a, b))
            }
        });
        return !0
    };
    Uq = function (a, b) {
        var c = ok(a.za.I);
        if (null == c)return !1;
        var d = Math.max(c / 100, 0), e = b.za;
        if (!Xa(e, function (b) {
                var c = _.P(b);
                return _.Ne(c) && !_.gp(a.za, window, d, b)
            }))return !1;
        var f = a.Y(c + "%"), g = function () {
            return Sq(a, b)
        };
        _.z(e, function (b) {
            var c = b.getSlotElementId(), d = _.P(b);
            d && (a.D[c] = g, f.observe(d), b.W = f)
        });
        return !0
    };
    _.Vq = function (a) {
        var b = Gg(window.document);
        if (!a.G && b) {
            var c = _.M(324, function () {
                _.Hg(window.document) || (_.$d(window.document, b, c), _.D(a.u, function (b) {
                    return b.call(a)
                }), a.u = {})
            });
            a.G = _.E(window.document, b, c)
        }
    };
    Sq = function (a, b) {
        var c = b.za;
        null != c[0].W && _.z(c, function (b) {
            var c = b.getSlotElementId(), d = _.P(b);
            Wq(a, d, c, b)
        });
        a.G && !_.Gd(a.u) && _.z(c, function (b) {
            b = b.getSlotElementId();
            delete a.u[b];
            delete a.T[b]
        });
        Xq(a, b)
    };
    Xq = function (a, b) {
        var c = Bq(a, b);
        if (3 == a.Na()) {
            c = Cq(a, c);
            c = _.Yi(c);
            var d = b.za;
            Fq(a, c, d, b.m, a.m);
            var e = ++a.P;
            b.u = e;
            a.F[e] = d;
            var f = a.m || _.Yo(a.za, d[0]);
            f || Yq(e);
            Jq(a, d, c);
            a.Ca(e, c, b, f)
        } else a.Ta(c, b);
        b.Y = !0;
        b = b.za;
        a.m || (a.Ib[_.J(b[0])] = window.setTimeout((0, _.La)(a.Bc, a), _.H(13)));
        !Gi.is("21061301") && En();
        wq();
        Zq(b)
    };
    Zq = function (a) {
        var b = _.kf();
        _.z(a, function (a) {
            a.pc = b
        })
    };
    _.T.prototype.Ca = function (a, b, c, d) {
        for (var e = this, f = c.m, g = f.split("."), k = window, m = 0; m < g.length && k; m++)k = k[g[m]];
        k && (g = new _.tj("gpt_callbackexists"), _.L(g), _.K(g, "callback", f), _.xj(g));
        d ? _.Pa(f, function (b) {
            e.Ua(window, b, a, c)
        }) : k || _.Pa(f, _.Aa);
        _.Ad(window.document, b)
    };
    var Yq = function (a) {
        var b = new _.tj("gpt_ignore_resp");
        _.L(b);
        _.K(b, "req_id", String(a));
        _.xj(b)
    };
    _.T.prototype.Ta = function (a, b) {
        var c = this;
        a = Cq(this, a);
        var d = _.Yi(a), e = b.za;
        Fq(this, d, e, b.m, this.m);
        var f = ++this.P;
        b.u = f;
        this.F[f] = e;
        var g = this.m || _.Yo(this.za, e[0]);
        Dq(a, function (a) {
            g ? c.Ua(window, a, f, b) : Yq(f)
        }, function () {
            _.Bj("gpt_xhr_err", function (a) {
                _.L(a)
            });
            c.Ca(f, d, b, g)
        });
        Jq(this, e, a)
    };
    _.$q = function (a) {
        return _.ln(a) + "__container__"
    };
    _.T.prototype.La = function (a, b) {
        var c = _.P(b, a);
        if (c) {
            var d = _.$q(b);
            c = c.childNodes;
            for (var e = !1, f = 0; f < c.length; ++f)if (1 == c[f].nodeType && c[f].id != d) {
                e = !0;
                break
            }
            (e = e || ar(a, b)) && br(this, b)
        }
    };
    var ar = function (a, b) {
        a = _.mn(b, a);
        return !!a && Wa(qd(a), function (a) {
                return a.id != _.ln(b)
            })
    };
    _.T.prototype.pa = function (a, b) {
        var c = this;
        _.S.prototype.pa.call(this, a, b);
        0 < _.jg(2) ? (a = _.u(a, function (a) {
            return !a.sa
        }), a.length && (_.z(a, function (a) {
            a.sa = !0
        }), cr(this, a, b))) : dr(347, function () {
            return er(c, a, b)
        })
    };
    var cr = function (a, b, c) {
        var d = _.kf();
        b = mb(b, function (a) {
            a = a.pc;
            null == a ? a = 0 : (a = d - a, a = Math.round((_.jg(2) - a) / 1E3), a = Math.max(0, a));
            return a
        });
        var e = b[0] || [], f = Zj();
        _.D(b, function (b, d) {
            var e = (0, window.parseInt)(d, 10);
            !e || 0 > e || (_.z(b, function (a) {
                f.A(Zl(String(e), a.getAdUnitPath()))
            }), _.q.setTimeout(_.M(375, function () {
                dr(347, function () {
                    return er(a, b, c)
                })
            }), 1E3 * e))
        });
        e.length && dr(347, function () {
            return er(a, e, c)
        })
    }, er = function (a, b, c) {
        _.z(b, function (a) {
            a.sa = !1
        });
        if (!a.G || !Xa(b, function (b) {
                return !!a.u[b.getSlotElementId()]
            }))if (b = mb(b, function (a) {
                return 0 != _.an(a).length
            }), b[!1] && _.z(b[!1], function (b) {
                _.Gq(a, window.document, b, !0)
            }), b = b[!0]) {
            var d = c.isVideoRefresh ? 3 : 2, e = _.xm();
            _.z(b, function (a) {
                a.Ra = ++_.xm().V;
                var b = a.getCsiId();
                _.Jm(e, "request_refresh_type", b + "_" + d, a.m)
            });
            _.ua(c.videoStreamCorrelator) ? a.videoStreamCorrelator = c.videoStreamCorrelator : 0 != c.changeCorrelator && zq(a);
            a.Jb = c.videoPodNumber || window.NaN;
            a.Kb = c.videoPodPosition || window.NaN;
            a.mb = c.persistentRoadblocksOnly || !1;
            a.la = c.clearUnfilledSlots || !1;
            Xo(a.za, b);
            a.sa = b.length;
            Ii.is("21061721") && !_.F(5) && _.z(b, function (b) {
                var c = window.document;
                if (_.Yo(a.za, b)) {
                    var d = b.getSlotElementId(), e = _.P(b, c);
                    e && (Wq(a, e, d, b), 0 < b.B ? a.La(c, b) : sn(e))
                }
            });
            if (!a.R) {
                var f = (0, _.La)(function (a) {
                    var b = _.fr(this);
                    return _.Aq(this, a, d, b)
                }, a);
                a.m ? (c = mb(b, function (a) {
                    return a.w
                }), _.D(c, function (a) {
                    _.gr(this, f(a))
                }, a)) : _.z(b, function (b) {
                    _.gr(a, f([b]))
                })
            }
        }
    };
    _.T.prototype.Z = function (a) {
        var b = this;
        _.S.prototype.Z.call(this, a);
        _.z(a, function (a) {
            br(b, a);
            hr(b, a) && _.tn(_.P(a), !1);
            jn(a)
        });
        return !0
    };
    var Wq = function (a, b, c, d) {
        if (b && a.D[c]) {
            var e = d.W;
            e && (d.W = null, e.unobserve(b));
            if (e = d.ka)d.ka = null, e.unobserve(b);
            delete a.D[c]
        }
    }, ir = function (a, b) {
        delete a.T[b];
        delete a.u[b];
        _.D(a.T, function (a) {
            fb(a.za, function (a) {
                return a.getSlotElementId() === b
            })
        })
    }, br = function (a, b) {
        var c = _.P(b), d = b.getSlotElementId();
        Wq(a, c, d, b);
        ir(a, d);
        0 < b.B ? a.Ma(b) : sn(c)
    };
    _.T.prototype.Ma = function (a) {
        var b = _.P(a), c = !!a.o;
        _.jr(this, a);
        if (c) {
            if (b) {
                b.removeAttribute("data-google-query-id");
                var d = _.$q(a) + "__to_be_removed__";
                a = _.gb(b.childNodes);
                _.z(a, function (a) {
                    1 == a.nodeType && a.id == d || b.removeChild(a)
                })
            }
        } else sn(b)
    };
    var kr = function (a, b, c) {
        var d = _.P(c, b);
        if (!d)return null;
        var e = _.$q(c);
        b = b.createElement("div");
        b.id = e;
        b.name = e;
        e = b.style;
        e.border = "0pt none";
        a.za.o && (e.margin = "auto", e.textAlign = "center");
        d.appendChild(b);
        c.J && (c.T = b);
        return b
    }, lr = function (a, b, c, d) {
        var e = _.mn(c, b) || kr(a, b, c);
        if (!e)return null;
        var f = _.ln(c);
        b = wn(e, f, d, b);
        _.Qq(b, c, function () {
            return a.loaded(c)
        });
        c.D = !0;
        c.J && (c.da = b);
        return b
    }, mr = function (a, b, c) {
        var d = _.an(c);
        if (0 == d.length)var e = null; else if (e = d[0], 1 < d.length) {
            b:if ((d = _.P(c, b)) && d.style.height && d.style.width) {
                d = [d.style.width, d.style.height];
                for (var f = 0; f < d.length; ++f)if (2 < d[f].length && "px" == d[f].substring(d[f].length - 2))d[f] = (0, window.parseInt)(d[f], 10); else {
                    d = null;
                    break b
                }
            } else d = null;
            e = d || e
        }
        e && (b = _.gn(c, b) || lr(a, b, c, e)) && (a.za.B[_.J(c)] = b)
    };
    _.h = _.T.prototype;
    _.h.Va = function () {
    };
    _.h.Pb = function () {
    };
    _.h.hb = _.l(20);
    _.h.Ua = function (a, b, c, d) {
        d = void 0 === d ? new ip : d;
        _.Gn.push({ba: this, aa: 1, $: [a, b, d]})
    };
    _.h.ic = _.l(21);
    _.h.Bc = function () {
        var a = new _.tj("gpt_request_timeout", _.bj(), _.H(23));
        _.L(a, this.za);
        _.xj(a);
        _.nr(this)
    };
    _.nr = function (a) {
        0 < a.B.length && (a.B.shift(), 0 < a.B.length && Tq(a, a.B[0]))
    };
    _.T.prototype.ga = function (a, b) {
        if (!_.gn(a, b) || a.D)mr(this, b, a), a.j ? _.Gn.push({ba: this, aa: 3, $: [a, b]}) : _.F(42) || or(this, a)
    };
    _.gr = function (a, b, c) {
        c = void 0 === c ? window.document : c;
        var d = _.H(221);
        be = _.F(24);
        var e = b.za[0] && b.za[0].Jb ? b.za[0].w : "", f = _.q.setTimeout(function () {
            var b = new _.tj("gpt_cmp_never_called");
            _.L(b, a.za);
            _.K(b, "consent", JSON.stringify(me(d, e)));
            _.xj(b)
        }, 1E4);
        ne(d, e, _.M(451, function () {
            _.q.clearTimeout(f);
            pr(a, b, c)
        }))
    };
    pr = function (a, b, c) {
        var d = c = void 0 === c ? window.document : c, e = _.F(42);
        _.z(b.za, function (b) {
            _.F(11) && !e && or(a, b);
            mr(a, d, b)
        });
        if (a.m || !a.za.M)Tq(a, b); else if (a.B.push(b), 1 == a.B.length)Tq(a, b); else if (c = _.u(a.B, function (a) {
                return !a.Y
            }), 1 < c.length) {
            var f = new _.tj("gpt_request_queue_length", _.bj());
            _.K(f, "len", "" + c.length);
            _.L(f, a.za);
            _.xj(f)
        }
        e && _.z(b.za, function (b) {
            _.F(11) && or(a, b)
        })
    };
    _.T.prototype.Sb = function (a) {
        if (!this.m) {
            var b = _.P(a);
            b && (this.za.K[_.J(a)] = b)
        }
    };
    _.T.prototype.vc = function () {
    };
    _.T.prototype.Ob = function () {
    };
    _.T.prototype.zb = function (a) {
        var b = this;
        var c = void 0 === c ? window.document : c;
        dr(348, function () {
            if (b.m) {
                b.ga(a, c);
                var d = a.w;
                var e = Wo(b.za);
                d = (e = qr(b, e)) ? rr(b, e, d) : null;
                sr(b, d, c)
            } else _.an(a).length ? sr(b, [[a]], c) : _.Gq(b, window.document, a, !0);
            or(b, a)
        })
    };
    qr = function (a, b) {
        b = mb(b, function (a) {
            return 0 != _.an(a).length
        });
        b[!1] && tr(a, b[!1]);
        return b[!0] || null
    };
    rr = function (a, b, c) {
        var d = [];
        b = mb(b, function (a) {
            return a.w
        });
        _.D(b, function (b, f) {
            _.F(65) && ur(a, b);
            f == c ? d.unshift(b) : d.push(b)
        });
        return d
    };
    sr = function (a, b, c) {
        a.R || a.ma || !b || _.z(b, function (b) {
            var d = _.fr(a);
            b = _.Aq(a, b, 1, d);
            _.gr(a, b, c)
        })
    };
    _.fr = function (a) {
        return "googletag.impl.pubads.callbackProxy" + ++a.gb
    };
    tr = function (a, b) {
        _.z(b, function (b) {
            0 == _.an(b).length && _.Gq(a, window.document, b, !0)
        })
    };
    hr = function (a, b) {
        b = b.getDivStartsCollapsed();
        null == b && (b = "true" === _.Ap(a.o, "google_divs_start_collapsed"));
        return b
    };
    or = function (a, b) {
        hr(a, b) && !b.G && _.tn(_.P(b), !1)
    };
    _.T.prototype.qa = _.l(22);
    _.T.prototype.lb = _.l(23);
    _.jr = function (a, b) {
        var c = _.mn(b, window.document), d = b.o;
        if (c) {
            var e = _.gn(b, window.document);
            a.J && _.Gn.push({ba: a, aa: 10, $: [e, b]});
            b.o ? a.J ? (c.style.display = "none", c.id += "__to_be_removed__", e.id = e.id + "__to_be_removed__", a = _.H(24), window.setTimeout(function () {
                d && bh(d);
                _.pd(c)
            }, a)) : (d && bh(d), _.pd(c)) : c.parentNode.removeChild(c)
        } else d && bh(d);
        b.J && (b.T = null);
        b.J && (b.da = null);
        b.o = null
    };
    _.vr = function (a, b) {
        var c = void 0 === c ? window.document : c;
        var d = a.w(b.j, b);
        d = !b.D && !d;
        b.o || d ? (_.jr(a, b), mr(a, c, b)) : _.Pq(b) ? mr(a, c, b) : (c = _.gn(b, c), a.J && _.Gn.push({
            ba: a,
            aa: 10,
            $: [c, b]
        }))
    };
    _.T.prototype.Za = function () {
        return (0, window.isNaN)(this.sa) || this.m ? 0 == Wo(this.za).length : Wo(this.za).length == Aj(this.za) - this.sa
    };
    var ur = function (a, b) {
        b.sort(function (b, d) {
            b = (b = bp(a.za, b)) && b.y;
            d = (d = bp(a.za, d)) && d.y;
            return null == b && null != d ? 1 : null != b && null == d ? -1 : b - d
        })
    }, dr = function (a, b) {
        !_.jg(4) && (_.H(229) || Rb() && 0 <= _.Db(_.Tb(), 11)) ? Jo(_.M(a, b)) : b()
    };
    var wr = function (a, b, c, d) {
        this.D = b;
        this.B = c;
        this.F = d;
        this.v = a.slice();
        this.m = null;
        this.za = 1;
        this.o = "";
        this.w = this.u = 0
    }, zr = function (a, b) {
        if (b)if (1 != a.za && 2 != a.za)_.Ej(321, Error("state err: " + xr(a))); else {
            a.w++;
            a.o && (b = a.o + b);
            var c = 0, d;
            do {
                var e = b.indexOf("\n", c), f = (d = -1 != e) ? e : b.length;
                if (!d)if (1 == a.za)break; else {
                    for (var g = f - 1, k = 0; 0 <= g && "\\" == b[g--];)k++;
                    k & 1 && f--
                }
                c = b.substr(c, f - c);
                g = a;
                k = d && 2 == a.za;
                if (1 == g.za) {
                    k = void 0;
                    try {
                        var m = _.q.JSON.parse(c);
                        k = _.Fa(m) ? m : null
                    } catch (x) {
                        _.Ej(321, x), k = null
                    }
                    var p = k && _.Jd(k, _.C.nb), n = p && k[p];
                    n && n._generate_slot_ ? g.m = _.jp(p, n) : (g.m = g.v.shift() || null, g.m || _.Ej(321, Error("missing slot: " + xr(g))));
                    if (g.m)try {
                        g.D(g.m, k)
                    } catch (x) {
                    }
                    g.za = 2
                } else {
                    try {
                        g.m && g.B(g.m, yr(c), k)
                    } catch (x) {
                    }
                    k && (g.za = 1)
                }
                a.u += c.length;
                c = d ? e + 1 : f
            } while (d && c < b.length);
            a.o = b.substr(c)
        }
    }, Ar = function (a, b) {
        a.za = 4;
        try {
            a.F(b)
        } catch (c) {
        }
    }, Cr = function (a) {
        1 != a.za || a.o ? Ar(a, new Br("state err " + xr(a))) : 0 < a.v.length ? Ar(a, new Br("unhandled slots " + xr(a))) : a.za = 3
    }, xr = function (a) {
        return "(" + [a.za, a.v.length, a.u, a.o.length, a.w].join() + ")"
    }, Br = function (a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack)
    };
    _.v(Br, Error);
    var yr = function (a) {
        return a.replace(/\\(n|r|\\)/g, function (a, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    var Er = function (a, b) {
        this.u = a;
        this.za = b;
        this.v = !1;
        this.w = Dr && !0;
        this.B = 0;
        this.D = this.w ? null : new _.q.TextDecoder;
        this.m = _.M(323, this.m);
        this.o = _.M(323, this.o)
    }, Fr = function (a) {
        _.q.fetch(a.u, {method: "GET", credentials: "include"}).then(_.M(323, function (b) {
            return a.m(b)
        }))["catch"](function (b) {
            return Ar(a.za, b)
        })
    };
    Er.prototype.m = function (a) {
        var b = this;
        if (300 <= a.status)throw Error("fetch err: " + a.status);
        if (!a.body)return a.text().then(_.M(323, function (a) {
            zr(b.za, a);
            Cr(b.za)
        }));
        a = a.body.getReader();
        return Gr(this, a)
    };
    Er.prototype.o = function (a, b) {
        if (a.value) {
            var c = this.D.decode(a.value, {stream: !0});
            zr(this.za, c)
        }
        if (a.done)Cr(this.za); else return Gr(this, b)
    };
    var Gr = function (a, b) {
        return b.read().then(function (c) {
            return a.o(c, b)
        })
    }, Hr = function (a) {
        var b = new _.q.XMLHttpRequest;
        b.open("GET", a.u);
        b.withCredentials = !0;
        var c = !1, d = function (d) {
            if (3 == b.readyState || 4 == b.readyState)if (300 <= b.status)c || Ar(a.za, Error("xhr_err-" + b.status)), c = !0; else {
                var e = b.responseText.substr(a.B);
                e && zr(a.za, e);
                a.B = b.responseText.length;
                d && 4 == b.readyState && Cr(a.za)
            }
        }, e = _.F(7);
        b.onreadystatechange = _.M(322, function () {
            return d(!e)
        });
        e && (b.onload = _.M(444, function () {
            return d(!0)
        }));
        b.onerror = function (b) {
            return Ar(a.za, b)
        };
        b.send()
    }, Ir = function (a, b) {
        a = new Er(a, b);
        a.v || (a.v = !0, a.w ? Hr(a) : Fr(a))
    }, Dr = gj() && hj(), Jr = Dr || ij();
    var Lr;
    _.Kr = function (a, b, c, d) {
        _.T.call(this, a, b, c, d);
        this.v = {};
        this.ea = {}
    };
    _.v(_.Kr, _.T);
    _.Kr.prototype.M = function () {
        return "ldjh"
    };
    _.Kr.prototype.Na = function () {
        return 2
    };
    _.Kr.prototype.Oa = function () {
        return 8192
    };
    _.Kr.prototype.Ta = function (a, b) {
        var c = this;
        var d = void 0 === d ? _.q.document : d;
        var e = ++this.P;
        this.F[e] = b.za;
        var f = _.M(287, function (a, b) {
            _.Gn.push({ba: c, aa: 6, $: [e, a, b, d]})
        }), g = _.M(288, function (a, b, f) {
            _.Gn.push({ba: c, aa: 5, $: [e, a, b, f, d]})
        }), k = this.m || _.Yo(this.za, b.za[0]), m = _.M(289, function (d) {
            return Lr(c, d, e, a, b, k)
        }), p = _.Yi(Cq(this, a));
        f = new wr(b.za, f, g, m);
        Jq(this, b.za, p);
        Ir(p, f);
        Fq(this, p, b.za, "", this.m);
        En()
    };
    Lr = function (a, b, c, d, e, f) {
        var g = _.F(7);
        gf(_.Bi.m, _.Bi.za) || a.ea[c] || !g && b instanceof Br ? ((e = Nb(a.v, function (a) {
            return a == c
        })) && delete a.v[e], Fj(289, Error(b && b.message || "strm_err"), !0)) : (b = d.replace("output=" + a.M(), "output=" + _.T.prototype.M.call(a)), _.T.prototype.Ca.call(a, c, b, e, f), a.ea[c] = !0)
    };
    _.Mr = function (a, b, c) {
        var d = b.j;
        d && !d._empty_ && (3 == b.ca || _.tn(_.P(b, c), !0), _.vr(a, b), !a.w(d, b) && (b.D = !0, a = _.gn(b, c))) && (d._width_ && (a.width = String(d._width_)), d._height_ && (a.height = String(d._height_)))
    };
    _.Kr.prototype.Ra = _.l(24);
    _.Kr.prototype.Ja = _.l(25);
    _.Kr.prototype.Pa = _.l(26);
    _.Kr.prototype.ga = function (a, b) {
        if (this.v[_.J(a)]) {
            var c = _.gn(a, b), d = a.j;
            c || !d || this.w(d, a) || (mr(this, b, a), _.Mr(this, a, b), (b = _.gn(a, b)) && _.Gn.push({
                ba: this,
                aa: 13,
                $: [a, b, d._html_, null, !0, !1]
            }))
        } else _.T.prototype.ga.call(this, a, b)
    };
    var Nr, Qr;
    Nr = function (a) {
        !_.jg(4) && (_.H(229) || Rb() && 0 <= _.Db(_.Tb(), 11)) ? Ko(_.M(346, a)) : a()
    };
    _.Or = function (a, b, c, d) {
        _.S.call(this, a, b, c, d);
        this.B = this.F = null;
        this.u = [];
        this.ea = Math.random() < _.H(23);
        this.v = !1;
        this.T = 0;
        this.Va = _.M(204, this.Va)
    };
    _.v(_.Or, _.S);
    _.Or.prototype.I = _.l(13);
    _.Or.prototype.W = function (a) {
        return a ? "ss" : "s"
    };
    _.Pr = function (a, b) {
        if (!a.R) {
            a.F = b.za;
            var c = Bq(a, b);
            c = _.Yi(Cq(a, c));
            var d = ++a.P;
            Fq(a, c, b.za, "googletag.impl.pubads.setAdContentsBySlotForSync", a.m);
            Jq(a, b.za, c);
            var e = "sae-script-" + d;
            un(c, e);
            a.ea && (a.T = window.setTimeout(function () {
                var a = void 0 === a ? window.document : a;
                a.getElementById(e) || (a = new _.tj("gpt_write_script_failed"), _.L(a), _.xj(a, 1))
            }, 0));
            Fn();
            wq()
        }
    };
    _.h = _.Or.prototype;
    _.h.Ua = function () {
    };
    _.h.Va = function (a) {
        _.Gn.push({ba: this, aa: 2, $: [a]})
    };
    _.h.jc = _.l(27);
    _.h.Sb = function (a) {
        if (!this.m) {
            var b = null;
            var c = Ra.getElementsByTagName("script");
            c && c.length && (b = c[c.length - 1]);
            (b = b && b.parentElement) && (this.za.K[_.J(a)] = b)
        }
    };
    _.h.vc = function (a) {
        var b = "google_temp_div_" + _.J(a), c = '<div id="' + _.Ab(b) + '"></div>';
        window.document.write(c);
        c = window.document;
        (b = _.w(b) ? c.getElementById(b) : b) && (this.za.B[_.J(a)] = b)
    };
    _.h.Ob = function (a) {
        var b = this.za;
        a = _.J(a);
        var c = b.B[a];
        c && (_.pd(c), delete b.B[a])
    };
    _.h.zb = function (a) {
        var b = this;
        Nr(function () {
            return Qr(b, a)
        })
    };
    Qr = function (a, b) {
        var c = null == a.B;
        a.B = b;
        a.v = !1;
        if (a.m)if (c) {
            if (c = _.u(Vo(a.za), function (a) {
                    return 0 != _.an(a).length
                }), _.bb(c, b) || _.Gq(a, window.document, b, !1), c.length) {
                c = mb(c, function (a) {
                    return a.w
                });
                for (var d in c)if (c.hasOwnProperty(d)) {
                    var e = _.Aq(a, c[d], 1, "googletag.impl.pubads.setAdContentsBySlotForSync");
                    d == b.w ? a.u.unshift(e) : a.u.push(e)
                }
                a.u.length && _.Pr(a, a.u.shift())
            }
        } else _.Rr(a, b); else 0 == _.an(b).length ? _.Gq(a, window.document, b, !1) : _.Pr(a, _.Aq(a, [b], 1, b.m ? "googletag.impl.pubads.setPassbackAdContents" : "googletag.impl.pubads.setAdContentsBySlotForSync"))
    };
    _.Rr = function (a, b) {
        _.Gn.push({ba: a, aa: 4, $: [window, window.document, b]})
    };
    _.Or.prototype.G = _.l(28);
    _.Or.prototype.hb = _.l(19);
    var Sr = function (a, b, c, d, e, f, g) {
        g = void 0 === g ? "" : g;
        a = _.sd(new _.id(a), b);
        a.style.width = d + "px";
        e && (a.style.height = e + "px");
        a.style.display = f;
        a.style.position = "relative";
        g && (a.style.margin = g);
        a.style.border = 0;
        c && a.appendChild(c);
        return a
    }, Tr = function (a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        e = Sr(a, "INS", e, c, d, "block");
        d = Sr(a, "INS", e, c, d, "inline-table");
        d.style.verticalAlign = "bottom";
        b = a.getElementById(b);
        f ? (a = Sr(a, "DIV", d, c, null, "block", "auto"), b.appendChild(a)) : b.appendChild(d)
    };
    _.Or.prototype.Pb = function (a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f = c.j, g = f._width_, k = f._height_, m = f._html_, p = _.sd(new _.id(a), "IFRAME"), n = _.ln(c);
        p.id = n;
        p.title = _.vn;
        p.name = n;
        p.width = g;
        p.height = k;
        p.allowTransparency = "true";
        p.scrolling = "no";
        p.marginWidth = "0";
        p.marginHeight = "0";
        p.frameBorder = "0";
        p.style.border = 0;
        p.style.position = "absolute";
        p.style.top = "0";
        p.style.left = "0";
        _.Qq(p, c, function () {
            return e.loaded(c)
        });
        Tr(a, b, g, k, p, d);
        p.contentWindow.document.write(m);
        p.contentWindow.document.write("<script>document.close();\x3c/script>");
        _.Zo(c, _.en(c, f))
    };
    _.Or.prototype.w = function (a, b) {
        return a._snippet_ && !a._is_afc_ ? !!a._use_safe_frame_ : _.S.prototype.w.call(this, a, b)
    };
    var Ur, U, Wr, Xr, Vr, Zr, $r;
    Ur = function () {
        this.o = this.za = this.m = null
    };
    U = function (a) {
        null == a.m && (a.m = new To);
        return a.m
    };
    _.Yr = function (a) {
        if (a.za)return a.za;
        switch (_.Ap(Vr(a), "google_ad_impl")) {
            case "gut_sync":
                Wr(a, !1);
                break;
            case "gut_sync_sra":
                Wr(a, !0);
                break;
            case "gut_friendly_iframe":
                Xr(a, !1);
                break;
            case "gut_friendly_iframe_sra":
                Xr(a, !0);
                break;
            default:
                _.F(33) ? Xr(a, !1) : Wr(a, !1)
        }
        Mq(a.za);
        return a.za
    };
    Wr = function (a, b) {
        var c = _.xm();
        Im(c, b);
        a.za = new _.Or(b, U(a), Vr(a), pp(void 0));
        Bm(c, "sync")
    };
    Xr = function (a, b) {
        var c = _.xm();
        Im(c, b);
        b ? (ei(Ai, _.H(208), [], !1), !gf(Ai.m, Ai.za) && ei(_.Bi, _.H(169), [], !1)) : ei(zi, _.H(207), [], !1);
        Jr && (b ? Ai.is("21061676") || _.Bi.is("21061162") || _.Bi.is("21061260") : zi.is("21061674")) ? a.za = new _.Kr(b, U(a), Vr(a), pp(void 0)) : a.za = new _.T(b, U(a), Vr(a), pp(void 0));
        Bm(c, "fif")
    };
    Vr = function (a) {
        null == a.o && (a.o = new zp);
        return a.o
    };
    Zr = null;
    _.V = function () {
        Zr || (Zr = new Ur);
        return Zr
    };
    $r = null;
    _.as = function () {
        $r || (_.Bj("gpt_passback", function (a) {
            _.L(a)
        }), $r = new Ur);
        return $r
    };
    var bs = function () {
    }, cs = function (a) {
        var b = U(_.V());
        void 0 != a ? qb(Bb(a)) || b.m[a] && delete b.m[a] : b.m = {}
    }, es = function (a, b) {
        var c = _.V(), d = _.Yr(c);
        c = U(c);
        a = null != a ? ds(a) : Vo(c);
        if (0 == a.length)return null;
        d.pa(a, b);
        return a
    };
    bs.prototype.destroySlots = function (a) {
        var b = U(_.V());
        fs(a);
        ep(b, a)
    };
    var fs = function (a) {
        var b = _.V(), c = _.Yr(b);
        b = U(b);
        a = a ? ds(a) : Vo(b);
        return c.Z(a)
    }, gs = function () {
        var a = U(_.V());
        a.w = !0;
        var b = new _.tj("gpt_markAsAmp", _.bj(), _.H(23));
        _.L(b, a);
        try {
            var c = De(_.q);
            c && _.K(b, "ntype", c);
            var d = _.r(_.q.location.ancestorOrigins, function (a) {
                return (Yd(a) || a).substr(0, 20)
            });
            _.K(b, "ost", d.slice(0, 10).join())
        } catch (e) {
        }
        _.xj(b)
    }, hs = function (a) {
        U(_.V()).R = a
    }, is = function (a) {
        U(_.V()).W = a
    };
    bs.prototype.getVersion = function () {
        return "265"
    };
    var ds = function (a) {
        var b = U(_.V());
        return _.u(a, function (a) {
            return !!b.za[_.J(a)]
        })
    }, js = null, ks = function (a, b) {
        var c = _.q.googletag || (_.q.googletag = {});
        c = c.impl || (c.impl = {});
        c = c.pubads || (c.pubads = {});
        c[a] || (c[a] = b)
    };
    ks("createDomIframe", _.M(96, function (a, b, c, d) {
        c = void 0 === c ? !1 : c;
        var e = (void 0 === d ? 0 : d) ? _.as() : _.V();
        d = _.Yr(e);
        if (b = U(e).za[b])d.Pb(window.document, a, b, c), (a = _.gn(b, window.document)) && _.Nq(d, a, b)
    }));
    ks("setAdContentsBySlotForSync", _.M(98, function (a) {
        _.Yr(_.V()).Va(a)
    }));
    ks("setPassbackAdContents", _.M(99, function (a) {
        _.Yr(_.as()).Va(a)
    }));
    ks("syncAdSlotLoaded", _.M(102, function (a, b, c) {
        _.Gn.push({ba: void 0, aa: 12, $: [a, b, void 0 === c ? !1 : c]})
    }));
    ks("setCookieInfo", _.M(103, function (a) {
        _.V();
        var b = pp(void 0);
        _.np(b, a)
    }));
    var ls = {
        PnHSZjekOp: Ni,
        jvnwkvnp: Ni,
        cxvcjwvq: Qi,
        gzjgcwzt: Qi,
        zzsxrsrg: Qi,
        svkspqrj: Qi,
        ckwdsmns: Qi,
        gdfzpwng: Qi,
        qrwfcwzx: Qi,
        vqwdtftx: Qi,
        scvrzqps: Qi,
        vwrgdxdq: Qi,
        pjzxztbf: Qi,
        wvxbvngt: Qi,
        vpnmqgsx: Qi,
        hzwxrfqd: Qi,
        cnwppgdp: Qi
    }, ms = _.C.X(function () {
        var a = _.H(202);
        return a ? a.split(",") : []
    }), ns = function (a) {
        var b = void 0 === b ? ls : b;
        var c = ms(), d = _.Jd(b, function (b, c) {
            return 0 == a.lastIndexOf(c, 0)
        });
        return (b = d && b[d]) ? Wa(c, function (b) {
            return 0 == a.lastIndexOf(b, 0)
        }) ? null : ii(b) : null
    };
    var os = null, qs = function () {
        var a = this;
        this.za = {};
        this.m = _.Ti.L();
        _.E(_.q, "DOMContentLoaded", _.M(334, function () {
            return ps(a)
        }))
    }, rs = function () {
        return os ? os : _.q.IntersectionObserver && window.performance && Vd(window.performance.now) ? os = new qs : null
    }, ts = function (a, b) {
        var c = b.getSlotId().getDomId();
        ss(a, b) ? delete a.za[c] : a.za[c] = b
    }, us = function (a, b) {
        var c = b.R;
        null != c ? th(c, b.getCsiId()) : ts(a, b)
    }, ss = function (a, b) {
        var c = _.P(b, _.q.document);
        if (c && "DIV" == c.nodeName) {
            var d = Fi.is("21060698"), e = _.F(64);
            a = new qh({
                td: _.q, De: a.m, rb: c, ra: function (a) {
                    _.Ej(336, a, 1)
                }, ee: d, Ld: e
            });
            if (a.u)return th(a, b.getCsiId()), b.R = a, !0
        }
        return !1
    }, ps = function (a) {
        _.Gd(a.za) || (a.za = Jb(a.za, function (b) {
            return !ss(a, b)
        }))
    };
    var vs = function (a) {
        this.Aa = function () {
            return a.getName()
        };
        this.addEventListener = function (b, c) {
            a.addEventListener(b, c);
            return a.C()
        };
        this.getSlots = function () {
            return a.getSlots()
        };
        this.getSlotIdMap = function () {
            return a.getSlotIdMap()
        };
        this.enable = function () {
            return a.enable()
        };
        this.getName = function () {
            return a.getName()
        }
    };
    _.v(vs, ck);
    var ws = function (a, b) {
        vs.call(this, a);
        this.set = function (b, d) {
            a.set(b, d);
            return a.C()
        };
        this.get = function (b) {
            return a.get(b)
        };
        this.getAttributeKeys = function () {
            return a.getAttributeKeys()
        };
        this.display = function (b, d, e, f) {
            return a.display(b, d, e, f)
        };
        this.setClearUnfilledSlots = function (b) {
            return a.setClearUnfilledSlots(b)
        };
        this.notifyUnfilledSlots = function (b) {
            return a.notifyUnfilledSlots(b)
        };
        this.isRoadblockingSupported = function () {
            return a.isRoadblockingSupported()
        };
        this.refreshAllSlots = function () {
            return a.refreshAllSlots()
        };
        this.setVideoSession = function (b, d, e, f) {
            return a.setVideoSession(b, d, e, f)
        };
        this.getDisplayAdsCorrelator = function (b) {
            return a.getDisplayAdsCorrelator(b)
        };
        this.getVideoStreamCorrelator = function () {
            return a.getVideoStreamCorrelator()
        };
        this.isSlotAPersistentRoadblock = function (c) {
            c = ek(c, b);
            return !!c && a.isSlotAPersistentRoadblock(c)
        };
        this.onImplementationLoaded = function () {
            return a.onImplementationLoaded()
        };
        this.fillSlot = function (c, d, e, f) {
            c = ek(c, b);
            return !!c && a.fillSlot(c, d, e, f)
        };
        this.slotRenderEnded = function (c, d, e) {
            return (c = ek(c, b)) && a.slotRenderEnded(c, d, e)
        };
        this.enableSyncLoading = function () {
            return a.enableSyncLoading()
        };
        this.setRefreshUnfilledSlots = function (b) {
            return a.setRefreshUnfilledSlots(b)
        }
    };
    _.v(ws, vs);
    var xs = function (a, b) {
        a = _.r(a, function (a) {
            return ek(a, b)
        });
        return _.u(a, function (a) {
            return !!a
        })
    }, ys = function (a, b) {
        vs.call(this, a);
        this.setTargeting = function (b, d) {
            a.setTargeting(b, d);
            return a.C()
        };
        this.clearTargeting = function (b) {
            a.clearTargeting(b);
            return a.C()
        };
        this.getTargeting = function (b) {
            return a.getTargeting(b)
        };
        this.getTargetingKeys = function () {
            return a.getTargetingKeys()
        };
        this.setCategoryExclusion = function (b) {
            a.setCategoryExclusion(b);
            return a.C()
        };
        this.clearCategoryExclusions = function () {
            a.clearCategoryExclusions();
            return a.C()
        };
        this.disableInitialLoad = function () {
            return a.disableInitialLoad()
        };
        this.enableSingleRequest = function () {
            return a.enableSingleRequest()
        };
        this.enableAsyncRendering = function () {
            return a.enableAsyncRendering()
        };
        this.enableSyncRendering = function () {
            return a.enableSyncRendering()
        };
        this.enableLazyLoad = function (b) {
            return a.enableLazyLoad(b)
        };
        this.setCentering = function (b) {
            return a.setCentering(b)
        };
        this.definePassback = function (b, d) {
            return (b = a.definePassback(b, d)) && b.C()
        };
        this.refresh = function (c, d) {
            _.y(c) && (c = xs(c, b));
            return a.refresh(c, d)
        };
        this.enableVideoAds = function () {
            return a.enableVideoAds()
        };
        this.setVideoContent = function (b, d) {
            return a.setVideoContent(b, d)
        };
        this.collapseEmptyDivs = function (b) {
            return a.collapseEmptyDivs(b)
        };
        this.clear = function (c) {
            _.y(c) && (c = xs(c, b));
            return a.clear(c)
        };
        this.setLocation = function (b, d, e) {
            a.setLocation(b, d, e);
            return a.C()
        };
        this.setCookieOptions = function (b) {
            a.setCookieOptions(b);
            return a.C()
        };
        this.setTagForChildDirectedTreatment = function (b) {
            a.setTagForChildDirectedTreatment(b);
            return a.C()
        };
        this.clearTagForChildDirectedTreatment = function () {
            return a.clearTagForChildDirectedTreatment()
        };
        this.setPublisherProvidedId = function (b) {
            a.setPublisherProvidedId(b);
            return a.C()
        };
        this.set = function (b, d) {
            a.set(b, d);
            return a.C()
        };
        this.get = function (b) {
            return a.get(b)
        };
        this.getAttributeKeys = function () {
            return a.getAttributeKeys()
        };
        this.display = function (b, d, e, f) {
            return a.display(b, d, e, f)
        };
        this.updateCorrelator = function () {
            a.updateCorrelator();
            return a.C()
        };
        this.defineOutOfPagePassback = function (b) {
            return (b = a.defineOutOfPagePassback(b)) && b.C()
        };
        this.setForceSafeFrame = function (b) {
            a.setForceSafeFrame(b);
            return a.C()
        };
        this.setSafeFrameConfig = function (b) {
            a.setSafeFrameConfig(b);
            return a.C()
        };
        this.setRequestNonPersonalizedAds = function (b) {
            a.setRequestNonPersonalizedAds(b);
            return a.C()
        };
        this.setTagForUnderAgeOfConsent = function (b) {
            a.setTagForUnderAgeOfConsent(b);
            return a.C()
        };
        this.getCorrelator = function () {
            return a.getCorrelator()
        };
        this.isAdRequestFinished = function () {
            return a.isAdRequestFinished()
        };
        this.getVideoContent = function () {
            return a.getVideoContent()
        };
        this.getVersion = function () {
            return a.getVersion()
        };
        this.forceExperiment = function (b) {
            return a.forceExperiment(b)
        };
        this.setCorrelator = function (b) {
            a.setCorrelator(b);
            return a.C()
        };
        this.setKidsFriendlyAds = function (b) {
            a.setKidsFriendlyAds(b);
            return a.C()
        };
        this.markAsAmp = function () {
            return a.markAsAmp()
        };
        this.isSRA = function () {
            return a.isSRA()
        };
        this.setFetchAdsSerially = function (b) {
            a.setFetchAdsSerially(b)
        };
        this.setImaContent = function (b, d) {
            return a.setImaContent(b, d)
        };
        this.getImaContent = function () {
            return a.getImaContent()
        }
    };
    _.v(ys, vs);
    var zs = function (a) {
        this.Aa = function () {
            return _.J(a.za)
        };
        this.setAudExtId = function (b) {
            a.setAudExtId(b);
            return a.C()
        };
        this.set = function (b, c) {
            a.set(b, c);
            return a.C()
        };
        this.get = function (b) {
            return a.get(b)
        };
        this.setClickUrl = function (b) {
            a.setClickUrl(b);
            return a.C()
        };
        this.setTargeting = function (b, c) {
            a.setTargeting(b, c);
            return a.C()
        };
        this.updateTargetingFromMap = function (b) {
            a.updateTargetingFromMap(b);
            return a.C()
        };
        this.display = function () {
            return a.display()
        };
        this.setTagForChildDirectedTreatment = function (b) {
            a.setTagForChildDirectedTreatment(b);
            return a.C()
        };
        this.setForceSafeFrame = function (b) {
            a.setForceSafeFrame(b);
            return a.C()
        };
        this.setTagForUnderAgeOfConsent = function (b) {
            a.setTagForUnderAgeOfConsent(b);
            return a.C()
        }
    };
    _.v(zs, ck);
    var Bs = function (a, b, c) {
        var d = As++;
        this.za = new _.O(a, d, b);
        this.za.m = !0;
        this.za.addService(c);
        this.m = c
    };
    _.v(Bs, lk);
    _.h = Bs.prototype;
    _.h.ya = function () {
        return new zs(this)
    };
    _.h.fb = function () {
        return _.F(29)
    };
    _.h.bb = function () {
        return "passbackSlot"
    };
    _.h.setClickUrl = function (a) {
        this.za.setClickUrl(a);
        return this
    };
    _.h.setTargeting = function (a, b) {
        this.za.setTargeting(a, b);
        return this
    };
    _.h.updateTargetingFromMap = function (a) {
        var b = this.za.getTargetingMap();
        if (!a || _.w(a) || "number" == typeof a)return Zj().error(qk("PassbackSlot.updateTargetingFromMap", [a])), this;
        try {
            return _.D(a, function (a, b) {
                this.setTargeting(b, a)
            }, this), this
        } catch (c) {
            return this.za.v = Ob(b), Zj().error(qk("PassbackSlot.updateTargetingFromMap", [a])), this
        }
    };
    _.h.setAudExtId = function (a) {
        mj(a) && (this.za.Na = a);
        return this
    };
    _.h.setTagForChildDirectedTreatment = function (a) {
        if (0 === a || 1 === a)this.za.kb = a;
        return this
    };
    _.h.setTagForUnderAgeOfConsent = function (a) {
        if (0 === a || 1 === a)this.za.lb = a;
        return this
    };
    _.h.display = function () {
        var a = this.za;
        this.m.Xa();
        if (a) {
            var b = a.getAdUnitPath();
            b && b.length && (b = _.as(), Uo(U(b), a), _.Yr(b).zb(a))
        }
    };
    _.h.setForceSafeFrame = function (a) {
        this.za.setForceSafeFrame(a);
        return this
    };
    _.h.set = function (a, b) {
        if (!_.w(a) || !b || "page_url" != a)return this;
        a = this.za;
        a.m && (a.mb = b);
        return this
    };
    _.h.get = function (a) {
        return _.w(a) && "page_url" == a ? this.za.getPassbackPageUrl() : null
    };
    var As = 1, Cs = Bs.prototype;
    Cs.setClickUrl = _.M(79, Cs.setClickUrl);
    Cs.setTargeting = _.M(81, Cs.setTargeting);
    Cs.updateTargetingFromMap = _.M(85, Cs.updateTargetingFromMap);
    Cs.setAudExtId = _.M(82, Cs.setAudExtId);
    Cs.setTagForChildDirectedTreatment = _.M(80, Cs.setTagForChildDirectedTreatment);
    Cs.setTagForUnderAgeOfConsent = _.M(448, Cs.setTagForUnderAgeOfConsent);
    Cs.display = _.M(78, Cs.display);
    Cs.set = _.M(83, Cs.set);
    Cs.get = _.M(84, Cs.get);
    var Ds = function (a, b) {
        b = void 0 === b ? {changeCorrelator: !0} : b;
        this.za = a;
        this.m = b
    }, Es = function () {
        nm.call(this);
        this.za = null;
        this.ga = 0;
        this.R = -1;
        this.la = 0;
        this.Y = 2;
        this.O = {};
        this.w = {};
        this.W = [];
        this.ja = this.V = "";
        this.D = this.ha = this.oa = this.na = !1;
        this.v = !Ph() || _.F(33);
        this.fa = Ph();
        this.J = this.I = !1;
        this.G = [];
        this.qa = {};
        this.da = this.M = !1;
        this.K = -1;
        this.Z = this.ea = this.sa = this.ua = "";
        this.T = this.P = this.ka = !1;
        this.ma = {};
        this.o = new _.nk;
        this.B = Fi.is("21060698") || _.F(64) ? rs() : null
    };
    _.v(Es, nm);
    _.h = Es.prototype;
    _.h.ya = function () {
        return new ys(this, _.O)
    };
    _.h.set = function (a, b) {
        if (!(_.w(a) && 0 < a.length))return this.log.A(qk("PubAdsService.set", [a, b]), this, null), this;
        this.O[a] = b;
        this.log.info(Rk(a, String(b), this.getName()), this, null);
        return this
    };
    _.h.get = function (a) {
        return this.O[a]
    };
    _.h.getAttributeKeys = function () {
        return nb(this.O)
    };
    _.h.display = function (a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        if (c)if (_.Fa(c) && 1 == c.nodeType) {
            var e = c;
            var f = e.id
        } else f = c;
        this.enable();
        a = f ? Yn(a, b, f) : Yn(a, b);
        e && !f && (e.id = a.getSlotId().getDomId());
        a.addService(this);
        d && a.setClickUrl(d);
        co(e || a.getSlotId().getDomId())
    };
    _.h.xb = function () {
        var a = this;
        window.setTimeout(function () {
            return a.Xa()
        }, 0)
    };
    _.h.getName = function () {
        return "publisher_ads"
    };
    _.h.Xa = function () {
        if (!this.za) {
            var a = _.xm();
            a.w("impl_loaded_instant");
            var b = _.H(76);
            _.Mm(a, b, "impl");
            window.google_noFetch = !1;
            window.google_DisableInitialLoad = !1;
            this.za = js || (js = new bs);
            this.log.info(bl("GPT"), this);
            a = this.ga;
            _.V();
            b = pp(a);
            b.za = a;
            lp(b);
            a = this.R;
            U(_.V()).G = a;
            a = this.la;
            U(_.V()).O = a;
            a = this.Y;
            U(_.V()).P = a;
            a = this.fa;
            U(_.V()).o = a;
            a = _.jg(8, -1);
            -1 != a && (this.o.m = a);
            _.F(44) && (this.o = new _.nk);
            a = this.o;
            U(_.V()).I = a;
            this.I && (a = this.J, a = void 0 === a ? !1 : a, b = Vr(_.V()), b.za.google_collapse_empty_div = "true", a && (b.za.google_divs_start_collapsed = "true"));
            a = this.P;
            U(_.V()).M = a;
            !this.oa && this.za && (this.oa = !0, this.D ? (this.v ? (a = Vr(_.V()), null == _.Ap(a, "google_ad_impl") && (a.za.google_ad_impl = "gut_friendly_iframe_sra")) : (a = Vr(_.V()), null == _.Ap(a, "google_ad_impl") && (a.za.google_ad_impl = "gut_sync_sra")), Fs(this), Gs(this)) : this.v && (a = Vr(_.V()), null == _.Ap(a, "google_ad_impl") && (a.za.google_ad_impl = "gut_friendly_iframe")), this.ha && (window.google_DisableInitialLoad = !0), Hs(this), Is(this));
            this.ka && gs();
            a = this.T;
            U(_.V()).D = a;
            a = this.ma;
            U(_.V()).J = a;
            Hh("pubadsReady", !0)
        }
    };
    _.h.Gb = function (a) {
        this.v && 0 == a.ca || (a.Ca = !1);
        a.m || Js(this, a);
        this.B && ts(this.B, a);
        nm.prototype.Gb.call(this, a)
    };
    _.h.Ab = function (a) {
        if (Pm().u && !this.v)this.log.error(el(), this); else if (this.Xa(), Fs(this), Js(this, a)) {
            this.log.info(dl());
            var b = _.V(), c = _.Yr(b);
            b = U(b);
            a && b.za[_.J(a)] && (null == a.j || c.m) && (c.Sb(a), c.vc(a), c.zb(a), c.Ob(a));
            this.qa[a.getAdUnitPath()] = !0;
            if (this.za)for (a = 0; a < this.G.length; ++a)c = this.G[a], c.za[0].getAdUnitPath()in this.qa && (Ks(this, c.za, c.m), _.db(this.G, a--)); else this.log.error(cl(), this)
        }
    };
    var Js = function (a, b) {
        var c;
        if (c = a.za)c = b ? (c = b.getAdUnitPath()) && c.length ? Uo(U(_.V()), b) : null : null, c = null == c;
        if (c)return a.log.error(Ml(b.getAdUnitPath()), a, b), !1;
        Ls(a, b);
        return !0
    }, Gs = function (a) {
        _.z(a.u, function (b) {
            Js(a, b)
        })
    }, Fs = function (a) {
        if (!a.na && a.za) {
            a.na = !0;
            var b = a.getAttributeKeys();
            _.z(b, function (b) {
                var c = String(a.get(b)), e = U(_.V());
                No(e.u, b, c) || a.log.A(fl(String(b), String(a.get(b))), a)
            });
            _.D(a.w, function (a, b) {
                _.y(a) && (cs(b), _.z(a, function (a) {
                    $o(U(_.V()), b, a)
                }))
            }, a);
            _.z(a.W, function (a) {
                var b = U(_.V());
                qb(Bb(a)) || cb(b.F, a)
            }, a);
            is(a.ja);
            a.V && hs(a.V)
        }
    }, Ls = function (a, b) {
        if (a.za) {
            var c = b.getAttributeKeys();
            _.z(c, function (c) {
                var d = String(b.get(c)), f = U(_.V());
                if (b && f.za[_.J(b)]) {
                    var g = _.J(b);
                    null == f.v[g] && (f.v[g] = new Mo(f.Y));
                    d = No(f.v[g], c, d)
                } else d = !1;
                d || a.log.A(gl(String(c), String(b.get(c)), b.getAdUnitPath()), a, b)
            })
        }
    };
    _.h = Es.prototype;
    _.h.setCookieOptions = function (a) {
        if (!mj(a))return this.log.A(hl(String(a)), this), this;
        this.ga = a;
        if (this.za) {
            _.V();
            var b = pp(a);
            b.za = a;
            lp(b)
        }
        return this
    };
    _.h.setTagForUnderAgeOfConsent = function (a) {
        if (0 !== a && 1 !== a && void 0 !== a)return this.log.A(Yl(String(a)), this), this;
        this.Y = void 0 === a ? 2 : a;
        this.za && (a = this.Y, U(_.V()).P = a);
        return this
    };
    _.h.setTagForChildDirectedTreatment = function (a) {
        if (0 !== a && 1 !== a)return this.log.A(Gl(String(a)), this), this;
        this.R = a;
        this.za && (U(_.V()).G = a);
        return this
    };
    _.h.clearTagForChildDirectedTreatment = function () {
        this.R = -1;
        this.za && (U(_.V()).G = -1);
        return this
    };
    _.h.setKidsFriendlyAds = function (a) {
        if (0 !== a && 1 !== a)return this.log.A(Ll(String(a)), this), this;
        this.la = a;
        this.za && (U(_.V()).O = a);
        return this
    };
    _.h.setTargeting = function (a, b) {
        var c = null;
        _.w(b) ? c = [b] : _.y(b) ? c = b : _.Da(b) && (c = _.gb(b));
        if (!_.w(a) || qb(Bb(a)) || !c)return this.log.A(qk("PubAdsService.setTargeting", [a, b]), this), this;
        if ("gpt-beta" == a) {
            if (this.m)return this.log.A(Ul(c.join(","))), this;
            if (Object.prototype.hasOwnProperty.call(this.w, a))return this.log.A(Vl(c.join(","))), this;
            var d = [];
            _.z(c, function (a) {
                var b = ns(a);
                b && (d.push(a), d.push(a + "-" + b))
            });
            c = d
        }
        this.w[a] = c;
        this.log.info(Fl(a, c ? c.join() : String(b), this.getName()), this);
        this.za && (cs(a), _.z(c, function (b) {
            $o(U(_.V()), a, b)
        }));
        return this
    };
    _.h.clearTargeting = function (a) {
        if ("undefined" != typeof a) {
            if (!_.w(a) || qb(Bb(a)))return this.log.A(qk("PubAdsService.clearTargeting", [a]), this), this;
            if (!this.w[a])return this.log.A(Cl(a, this.getName()), this), this;
            if ("gpt-beta" == a)return this.log.A(Wl(a)), this;
            delete this.w[a];
            this.log.info(Bl(a, this.getName()), this)
        } else this.w = {}, this.log.info(Sl(this.getName()), this);
        this.za && cs(a);
        return this
    };
    _.h.getTargeting = function (a) {
        return _.w(a) ? Object.prototype.hasOwnProperty.call(this.w, a) ? _.gb(this.w[a]) : [] : (this.log.A(qk("PubAdsService.getTargeting", [a]), this), [])
    };
    _.h.getTargetingKeys = function () {
        return nb(this.w)
    };
    _.h.setCategoryExclusion = function (a) {
        if (!_.w(a) || qb(Bb(a)))return this.log.A(qk("PubAdsService.setCategoryExclusion", [a]), this), this;
        cb(this.W, a);
        this.log.info(Dl(a), this);
        if (this.za) {
            var b = U(_.V());
            qb(Bb(a)) || cb(b.F, a)
        }
        return this
    };
    _.h.clearCategoryExclusions = function () {
        this.W = [];
        this.log.info(El(), this);
        this.za && (U(_.V()).F = []);
        return this
    };
    _.h.disableInitialLoad = function () {
        this.za ? this.log.A(jl("disableInitialLoad", "pubads"), this) : this.ha = !0
    };
    _.h.setRequestNonPersonalizedAds = function (a) {
        if (0 !== a && 1 !== a)return this.log.A(Xl(String(a)), this), this;
        if (a) {
            if ((a = ea()) && a.frames && !a.frames.GoogleSetNPA)try {
                var b = a.document, c = new _.id(b), d = b.body || b.head && b.head.parentElement;
                if (d) {
                    var e = _.sd(c, "IFRAME");
                    e.name = "GoogleSetNPA";
                    e.id = "GoogleSetNPA";
                    e.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                    d.appendChild(e)
                }
            } catch (f) {
            }
        } else(b = ea().document.getElementById("GoogleSetNPA")) && b.parentNode && b.parentNode.removeChild(b);
        return this
    };
    _.h.enableSingleRequest = function () {
        this.m && !this.D ? this.log.A(il("enableSingleRequest"), this) : (this.log.info(ll("single request"), this), this.D = !0);
        return this.D
    };
    _.h.enableAsyncRendering = function () {
        this.m && !this.v ? this.log.A(il("enableAsyncRendering"), this) : (this.log.info(ll("asynchronous rendering"), this), this.v = !0);
        return this.v
    };
    _.h.enableSyncRendering = function () {
        this.m && this.v ? this.log.A(il("enableSyncRendering"), this) : _.F(33) || (this.log.info(ll("synchronous rendering"), this), _.Bj("gpt_enablesyncrendering", function (a) {
            _.L(a)
        }), Bn.L().m = !0, this.v = !1, _.z(this.u, function (a) {
            a.Ca = !1
        }));
        return !this.v
    };
    _.h.setCentering = function (a) {
        this.log.info(ml("centering", String(a)), this);
        this.fa = a
    };
    _.h.setPublisherProvidedId = function (a) {
        this.m ? this.log.A(kl("setPublisherProvidedId", a), this) : (this.log.info(ml("PPID", a), this), this.ja = a);
        return this
    };
    _.h.definePassback = function (a, b) {
        if (!_.w(a) || 0 >= a.length || !b)return this.log.error(qk("PubAdsService.definePassback", [a, b])), null;
        var c = _.xm(), d = oj(a);
        c.G || (c.G = !0, Bm(c, "n" + d));
        return new Bs(a, b, this)
    };
    _.h.refresh = function (a, b) {
        if (a && !_.y(a) || b && (!_.Fa(b) || b.changeCorrelator && !_.wa(b.changeCorrelator)))this.log.A(qk("PubAdsService.refresh", _.u([a, b], _.ua)), this); else {
            var c = null;
            if (a && (c = Ms(this, a), !c.length)) {
                this.log.A(qk("PubAdsService.refresh", _.u([a, b], _.ua)), this);
                return
            }
            Ks(this, c, b)
        }
    };
    var Ks = function (a, b, c) {
        if (a.za) {
            a.log.info(sl(), a);
            var d = {};
            _.ua(c) && _.ua(c.changeCorrelator) && (d.changeCorrelator = c.changeCorrelator);
            (b = es(b, d)) && a.B && _.z(b, function (b) {
                return us(a.B, b)
            })
        } else a.D ? (a.log.info(rl(), a), b ? cb(a.G, new Ds(b, c)) : cb(a.G, new Ds(a.u, c))) : a.log.A(ol(), a)
    }, Ns = function (a, b, c) {
        if (b && !_.y(b) || c.videoStreamCorrelator && !_.t(c.videoStreamCorrelator) || c.videoPodNumber && !_.t(c.videoPodNumber) || c.videoPodPosition && !_.t(c.videoPodPosition) || c.persistentRoadblocksOnly && !_.wa(c.persistentRoadblocksOnly) || c.clearUnfilledSlots && !_.wa(c.clearUnfilledSlots))a.log.A(qk("PubAdsService.videoRefresh", _.u([b, c], _.ua)), a); else if (a.za) {
            var d = null;
            if (b && (d = Ms(a, b), !d.length)) {
                a.log.error(nl("videoRefresh"), a);
                return
            }
            a.log.info(sl(), a);
            (b = es(d, c)) && a.B && _.z(b, function (b) {
                return us(a.B, b)
            })
        } else a.log.A(ol(), a)
    };
    _.h = Es.prototype;
    _.h.enableVideoAds = function () {
        this.M = !0;
        Hs(this)
    };
    _.h.setVideoContent = function (a, b) {
        this.M = !0;
        this.ua = a;
        this.sa = b;
        Hs(this);
        this.da = !0
    };
    _.h.getVideoContent = function () {
        if (this.za) {
            var a = _.Yr(_.V());
            a = {cmsid: a.na, vid: a.oa}
        } else a = null;
        return a
    };
    _.h.setImaContent = function (a, b) {
        this.da ? this.setVideoContent(a, b) : (this.enableVideoAds(), _.w(a) && (this.ea = a), _.w(b) && (this.Z = b))
    };
    _.h.getImaContent = function () {
        return this.da ? this.getVideoContent() : this.za ? {vid: this.ea, cmsid: this.Z} : null
    };
    var Hs = function (a) {
        if (a.M && a.za) {
            var b = a.ua;
            a = a.sa;
            var c = _.Yr(_.V());
            c.Ya = !0;
            c.oa = b;
            c.na = a;
            c.videoStreamCorrelator = yq()
        }
    }, Is = function (a) {
        a.za && (a = -1 == a.K ? void 0 : a.K, zq(_.Yr(_.V()), a))
    };
    _.h = Es.prototype;
    _.h.getCorrelator = function () {
        var a;
        0 == this.u.length ? a = "not_available" : a = this.za ? _.Yr(_.V()).O + "" : "not_loaded";
        return a
    };
    _.h.setCorrelator = function (a) {
        if (Af(window))return this;
        if (!(_.t(a) && (0, window.isFinite)(a) && 0 == a % 1 && 0 < a))return this.log.A(Kl(String(a)), this), this;
        this.K = a;
        Is(this);
        return this
    };
    _.h.updateCorrelator = function () {
        this.K = -1;
        Is(this);
        return this
    };
    _.h.isAdRequestFinished = function () {
        return this.za ? _.Yr(_.V()).Za() : !1
    };
    _.h.collapseEmptyDivs = function (a) {
        var b = this;
        this.I ? this.log.A(zl(), this) : this.m ? this.log.A(il("collapseEmptyDivs"), this) : (this.J = !!a, _.Bj("gpt_ced", function (a) {
            _.K(a, "sc", b.J ? "t" : "f");
            _.K(a, "level", "page");
            _.L(a)
        }), this.log.info(yl(String(this.J)), this), this.I = !0);
        return this.I
    };
    _.h.clear = function (a) {
        if (!this.za)return this.log.A(ql(), this), !1;
        var b = null;
        if (a && (b = Ms(this, a), 0 == b.length))return this.log.A(qk("PubAdsService.clear", _.u([a], _.ua)), this), !1;
        this.log.info(tl(), this);
        return fs(void 0 === b ? null : b)
    };
    _.h.setLocation = function (a, b, c) {
        var d = "role:1 producer:12";
        if (_.ua(b)) {
            if (!_.t(a))return this.log.A(wl("Latitude")), this;
            if (!_.t(b))return this.log.A(wl("Longitude")), this;
            d += " latlng{ latitude_e7: " + Math.round(1E7 * a) + " longitude_e7: " + Math.round(1E7 * b) + "}";
            if (_.ua(c)) {
                if ((0, window.isNaN)(c))return this.log.A(wl("Radius")), this;
                d += " radius:" + Math.round(c)
            }
        } else 50 < a.length && (b = a.substring(0, 50), this.log.A(xl(String(a), "50", b)), a = b), d += ' loc:"' + a + '"';
        if (wc)d = _.q.btoa(d); else {
            a = [];
            for (c = b = 0; c < d.length; c++) {
                var e = d.charCodeAt(c);
                255 < e && (a[b++] = e & 255, e >>= 8);
                a[b++] = e
            }
            d = xc(a, void 0)
        }
        this.V = "a " + d;
        return this
    };
    _.h.getVersion = function () {
        if (this.za)return this.za.getVersion()
    };
    _.h.forceExperiment = function (a, b) {
        _.li(a, !1, void 0 === b ? !1 : b)
    };
    var Ms = function (a, b) {
        var c = [];
        if (!_.y(b))return c;
        _.z(b, function (b, e) {
            (b = ek(b, _.O)) && !b.Ea() ? c.push(b) : a.log.A(Al(String(e)), a)
        });
        return c
    };
    _.h = Es.prototype;
    _.h.markAsAmp = function () {
        this.ka = !0;
        this.za && gs()
    };
    _.h.setSafeFrameConfig = function (a) {
        if (a && _.Fa(a)) {
            if (a = gm(a))this.ma = a
        } else this.log.error(qk("PubAdsService.setSafeFrameConfig", [a]), this);
        return this
    };
    _.h.destroySlots = function (a) {
        a = nm.prototype.destroySlots.call(this, a);
        if (0 == a.length)return a;
        this.za && this.za.destroySlots(a);
        return a
    };
    _.h.isSRA = function () {
        return this.D
    };
    _.h.setForceSafeFrame = function (a) {
        if (!_.wa(a))return this.log.A(vl(String(a)), this), this;
        this.T = a;
        this.za && (a = this.T, U(_.V()).D = a);
        return this
    };
    _.h.setFetchAdsSerially = function (a) {
        if (!_.wa(a))return this.log.A(vl(String(a)), this), this;
        this.P = a;
        this.za && (a = this.P, U(_.V()).M = a);
        return this
    };
    _.h.enableLazyLoad = function (a) {
        if (this.m)this.log.A(il("enableLazyLoad"), this); else if (Th.L()[3][4] = function () {
                return !0
            }, this.o = new _.nk, this.o.m = 800, this.o.o = 400, this.o.za = 3, _.Fa(a)) {
            var b = a.fetchMarginPercent;
            _.t(b) && (0 <= b ? this.o.m = b : -1 == b && (this.o.m = null));
            b = a.renderMarginPercent;
            _.t(b) && (0 <= b ? this.o.o = b : -1 == b && (this.o.o = null));
            a = a.mobileScaling;
            _.t(a) && (0 < a ? this.o.za = a : -1 == a && (this.o.za = 1))
        }
    };
    _.h.defineOutOfPagePassback = function (a) {
        if (a = this.definePassback(a, [1, 1]))a.za.qa = !0;
        return a
    };
    var X = Es.prototype;
    X.Xa = _.M(107, X.Xa, function (a, b) {
        _.Ej(a, b)
    });
    X.set = _.M(21, X.set);
    X.get = _.M(22, X.get);
    X.getAttributeKeys = _.M(23, X.getAttributeKeys);
    X.display = _.M(24, X.display);
    X.setCookieOptions = _.M(17, X.setCookieOptions);
    X.setTagForChildDirectedTreatment = _.M(18, X.setTagForChildDirectedTreatment);
    X.clearTagForChildDirectedTreatment = _.M(19, X.clearTagForChildDirectedTreatment);
    X.setTagForUnderAgeOfConsent = _.M(447, X.setTagForUnderAgeOfConsent);
    X.setTargeting = _.M(1, X.setTargeting);
    X.clearTargeting = _.M(2, X.clearTargeting);
    X.getTargeting = _.M(38, X.getTargeting);
    X.getTargetingKeys = _.M(39, X.getTargetingKeys);
    X.setCategoryExclusion = _.M(3, X.setCategoryExclusion);
    X.clearCategoryExclusions = _.M(4, X.clearCategoryExclusions);
    X.disableInitialLoad = _.M(5, X.disableInitialLoad);
    X.setRequestNonPersonalizedAds = _.M(445, X.setRequestNonPersonalizedAds);
    X.enableSingleRequest = _.M(6, X.enableSingleRequest);
    X.enableAsyncRendering = _.M(7, X.enableAsyncRendering);
    X.enableSyncRendering = _.M(8, X.enableSyncRendering);
    X.setCentering = _.M(9, X.setCentering);
    X.setPublisherProvidedId = _.M(20, X.setPublisherProvidedId);
    X.definePassback = _.M(10, X.definePassback);
    X.defineOutOfPagePassback = _.M(35, X.defineOutOfPagePassback);
    X.refresh = _.M(11, X.refresh);
    X.enableVideoAds = _.M(12, X.enableVideoAds);
    X.setVideoContent = _.M(13, X.setVideoContent);
    X.updateCorrelator = _.M(25, X.updateCorrelator);
    X.collapseEmptyDivs = _.M(14, X.collapseEmptyDivs);
    X.clear = _.M(15, X.clear);
    X.setLocation = _.M(16, X.setLocation);
    X.setSafeFrameConfig = _.M(37, X.setSafeFrameConfig);
    X.setForceSafeFrame = _.M(36, X.setForceSafeFrame);
    X.isAdRequestFinished = _.M(29, X.isAdRequestFinished);
    X.getCorrelator = _.M(27, X.getCorrelator);
    X.getVideoContent = _.M(30, X.getVideoContent);
    X.setCorrelator = _.M(28, X.setCorrelator);
    X.setKidsFriendlyAds = _.M(18, X.setKidsFriendlyAds);
    X.setFetchAdsSerially = _.M(275, X.setFetchAdsSerially);
    X.enableLazyLoad = _.M(485, X.enableLazyLoad);
    X.setImaContent = _.M(328, X.setImaContent);
    X.getImaContent = _.M(329, X.getImaContent);
    var Os = _.M(26, function () {
        var a = Pm(), b = a.find("publisher_ads");
        b || (Ph() && _.Bj("gpt_mobile", function (a) {
            _.L(a)
        }), b = new Es, a.add(b));
        return b
    });
    Hh("pubads", function () {
        return Os().C()
    });
    var Ps = function () {
        nm.call(this);
        this.O = !0;
        this.o = this.I = !1;
        this.M = 0;
        this.K = this.J = void 0;
        this.P = this.B = !1;
        this.w = {};
        this.za = {};
        this.v = !1;
        this.G = {};
        this.R = !1
    };
    _.v(Ps, nm);
    _.h = Ps.prototype;
    _.h.ya = function () {
        return new ws(this, _.O)
    };
    _.h.set = function (a, b) {
        _.w(a) && 0 < a.length ? (this.G[a] = b, this.log.info(Rk(a, String(b), this.getName()), this, null)) : this.log.A(Sk(String(a), String(b), this.getName()), this, null);
        return this
    };
    _.h.get = function (a) {
        return this.G[a]
    };
    _.h.getAttributeKeys = function () {
        return nb(this.G)
    };
    _.h.display = function (a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? null : d;
        this.enable();
        a = c ? Yn(a, b, c) : Yn(a, b);
        a.addService(this);
        d && a.setClickUrl(d);
        co(a.getSlotId().getDomId())
    };
    _.h.xb = function () {
        this.O ? this.D() : this.B || (_.q.document.write('<script type="text/javascript" src="' + Xi() + '">\x3c/script>'), this.B = !0)
    };
    _.h.enableSyncLoading = function () {
        this.O = !1
    };
    _.h.setRefreshUnfilledSlots = function (a) {
        _.wa(a) && (this.I = a)
    };
    _.h.setClearUnfilledSlots = function (a) {
        _.wa(a) && (this.o = a)
    };
    _.h.notifyUnfilledSlots = function (a) {
        if (this.I)Qs(this, Rs(this, a)); else if (this.o) {
            a = Rs(this, a);
            var b = Os();
            if (b.m) {
                fs(void 0 === a ? null : a);
                for (var c = 0; c < a.length; ++c) {
                    var d = new _.im(a[c].C(), !0, b.getName());
                    om(b, "slotRenderEnded", d)
                }
            } else this.log.error(Xk("PubAds", "clear"))
        }
    };
    _.h.isRoadblockingSupported = function () {
        var a = Os();
        if (!a.m)return !1;
        a = a.u;
        var b = this.u;
        if (a.length != b.length)return !1;
        for (var c = 0; c < b.length; ++c) {
            for (var d = !1, e = 0; e < a.length; ++e)if (b[c] === a[e]) {
                d = !0;
                break
            }
            if (!d)return !1
        }
        return !0
    };
    _.h.refreshAllSlots = function () {
        this.I && Qs(this, null)
    };
    _.h.setVideoSession = function (a, b, c, d) {
        this.M = a;
        this.J = b;
        this.K = c;
        this.v = d
    };
    _.h.getDisplayAdsCorrelator = function (a) {
        var b = this;
        (a = void 0 === a ? "" : a) && !this.R && _.Bj("ima_sdk_v", function (c) {
            b.R = !0;
            _.K(c, "v", a)
        });
        return Os().getCorrelator()
    };
    _.h.getVideoStreamCorrelator = function () {
        if (Os().za) {
            var a = _.Yr(_.V()).videoStreamCorrelator;
            a = (0, window.isNaN)(a) ? 0 : a
        } else a = 0;
        return a
    };
    var Qs = function (a, b) {
        var c = Os();
        if (c.m) {
            if (a.v) {
                if (!a.isRoadblockingSupported()) {
                    a.log.A(Wk());
                    return
                }
                c.za ? (c.log.info(ul(), c), U(_.V()).T = {}) : c.log.A(pl(), c);
                fs(null)
            }
            var d = {isVideoRefresh: !0};
            _.ua(a.M) && (d.videoStreamCorrelator = a.M);
            a.J && (d.videoPodNumber = a.J);
            a.K && (d.videoPodPosition = a.K);
            a.v && (d.persistentRoadblocksOnly = a.v);
            a.o && (d.clearUnfilledSlots = a.o);
            Ns(c, b, d)
        } else a.log.error(Xk("PubAds", "refresh"))
    };
    Ps.prototype.isSlotAPersistentRoadblock = function (a) {
        var b = Os();
        if ((a = ek(a, _.O)) && b.m && Xn(a))return b.za ? a ? !_.Yo(U(_.V()), a) : !1 : !1;
        this.log.error(Yk());
        return !1
    };
    var Rs = function (a, b) {
        for (var c = a.getSlotIdMap(), d = [], e = 0; e < b.length; ++e) {
            var f = b[e];
            Lb(c, f) ? d.push(c[f]) : a.log.A(Zk(), a)
        }
        return d
    };
    Ps.prototype.getName = function () {
        return "companion_ads"
    };
    var Wi = function () {
        return _.nj() + "//pagead2.googlesyndication.com/pagead/show_companion_ad.js"
    };
    Ps.prototype.D = function () {
        if (!this.P) {
            var a = window.document, b = Wi();
            this.log.info($k("GPT CompanionAds"), this);
            _.Ad(a, b);
            this.P = !0
        }
    };
    Ps.prototype.T = function (a, b) {
        _.Ej(a, b);
        this.log.error(al("GPT CompanionAds"), this)
    };
    var Ss = function (a, b) {
        var c = b && b.getSlotId().getId();
        if (c && c in a.w && b.hasWrapperDiv() && a.m && !a.isSlotAPersistentRoadblock(b)) {
            b.ea = a.w[c];
            var d = new _.im(b.C(), !1, a.getName());
            if (a.za.hasOwnProperty(c)) {
                var e = a.za[c];
                delete a.za[c];
                d.size = e
            }
            return cn(b, d)
        }
        return !1
    };
    Ps.prototype.Ab = function (a) {
        Ss(this, a)
    };
    Ps.prototype.fillSlot = function (a, b, c, d) {
        return (a = ek(a, _.O)) && Xn(a) && _.w(b) && 0 < b.length ? (this.w[a.getSlotId().getId()] = b, null != c && null != d && (this.za[a.getSlotId().getId()] = [c, d]), Ss(this, a)) : !1
    };
    Ps.prototype.slotRenderEnded = function (a, b, c) {
        if (a = ek(a, _.O))a = new _.im(a.C(), !1, this.getName()), null != b && null != c && (a.size = [b, c]), om(this, "slotRenderEnded", a)
    };
    Ps.prototype.onImplementationLoaded = function () {
        this.log.info(bl("GPT CompanionAds"), this);
        this.B = !0
    };
    var Y = Ps.prototype;
    Y.D = _.M(70, Y.D, Y.T);
    Y.enableSyncLoading = _.M(58, Y.enableSyncLoading);
    Y.setRefreshUnfilledSlots = _.M(59, Y.setRefreshUnfilledSlots);
    Y.setClearUnfilledSlots = _.M(68, Y.setClearUnfilledSlots);
    Y.notifyUnfilledSlots = _.M(69, Y.notifyUnfilledSlots);
    Y.isRoadblockingSupported = _.M(111, Y.isRoadblockingSupported);
    Y.refreshAllSlots = _.M(60, Y.refreshAllSlots);
    Y.setVideoSession = _.M(61, Y.setVideoSession);
    Y.getDisplayAdsCorrelator = _.M(62, Y.getDisplayAdsCorrelator);
    Y.getVideoStreamCorrelator = _.M(63, Y.getVideoStreamCorrelator);
    Y.isSlotAPersistentRoadblock = _.M(64, Y.isSlotAPersistentRoadblock);
    Y.onImplementationLoaded = _.M(65, Y.onImplementationLoaded);
    Y.fillSlot = _.M(66, Y.fillSlot);
    Y.slotRenderEnded = _.M(67, Y.slotRenderEnded);
    var Ts = _.M(57, function () {
        var a = Pm(), b = a.find("companion_ads");
        b || (b = new Ps, a.add(b));
        return b
    });
    Hh("companionAds", function () {
        return Ts().C()
    });
    var Us = function (a, b) {
        vs.call(this, a);
        this.setContent = function (c, d) {
            return (c = ek(c, b)) && a.setContent(c, d)
        };
        this.set = function (b, d) {
            a.set(b, d);
            return a.C()
        };
        this.get = function (b) {
            return a.get(b)
        };
        this.getAttributeKeys = function () {
            return a.getAttributeKeys()
        };
        this.display = function (b, d, e, f) {
            return a.display(b, d, e, f)
        }
    };
    _.v(Us, vs);
    var Vs = function () {
        nm.call(this);
        this.za = {};
        this.o = {}
    };
    _.v(Vs, nm);
    _.h = Vs.prototype;
    _.h.ya = function () {
        return new Us(this, _.O)
    };
    _.h.getName = function () {
        return "content"
    };
    _.h.set = function (a, b) {
        _.w(a) && 0 < a.length ? (this.za[a] = b, this.log.info(Rk(a, String(b), this.getName()), this, null)) : this.log.A(Sk(String(a), String(b), this.getName()), this, null);
        return this
    };
    _.h.get = function (a) {
        return this.za[a]
    };
    _.h.getAttributeKeys = function () {
        return nb(this.za)
    };
    _.h.display = function (a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        this.enable();
        a = c ? Yn(a, b, c) : Yn(a, b);
        a.addService(this);
        d && a.setClickUrl(d);
        co(a.getSlotId().getDomId())
    };
    var Ws = function (a, b) {
        var c = b && b.getSlotId().getId();
        c in a.o && a.m && b.hasWrapperDiv() && !b.G && (b.ea = a.o[c], a = new _.im(b.C(), !1, a.getName()), cn(b, a))
    };
    Vs.prototype.xb = function () {
        for (var a = this.u, b = 0; b < a.length; ++b)Ws(this, a[b])
    };
    Vs.prototype.Ab = function (a) {
        Ws(this, a)
    };
    Vs.prototype.setContent = function (a, b) {
        (a = ek(a, _.O)) && Xn(a) && _.w(b) && 0 < b.length && (this.o[a.getSlotId().getId()] = b, Ws(this, a))
    };
    var Xs = Vs.prototype;
    Xs.setContent = _.M(72, Xs.setContent);
    var Ys = _.M(71, function () {
        var a = Pm(), b = a.find("content");
        b || (b = new Vs, a.add(b));
        return b
    });
    Hh("content", function () {
        return Ys().C()
    });
    var Zs = function () {
        this.za = [];
        this.o = !1;
        this.m = Zj()
    };
    Zs.prototype.addSize = function (a, b) {
        var c;
        (c = !Sm(a) || "fluid" == a) || ((c = Sm(b)) || (c = _.y(b) && Xa(b, Sm)), c = !c);
        if (c)return this.o = !0, this.m.A(qk("SizeMappingBuilder.addSize", [a, b])), this;
        this.za.push([a, b]);
        return this
    };
    Zs.prototype.addSize = _.M(88, Zs.prototype.addSize);
    Zs.prototype.build = function () {
        if (this.o)return this.m.A(Pk()), null;
        kb(this.za);
        return this.za
    };
    Zs.prototype.build = _.M(89, Zs.prototype.build);
    var jb = function (a, b) {
        a:{
            b = b[0];
            a = a[0];
            for (var c = ib, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = ib(b.length, a.length)
        }
        return b
    }, $s = function () {
        return new Zs
    };
    $s = _.M(90, $s);
    Hh("sizeMapping", $s);
    if (window.googletag.evalScripts)window.googletag.evalScripts(); else {
        var at = window, bt = _.lf(at);
        if (bt) {
            var ct = {
                label: "2",
                type: 9,
                value: bt
            }, dt = at.google_js_reporting_queue = at.google_js_reporting_queue || [];
            1024 > dt.length && dt.push(ct)
        }
        Hh("evalScripts", function () {
            wp()
        });
        xp()
    }
    ;
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, {})
