const path = require('path')
const Htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),        
    output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js'
    },
    resolve: {
        extensions:['.js', '.jsx'],
    },
    plugins: [
      new Htmlwebpackplugin({
          template: path.resolve(__dirname, 'public', 'index.html')
      })  
    ],
    module:{
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }    
};
    