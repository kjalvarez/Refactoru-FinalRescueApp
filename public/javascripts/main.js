$(document).ready(function() {

	$('#findButton').on('click', function () {
		$.ajax( {
			dataType: 'json',
			url: '/findCOfoster',
			success: function (data) {
				console.log(data)
			}
			// data: {name: "Fido"} to send data to server; accessible as req.query.name or req.body.name based on what kind of request
		})
		// Now can append/ prepend info
	});
});