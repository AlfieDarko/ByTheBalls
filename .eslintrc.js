module.exports = {
  extends: [
    'last',
    'airbnb',
    'last',
    'prettier/react',
    'plugin:react/recommended',
  ],
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': 'error',
    'require-yield': 'off',
    'react/display-name': [
      'off',
      {
        ignoreTranspilerName: false,
      },
    ],
    'react/jsx-no-duplicate-props': [
      2,
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-no-undef': 2,
    'react/sort-prop-types': [
      2,
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': [
      'error',
      {
        component: false,
        html: false,
      },
    ],
    'no-useless-escape': 'off',
  },
};
