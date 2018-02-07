var webpack = require('webpack');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'] ,

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/',
    },

    module:{
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }),
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
};
