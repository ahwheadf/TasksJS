const object = {
	search: 'Вася',
	take: 10,
};

function createQueryString(object) {
	const valueString = [];
	for(key in object){
		valueString.push(String(`${key}=${object[key]}`));
	}
	return valueString.join('&');
}

console.log(createQueryString(object));