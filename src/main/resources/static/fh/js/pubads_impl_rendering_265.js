window.googletag && typeof googletag._ == 'function' && googletag._(function (_) {
    var Z = function (a, b) {
        return _.aa[a] = b
    }, ft = function (a, b) {
        return (a = et(a, b)) && 0 < a.width && 0 < a.height ? a : null
    }, gt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), ht = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)a[c] = d[c];
            for (var f = 0; f < gt.length; f++)c = gt[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }, it = {
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
    }, jt = function (a, b) {
        _.Ib(b, function (b, d) {
            b && "object" == typeof b && b.vb && (b = b.cb());
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : it.hasOwnProperty(d) ? a.setAttribute(it[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }, kt = function (a) {
        if (a && "number" == typeof a.length) {
            if (_.Fa(a))return "function" == typeof a.item || "string" == typeof a.item;
            if (_.Ea(a))return "function" == typeof a.item
        }
        return !1
    }, lt = function (a, b, c) {
        function d(c) {
            c && b.appendChild(_.w(c) ? a.createTextNode(c) : c)
        }

        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !_.Da(f) || _.Fa(f) && 0 < f.nodeType ? d(f) : _.z(kt(f) ? _.gb(f) : f, d)
        }
    };
    _.id.prototype.m = Z(30, function (a, b, c) {
        var d = this.za, e = arguments, f = String(e[0]), g = e[1];
        if (!_.Wc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', _.Ab(g.name), '"');
            if (g.type) {
                f.push(' type="', _.Ab(g.type), '"');
                var k = {};
                ht(k, g);
                delete k.type;
                g = k
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (_.w(g) ? f.className = g : _.y(g) ? f.className = g.join(" ") : jt(f, g));
        2 < e.length && lt(d, f, e);
        return f
    });
    _.hd.prototype.Lb = Z(29, function () {
        return this.width * this.height
    });
    var mt = function (a, b) {
        var c = a.length, d = _.w(a) ? a.split("") : a;
        for (--c; 0 <= c; --c)c in d && b.call(void 0, d[c], c, a)
    }, nt = function (a, b) {
        var c = 0;
        mt(a, function (d, e) {
            b.call(void 0, d, e, a) && _.db(a, e) && c++
        })
    }, ot = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "<"
    }, pt = {"'": "\\'"}, qt = function (a) {
        a = String(a);
        for (var b = ['"'], c = 0; c < a.length; c++) {
            var d = a.charAt(c), e = d.charCodeAt(0), f = c + 1, g;
            if (!(g = ot[d])) {
                if (!(31 < e && 127 > e))if (d in pt)d = pt[d]; else if (d in ot)d = pt[d] = ot[d]; else {
                    g = d.charCodeAt(0);
                    if (31 < g && 127 > g)e = d; else {
                        if (256 > g) {
                            if (e = "\\x", 16 > g || 256 < g)e += "0"
                        } else e = "\\u", 4096 > g && (e += "0");
                        e += g.toString(16).toUpperCase()
                    }
                    d = pt[d] = e
                }
                g = d
            }
            b[f] = g
        }
        b.push('"');
        return b.join("")
    }, rt = function (a) {
        return String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        })
    }, st = function (a) {
        var b = _.w(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
            return b + e.toUpperCase()
        })
    }, tt = function (a, b) {
        return new _.gd(a.x - b.x, a.y - b.y)
    }, ut = function (a, b) {
        if (!a || !b)return !1;
        if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;)b = b.parentNode;
        return b == a
    }, vt = function (a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b)return !0;
            a = a.parentElement
        }
        return !1
    }, wt = function (a) {
        var b = [];
        _.D(a, function (a, d) {
            null != a && "" !== a && b.push(d + ":" + a)
        });
        return b.length ? b.join(";") + ";" : ""
    }, xt = function (a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            a = (a || "").split(/\s*;\s*/);
            _.z(a, function (a) {
                if (a) {
                    var d = a.split(c);
                    a = d[0];
                    d = d[1];
                    a && d && (b[a.toLowerCase()] = d)
                }
            })
        }
        return b
    }, yt = function (a, b) {
        var c = {}, d;
        for (d in a)Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }, zt = function (a, b) {
        a.style.setProperty ? _.D(b, function (b, d) {
            a.style.setProperty(d, b, "important")
        }) : a.style.cssText = wt((0, _.Zd)(xt(a.style.cssText), yt(b, function (a) {
            return a + " !important"
        })))
    }, At = function (a, b) {
        for (a = [a]; a.length;) {
            var c = a.shift();
            !1 !== b(c) && (c = _.u(c.children || c.childNodes || [], function (a) {
                return 1 === a.nodeType
            }), c.length && a.unshift.apply(a, _.na(c)))
        }
    }, Bt = function (a) {
        var b;
        for (b = void 0 === b ? 100 : b; a && b--;) {
            var c = _.Bd(a, window);
            if (c && ("fixed" == c.position || "sticky" == c.position))return !0;
            a = a.parentElement
        }
        return !1
    }, Ct = function (a, b) {
        if ("length"in a.style) {
            a = a.style;
            for (var c = a.length, d = 0; d < c; d++) {
                var e = a[d];
                b.call(void 0, a[e], e, a)
            }
        } else a = xt(a.style.cssText), _.D(a, b, void 0)
    }, Dt = function (a, b) {
        b = void 0 === b ? function () {
            return !0
        } : b;
        var c = {}, d = /!\s*important/i;
        Ct(a, function (a, f) {
            !d.test(a) && b(f, a) && (a += " !important");
            c[f] = a
        });
        a.style.cssText = wt(c)
    }, Et = {capture: !0}, Ft = function (a, b) {
        return _.ae(window, a, b)
    }, Gt = function (a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    Gt.prototype.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    Gt.prototype.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    Gt.prototype.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Ht = function (a) {
        return new Gt(a.top, a.right, a.bottom, a.left)
    }, It = function (a) {
        return new Gt(a.top, a.left + a.width, a.top + a.height, a.left)
    }, et = function (a, b) {
        var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a)return new _.oe(c, e, d - c, a - e)
        }
        return null
    }, Jt = {}, Kt = function (a, b) {
        var c = Jt[b];
        if (!c) {
            var d = rt(b);
            c = d;
            void 0 === a.style[d] && (d = (_.dc ? "Webkit" : _.cc ? "Moz" : _.$b ? "ms" : _.Zb ? "O" : null) + st(d), void 0 !== a.style[d] && (c = d));
            Jt[b] = c
        }
        return c
    }, Lt = function (a, b, c) {
        if (_.w(b))(b = Kt(a, b)) && (a.style[b] = c); else for (var d in b) {
            c = a;
            var e = b[d], f = Kt(c, d);
            f && (c.style[f] = e)
        }
    }, Mt = function (a) {
        if (_.$b && !(8 <= Number(_.qc)))return a.offsetParent;
        var b = _.jd(a), c = _.qe(a, "position"), d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)if (11 == a.nodeType && a.host && (a = a.host), c = _.qe(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))return a;
        return null
    }, Nt = function (a) {
        if (1 == a.nodeType)return _.te(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new _.gd(a.clientX, a.clientY)
    }, Ot = function (a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }, Pt = function (a, b) {
        if (b instanceof _.hd) {
            var c = b.height;
            b = b.width
        } else throw Error("missing height argument");
        a.style.width = Ot(b, !0);
        a.style.height = Ot(c, !0)
    }, Qt = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight, d = _.dc && !b && !c;
        return _.ua(b) && !d || !a.getBoundingClientRect ? new _.hd(b, c) : (a = _.re(a), new _.hd(a.right - a.left, a.bottom - a.top))
    }, Rt = function (a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        if (c)if (/^\d+px?$/.test(c))a = (0, window.parseInt)(c, 10); else {
            b = a.style.left;
            var d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = c;
            c = a.style.pixelLeft;
            a.style.left = b;
            a.runtimeStyle.left = d;
            a = +c
        } else a = 0;
        return a
    }, St = function (a, b) {
        if (_.$b) {
            var c = Rt(a, b + "Left"), d = Rt(a, b + "Right"), e = Rt(a, b + "Top");
            a = Rt(a, b + "Bottom");
            return new Gt(e, d, a, c)
        }
        c = _.pe(a, b + "Left");
        d = _.pe(a, b + "Right");
        e = _.pe(a, b + "Top");
        a = _.pe(a, b + "Bottom");
        return new Gt((0, window.parseFloat)(e), (0, window.parseFloat)(d), (0, window.parseFloat)(a), (0, window.parseFloat)(c))
    }, Tt = function (a) {
        _.q.ampInaboxInitialized || a && !/\d{15,20}/.test(a) || _.q.document.querySelector('script[src$="amp4ads-host-v0.js"]') || _.Ad(_.q.document, "https://cdn.ampproject.org/" + (a ? "rtv/" + a + "/" : "") + "amp4ads-host-v0.js")
    }, Ut = function (a, b) {
        var c = _.q.ampInaboxIframes = _.q.ampInaboxIframes || [];
        a && c.push(a);
        if (!_.q.ampInaboxInitialized && (_.q.ampInaboxPendingMessages = _.q.ampInaboxPendingMessages || [], b && /\d{15,20}/.test(b) && Tt(b), !c.google_amp_listener_added)) {
            c.google_amp_listener_added = !0;
            var d = function (a) {
                if (_.q.ampInaboxInitialized)_.$d(_.q, "message", d); else {
                    var b;
                    _.q.ampInaboxPendingMessages && (b = /^amp-(\d{15,20})?/.exec(a.data)) && (_.q.ampInaboxPendingMessages.push(a), Tt(b[1]))
                }
            };
            _.E(_.q, "message", d)
        }
    }, Vt = function () {
        var a = _.Ie();
        "google_onload_fired"in a || (a.google_onload_fired = !1, _.E(a, "load", function () {
            a.google_onload_fired = !0
        }))
    }, Wt = function (a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c
    }, Xt = function () {
        this.u = "&";
        this.m = _.ua(void 0) ? void 0 : "trn";
        this.o = {};
        this.v = 0;
        this.za = []
    }, Zt = function (a, b, c, d, e) {
        var f = [];
        _.D(a, function (a, k) {
            (a = Yt(a, b, c, d, e)) && f.push(k + "=" + a)
        });
        return f.join(b)
    }, Yt = function (a, b, c, d, e) {
        if (null == a)return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)f.push(Yt(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)return e = e || 0, 2 > e ? (0, window.encodeURIComponent)(Zt(a, b, c, d, e + 1)) : "...";
        return (0, window.encodeURIComponent)(String(a))
    }, $t = function (a) {
        if (!a.m)return 4E3;
        var b = 1, c;
        for (c in a.o)b = c.length > b ? c.length : b;
        return 4E3 - a.m.length - b - a.u.length - 1
    }, au = function (a, b, c, d) {
        b = b + "//" + c + d;
        var e = $t(a) - d.length;
        if (0 > e)return "";
        a.za.sort(function (a, b) {
            return a - b
        });
        d = null;
        c = "";
        for (var f = 0; f < a.za.length; f++)for (var g = a.za[f], k = a.o[g], m = 0; m < k.length; m++) {
            if (!e) {
                d = null == d ? g : d;
                break
            }
            var p = Zt(k[m], a.u, ",$");
            if (p) {
                p = c + p;
                if (e >= p.length) {
                    e -= p.length;
                    b += p;
                    c = a.u;
                    break
                }
                d = null == d ? g : d
            }
        }
        e = "";
        a.m && null != d && (e = c + a.m + "=" + d);
        return b + e
    }, bu = function (a, b, c, d) {
        if (a.o < (d || a.za))try {
            if (c instanceof Xt)var e = c; else e = new Xt, _.D(c, function (a, b) {
                var c = e, d = c.v++, f = {};
                f[b] = a;
                a = [f];
                c.za.push(d);
                c.o[d] = a
            });
            var f = au(e, a.u, a.m, "/pagead/gen_204?id=" + b + "&");
            f && _.ae(_.q, f, void 0)
        } catch (g) {
        }
    }, cu = function (a, b, c, d, e) {
        e = void 0 === e ? a.m : e;
        try {
            var f = c()
        } catch (g) {
            if (!e.call(a, b, g, a.za, d, "gpt_exception"))throw g;
        }
        return f
    }, du = function (a, b, c, d) {
        var e = void 0 === e ? a.m : e;
        return function (f) {
            for (var g = [], k = 0; k < arguments.length; ++k)g[k] = arguments[k];
            return cu(a, b, function () {
                return c.apply(d, g)
            }, void 0, e)
        }
    }, eu = function () {
        this.m = this.m;
        this.o = this.o
    };
    eu.prototype.m = !1;
    eu.prototype.v = function () {
        if (this.o)for (; this.o.length;)this.o.shift()()
    };
    var fu = function () {
    }, gu = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, hu = function (a, b) {
        b.push('"', a.replace(_.Df, function (a) {
            var b = gu[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), gu[a] = b);
            return b
        }), '"')
    }, iu = function (a, b, c) {
        if (null == b)c.push("null"); else {
            if ("object" == typeof b) {
                if (_.y(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)c.push(e), iu(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)b = b.valueOf(); else {
                    c.push("{");
                    e = "";
                    for (d in b)Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), hu(d, c), c.push(":"), iu(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    hu(b, c);
                    break;
                case "number":
                    c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }, ju = function (a) {
        var b = [];
        iu(new fu, a, b);
        return b.join("")
    }, ku = function (a) {
        this.za = a;
        this.m = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ _.Oa()).toString(36)
    }, lu = function (a) {
        var b = {};
        _.z(a, function (a) {
            b[a.za] = a.m
        });
        return b
    }, mu = function (a) {
        var b = {};
        b.c = a.B;
        b.i = a.w;
        a.I && (b.e = a.I);
        a.u.postMessage(ju(b), a.D)
    }, nu = function (a, b, c, d, e, f) {
        eu.call(this);
        this.B = a;
        this.status = 1;
        this.u = b;
        this.D = c;
        this.M = d;
        this.Ia = !!e;
        this.w = Math.random();
        this.F = {};
        this.za = null;
        this.G = (0, _.La)(this.K, this);
        this.I = f
    };
    _.v(nu, eu);
    nu.prototype.K = function (a) {
        if (a.origin === this.D && (this.Ia || a.source == this.u)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {
            }
            if (_.Fa(b) && (a = b.i, b.c === this.B && a != this.w)) {
                if (2 !== this.status)try {
                    this.status = 2, mu(this), this.za && (this.za(), this.za = null)
                } catch (c) {
                }
                a = b.s;
                b = b.p;
                if (_.w(a) && (_.w(b) || _.Fa(b)) && this.F.hasOwnProperty(a))this.F[a](b)
            }
        }
    };
    nu.prototype.J = function () {
        if (1 === this.status) {
            try {
                this.u.postMessage && mu(this)
            } catch (a) {
            }
            window.setTimeout((0, _.La)(this.J, this), 50)
        }
    };
    nu.prototype.connect = function (a) {
        a && (this.za = a);
        _.E(window, "message", this.G);
        this.M && this.J()
    };
    nu.prototype.v = function () {
        this.status = 3;
        _.$d(window, "message", this.G);
        eu.prototype.v.call(this)
    };
    var ou = function (a, b, c) {
        a.F[b] = c
    }, pu = function (a, b, c) {
        var d = {};
        d.c = a.B;
        d.i = a.w;
        d.s = b;
        d.p = c;
        try {
            a.u.postMessage(ju(d), a.D)
        } catch (e) {
        }
    }, qu = function (a, b, c, d, e) {
        if (!(0 >= e) && (c.googMsgType = b, a.postMessage(ju(c), d), a = a.frames))for (var f = 0; f < a.length; ++f)1 < e && qu(a[f], b, c, d, --e)
    }, ru = function (a, b) {
        this.u = a;
        this.m = !1;
        this.o = b;
        this.za = du(this.o, 264, this.v, this)
    };
    ru.prototype.start = function () {
        this.m || (this.m = !0, _.Jg ? _.Ig.call(_.q, this.za) : this.za(0))
    };
    ru.prototype.stop = function () {
        this.m = !1
    };
    ru.prototype.v = function (a) {
        this.m && (_.Jg || (a = _.Oa()), this.u(a), _.Jg ? _.Ig.call(_.q, this.za) : _.q.setTimeout(this.za, 17))
    };
    var su = function (a, b, c, d) {
        this.u = a;
        this.G = b;
        this.M = c;
        this.progress = 0;
        this.o = null;
        this.v = !1;
        this.m = [];
        this.za = null;
        this.w = new ru((0, _.La)(this.I, this), d)
    };
    su.prototype.I = function (a) {
        if (this.v)this.w.stop(); else {
            null === this.o && (this.o = a);
            this.progress = (a - this.o) / this.M;
            1 <= this.progress && (this.progress = 1);
            a = this.za ? this.za(this.progress) : this.progress;
            this.m = [];
            for (var b = 0; b < this.u.length; b++)this.m.push((this.G[b] - this.u[b]) * a + this.u[b]);
            this.F();
            1 == this.progress && (this.w.stop(), this.B())
        }
    };
    su.prototype.B = function () {
    };
    su.prototype.F = function () {
    };
    su.prototype.stop = function () {
        this.v = !0
    };
    var tu = function (a) {
        a.v = !1;
        a.w.start()
    }, uu = function (a) {
        return a * a * a
    }, vu = function (a) {
        a = 1 - a;
        return 1 - a * a * a
    }, wu = function (a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }, xu = function (a) {
        var b = a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/);
        a = 812 == a.screen.height && 375 == a.screen.width || 812 == a.screen.width && 375 == a.screen.height;
        return null != b && a
    }, yu = function () {
        this.za = []
    }, zu = function (a, b, c, d) {
        this.o = a;
        this.za = (this.m = !!(_.ua(d) && a.style && a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.u = this.m ? a.style.getPropertyValue(this.za) : a.style[this.za];
        this.v = this.m ? a.style.getPropertyPriority(this.za) : void 0;
        this.m ? (a.style.removeProperty(this.za), a.style.setProperty(this.za, String(c), d)) : a.style[this.za] = String(c)
    }, Au = function (a, b, c, d, e) {
        a.za.push(new zu(b, c, d, e))
    }, Bu = function (a, b, c, d) {
        Au(a, b, c, d + "px", void 0)
    }, Cu = function (a, b, c, d, e, f, g, k) {
        su.call(this, [b], [c], d, f);
        this.J = a;
        this.K = e;
        this.D = g ? g : null;
        this.za = k || null
    };
    _.v(Cu, su);
    Cu.prototype.F = function () {
        var a = {};
        a[this.K] = this.m[0] + "px";
        Lt(this.J, a)
    };
    Cu.prototype.B = function () {
        this.D && this.D()
    };
    var Du = function (a, b, c) {
        this.u = a;
        this.m = b;
        this.o = c;
        this.za = Et;
        _.E(this.u, this.m, this.o, this.za)
    }, Eu = function (a) {
        _.$d(a.u, a.m, a.o, a.za)
    }, Fu = function (a) {
        this.o = a;
        this.za = [];
        this.m = 0
    };
    Fu.prototype.add = function (a) {
        var b = _.Oa();
        this.za.push({time: b, coords: a});
        for (a = this.m; a < this.za.length; ++a)if (b - this.za[a].time >= this.o)delete this.za[a]; else break;
        this.m = a;
        a >= this.za.length && (this.za = [], this.m = 0)
    };
    var Gu = function (a) {
        a = a.touches && a.touches[0] || a;
        return new _.gd(a.clientX, a.clientY)
    }, Hu = function (a) {
        a.v = !1;
        a.w = !1;
        a.o = null;
        a.m = null;
        a.za = null;
        a.u = null;
        a.I && Eu(a.I);
        a.K && Eu(a.K);
        a.G && Eu(a.G);
        a.J && Eu(a.J)
    }, Iu = function (a, b) {
        a.v && Hu(a);
        a.v = !0;
        a.o = a.yb();
        a.m = Gu(b);
        a.za = a.m;
        a.u = new Fu(a.T);
        a.u.add(a.m);
        a.I = new Du(a.B, "mousemove", (0, _.La)(a.nc, a));
        a.K = new Du(a.B, "touchmove", (0, _.La)(a.nc, a));
        a.G = new Du(a.B, "mouseup", (0, _.La)(a.Ic, a));
        a.J = new Du(a.B, "touchend", (0, _.La)(a.Ic, a))
    }, Ju = function (a, b, c, d) {
        var e = this;
        this.B = a;
        this.target = b;
        this.F = c || b;
        this.T = d || 100;
        this.w = this.v = this.D = !1;
        this.u = this.za = this.m = this.o = this.J = this.G = this.K = this.I = null;
        new Du(this.F, "mousedown", function (a) {
            0 == a.button && Iu(e, a)
        });
        new Du(this.F, "touchstart", function (a) {
            return Iu(e, a)
        });
        new Du(this.F, "click", function (a) {
            e.D ? e.D = !1 : a.stopPropagation()
        })
    };
    _.h = Ju.prototype;
    _.h.ac = function () {
        if (this.o && this.m && this.za) {
            var a = this.o, b = tt(this.za, this.m);
            var c = new _.gd(a.x + b.x, a.y + b.y);
            a = this.target;
            c instanceof _.gd ? (b = c.x, c = c.y) : (b = c, c = void 0);
            a.style.left = Ot(b, !1);
            a.style.top = Ot(c, !1)
        }
    };
    _.h.mc = function () {
    };
    _.h.yb = function () {
        var a = this.target, b = _.rd(a), c = Nt(a);
        b = Nt(b);
        c = new _.gd(c.x - b.x, c.y - b.y);
        a = St(a, "margin");
        return tt(c, new _.gd(a.left, a.top))
    };
    _.h.nc = function (a) {
        if (this.v)if (a.preventDefault(), this.za = Gu(a), this.u.add(this.za), this.w)this.ac(); else {
            var b = this.m, c = this.za;
            a = b.x - c.x;
            b = b.y - c.y;
            10 <= Math.sqrt(a * a + b * b) && (this.ac(), this.w = !0)
        }
    };
    _.h.Ic = function (a) {
        this.w ? (a.preventDefault(), this.za = Gu(a), this.mc()) : this.D = !0;
        Hu(this)
    };
    var Ku = function (a, b, c, d, e, f, g, k, m, p) {
        this.w = a;
        this.m = b;
        this.na = c;
        this.J = d;
        this.za = e;
        this.ea = f || _.Aa;
        this.ha = g || _.Aa;
        this.fa = (0 < k ? k : .1) || .1;
        this.V = m;
        this.oa = p
    };
    Ku.prototype.F = function () {
        return 0
    };
    Ku.prototype.D = function () {
        return 0
    };
    Ku.prototype.O = function () {
        return null
    };
    Ku.prototype.G = function (a) {
        a && this.ea()
    };
    var Lu = {bl: "bl", ar: "ar"}, Mu = function (a, b) {
        return b ? '\n<svg style="margin: 0 0 0 -40px; position: absolute; top:0;\nleft:50%;display: block; width: 80px;height: 30px;transform: none;"\nxmlns="http://www.w3.org/2000/svg">\n<defs>\n<filter id="dropShadowBottom" filterUnits="userSpaceOnUse"\ncolor-interpolation-filters="sRGB">\n<feComponentTransfer in="SourceAlpha" result="TransferredAlpha">\n  <feFuncR type="discrete" tableValues="0.5"/>\n  <feFuncG type="discrete" tableValues="0.5"/>\n  <feFuncB type="discrete" tableValues="0.5"/>\n</feComponentTransfer>\n<feGaussianBlur in="TransferredAlpha" stdDeviation="2"/>\n<feOffset dx="0" dy="0" result="offsetblur"/>\n<feMerge>\n  <feMergeNode/>\n  <feMergeNode in="SourceGraphic"/>\n</feMerge>\n</filter>\n</defs>\n<path d="M10,0 C 20,30 60,30 70,0 Z"\nstroke="#546E7A" stroke-width="1" fill="#546E7A"\nstyle="filter:url(#dropShadowBottom)"/>\n<rect x="0" y="0" width="80" height="5" style="fill:#546E7A"/>\n<g class="up" stroke="#CDCDCD" stroke-width="2px"\nstroke-linecap="square">' + a + "</g></svg>" : '\n\n<svg style="margin: 0 0 0 -40px; position: absolute; bottom:0;\nleft:50%;display: block; width: 80px;height: 30px;transform: none;"\nxmlns="http://www.w3.org/2000/svg">\n<defs>\n<filter id="dropShadowTop" filterUnits="userSpaceOnUse"\ncolor-interpolation-filters="sRGB">\n<feComponentTransfer in="SourceAlpha" result="TransferredAlpha">\n  <feFuncR type="discrete" tableValues="0.5"/>\n  <feFuncG type="discrete" tableValues="0.5"/>\n  <feFuncB type="discrete" tableValues="0.5"/>\n</feComponentTransfer>\n<feGaussianBlur in="TransferredAlpha" stdDeviation="2"/>\n<feOffset dx="0" dy="0" result="offsetblur"/>\n  <feMerge>\n  <feMergeNode/>\n<feMergeNode in="SourceGraphic"/>\n</feMerge>\n</filter>\n</defs>\n<path d="M10,30 C 20,0 60,0 70,30 Z"\nstroke="#546E7A" stroke-width="1" fill="#546E7A"\nstyle="filter:url(#dropShadowTop)"/>\n<rect x="0" y="25" width="80" height="5" style="fill:#546E7A"/>\n<g class="down" stroke="#CDCDCD" stroke-width="2px"\nstroke-linecap="square">' + a + "</g></svg>"
    }, Nu = function (a, b) {
        var c = {};
        a = (c.display = "block", c.width = "80px", c.height = "45px", c[a.za] = "0", c.left = "50%", c.marginLeft = "-40px", c);
        c = b.getElementsByTagName("svg")[0];
        zt(b, a);
        Dt(c)
    }, Ou = function (a, b, c) {
        c = {
            "background-color": "#546E7A",
            display: "block",
            position: "relative",
            "z-index": 1,
            height: c + "px",
            "box-shadow": "bl" === a.B || "ar" === a.B ? "top" == a.za ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px" : "none"
        };
        "top" == a.za && (c.position = "absolute", c.top = a.J.height + "px", c.width = "100%");
        zt(b, c);
        var d = a.m.document.createElement("span");
        a:switch (a.B) {
            case "ar":
                c = "top" == a.za ? Mu(a.M, !0) : Mu(a.K, !1);
                break a;
            case "bl":
                c = "top" == a.za ? Mu('<line x1="32" y1="13" x2="48" y2="13"></line><line x1="32" y1="17" x2="48" y2="17"></line><line x1="32" y1="21" x2="48" y2="21"></line>', !0) : Mu('<line x1="32" y1="13" x2="48" y2="13"></line><line x1="32" y1="17" x2="48" y2="17"></line><line x1="32" y1="21" x2="48" y2="21"></line>', !1);
                break a;
            default:
                throw Error("Unexpected variant: " + a.B);
        }
        d.innerHTML = c;
        _.E(d, "click", function (a) {
            a.target === d && (a.preventDefault && a.preventDefault(), a.stopImmediatePropagation && a.stopImmediatePropagation(), a.stopPropagation && a.stopPropagation())
        });
        Nu(a, d);
        b.className = "ee";
        b.appendChild(d)
    }, Pu = function (a, b) {
        a.I.getElementsByTagName("svg")[0].getElementsByTagName("g")[0].innerHTML = "top" == a.za ? b ? a.K : a.M : b ? a.M : a.K
    }, Qu = function (a, b, c, d) {
        bu(a.oa, "flgr", {
            i: b,
            dc: a.u ? "1" : "0",
            fdc: c ? "1" : "0",
            ds: a.T ? "1" : "0",
            expId: a.la,
            sc: a.ga ? "1" : "0",
            st: a.da,
            off: d,
            vw: _.Ng(a.m).clientWidth,
            req: a.na.src,
            tp: a.za
        }, 1)
    }, Ru = function (a) {
        var b = a.da;
        var c = a.m;
        c = Math.max(0, _.Ng(c).offsetHeight - _.Ng(c).clientHeight);
        return c < b ? a.pa ? 0 : window.Infinity : a.ma ? c - b : b
    }, Su = function (a, b, c, d) {
        Lt(a.o.querySelector("[id*='expand']"), {
            transition: c / 1E3 + "s",
            "transition-timing-function": d,
            "margin-top": b
        })
    }, Tu = function (a) {
        if (!a.v) {
            var b = (0, window.parseInt)(a.o.style[a.za], 10), c = wu(a.m);
            if (!a.P && c >= Ru(a) || a.P && b) {
                a.v = !0;
                var d = -b / a.fa;
                !a.Z && "bottom" == a.za && xu(a.m) && cu(a.V, 404, function () {
                    return Su(a, "0px", d, "ease-out")
                });
                "ar" == a.B && Pu(a, !1);
                tu(new Cu(a.o, b, 0, d, a.za, a.V, function () {
                    a.v = !1;
                    a.u = !1;
                    a.R = !1;
                    a.P = !0;
                    a.ha();
                    a.ha = _.Aa;
                    a.o.setAttribute("data-anchor-status", "displayed");
                    a.o.setAttribute("data-anchor-shown", !0);
                    "ar" == a.B && Pu(a, !1)
                }, vu))
            } else a.u = !1, a.R = !1
        }
    }, Uu = function (a, b, c, d, e, f, g, k, m, p) {
        Ku.call(this, a, b, c, d, e, f, g, k, m, p);
        var n = this;
        this.I = b.document.createElement("ins");
        this.m = b;
        this.R = this.u = this.v = !1;
        this.W = 0;
        this.za = e;
        this.Y = !1;
        this.o = null;
        this.ka = b.innerHeight;
        this.B = Lu[a.gvar] || "ar";
        this.ga = "true" === this.w.scroll_detached;
        this.da = +this.w.scroll_threshold || 0;
        this.pa = "false" !== this.w.show_on_insufficient_scroll_available;
        this.ma = "true" === this.w.measure_scroll_from_bottom;
        this.T = "true" === this.w.dismissable;
        this.ja = "true" === this.w.draggable || "top" != this.za;
        this.Z = "true" === this.w.disable_iphonex_nudge;
        this.P = 0 >= this.da;
        this.la = this.w.expId || "";
        "top" == this.za ? (this.M = '<line x1="32" y1="14" x2="40" y2="6"></line><line x1="40" y1="6" x2="48" y2="14"></line>', this.K = '<line x1="32" y1="8" x2="40" y2="16"></line><line x1="40" y1="16" x2="48" y2="8"></line>') : (this.M = '<line x1="32" y1="22" x2="40" y2="14"></line><line x1="40" y1="14" x2="48" y2="22"></line>', this.K = '<line x1="32" y1="16" x2="40" y2="24"></line><line x1="40" y1="24" x2="48" y2="16"></line>');
        !this.T && _.q.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(function () {
            var a = n.m.innerHeight;
            if (2 > Math.abs(a - 460) || 2 > Math.abs(a - 529))a < n.ka && 2 > Math.abs(wu(n.m) - n.W - 68) && (n.Y = !0, n.u && Tu(n)), n.ka = a
        }, 300);
        Ou(this, this.I, this.F())
    };
    _.v(Uu, Ku);
    Uu.prototype.O = function () {
        return this.I
    };
    Uu.prototype.F = function () {
        return 5
    };
    Uu.prototype.D = function () {
        return 30
    };
    Uu.prototype.G = function (a) {
        var b = this;
        if (!this.v) {
            var c = (0, window.parseInt)(this.o.style[this.za], 10), d = -this.J.height - (a ? this.D() : 0), e = (c - d) / this.fa;
            "bottom" == this.za && xu(this.m) && (this.Z ? d -= 20 : cu(this.V, 405, function () {
                return Su(b, "21px", e, "ease-in")
            }));
            "ar" != this.B || a || Pu(this, !0);
            c === d ? (this.u = !a, this.R = a) : (this.v = !0, tu(new Cu(this.o, c, d, e, this.za, this.V, function () {
                b.v = !1;
                b.u = !a;
                b.R = a;
                "ar" != b.B || a || Pu(b, !0);
                a && b.ea();
                b.o.setAttribute("data-anchor-status", "dismissed")
            }, uu)))
        }
    };
    var Vu = function (a, b, c, d, e) {
        Ju.call(this, b, d, e);
        this.P = a;
        this.R = c
    };
    _.v(Vu, Ju);
    Vu.prototype.mc = function () {
        var a = this.P;
        if (!a.v) {
            var b = (0, window.parseInt)(a.o.style[a.za], 10);
            b >= -(a.J.height / 2) ? (Tu(a), Qu(a, "d", !1, b)) : (a.G(a.T), Qu(a, "d", !0, b))
        }
    };
    Vu.prototype.ac = function () {
        if (null !== this.o && null !== this.m && null !== this.za) {
            var a = this.O(this.o.y, tt(this.za, this.m).y);
            0 < a && (a = 0);
            a < -this.R && (a = -this.R);
            var b = {};
            b[this.M()] = a + "px";
            Lt(this.target, b)
        }
    };
    var Wu = function (a, b, c, d, e) {
        Vu.call(this, a, b, c, d, e)
    };
    _.v(Wu, Vu);
    Wu.prototype.yb = function () {
        return new _.gd(0, (0, window.parseInt)(this.target.style.bottom, 10))
    };
    Wu.prototype.O = function (a, b) {
        return a - b
    };
    Wu.prototype.M = function () {
        return "bottom"
    };
    var Xu = function (a, b, c, d, e) {
        Vu.call(this, a, b, c, d, e)
    };
    _.v(Xu, Vu);
    Xu.prototype.yb = function () {
        return new _.gd(0, (0, window.parseInt)(this.target.style.top, 10))
    };
    Xu.prototype.O = function (a, b) {
        return b - a
    };
    Xu.prototype.M = function () {
        return "top"
    };
    var Yu = function (a, b) {
        if ("bottom" !== a.za && "top" !== a.za)throw Error("unsupported reactive type");
        _.E(a.I, "click", function (b) {
            b.preventDefault();
            a.v || (a.Y = !0, a.u ? Tu(a) : a.G(a.T), Qu(a, "c", !a.u, 0))
        });
        Lt(b, {opacity: 1});
        var c = a.m.document;
        c && (a.o = b, a.ja && new ("top" == a.za ? Xu : Wu)(a, c, a.J.height, b, a.I), c = {
            zIndex: 2147483647,
            position: "fixed",
            left: "0px"
        }, c[a.za] = -a.J.height - a.D() + "px", Lt(b, c), zt(b, {overflow: "visible", background: "#546E7A"}), Tu(a))
    }, Zu = function (a, b, c) {
        this.u = a;
        this.za = b;
        this.K = null;
        this.da = void 0 === c ? null : c
    }, $u = function (a) {
        var b = a.u.ownerDocument;
        return ((b = b && b.defaultView) && b.frameElement ? b.frameElement : a.u.parentElement) || null
    }, av = function (a, b) {
        if (!a.K) {
            a.K = [];
            for (var c = $u(a); c;) {
                a.K.push(c);
                if (c == _.P(a.R))break;
                c = c.parentNode && 1 === c.parentNode.nodeType ? c.parentNode : null
            }
        }
        c = a.K.slice();
        !b && c[c.length - 1] == _.P(a.R) && c.pop();
        return c
    }, bv = function (a) {
        if (!a.da) {
            var b = av(a, !0).pop();
            a.da = b && b == _.P(a.R) ? b : null
        }
        return a.da
    }, cv = function (a, b) {
        var c = av(a, !1), d, e;
        for (d = c.length - 1; 0 <= d; --d)(e = c[d]) && b.call(a, e, d, c)
    }, dv = function (a, b, c) {
        null !== b && null !== _.Md(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== _.Md(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }, ev = function (a) {
        if ("bottom" !== a.o && "top" !== a.o)throw Error("Unexpected position: " + a.o);
    }, fv = function (a, b) {
        var c = (0, window.parseInt)(b[_.Vg.name], 10), d = 0 < c ? c : null;
        b = (0, window.parseInt)(b[_.Ug.name], 10);
        var e = 0 < b ? b : null;
        null != d && (a.D.height = d);
        null != e && (a.D.width = e);
        cv(a, function (a) {
            dv(a, e, d)
        });
        dv(a.u, e, d)
    }, gv = function (a, b) {
        a.style.paddingTop = b.top + "px";
        a.style.paddingRight = b.right + "px";
        a.style.paddingBottom = b.bottom + "px";
        a.style.paddingLeft = b.left + "px"
    }, hv = function (a) {
        a.J = wu(a.za);
        if (a.za.document.body) {
            var b = St(a.za.document.body, "padding");
            gv(a.za.document.body, a.La)
        }
        "top" == a.o && b && 0 < b.top && a.za.scrollTo(0, a.J - b.top)
    }, iv = function (a) {
        if (a.O) {
            var b = bv(a);
            b && (b.style.display = "none");
            hv(a);
            a.O = !1
        }
    }, jv = function (a) {
        var b = bv(a);
        if (b) {
            var c = a.m;
            if (c.P) {
                var d = c.m, e = wu(d);
                10 > Math.abs(e - c.W) || (d = e + 10 + _.Ng(d).clientHeight > _.Ng(d).offsetHeight, d = 10 > e || d, c.ga || c.Y || c.v || (c.u || d ? c.u && d && Tu(c) : c.G(!1)), c.W = e)
            } else Tu(c);
            a.O || (a.za.document.body && (c = a.za.document.body, ev(a), e = St(a.za.document.body, "padding"), d = a.m.D() - a.m.F(), "bottom" == a.o && (e.bottom += a.I.height + d), gv(c, e)), b.style.display = "block", a.O = !0)
        }
    }, kv = function (a) {
        var b = bv(a);
        if (b && $u(a)) {
            Pt(b, a.I);
            var c = a.za.innerWidth;
            a.za.document.documentElement.scrollWidth > c ? b.style.width = c : b.style.width = "100%";
            var d = a.D;
            cv(a, function (a) {
                Pt(a, d);
                a.style.width = "100%"
            });
            a.u.style.display = "block";
            a.u.style.margin = "0 auto";
            a.Ca && At(b, function (a) {
                Dt(a, function (c) {
                    return a === b && /display|bottom/i.test(c) ? !1 : !0
                });
                if ("svg" === a.nodeName)return !1
            })
        }
    }, lv = function (a) {
        var b = a.za;
        if (!(b.innerHeight >= b.innerWidth))return !1;
        if (!a.w && a.fa)switch (a.o) {
            case "bottom":
                return a.T >= a.Ma || a.ea;
            case "top":
                return a.T > a.I.height + a.m.D() - a.m.F()
        }
        return .05 > Math.abs(_.Og(a.za) - 1)
    }, mv = function (a, b) {
        var c = _.Lg(a.za).disablePageHeightCheck;
        bu(a.la, "dphc", {e: c, s: b}, c ? .02 : 2E-4)
    }, nv = function (a) {
        if (!a.M || a.Y || 2 <= a.F && a.G || !lv(a))iv(a); else {
            a.ka = !0;
            if (!a.w && lv(a) && (a.V || !a.W)) {
                var b = bv(a);
                b && (kv(a), Yu(a.m, b), jv(a), a.w = !0, "top" == a.o && mv(a, 1), a.u.contentWindow && qu(a.u.contentWindow, "ig", {rr: "vis-aa"}, "*", 2))
            }
            jv(a)
        }
    }, ov = {ui: "gr", gvar: "ar", scroll_detached: "true", dismissable: "false"}, pv = {
        overflow: "hidden",
        position: "fixed"
    }, qv = function () {
        this.za = this.v = this.u = this.o = null;
        this.m = 0
    };
    qv.prototype.apply = function (a, b) {
        this.o = a.body.style.overflow;
        this.u = a.body.style.position;
        this.v = a.body.style.top;
        this.za = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.m = wu(b);
        Lt(a.body, "top", -this.m + "px");
        Lt(a.body, pv)
    };
    var rv = function (a) {
        if (!a.body)return null;
        var b = new qv;
        b.apply(a, _.q);
        return function () {
            Lt(a.body, {filter: b.za, webkitFilter: b.za, overflow: b.o, position: b.u, top: b.v});
            _.q.scrollTo(0, b.m)
        }
    }, sv = function (a, b, c, d, e, f) {
        this.o = Ht(a);
        this.m = Ht(b);
        this.u = c;
        this.za = Ht(d);
        this.v = e;
        this.w = f
    }, tv = function (a) {
        return ju({
            windowCoords_t: a.o.top,
            windowCoords_r: a.o.right,
            windowCoords_b: a.o.bottom,
            windowCoords_l: a.o.left,
            frameCoords_t: a.m.top,
            frameCoords_r: a.m.right,
            frameCoords_b: a.m.bottom,
            frameCoords_l: a.m.left,
            styleZIndex: a.u,
            allowedExpansion_t: a.za.top,
            allowedExpansion_r: a.za.right,
            allowedExpansion_b: a.za.bottom,
            allowedExpansion_l: a.za.left,
            xInView: a.v,
            yInView: a.w
        })
    }, uv = function (a, b, c) {
        var d = window, e = d.screenX || d.screenLeft || 0, f = d.screenY || d.screenTop || 0;
        d = new Gt(f, e + (d.outerWidth || window.document.documentElement.clientWidth || 0), f + (d.outerHeight || window.document.documentElement.clientHeight || 0), e);
        var g = _.se(a);
        e = _.ue(Qt, a);
        var k = new _.oe(g.x, g.y, e.width, e.height);
        e = It(k);
        f = String(_.qe(a, "zIndex"));
        if (b) {
            g = new _.oe(0, 0, window.Infinity, window.Infinity);
            c = new _.oe(0, 0, window.Infinity, window.Infinity);
            b = _.kd(a);
            var m = b.za.body, p = b.za.documentElement, n = !0;
            a = Mt(a);
            for (var x = 0; a; a = Mt(a), x++) {
                var G = _.pe(a, "overflow") || (a.currentStyle ? a.currentStyle.overflow : null) || a.style && a.style.overflow;
                if (_.$b && 0 == a.clientWidth || _.dc && 0 == a.clientHeight && a == m || a == m || a == p)n = !1; else {
                    var A = _.se(a);
                    A.x += a.clientLeft;
                    A.y += a.clientTop;
                    A = new _.oe(A.x, A.y, a.clientWidth, a.clientHeight);
                    "visible" != G && c && (c = et(c, A));
                    "hidden" == G ? n && g && 100 > x && (g = et(g, A)) : n = !1
                }
            }
            g && (m = window, a = m.document, m = _.Le(m), a = new _.hd(Math.max(m.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)), Math.max(m.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight))), g = ft(g, new _.oe(0, 0, a.width, a.height)));
            c && (a = _.nd(b.za), b = _.md(_.od(b.za) || window), c = ft(new _.oe(c.left, c.top, c.width, c.height), new _.oe(a.scrollLeft, a.scrollTop, b.width, b.height)));
            a = g;
            b = c
        } else {
            b = new Gt(0, window.Infinity, window.Infinity, 0);
            m = _.kd(a);
            n = m.za.body;
            x = m.za.documentElement;
            for (p = _.nd(m.za); a = Mt(a);)_.$b && 0 == a.clientWidth || _.dc && 0 == a.clientHeight && a == n || a == n || a == x || "visible" == _.qe(a, "overflow") || (G = _.se(a), A = new _.gd(a.clientLeft, a.clientTop), G.x += A.x, G.y += A.y, b.top = Math.max(b.top, G.y), b.right = Math.min(b.right, G.x + a.clientWidth), b.bottom = Math.min(b.bottom, G.y + a.clientHeight), b.left = Math.max(b.left, G.x));
            a = p.scrollLeft;
            p = p.scrollTop;
            b.left = Math.max(b.left, a);
            b.top = Math.max(b.top, p);
            m = _.md(_.od(m.za) || window);
            b.right = Math.min(b.right, a + m.width);
            b.bottom = Math.min(b.bottom, p + m.height);
            b = (a = 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null) ? new _.oe(a.left, a.top, a.right - a.left, a.bottom - a.top) : null;
            c ? (a = c.boundingClientRect, a = new _.oe(g.x - a.left, g.y - a.top, c.rootBounds.width, c.rootBounds.height)) : a = b
        }
        b = b ? et(k, b) : null;
        g = c = 0;
        b && (new _.hd(b.width, b.height)).Lb() && (c = b.width / k.width, g = b.height / k.height);
        b = new Gt(0, 0, 0, 0);
        if (m = a)(k = et(k, a)) ? (p = It(a), n = It(k), m = n.right != p.left && p.right != n.left, p = n.bottom != p.top && p.bottom != n.top, m = (0 != k.width || m) && (0 != k.height || p)) : m = !1;
        m && (b = new Gt(Math.max(e.top - a.top, 0), Math.max(a.left + a.width - e.right, 0), Math.max(a.top + a.height - e.bottom, 0), Math.max(e.left - a.left, 0)));
        return new sv(d, e, f, b, c, g)
    }, vv = function (a) {
        this.u = a;
        this.v = null;
        this.I = this.status = 0;
        this.m = null;
        this.ha = "sfchannel" + a
    };
    vv.prototype.Ea = function () {
        return 100 == this.status
    };
    var wv = function (a) {
        this.za = a
    }, xv = function (a, b) {
        this.$a = a;
        this.ab = b;
        this.m = this.za = !1
    }, yv = function (a, b, c, d, e, f, g, k) {
        k = void 0 === k ? [] : k;
        this.v = a;
        this.m = b;
        this.o = c;
        this.permissions = d;
        this.u = e;
        this.w = f;
        this.Ia = g;
        this.hostpageLibraryTokens = k;
        this.za = ""
    }, zv = function (a, b) {
        this.m = a;
        this.u = b
    };
    zv.prototype.za = function (a) {
        this.u && (a.sentinel = this.u);
        return ju(a)
    };
    var Av = function (a, b, c) {
        zv.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.Qa(Av, zv);
    Av.prototype.za = function () {
        return Av.va.za.call(this, {uid: this.m, version: this.version})
    };
    var Bv = function (a, b, c, d) {
        zv.call(this, a, void 0 === d ? "" : d);
        this.v = b;
        this.o = c
    };
    _.Qa(Bv, zv);
    Bv.prototype.za = function () {
        return Bv.va.za.call(this, {uid: this.m, initialWidth: this.v, initialHeight: this.o})
    };
    var Cv = function (a, b, c) {
        zv.call(this, a, void 0 === c ? "" : c);
        this.o = b
    };
    _.Qa(Cv, zv);
    Cv.prototype.za = function () {
        return Cv.va.za.call(this, {uid: this.m, description: this.o})
    };
    var Dv = function (a, b, c, d) {
        zv.call(this, a, void 0 === d ? "" : d);
        this.o = b;
        this.push = c
    };
    _.Qa(Dv, zv);
    Dv.prototype.za = function () {
        return Dv.va.za.call(this, {
            uid: this.m,
            expand_t: this.o.top,
            expand_r: this.o.right,
            expand_b: this.o.bottom,
            expand_l: this.o.left,
            push: this.push
        })
    };
    var Ev = function (a, b) {
        zv.call(this, a, void 0 === b ? "" : b)
    };
    _.Qa(Ev, zv);
    Ev.prototype.za = function () {
        return Ev.va.za.call(this, {uid: this.m})
    };
    var Fv = function (a, b, c) {
        zv.call(this, a, void 0 === c ? "" : c);
        this.v = b
    };
    _.Qa(Fv, zv);
    Fv.prototype.za = function () {
        var a = {uid: this.m, newGeometry: tv(this.v)};
        return Fv.va.za.call(this, a)
    };
    var Gv = function (a, b, c, d, e, f) {
        Fv.call(this, a, c, void 0 === f ? "" : f);
        this.w = b;
        this.o = d;
        this.push = e
    };
    _.Qa(Gv, Fv);
    Gv.prototype.za = function () {
        var a = {
            uid: this.m,
            success: this.w,
            newGeometry: tv(this.v),
            expand_t: this.o.top,
            expand_r: this.o.right,
            expand_b: this.o.bottom,
            expand_l: this.o.left,
            push: this.push
        };
        this.u && (a.sentinel = this.u);
        return ju(a)
    };
    var Hv = function (a, b, c, d) {
        zv.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.Qa(Hv, zv);
    Hv.prototype.za = function () {
        return Hv.va.za.call(this, {uid: this.m, width: this.width, height: this.height})
    };
    var Iv = function (a, b, c) {
        var d = window;
        return function () {
            var e = _.lf();
            try {
                var f = b.apply(this, arguments)
            } catch (k) {
                if (c)return c(a, k), f;
                throw k;
            }
            if (d.google_measure_js_timing && e) {
                e = {label: a.toString(), value: e, duration: (_.lf() || 0) - e, type: 3};
                var g = d.google_js_reporting_queue = d.google_js_reporting_queue || [];
                1024 > g.length && g.push(e)
            }
            return f
        }
    }, Jv = 1, Kv = !1, Lv = function (a, b, c) {
        a.G ? (b.style.width = Ot("100%", !0), b.style.height = Ot("auto", !0)) : (b.style.width = Ot(c.width, !0), b.style.height = Ot(c.height, !0))
    }, Mv = function (a, b) {
        var c = _.kd(a.w);
        var d = b.content;
        d = a.O + ";" + d.length + ";" + d;
        var e = new yv(a.u, a.ea, a.Y, a.P, new wv({
            shared: {
                sf_ver: a.O,
                ck_on: window.navigator.cookieEnabled ? 1 : 0,
                flash_ver: _.Kf ? _.Lf : "0"
            }
        }), a.G, a.fa, a.ga);
        var f = {};
        f.uid = e.v;
        f.hostPeerName = e.m;
        f.initialGeometry = tv(e.o);
        var g = e.permissions;
        g = ju({expandByOverlay: g.$a, expandByPush: g.ab, readCookie: g.za, writeCookie: g.m});
        f = (f.permissions = g, f.metadata = ju(e.u.za), f.reportCreativeGeometry = e.w, f.isDifferentSourceWindow = e.Ia, f.goog_safeframe_hlt = lu(e.hostpageLibraryTokens), f);
        e.za && (f.sentinel = e.za);
        e = ju(f);
        d += e;
        e = !1 === b.oc;
        if (a.V && b.size instanceof _.hd) {
            f = b.Yb;
            g = b.size;
            var k = _.kd(a.w);
            Kv || (_.Ad(k.za, (a.ka ? "http:" : "https:") + "//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe"), Kv = !0);
            k = _.od(k.za);
            k.google_eas_queue = k.google_eas_queue || [];
            k.google_eas_queue.push({
                a: f,
                b: k.location.protocol + "//tpc.googlesyndication.com",
                c: g.width,
                d: g.height,
                e: "sf-gdn-exp-" + a.u,
                f: void 0,
                g: void 0,
                h: void 0,
                i: void 0
            })
        }
        g = b.size;
        a.G ? (k = f = 0, g = "min-width:100%") : (f = g.width, k = g.height, g = "");
        var m = b.Yb;
        b = b.Dc || "";
        var p = _.od(c.za);
        e = _.$g(p, a.O, a.da, e);
        var n = [];
        a.V && (p = _.Pd(p.location.href), n.push([0 < p.length ? "google_debug" + (p ? "=" + p : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.u, "&p=", (0, window.encodeURIComponent)(_.q.document.location.protocol), "//", (0, window.encodeURIComponent)(_.q.document.location.host)].join("")));
        a.W.length && n.push("eid=" + a.W.join());
        n.length && (e += "#" + n.join("&"));
        b = {
            id: m,
            title: b,
            name: d,
            src: e,
            scrolling: "no",
            marginWidth: "0",
            marginHeight: "0",
            width: String(f),
            height: String(k),
            "data-is-safeframe": "true"
        };
        null != a.T && (b.sandbox = a.T, -1 == a.T.indexOf("allow-same-origin") && (b.srcdoc = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>SafeFrame Container</title></head><body><script>(function(){var b=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\\s\\xa0]*([\\s\\S]*?)[\\s\\xa0]*$/.exec(a)[1]},g=function(a,c){return a<c?-1:a>c?1:0};var h;a:{var k=this.navigator;if(k){var l=k.userAgent;if(l){h=l;break a}}h=""};var n=function(a,c){var f=m;return Object.prototype.hasOwnProperty.call(f,a)?f[a]:f[a]=c(a)};var q=-1!=h.indexOf("Opera"),r=-1!=h.indexOf("Trident")||-1!=h.indexOf("MSIE"),t=-1!=h.indexOf("Edge"),u=-1!=h.indexOf("Gecko")&&!(-1!=h.toLowerCase().indexOf("webkit")&&-1==h.indexOf("Edge"))&&!(-1!=h.indexOf("Trident")||-1!=h.indexOf("MSIE"))&&-1==h.indexOf("Edge"),v=-1!=h.toLowerCase().indexOf("webkit")&&-1==h.indexOf("Edge"),w;a:{var x="",y=function(){var a=h;if(u)return/rv:([^\\);]+)(\\)|;)/.exec(a);if(t)return/Edge\\/([\\d\\.]+)/.exec(a);if(r)return/\\b(?:MSIE|rv)[: ]([^\\);]+)(\\)|;)/.exec(a);if(v)return/WebKit\\/(\\S+)/.exec(a);if(q)return/(?:Version)[ \\/]?(\\S+)/.exec(a)}();y&&(x=y?y[1]:"");if(r){var z,A=this.document;z=A?A.documentMode:void 0;if(null!=z&&z>parseFloat(x)){w=String(z);break a}}w=x}var B=w,m={},C=function(a){return n(a,function(){for(var c=0,f=b(String(B)).split("."),O=b(String(a)).split("."),Z=Math.max(f.length,O.length),p=0;0==c&&p<Z;p++){var d=f[p]||"",e=O[p]||"";do{d=/(\\d*)(\\D*)(.*)/.exec(d)||["","","",""];e=/(\\d*)(\\D*)(.*)/.exec(e)||["","","",""];if(0==d[0].length&&0==e[0].length)break;c=g(0==d[1].length?0:parseInt(d[1],10),0==e[1].length?0:parseInt(e[1],10))||g(0==d[2].length,0==e[2].length)||g(d[2],e[2]);d=d[3];e=e[3]}while(0==c)}return 0<=c})};var D=u||v||r&&C(11)||t;var aa=/^([^;]+);(\\d+);([\\s\\S]*)$/;try{var E,F=aa.exec(window.name);if(null===F)throw Error("Cannot parse serialized data");var G=+F[2],H=F[3];if(G>H.length)throw Error("Cannot parse serialized data");E={b:F[1],content:H.substr(0,G),a:H.substr(G)};var I;var J=window.location.hash;if(J){var K=J.match(/[&#]eid=([\\d,]+)/);I=K?K[1].split(","):[]}else I=[];var ba=I;D&&(window.name="");var L=JSON.parse(E.a);L.goog_safeframe_hlt&&(this.goog_safeframe_hlt=L.goog_safeframe_hlt);L._context&&(this.AMP_CONTEXT_DATA=L._context);this.sf_={v:E.b,exp:ba,cfg:L};var M=E.content,N=window;if(D){var P=N.document;P.open("text/html","replace");P.write(M);P.close()}else{var Q=M,R;if(R=r&&C(7)&&!C(10)){var S=navigator.userAgent.match(/Trident\\/([0-9]+.[0-9]+)/);R=6>(S?parseFloat(S[1]):0)}var T;if(T=R)a:{for(var U=0;U<Q.length;++U)if(127<Q.charCodeAt(U)){T=!0;break a}T=!1}if(T){for(var V=unescape(encodeURIComponent(Q)),W=Math.floor(V.length/2),X=[],Y=0;Y<W;++Y)X[Y]=String.fromCharCode(256*V.charCodeAt(2*Y+1)+V.charCodeAt(2*Y));1==V.length%2&&(X[W]=V.charAt(V.length-1));Q=X.join("")}N.goog_content=Q;N.location.replace("javascript:window.goog_content")}}catch(a){};}).call(this);\x3c/script></body></html>'));
        d = {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;" + (g || ""),
            allowTransparency: "true",
            src: _.$b && !_.pc(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"" : "about:blank"
        };
        b && ht(d, b);
        c = c.m("IFRAME", d);
        a.w.appendChild(c);
        a.za = c
    }, Nv = function (a) {
        a.v = uv(a.za, a.J, a.R);
        a.R = null;
        pu(a.m, "geometry_update", (new Fv(a.u, a.v)).za())
    }, Ov = function (a) {
        if (1 == a.status || 2 == a.status)switch (a.B) {
            case 0:
                Nv(a);
                a.M = window.setTimeout((0, _.La)(a.Tb, a), 1E3);
                a.B = 1;
                break;
            case 1:
                a.B = 2;
                break;
            case 2:
                a.B = 2
        }
    }, Pv = function (a) {
        var b = null;
        a.Mc ? b = a.Mc : a.sandbox && (b = _.fh);
        return null == b ? null : b.join(" ")
    }, Qv = function (a) {
        vv.call(this, Jv++);
        var b = this;
        this.D = a.Gc;
        this.G = 1 == a.size;
        this.P = new xv(a.permissions.$a && !this.G, a.permissions.ab && !this.G);
        this.w = a.Cb;
        this.W = a.Kc || [];
        this.ga = a.hostpageLibraryTokens || [];
        var c = window.location;
        this.ea = "file:" == c.protocol ? "*" : c.protocol + "//" + c.host;
        this.fa = !!a.Ia;
        this.Z = (!1 === a.oc ? "https:" : window.location.protocol) + "//tpc.googlesyndication.com";
        this.V = !!a.zc;
        this.ka = !!a.Qc;
        this.T = Pv(a);
        this.o = new yu;
        Lv(this, a.Cb, a.size);
        this.J = a.Ac || !1;
        this.v = this.Y = uv(a.Cb, this.J);
        this.O = a.Lc || "1-0-29";
        this.da = a.yc || "";
        Mv(this, a);
        this.R = null;
        this.K = Iv(412, function () {
            return Ov(b)
        }, a.ra);
        this.M = -1;
        this.B = 0;
        this.F = null;
        !a.Ee || "function" !== typeof window.IntersectionObserver || _.fc || _.ec || (this.F = new window.IntersectionObserver(Iv(414, function (a) {
            b.R = a[a.length - 1];
            Ov(b)
        }, a.ra)));
        this.m = new nu(this.ha, this.za.contentWindow, this.Z, !1);
        ou(this.m, "init_done", (0, _.La)(this.wb, this));
        ou(this.m, "register_done", (0, _.La)(this.Db, this));
        ou(this.m, "report_error", (0, _.La)(this.Fb, this));
        ou(this.m, "expand_request", (0, _.La)(this.sb, this));
        ou(this.m, "collapse_request", (0, _.La)(this.pb, this));
        ou(this.m, "creative_geometry_update", (0, _.La)(this.qb, this));
        this.m.connect((0, _.La)(this.Bb, this));
        var d = (0, _.La)(function () {
            this.za && (this.za.name = "", a.cc && a.cc(), _.$d(this.za, "load", d))
        }, this);
        _.E(this.za, "load", Iv(415, d, a.ra));
        this.wb = Iv(413, this.wb, a.ra);
        this.Db = Iv(417, this.Db, a.ra);
        this.Fb = Iv(419, this.Fb, a.ra);
        this.sb = Iv(411, this.sb, a.ra);
        this.pb = Iv(409, this.pb, a.ra);
        this.qb = Iv(410, this.qb, a.ra);
        this.Bb = Iv(416, this.Bb, a.ra)
    };
    _.v(Qv, vv);
    _.h = Qv.prototype;
    _.h.Bb = function () {
        this.F && this.za ? this.F.observe(this.za) : (_.E(window, "resize", this.K), _.E(window, "scroll", this.K))
    };
    _.h.wb = function (a) {
        try {
            if (0 != this.status)throw Error("Container already initialized");
            if (!_.w(a))throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!(_.Fa(b) && _.t(b.uid) && _.w(b.version)))throw Error("Cannot parse JSON message");
            var c = new Av(b.uid, b.version, b.sentinel);
            if (this.u != c.m || this.O != c.version)throw Error("Wrong source container");
            this.status = 1
        } catch (d) {
            this.D.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
        }
    };
    _.h.Db = function (a) {
        try {
            if (1 != this.status)throw Error("Container not initialized");
            if (!_.w(a))throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!(_.Fa(b) && _.t(b.uid) && _.t(b.initialWidth) && _.t(b.initialHeight)))throw Error("Cannot parse JSON message");
            if (this.u != (new Bv(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).m)throw Error("Wrong source container");
            this.status = 2
        } catch (c) {
            this.D.error("Invalid REGISTER_DONE message. Reason: " + c.message)
        }
    };
    _.h.Fb = function (a) {
        try {
            if (!_.w(a))throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!(_.Fa(b) && _.t(b.uid) && _.w(b.description)))throw Error("Cannot parse JSON message");
            var c = new Cv(b.uid, b.description, b.sentinel);
            if (this.u != c.m)throw Error("Wrong source container");
            this.D.info("Ext reported an error. Description: " + c.o)
        } catch (d) {
            this.D.error("Invalid REPORT_ERROR message. Reason: " + d.message)
        }
    };
    _.h.sb = function (a) {
        try {
            if (2 != this.status)throw Error("Container is not registered");
            if (0 != this.I)throw Error("Container is not collapsed");
            if (!_.w(a))throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!(_.Fa(b) && _.t(b.uid) && _.t(b.expand_t) && _.t(b.expand_r) && _.t(b.expand_b) && _.t(b.expand_l) && _.wa(b.push)))throw Error("Cannot parse JSON message");
            var c = new Dv(b.uid, new Gt(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.u != c.m)throw Error("Wrong source container");
            if (!(0 <= c.o.top && 0 <= c.o.left && 0 <= c.o.bottom && 0 <= c.o.right))throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.P.ab || !c.push && this.P.$a) {
                var e = c.o, f = c.push, g = this.v = uv(this.za, this.J);
                if (e.top <= g.za.top && e.right <= g.za.right && e.bottom <= g.za.bottom && e.left <= g.za.left) {
                    if (!f)for (var k = this.za.parentNode; k && k.style; k = k.parentNode)Au(this.o, k, "overflowX", "visible", "important"), Au(this.o, k, "overflowY", "visible", "important");
                    var m = this.v.m, p = this.v.m, n = It(new _.oe(0, 0, m.right - m.left, p.bottom - p.top));
                    _.Fa(e) ? (n.top -= e.top, n.right += e.right, n.bottom += e.bottom, n.left -= e.left) : (n.top -= e, n.right += Number(void 0), n.bottom += Number(void 0), n.left -= Number(void 0));
                    Au(this.o, this.w, "position", "relative");
                    Au(this.o, this.za, "position", "absolute");
                    f ? (Bu(this.o, this.w, "width", n.right - n.left), Bu(this.o, this.w, "height", n.bottom - n.top)) : Au(this.o, this.za, "zIndex", "10000");
                    Bu(this.o, this.za, "width", n.right - n.left);
                    Bu(this.o, this.za, "height", n.bottom - n.top);
                    Bu(this.o, this.za, "left", n.left);
                    Bu(this.o, this.za, "top", n.top);
                    this.I = 2;
                    this.v = uv(this.za, this.J);
                    d = !0
                } else d = !1
            }
            a = d;
            pu(this.m, "expand_response", (new Gv(this.u, a, this.v, c.o, c.push)).za());
            if (!a)throw Error("Viewport or document body not large enough to expand into.");
        } catch (x) {
            this.D.error("Invalid EXPAND_REQUEST message. Reason: " + x.message)
        }
    };
    _.h.pb = function (a) {
        try {
            if (2 != this.status)throw Error("Container is not registered");
            if (2 != this.I)throw Error("Container is not expanded");
            if (!_.w(a))throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Fa(b) || !_.t(b.uid))throw Error("Cannot parse JSON message");
            if (this.u != (new Ev(b.uid, b.sentinel)).m)throw Error("Wrong source container");
            _.Tg(this.o);
            this.I = 0;
            this.za && (this.v = uv(this.za, this.J));
            pu(this.m, "collapse_response", (new Fv(this.u, this.v)).za())
        } catch (c) {
            this.D.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
        }
    };
    _.h.qb = function (a) {
        try {
            if (!_.w(a))throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!(_.Fa(b) && _.t(b.uid) && _.t(b.width) && _.t(b.height)) || b.sentinel && !_.w(b.sentinel))throw Error("Cannot parse JSON message");
            var c = new Hv(b.uid, b.width, b.height, b.sentinel);
            if (this.u != c.m)throw Error("Wrong source container");
            var d = String(c.height);
            this.G ? d != this.za.height && (this.za.height = d, Ov(this)) : this.D.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
        } catch (e) {
            this.D.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + e.message)
        }
    };
    _.h.Tb = function () {
        if (1 == this.status || 2 == this.status)switch (this.B) {
            case 1:
                this.B = 0;
                break;
            case 2:
                Nv(this), this.M = window.setTimeout((0, _.La)(this.Tb, this), 1E3), this.B = 1
        }
    };
    var Rv = function () {
        var a = _.H(38);
        this.za = void 0 === a ? .01 : a
    };
    Rv.prototype.m = function (a, b, c, d, e) {
        c = void 0 === c ? this.za : c;
        if (Math.random() > c)return !1;
        b.error && b.meta && b.id || (b = new Wt(b, {context: a, id: void 0 === e ? "gpt_exception" : e}));
        d && (b.meta = {}, d && d(b.meta));
        _.q.google_js_errors = _.q.google_js_errors || [];
        _.q.google_js_errors.push(b);
        _.q.error_rep_loaded || (_.Ad(_.q.document, _.q.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js"), _.q.error_rep_loaded = !0);
        return !1
    };
    var Sv = function () {
        var a = _.H(6) ? "https:" : "http:", b = _.H(33), c = _.H(23);
        this.u = a;
        this.m = b;
        this.za = c;
        this.o = Math.random()
    }, Tv = function () {
        return _.u(_.gi(), function (a) {
            return _.bi[a]
        })
    }, Uv = function (a, b, c) {
        a.za && (_.q.google_timing_params = _.q.google_timing_params || {}, _.q.google_timing_params["qqid." + b] = c)
    }, Vv = function (a, b, c, d, e, f) {
        Zu.call(this, a, b, f);
        this.v = d;
        this.la = e;
        this.T = this.Z = this.J = 0;
        this.Ba = !1;
        this.P = 0;
        this.Y = !1;
        this.m = null;
        this.G = this.M = !1;
        this.B = null;
        this.La = St(b.document.body, "padding");
        this.F = 0;
        this.ka = this.w = !1;
        this.O = !0;
        this.o = c;
        ev(this);
        a = this.za.innerWidth;
        c = _.ue(Qt, this.u).height || +this.u.height || 0;
        this.D = new _.hd(a, c);
        this.I = null;
        this.fa = this.W = this.V = this.ha = this.Ca = this.Ja = !1;
        this.Ma = _.md(b || window).height / 2;
        this.Ka = _.md(b || window).height;
        a:{
            d = b.document;
            a = 0;
            if (d) {
                a = d.body;
                c = d.documentElement;
                if (!c || !a) {
                    b = 0;
                    break a
                }
                b = _.md(b).height;
                _.ld(d) && c.scrollHeight ? a = c.scrollHeight != b ? c.scrollHeight : c.offsetHeight : (d = c.scrollHeight, e = c.offsetHeight, c.clientHeight != e && (d = a.scrollHeight, e = a.offsetHeight), a = d > b ? d > e ? d : e : d < e ? d : e)
            }
            b = a
        }
        this.ga = b;
        this.ea = !1;
        iv(this);
        this.ma = du(this.v, 266, (0, _.La)(this.Fd, this));
        this.na = du(this.v, 267, this.Gd, this);
        this.oa = du(this.v, 268, this.Jd, this);
        this.pa = du(this.v, 269, this.Ge, this);
        this.qa = du(this.v, 270, this.He, this);
        this.sa = du(this.v, 271, this.Ie, this);
        this.ua = du(this.v, 272, this.Je, this);
        this.ja = du(this.v, 273, this.Bd, this);
        _.E(this.u, "load", this.ja)
    };
    _.v(Vv, Zu);
    _.h = Vv.prototype;
    _.h.gc = _.l(0);
    _.h.Fd = function () {
        nv(this)
    };
    _.h.Gd = function () {
        nv(this)
    };
    _.h.Jd = function () {
        if (this.w && bv(this) && this.m) {
            var a = this.m;
            a.W = wu(a.m)
        }
        this.fa && (a = wu(this.za), this.T += a - this.J, this.ea = this.ga - a <= this.Ka, this.J = a);
        nv(this)
    };
    _.h.Ge = function () {
        var a = this;
        this.B = "touchcancel";
        this.za.setTimeout(du(this.v, 274, function () {
            "touchcancel" === a.B && (a.F = 0, a.G = !1, nv(a))
        }), 1E3)
    };
    _.h.He = function (a) {
        var b = this;
        if (a && a.touches) {
            this.B = "touchend";
            var c = a.touches.length;
            2 > c ? this.za.setTimeout(du(this.v, 256, function () {
                "touchend" === b.B && (b.F = c, b.G = !1, nv(b))
            }), 1E3) : (this.F = c, nv(this));
            !this.w || .05 > Math.abs(_.Og(this.za) - 1) || this.m.G(!0)
        }
    };
    _.h.Ie = function (a) {
        if (a && a.touches && (this.B = "touchmove", this.F = a.touches.length, this.G = !0, nv(this), "top" == this.o && this.M && this.m && a.touches && 0 != a.touches.length && a.touches[0] && !this.Ba && this.w)) {
            var b = this.I.height + this.m.D() - this.m.F();
            a = a.touches[0].pageY;
            if (this.P < b) {
                var c = a - this.Z;
                0 < c && (this.P = Math.min(Math.floor(this.P + c), b), this.za.document.body.style.paddingTop = this.P + "px")
            }
            this.Z = a
        }
    };
    _.h.Je = function (a) {
        a && a.touches && a.touches[0] && (this.B = "touchstart", this.F = a.touches.length, this.G = !1, nv(this), this.Z = a.touches[0].pageY, this.Ba = (a = a.target) && "top" == this.o && this.M && this.m && this.m.O() && a instanceof window.Element ? ut(this.m.O(), a) : !1)
    };
    _.h.Bd = function () {
        if (this.V)return !1;
        this.V = !0;
        _.$d(this.u, "load", this.ja);
        this.J = wu(this.za);
        if (this.W && !this.ka)return !1;
        nv(this);
        return !0
    };
    _.h.wc = _.l(1);
    var Wv = function (a) {
        var b = null;
        _.z(a, function (a) {
            _.D(a, function (a, c) {
                b = b || {};
                b[c] = a
            })
        });
        return b
    }, Xv = function (a) {
        var b = void 0 === b ? window.Infinity : b;
        var c = _.r(_.uj, function (a) {
            return a.getEscapedQemQueryId()
        });
        nt(c, function (a) {
            return !a
        });
        _.ia(c);
        c.length = Math.min(b, c.length);
        _.K(a, "qqids", c.join(","))
    }, Yv = function (a) {
        return null != a.o && a.za && 0 != (0, _.Xd)() ? a.o * a.za : a.o
    }, Zv = function (a) {
        var b = new _.nk;
        _.z(a, function (a) {
            null != a.m && (b.m = a.m);
            null != a.o && (b.o = a.o);
            null != a.za && (b.za = a.za)
        });
        return b
    }, $v = function (a, b) {
        this.slot = a;
        this.serviceName = "publisher_ads";
        this.makeRewardedVisible = b
    }, aw = function (a, b) {
        this.slot = a;
        this.serviceName = "publisher_ads";
        this.payload = b
    }, bw = function (a, b, c, d) {
        _.Fm(a, "ad_fetch_period", b, d);
        _.uf(_.Ti.L(), (4).toString(), b);
        _.Mm(a, c, "ad." + b)
    }, cw = function (a) {
        return new _.im(a.C(), !0, "publisher_ads")
    }, dw = function (a, b) {
        3 == a.ca && _.fn(a, "rewardedSlotReady", new $v(a, b))
    }, ew = function (a, b) {
        3 == a.ca && _.fn(a, "rewardedSlotGranted", new aw(a, b))
    }, fw = function (a, b) {
        if (null == b)return null;
        var c = {};
        c.mvo = a.K ? -1 : 0 < (0 < b.za && 0 < b.m ? b.za - (b.m - 1E3) : 0) ? 0 < b.za && 0 < b.m ? b.za - (b.m - 1E3) : 0 : 0;
        0 <= b.o && (c.brt = b.o);
        return c
    }, gw = function (a) {
        return a.j ? !!a.j._is_afc_ : null
    }, hw = function (a) {
        return a.j ? !!a.j._afc_expandable_ : !0
    }, iw = function (a) {
        if (!a.I) {
            var b = _.P(a);
            if (!b)return null;
            a.I = _.Bd(b, window)
        }
        return a.I
    }, jw = function (a, b) {
        var c = 0;
        a.P || (a.P = _.an(a));
        for (var d = 0; d < a.P.length; d++) {
            var e = a.P[d];
            _.y(e) && (e = e[b], c < e && (c = e))
        }
        return c
    }, kw = function (a, b, c) {
        var d = _.P(a);
        if (!d)return !1;
        var e = _.ji(_.Ki);
        if (0 == c && (!e || "21061584" == e))return !1;
        var f = b[0];
        c = b[1];
        var g = jw(a, 0);
        e = jw(a, 1);
        if (!(g < f || e < c))return !1;
        a.I = iw(a);
        b = {};
        g < f && f > (0, window.parseInt)(a.I.width, 10) && (f += "px", b.width = f, b["max-width"] = f);
        e < c && (a = (0, window.parseInt)(a.I.height, 10)) && (a = a >= e ? c + (a - e) + "px" : c + a + "px", b.height = a, b["max-height"] = a);
        return _.Gd(b) ? !1 : (zt(d, b), !0)
    }, lw = function (a, b) {
        var c = _.gn(a, b) || _.P(a, b), d = new _.Ch;
        try {
            var e = function (a, c) {
                return b.elementsFromPoint(a, c)
            }, f = c.getBoundingClientRect(), g = f.left, k = f.top, m = f.width, p = f.height, n = iw(a);
            if ("hidden" == n.visibility || "none" == n.display)return _.Dh(d);
            var x = (0, window.parseInt)(n["border-top-width"] || 0, 10) + 1;
            a = g + m;
            p = k + p;
            var G = e(g + x + 2, k + x);
            var A = e(a - x - 2, k + x);
            var W = e(a - x - 2, p - x);
            var va = e(g + x + 2, p - x);
            var zb = e(a / 2, p - x)
        } catch (Cx) {
            return d.set(1), _.Dh(d)
        }
        if (!(G && G.length && A && A.length && W && W.length && va && va.length && zb && zb.length))return d.set(7), _.Dh(d);
        e = function (a, b) {
            return vt(a, b) || vt(b, a)
        };
        G = G[0];
        c == G || e(c, G) || Bt(G) || d.set(2);
        A = A[0];
        c == A || e(c, A) || Bt(A) || d.set(3);
        W = W[0];
        c == W || e(c, W) || Bt(W) || d.set(4);
        va = va[0];
        c == va || e(c, va) || Bt(va) || d.set(5);
        if (Bt(c))return _.Dh(d);
        va = !1;
        for (W = 0; W < zb.length; W++)if (A = zb[W], !va)c == A && (va = !0); else if (!e(c, A) && "hidden" != _.Bd(A, window).visibility && !Bt(A)) {
            d.set(6);
            break
        }
        return _.Dh(d)
    }, mw = function (a, b) {
        a.Ja = b;
        _.q.clearTimeout(a.qc)
    }, nw = function (a, b, c) {
        mw(a, b);
        0 < c && (a.qc = _.q.setTimeout(function () {
            return mw(a, null)
        }, c))
    }, ow = function (a, b) {
        a.j = b;
        if (b._pvtoken_) {
            var c = a.j._pvtoken_lifetime_;
            c = _.ua(c) ? 1E3 * Number(c) : 3E4;
            c = (0, window.isNaN)(c) ? null : c;
            null != c && nw(a, b._pvtoken_, c)
        }
        a.Y = 0 == a.Y && b._rereq_ ? 1 : 2
    }, pw = function (a, b, c, d) {
        var e = null;
        _.E(b, c, d) && (e = function () {
            return _.$d(b, c, d)
        }, a.B.push(e));
        return e
    }, qw = /(<head(\s+[^>]*)?>)/i, rw = function (a) {
        return (a = a.slot.j) && !a._use_safe_frame_ && "height" == a._fluid_
    }, sw = function (a, b, c) {
        var d = new Rv, e = new Sv, f = 1 == a.ca ? "top" : "bottom", g = _.P(a);
        Vv.call(this, b, c, f, d, e, g);
        this.R = a
    };
    _.v(sw, Vv);
    var tw = function (a, b) {
        if (!a)return a;
        var c = a.toLowerCase();
        return -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") ? a : "<html>\n<head>\n" + (void 0 === b ? "" : b) + "</head><body>" + a + "</body></html>\n"
    }, uw = {width: "100%", height: "100%", left: "0", top: "0"}, vw = function (a, b) {
        if (b && b.data && b.source) {
            var c = _.gn(a.slot, _.q.document);
            if (c && c.contentWindow == b.source)try {
                var d = JSON.parse(b.data);
                if ("rewarded" == d.type)switch (d.message) {
                    case "prefetched":
                        2 == a.za && (a.za = 3, dw(a.slot, function () {
                            var b = _.q.document, c = _.gn(a.slot, b);
                            if (3 == a.za && c) {
                                a.za = 4;
                                var d = _.P(a.slot, b);
                                zt(d, {
                                    backgroundColor: "white",
                                    opacity: "1",
                                    position: "fixed",
                                    margin: "0",
                                    padding: "0",
                                    zIndex: 2147483647,
                                    display: "block"
                                });
                                zt(d, uw);
                                a.w = rv(b);
                                c.contentWindow.postMessage(JSON.stringify({type: "rewarded", message: "visible"}), "*")
                            }
                        }));
                        break;
                    case "granted":
                        4 == a.za && ew(a.slot, d.payload || null);
                    case "canceled":
                        _.yn(a)
                }
            } catch (e) {
            }
        }
    }, ww = function () {
    };
    _.h = ww.prototype;
    _.h.getNewBlocks = function () {
    };
    _.h.setupOse = function () {
    };
    _.h.getOseId = function () {
        return -1
    };
    _.h.getCorrelator = function () {
        return ""
    };
    _.h.numBlocks = function () {
        return 0
    };
    _.h.registerAdBlock = function () {
    };
    _.h.unloadAdBlock = function () {
    };
    _.h.setLoadOsdJsOnPubWindow = function () {
    };
    var xw = /Trident|MSIE/, yw = /rv:11|Trident\/[78]/, zw = function () {
        var a = _.q.navigator;
        return (a = a && a.userAgent) ? xw.test(a) && !yw.test(a) : !1
    }, Aw = function (a, b) {
        zw() ? _.E(a, "readystatechange", function (c) {
            a && "complete" == a.readyState && b(c)
        }) : _.E(a, "load", b)
    }, Bw = function () {
        var a = (_.Ie() || _.q).google_osd_amcb;
        return _.Ea(a) ? a : null
    }, Cw = function (a, b) {
        b = void 0 === b ? "/r20100101" : b;
        var c = /r\d{8}/;
        return a && c.test(a) && "r20100101" !== a ? "/pagead/js/" + a + b + "/osd.js" : "/pagead/osd.js"
    }, Dw = "", Ew = function (a) {
        var b = a.u ? _.Ie() : _.q;
        a = Dw;
        b = b || _.q;
        b.google_osd_loaded ? a = !1 : (_.Ad(b.document, a), a = b.google_osd_loaded = !0);
        a && Vt()
    }, Fw = 0, Gw = 0, Hw = function (a, b, c, d, e, f) {
        d = void 0 === d ? _.Aa : d;
        this.v = a;
        this.F = b;
        this.za = c;
        this.u = this.o = this.m = !1;
        this.w = d;
        this.D = void 0 === e ? -1 : e;
        this.B = void 0 === f ? -1 : f
    }, Iw = function (a, b) {
        this.m = b && b.m ? b.m : 0;
        this.o = b ? b.o : "";
        this.za = b && b.za ? b.za : [];
        this.u = !1;
        if (b)for (a = 0; a < this.za.length; ++a)this.za[a].u = !0
    };
    _.h = Iw.prototype;
    _.h.getNewBlocks = function (a, b) {
        for (var c = this.za.length, d = 0; d < c; d++) {
            var e = this.za[d];
            !e.o && e.za && (e.o = !0, a(e.za, e.v, e.F, e.m, void 0, e.u, e.w, e.D, e.B))
        }
        b && ((_.Ie() || _.q).google_osd_amcb = a)
    };
    _.h.setupOse = function (a) {
        if (this.getOseId())return this.getOseId();
        var b = _.lo(Fw, Gw);
        if (!b)return 0;
        this.m = b;
        this.o = String(a || 0);
        return this.getOseId()
    };
    _.h.getOseId = function () {
        return window && Math.random && window.navigator ? this.m : -1
    };
    _.h.getCorrelator = function () {
        return this.o
    };
    _.h.numBlocks = function () {
        return this.za.length
    };
    _.h.registerAdBlock = function (a, b, c, d, e, f, g) {
        g = void 0 === g ? function () {
            return null
        } : g;
        c = Bw();
        e = _.kf() || -1;
        f = _.q.pageYOffset;
        0 <= f || (f = -1);
        if (c && d)c(d, a, b, !1, void 0, !1, g, e, f); else {
            var k = new Hw(a, b, d, g, e, f);
            this.za.push(k);
            d && Aw(d, function () {
                k.m = !0
            });
            Dw || (_.ae(_.q, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + b + ("&req=" + a), void 0), Dw = au(new Xt, "https:", "pagead2.googlesyndication.com", Cw("r20100101", "/r20100101")));
            Ew(this)
        }
    };
    _.h.unloadAdBlock = function (a, b) {
        _.ua(window.Goog_Osd_UnloadAdBlock) && window.Goog_Osd_UnloadAdBlock(a, void 0 === b ? !1 : b)
    };
    _.h.setLoadOsdJsOnPubWindow = function (a) {
        this.u = a
    };
    var Jw = function () {
        var a = _.Ie(), b = a.__google_ad_urls;
        if (!b)return a.__google_ad_urls = new Iw(a);
        try {
            if (0 <= b.getOseId())return b
        } catch (c) {
        }
        try {
            return a.__google_ad_urls = new Iw(a, b)
        } catch (c) {
            return a.__google_ad_urls = new Iw(a)
        }
    }, Kw = function (a) {
        if (!a.za) {
            var b = _.H(6), c = _.H(1), d = _.H(7), e = Cw();
            Dw = au(new Xt, b ? "https:" : "http:", c, e);
            Gw = d;
            Fw = 0;
            a.o ? !_.Pb() || 0 <= _.Db(_.Tb(), 10) ? b = Jw() : (b = _.Ie(), b = (c = b.__google_ad_urls) ? c : b.__google_ad_urls = new ww) : b = Jw();
            a.za = b;
            a.m = a.za.setupOse(a.u)
        }
        return a.za
    }, Lw = function (a, b) {
        var c = _.P(a);
        if (!b || !c)return !1;
        var d = a.j._width_;
        if (0 >= d || d <= jw(a, 0))return !1;
        var e = c.ownerDocument;
        e = e.defaultView || e.parentWindow || _.q;
        switch (b) {
            case 2:
                d = iw(a);
                b = "rtl" == d.direction;
                var f = c.style.marginLeft, g = c.style.marginRight;
                b ? zt(c, {"margin-right": "0px"}) : zt(c, {"margin-left": "0px"});
                if (a = c.getBoundingClientRect()) {
                    f = 1;
                    if (g = c.parentElement) {
                        g = _.Bd(g, e);
                        var k = g.justifyContent;
                        "flex" != g.display || "row" != g.flexDirection || "center" != k && "space-evenly" != k && "space-around" != k || (f = 2)
                    } else g = new _.tj("gpt_pop_nopar"), _.L(g), Xv(g), _.xj(g, 1), _.K(g, "bm", 2);
                    g = {"z-index": "30"};
                    "absolute" != d.position && "fixed" != d.position && "relative" != d.position && (g.position = "relative");
                    b ? g["margin-right"] = f * (a.right - e.innerWidth) + "px" : g["margin-left"] = -a.left * f + "px";
                    zt(c, g);
                    c = !0
                } else c.style.marginLeft = f, c.style.marginRight = g, c = !1;
                return c;
            case 1:
                if (f = c.parentElement)if (b = _.nn(a)) {
                    k = _.Bd(f, e);
                    e = a.I || _.Bd(c, e);
                    a = e.position;
                    var m = "rtl" == k.direction ? "Right" : "Left";
                    f = m.toLowerCase();
                    g = "absolute" == a ? 0 : (0, window.parseInt)(k["padding" + m], 10);
                    k = (0, window.parseInt)(k["border" + m + "Width"], 10);
                    d = Math.round((b.width - Math.max((0, window.parseInt)(e.width, 10) || 0, d)) / 2);
                    b = 0;
                    m = {};
                    switch (a) {
                        case "fixed":
                        case "relative":
                            b = (0, window.parseFloat)(e[f]) || 0;
                            break;
                        case "absolute":
                            m[f] = "0"
                    }
                    m["margin-" + f] = d - g - k - b + "px";
                    zt(c, m);
                    c = !0
                } else c = !1; else c = new _.tj("gpt_pop_nopar"), _.L(c), Xv(c), _.xj(c, 1), _.K(c, "bm", 1), c = !1;
                return c;
            default:
                return c = new _.tj("gpt_invalid_bm"), _.L(c), Xv(c), _.xj(c, 1), !1
        }
    }, Mw = function (a, b, c, d, e, f, g, k, m, p) {
        var n = _.vn, x;
        _.y(e) ? x = new _.hd(e[0], e[1]) : x = 1;
        e = _.Ci.is("21060356");
        return new Qv({
            Cb: b,
            Yb: c,
            Dc: n,
            content: tw(d),
            size: x,
            Gc: {
                info: function () {
                }, A: function () {
                }, error: function () {
                }
            },
            zc: m,
            cc: f,
            sandbox: _.ua(g.sandbox) ? g.sandbox : !1,
            permissions: {
                $a: _.ua(g.allowOverlayExpansion) ? g.allowOverlayExpansion : !k,
                ab: _.ua(g.allowPushExpansion) ? g.allowPushExpansion : !1
            },
            Ac: _.F(45),
            Ia: !!_.Gh().fifWin,
            Kc: Tv(),
            Lc: _.em(),
            yc: _.fm(),
            Qc: _.aj(a, !0),
            oc: _.aj(a, e),
            hostpageLibraryTokens: p,
            ra: _.Ej
        })
    }, Nw = function (a, b, c, d, e, f, g) {
        if (_.q.IntersectionObserver) {
            var k = null, m = _.gn(a, b) || _.P(a, b), p = _.M(459, function (n) {
                if (n = n && n[0]) {
                    var p = n.boundingClientRect, G = -2 > Math.round(p.left) || Math.round(p.right) > window.innerWidth + 2;
                    if (n.intersectionRatio >= 1 - ((0 <= Math.round(p.left) ? 0 : 2) + (Math.round(p.right) <= window.innerWidth ? 0 : 2)) / d || G)_.Bj("gpt_slotexp", function (k) {
                        var m = G ? 256 : lw(a, b);
                        _.L(k);
                        _.K(k, "qid", a.getEscapedQemQueryId());
                        _.K(k, "e", String(m));
                        _.K(k, "ret", d + "x" + e);
                        _.K(k, "req", f + "x" + g);
                        _.K(k, "bm", String(c));
                        _.F(60) && _.K(k, "isc", 1)
                    }, {$b: _.jg(7)}), k && k.unobserve(m)
                }
            });
            m && (k = new _.q.IntersectionObserver(p, {threshold: [1]}), k.observe(m))
        }
    }, Ow = function (a, b, c, d, e) {
        var f = _.an(a), g = (f = f && f[0]) && f[0] || -1, k = f && f[1] || -1;
        _.q.setTimeout(_.M(459, function () {
            return Nw(a, b, c, d, e, g, k)
        }), 500)
    }, Pw = function (a, b) {
        var c = Ft(b, _.M(290, function () {
            a.za[b] = 3;
            _.eb(window.google_image_requests, c)
        }))
    }, Qw = function () {
        var a = {};
        return a._empty_ = !0, a
    }, Rw = function (a, b) {
        a.Ka || (a.Ka = !0, a = function () {
            try {
                var a = b.document.createElement("iframe");
                a.id = "ace-frame";
                a.src = "https://www.googletagservices.com/cb/ace_frame.html#cbu=https%3A%2F%2Fwww.googletagservices.com%2Ftag%2Fjs%2Fgpt.js";
                a.style.visibility = "hidden";
                a.style.display = "none";
                b.document.body.appendChild(a)
            } catch (d) {
            }
        }, b.requestIdleCallback ? b.requestIdleCallback(a) : b.setTimeout(a, 0))
    }, Sw = function (a, b) {
        var c = _.ig(3, 3, "");
        if (c) {
            var d = _.an(b), e = d && d[0];
            if (e && _.y(e) && _.t(e[0]) && _.t(e[1])) {
                d = e[1];
                e = e[0];
                var f = c.split(","), g = _.Le(window).width;
                c = d;
                if ("f" == f[0])a._breakglass_mode_ = 2; else {
                    var k = _.nn(b);
                    g = Math.min(k && k.width, g);
                    if (!g)return;
                    a._breakglass_mode_ = 1
                }
                f = f[1];
                k = Number(f);
                "ratio" == f && e ? c = Math.floor(d / e * g) : k && 0 < k && (c *= k);
                a._height_ = c;
                a._width_ = g;
                a._html_ = "<html>" + ('<body style="' + ("height:" + (c - 2) + "px;" + ("width:" + (g - 2) + "px;") + "background-color:#ddd;color:#000;border:1px solid #f00;") + '">') + ("<p>Requested size:" + e + "x" + d + "</p>") + ("<p>Rendered size:" + g + "x" + c + "</p>") + "</body></html>";
                (a = _.P(b)) && Lt(a, "opacity", .5)
            }
        }
    }, Tw = function (a, b, c) {
        ow(b, c);
        b.fetchEnded();
        Uv(_.Ti.L(), b.getCsiId(), b.getEscapedQemQueryId());
        _.Pq(b) && _.Gn.push({ba: a, aa: 15, $: [b]});
        Sw(c, b);
        null != c._host_page_libraries_ && _.z(c._host_page_libraries_, function (c) {
            var d = a.da;
            if (!_.bb(d.o, c))switch (c) {
                case 1:
                case 2:
                case 3:
                    var e = c + "_hostpage_library", k = _.Ad(window.document, _.sg[c]);
                    k && (k.id = e);
                    d.o.push(c);
                    e = new ku(c);
                    d.m.push(e);
                    d = _.Gh();
                    d.hostpageLibraryTokens || (d.hostpageLibraryTokens = {});
                    d.hostpageLibraryTokens[e.za] = e.m
            }
            d = a.da;
            d.za[c] || (d.za[c] = []);
            d.za[c].push(b)
        });
        if (c._margin_render_) {
            var d = new _.nk;
            d.o = c._margin_render_;
            d.za = 1;
            b.Ba = d
        }
        null != c._cookies_ && _.np(a.ja, c);
        d = !!c._generate_slot_;
        if (3 == b.ca || c._persistent_for_stream_ || d)a.za.T[_.J(b)] = null;
        (d = c._a_exps_) && _.z(d, function (a) {
            _.Uh.L().za[a] = !0;
            _.li(a.toString(), !0)
        });
        (c = c._is_amp_inabox_) && Ut(void 0, c)
    }, Uw = function (a, b, c) {
        var d = void 0 === d ? window : d;
        if (a.m && !_.y(b))return d = new _.tj("sra_legacy_ad_response"), _.L(d), _.xj(d), [];
        if (c.length) {
            var e = c[0];
            bw(a.Ba, e.getCsiId(), e.ma, e.m)
        }
        _.y(b) || (b = [b]);
        var f = [], g = 0;
        for (_.z(b, function (b) {
            var d = _.Jd(b, _.C.nb);
            b = b[d];
            if (d && b) {
                var e = b._generate_slot_ ? _.jp(d, b) : c[g++];
                e && e.getAdUnitPath() == d && (Tw(a, e, b), f.push(e))
            } else g++
        }); g < c.length; g++)b = c[g], Tw(a, b, Qw()), f.push(b);
        _.pg(_.Uh.L(), 4);
        _.F(34) && Rw(a, d);
        return f
    }, Vw = function (a) {
        (a = (a = a.j) && a._resources_) && _.z(a, function (a) {
            if (a) {
                var b = a.url;
                a = a.as;
                if (b && a) {
                    var d = _.uq.L();
                    2 !== d.za[b] && 3 !== d.za[b] && (d.za[b] = 2, "image" == a ? Pw(d, b) : (0, _.qo)() && _.vq(d, b, "preload", a))
                }
            }
        })
    }, Ww = function (a, b) {
        if (!b.j)return null;
        b = Yv(Zv([a.za.I, b.Ba]));
        var c = -1 === b;
        return null == b || 0 > b && !c ? null : a.Y(Math.max(b, 0) + "%", c)
    }, Xw = function (a, b) {
        if (a.uc) {
            var c = b.j;
            c && !c._empty_ && (c = _.hn(b)) && -1 == c.indexOf("adpnt") && (b = b.getEscapedQemQueryId(), c = new _.tj("gpt_qse_missing", _.bj(), 1), _.K(c, "qemQueryId", b), _.L(c, a.za), _.xj(c))
        }
    }, Yw = function (a) {
        var b = new _.tj("gpt_fluid_not_sf", _.bj(), _.H(23));
        _.K(b, "impl", a.I());
        _.L(b, a.za);
        _.xj(b)
    }, Zw = function (a, b, c, d, e, f, g, k) {
        e = void 0 === e ? null : e;
        f = void 0 === f ? !1 : f;
        g = void 0 === g ? !0 : g;
        k = void 0 === k ? !0 : k;
        c.D = !1;
        return _.Bg(_.Iq(a, c), function (a) {
            d = a.v(d, e) || d
        }).then(function () {
            a:{
                var a = d;
                var c = g, e = k;
                c = void 0 === c ? !0 : c;
                e = void 0 === e ? !0 : e;
                (void 0 === f ? 0 : f) && (a = tw(a, "<script>var inDapIF=true;\x3c/script>\n"));
                try {
                    var x = b.contentWindow ? b.contentWindow.document : b.contentDocument;
                    c && (_.B("Firefox") || _.pi.is("21061646")) && x.open("text/html", "replace");
                    x.write(a);
                    var G;
                    if (G = b.contentWindow && b.contentWindow.history && b.contentWindow.history.replaceState) {
                        var A = b.contentWindow.location.href, W = A.length - 1;
                        G = 0 <= W && A.indexOf("#", W) == W
                    }
                    G && b.contentWindow.history.replaceState(null, "", "#" + Math.random());
                    e && x.close()
                } catch (va) {
                    a = new _.tj("gpt_write_into_frame_failure");
                    _.L(a);
                    _.xj(a);
                    a = !1;
                    break a
                }
                a = !0
            }
            return a
        })
    }, $w = function (a, b, c) {
        var d = b.getEscapedQemQueryId();
        (c = _.P(b, c)) && c.setAttribute("data-google-query-id", d);
        a = a.Ba;
        c = b.getCsiId();
        var e = b.m, f = hw(b);
        b = !!gw(b);
        _.Fm(a, "start_ad_render_period", c, e);
        _.Em(a, "exr", c, e, f ? 1 : 0);
        _.uf(_.Ti.L(), (5).toString(), c);
        _.Jm(a, "is_backfill_at_render", "" + c + "_" + b, e);
        _.Jm(a, "qqid", "" + c + "_" + d, e)
    }, ax = function (a, b, c) {
        _.Gq(a, b, c, a.la);
        b = cw(c);
        b.slotContentChanged = a.la;
        c.renderEnded(b)
    }, bx = function (a, b) {
        if (b = (b = _.P(a, b)) && _.gb(b.childNodes)) {
            var c = _.$q(a);
            _.z(b, function (a) {
                1 == a.nodeType && a.id != c && _.pd(a)
            })
        }
    }, cx = function (a, b, c, d, e, f, g, k) {
        var m = _.mn(d, c);
        if (null != m) {
            for (var p; p = m.firstChild;)m.removeChild(p);
            a.za.o || (m.style.display = "inline-block");
            k = Wv([k, a.za.J, d.ga]) || {};
            b = Mw(b, m, _.ln(d), f, e, g, k, !!gw(d), hw(d), a.da.m);
            d.o = b;
            d.D = !1;
            (c = _.gn(d, c)) && _.Pq(d) && a.fa(d, c);
            _.Nq(a, c, d)
        }
    }, dx = function (a) {
        _.bn(a) && window.setTimeout(function () {
            _.Bj("gpt_fluid_sz", function (b) {
                var c = _.gn(a, window.document) ? _.ve(_.gn(a, window.document)) : null;
                _.K(b, "sz", c ? c.width + "x" + c.height : "null");
                _.K(b, "qqid", a.getEscapedQemQueryId())
            })
        }, 250)
    }, ex = function (a, b, c, d, e) {
        var f = _.gn(c, b);
        if (!f)return _.Ag();
        _.w(d) ? (b = c.j, "fluid" == d && b && b._is_amp_inabox_ || Yw(a)) : (f.width = String(d[0]), f.height = String(d[1]));
        _.Pq(c) && _.Gn.push({ba: a, aa: 14, $: [c, f]});
        return Zw(a, f, c, e, null, !0).then(function () {
            _.Nq(a, f, c)
        })
    }, fx = function (a, b, c) {
        if (_.F(4) && c.Ea())_.Bj("gpt_sdbr", function (a) {
            _.K(a, "sid", _.J(c));
            _.K(a, "int", "1")
        }); else {
            var d = _.P(c, b);
            if (!_.Pi.is("21061132") || d) {
                $w(a, c, b);
                var e = c.j;
                c.renderStarted();
                _.F(5) && bx(c, b);
                if (null == e || e._empty_)ax(a, b, c); else if (a.K)_.Zo(c, cw(c)); else {
                    d = e._html_;
                    if (!_.w(d)) {
                        _.jr(a, c);
                        return
                    }
                    _.vr(a, c);
                    if ("height" == e._fluid_)var f = "fluid"; else {
                        var g = e._width_, k = e._height_, m = e._breakglass_mode_ || 0;
                        f = [g, k];
                        var p = kw(c, f, m), n = Lw(c, m);
                        (p || n) && Ow(c, b, m, g, k)
                    }
                    g = function () {
                        var a = _.en(c, e);
                        c.renderEnded(a)
                    };
                    a.w(e, c) ? (cx(a, _.q, b, c, f, d, function () {
                        a.loaded(c);
                        dx(c)
                    }, {sandbox: e._use_sandbox_ || !1}), g()) : ex(a, b, c, f, d).then(g)
                }
                Xw(a, c)
            }
        }
    }, gx = function (a, b, c) {
        var d = c.getSlotElementId(), e = _.P(c, b);
        if (!_.Ne(e))return !1;
        var f = Ww(a, c);
        if (!f)return !1;
        var g = !!a.D[d];
        a.D[d] = function () {
            c.ka = null;
            fx(a, b, c)
        };
        g || (f.observe(e), c.ka = f);
        return !0
    }, hx = function (a, b, c) {
        var d = Yv(Zv([a.za.I, c.Ba]));
        return null == d || _.gp(a.za, _.q, (d || 0) / 100, c) ? !1 : null != d && gx(a, b, c)
    }, ix = function (a, b, c) {
        if (_.Bi.is("21061259"))return !1;
        if (!_.F(20) || !_.Hg(window.document) || _.gp(a.za, _.q, 0, c))return hx(a, b, c);
        _.Vq(a);
        if (!a.G)return !1;
        a.u[c.getSlotElementId()] = function () {
            hx(a, b, c) || fx(a, b, c)
        };
        return !0
    }, jx = function (a, b, c) {
        b = _.Aq(a, b, c.o, _.fr(a), c.u);
        _.gr(a, b)
    }, kx = function (a) {
        return _.u(a, function (a) {
            return 1 == a.Y
        })
    }, lx = function (a, b) {
        (a = _.P(a, b)) && a.parentNode && "" === a.innerHTML && a.parentNode.removeChild(a)
    }, mx = function (a, b, c, d, e, f, g, k) {
        lx(d, c);
        var m = _.ln(d) + "__container__";
        m = '<div id="' + _.Ab(m) + '"></div>';
        c.write(m);
        m = _.mn(d, c);
        null != m && (a.za.o ? m.style.margin = "auto" : m.style.display = "inline-block", k = Wv([k, a.za.J, d.ga]) || {}, b = Mw(b, m, _.ln(d), f, e, g, k, gw(d) || !1, hw(d), a.da.m), d.o = b, _.Nq(a, _.gn(d, c), d))
    }, nx = function (a, b, c) {
        var d = c.j, e = b.parentNode, f = d && d._html_;
        f ? !d._expandable_ || d._is_afc_ && d._is_3pas_ ? (_.Qq(b, c, function () {
            return a.loaded(c)
        }), Zw(a, b, c, f, null, !0).then(function () {
            var a = _.en(c, d);
            c.renderEnded(a)
        })) : (e.innerHTML = f, _.Zo(c, _.en(c, d))) : (e.removeChild(b), _.Zo(c, cw(c)))
    }, ox = function (a, b, c, d) {
        d = void 0 === d ? null : d;
        b = b.getSlotElementId() + "_ad_container";
        var e = '<div id="' + _.Ab(b) + '"';
        d && "height" == d._fluid_ ? e += ' style="width:100%;">' : a.za.o && d ? (e += ' style="width:' + d._width_, e += 'px;margin:auto;">') : e += ">";
        d && (e += d._html_);
        c.write(e + "\n</div>\n");
        return b
    }, px = function (a, b, c) {
        lx(b, c);
        var d = b.j;
        if (null != d) {
            var e = ox(a, b, c, d);
            d = _.en(b, d);
            b.renderEnded(d);
            _.Nq(a, c.getElementById(e), b)
        }
    }, qx = function (a, b, c, d, e, f, g) {
        g = void 0 === g ? window.document : g;
        lx(b, g);
        var k = _.ln(b), m = [], p = 0, n = 0;
        _.y(e) ? (p = e[0], n = e[1]) : Yw(a);
        c = _.Yi(c);
        m.push('<iframe id="', _.Ab(k), '" title="', _.vn, '" name="', _.Ab(k), '" width="', p, '" height="', n, '" allowtransparency="true" scrolling="no" marginwidth="0"', ' marginheight="0" frameborder="0" style=', '"border:0px;left:0;position:absolute;top:0;"', ' src="', c, '"');
        null != d && m.push(' onload="', d, '"');
        m.push("></iframe>");
        d = [];
        k = b.getSlotElementId() + "_ad_container";
        d.push('<div id="' + _.Ab(k) + '"');
        f && d.push(' style="text-align:center" ');
        d.push(">");
        d.push('<ins style="position:relative;width:' + p + "px;height:" + n + 'px;border:none;display:inline-table;vertical-align:bottom;">' + ('<ins style="position:relative;width:' + p + "px;height:" + n + 'px;border:none;display:block;">' + m.join("") + "</ins>") + "</ins>");
        d.push("</div>");
        g.write(d.join(""));
        f = _.gn(b, g);
        _.Nq(a, f, b)
    }, rx = function (a, b, c) {
        c = void 0 === c ? window.document : c;
        lx(b, c);
        return ox(a, b, c)
    };
    _.Or.prototype.G = Z(28, function (a, b, c) {
        var d = this, e = c.j, f = null;
        e && "height" == e._fluid_ ? f = "fluid" : e && (f = [e._width_, e._height_]);
        $w(this, c, b);
        if (null != f && "fluid" != f && !e._empty_) {
            var g = e._breakglass_mode_ || 0, k = f[0], m = f[1], p = kw(c, f, g), n = Lw(c, g);
            (p || n) && Ow(c, b, g, k, m)
        }
        if (null == e || e._empty_)_.Gq(this, b, c, !1), _.Zo(c, cw(c)); else if (this.K)_.Zo(c, cw(c)); else if (this.w(e, c))g = function () {
            d.loaded(c)
        }, (k = e._html_) ? (mx(this, a, b, c, f, k, g, {sandbox: e._use_sandbox_ || !1}), _.Zo(c, _.en(c, e))) : _.Zo(c, cw(c)); else if (e._snippet_ && !e._is_afc_)px(this, c, b); else if (0 == (0, _.Xd)() && _.Pb()) {
            a = "googletag.impl.pubads.syncAdSlotLoaded(this, " + ("'" + _.J(c) + "', " + c.m + ");");
            g = "about:blank";
            if (k = _.Ap(this.o, "google_domain_reset_url"))if (m = _.Qe(k.match(_.Pe)[3] || null), null === m || 0 <= m.indexOf(window.document.domain))g = k;
            if ("height" == e._fluid_) {
                Yw(this);
                return
            }
            qx(this, c, g, a, f, this.za.o, b)
        } else e = rx(this, c, b), b.write("<script>googletag.impl.pubads.createDomIframe(" + qt(e) + " ," + qt(_.J(c)) + "," + this.za.o + "," + c.m + ");\x3c/script>");
        Xw(this, c);
        c.renderStarted()
    });
    _.Or.prototype.jc = Z(27, function (a) {
        window.clearTimeout(this.T);
        Uw(this, a, this.F);
        this.F = null;
        this.v || (this.v = !0, _.Rr(this, this.B));
        this.u.length && _.Pr(this, this.u.shift())
    });
    _.Kr.prototype.Pa = Z(26, function (a, b, c, d, e) {
        var f = this;
        e = void 0 === e ? window.document : e;
        var g = _.J(b);
        if (this.v[g] == a)if (a = b.j, a._html_ || $w(this, b, e), this.K)delete this.v[g], b.renderStarted(), _.Zo(b, cw(b)); else if (d && delete this.v[g], a._empty_)b.renderStarted(), ax(this, e, b); else if (a._html_ = (a._html_ || "") + c, g = !_.Bi.is("21061162"), !g || d && !ix(this, e, b))if (this.w(a, b))d && (b.renderStarted(), cx(this, window, e, b, "height" == a._fluid_ ? "fluid" : [a._width_, a._height_], a._html_, function () {
            return f.loaded(b)
        }, {sandbox: !!a._use_sandbox_}), _.Pq(b) && this.fa(b, _.gn(b, e)), _.Zo(b, _.en(b, b.j))); else {
            var k = _.gn(b, e);
            k && ((e = b.D) && b.renderStarted(), this.Ja(b, k, g ? a._html_ : c, a._html_, e, d).then(function () {
                if (d) {
                    _.Nq(f, k, b);
                    var a = _.en(b, b.j);
                    b.renderEnded(a)
                }
            }))
        }
    });
    _.Kr.prototype.Ja = Z(25, function (a, b, c, d, e, f) {
        if (e)try {
            b.contentWindow.inDapIF = !0, b.contentWindow.inGptIF = !0
        } catch (g) {
        }
        f && _.Pq(a) && _.Gn.push({ba: this, aa: 14, $: [a, b]});
        return Zw(this, b, a, c, d, !1, e, f)
    });
    _.Kr.prototype.Ra = Z(24, function (a, b, c, d) {
        d = void 0 === d ? window.document : d;
        this.ea[a] || (this.ea[a] = !0, bw(_.xm(), b.getCsiId(), b.ma, b.m));
        var e = _.J(b);
        (c = c[b.getAdUnitPath()]) && _.Yo(this.za, b) && !this.v[e] && (Tw(this, b, c), _.pg(_.Uh.L(), 4), this.v[e] = a, _.Mr(this, b, d))
    });
    _.T.prototype.lb = Z(23, function (a, b) {
        _.Ji.is("21061699") && b && !b.ua || Kw(this.ka).unloadAdBlock(a, !!b.o)
    });
    _.T.prototype.qa = Z(22, function (a, b) {
        b = void 0 === b ? window.document : b;
        try {
            if (_.F(4) && a.Ea())_.Bj("gpt_sdbr", function (b) {
                _.K(b, "sid", _.J(a))
            }); else {
                var c = a.j;
                null == c || c._empty_ || this.K || 3 == a.ca || _.tn(_.P(a, b), !0);
                ix(this, b, a) ? Vw(a) : fx(this, b, a)
            }
        } catch (d) {
        }
    });
    _.T.prototype.ic = Z(21, function (a, b, c) {
        var d = this;
        a = c.u;
        var e = c.za, f = c.w;
        e ? (b = Uw(this, b, e), _.z(b, function (a) {
            return d.qa(a)
        }), b = kx(b), c.w ? (_.z(null == f ? null : this.F[f], function (a) {
            a.Y = 0
        }), delete this.F[f]) : b.length ? jx(this, b, c) : delete this.F[a], this.m || a != this.P || (window.clearTimeout(this.Ib[_.J(e[0])]), _.nr(this))) : (c = new _.tj("gpt_req_undef"), _.L(c), _.K(c, "req_id", String(a)), _.xj(c))
    });
    _.T.prototype.hb = Z(20, function () {
    });
    _.Or.prototype.hb = Z(19, function (a, b) {
        b && (b = this.za.za[b]) && !b.pa && (b.pa = !0, nx(this, a, b))
    });
    _.S.prototype.kb = Z(18, function (a, b) {
        if (this.J && a && !_.Ei.is("21061109")) {
            if (_.Ji.is("21061699")) {
                if (b.ua)return;
                var c = b.ea;
                if (!c || c._empty_ || c._is_amp_inabox_)return;
                b.ua = !0
            }
            Kw(this.ka).registerAdBlock(b.getContentUrl(), 3, this.M(), a, 0, 0, (0, _.La)(b.Xb, b))
        }
    });
    _.S.prototype.fa = Z(17, function (a, b) {
        _.Hq(this, a, function (a) {
            a.o(b)
        }, !0)
    });
    _.S.prototype.pc = Z(16, function (a) {
        _.Hq(this, a, function (a) {
            a.m()
        }, !0)
    });
    _.S.prototype.I = Z(15, function () {
        return "unknown"
    });
    _.T.prototype.I = Z(14, function () {
        return this.m ? "gut_friendly_iframe_sra" : "gut_friendly_iframe"
    });
    _.Or.prototype.I = Z(13, function () {
        return this.m ? "gut_sync_sra" : "gut_sync"
    });
    _.pn.prototype.o = Z(12, function () {
    });
    _.qn.prototype.o = Z(11, function (a) {
        var b = this;
        Ut(a, this.slot.j._is_amp_inabox_);
        a.contentDocument && (pw(this, a.contentDocument, "securitypolicyviolation", function (a) {
            _.Bj("gpt_inabox_cspviolation", function (c) {
                _.K(c, "qqid", b.slot.getEscapedQemQueryId());
                _.K(c, "blockedURI", a.blockedURI);
                _.K(c, "violatedDirective", a.violatedDirective);
                _.K(c, "sample", a.sample);
                _.K(c, "cij", Number(b.za));
                _.L(c)
            })
        }), rw(this) && pw(this, a, "load", function () {
            a.setAttribute("height", a.contentWindow.document.body.scrollHeight);
            a.setAttribute("width", a.contentWindow.document.body.scrollWidth);
            Lt(_.mn(b.slot, _.q.document), "visibility", "visible")
        }));
        _.F(62) && (this.w = pw(this, _.q, "message", function (a) {
            if (a && a.data && a.source && "impression-viewable" == a.data) {
                var c = _.gn(b.slot, _.q.document);
                c && c.contentWindow == a.source && (b.slot.impressionViewable(), b.w && (b.w(), b.w = null))
            }
        }))
    });
    _.rn.prototype.o = Z(10, function (a) {
        a = this.za = new sw(this.slot, a, window.top);
        var b = this.slot.j._reactive_config_.fillMessage, c = bv(a);
        if (c && !a.m) {
            for (var d in ov)!ov.hasOwnProperty(d) || d in b || (b[d] = ov[d]);
            a.Ja = "true" === b[_.Wg.name] || "top" === a.o;
            a.Ca = "true" === b[_.Xg.name];
            if (d = b[_.Yg.name])a.W = "true" === d;
            a.fa = "true" === b[_.Zg.name] || "top" == a.o;
            fv(a, b);
            d = (0, _.La)(a.gc, a);
            var e = (0, _.La)(a.wc, a);
            b = new Uu(b, a.za, a.u, a.D, a.o, d, e, .1, a.v, a.la);
            a.m = b;
            b = a.D.height + a.m.F();
            "bottom" == a.o && xu(a.za) && (b += 20);
            a.I = new _.hd(a.D.width, b);
            a.ea = a.Ka >= a.ga;
            b = bv(a);
            d = a.m && a.m.O();
            b && d && ("top" == a.o ? b.appendChild(d) : b.insertBefore(d, b.firstChild));
            b = a.za;
            _.E(b, "orientationchange", a.ma);
            _.E(b, "resize", a.na);
            _.E(b, "scroll", a.oa);
            _.E(b, "touchcancel", a.pa);
            _.E(b, "touchend", a.qa);
            _.E(b, "touchmove", a.sa);
            _.E(b, "touchstart", a.ua);
            a.M = !0;
            c.setAttribute("data-anchor-status", "ready-to-display");
            "top" == a.o && mv(a, 0)
        }
        this.w = 2
    });
    _.xn.prototype.o = Z(9, function (a) {
        var b = this;
        1 == this.za && (this.za = 2, zt(a, uw), zt(a, {position: "absolute"}), pw(this, _.q, "message", function (a) {
            return vw(b, a)
        }))
    });
    _.pn.prototype.v = Z(8, function () {
    });
    _.qn.prototype.v = Z(7, function (a, b) {
        rw(this) && Lt(_.gn(this.slot, _.q.document), "min-width", "100%");
        if (this.za || !a || !_.F(gw(this.slot) ? 8 : 55))return null;
        var c = a.replace(qw, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src 'none';frame-src 'none'\">");
        return c != a ? (this.za = !0, c) : qw.test(b) ? (c = a.replace(/^([^>]*>)/, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src 'none';frame-src 'none'\">"), this.za = c != a, c) : null
    });
    _.pn.prototype.m = Z(6, function () {
    });
    _.qn.prototype.m = Z(5, function () {
        rw(this) && Lt(_.mn(this.slot, _.q.document), "visibility", "hidden")
    });
    _.rn.prototype.m = Z(4, function () {
        if (!_.P(this.slot)) {
            var a = window.document.createElement("ins");
            a.id = this.slot.getSlotElementId();
            a.style.display = "none";
            window.document.documentElement.appendChild(a)
        }
    });
    _.xn.prototype.m = Z(3, function () {
        var a = _.q.document;
        _.P(this.slot, a) || 1 != this.za || (a = _.sd(new _.id(a), "INS"), a.id = this.slot.getSlotElementId(), zt(a, {display: "none"}), _.q.document.documentElement.appendChild(a))
    });
    _.O.prototype.Xb = Z(2, function (a, b) {
        var c = null, d = this.F;
        0 <= b && (a && !this.K && this.impressionViewable(), a = this.F, this.F = Math.floor(b), a !== this.F && this.gb());
        if (_.F(64)) {
            a = this.R;
            if (null != a && a.B) {
                var e = Math.round(window.performance.now());
                0 < this.ja ? (a.za && _.ih(a.za, _.nh()), c = fw(this, a.za), e = e >= this.ja + 1E3, (this.K || e || 50 <= d && 50 > b) && _.sh(a)) : (this.ja = e, a.za && (b = a.za, c = _.nh(), _.ih(b, c), b.za = c), c = fw(this, a.za))
            }
            return c
        }
    });
    Vv.prototype.wc = Z(1, function () {
        var a = this;
        this.Ja && !this.ha && (this.ha = !0, cu(this.v, 257, function () {
            var b = {msg_type: "manual-send-view"}, c = a.u.contentWindow;
            c && c.postMessage(a.za.JSON.stringify(b), a.R.o ? (_.aj(window) ? "http://" : "https://") + "tpc.googlesyndication.com" : "*")
        }))
    });
    Vv.prototype.gc = Z(0, function () {
        if (!this.Y) {
            this.Y = !0;
            var a = this.za;
            _.$d(a, "orientationchange", this.ma);
            _.$d(a, "resize", this.na);
            _.$d(a, "scroll", this.oa);
            _.$d(a, "touchcancel", this.pa);
            _.$d(a, "touchend", this.qa);
            _.$d(a, "touchmove", this.sa);
            _.$d(a, "touchstart", this.ua);
            a = bv(this);
            _.pd(a);
            hv(this);
            a && (a.style.display = "none")
        }
    });
    var sx = function (a, b, c, d) {
        c !== d ? _.Nc(a, b, c) : a.m[b + a.u] = null
    }, tx = function (a, b, c) {
        a.za || (a.za = {});
        var d = c ? _.Qc(c) : c;
        a.za[b] = c;
        _.Nc(a, b, d)
    }, ux = function (a) {
        _.Jc(this, a, null, null)
    };
    _.Qa(ux, _.Ec);
    var vx = function (a) {
        _.Jc(this, a, null, null)
    };
    _.Qa(vx, _.Ec);
    var wx = function (a) {
        _.Jc(this, a, null, null)
    };
    _.Qa(wx, _.Ec);
    var xx = function (a, b) {
        b = !b || _.ti.is("21060611");
        var c = _.Hi.is("21061546"), d = _.vi.is("22325466"), e = _.wi.is("21062000"), f = new ux, g = new wx;
        sx(f, 1, _.kj, 0);
        var k = _.gi().join();
        sx(f, 5, k, "");
        sx(f, 2, 1, 0);
        tx(g, 1, f);
        f = new vx;
        sx(f, 7, b, !1);
        sx(f, 8, b, !1);
        sx(f, 9, b, !1);
        sx(f, 11, c, !1);
        sx(f, 10, !0, !1);
        sx(f, 13, d, !1);
        sx(f, 14, e, !1);
        tx(g, 2, f);
        a.google_rum_config = _.Qc(g)
    }, yx = function (a) {
        var b = _.H(1), c = _.H(104);
        b = _.nj() + "//" + b + c;
        _.Ad(a.document, b)
    }, zx = function () {
        var a = window, b = _.si.is("21061508");
        xx(a, b);
        b || _.qj(a.document) ? yx(a) : _.Ih(a, function () {
            return yx(a)
        })
    }, Ax = {}, Bx = (Ax[1] = _.T.prototype.ic, Ax[2] = _.Or.prototype.jc, Ax[3] = _.T.prototype.qa, Ax[4] = _.Or.prototype.G, Ax[5] = _.Kr.prototype.Pa, Ax[6] = _.Kr.prototype.Ra, Ax[7] = _.T.prototype.La, Ax[8] = _.T.prototype.Ma, Ax[9] = _.T.prototype.ga, Ax[10] = _.T.prototype.lb, Ax[11] = _.S.prototype.kb, Ax[12] = function (a, b, c) {
        _.Yr((void 0 === c ? 0 : c) ? _.as() : _.V()).hb(a, b)
    }, Ax[13] = _.Kr.prototype.Ja, Ax[14] = _.S.prototype.fa, Ax[15] = _.S.prototype.pc, Ax[16] = _.S.prototype.qc, Ax);
    window.googletag._ = function (a, b) {
        b = void 0 === b ? Bx : b;
        _.Pa("Goog_AdSense_getAdAdapterInstance", Jw);
        _.Pa("Goog_AdSense_OsdAdapter", Iw);
        _.Gn.push = _.M(339, function (a) {
            var c = a && b[a.aa];
            c && c.apply(a.ba, a.$);
            return 0
        });
        _.z(_.Gn, function (a) {
            return _.Gn.push(a)
        });
        _.lj() && zx();
        _.Gn.length = 0
    };
})
