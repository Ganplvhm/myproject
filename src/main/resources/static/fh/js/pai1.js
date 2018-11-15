var supe_uid = '';
//异步获取数据
var paiid = $("#pai_id").val();
var islik=0;
var isfav=0;
$.get(msc.tools.getAjaxUrl({
  ac: "user",
  op: "getpailoadinfo"
}),{'id':paiid},function(d){
  if(d.error==0) {
    // supe_uid=d.supe_uid;
    $(".J_lik span").text(d.data.likenum).after('人');
    $(".J_fav span").text(d.data.collnum).after('人');



//  $("#recipe_viewnum span").text(d.viewnum);
    if (d.data.islike == 1) {
      $(".J_lik").addClass('on').attr('title', '已喜欢');
      islik = 1;
    }
    if (d.data.isfav > 0) {
      $(".J_fav").addClass('on').attr('title', '已收藏');
      isfav = 1;
    }
    // else
    //  $("#recipe_colnum span").text(d.ratnum);

//msc.tools.floatBox(1,islik,isfav); //左侧悬浮

  }


},"json");




$(".J_lik").click(function() {
	if ($(this).hasClass("on")) {
		msc.ui.dialog.error("您已经喜欢过该话题!");
		return false;
	} else if ($(this).hasClass("nologin")) {
		msc.user.login();
		return false;
	} else {
		$.post('/ajax/ajax.php?ac=pai&op=add_pai', {
			pid: $("#pai_id").attr('data-id')
		}, function(e) {
			if (e.error === 0) {
				msc.ui.dialog.success("添加喜欢成功");
				$(".J_lik").addClass('on').attr('title', '已喜欢');;
				$(".J_lik span").html(parseInt($(".J_lik span").html()) + 1);
			} else if (e.error === -1) {
				msc.ui.dialog.error(e.data);
			} else {
				msc.ui.dialog.error('出现异常，请重试');
			}
		}, "json");
	}
});
$(".J_fav").click(function() {
	if ($(this).hasClass("on")) {
		msc.ui.dialog.error("您已经收藏过该话题!");
		return false;
	} else if ($(this).hasClass("nologin")) {
		msc.user.login();
		return false;
	} else {
		$.post('/ajax/ajax.php?ac=pai&op=add_pai_fav', {
			pid: $("#pai_id").attr('data-id')
		}, function(e) {
			if (e.error === 0) {
				msc.ui.dialog.success("添加收藏成功");
				$(".J_fav").addClass('on').attr('title', '已收藏');;
				$(".J_fav span").html(parseInt($(".J_fav span").html()) + 1);
			} else if (e.error === -1) {
				msc.ui.dialog.error(e.data);
			} else {
				msc.ui.dialog.error('出现异常，请重试');
			}
		}, "json");
	}
});
window._bd_share_config = {
	"common": {
		"bdSnsKey": {
			"tsina": "3258795188",
			"tqq": "208157"
		},
		"bdUrl": "//home.meishichina.com/pai-" + $(".add_submit").attr('data-id') + ".html",
		"bdText": "我推荐在 @美食天下 发现的一个话题：" + $(".pai_box p.c span.subject").html() + "【美食天下最大的美食互动社区】",
		"bdMini": "2",
		"bdMiniList": false,
		"bdPic": $(".pai_box .pic img:eq(0)").attr('data-src'),
		"bdStyle": "0",
		"bdSize": "16",
		"bdSearchPic": 1,
		"bdWbuid": "1642625033"
	},
	"share": {}
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '//static.meishichina.com/v6/js/lib/api/js/share.js?v=89860593.js?cdnversion=' + ~ (-new Date() / 36e5)];
$(".shar a").click(function() {
	var id = $(this).attr('data');
	document.getElementById(id).click();
});
// $("#comment .reply").click(function() {
// 	if ($(this).hasClass("on")) {
// 		$(this).closest(".detail").find(".comment-reply").hide();
// 		$(this).removeClass("on");
// 	} else {
// 		if ($(this).closest(".detail").find(".comment-reply").length > 0) {
// 			$(this).closest(".detail").find(".comment-reply").show();
// 			$(this).closest(".detail").find("textarea").focus();
// 		} else {
// 			$(this).closest(".detail").append('<div data-dom="reply" class="comment-post comment-reply"><div class="comment-post-loading"></div><i class="arrow"></i><div class="comment-post-text"><div class="comment-post-text-inner"><textarea title="Ctrl+Enter 也可提交哦" class="text ui-webkit-scrollbar"></textarea></div></div><div class="comment-post-tools clear"><div class="left"><a title="插入表情" data-type="smilies" class="J_event comment-smilies-a" href="javascript:void(0);"></a><span class="tips">Ctrl+Enter 也可提交哦</span></div><div class="right"><a class="tips reply_cancel" href="javascript:void(0);">取消</a><a class="comment-btn reply_submit" href="javascript:void(0);">回复</a></div></div></div>');
// 			$(this).closest(".detail").find("textarea").focus();
// 		}
// 		$(this).addClass("on");
// 	}
// });
// $("#comment").on("click", "a.comment-smilies-a", function() {
// 	var that = this;
// 	msc.ui.smilies(that, function(title) {
// 		tools.add($(that).closest(".comment-post").find(".text")[0], title);
// 	});
// });
// $("#comment").on("click", "a.reply_cancel", function() {
// 	$(this).closest(".comment-reply").hide();
// 	$(this).closest("li").find("a.reply").removeClass("on");
// });
var tools = {
	getCursorPosition: function(ele) {
		if (document.selection) {
			ele.focus();
			var ds = document.selection;
			var range = ds.createRange();
			var stored_range = range.duplicate();
			stored_range.moveToElementText(ele);
			stored_range.setEndPoint("EndToEnd", range);
			ele.selectionStart = stored_range.text.length - range.text.length;
			ele.selectionEnd = ele.selectionStart + range.text.length;
			return ele.selectionStart;
		} else {
			return ele.selectionStart;
		}
	},
	setCursorPosition: function(ele, p) {
		this.sel(ele, p, p);
	},
	add: function(ele, txt) {
		var val = ele.value;
		if (document.selection) {
			ele.focus()
			document.selection.createRange().text = txt;
		} else {
			var cp = ele.selectionStart;
			var ubbLength = ele.value.length;
			var s = ele.scrollTop;
			ele.value = ele.value.slice(0, ele.selectionStart) + txt + ele.value.slice(ele.selectionStart, ubbLength);
			this.setCursorPosition(ele, cp + txt.length);
			msc.tools.browser.mozilla && setTimeout(function() {
				if (ele.scrollTop != s) ele.scrollTop = s;
			}, 0);
		};
	},
	del: function(ele, n) {
		var p = this.getCursorPosition(ele);
		var s = ele.scrollTop;
		var val = ele.value;
		ele.value = n > 0 ? val.slice(0, p - n) + val.slice(p) : val.slice(0, p) + val.slice(p - n);
		this.setCursorPosition(ele, p - (n < 0 ? 0 : n));
		msc.browser.mozilla && setTimeout(function() {
			if (ele.scrollTop != s) ele.scrollTop = s;
		}, 10);
	},
	sel: function(ele, start, end) {
		if (document.selection) {
			var range = ele.createTextRange();
			range.moveEnd('character', -ele.value.length);
			range.moveEnd('character', end);
			range.moveStart('character', start);
			range.select();
		} else {
			ele.setSelectionRange(start, end);
			ele.focus();
		}
	},
	selString: function(ele, str) {
		var index = ele.value.indexOf(str);
		index != -1 ? this.sel(ele, index, index + str.length) : false;
	}
};
// $(".add_submit").click(function() {
// 	var that = $(this);
// 	var message = $(".comment-add textarea").val();
// 	if (message == '') {
// 		msc.ui.dialog.error("请填写内容!");
// 		return false;
// 	} else if (message.length < 2) {
// 		msc.ui.dialog.error("再填写点内容吧!");
// 		return false;
// 	} else {
// 		that.html('发表中');
// 		$(".comment-add").addClass('loading');
// 		$.post('/meishi2.php?ac=comment&op=addandcreply', {
// 			id: that.attr('data-id'),
// 			idtype: 'paiid',
// 			message: message
// 		}, function(e) {
// 			if (e.error === 0 && e.data) {
// 				$("#comment ul").append('<li><div class="pic"><a href="//home.meishichina.com/space-' + e.data.authorid + '.html" target="_blank" title="点击进入 ' + e.data.author + ' 的主页"><img height="48" width="48" class="imgLoad" src="//static.meishichina.com/v6/img/blank.gif"  data-src="' + e.data.avatarpic + '"></a></div><div class="detail"><div class="tools"><div class="left"><a title="点击进入  ' + e.data.author + ' 的主页" href="//home.meishichina.com/space-' + e.data.authorid + '.html" target="_blank"> ' + e.data.author + '</a><span class="subtime">刚刚</span></div><div class="right"></div></div><div class="content">' + e.data.message + '</div></div></li>');
// 				$(".comment-add").removeClass('loading');
// 				$(".comment-add textarea").val('');
// 				msc.ui.dialog.success("评论成功");
// 				$("#comment ul li:last-child .imgLoad").imgLoad();
// 			} else if (e.state === "error") {
// 				if (e.info != '') msc.ui.dialog.error(e.info);
// 				else msc.ui.dialog.error("亲，请修改您的内容");
// 			} else {
// 				msc.ui.dialog.error(e.msg || "亲，休息会再试吧");
// 			}
// 			$(".comment-add").removeClass('loading');
// 		}, "json");
// 	}
// });
// $("#comment").on("click", "a.reply_submit", function() {
// 	var that = $(this);
// 	var message = that.closest('li').find("textarea").val();
// 	if (message == '') {
// 		msc.ui.dialog.error("请填写内容!");
// 		return false;
// 	} else if (message.length < 2) {
// 		msc.ui.dialog.error("再填写点内容吧!");
// 		return false;
// 	} else {
// 		that.html('发表中');
// 		that.closest('li').find('.comment-reply').addClass('loading');
// 		$.post('/meishi2.php?ac=comment&op=addandcreply', {
// 			cid: that.closest('li').attr('data-id'),
// 			id: $(".add_submit").attr('data-id'),
// 			idtype: 'paiid',
// 			message: message
// 		}, function(e) {
// 			if (e.error === 0 && e.data) {
// 				that.closest('li').find('.comment-reply').removeClass('loading');
// 				that.closest('li').find("textarea").val('');
// 				msc.ui.dialog.success("回复成功");
// 				setTimeout(function() {
// 					location.reload(true);
// 				}, 1000);
// 			} else if (e.state === "error") {
// 				if (e.info != '') msc.ui.dialog.error(e.info);
// 				else msc.ui.dialog.error("亲，请修改您的内容");
// 			} else {
// 				msc.ui.dialog.error(e.msg || "亲，休息会再试吧");
// 			}
// 			that.closest('li').find('.comment-reply').removeClass('loading');
// 		}, "json");
// 	}
// });
// $("#comment").on("keydown", ".comment-post textarea", function(e) {
// 	if (e.ctrlKey && e.keyCode === 13) {
// 		$(this).closest(".comment-post").find("a.comment-btn").click();
// 		$(this).blur();
// 	}
// });
$(window).scroll(function() {
	var omng = $(".keyshow").eq(0).offset();
	var jtl = $("#smnbk").offset();
	if (omng.top < $(document).scrollTop() + 40) {
		$(".keyshow").css({
			position: "fixed",
			top: 40,
			margin: 0,
			left: omng.left
		});
	} else if (omng.top < jtl.top + 10) {
		$(".keyshow").css({
			position: "static",
			margin: "20px 0 0 0"
		});
	}
});
msc.tools.comment({
  element: $("#comment"),
  data: {
    id:$("#pai_id").val(),
    idtype:'paiid'
  }

});