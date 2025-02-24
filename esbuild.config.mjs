import * as esbuild from 'esbuild';

/**
 * Build the project using esbuild bundler and minify the output
 */
await esbuild
	.build({
		entryPoints: ['src/index.ts'],
		bundle: true,
		platform: 'node',
		outfile: 'dist/index.js',
		minify: true,
		treeShaking: true,
		target: 'node22',
	})
	.catch(1);
