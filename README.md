# Best Node Boilerplate

![t](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![tsc](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

Just start your next Node.js project in a seconds.

Everything you need for a smooth and efficient workflow is already set up: ESLint, Prettier, TypeScript, debugging, and more.

## Features

- **ESLint**: Linting for maintaining code quality.
- **Prettier**: Code formatting for a consistent style.
- **TypeScript**: Typed JavaScript for better development experience.
- **Debugging**: Pre-configured debugging setup for VsCode.

## Getting Started

1. **Clone the repository**:
	```sh
	git clone https://github.com/dvangonen/best-node-boilerplate.git
	cd best-node-boilerplate
	```

2. **Install dependencies**:
	```sh
	pnpm install
	```

3. **Run the development server**:
	```sh
	npm run dev
	```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint.
- `npm run format`: Run Prettier.

## Deployment

To deploy the project, you can use the provided `deploy.sh` script.

It is a very simple and easy-to-use approach. But maybe I will add a Dockerfile approach soon.

### Steps to Deploy
1. Run the `deploy.sh` script.

This script will build the project using `esbuild`. So the output will be as tiny as possible.
Then it copy the contents of the `dist` folder, and push it to the `deploy` branch of your repository.

```
chmod +x deploy.sh
./deploy.sh
```


2. Then you can `fetch` the content of `deploy` branch on your own server.

This will download a pre-built and minified version of your code.

```
git clone [your-repo-url] -b deploy --single-branch
```

3. Just start it with `node` on your server

```
npm start
```

## License

This project is licensed under the MIT License.
