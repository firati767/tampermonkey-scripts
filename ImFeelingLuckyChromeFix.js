// ==UserScript==
// @name         ImFeelingLuckyChromeFix
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bypass Chrome's "Redirect Notice" page so "I'm feeling lucky" search from address bar works again.
// @author       Eagan
// @match        https://www.google.com/url*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    if (document.getElementsByTagName('b')[0].innerText === 'Redirect Notice') {
        window.location = document.getElementsByTagName('a')[0].innerText;
    }
})();
