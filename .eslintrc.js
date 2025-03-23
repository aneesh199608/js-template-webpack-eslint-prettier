module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base', // Use Airbnb's base JS style guide
    'prettier', // Disable ESLint rules that might conflict with Prettier
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Any custom rule overrides can go here
    'no-console': 'off', // Since you're using console.log in your code
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['webpack.*js', 'src/**/*.test.js'],
      },
    ],
  },
};
