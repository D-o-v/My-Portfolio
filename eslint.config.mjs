import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Disable specific rules that might cause build complaints
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@next/next/no-img-element': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      
      // General rule adjustments
      'react/self-closing-comp': ['warn', {
        'component': true,
        'html': true
      }],
      'no-console': 'off', // Allow console logs
      'import/no-anonymous-default-export': 'off'
    },
    
    // Ignore specific files or patterns
    ignores: [
      'node_modules/',
      '.next/',
      'public/',
      'out/'
    ]
  }
];

export default eslintConfig;