// 4561-2612-1234-5464 - 57 не проходит алгоритм
// 4561-2612-1234-5467 - 60 проходит

const card = '4561-2612-1234-5467';

function luhnAlgorithm(card){
	card = card.replaceAll('-', '');
	if(card.length === 16){
		card = card.split('');
		card = card.map(Number)
				   .map((el, i) => {
			if (i % 2 === 0){
				let num = el * 2;
				if(num >= 9){
					return num - 9; 
				}
				return num;
			} else {
				return el;
			}
		})
		.reduce((acc, el) => {
			return acc + el
		}, 0);
		let integerNumber = card % 10 === 0 ? true : false;
		return integerNumber;
	} 
	return false;
}

console.log(luhnAlgorithm(card));