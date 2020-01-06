module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'error',
    'react/no-unknown-property': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'warn',
    'react/state-in-constructor': ['warn', 'never'],
    'react/style-prop-object': 'error',
    'react/jsx-key': 'warn',
    'react/no-array-index-key': 'warn',
    'react/jsx-no-bind': [
      'warn',
      {
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-pascal-case': 'warn',
  },
}
