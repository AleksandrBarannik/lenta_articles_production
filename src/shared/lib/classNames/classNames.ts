type Mods = Record<string, boolean | string>

// Для удобной комбанации классов по какому-то условию
// (Аналог библиотеки React classNames)
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),

    ]
        .join(' ');
}
