import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

// return all loaders (write all loaders)
export function buildLoaders({ isDev }:BuildOptions):webpack.RuleSetRule[] {
    // for work SVG files
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                // "plugins": [
                //     [
                //         "i18next-extract",
                //         {
                //             locales: ['ru', 'en'],
                //             keyAsDefaultValue: true
                //         }
                //     ],
                // ]
            },
        },
    };

    // For work witch SCSS;CSS
    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/, // Исключение
    };

    // for work  PNG;JPEG;Gif files
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
