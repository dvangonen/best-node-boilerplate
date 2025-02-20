import { App } from '@/app/app';

function main(a: string = 'Hello World!') {
	console.log(a);
	console.log('Hello World 2!', process.env.MY_API_KEY);

	App();
}

main();
