const request = prompt('Выберите язык (EN, RU, DE, JP)');

switch(request){
	case 'en':
	case 'EN':
		console.log('Hello!');
		break;
	case 'ru':
	case 'RU':
		console.log('Привет!');
		break;
	case 'de':
	case 'DE':
		console.log('Guten Tag!');
		break;
	case 'jp':
	case 'JP':
		console.log('こんにちは！');
		break;
	default:
		console.log('Введено недопустимое значение!');
		break;
}