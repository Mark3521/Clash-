// ==UserScript==
// @name 修改浏览器UA平台为移动端
// @namespace http://tampermonkey.net/
// @version 0.2
// @description 作用是修改浏览器UA平台为移动端
// @author 织梦行云
// @match https:///
// @grant none
// @include *
// @run-at document-start
// @license MIT
// ==/UserScript==

(function() {
'use strict';
Object.defineProperty(navigator,'platform',{get:function(){return 'iOS';}});
Object.defineProperty(navigator,'userAgent',{get:function(){return 'Mozilla/5.0 (iPhone 13 Mini; CPU iPhone OS 18_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.40 Mobile/18G1225 Safari/604.1.38';}});
// Your code here...
})();