import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {

    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),//start point our application
    output: {//name buildFIle;path to build file
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },

    plugins: [
        new HTMLWebpackPlugin({
            //for automatic add Html in build on our template
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(), // for progress build
    ],

    module: {
        //Configure Loader вне javaScript (png,psd, ets)
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

}


export default config;