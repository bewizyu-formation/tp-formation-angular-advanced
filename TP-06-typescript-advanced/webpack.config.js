module.exports = {
    // TODO : add entry ts file 
    entry: './src/app.ts',
    // TODO : add output js file 
    output: {
        filename: 'app.js',
        path: __dirname + './dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'awesome-typescript-loader' }
        ]
    },
    // TODO set devServer port for live reload
    devServer: {
        port: 3000
    }
};