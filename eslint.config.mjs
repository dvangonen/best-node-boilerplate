// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import jestPlugin from 'eslint-plugin-jest';

export default tseslint.config(
	{
		// config with just ignores is the replacement for `.eslintignore`
		ignores: [
			'build/**',
			'dist/**',
			'eslint.config.mjs',
			'esbuild.config.mjs',
			'node_modules/**',
		],
	},
	{
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			jest: jestPlugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
			},
		},
		rules: {
			'@typescript-eslint/no-unsafe-argument': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'error',
			'@typescript-eslint/no-unsafe-call': 'error',
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/no-unsafe-return': 'error',
		},
	},
	{
		// disable type-aware linting on JS files
		files: ['**/*.js'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	{
		// enable jest rules on test files
		files: ['test/**'],
		extends: [jestPlugin.configs['flat/recommended']],
	},
	eslint.configs.recommended,
	prettierConfig,
);
