const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.js',
        ],
    },
};