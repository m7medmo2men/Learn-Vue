module.exports = {
  root: false,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "linebreak-style": 0,
    "quotes": [2, "double", { "avoidEscape": true }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
