// ==UserScript==
// @name         TD Direct remove Interactive Investor notice
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://secure.tddirectinvesting.co.uk/*
// @match        https://www.tddirectinvesting.co.uk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //console.log('In TD Direct remove Interactive Investor notice');

    // Your code here...
    //setTimeout(
        // function () {
            //var thing = document.getElementById('bodyFooterContainer');
            //if (thing) {
            //    thing.parentNode.removeChild(thing);
            //}

            var element_names = [ 'iiDisclaimerMsgContainer', 'ii-notice', 'bodyFooterContainer', 'footerDisclaimer' ];
            var element_names_count = element_names.length;
            for (var i = 0; i < element_names_count; i++) {
                var element = document.getElementById(element_names[i]);

                //console.log(element_names[i]);

                if (element) {
                    element.parentNode.removeChild(element);
                }
            }
       //  }
        // ,
        //1000
    //)
    // ;
})();
