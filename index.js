module.exports = {
  "extends": "airbnb-base",
  "env": {
    "mocha": true,
    "node": true
  },
  "rules": {
    "import/no-extraneous-dependencies" : "off",
    "func-names": "off",
    "comma-dangle": "off",
    "no-shadow": "off",
    "no-param-reassign": "off",
    "require-yield": "off",
    "max-len": [2, {"code": 150, "ignoreUrls": true}]
  }
};
