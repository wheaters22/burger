//Should not need this page... created extra as I was having trouble and thought I may need to add this code snippet to a separate page

$(document).on("submit", ".create-burger", function(event){
	event.preventDefault();
	var $form = $(this);

	$.ajax({
		url: $form.attr("action"),
		method: "POST",
		data: $form.serialize()
	}).done(reloadBurgers);

});
//update the class identifiers in the index page to match
$(document).on("submit", ".update-burger", function (event) {
	event.preventDefault();
	var $form = $(this);
	$.ajax({
		url: $form.attr("action"), 
		method: "PUT",
		data: $form.serialize()
	}).done(reloadBurgers);
});


function reloadBurgers() {
	// find new id element tag & load file
	$("#all-cats").load("/cats");
}