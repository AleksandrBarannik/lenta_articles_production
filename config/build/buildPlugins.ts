import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions, BuildPath} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// return all Plugins for webpack
export function buildPlugins({paths}: BuildOptions):webpack.WebpackPluginInstance[]
{
    return [
        new HTMLWebpackPlugin({
            //for automatic add Html in build on our template
            template: paths.html,
        }),
        new webpack.ProgressPlugin(), // for progress build in %

        new  MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',//for async
        })


    ]
}