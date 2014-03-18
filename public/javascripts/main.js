$(document).ready(function() {

	$('#findButton').on('click', function () {
		$.ajax( {
			dataType: 'json',
			url: '/findCOfoster',
			success: function (data) {
				console.log(data);
				$('.attach').append('<li class="mainContainer">' + data[0].firstname + '</li>'); 
				// Write for Loop here to find Fosters w/o dog
				// Find fosters outside of Colorado 
			}
			// data: {name: "Fido"} to send data to server; accessible as req.query.name or req.body.name based on what kind of request
		})
		// Now can append/ prepend info
	});
});