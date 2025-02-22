export function power(base: number, exponent: number): number {
	return Math.pow(base, exponent);
}

export function sqrt(value: number): number {
	if (value < 0) {
		throw new Error('Square root of negative number is not allowed.');
	}
	return Math.sqrt(value);
}

export function factorial(value: number): number {
	if (value < 0) {
		throw new Error('Factorial of negative number is not allowed.');
	}
	if (value === 0) {
		return 1;
	}
	let result = 1;
	for (let i = 1; i <= value; i++) {
		result *= i;
	}
	return result;
}
