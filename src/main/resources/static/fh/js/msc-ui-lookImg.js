(function ($, msc, undefined) {
    var DIALOG = msc.ui.dialog, isIe6 = msc.tools.browser;
    var lookImg = msc.ui.lookImg = function (config) {
        if (DIALOG.get("lookImg")) {
            return false;
        }
        config = config || {};
        if (!config.data || !config.data.length) {
            return false;
        }
        config.adId = config.adId || 907285;
        lookImg.init(config);
        return true;
    }
    lookImg.init = function (config) {
        $('<link rel="stylesheet" type="text/css" href="//static.meishichina.com/v6/css/lib/ui-lookImg.css">').appendTo("head").on("load", function () {
            lookImg.init = function (config) {
                new Class(config);
            }
            new Class(config);
        });
        lookImg.init = $.noop;
    }
    function Class(config) {
        this.config = config;
        return this._init();
    }

    Class.prototype._init = function () {
        var self = this, config = self.config, dom = self._dom = {}, dialog, str;
        self.dataLength = config.data.length;
        self.more = 0;
        self.textStatus = null;
        dialog = DIALOG({
            title: false,
            backgroundColor: '#333',
            skin: 'ui-lookImg-dialog',
            lock: !0,
            fixed: !0,
            id: 'lookImg',
            content: '<div class="ui-lookImg">' + '<div class="pic">' + '<div class="pic_wrap">' + '<div class="pic_inner">' + '<div class="pic_text">' + '<div class="pic_text_mask"></div>' + '<p class="J_text">...</p>' + '</div>' + '<a href="javascript:;" class="ui-lookImg-btn prev"><i>上一个</i></a>' + '<a href="javascript:;" class="ui-lookImg-btn next"><i>下一个</i></a>' + '<div class="pic_center">' + '<span class="pic_hack"></span>' + '<img src="//static.meishichina.com/v6/img/blank.gif" class="J_img">' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="detail J_detail">' + '<h3 class="J_title">...</h3>' + '<div class="subinfo">' + '<div class="ui-webkit-scrollbar">' + '<div class="ui-lookImg-sublist">' + '<ul class="clear J_list"></ul>' + '</div>' + '<a href="javascript:;" class="more">查看更多图片</a>' + '</div>' + '</div>' + '<div class="ad200"></div>' + '</div>' + '</div>',
            backgroundOpacity: 0.8,
            visible: !1,
            beforeunload: function () {
                var key;
                for (key in self) {
                    delete self[key];
                }
                $("html").css("overflow-y", "auto");
            }
        });
        dom.$wrap = dialog._$('content').find(".ui-lookImg");
        dom.$detail = dom.$wrap.find(".J_detail");
        dom.$pic_inner = dom.$wrap.find(".pic_inner");
        dom.$text_wrap = dom.$pic_inner.find(".pic_text");
        dom.$text = dom.$text_wrap.find(".J_text");
        dom.$prev = dom.$wrap.find("a.prev");
        dom.$next = dom.$wrap.find("a.next");
        dom.$img = dom.$wrap.find("img.J_img");
        dom.$scrollbar = dom.$detail.find(".ui-webkit-scrollbar");
        dom.$photo_more = dom.$detail.find(".more");
        dom.$photo_list_wrap = dom.$detail.find(".ui-lookImg-sublist");
        dom.$photo_list = dom.$photo_list_wrap.find("ul");
        dom.$detail.find(".J_title").html(config.title);
        str = '';
        m_str = '';
        $.each(config.data, function (index, value) {
            if (config.type == "mainpic") {
                m_src = value.src.replace(/p800/, 'c80');
                str += '<li><a href="javascript:;"><img src="' + m_src + '" width="64" height="64" alt=""></a></li>';
            }
            else {
                str += '<li><a href="javascript:;"><img src="' + value.src + '" width="100%" height="100%" alt=""></a></li>';
            }
        });
        dom.$photo_list[0].innerHTML = str;
        dom.$detail.find(".ad200")[0].innerHTML = '<iframe height="200" width="250" scrolling="no" frameborder="0" src="//static.meishichina.com/v3/t6.html"></iframe>';
        if (self.dataLength > 9) {
            dom.$photo_list_wrap.addClass("ui-lookImg-hidden");
            dom.$photo_more.css('display', 'block');
            self.more = 1;
        }
        self._bind();
        dialog.visible();
        self.trigger({index: config.index, isScroll: true});
        $("html").css("overflow-y", "hidden");
        dialog = null;
    }
    Class.prototype._bind = function () {
        var self = this, dom = self._dom;
        dom.$photo_list.on("click", "li", function () {
            self.trigger({index: $(this).index(), isScroll: self.more !== 2});
        });
        if (self.more) {
            dom.$photo_more.click(function () {
                if (self.more === 1) {
                    dom.$photo_list_wrap.removeClass("ui-lookImg-hidden");
                    self.more = 2;
                    this.innerHTML = '收起更多';
                } else {
                    this.innerHTML = '查看更多';
                    self.more = 1;
                    dom.$photo_list_wrap.addClass("ui-lookImg-hidden");
                    setTimeout(function () {
                        self._set_list_top();
                    });
                }
            });
        }
        dom.$pic_inner.mouseenter(function (event, isRun) {
            if (isRun || self.config.data[self.index].description) {
                self.textStatus = 1;
                dom.$text_wrap.stop().animate({bottom: 0}, 400, 'easeOutExpo');
            }
        }).mouseleave(function (event, isRun) {
            if (isRun || self.textStatus) {
                self.textStatus = false;
                dom.$text_wrap.stop().animate({bottom: -700}, 400, 'easeOutExpo');
            }
        });
        dom.$prev.click(function () {
            if (self.index < 1) {
                DIALOG.warning("没有上一个");
            } else {
                self.trigger({index: self.index - 1, isScroll: true, isBtn: true});
            }
        });
        dom.$next.click(function () {
            if (self.index === self.dataLength - 1) {
                DIALOG.warning("没有下一个");
            } else {
                self.trigger({index: self.index + 1, isScroll: true, isBtn: true});
            }
        });
        self._bind = $.noop;
    }
    Class.prototype.trigger = function (config) {
        var self = this, dom = self._dom, index;
        if ("number" === typeof config) {
            config = {index: config}
        }
        config = config || {};
        index = config.index;
        if (index !== undefined) {
            index = index | 0;
            if (index < 0) {
                index += self.dataLength;
            }
            if (index < 0 || index > self.dataLength) {
                index = 0;
            }
            self.index = index;
        } else {
            index = self.index;
        }
        dom.$photo_list.find("li").removeClass("on").eq(index).addClass("on");
        if (config.isScroll) {
            self._set_list_top();
        }
        dom.$prev[index === 0 ? 'hide' : 'show']();
        dom.$next[index + 1 === self.dataLength ? 'hide' : 'show']();
        self._show(config.isBtn);
        return self;
    }
    Class.prototype._set_list_top = function () {
        var self = this, dom = self._dom, index = self.index, value, line = get_line(self.index);
        if (self.more === 1) {
            if (line === 1) {
                value = 0;
            } else if (get_line(self.dataLength - 1) === line) {
                value = -(line * 77 - 227);
            } else {
                value = -(line * 77 - 150);
            }
            dom.$photo_list.stop().animate({top: value}, 500, 'easeOutExpo');
        } else if (self.more === 2) {
            dom.$scrollbar.stop().animate({scrollTop: (line * 77) - 190}, 500, 'easeOutExpo');
        } else {
        }
    }
    Class.prototype._show = function (isBtn) {
        var self = this, dom = self._dom, text = self.config.data[self.index].description, url = self.config.data[self.index].src, $img = dom.$img;
        if (text) {
            dom.$text.html(text);
        }
        isBtn && dom.$pic_inner.trigger(text ? "mouseenter" : "mouseleave", [true]);
        if (isIe6) {
            $img.attr("src", '//static.meishichina.com/v6/img/blank.gif');
            get_img_wh(url, function (width, height) {
                var css = {width: 'auto', height: 'auto'}
                if (width > 700 && height > 520) {
                    if (width - 700 > height - 520) {
                        css['width'] = 700;
                    } else {
                        css['height'] = 520;
                    }
                } else if (width > 700) {
                    css['width'] = 700;
                } else if (height > 520) {
                    css['height'] = 520;
                } else {
                    css = {width: width, height: height}
                }
                $img.attr("src", url).css(css);
                css = null;
            });
        } else {
            $img.attr("src", url);
        }
    }
    function get_line(num) {
        return Math.floor(num / 3 + 1);
    }

    function get_img_wh(url, fn) {
        var img = new Image(), timer = null;

        function check() {
            if (img.width > 0 || img.height > 0) {
                clearInterval(timer);
                fn && fn(img.width, img.height);
                img = timer = null;
            }
        }

        img.src = url;
        timer = setInterval(check, 50);
    }
}(jQuery, msc));