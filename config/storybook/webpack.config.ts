import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPath } from '../build/types/config';

// Config webpack for storyBook
export default ({ config }:{config:webpack.Configuration}) => {
    // override config  for storyBook
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),

    };
    config.resolve.modules.push(paths.src);// Для абсолютного пути
    config.resolve.extensions.push('.ts', 'tsx');

    // for fix error SVG for storyBook
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /|.svg$/i };
        }
        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    //
    // for fix error Css for storyBook
    config.module.rules.push(buildCssLoader(true));
    return config;
};
