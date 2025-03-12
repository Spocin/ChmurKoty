import baseConfig from './eslint.base.config.mjs';
import nx from '@nx/eslint-plugin';

export default [
  ...baseConfig,
  {
    ignores: ['**/dist'],
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      "@nx/enforce-module-boundaries": [
        "error",
        {
          "allow": [],
          "depConstraints": [
            {
              "sourceTag": "type:data-access",
              "onlyDependOnLibsWithTags": [
                "type:data-access",
                "type:util",
              ]
            },
            {
              "sourceTag": "type:feature",
              "onlyDependOnLibsWithTags": [
                "type:data-access",
                "type:feature",
                "type:ui",
                "type:util"
              ]
            },
            {
              "sourceTag": "type:ui",
              "onlyDependOnLibsWithTags": ["type:ui", "type:util"]
            },
            {
              "sourceTag": "type:util",
              "onlyDependOnLibsWithTags": ["type:util"]
            }
          ]
        }
      ]
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
