module.exports = {
    "parserOptions": {
      "ecmaVersion": "6",
      "sourceType": "module"
    },
    "env": {
      "browser": true,
      "es6": true
    },
    "extends": ["eslint:recommended",
                "plugin:react/recommended"],
    "rules": {
      "no-console" : 0,
      "no-multiple-empty-lines": "warn",
      "no-var": "error",
      "prefer-const": "error"
    }
  };
  