import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/html-indent': ['error', 2],
    'complexity': ['error', 10],
    'max-params': ['warn', 3],
    'max-lines': ['warn', { max: 250, skipBlankLines: true, skipComments: true }],
    'max-len': ['warn', { code: 120 }],
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-undef': 'off',
    'semi': ['warn', 'always'],
    'vue/max-lines-per-block': [
      'warn',
      {
        script: 250,
        template: 250,
        skipBlankLines: true,
      },
    ],
    'vue/comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/require-default-prop': 'warn',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/no-v-html': 'off',
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand',
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      },
    ],
    '@typescript-eslint/no-explicit-any': ['warn'],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/attributes-order': 'error',
    'vue/multi-word-component-names': 'warn',
    'vue/no-reserved-component-names': 'error',
  },
});
