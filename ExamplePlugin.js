class ExamplePlugin {
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.emit.tapAsync('run', (compilation, callback) => {
      console.log('WEBPACK IS RUNNING')
      //console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);

      callback()
    })
  }
}

module.exports = ExamplePlugin
