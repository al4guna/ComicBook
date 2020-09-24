const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const jsRule = {
    test: /\.js$/,
    exclude: '/node_modules/',
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
    }
}


module.exports = {
    mode: 'development',
    devServer: {
		historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist')
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [jsRule]
    }, 
    plugins : [
        new HtmlWebpackPlugin({
            title: 'comic',
            template: './src/index.html'
        })
    ]
}
