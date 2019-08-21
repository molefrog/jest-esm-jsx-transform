const babel = require("@babel/core");

module.exports = {
  process(src) {
    const options = {
      babelrc: false,
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-transform-react-jsx"
      ]
    };

    return babel.transform(src, options).code;
  }
};
