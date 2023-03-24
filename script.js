document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();

	var username = document.querySelector('#username').value;
	var password = document.querySelector('#password').value;

	if (username === 'Cassandra' && password === 'myloves614') {
		window.location.href = 'new-page.html';
	} else {
		document.querySelector('#error').textContent = 'Incorrect username or password.';
	}
});
