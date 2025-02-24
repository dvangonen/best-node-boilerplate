import * as esbuild from 'esbuild';

/**
 * Build the project using esbuild bundler and minify the output
 */
await esbuild
	.build({
		entryPoints: ['src/index.ts'],
		bundle: true,
		outfile: 'dist/index.js',
		minify: true,
		treeShaking: true,
	})
	.catch(1);
