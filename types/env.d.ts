// Define types for process.env
// This file is necessary to avoid TypeScript errors when using process.env
namespace NodeJS {
	interface ProcessEnv {
		MY_API_KEY: string
	}
}
