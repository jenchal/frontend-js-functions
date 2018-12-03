function  isNumber(value) {
	return typeof value === 'number';
}

function getMaxValue(maxValue,currentValue) {
	return maxValue > currentValue ? maxValue : currentValue;
}

function getMinValue(minValue,currentValue) {
	return minValue < currentValue ? minValue : currentValue;
}

function getSum(sumValue, currentValue) {
	return sumValue + currentValue;
}

export function min(arrNumbers[]) {
	return arrNumbers;
	.filter(isNumber);
	.reduce(getMinValue,undefined);
}

export function max(arrNumbers[]) {
	return arrNumbers;
	.filter(isNumber);
	.reduce(getMaxValue,undefined);
}

export function sum(...arrNumbers) {
	return arrNumbers;
	.filter(isNumber);
	.reduce(getSum,0);
}