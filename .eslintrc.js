// thanks to jrr in https://github.com/facebook/create-react-app/issues/9929 for this solution. It's his "terrible, no good, really bad workaround" to the problem of Create React App breaking compile for eslint errors
const activeConfig = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'warn',
    'no-undef': 'error'
  },
  env: {
    browser: true,
    node: true,
  },
};

const inactiveConfig = {
  ignorePatterns: ["**/*.ts", "**/*.tsx", "./*.js", "config/*.js"],
}

module.exports = process.env.DISABLE_ES_LINT === 'true' ? inactiveConfig : activeConfig;
