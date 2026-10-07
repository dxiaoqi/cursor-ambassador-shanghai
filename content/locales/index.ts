import en from './en.json';
import zh from './zh.json';

export const localeBundles = {
	en,
	zh,
} as const;

export type LocaleBundleKey = keyof typeof localeBundles;
