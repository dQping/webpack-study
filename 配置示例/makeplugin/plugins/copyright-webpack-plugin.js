class CopyrightWebpackPlugin {
  constructor(options) {
    console.log("CopyrightWebpackPlugin 插件被使用了");
    this.options = options;
  }
  apply(compiler) {
    let that = this;
    compiler.hooks.compile.tap("CopyrightWebpackPlugin", compilation => {
      console.log(that.options);
    });

    compiler.hooks.emit.tapAsync(
      "CopyrightWebpackPlugin",
      (compilation, cb) => {
        debugger;
        compilation.assets["copyright.txt"] = {
          source: function() {
            return "copyright by dengqp";
          },
          size: function() {
            return 19;
          }
        };
        cb();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
