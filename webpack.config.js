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
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
            }
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.js',
        ],
    },
};