module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    env: {
          node: true
        },
    rules: {
            '@typescript-eslint/no-var-requires': 0,
            '@typescript-eslint/no-empty-function': "off",
            '@typescript-eslint/no-explicit-any': "off"
          }
  };