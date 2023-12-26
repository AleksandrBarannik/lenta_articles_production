import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions, BuildPath } from './types/config';

// return all Plugins for webpack
export function buildPlugins({ paths, isDev }: BuildOptions):webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            // for automatic add Html in build on our template
            template: paths.html,
        }),
        new webpack.ProgressPlugin(), // for progress build in %

        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css', // for async
        }),

        new webpack.DefinePlugin({
            // for передачи global variables in app
            // For TS __IS_DEV__ create in app/types/global.ts
            __IS_DEV__: JSON.stringify(isDev),
        }),

        // for update App without update Page (auto)
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshPlugin(),

    ];
}
