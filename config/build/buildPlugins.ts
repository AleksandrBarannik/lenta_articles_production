import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions, BuildPath} from "./types/config";

// return all Plugins for webpack
export function buildPlugins({paths}: BuildOptions):webpack.WebpackPluginInstance[]
{
    return [
        new HTMLWebpackPlugin({
            //for automatic add Html in build on our template
            template: paths.html,
        }),
        new webpack.ProgressPlugin(), // for progress build in %
    ]
}