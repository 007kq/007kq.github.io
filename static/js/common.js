(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//判断访问终端
var browser = {
	versions: function() {
		var u = navigator.userAgent;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			qq: u.match(/\sQQ/i) == " qq" //是否QQ
		};
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
//判断是否移动端
if(browser.versions.mobile || browser.versions.android || browser.versions.ios) {} else {
  window.location.href = 'http://007kq.com'
  // window.location.href = 'http://test.007kq.com'
}

if(getPara('title')) {
	document.getElementsByTagName('title')[0].innerHTML = '低调看直播-' + getPara('title')
}

function getPara(name) {
	if(name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.href)) {
		return decodeURIComponent(name[1]);
	}
}



// 腾讯统计
/*
 var _mtac = {};
 (function() {
 var mta = document.createElement("script");
 mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4";
 mta.setAttribute("name", "MTAH5");
 mta.setAttribute("sid", "500593083");
 mta.setAttribute("cid", "500593091");
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(mta, s);
 })();
 */

window.onload = function () {
  var bodyBox = document.getElementsByTagName('body')[0]
  // 腾讯统计
  var scrbox = document.createElement('script');
  scrbox.type = 'text/javascript'
  scrbox.innerHTML = 'var _mtac = {};(function() {var mta = document.createElement("script");mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";mta.setAttribute("name", "MTAH5");mta.setAttribute("sid", "500593083");mta.setAttribute("cid", "500593091");var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(mta, s);})();'
  bodyBox.appendChild(scrbox)
}
