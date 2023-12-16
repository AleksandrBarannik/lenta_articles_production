import webpack, {ResolveOptions} from "webpack";

//return all resolve
export function buildResolves():ResolveOptions
{
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}