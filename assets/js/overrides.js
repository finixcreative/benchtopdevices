/* Overrides */
var overrides = function(){
	$(".call-now").empty().append("<a href='tel:1-603-256-6100'>Call 603-256-6100</a>");
};
document.getElementsByClassName("call-now").onload = overrides();