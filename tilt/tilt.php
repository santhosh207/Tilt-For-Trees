<!DOCTYPE html>
<html>
<head>
	<title>Tilt Sensor</title>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script>
		$(function() {
			// Update the tilt value on page load
			updateTilt();

			// Update the tilt value every 1 second
			setInterval(updateTilt, 1000);

			function updateTilt() {
				$.getJSON('/tilt', function(data) {
					$('#tilt-value').text(data.tilt);
				});
			}
		});
	</script>
</head>
<body>
	<h1>Tilt Sensor</h1>
	<p>Tilt value: <span id="tilt-value"></span></p>
</body>
</html>
