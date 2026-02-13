import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';
import type { Linter } from 'eslint';

const config: Linter.Config[] = [
    prettier,
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...astro.configs.recommended,
    {
        ignores: ['dist/', 'node_modules/', '.astro/'],
    },
    {
        rules: {
            'astro/no-set-html-directive': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'prefer-const': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
        },
    },
];

export default config;
