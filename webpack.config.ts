import path from 'path'
import { VueLoaderPlugin }  from 'vue-loader'

export default {
  mode: 'development',

  entry: {
    index: path.join(__dirname, 'src', 'index.ts')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.pug/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  resolve: {
    extensions: ['.vue', '.ts', '.js'] // .js が無いと「Module not found: Error: Can't resolve './listToStyles'」エラー
  }
}
