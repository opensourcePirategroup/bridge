const {resolve} = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: resolve(__dirname, '../build'),
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    },
    mode: "production",
}