import { add, subtract, multiply, divide } from '@/utils/basicMath';
import { power, sqrt, factorial } from '@/utils/advancedMath';
import { PI } from '@/utils/constants';

export class Calculator {
	add(a: number, b: number): number {
		return add(a, b);
	}

	subtract(a: number, b: number): number {
		return subtract(a, b);
	}

	multiply(a: number, b: number): number {
		return multiply(a, b);
	}

	divide(a: number, b: number): number {
		return divide(a, b);
	}

	power(base: number, exponent: number): number {
		return power(base, exponent);
	}

	sqrt(value: number): number {
		return sqrt(value);
	}

	factorial(value: number): number {
		return factorial(value);
	}

	getPi(): number {
		return PI;
	}
	log10(value: number): number {
		return Math.log10(value);
	}

	sin(value: number): number {
		return Math.sin(value);
	}

	cos(value: number): number {
		return Math.cos(value);
	}

	tan(value: number): number {
		return Math.tan(value);
	}

	ln(value: number): number {
		return Math.log(value);
	}
}
