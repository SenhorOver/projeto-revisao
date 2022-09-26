const path = require('path') //CommonJS

module.exports = {
    mode: 'development',
    entry: './src/public/main.js',
    output: {
        path: path.resolve(__dirname, 'src', 'public', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /wp\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
            "style-loader",
            "css-loader",
            "sass-loader",
            ],
        }]
    },
    devtool: 'source-map',
} 