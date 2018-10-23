$.fn.qjsearch = function() {
$(this).keyup(function() {
var _this = $(this);
var data_qjs = _this.attr('data-qjs');			// target for search output
var data_qjs_res = _this.attr('data-qjs-res');	// target for result output
var data_qjs_0 = _this.attr('data-qjs-0'); 		// element visible for empty results
var data_qjs_1 = _this.attr('data-qjs-1'); 		// element visible fot not empty results

var tval = _this.val();
$(data_qjs).hide();
$.expr[":"].Contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };	
});
var qjsresult = $(data_qjs+':Contains("'+tval+'")').show();
if (qjsresult) {}else{console.log('%c Qj Error! Search field not found. ', 'background: #000; color: #f00');}
if (data_qjs_res != '') {$(data_qjs_res).text(qjsresult.length);}
if (data_qjs_0 && data_qjs_0 != '') {if (qjsresult.length < 1){$(data_qjs_0).show();}else{$(data_qjs_0).hide();}}
if (data_qjs_1 && data_qjs_1 != '') {if (qjsresult.length > 0){$(data_qjs_1).show();}else{$(data_qjs_1).hide();}}
});
}