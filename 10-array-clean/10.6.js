const array = [3, 6, 9, 2];

function sort (array, fn) {
	const filteredArray = [];
	for (let i = 0; i < array.length; i++) {
		if (!fn(array[i])) {
			filteredArray.push(array[i]);
		}
	}
	return filteredArray;
}

function deleteElement (arrEl) {
	return arrEl > 5;
}

const sortedArray = sort(array, deleteElement);
console.log(sortedArray);