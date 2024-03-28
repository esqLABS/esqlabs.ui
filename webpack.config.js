var path = require('path');

module.exports = {
    entry: ["regenerator-runtime/runtime.js", path.join(__dirname, 'srcjs', 'main.jsx')],
    output: {
        path: path.join(__dirname, 'inst/www/esqlabs.ui/main_bundle'),
        filename: 'bundle.js',
        publicPath: '/assets'
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            // For CSS so that import "path/style.css"; works
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // For handling image files like PNGs
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        //loader: 'file-loader',
                        loader: 'file-loader?name=/img/[name].[ext]'
                    },
                ],
            }

        ]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'reactR': 'window.reactR'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
