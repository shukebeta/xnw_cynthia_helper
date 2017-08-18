// ==UserScript==
// @name         Cynthia start mission helper
// @namespace    http://cynthia.xnw.com
// @include       *
// @version      0.1
// @description  Cynthia 开始任务，或者开始修正bug时不必要再手工指定一遍自己!
// @author       shukebeta
// @grant        none
// ==/UserScript==



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////DO NOT EDIT THIS LINE BELOW!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


function autoSelectYourself() {
    jQuery('#actionButton').click();
    var $startAction = $('#select_next_action_top').find('li a:contains("开始修复")');
    if($startAction.length == 0) {
        $startAction = $('#select_next_action_top').find('li a:contains("开始执行")');
    }
    if($startAction.length) {
        $startAction.click();
        setTimeout(function() {
            $('#select_taskAssignUser').select2('open');
            var yourName = jQuery('#input_taskAssignUser').val();
            var value = jQuery("#select_taskAssignUser").find('option:contains("' + yourName + '")').val();
            $('#select_taskAssignUser').select2().val(value).change();
            $('#input_top_submit').click();
        }, 50);
    }
}

function addButton() {
    var $startAction = $('#select_next_action_top').find('li a:contains("开始修复")');
    if($startAction.length == 0) {
        $startAction = $('#select_next_action_top').find('li a:contains("开始执行")');
    }
    if($startAction.length) {
        var text = $startAction.text();
        jQuery('<button id="autoSelectYourself" type="button">' + text + '</button>').insertAfter('a.brand');
        jQuery('#autoSelectYourself').click(function(){
            autoSelectYourself();
        });
    }
}

(function() {
    'use strict';
    setTimeout(addButton, 1500);
    // Your code here...
})();
