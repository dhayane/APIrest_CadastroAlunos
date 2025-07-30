// eslint.config.js
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
	{
		rules: {
			semi: "error",
			"prefer-const": "error",
      "no-console": "off",
      "class-methods-use-this": "off"
		},
	},
]);

