const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin/dist/configs/recommended.json')
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript',
  ],
  plugins: [
    'chai-friendly',
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.vsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
      rules: {
        ...typescriptEslintRecommended.rules,
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-ts-ignore': 'off',
        'camelcase': 'error',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': ['error', {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        }],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            overrides: {
              constructors: 'no-public',
              accessors: 'no-public',
            },
          },
        ],
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: { delimiter: 'none', requireLast: false },
          singleline: { delimiter: 'comma', requireLast: false },
        }],
        '@typescript-eslint/no-inferrable-types': ['error', {
          ignoreParameters: true,
        }],
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/typedef': [
          'error',
          {
            arrayDestructuring: true,
            arrowParameter: false,
            memberVariableDeclaration: false,
            objectDestructuring: true,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: false,
          },
        ],
        '@typescript-eslint/unified-signatures': 'error',

      },
    },
  ],
  rules: {
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'chai-friendly/no-unused-expressions': 'error',

    // always require a comma at the end in multiline
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': 'error',
    // when the parameters of a function are on multiple lines, always one argument per line
    'function-paren-newline': ['error', 'multiline'],
    // allow async-await
    'generator-star-spacing': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'key-spacing': ['error', { 'mode': 'strict' }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': ['error', 1],
    'max-len': ['error', 120],
    'no-bitwise': 'error',
    // allow debugger and condole during development
    'no-console': ['test', 'development'].includes(process.env.NODE_ENV) ? 'off' : 'error',
    'no-debugger': ['test', 'development'].includes(process.env.NODE_ENV) ? 'off' : 'error',
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'no-shadow': 'error',
    'no-unused-expressions': 'off',
    'one-var': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
    }],
    // always place a space between a function name and params
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/camelcase': ['error', { properties: 'never' }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }],
    'vue/eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/html-closing-bracket-spacing': ['error'],
    'vue/key-spacing': ['error', { 'mode': 'strict' }],
    'vue/match-component-file-name': ['error', {
      'extensions': ['jsx', '.vue'],
      'shouldMatchCase': true,
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    // 'vue/no-deprecated-scope-attribute': 'error',
    // 'vue/no-empty-pattern': 'error',
    'vue/no-restricted-syntax': 'error',
    // 'vue/object-curly-spacing': ['error', 'always'],
    'vue/prop-name-casing': ['error'],
    'vue/script-indent': ['error', 2],
    // 'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
    'vue/v-on-function-call': 'error',
  },
}
