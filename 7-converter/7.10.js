// '₽' '$' '€' '¥'

const amount = 1;
const sourceCurrency = '₽';
const targetСurrency = '¥';


function converter(amount, sourceCurrency, targetСurrency){
	switch(sourceCurrency){
		case '₽':
			switch(targetСurrency){
				case '$': return amount / 33.33;
				case '€': return amount / 100;
				case '¥': return amount * 1.69;
				default: null;
			}
		case '$':
			switch(targetСurrency){
				case '₽': return amount * 33.33;
				case '€': return amount * 0.94;
				case '¥': return amount * 158;
				default: null;
			}
		case '€':
			switch(targetСurrency){
				case '₽': return amount * 100;
				case '$': return amount * 1.07;
				case '¥': return amount * 168;
				default: null;
			}
		case '¥':
			switch(targetСurrency){
				case '₽': return amount * 0.59;
				case '$': return amount * 0.0063;
				case '€': return amount * 0.0059;
				default: null;
			}
		default:
			return null;
	}
}

console.log(converter(amount, sourceCurrency, targetСurrency));