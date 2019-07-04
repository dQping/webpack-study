// 这里不能写成一个箭头函数，因为 webpack 在调用 loader 的时候，会对 this 指向进行变更
const loaderUtils = require("loader-utils");

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace("hello", options.name);
    callback(null, result);
  }, 5000);
};
