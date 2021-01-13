module.exports = {
    // TODO : add entry ts file 

    // TODO : add output js file 


    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'awesome-typescript-loader' }
        ]
    },
    // TODO set devServer port for live reload

};