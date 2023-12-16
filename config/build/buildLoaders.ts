import webpack from "webpack";

// return all loaders (write all loaders)
export function buildLoaders():webpack.RuleSetRule[]
{
    const typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        typescriptLoader,

    ]
}