const dataArray = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023', '05/06/2023', '29-02-2024'];

console.log(dataArray);

function dateCheck(dataArray) {
	const array = dataArray.slice();
	let splitDates = array
		.map(el => el.split('/')
					 .flatMap(el => el.split('-')))
		.filter(el => {
			if (el.length !== 3) {
				return false;
			}
			const [day, month, year] = el.map(el => Number(el));
			if (isNaN(day) || isNaN(month)){
				return false;
			}
			
			if (month === 2) {
				let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); // Проверка на високосный год
				if (day > 29 || (day === 29 && !isLeapYear)) {
					return false;
				}
			}

			const isValidMonth = month >= 1 && month <= 12;
			const isValidDay = day >= 1 && day <= 31;
			return isValidMonth && isValidDay;
		})
		.map(el => el.join('-'));
	return splitDates;
}


console.log(dataArray);
const data1 = dateCheck(dataArray);
console.log(dataArray);
console.log(data1);