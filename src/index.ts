import { App } from '@/app/app';
import { Calculator } from '@/app/calculator';

/**
 * This is just an example of an app.
 * Replace it with your own code.
 *
 * The main function initializes a Calculator instance and performs various arithmetic operations.
 * It demonstrates the usage of the Calculator class by logging the results of different calculations.
 */
function main() {
	const calculator = new Calculator();

	const a = 10;
	const b = 5;

	console.log(`This is an example of an app. Replace it with your own code!\n`);
	console.log(`Adding ${a} + ${b} = ${calculator.add(a, b)}`);
	console.log(`Subtracting ${a} - ${b} = ${calculator.subtract(a, b)}`);
	console.log(`Multiplying ${a} * ${b} = ${calculator.multiply(a, b)}`);
	console.log(`Dividing ${a} / ${b} = ${calculator.divide(a, b)}`);
	console.log(`Power ${a} ^ ${b} = ${calculator.power(a, b)}`);
	console.log(`Square root of ${a} = ${calculator.sqrt(a)}`);
	console.log(`Factorial of ${b} = ${calculator.factorial(b)}`);
	console.log(`Value of PI = ${calculator.getPi()}`);
	console.log(`Logarithm base 10 of ${a} = ${calculator.log10(a)}`);
	console.log(`Natural logarithm of ${a} = ${calculator.ln(a)}`);
	console.log(`Sine of ${a} = ${calculator.sin(a)}`);
	console.log(`Cosine of ${a} = ${calculator.cos(a)}`);
	console.log(`Tangent of ${a} = ${calculator.tan(a)}`);
}

main();
