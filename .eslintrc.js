module.exports = {
  plugins: ['@hack4impact-uiuc'],
  extends: [
    'plugin:@hack4impact-uiuc/base',
    'plugin:@hack4impact-uiuc/react',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
