const arr = [1, 40, -5, 10, 0,];

function arrIncreasing (arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i; j++){
			if(arr[i] > arr[j]){
			[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	return arr;
}

function arrDecreasing (arr) {
	for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < i; j++){
				if(arr[i] < arr[j]){
				[arr[i], arr[j]] = [arr[j], arr[i]];
				}
			}
	}
	return arr;
}

console.log(arrIncrease(arr));
console.log(arrDecreasing(arr));