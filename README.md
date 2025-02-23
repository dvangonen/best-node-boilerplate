# Best Node Boilerplate

Boost your Node.js development speed with this comprehensive boilerplate.

![Slide 4_3 - 2](https://github.com/user-attachments/assets/30998cee-906f-4559-8bb3-faedd9ccf56e)

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

To deploy the project, you can use the provided `deploy.sh` script. Maybe I will change it to Dockerfile later.

### Steps to Deploy
1. Run the `deploy.sh` script:

```
chmod +x deploy.sh
./deploy.sh
```

This script will build the project, copy the contents of the `dist` folder, and push it to the `deploy` branch of your repository.

2. Then you can `fetch` the content of `deploy` branch on your own server.

```
git clone [url] -b [branch-name] --single-branch
```

3. Just start it with `node` on your server

```
npm start
```

## License

This project is licensed under the MIT License.
