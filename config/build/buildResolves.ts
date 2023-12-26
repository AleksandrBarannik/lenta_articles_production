import webpack, { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

// return all resolve
export function buildResolves(options:BuildOptions):ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],

        preferAbsolute: true, // Абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'], // Главный файл для каждого модуля
        alias: {},
    };
}
