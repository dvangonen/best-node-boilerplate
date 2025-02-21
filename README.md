# Best Node Boilerplate

Boost your Node.js development speed with this comprehensive boilerplate.


![Preview](https://github.com/user-attachments/assets/588cc33c-d041-4091-8459-d8c48e0f883e)

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
To deploy the project, you can use the provided `deploy.sh` script. This script will build the project, copy the contents of the `dist` folder, and push it to the `deploy` branch of your repository.

### Steps to Deploy
Run the `deploy.sh` script:

```
chmod +x deploy.sh
./deploy.sh
```

## License

This project is licensed under the MIT License.
