/* Overrides */
var overrides = function(){
	$(".call-now").empty().append("<a href='tel:1-603-256-6100'>Call <span class='desktop tablet'>603-256-6100</span></a>");
};
window.onload = function(){
	for (var i = 0; i < 5; i++) {
		overrides();
	};
	console.log("Overrides applied: " + overrides);
};