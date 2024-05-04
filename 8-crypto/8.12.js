function crypto(password) {
	const separate = password.split('');
	separate.reverse();
	[separate[2], separate[5]] = [separate[5], separate[2]];
	[separate[0], separate[3]] = [separate[3], separate[0]];
	[separate[7], separate[1]] = [separate[1], separate[7]];
	password = separate.join('');
	console.log(password);
	return password;
	
}

function check(cryptoPassword, basicPassword){
	const separate = cryptoPassword.split('');
	[separate[1], separate[7]] = [separate[7], separate[1]];
	[separate[3], separate[0]] = [separate[0], separate[3]];
	[separate[5], separate[2]] = [separate[2], separate[5]];
	separate.reverse();
	cryptoPassword = separate.join('');
	if(cryptoPassword === basicPassword){
		return true;
	}
	return false;
}

crypto('password');

console.log(check('wpsdsoar', 'password'));