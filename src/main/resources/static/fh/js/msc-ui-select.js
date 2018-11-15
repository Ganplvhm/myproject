(function (d, c) {
    var e = c.tools.browser.isIe6, f = d(document);
    var a = c.ui.select = function (g) {
        if (!d.isPlainObject(g)) {
            g = {id: g};
        }
        g = d.extend({
            width: 80,
            maxWidth: 160,
            maxHeight: 200,
            event: "click",
            hoverDelay: 100,
            defaultValue: false
        }, g);
        if (!g.id || !(g.id = d(g.id)).length || g.id[0].nodeName !== "SELECT") {
            return a;
        }
        d.each(g.id, function () {
            if (!this._select) {
                this._select = 1;
                new b(this, g);
            }
        });
        return a;
    };

    function b(h, g) {
        this.config = g;
        this._dom = {ele: d(h)};
        this._init();
    }

    b.prototype = {
        _init: function () {
            this._disabled = true;
            this._append();
            this._update();
            this._bind();
        }, empty: function () {
            this._dom.list.empty();
            return this;
        }, disabled: function () {
            this._disabled = true;
            this._dom.wrap.addClass("ui-select-disabled");
            return this;
        }, enabled: function () {
            this._dom.wrap.removeClass("ui-select-disabled");
            this._disabled = false;
            return this;
        }, _update: function () {
            var k = this._dom, i = this._runCall(this.config.defaultValue), h = k.ele.val(), g = k.ele.find("option:selected").text(), j = "";
            if (g) {
                i = g;
            }
            if (i === true) {
                i = k.ele.find("option").eq(0).text();
            } else {
                if (false === i) {
                    i = "请选择";
                }
            }
            i && k.span.html(i);
            if (k.ele.prop("disabled")) {
                return this.hide().disabled().empty();
            } else {
                this.enabled();
            }
            k.ele.find("option").each(function () {
                if (h == this.value) {
                    j += '<div class="ui-select-li-on ui-select-item" data-value="' + this.value + '">' + this.text + "</div>";
                } else {
                    j += '<div class="ui-select-item" data-value="' + this.value + '">' + this.text + "</div>";
                }
            });
            k.list.html(j);
        }, _bind: function () {
            var g = this, h = this.config, i = this._dom, k = null, j = null;
            i.ele.on("change", function () {
                setTimeout(d.proxy(g._update, g));
            });
            i.ele.on("select", function () {
                g.show();
            });
            if (h.event === "click") {
                i.title.click(function () {
                    if (g._visible) {
                        g.hide();
                    } else {
                        g.show();
                    }
                });
                i.wrap.mouseenter(function () {
                    if (!g._disabled) {
                        i.wrap.addClass("ui-select-hover");
                    }
                }).mouseleave(function () {
                    if (!g._disabled) {
                        i.wrap.removeClass("ui-select-hover");
                    }
                });
                f.on("click", ".ui-select-tit", function () {
                    if (this !== i.title[0]) {
                        g.hide();
                    }
                    return false;
                });
                f.on("click", function () {
                    g.hide();
                });
            } else {
                if (h.event === "hover") {
                    i.wrap.on("mouseenter", function () {
                        if (!g._disabled) {
                            if (k) {
                                clearTimeout(j);
                                j = null;
                            } else {
                                j = setTimeout(function () {
                                    g.show();
                                    i.wrap.addClass("ui-select-hover");
                                    k = true;
                                }, h.hoverDelay);
                            }
                        }
                    }).on("mouseleave", function () {
                        if (!g._disabled) {
                            if (k) {
                                j = setTimeout(function () {
                                    i.wrap.removeClass("ui-select-hover");
                                    g.hide();
                                    k = false;
                                }, h.hoverDelay);
                            } else {
                                clearTimeout(j);
                                j = null;
                            }
                        }
                    });
                }
            }
            i.list.on("click", ".ui-select-item", function () {
                i.span.html(this.innerHTML);
                i.ele.val(this.getAttribute("data-value")).change();
                i.list.find(".ui-select-item").removeClass("ui-select-li-on");
                this.className += " ui-select-li-on";
                g.hide();
                return false;
            });
        }, scrollTo: function () {
            var g = this._dom;
            if (g.list.find(".ui-select-li-on").length) {
                g.list.scrollTop(g.list.find(".ui-select-li-on").index() * 28);
            }
        }, show: function () {
            if (!this._disabled && !this._visible) {
                this._visible = 1;
                this._dom.wrap.addClass("ui-select-show");
                this.scrollTo();
            }
            return this;
        }, hide: function () {
            if (!this._disabled && this._visible) {
                this._visible = 0;
                this._dom.wrap.removeClass("ui-select-show");
            }
            return this;
        }, _runCall: function (g) {
            if ("function" === typeof g) {
                g = g.call(this._dom.ele[0]);
            }
            return g;
        }, _append: function () {
            var g = this, k = g._dom, h = g.config, i = g._runCall(h.width), j = '<div class="ui-select"><div class="ui-select-tit"><a href="javascript:;"><span>...</span><b></b><i></i></a></div><div class="ui-select-ul ui-webkit-scrollbar"></div></div>';
            k.wrap = d(j);
            k.list = k.wrap.find(".ui-select-ul");
            k.title = k.wrap.find(".ui-select-tit");
            k.span = k.title.find("span");
            if (!e) {
                k.list.css("minWidth", i - 2);
            }
            k.wrap.width(i);
            k.list.css(e ? "width" : "max-width", g._runCall(h.maxWidth));
            k.list.css(e ? "height" : "max-height", g._runCall(h.maxHeight));
            k.wrap.insertAfter(k.ele);
        }
    };
}(jQuery, msc));