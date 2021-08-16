module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
             test: /\.svg$/,
             loader: 'raw-loader'
        ]
    }
}