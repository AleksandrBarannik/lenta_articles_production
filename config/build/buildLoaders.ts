import webpack from "webpack";

// return all loaders (write all loaders)
export function buildLoaders():webpack.RuleSetRule[]
{
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
    }


    return [
        typescriptLoader,cssLoader

    ]
}