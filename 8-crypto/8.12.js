const encrypt = crypto('password'); // 'ssapdrow'
const decrypt = crypto(encrypt); // 'password'

function crypto(password) {
	let separate = password.split('');
	separate.reverse();
	const firstHalf = separate.splice(separate.length / 2);
	const secondHalf = separate;
	separate = firstHalf.concat(secondHalf); 
	password = separate.join('');
	return password;
}

function check(cryptoPassword, basicPassword){
   	if(basicPassword === '' || cryptoPassword === '') {
    	return false;
   	}
   	return basicPassword === crypto(cryptoPassword);
}

console.log(check('ssapdrow', 'password'));