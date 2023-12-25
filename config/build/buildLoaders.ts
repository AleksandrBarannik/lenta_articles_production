import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

// return all loaders (write all loaders)
export function buildLoaders({isDev}:BuildOptions):webpack.RuleSetRule[]
{
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/, //Исключение
    }


                //For work witch SCSS;CSS
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,

            {
                loader: "css-loader",
                options: {
                    //Для изоляции стилей (генерации уникальных Id при сборке)
                    modules: {

                        auto: (resPath: string)=> Boolean(resPath.includes('.module.')),

                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]'

                    }
                }
            },

            "sass-loader",
        ],
    }

                //for work  PNG;JPEG;Gif files
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

                 //for work SVG files
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }


    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ]
}