/* Overrides */
var overrides = function(){
	$(".call-now").empty().append("<a href='tel:1-603-256-6100'>Call 603-256-6100</a>");
};
window.onload = function(){
	overrides();
	console.log("Overrides applied: " + overrides);
};