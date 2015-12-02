
Skip Webpack Plugin
----

```bash
npm i --save-dev skip-webpack-plugin
```

You many need to skip a plugin under certain condition, use this:

```coffee
SkipPlugin = require 'skip-webpack-plugin'
```

```coffee
plugins: [
  new webpack.optimize.CommonsChunkPlugin 'vendor', 'vendor.[chunkhash:8].js'
  if info.isMinified
    new webpack.optimize.UglifyJsPlugin sourceMap: false
  else
    new SkipPlugin info: 'UglifyJsPlugin skipped'
  new ExtractTextPlugin 'style.[chunkhash:8].css'
  new webpack.DefinePlugin {"process.env": {NODE_ENV: JSON.stringify('production')}}
]
```

### License

MIT
