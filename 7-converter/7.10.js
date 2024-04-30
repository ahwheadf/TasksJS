// '₽' '$' '€' '¥'

const amount = 1;
const sourceCurrency = '₽';
const targetСurrency = '¥';


function converter(amount, sourceCurrency, targetСurrency){
	switch(true){
		case sourceCurrency === '₽':
			return targetСurrency === '$' ? amount / 33.33 : 
			targetСurrency === '€' ? amount / 100 : 
			targetСurrency === '¥' ? amount * 1.69 : 0;
		case sourceCurrency === '$':
			return targetСurrency === '₽' ? amount * 33.33 :
			targetСurrency === '€' ? amount * 0.94 :
			targetСurrency === '¥' ? amount * 158 : 0;
		case sourceCurrency === '€':
			return targetСurrency === '₽' ? amount * 100 :
			targetСurrency === '$' ? amount * 1.07 : 
			targetСurrency === '¥' ? amount * 168 : 0;
		case sourceCurrency === '¥':
			return targetСurrency === '₽' ? amount * 0.59 :
			targetСurrency === '$' ? amount * 0.0063 :
			targetСurrency === '€' ? amount * 0.0059 : 0;
		default:
			return 0;
	}
}

console.log(converter(amount, sourceCurrency, targetСurrency));