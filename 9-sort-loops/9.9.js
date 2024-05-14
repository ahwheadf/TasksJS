const arr = [1, 40, -5, 10, 0,];

function arrSort (arr, desc = false) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i; j++){
			if(desc ? arr[i] > arr[j] : arr[i] < arr[j]){
			[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	return arr;
}

console.log(arr);
console.log(arrSort(arr));
console.log(arr);

