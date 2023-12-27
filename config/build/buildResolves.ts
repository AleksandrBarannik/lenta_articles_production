import webpack, { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

// return all resolve
export function buildResolves(options:BuildOptions):ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],

        preferAbsolute: true, // Absolute Path prefer(приоритет)
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'], // public MainFiles for each modules
        alias: {},
    };
}
