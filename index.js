
// https://webpack.github.io/docs/how-to-write-a-plugin.html#basic-plugin-architecture

var SkipPlugin = function(options) {
  this.info = options.info
}

SkipPlugin.prototype.apply = function(compiler) {
  if (this.info) {
    console.log(this.info)
  }
}

module.exports = SkipPlugin
