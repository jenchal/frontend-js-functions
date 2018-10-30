// -----------------First task---------------//
let x = 6;
let y = 15;
let z = 4;
let res;

res = x+= y - x++ *2;
console.log('res = x =', res);

res = z = --x - y * 5;
console.log('res = z =',res);

res = y/= x + 5 % z;
console.log('res = y =',res);

res = z = x++ + y * 5;
console.log('res = z =',res);

res = x = y - x++ * z;
console.log('res = x =',res);

// -----------------First task---------------//

// -----------------Second task---------------//

let arrNumbers = [7, 8, 9, 5, 1];

function min() {
	if (isNaN(arrNumbers)) {
		return Math.min(... arrNumbers);
	} else {
	}
}

console.log(min());

// -----------------Second task---------------//

// -----------------Third task---------------//

function max() {
	if (isNaN(arrNumbers)) {
		return Math.max(... arrNumbers);
	} else {
	}
}

console.log(max());

// -----------------Third task---------------//

// -----------------Fourth task---------------//

 let result = arrNumbers.reduce(function(sum, current) {
	return sum + current;
}, 0);

console.log(result);

// -----------------Fourth task---------------//